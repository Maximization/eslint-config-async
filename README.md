# eslint-config-async

A shareable ESLint config for writing better asynchronous code.

Find an overview of what rules are enabled, and why, in this article:

📚 [**14 Linting Rules To Help You Write Asynchronous Code in JavaScript**](https://maximorlov.com/linting-rules-for-asynchronous-code-in-javascript/)

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
