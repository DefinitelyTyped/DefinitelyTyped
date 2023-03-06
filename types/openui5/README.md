# OpenUI5 Definitions - Important Usage Notes

The type definitions for OpenUI5 - please make sure to read the important notes below!<br>
The central entry point for everything about using TypeScript with UI5 is at [https://sap.github.io/ui5-typescript](https://sap.github.io/ui5-typescript).

## Work in Progress

These definition files are <b>work in progress</b> and will be improved further.<br>
<b>Significant changes may occur in future versions, including potential breaking changes</b>.


## Release Notes

For information on changes in the type definitions, in particular ones which require adaptation, please refer to the [Release Notes](https://sap.github.io/ui5-typescript/releasenotes.html).


## Only Use With an Additional Build Step

These definition files are <b>meant to be used together with an additional build step</b> that transforms the imports of ES modules into classic UI5 module loading (`sap.ui.define(...)`). See the [small TypeScript sample project](https://github.com/SAP-samples/ui5-typescript-helloworld) and the [step-by-step setup explanation](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md) in that project as well as [this larger project](https://github.com/SAP-samples/ui5-cap-event-app/blob/typescript/docs/typescript.md) for details.<br>
These definition files do not provide type information for globals (like `sap.m.Button`) because the use of these globals are discouraged.


## Definitions are Generated

These definition files are <b>generated</b> out of the OpenUI5 JSDoc. In case of issues, either the generator or the JSDoc in the [original OpenUI5 repository](https://github.com/SAP/openui5) need to be fixed, not the definition files in this repository. So please do not create pull requests for definition files here (unless they are just meant for demonstration purposes). Instead, while the latest version of the generator is not yet available at GitHub, you can [contribute fixes to OpenUI5](https://github.com/SAP/openui5/blob/master/CONTRIBUTING.md#contribute-code).

When spotting weaknesses in the definition files, consider that it's not trivial to express a huge JavaScript API which has grown over 10+ years in optimal TypeScript which is produced by a generator. Hence, not all proposals can be implemented. That said, improvement suggestions are of course welcome!


## Versioning

There are two npm package names under which the OpenUI5 type definitions are released:
1. [`@openui5/ts-types-esm`](https://www.npmjs.com/package/@openui5/ts-types-esm) (published directly by the UI5 development team)
1. [`@types/openui5`](https://www.npmjs.com/package/@types/openui5) (the ones maintained here at DefinitelyTyped)


They are created the same way, from the same sources, <b>but there is a difference regarding the versioning</b>:

* For the ones over at [`@openui5/ts-types-esm`](https://www.npmjs.com/package/@openui5/ts-types-esm), there is a new patch version published whenever a new patch version of OpenUI5 is published. Even when there is no change in the type definitions. This means code and type definitions are exactly in sync when using exactly the same version.

* For [`@types/openui5`](https://www.npmjs.com/package/@types/openui5) here at DefinitelyTyped, however, we adopted the [versioning approach of DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#how-do-definitely-typed-package-versions-relate-to-versions-of-the-corresponding-library): 

> only the major and minor release numbers are aligned between library packages and type declaration packages  [...]<br>
> The patch version of the type declaration package is unrelated to the library patch version

The reasoning behind this is that with semantic versioning, the API will remain the same for all patch releases of the same major/minor version. As an example: there is no API change between OpenUI5 1.90.0 and OpenUI5 1.90.8. Therefore there is no need to publish new type definitions for OpenUI5 1.90.8 (and 1.90.7, 1.90.6 and so on).<br>
The only exception when we might still create new patch releases at DefinitelyTyped is when there are significant improvements or fixes in the documentation or in the definition generator. 

Long story short:
* For ease of consumption and most probably matching definitions, use the latest major/minor-matching version of `@types/openui5`. Also see the section below about the referenced jQuery and QUnit types. 
* For perfectly matching definitions, use the version of [`@openui5/ts-types-esm`](https://www.npmjs.com/package/@openui5/ts-types-esm) which is identical to the used OpenUI5 version.


## jQuery and QUnit References and their Versions

OpenUI5 includes copies of jQuery and QUnit and occasionally exposes types from them in its API.

In the DefinitelyTyped infrastructure, we can only specify *that* the OpenUI5 types/APIs depend on the types of jQuery and QUnit, but we cannot specify the respective *version*. So the `package.json` file generated by DefinitelyTyped for the npm release references the `"*"` version (any/latest version), not the version of the jQuery/QUnit copy which is actually included with the OpenUI5 framework.

Hence, as of writing (OpenUI5 version 1.100, March 2022), the versions of the types being installed together with `@types/openui5` are:
* jQuery: 3.5.14
* QUnit: 2.11.3

The versions actually included with OpenUI5 1.100, however, are:
* jQuery: 3.6.0
* QUnit: 2.3.2

You see: the versions do not match. As a result, your code editor may suggest new APIs from QUnit 2.11 which are not present in 2.3 yet. On the other hand, the TypeScript compiler might complain about jQuery 3.6 APIs being used - although this works fine at runtime.

In contrast, in the packages released by ourselves (e.g. `@openui5/ts-types-esm`), we try to reference the best-matching versions of the jQuery and QUnit types. Often it's not possible to have an exactly matching version of the types, though! E.g. right now there is still no 3.6 version of the jQuery types released at all. And for QUnit 2.3 the types have never been released. Hence OpenUI5 currently references:
* jQuery: 3.5.13
* QUnit: 2.5.4

In practice, such limited version differences will likely not make a difference most of the time, as the APIs should only differ slightly. If it still causes a problem, it's possible to explicitly reference a different version of the types within your application project or to tweak the types with your own custom type definitions.

The take-away is that there's nothing to do immediately, but one should keep in mind the above effect. In case of problems with jQuery/QUnit types not matching the actual libraries you can reference better-suitable types in your application.

## TSLint Ruleset Remarks

Our goal is to reduce the number of disabled tslint rules, but due to years of UI5 development before trying to conform to TypeScript rules, this is not possible for all of them. For the rules which are not aimed to be re-enabled, the reasoning is explained here:

 * `"interface-name": false` - for compatibility reasons, the existing interface names with "I" prefix cannot be changed
 * `"max-line-length": false` - we do not want to enforce a specific max line length - it also breaks e.g. long links
 * `"no-any-union": false` - for documentation purposes, it is useful to also see the alternatives which are more specific than "any"
 * `"no-single-declare-module": false` - these modules do exist and we want TypeScript to know about them
 * `"interface-over-type-literal": false` - this rule is considered debatable (see e.g. https://github.com/palantir/tslint/issues/3248)



## Copyright

Copyright (c) 2022 SAP SE or an SAP affiliate company and OpenUI5 contributors.
