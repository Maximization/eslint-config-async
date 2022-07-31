# eslint-config-async

A shareable ESLint config for writing better asynchronous code.

Find an overview of what rules are enabled, and why, in this article:

📚 [**14 Linting Rules To Help You Write Asynchronous Code in JavaScript**](https://maximorlov.com/linting-rules-for-asynchronous-code-in-javascript/)

## Table of contents

- [Installation & usage](#installation--usage)
- [Migrating from v1 to v2](#migrating-from-v1-to-v2)

## Installation & usage

### Base rules
Install this package and ESLint:

```shell
npm install --save-dev eslint eslint-config-async
```

In your `.eslintrc` configuration file:

```js
module.exports = {
  extends: [
    'async'
  ],
};
```

### Base rules + Node.js specific rules (recommended for non-TypeScript users)
Install this package and its peer dependencies:

```shell
npm install --save-dev eslint eslint-config-async eslint-plugin-node
```

In your `.eslintrc` configuration file:

```js
module.exports = {
  plugins: [
    'eslint-plugin-node'
  ],
  extends: [
    'async',
    'async/node'
  ],
};
```

### Base rules + Node.js specific rules + TypeScript rules (recommended for TypeScript users)
Install this package and its peer dependencies:

```shell
npm install --save-dev eslint eslint-config-async eslint-plugin-node typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

In your `.eslintrc` configuration file:

```js
module.exports = {
  plugins: [
    'eslint-plugin-node',
    '@typescript-eslint'
  ],
  extends: [
    'async',
    'async/node',
    'async/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  }
};
```

## Migrating from v1 to v2

Version 2 adds TypeScript specific rules and exports multiple configs, namely:

- Base rules (`eslint-config-async`)
- Node.js specific rules (`eslint-config-async/node`)
- TypeScript rules (`eslint-config-async/typescript`)

In version 1, the base and Node.js specific rules were included by default. In version 2, you need to explicitly add the Node.js rules:

```diff
module.exports = {
  extends: [
-   'eslint-config-async'
+   'eslint-config-async',
+   'eslint-config-async/node'
  ],
}
```

Or using the short syntax:

```diff
module.exports = {
  extends: [
-   'eslint-config-async'
+   'async',
+   'async/node'
  ],
}
```

If you added the TypeScript specific rules manually in your project, you can remove them and replace them with this config:

```diff
module.exports = {
  extends: [
    'async',
    'async/node',
+   'async/typescript'
  ],
  rules: {
-   "@typescript-eslint/await-thenable": "error",
-   "@typescript-eslint/no-floating-promises": "error",
-   "@typescript-eslint/no-misused-promises": "error",
-   "@typescript-eslint/promise-function-async": "error",
  }
}
```