# eslint-config-async

A shareable ESLint config for writing better asynchronous code.

Find an overview of what rules are enabled, and why, in this article:

📚 [**14 Linting Rules To Help You Write Asynchronous Code in JavaScript**](https://maximorlov.com/linting-rules-for-asynchronous-code-in-javascript/)

## Table of contents

- [Table of contents](#table-of-contents)
- [Requirements](#requirements)
- [Installation \& usage](#installation--usage)
  - [Non-TypeScript users](#non-typescript-users)
  - [TypeScript users](#typescript-users)
- [Migrating from v2 to v3](#migrating-from-v2-to-v3)
- [Migrating from v1 to v2](#migrating-from-v1-to-v2)

## Requirements

- ESLint v9
- Node.js ^18.18.0, ^20.9.0, or >=21.1.0 (set by ESLint v9)

If you're using ESLint v8, you should use v2 of this library. [Installation & usage for eslint-config-async v2](https://github.com/Maximization/eslint-config-async/blob/v2.0.3/README.md).

## Installation & usage

### Non-TypeScript users
Install this package and ESLint:

```shell
npm install --save-dev eslint eslint-config-async
```

In your `eslint.config.js` configuration file:

```js
const asyncConfig = require("eslint-config-async");

module.exports = [
  ...asyncConfig.base, // enable base rules
  ...asyncConfig.node, // enable Node.js specific rules (recommended)
];
```

### TypeScript users
Install this package and its peer dependencies:

```shell
npm install --save-dev eslint eslint-config-async typescript typescript-eslint
```

In your `eslint.config.js` configuration file:

```js
const tseslint = require("typescript-eslint");
const asyncConfig = require("eslint-config-async");

module.exports = [
  // One of tseslint configs must be enabled
  // Either the base config
  tseslint.configs.base, // adds the parser only, without any rules
  // or
  ...tseslint.configs.recommended, // includes base + a list of recommended rules
  // ..and others

  ...asyncConfig.base, // enable base rules
  ...asyncConfig.node, // enable Node.js specific rules (recommended)
  ...asyncConfig.typescript, // enable TypeScript specific rules
  {
    files: ["*.ts"], // tell ESLint to include TypeScript files
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
```

## Migrating from v2 to v3

Version 3 upgrades ESLint to v9. ESLint uses a [flat configuration file](https://eslint.org/docs/latest/use/configure/configuration-files). `.eslintrc.*` has been deprecated and you should rename it to `eslint.config.js` (or .cjs, .mjs):

```diff
- .eslintrc
+ eslint.config.js
```

In your `eslint.config.js` file, make the following changes:

```diff
- module.exports = {
-   plugins: [
-     'eslint-plugin-node'
-   ],
-   extends: [
-     'async',
-     'async/node'
-   ],
- };
+ const asyncConfig = require("eslint-config-async");
+
+ module.exports = [
+   ...asyncConfig.base, // enable base rules
+   ...asyncConfig.node, // enable Node.js specific rules (recommended)
+ ];
```

`eslint-plugin-node` is no longer maintained and has been replaced with its fork, `eslint-plugin-n`. `eslint-plugin-n` is not a peer dependency and is included with this library, therefore you no longer need to install it separately:

```shell
npm remove --save-dev eslint-plugin-node
```

For TypeScript users, change the contents of `eslint.config.js` file as follows:

```diff
- module.exports = {
-   plugins: [
-     'eslint-plugin-node',
-     '@typescript-eslint'
-   ],
-   extends: [
-     'async',
-     'async/node',
-     'async/typescript'
-   ],
-   parser: '@typescript-eslint/parser',
-   parserOptions: {
-     tsconfigRootDir: __dirname,
-     project: ['./tsconfig.json'],
-   }
- };

+ const tseslint = require("typescript-eslint");
+ const asyncConfig = require("eslint-config-async");
+
+ module.exports = [
+   tseslint.configs.base,
+   ...asyncConfig.base, // enable base rules
+   ...asyncConfig.node, // enable Node.js specific rules (recommended)
+   ...asyncConfig.typescript, // enable TypeScript specific rules
+   {
+     files: ["*.ts"], // tell ESLint to include TypeScript files
+     languageOptions: {
+       parserOptions: {
+         projectService: true,
+         tsconfigRootDir: __dirname,
+       },
+     },
+   },
+ ];
```

Replace `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` with `typescript-eslint`:

```shell
npm remove @typescript-eslint/parser @typescript-eslint/eslint-plugin && npm install --save-dev typescript-eslint
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
