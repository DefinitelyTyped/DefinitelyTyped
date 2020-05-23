# EDITING GUIDE

## sections

the typings in `index.d.ts` are separated into:
- **exports**: at the top, anything exported will have autocomplete when importing the module
  - actual exports determined by index.js module.exports
  - autocompleting of exports controlled by index.d.ts export
- **enums**: enumerable properties
- **options/configs** (objects)
  - objects that are used tangentially (not a top-level class)
- **interfaces**: class type defs written as interfaces
  - **XBasicProperties interface**: contains properties used in class and update methods related to X class
  - **X interface**: contains non-basic / readonly properties and method typings of X class
   - extends the related XBasicProperties to inherit them

## adding properties to a class

when adding new properties to a class interface [X]:
- add JSDoc descriptions using `@description`
- if it is a "basic property" (meaning it can be updated through a related update() method)
  - it goes in the XBasicProperties interface
- if it is a "non-basic property" (meaning it should not be an option in a related update() method)
  - it goes in the X interface
  - add the readonly modifier before, readonly thisPropIsReadOnly: PropType

## adding methods to a class
when adding new methods
- add JSDoc tags for description and params:
  - `@description` description here (- can be used for bullet points)
  - `@param name` description of param here
  - `@example` example of usage if needed
- **ALL PARAMS AND RETURNS MUST BE TYPED**
  - `(paramName: ParamType, ...)`
  - if optional `(paramName?: ParamType, ...)`
  - return type after closing paren, `method(): ReturnType`
- **if it is synchronous put it in the synchronous section**
  - if it doesnt return anyting use void as ReturnType, `methodName(): void;`
- **if it is asychronous put it in the asynchronous section**
  - return types must use Promise<T> to indicate async, `methodName(): Promise<ReturnTypeName>`
  - if it doesnt return anything use Promise<void> as ReturnType, `methodName(): Promise<void>`

## extra bits

- would be helpful to include official google sheets API doc links for unintuitive objects / enums
  - use the "@see URL" JSDoc tag
