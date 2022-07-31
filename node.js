module.exports = {
  rules: {
    // Node.js rules
    "node/handle-callback-err": ["error", "^(e|err|error)$"],
    "node/no-callback-literal": "error",
    "node/no-sync": "error",
  },
};
