TypeScript types for the Akamai [EdgeWorker API]. This allows you to write 
your EdgeWorkers in TypeScript.  

Types are available for the `Request` and `Response` objects, as well as the 
built-in modules.   

# User Guide

EdgeWorkers are written in ECMAScript6, so you need to set your 
`tsconfig.json` to use `es6` as the compilation target and module 
code generator:

```json5
{
    "compilerOptions": {
        "module": "es6",
        "target": "es6",
 //...
    }
}
```    

## Using the `Request` and `Response` Objects

The predefined EdgeWorker callbacks take Request and Response objects as 
arguments. After you have installed this package, you can create a `main.ts`
with the following stubs:

```typescript
/// <reference types="akamai-edgeworkers-tsc"/>

export function onClientRequest(request : EW.MutableRequest & EW.HasRespondWith){}
export function onOriginRequest(request : EW.MutableRequest) {}
export function onOriginResponse(request : EW.ImmutableRequest & EW.HasRespondWith, response : EW.Response) {}
export function onClientResponse(request : EW.ImmutableRequest, response : EW.Response) {} 
```

The triple-slashed first line references this package and pulls `EW` into your 
namespace. 

## Using Built-In Modules

The built-in modules have non-relative imports, so they require changes to 
your `tsconfig.json`. Adding the cookie module to the paths in the compiler 
options will enable your IDE to find the appropriate definition and the 
compiler to emit a functional import:

```json5
{
    "compilerOptions": {
//...
        "baseUrl": ".",
        "paths": {
            "cookies" : [
                "node_modules/akamai-edgeworkers-tsc/cookies"
            ]
        }
    }
}
```

[EdgeWorker API]: https://developer.akamai.com/api/web_performance/edgeworkers/v1.html