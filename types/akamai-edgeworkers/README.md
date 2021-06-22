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

The [predefined EdgeWorker callbacks] take Request and Response objects as
arguments. After you have installed this package, you can create a `main.ts`
with the following stubs:

```typescript
/// <reference types="akamai-edgeworkers"/>

export function onClientRequest(request: EW.IngressClientRequest) {}
export function onOriginRequest(request: EW.IngressOriginRequest) {}
export function responseProvider(request: EW.ResponseProviderRequest) {}
export function onOriginResponse(request: EW.EgressOriginRequest, response: EW.EgressOriginResponse) {}
export function onClientResponse(request: EW.EgressClientRequest, response: EW.EgressClientResponse) {}
```

The triple-slashed first line references this package and pulls `EW` into your
namespace.

## Using Built-In Modules

TypeScript Bindings are available for [built-in modules], including:
* `cookies` - Parsing and manipulation of cookie-related headers
* `create-response` - Helper for the `reponseProvider()` callback
* `http-request` - Fetch remote resources via HTTP and HTTPS
* `log` - Console-style logging
* `streams` - Compatibility with the WHATWG Streams standard
* `text-encode-transform` - Compatibility with the WHATWG Encoding standard
* `url-search-params` - Parsing query parameters

Once you've added the triple-slash reference to `akamai-edgeworkers`
you can import them normally:

```typescript
/// <reference types="akamai-edgeworkers"/>

import { Cookies } from 'cookies';

function onClientRequest(request: EW.IngressClientRequest) {
    const cookie = new Cookies(request.getHeader('cookies') || undefined);
    //...
}
```

[EdgeWorker API]: https://learn.akamai.com/en-us/webhelp/edgeworkers/edgeworkers-user-guide/GUID-14077BCA-0D9F-422C-8273-2F3E37339D5B.html
[predefined EdgeWorker callbacks]: https://developer.akamai.com/api/web_performance/edgeworkers/v1.html#edgeworkersbundleformat
[built-in modules]: https://learn.akamai.com/en-us/webhelp/edgeworkers/edgeworkers-user-guide/GUID-96AA837C-30A3-4825-9756-DE5C7C78D82C.html