const nodePlugin = require("eslint-plugin-n");

module.exports = {
  // Base rules
  base: [
    {
      rules: {
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-promise-executor-return": "error",
        "require-atomic-updates": "error",
        "max-nested-callbacks": ["error", 3],
        // Deprecated: https://eslint.org/docs/latest/rules/no-return-await
        // "no-return-await": "error",
        "prefer-promise-reject-errors": "error",
      },
    },
  ],

  // Node.js rules
  node: [
    {
      plugins: { n: nodePlugin },
      rules: {
        "n/handle-callback-err": ["error", "^(e|err|error)$"],
        "n/no-callback-literal": "error",
        "n/no-sync": "error",
      },
    },
  ],

  // TypeScript rules
  typescript: [
    {
      rules: {
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/promise-function-async": "error",
      },
    },
  ],
};
