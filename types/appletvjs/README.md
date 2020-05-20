# AppleTVJS Definitions Usage Notes

## Referencing AppleTVJS definition files in your code

To do that, simply add `` at the top of your code.

This will allow you to have intellisense in your AppleTVJS typescript code.

## Global objects

AppleTVJS has a global App object instance that is your entry point into the javascript app. There is also a Device and navigationDocument object that is in the global context. To access any of these simply use them in your TypeScript code as so. They have aliases in the type definition file for your convenience.

## The AppleTVJS namespace

All non global objects have interfaces in the AppleTVJS type definition file are contained in the AppleTVJS namespace.

To use them simple provide the namespace like so:

```ts
var keyboard: AppleTVJS.Keyboard = textfield.getFeature('Keyboard');
```
