# OpenUI5 Definitions - Important Usage Notes

## Work in Progress

These definition files are <b>work in progress</b> and will be improved further.<br>
<b>Significant changes may occur in future versions, including potential breaking changes</b>.


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
* For ease of consumption and most probably matching definitions, use the latest major/minor-matching version of `@types/openui5`.
* For perfectly matching definitions, use the version of [`@openui5/ts-types-esm`](https://www.npmjs.com/package/@openui5/ts-types-esm) which is identical to the used OpenUI5 version.


## Copyright

Copyright (c) 2021 SAP SE or an SAP affiliate company and OpenUI5 contributors.
