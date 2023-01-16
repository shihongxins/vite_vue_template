module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-essential", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-var": "error",
    "no-debugger": "warn",
    semi: ["error", "always"],
    "vue/multi-word-component-names": "off",
    "vue/no-deprecated-v-bind-sync": "warn",
    "vue/no-deprecated-v-on-native-modifier": "warn",
  },
};
