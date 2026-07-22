The types from the `@types/handlebars-helpers` library are terrible.

Most of this generated with:

```bash
npx -p typescript tsc node_modules/handlebars-helpers/lib/*.js --declaration --allowJs --emitDeclarationOnly --outDir types/handlebars-helpers/lib --ignoreConfig
```
