# @types/frappe

TypeScript type definitions for [Frappe Framework](https://frappeframework.com/) client-side APIs.

This package provides typings for the global `frappe` object, including `frappe.ui.form.on` and related modules.
It is intended to improve the developer experience when writing Frappe client scripts and custom apps in TypeScript.

## ⚠️ Disclaimer

This is not an official distribution of type definitions from the Frappe team.

These type definitions are primarily **generated with LLM** from:

- Frappe documentation
- Frappe source code
- Known usage patterns in apps

They **may not always be 100% up to date** with the latest Frappe release.

Please check the `FRAPPE_VERSION` section below to see which version this package currently targets.

Contributions and corrections are welcome!

## Installation

```bash
npm install --save-dev @types/frappe
```

or with yarn:

```bash
yarn add -D @types/frappe
```

## Usage

In your project’s `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["frappe"]
  }
}
```

Then in your client scripts:

```ts
frappe.ui.form.on('Purchase Order', {
  refresh(frm) {
    console.log('Hello from TypeScript!')
  },
})
```

You can also extend the `DocTypeMap` interface to type your own doctypes:

```ts
declare global {
  interface DocTypeMap {
    'Purchase Order': {
      name: string
      transaction_date: string
      // your custom fields here...
    }
  }
}
```

The frappe API calls are also typed and supported! Similar to DocTypeMap interface, you can extend the `FrappeWhitelistedMethods` interface to type your own API calls:

```ts
declare global {
  interface FrappeWhitelistedMethods {
    'my_app.my_app.api.my_method': {
      arg1: string
      arg2: number
      // your custom fields here...
    }
  }
}
```

## Generated Types

All this manual work of typing your custom DocTypes is tiresome. Fortunately, you can use the [frappe_types](https://github.com/bawahakim/frappe-types) package to generate the types for you! It is meant to work hand in hand with `@frappe/types`, so just generate your types and include them in your `tsconfig.json` for full frappe TypeScript inference!

## FRAPPE_VERSION

These definitions were generated for:

**Frappe Framework version:** `v15.18.0`

## Related packages

- [frappe_types](https://github.com/bawahakim/frappe-types): Generate type definitions for Frappe doctypes and API calls
- [frappe_ts](https://github.com/bawahakim/frappe-ts): Initialize a Frappe app with TypeScript support

## Contributing

PRs are welcome!
If you notice missing types or mismatches with newer versions of Frappe:

1. File an issue
2. Or submit a pull request

## License

MIT
