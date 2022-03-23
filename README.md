# eslint-config-async

A shareable ESLint config for writing better asynchronous code.

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
