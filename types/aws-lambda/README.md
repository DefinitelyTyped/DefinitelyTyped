Types helpful for implementing handlers in the AWS Lambda NodeJS runtimes,
the handler interface and types for AWS-defined trigger sources.

Unrelated to the npm package `aws-lambda`, a CLI tool.

## Contributing

Follow all the rules for [modifying a type package](../../README.md#edit-an-existing-package),
of course, but as this package has gotten quite large, please
also follow the established conventions to keep things simple
for future contributors:

### Common types

The main entry point, [index.d.ts]() simply does `export * from "..."`
for all type declaration files in the package. Make sure if you are
adding any files for new trigger sources that you add the
re-export here; the user should only need to import from `"aws-lambda"`.

Similarly, [aws-lambda-tests.ts]() has declarations for the common type and tests
for [handler.d.ts](), while the actual service specific tests are all in [test/]()

The mentioned [handler.d.ts]() contains definitions for `Handler<TEvent, TResult>`
and its associated types like `Context` and `Callback<TResult>`,
which describe the Lambda NodeJS runtime API.

### Triggers

Each trigger-specific event structure should have a separate file in [trigger/]() based
on the service name and optionally the trigger type, if it's not a clear "default".

If multiple triggers for a service share types, the common types
should be in a file in [common/]() named for the containing service.

For a service `foo` and trigger `bar`, there should ideally be
a file `trigger/foo-bar.d.ts` containing something like:

```ts
import { Callback, Handler } from "../handler";

import { FooCommonType } from "../common/foo";

export type FooBarHandler = Handler<FooBarEvent, FooBarResult>;
export type FooBarCallback = Callback<FooBarResult>;
// or, if there is no FooBarResult:
export type FooBarHandler = Handler<FooBarEvent, void>;

export interface FooBarEvent {
  // ...
}

export interface FooBarEventSpecificType {
  // ...
}

export interface FooBarResult {
  // ...
}

export interface FooBarResultSpecificType {
    // ...
}

export interface FooBarCommonType {
    // ...
}

// ...
```

As implied, all names are exported flat, try to ensure that it's clear what service
or trigger a type is for. (Note that especially the earlier types are not always
consistent with this)

### Tests

Each trigger should have a type test that exercises the type roughly as the user
would, in particular reading properties from the event, and creating each
valid result structure in general. When making any change: adding a property,
to a new trigger, also add the change to the tests.

Tests are grouped by each service in [test/](), and must also be explicitly
added to `tsconfig.json`'s `files` list (use of `include` is banned by
Definitely Typed at the moment).

The test file for a service `foo` with two triggers `bar` and `baz` may look like:

```ts
import {
    FooBarHandler,
    FooBarResult,
    // ...
 } from "aws-lambda";

const barHandler: FooBarHandler = async (event, context, callback) => {
    // Check event type
    // Declarations for e.g. strOrNull, bool are in aws-lambda-tests.ts
    strOrNull = event.body;
    str = event.headers[str];
    str = event.multiValueHeaders[str][num];
    str = event.httpMethod;
    bool = event.isBase64Encoded;
    // this property is of a named type, validate that:
    let requestContext: FooBarEventRequestContext;
    requestContext = event.requestContext;
    // for each accessible property declared in FooBarEvent...

    // recurse into each declared type
    str = requestContext.accountId;
    str = requestContext.apiId;
    const authContext: AuthResponseContext | null | undefined = requestContext.authorizer;
    numOrUndefined = requestContext.connectedAt;
    strOrUndefined = requestContext.connectionId;
    // ...


    // Check result type
    let result: FooBarResult;
    // check minimally assignable case
    result = {
        statusCode: num,
        body: str,
    };
    // check maximally assignable case
    result = {
        statusCode: num,
        headers: {
            [str]: str,
            [str]: bool,
            [str]: num,
        },
        multiValueHeaders: {
            [str]: [str, bool, num],
        },
        isBase64Encoded: true,
        body: str,
    };

    // check reasonable result-returning styles
    callback(new Error());
    callback(null, result);
    return result;
};

const bazHandler: FooBazHandler = async (event, context, callback) => {
    // ... as above, for each untested type

    // for handlers without a result
    callback();
    callback(new Error());
};

...
```

Not that currently many tests have not been updated to this style.
As always, PRs welcome, but simply adding your change in the new style
is a start.

Ideally the existing test should still pass with your new change: if it doesn't that
implies that your change is incompatible with existing user code (if the
test is done correctly) This isn't always the wrong thing to do, but be
prepared to make a decently strong case for why this is an exception.

## Future ideas

* Adding JSDocs for types and properties (copied from AWS docs?). Many
  triggers have unintuitive formats and requirements.

* Splitting `import { Context, FooBarHandler, FooCommonType } from "aws-lambda"` into

  * `import { Context } from "@aws-lambda/runtime"` and
  * `import { BarHandler, CommonType } from "@aws-lambda/foo"`

  With forwarding from the current package to preserve back-compat.
  This would allow not only more fine-grained dependencies, but also
  support backward-incompatible changes to triggers as they could be
  independently major versioned.

  It's a lot of busywork to do all that renaming though, and ensuring
  compatibility is kept.

* Possibly related to the above, migrating this to, or somehow in support of,
  an npm package with runtime support for implementing handlers correctly.
  For example, catching and formatting `ClientError` into an API Gateway
  400 error, or parsing CloudWatch log payloads.

  This one is much more fraught, as it by default loses all the existing
  Definitely Typed tooling and community support (e.g. cross package typing).
