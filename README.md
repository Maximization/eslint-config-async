# eslint-config-async

A shareable ESLint config for writing better asynchronous code.

Find an overview of what rules are enabled and why in this article:

📚 [**14 Linting Rules To Help You Write Asynchronous Code in JavaScript**](https://maximorlov.com/linting-rules-for-asynchronous-code-in-javascript/)

## Installation & usage
Install this package and its peer dependencies:

```shell
npm install --save-dev eslint eslint-config-async eslint-plugin-node
```

In your `.eslintrc` configuration file:

```js
module.exports = {
  plugins: [
    'eslint-plugin-node',
  ],
  extends: [
    'eslint-config-async'
  ],
};
```
