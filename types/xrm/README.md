# Xrm types

TypeScript definitions for the client API in Microsoft Dataverse and Power Apps
model-driven apps, including Dynamics 365 Customer Engagement. The `Xrm` namespace
covers forms, controls, data, navigation, the Web API, and application context.

Use these definitions when writing scripts that run in a model-driven app. See
Microsoft's [Client API reference](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference)
for the available APIs and their runtime behavior.

## Getting started

Install the definitions in your TypeScript project:

```sh
npm install --save-dev @types/xrm
```

The definitions provide the global `Xrm` and `XrmEnum` namespaces. For example, a
form event handler can use the execution context to access the current form:

```ts
function onLoad(executionContext: Xrm.Events.EventContext) {
    const formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification("Welcome", "INFO", "welcome");
}
```

If your `tsconfig.json` restricts `compilerOptions.types`, include `"xrm"` in that
list.

## Web API requests

### Execute a request

Pass a request object with a `getMetadata()` method to `execute`. For example,
this calls the built-in `WhoAmI` function:

```ts
const request = {
    getMetadata() {
        return {
            boundParameter: null,
            operationType: XrmEnum.ExecuteOperationType.Function,
            operationName: "WhoAmI",
            parameterTypes: {},
        };
    },
};

const response = await Xrm.WebApi.online.execute(request);
const body = await response.json();
console.log(body.UserId);
```

Without additional type annotations, the response and its JSON body have type
`any`. You can add parameter checks and a response type when you want more help
from the compiler.

### Add parameter checks and a response type

For a custom operation such as `new_Calculate`, define metadata once and preserve
its literal types. `satisfies` checks its shape without erasing its parameter
names and type names.

```ts
const metadata = {
    boundParameter: null,
    operationType: XrmEnum.ExecuteOperationType.Function,
    operationName: "new_Calculate",
    parameterTypes: {
        Count: { typeName: "Edm.Int32", structuralProperty: 1 },
    },
} as const satisfies Xrm.ExecuteRequestMetadata;

interface CalculateResponse {
    Total: number;
}

const request: Xrm.ExecuteRequest<typeof metadata, CalculateResponse> = {
    Count: 3,
    getMetadata: () => metadata,
};

const response = await Xrm.WebApi.online.execute(request);
const body = await response.json(); // CalculateResponse
```

The annotation checks required parameter properties, their JavaScript value types,
and the bound parameter name. Omitting `Count` or supplying a string produces an
error at the object definition. The second type argument associates a response
body with the request; it is a caller-supplied contract, not inferred from the
server or the parameter metadata. Omitting it leaves the JSON body as `any`.

Use an annotation when associating a response. `satisfies` checks a value but does
not add the optional response marker to its inferred type.

### Validate a class against its metadata

```ts
class CalculateRequest
    implements Xrm.CheckedExecuteRequest<CalculateRequest>
{
    declare readonly __responseType?: CalculateResponse;

    constructor(public Count: number) {}

    getMetadata() {
        return {
            boundParameter: null,
            operationType: XrmEnum.ExecuteOperationType.Function,
            operationName: "new_Calculate",
            parameterTypes: {
                Count: { typeName: "Edm.Int32", structuralProperty: 1 },
            },
        } as const;
    }
}

const request = new CalculateRequest(3);
const response = await Xrm.WebApi.online.execute(request);
const body = await response.json(); // CalculateResponse
type Body = Xrm.ExecuteResponseBody<CalculateRequest>; // CalculateResponse
```

The class name is repeated once because TypeScript does not allow `this` in an
`implements` clause. Metadata is not duplicated. Incorrect parameter types fail
at the property declaration; missing parameters fail at the class declaration.
Extra helper fields are allowed.

The optional `__responseType` member carries only type information. `declare`
emits no JavaScript. It may be omitted if response typing is not needed.
`implements` checks the class but does not add members to its inferred type, so
including a response type only in an implemented interface is insufficient.

### Also require complete metadata

Use `implements Xrm.CompleteExecuteRequest<CalculateRequest>` instead to require
metadata for every public data property, including optional properties. Missing
entries fail at `getMetadata`. Both value compatibility and metadata completeness
are checked.

Methods and `__responseType` are excluded. Private and protected fields are not
public parameters. Public caches or other helper state also need metadata in
this mode; use the metadata-first contract if such fields should remain public.

### Batches and limits

`executeMultiple` infers response bodies for annotated requests and marked class
instances, including requests in change sets. Heterogeneous typed batches return
an array whose responses have the union of the associated body types. Mixing an
untyped request into a batch widens the response to `any`; results are not typed
as a positional tuple.

Parameter checks happen at the annotation or `implements` clause. Calling
`execute` alone does not validate a request against its metadata.
Preserving metadata literals is essential: widened metadata cannot recover erased
parameter names or types.

Metadata does not describe nullability, so parameter values may be `null`. Date
parameters accept strings or JavaScript `Date` values. Primitive collections
check element types; unknown collection element schemas remain open. Entity and
complex parameters require objects, but their fields are not checked. GUID/date
formats and numeric ranges are not validated.

Enum arguments accept strings or numbers. `enumProperties` is not assumed to
provide an exhaustive list of legal values, so flags combinations and dynamic
values remain valid. Narrow the class property or application type yourself if
your operation requires a particular set of enum members.

These types do not validate server responses at runtime.
