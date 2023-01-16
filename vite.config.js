import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import stylelintPlugin from "vite-plugin-stylelint";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log("vite env", mode, env.VITE_SERVER_ORIGIN, env.VITE_SERVER_BASE_URL);
  return {
    plugins: [
      vue(),
      eslintPlugin({
        include: ["src/**/*.{vue,js,ts,jsx,tsx}"],
      }),
      stylelintPlugin(),
    ],
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "/src/assets/styles/global.scss";`,
      },
      postcss: "postcss.config.cjs",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      proxy: {
        [env.VITE_SERVER_BASE_URL]: {
          target: env.VITE_SERVER_ORIGIN,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    define: {
      __APP_ENV__: {
        VITE_SERVER_ORIGIN: env.VITE_SERVER_ORIGIN,
        VITE_SERVER_RESOURCE_ORIGIN: mode === "development" ? env.VITE_SERVER_ORIGIN : "",
        VITE_SERVER_BASE_URL: env.VITE_SERVER_BASE_URL,
      },
    },
  };
});
