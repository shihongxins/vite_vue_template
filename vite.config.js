import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import eslintPlugin from "vite-plugin-eslint";
import stylelintPlugin from "vite-plugin-stylelint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    eslintPlugin({
      include: ["src/**/*.{vue,js,ts,jsc,tsc}"],
    }),
    stylelintPlugin(),
  ],
  preprocessorOptions: {
    scss: {
      // additionalData: `@import "/src/assets/styles/global.scss";`,
    },
    postcss: "postcss.config.cjs",
  },
});
