# generate-docs

## Instructions

Run `VERSION=<NODE_VERSION> npm run generate-docs --prefix scripts/generate-docs` where as `NODE_VERSION` MUST be a version listed on [here](https://nodejs.org/dist/) without any prefix eg. `v`.

The script will download the specified docs and will update docs and *replace any manually created ones* unless the EXPLICITLY contain the `@keepdoc` comment tag.

## Maintenance

The nodejs json documentation should not be considered stable and may break between minor updates (and potentially even patches).
The `node-doc-processing.ts` file contains the `fixupModuleStructure` function which performs structurable changes on the received
JSON in order to make it structurally sound and roughly match the type definition structures.

## What does this do?
- Pulls docs from nodejs.org eg. https://nodejs.org/dist/latest-v16.x/docs/api/all.json.
- Pre-processes converts html section to markdown and postprocesses html docs
- Matches docs w/ appropriate AST nodes and inserts appropriate tags/docs replacing the old doc (unless the old doc contains `@keepdoc`!

## Supports
- classes
- function declarations `function fn() { ... }`
- methods (instance and static, interface methods)
- module declarations (`declare module 'name' { ... }`)
- properties (classes and properties)
- exported variables
- `export = ` style declarations (assuming the class names still match what is documented)
- tags
  - `@param` Only when a description is given (functions and methods only)
  - `@return` Only when a description is given (functions and methods only)
  - `@experimental` when `stability` = 1, includes stability text
  - `@deprecated` including when it was deprecated and deprecation text
  - `@since` when the API was introduced
  - `@link` within the same module (cross module not supported by VSCode, also a lot of work)
  - `@keepdoc` will prevent the generator from overriding the doc string

## Todo
 - Change history incl. PR links?
 - Global variables
 - Reverse verification eg. check if AST doc has no AST node.
 - Ensure `@param` <> signature param name consistency
 - Some methods/classes are not correctly mapped

## Not supported
- interfaces (that do not have the same name as documented classes)
- types
- `<table>` support

## Notes
For formatting reasons (mostly to make the linter happy), we're using prettier to do the formatting for us, this does not apply to JSDoc (which had to be handled separately), this means that quotes are consolidated to `SINGLE QUOTES`.
