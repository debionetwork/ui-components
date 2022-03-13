module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    "new-cap": 0,
    semi: 0,
    "arrow-spacing": "error",
    "comma-dangle": ["error", "never"],
    indent: ["error", 2],
    camelcase: [
      "error",
      { properties: "never", ignoreDestructuring: true }
    ],
    "eol-last": ["error", "always"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}
