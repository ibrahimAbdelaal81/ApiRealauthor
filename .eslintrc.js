module.exports = {
  root: true,
  parserOptions: {
    sourceType: "script",
  },
  extends: ["standard", "prettier", "prettier/standard"],
  plugins: ["import", "node", "prettier", "promise", "standard"],
  rules: {
    "import/no-relative-parent-imports": "off",
    "import/order": "off",
  },
};
