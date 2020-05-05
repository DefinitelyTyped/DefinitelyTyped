Bindings for the Akamai [EdgeWorker API]. This allows you to write
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
/// <reference types="akamai-edgeworkers"/>

export function onClientRequest(request: EW.IngressClientRequest) {}
export function onOriginRequest(request: EW.IngressOriginRequest) {}
export function onOriginResponse(request: EW.EgressOriginRequest, response: EW.EgressOriginResponse) {}
export function onClientResponse(request: EW.EgressClientRequest, response: EW.EgressClientResponse) {}
```

The triple-slashed first line references this package and pulls `EW` into your
namespace.

## Using Built-In Modules

Bindings are available for the built-in `cookies` and `url-search-params`
modules. Once you've added the triple-slash reference to `akamai-edgeworkers`
you can import them normally:

```typescript
/// <reference types="akamai-edgeworkers"/>

import { Cookies } from 'cookies';

function onClientRequest(request: EW.MutableRequest & EW.HasRespondWith) {
    const cookie = new Cookies(request.getHeader('cookies') || undefined);
    //...
}
```

[EdgeWorker API]: https://learn.akamai.com/en-us/webhelp/edgeworkers/edgeworkers-user-guide/GUID-14077BCA-0D9F-422C-8273-2F3E37339D5B.html
