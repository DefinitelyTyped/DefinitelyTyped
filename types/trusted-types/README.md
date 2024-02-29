# @types/trusted-types
Type definitions for the [Trusted Types web
specification](https://w3c.github.io/webappsec-trusted-types/dist/spec/) as
well as the associated [polyfill](https://www.npmjs.com/package/trusted-types).

## Usage
Install the @types/trusted-types package and follow the [official
instructions](https://github.com/DefinitelyTyped/DefinitelyTyped#what-are-declaration-files-and-how-do-i-get-them).
This will make the type definitions available globally within your package, and
you will be able to use them directly:
```typescript
if (window.trustedTypes && trustedTypes.createPolicy) {
  const policy = trustedTypes.createPolicy('my-policy', {
    createHTML: val => val.replace(/\</g, '&lt;')
  });

  const safe: TrustedHTML = policy.createHTML('<h1>Hello</h1>');
}
```

### Library usage
The @types/trusted-types entrypoint adds the Trusted Types type definitions to
the global scope. This may be unattractive to library authors that want to use
the type definitions, as this would pollute the global scope for all their
downstream users. A second entrypoint was introduced for this use case,
@types/trusted-types/lib, which exports the types without attaching them to the
global scope. Libraries using that entrypoint will need to explicitly import the
types that they need to use, as well as cast the window object to gain access to
the `trustedTypes` property:
```
import {TrustedHTML, TrustedTypePolicy, TrustedTypesWindow} from '@types/trusted-types/lib';

const ttWindow = window as unknown as TrustedTypesWindow;
if (ttWindow.trustedTypes) {
  // ...
}
```

## lib.dom.d.ts migration
As a native web API, the Trusted Types type definitions will eventually make
their way into lib.dom.d.ts. To aid with the migration, and to prevent two
incompatible versions of the types from coexisting, this package will be
updated to re-export the Trusted Types type definitions from lib.dom.d.ts as
soon as they become available.
