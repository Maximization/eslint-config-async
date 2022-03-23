module.exports = {
  rules: {
    // Base rules
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-promise-executor-return": "error",
    "require-atomic-updates": "error",
    "max-nested-callbacks": ["error", 3],
    "no-return-await": "error",
    "prefer-promise-reject-errors": "error",

    // Node.js rules
    "node/handle-callback-err": ["error", "^(e|err|error)$"],
    "node/no-callback-literal": "error",
    "node/no-sync": "error",
  },
};
