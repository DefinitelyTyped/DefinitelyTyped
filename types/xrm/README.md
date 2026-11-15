# Xrm Web API execute requests

`Xrm.WebApi.online.execute(request)` and `executeMultiple(requests)` preserve their
permissive behavior. Ordinary requests return `any` responses. There is no runtime
helper, decorator, or base class to install.

## Validate an object and associate its response

Define metadata once and preserve its literal types. `satisfies` checks its shape
without erasing its parameter names and type names.

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

## Validate a class against its metadata

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

## Also require complete metadata

Use `implements Xrm.CompleteExecuteRequest<CalculateRequest>` instead to require
metadata for every public data property, including optional properties. Missing
entries fail at `getMetadata`. Both value compatibility and metadata completeness
are checked.

Methods and `__responseType` are excluded. Private and protected fields are not
public parameters. Public caches or other helper state also need metadata in
this mode; use the metadata-first contract if such fields should remain public.

## Batches and limits

`executeMultiple` infers response bodies for annotated requests and marked class
instances, including requests in change sets. Heterogeneous typed batches return
an array whose responses have the union of the associated body types. Mixing an
untyped request into a batch widens the response to `any`; results are not typed
as a positional tuple.

Validation is explicit at the annotation or `implements` clause. `execute` keeps
a permissive fallback, so it does not independently reject malformed requests.
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
