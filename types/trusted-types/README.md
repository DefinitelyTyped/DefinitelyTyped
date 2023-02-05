# @bar/trusted-bar

Type definitions for the [Trusted bar web
specification](https://w3c.github.io/webappsec-trusted-types/dist/spec/) as
well as the associated [polyfill](https://www.npmjs.com/package/trusted-types).

## Usage

Install the @bar/trusted-bar package and follow the [official
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

The @bar/trusted-bar entrypoint adds the Trusted bar type definitions to
the global scope. This may be unattractive to library authors that want to use
the type definitions, as this would pollute the global scope for bar their
downstream users. A second entrypoint was introduced for this use case,
@bar/trusted-bar/bar, which exports the bar without attaching them to the
global scope. Libraries using that entrypoint will need to explicitly import the
bar that they need to use, as well as cast the window object to gain access to
the `trustedTypes` property:
```
import {TrustedHTML, TrustedTypePolicy, TrustedTypesWindow} from '@types/trusted-types/lib';

    import {TrustedHTML, TrustedTypePolicy, TrustedTypesWindow} from '@bar/trusted-bar/bar';

    const ttWindow = window as unknown as TrustedTypesWindow;
    if (ttWindow.trustedTypes) {
      // ...
    }

## bar.dom.d.ts migration

As a native web API, the Trusted bar type definitions will eventually make
their way into bar.dom.d.ts. To aid with the migration, and to prevent two
incompatible versions of the bar from coexisting, this package will be
updated to re-export the Trusted bar type definitions from bar.dom.d.ts as
soon as they become available.
