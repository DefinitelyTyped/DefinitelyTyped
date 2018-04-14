# DefinitelyTyped [![Estado ng Pagbubuo](https://travis-ci.org/DefinitelyTyped/DefinitelyTyped.svg?branch=master)](https://travis-ci.org/DefinitelyTyped/DefinitelyTyped)

[![Sumali sa chat sa https://gitter.im/borisyankov/DefinitelyTyped](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/borisyankov/DefinitelyTyped?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Ang repositori para sa *mataas na kalidad* ng TypeScript na uri ng mga paglalarawan.

Tingnan rin ang [definitelytyped.org](http://definitelytyped.org) na websayt, kahit na ang impormasyon sa README nito ay mas naka-update.

*[Pwede mo ring mabasa ang README na ito sa Espanyol!](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md)*

## Ano ang mga pangdeklarasyong file?
Tingnan ang [Hanbuk ng TypeScript](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).

## Paano ko ba sila makukuha?

### npm

Ito ang pinipiling pamamaraan. Magagamit lamang ito para sa TypeScript 2.0+ na mga tagagamit. Halimbawa:

```sh
npm install --save-dev @types/node
```

Ang mga uri ay dapat awtomatikong isinasali ng compiler.
Magtingin pa sa [hanbuk](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

Para sa isang NPM na paketeng "foo", ang mga pagta-type nito ay nasa "@types/foo".
Kung hindi mo makikita ang iyong pakete, hanapin ito sa [TypeSearch](https://microsoft.github.io/TypeSearch/).

Kung hindi mo pa rin ito mahanap, tingnan kung ito ay [mabibigkis](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) sa sarili nitong mga pagta-type.
Karaniwan itong ibinibigay sa isang `"types"` r `"typings"` na field sa `package.json`,
o maghanap lang ng kahit anong ".d.ts" na mga file sa pakete at manu-manong isali sila kasama ang isang `/// <reference path="" />`.


### Ibang mga pamamaraan

Pwede silang magagamit ng TypeScript 1.0.

* [Mga Pagta-tyoe](https://github.com/typings/typings)
* ~~[NuGet](http://nuget.org/packages?q=DefinitelyTyped)~~ (gamitin ang mga pinipiling alternatibo, ang nuget DT na uri ng paglalathala ay itinigil na)
* Manu-manong i-download mula sa `master` na sangay ng repositoring ito.

Maaring magdaragdag ka ng mga manu-manong [basehan](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).


## Paano ba ako makakapag-ambag?

Ang DefinitelyTyped ay gumagana lang dahil sa mga ambag ng mga tagagamit na katulad mo!

### Pagsusubok

Bago mo ibahagi ang iyong paglilinang sa muno, gamitin mo mismo ito.

#### Subukang baguhin ng isang umiiral na pakete

Upang magdagdag ng mga bagong tampok, pwede mong gamitin ang [pagpapalaki ng modyul](http://www.typescriptlang.org/docs/handbook/declaration-merging.html).
Pwede mo ring direktang baguhin ang mga uri sa `node_modules/@types/foo/index.d.ts`, o kopyahin sila mula doon at sundin ang mga hakbang sa ibaba.


#### Subukan ang isang bagong pakete

Idagdag sa iyong `tsconfig.json`:

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

(Maaari mo ring gamitin ang `src/types`.)
Lumikha ng `types/foo/index.d.ts` na naglalaman ng mga deklarasyon para sa modyul na "foo".
Dapat kaya mo na ngayong mag-import mula sa `"foo"` sa iyong code at magruruta ito sa bagong uri na paglalarawan.
Pagkatapos, i-build *at* paganahin ang code upang masigurong ang iyong paglalarawan sa uri ay aktwal na tumutumbas sa kung ano ang nagyayari sa runtime.
Kapag nasubukan mo na ang iyong mga paglalarawan gamit ang totoong code, gumawa ng isang [PR](#make-a-pull-request)
pagkatapos sundin ang mga instruksyon upang [baguhin ang isang umiiral na pakete](#edit-an-existing-package) o
[maglikha ng isang bagong pakete](#create-a-new-package).


### Gumawa ng isang pull request

Kapag nasubukan mo na ang iyong pakete, maaari mo na itong ibahagi sa DefinitelyTyped.

Una, [i-fork](https://guides.github.com/activities/forking/) ang repositoring ito, i-install ang [node](https://nodejs.org/), at paganahin ang `npm install`.


#### Baguhin ang isang umiiral na pakete

* `cd types/my-package-to-edit`
* Gumawa ng mga pagbabago. Tandaang baguhin ang mga pagsusuri.
* Baka gusto mo ring idagdag ang iyong sarili sa seksyong "Mga Paglalarawan ni" ng header ng pakete.
  - Ito ang magpapaalam sa iyo (sa pamamagitan ng iyong GitHub na username) kapag may gagawa ng isang pull request or isyu tungkol sa pakete.
  - Gawin ito sa pamamagitan ng pagdagdag ng iyong pangalan sa katapusan ng linya, katulad ng `// Mga Paglalarawan ni: Alice <https://github.com/alice>, Bob <https://github.com/bob>`.
  - O kapag may mas marami pang tao, pwede itong maging maramihang linya.
  ```typescript
  // Mga Paglalarawan ni: Alice <https://github.com/alice>
  //                 Bob <https://github.com/bob>
  //                 Steve <https://github.com/steve>
  //                 John <https://github.com/john>
  ```
* Kapag may isang `tslint.json`, paganahin ang `npm run lint package-name`. Kapag wala, paganahin ang `tsc` sa direktoryo ng pakete.

Kapag gumagawa ka ng isang PR upang baguhin ang isang umiiral na pakete, dapag @-bibigkasin ng `dt-bot` ang mga naunang may-akda.
Kapag hindi, maaari mong gawin ito mismo sa komentong nauugnay sa PR.


#### Lumikha ng isang bagong pakete

Kapag ikaw ang may-akda ng library, o makakagawa ng isang pull request sa library, [bigkisin ang mga uri](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) sa halip na ilathala sila sa DefinitelyTyped.

Kapag nagdaragdag ka ng mga pagta-type para sa isang NPM na pakete, lumikha ng isang direktoryo na may kaparehong pangalan.
Kapag ang mga paketeng dinaragdagan mo nga mga pagta-type ay wala sa NPM, siguraduhing ang pangalan na iyong pinili para nito ay hindi sumasalungat sa pangalan ng isang pakete sa NPM.
(Maaari mong gamitin ang `npm info foo` upang suriin ang pag-iiral ng `foo` na pakete.)

Ang iyong pakete ay dapat may istrukturang ganito:

| File | Layunin |
| --- | --- |
| index.d.ts | Naglalaman ito ng mga pagta-type para sa pakete. |
| foo-tests.ts | Naglalaman ito ng mga halimbawang code na nagsusubok sa mga pagta-type. Ang code na ito ay *hindi* gumagana, pero naka- type-check. |
| tsconfig.json | Pinapahintulutan ka nitong paganahin ang `tsc` sa loob ng pakete. |
| tslint.json | Pipagana ang pagli-lint. |

Likhain ang mga ito sa pamamagitan ng pagpapatakbo ng `npm install -g dts-gen` at `dts-gen --dt --name my-package-name --template module`.
Tingnan ang lahat ng mga pagpipilian sa [dts-gen](https://github.com/Microsoft/dts-gen).

Maaari mong baguhin ang `tsconfig.json` upang magdagdag ng mga bagong file, upang idagdag ang `"target": "es6"` (kinakailangan para sa async na mga pagganap), upang idagdag sa `"lib"`, o upang idagdag ang `"jsx"` na pagpipilian ng compiler.

Ang mga miyembro ng DefinitelyTyped ay regular na nagmomonitor para sa mga bagong PR, kahit isinasaisip na ang bilang nga mga PR ay maaaring makapagpabagal ng mga bagay.

Para sa isang magandang halimbawa ng pakete, tingnan ang [base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js).


#### Karaniwang mga pagkakamali

* Una, sundin ang mga mungkahi mula sa [hanbuk](http://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html).
* Pagpo-format: Pwedeng gamitin ang lahat ng mga tab, o palaging gumamit ng apat na mga espasyo.
* `function sum(nums: number[]): number`: Use `ReadonlyArray` kung ang isang function ay hindi nagsusulat sa mga parametro nito.
* `interface Foo { new(): Foo; }`:
    Inilalarawan nito ang isang uri ng mga bagay na mababago. Maaari mong gustuhin ang `declare class Foo { constructor(); }`.
* `const Class: { new(): IClass; }`:
    Piliin mong gumamit ng isang pangklaseng deklarasyon `class Class { constructor(); }` sa halip ng isang mababagong konstant.
* `getMeAT<T>(): T`:
    Ang isang parametrong uri ay hindi lumalabas sa mga uri ng kahit anong mga parametro, wala ka talagang isang henerikang function, meron ka lang ng isang uri ng paggigiit na nakatago.
    Piliing gamitin ang isang uri ng paggigiit na totoo, e.g. `getMeAT() as number`.
    Halimbawa kung saan ang parametro ay matatanggap: `function id<T>(value: T): T;`.
    Halimbawa kung saan hindi ito matatanggap: `function parseJson<T>(json: string): T;`.
    Pagbubukod: ang `new Map<string, number>()` ay OK.
* Ang paggamit sa mga uring `Function` at `Object` ay halos hindi isang magandang ideya. Sa 99% ng mga kaso posibleng magtiyak ng isang mas tiyak na uri. Ang mga halimbawa ay `(x: number) => number` para sa [mga function](http://www.typescriptlang.org/docs/handbook/functions.html#function-types) at `{ x: number, y: number }` para sa mga bagay. Kapag walang kahit anong kasiguraduhan tungkol sa uri, ang [`any`](http://www.typescriptlang.org/docs/handbook/basic-types.html#any) ay ang tamang pagpipilian, hindi `Object`. Kapag ang alam lamang tungkol sa uri ay ang ito'y isang bagay, gamitin ang uring [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type), hindi `Object` o `{ [key: string]: any }`.
* `var foo: string | any`:
    Kapag ang `any` ay ginamit sa isang pag-iisang uri, ang nagreresultang uri ay `any` pa rin. Kaya habang ang `string` na bahagi ng anotasyong uring ito ay maaaring _magmumukhang_ mahalaga, ito sa totoo lang ay nag-aalok ng walang karagdagang pagta-typecheck sa simpleng paggamit ng `any`.
    Depende sa intensyon, ang mga matatanggap na mga alternatibo ay maaring `any`, `string`, o `string | object`.


#### Pagtatanggal ng isang pakete

Kapag ang isang pakete ay [nagbibigkis](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) ng mga sarili nitong uri, ang mga uri ay dapat tinatanggal mula sa DefinitelyTyped upang maiiwasan ang mga pagkakalito.

Matatanggal mo ito sa pamamagitan ng pagpapagana ng `npm run not-needed -- typingsPackageName asOfVersion sourceRepoURL [libraryName]`.
- `typingsPackageName`: Ito ang pangalan ng direktoryong tatanggalin.
- `asOfVersion`: Ang isang stub ay ilalathala sa `@types/foo` gamit ang bersyong ito. Dapat mas mataas pa sa kahit anong kasulukuyang nailathalang bersyon.
- `sourceRepoURL`: Dapat tumutukoy ito sa repositoring naglalaman ng mga pagta-type.
- `libraryName`: Deskriptibong pangalan ng library, e.g. "Angular 2" instead of "angular2". (Kapag tinanggal, magiging kaparehas ito sa "typingsPackageName".)

Ang kahit anong ibang mga pakete sa DefinitelyTyped na nagbatay sa tinanggal na pakete ay dapat i-update upang ibatay sa mga binigkis na uri. Upang magawa ito, magdagdag ng isang `package.json` kasama ang mga `"dependency": { "foo": "x.y.z" }`.

Kapag ang isang pakete ay wala pa sa DefinitelyTyped, hindi na nito kinakailangang idagdag sa `notNeededPackages.json`.


#### Lint

Sa pag-lint ng isang pakete, idagdag lang ang isang `tslint.json` sa paketeng iyan na naglalaman ng `{ "extends": "dtslint/dt.json" }`. Lahat ng mga bagong pakete ay dapat naka-lint.
Kung tinigil ng isang `tslint.json` ang mga patakaran, ito ay dahil hindi pa ito naayos. Halimbawa:

```js
{
    "extends": "dtslint/dt.json",
    "rules": {
        // Ang paketeng ito ay gumagamit ng uring Function, at mangangailangan ito ng pagsisikap upang maayos.
        "ban-types": false
    }
}
```

(Upang ipahiwatig na ang isang lint na patakaran ay totoong hindi naaaplay, gamitin ang `// tslint:disable rule-name` o mas maganda pa, `//tslint:disable-next-line rule-name`.)

Upang igiit na ang isang expression ay napabilang sa isang uri, gamitin ang `$ExpectType`. Upang igiit na ang isang expression ay nagreresulta ng isang compile error, gamitin ang `$ExpectError`.

```js
// $ExpectType void
f(1);

// $ExpectError
f("one");
```

Para sa karagdagang detalye, gamitin ang [dtslint](https://github.com/Microsoft/dtslint#write-tests) na readme.

Subukan sa pamamagitan ng pagpapagana ng `npm run lint package-name` kung saan ang `package-name` ay ang pangalan ng iyong pakete.
Ang iskrip na ito ay gumagamit ng [dtslint](https://github.com/Microsoft/dtslint).


## FAQ

#### Ano ba talaga ang relasyon sa pagitan ng repositoring ito at ng `@types` na mga pakete sa NPM?

Ang `master` na sangay ay awtomatikong inilathala sa `@types` na saklaw sa NPM salamat sa [types-publisher](https://github.com/Microsoft/types-publisher).

#### Nakasumite ako ng isang pull request. Gaano pa katagal ito ma-merge?

Depende, pero karamihan sa mga pull request ay mame-merge sa loob ng isang linggo. Ang mga PR na naaprubahan na ng isang may-akda na nakalista sa header ng paglalarawan ay kadalasang name-merge nang mas mabilis; ang mga PR para sa mga bagong paglalarawan ay kukuha ng mas mahabang oras dahil nangangailangan sila ng maraming mga pagsisiyasat mula sa mga tagapanatili. Ang bawat PR ay sinisiyasat ng isang TypeScript o DefinitelyTyped na miyembro ng koponan bago mine-merge, kaya mangyaring maghintay dahil ang mga makataong dahilan ay maaaring magreresulta ng mga pagkakaantala. Tingnan ang [PR Burndown Board](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/3?card_filter_query=is%3Aopen) upang tingnan ang kaunlaran ng trabaho ng mga tagapanatili sa pamamagitan ng mga bukas na PR.

#### Ang aking PR ay na-merge na; kailan ba ma-update ang `@types` na pakete ng NPM?

NPM packages should update within a few hours. If it's been more than 24 hours, ping @RyanCavanaugh and @andy-ms on the PR to investigate.

#### I'm writing a definition that depends on another definition. Should I use `<reference types="" />` or an import?

If the module you're referencing is an external module (uses `export`), use an import.
If the module you're referencing is an ambient module (uses `declare module`, or just declares globals), use `<reference types="" />`.

#### I notice some packages having a `package.json` here.

Usually you won't need this. When publishing a package we will normally automatically create a `package.json` for it.
A `package.json` may be included for the sake of specifying dependencies. Here's an [example](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json).
We do not allow other fields, such as `"description"`, to be defined manually.
Also, if you need to reference an older version of typings, you must do that by adding `"dependencies": { "@types/foo": "x.y.z" }` to the package.json.

#### Some packages have no `tslint.json`, and some `tsconfig.json` are missing `"noImplicitAny": true`, `"noImplicitThis": true`, or `"strictNullChecks": true`.

Then they are wrong. You can help by submitting a pull request to fix them.

#### Can I request a definition?

Here are the [currently requested definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/labels/Definition%3ARequest).

#### What about type definitions for the DOM?

If types are part of a web standard, they should be contributed to [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator) so that they can become part of the default `lib.dom.d.ts`.

#### A package uses `export =`, but I prefer to use default imports. Can I change `export =` to `export default`?

If default imports work in your environment, consider turning on the [`--allowSyntheticDefaultImports`](http://www.typescriptlang.org/docs/handbook/compiler-options.html) compiler option.
Do not change the type definition if it is accurate.
For an NPM package, `export =` is accurate if `node -p 'require("foo")'` is the export, and `export default` is accurate if `node -p 'require("foo").default'` is the export.

#### I want to use features from TypeScript 2.1 or above.

Then you will have to add a comment to the last line of your definition header (after `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`): `// TypeScript Version: 2.1`.

#### I want to add a DOM API not present in TypeScript by default.

This may belong in [TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme). See the guidelines there.
If the standard is still a draft, it belongs here.
Use a name beginning with `dom-` and include a link to the standard as the "Project" link in the header.
When it graduates draft mode, we may remove it from DefinitelyTyped and deprecate the associated `@types` package.

#### I want to update a package to a new major version

If you intend to continue updating the older version of the package, you may create a new subfolder with the current version e.g. `v2`, and copy existing files to it. If so, you will need to:

1. Update the relative paths in `tsconfig.json` as well as `tslint.json`.
2. Add path mapping rules to ensure that tests are running against the intended version.

For example [history v2 `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/history/v2/tsconfig.json) looks like:

```json
{
    "compilerOptions": {
        "baseUrl": "../../",
        "typeRoots": ["../../"],
        "paths": {
            "history": [ "history/v2" ]
        },
    },
    "files": [
        "index.d.ts",
        "history-tests.ts"
    ]
}
```

If there are other packages on DefinitelyTyped that are incompatible with the new version, you will need to add path mappings to the old version. You will also need to do this for packages depending on packages depending on the old version.

For example, `react-router` depends on `history@2`, so [react-router `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router/tsconfig.json) has a path mapping to `"history": [ "history/v2" ]`;
transitively `react-router-bootstrap` (which depends on `react-router`) also adds a path mapping in its [tsconfig.json](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router-bootstrap/tsconfig.json).

Also, `/// <reference types=".." />` will not work with path mapping, so dependencies must use `import`.

#### How do I write definitions for packages that can be used globally and as a module?

The TypeScript handbook contains excellent [general information about writing definitions](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), and also [this example definition file](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html) which shows how to create a definition using ES6-style module syntax, while also specifying objects made available to the global scope.  This technique is demonstrated practically in the [definition for big.js](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts), which is a library that can be loaded globally via script tag on a web page, or imported via require or ES6-style imports.

To test how your definition can be used both when referenced globally or as an imported module, create a `test` folder, and place two test files in there.  Name one `YourLibraryName-global.test.ts` and the other `YourLibraryName-module.test.ts`.  The *global* test file should exercise the definition according to how it would be used in a script loaded on a web page where the library is available on the global scope - in this scenario you should not specify an import statement.  The *module* test file should exercise the definition according to how it would be used when imported (including the `import` statement(s)).  If you specify a `files` property in your `tsconfig.json` file, be sure to include both test files.  A [practical example of this](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) is also available on the big.js definition.

Please note that it is not required to fully exercise the definition in each test file - it is sufficient to test only the globally-accessible elements on the global test file and fully exercise the definition in the module test file, or vice versa.

#### What about scoped packages?

Types for a scoped package `@foo/bar` should go in `types/foo__bar`. Note the double underscore.

When `dts-gen` is used to scaffold a scoped package, the `paths` property has to be manually adapted in the generated
`tsconfig.json` to correctly reference the scoped package:

```json
{
    "paths":{
      "@foo/bar": ["foo__bar"]
    }
}
```


#### The file history in GitHub looks incomplete.

GitHub doesn't [support](http://stackoverflow.com/questions/5646174/how-to-make-github-follow-directory-history-after-renames) file history for renamed files. Use [`git log --follow`](https://www.git-scm.com/docs/git-log) instead.

#### Should I add an empty namespace to a package that doesn't export a module to use ES6 style imports?

Some packages, like [chai-http](https://github.com/chaijs/chai-http), export a function.

Importing this module with an ES6 style import in the form `import * as foo from "foo";` leads to the error:

> error TS2497: Module 'foo' resolves to a non-module entity and cannot be imported using this construct

This error can be suppressed by merging the function declaration with an empty namespace of the same name, but this practice is discouraged.
This is a commonly cited [Stack Overflow answer](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this) regarding this matter.

It is more appropriate to import the module using the `import foo = require("foo");` syntax, or to use a default import like `import foo from "foo";` if using the `--allowSyntheticDefaultImports` flag if your module runtime supports an interop scheme for non-ECMAScript modules as such.

## License

This project is licensed under the MIT license.

Copyrights on the definition files are respective of each contributor listed at the beginning of each definition file.

[![Analytics](https://ga-beacon.appspot.com/UA-47495295-4/borisyankov/DefinitelyTyped)](https://github.com/igrigorik/ga-beacon)
