# @types/fbt

Type definitions for the [fbt](https://www.npmjs.com/package/@types/fbt) to your project.

## Installation

```bash
npm install --save @types/fbt
```

## Using

### Typescript `4.2+`

TypeScript 4.2 supports XML namespaces in JSX ([#11833](https://github.com/microsoft/TypeScript/issues/11833)) and you can easily use `<ftb:param>{...}</ftb:param>` without any issues:

Example:

```tsx
// App.tsx
import React from "react";
import fbt from "fbt";

const name = "Mary";

function App() {
  return (
    <fbt desc="param example">
      Hello,
      <fbt:param name="name">{name}</fbt:param>.
    </fbt>
  );
}
```

### Typescript `3.9 − 4.2`

Older versions of typescript which don't have support XML namespaces in JSX, will throw lots of errors:

```bash
<fbt:param name="name">
  {name}
</fbt:param>

Error:(6, 28) TS1003: Identifier expected.
Error:(6, 64) TS1005: '>' expected.
Error:(6, 70) TS1005: ',' expected.
Error:(7,  3) TS1109: Expression expected.
Error:(8,  1) TS1109: Expression expected.
```

So, one way it to replace xml syntax with camelcase variants of components: [babel-plugin-fbt/FbtUtil.js#L119-L124](https://github.com/facebook/fbt/blob/ec2a5ee7c471dee9030e04897fd4c51a15b29c07/packages/babel-plugin-fbt/src/FbtUtil.js#L119-L124)

```tsx
<fbt:enum/>        <FbtEnum/>
<fbt:param/>       <FbtParam/>
<fbt:plural/>      <FbtPlural/>
<fbt:pronoun/>     <FbtPronoun/>
<fbt:name/>        <FbtName/>
<fbt:same-param/>  <FbtSameParam/>
```

Example:

```tsx
// App.tsx
import React from "react";
import { fbt, FbtParam } from "fbt";

const name = "Mary";

function App() {
  return (
    <fbt desc="param example">
      Hello,
      <FbtParam name="name">{name}</FbtParam>.
    </fbt>
  );
}
```

## Known issues

`@babel/preset-typescript` will remove `fbt` import as unused that bring to next error:

```bash
Error: App.tsx: Line 8 Column 5: fbt is not bound. Did you forget to require('fbt')?
```

What happened under hood:

- In JSX `<fbt/>` => in just a function call `React.createElement("fbt")`
- So, when `@babel/plugin-transform-typescript` check all imports and find that a `fbt` variable never used => remove import (see: [babel-plugin-transform-typescript/src/index.ts](https://github.com/babel/babel/blob/0ca601a86f9c3bf041bf6897d61324ddcc9553aa/packages/babel-plugin-transform-typescript/src/index.ts#L256-L269))
- After that `babel-plugin-fbt` try transform all `<fbt/>` elements to `fbt._(...)` and as import was removed on previous step it case an error above

How fix this problem:

1. Change removing imports behavior

When enable [`onlyRemoveTypeImports`](https://babeljs.io/docs/en/babel-preset-typescript#onlyremovetypeimports) the transform will only remove [type-only imports](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-exports) instead of removing all unused imports

```js
// babel.config.js

module.exports = {
  presets: [["@babel/preset-typescript", { onlyRemoveTypeImports: true }]],
  plugins,
};
```

2. Modify babel plugin

Using a [`patch-package`](https://www.npmjs.com/package/patch-package) you can add logic to ignore removing fbt import

- Install `yarn add -D patch-package`
- Open file `./node_modules/@babel/plugin-transform-typescript/lib/index.js`
- Find `isImportTypeOnly` function and add the next lines before `if(binding.identifier.name !== pragmaImportName ...` block

  ```diff
  +if (binding.identifier.name === 'fbt') {
  +  return false;
  +}

  if (binding.identifier.name !== pragmaImportName && binding.identifier.name !== pragmaFragImportName) {
    return true;
  }
  ```

- Create a patch `npx patch-package @babel/plugin-transform-typescript`
- Add `postinstall` script in `package.json`
  ```diff
  "scripts": {
  +  "postinstall": "patch-package"
  }
  ```
- Commit changed & new files
