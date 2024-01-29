# Definitely Typed

> Le référentiel des définitions de type TypeScript de *haute qualité*.

*Vous pouvez également lire ce README en [Español](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md), [한국어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ko.md), [Русский](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md), [简体中文](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.zh-Hans.md), [Português](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.pt.md), [Italiano](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.it.md), [日本語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ja.md) et [Français](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.fr.md)!*

*Lien vers le [Manuel de l'administrateur](./docs/admin.md)*

## État actuel

Cette section permet de suivre l'état de santé du référentiel et du processus de publication.
Elle peut être utile aux contributeurs qui rencontrent des problèmes avec leurs PR et leurs paquets.

* Dernière version [type-checked/linted](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint) proprement: [![Build Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.DefinitelyTyped?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=1&branchName=master)
* Tous les paquets font l'objet d'une vérification de type et d'un marquage propre sur typescript@next: [![Build Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/Nightly%20dtslint)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=8)
* Tous les paquets en cours de [Publication sur npm](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) en moins d'une heure et demie : [![Publish Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
* [typescript-bot](https://github.com/typescript-bot) a été actif sur Definitely Typed [![Activity Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)
* Actuel [mise à jour de l'état de l'infrastructure](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/44317)

Si quelque chose ne semble pas fonctionner, ou si l'un des éléments ci-dessus échoue, merci de nous le faire savoir dans [le canal Definitely Typed sur le serveur Discord de la Communauté TypeScript](https://discord.gg/typescript).

## Qu'est-ce qu'un fichier de déclaration et comment puis-je l'obtenir ?

Voir le [Manuel TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).

### npm

C'est la méthode préférée. Par exemple :

```sh
npm install --save-dev @types/node
```

Les types devraient alors être automatiquement inclus par le compilateur.
Vous pouvez avoir besoin d'ajouter une référence `types` si vous n'utilisez pas de modules :

```ts
/// <reference types="node" />
```

Plus d'informations dans le [manuel](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

Pour un paquet npm "foo", les typages pour celui-ci seront à "@types/foo"..

Si votre paquet a des typages spécifiés en utilisant la clé ``types`` ou ``typings`` dans son ``package.json``, le registre npm affichera que le paquet a des bindings disponibles comme ceci :

![image](https://user-images.githubusercontent.com/30049719/228748963-56fabfd1-9101-42c2-9891-b586b775b01e.png)

Si vous ne trouvez toujours pas les typages, recherchez simplement les fichiers ".d.ts" dans le paquet et incluez-les manuellement avec une commande `/// <reference path="" />`.

### Support de version

Definitely Typed ne teste que les paquets sur des versions de TypeScript datant de moins de 2 ans.

<img src="docs/support-window.svg#gh-light-mode-only" style="width:100%">
<img src="docs/support-window.svg#gh-dark-mode-only" style="width:100%">

<details>
<summary>Anciennes versions de TypeScript</summary>

Les paquets `@types` ont des étiquettes pour les versions de TypeScript qu'ils supportent explicitement, de sorte que vous pouvez généralement obtenir des versions plus anciennes de paquets qui précèdent la fenêtre de 2 ans.
Par exemple, si vous lancez `npm dist-tags @types/react`, vous verrez que TypeScript 2.5 peut utiliser les types pour react@16.0, alors que TypeScript 2.6 et 2.7 peuvent utiliser les types pour react@16.4 :

| Tag    | Version |
| ------ | ------- |
| latest | 16.9.23 |
| ts2.0  | 15.0.1  |
| ...    | ...     |
| ts2.5  | 16.0.36 |
| ts2.6  | 16.4.7  |
| ts2.7  | 16.4.7  |
| ...    | ...     |

#### TypeScript 1.*

* Télécharger manuellement depuis la branche `master` de ce dépôt et les placer dans votre projet
* ~~[Typings](https://github.com/typings/typings)~~ (utilisez les alternatives préférées, typings est déprécié)
* ~~[NuGet](https://nuget.org/packages?q=DefinitelyTyped)~~ (utilisez les alternatives préférées, la publication des types DT de Nuget a été désactivée)

Vous pouvez avoir besoin d'ajouter le manuel [references](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).

</details>

## Comment puis-je contribuer ?

Definitely Typed ne fonctionne que grâce aux contributions d'utilisateurs comme vous !

### Testing

Avant de partager votre amélioration avec le monde, utilisez les types vous-même en créant un fichier `typename.d.ts` dans votre projet et en remplissant ses exports :

```ts
declare module "libname" {
  // Types à l'intérieur ici
  export function helloWorldMessage(): string
}
```

#### Test d'édition d'un paquet existant

Vous pouvez éditer les types directement dans `node_modules/@types/foo/index.d.ts` pour valider vos changements, puis apporter les changements à ce repo avec les étapes ci-dessous.

Alternativement, vous pouvez utiliser [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) pour étendre les types existants du module DT ou utiliser la technique `declare module` ci-dessus qui remplacera la version dans `node_modules`.

#### Ajouter des tests à un nouveau paquet

Ajoutez-le à votre `tsconfig.json` :

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

Créez `types/foo/index.d.ts` contenant les déclarations pour le module "foo".
Vous devriez maintenant être capable d'importer `"foo"` dans votre code et il sera dirigé vers la nouvelle définition de type.
Ensuite, compilez *et* exécutez le code pour vous assurer que votre définition de type correspond bien à ce qui se passe à l'exécution.

Une fois que vous avez testé vos définitions avec du code réel, faites un [PR](#faire-une-demande-de-pull-request)
puis suivez les instructions pour [modifier un paquet existant](#modifier-un-paquet-existant) ou
[créer un nouveau paquet](#créer-un-nouveau-paquet).

### Faire une demande de pull request

Une fois que vous avez testé votre paquet, vous pouvez le partager sur Definitely Typed.

Tout d'abord, [fork](https://guides.github.com/activities/forking/) ce dépôt, [clone](#partial-clone), installez [node](https://nodejs.org/), et lancez `npm install`. Si vous utilisez `npm` v7, vous devez ajouter le drapeau `--legacy-peer-deps` à la commande.

Nous utilisons un robot pour permettre à un grand nombre de pull requests vers DefinitelyTyped d'être traitées entièrement en libre-service. Vous pouvez en savoir plus sur [pourquoi et comment ici](https://devblogs.microsoft.com/typescript/changes-to-how-we-manage-definitelytyped/). Voici une référence pratique montrant le cycle de vie de pull request à DT :

<img src="https://github.com/DefinitelyTyped/dt-mergebot/blob/master/docs/dt-mergebot-lifecycle.svg">

#### Partial clone

<details>
<summary>Vous pouvez cloner l'ensemble du dépôt <a href='https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository'>comme d'habitude</a>, mais il est volumineux et comprend un énorme répertoire de paquets de type.</summary>

Vous pouvez cloner l'ensemble du dépôt [comme d'habitude](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository), mais il est volumineux et comprend un énorme répertoire de paquets de type. Cela prendra du temps à cloner et peut s'avérer inutilement lourd.

Pour un clone plus facile à gérer qui inclut _seulement_ les paquets de type qui vous concernent, vous pouvez utiliser les fonctionnalités de git [`sparse-checkout`](https://git-scm.com/docs/git-sparse-checkout), [`--filter`](https://git-scm.com/docs/git-rev-list#Documentation/git-rev-list.txt---filterltfilter-specgt), et [`--depth`](https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---depthltdepthgt). Cela réduira le temps de clonage et améliorera les performances de git.

>:warning: Ceci nécessite au minimum [git version 2.27.0](https://git-scm.com/downloads), qui est probablement plus récent que la version par défaut sur la plupart des machines. Des procédures plus complexes sont disponibles dans les versions plus anciennes, mais ne sont pas couvertes par ce guide.

1. `git clone --sparse --filter=blob:none --depth=1 <forkedUrl>`
    - `--sparse` initialise le fichier sparse-checkout afin que le répertoire de travail ne contienne au départ que les fichiers situés à la racine du référentiel.
    - `--filter=blob:none` exclura des fichiers, les récupérant uniquement en cas de besoin.
    - `--depth=1` améliorera encore la vitesse de clonage en tronquant l'historique des livraisons, mais il peut causer des problèmes, comme le résume le tableau suivant [ici](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/).
2. `git sparse-checkout add types/<type> types/<dependency-type> ...`

</details>

#### Modifier un paquet existant

* `cd types/<paquet à modifier>`
* Apporter des modifications. N'oubliez pas d' [éditer les tests](#mon-paquet-teststs).
  Si vous apportez des modifications radicales, n'oubliez pas de [mettre à jour une version majeure](#si-une-bibliothèque-est-mise-à-jour-vers-une-nouvelle-version-majeure-comportant-des-changements-importants-comment-dois-je-mettre-à-jour-son-paquet-de-déclarations-de-types-).
* [Run `npm test <paquet-à-tester>`](#exécution-des-tests).

Quand vous faites une PR pour éditer un paquet existant, `dt-bot` devrait @-mentionner les auteurs précédents.
S'il ne le fait pas, vous pouvez le faire vous-même dans le commentaire associé à la PR.

#### Créer un nouveau paquet

Si vous êtes l'auteur de la bibliothèque et que votre paquetage est écrit en TypeScript, [regroupez les fichiers de déclaration autogénérés](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) dans votre paquetage au lieu de publier sur Definitely Typed.

Si vous ajoutez des typages pour un paquetage npm, créez un répertoire avec le même nom.
Si le paquet pour lequel vous ajoutez des typages n'est pas sur npm, assurez-vous que le nom que vous choisissez pour lui n'entre pas en conflit avec le nom d'un paquet sur npm.
(Vous pouvez utiliser `npm info <mon-paquet>` pour vérifier l'existence du paquet `<mon-paquet>`).

Votre paquet doit avoir cette structure :

| Fichier          | Objectif |
| ------------- | ------- |
| `index.d.ts`  | Il contient les typages du paquet. |
| [`<mon-paquet>-tests.ts`](#mon-paquet-teststs)  | Il contient un exemple de code qui teste les typages. Ce code *ne* s'exécute pas, mais il est vérifié. |
| [`tsconfig.json`](#tsconfigjson) | Cela vous permet d'exécuter `tsc` à l'intérieur du paquet. |
| [`.eslintrc.json`](#linter-eslintrcjson)   | (Rarement) Nécessaire uniquement pour désactiver les règles de lint écrites pour eslint. |

Vous pouvez les générer en lançant `npx dts-gen --dt --name <mon-paquet> --template module` si vous avez npm ≥ 5.2.0, `npm install -g dts-gen` et `dts-gen --dt --name <mon-paquet> --template module` dans le cas contraire.
Voir toutes les options à [dts-gen](https://github.com/Microsoft/dts-gen).

Si vous avez des fichiers `.d.ts` en plus de `index.d.ts`, assurez-vous qu'ils sont référencés soit dans `index.d.ts` soit dans les tests.

Les membres de Definitely Typed surveillent régulièrement les nouveaux PRs, bien qu'il faille garder à l'esprit que le nombre d'autres PRs peut ralentir les choses.

Pour un bon exemple de paquet, voir [base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js).

#### Supprimer un paquet

Lorsqu'un paquet [bundles](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) ses propres types, les types doivent être supprimés de Definitely Typed pour éviter toute confusion.

Vous pouvez le supprimer en lançant `npm run not-needed -- <nomDuPaquet> <commeVersion> [<nomDeBibliothèque>]`.
* `<nomDuPaquet>` : C'est le nom du répertoire à supprimer.
* `<commeVersion>` : Un stub sera publié dans `@types/<nomDuPaquet>` avec cette version. Elle doit être supérieure à toute version actuellement publiée, et doit être une version de `<nomDeBibliothèque>` sur npm.
* `<nomDeBibliothèque>` : Nom du paquet npm qui remplace Definitely Typed types. Habituellement, il est identique à `<nomDuPaquet>`, dans ce cas vous pouvez l'omettre.

Tous les autres paquets de Definitely Typed qui référencent le paquet supprimé doivent être mis à jour pour référencer les types regroupés.
Vous pouvez obtenir cette liste en regardant les erreurs de `npm run test-all`.
Pour corriger les erreurs, [ajoutez un `package.json`](#packagejson) avec `"dependencies" : { "<nomDeBibliothèque>" : "x.y.z" }`.
Par exemple :

```json
{
  "private": true,
  "dependencies": {
    "<libraryName>": "^2.6.0"
  }
}
```

Lorsque vous ajoutez un `package.json` aux dépendances de `<nomDeBibliothèque>`, vous devez également ouvrir une PR pour ajouter `<nomDeBibliothèque>` [à allowedPackageJsonDependencies.txt dans DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt).

Si un paquet n'a jamais été sur Definitely Typed, il n'a pas besoin d'être ajouté à `notNeededPackages.json`.

#### Exécution des tests

Testez vos modifications en lançant `npm test <paquet à tester>` où `<paquet à tester>` est le nom de votre paquetage.

Ce script utilise [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint) pour lancer le compilateur TypeScript sur vos fichiers dts.

Une fois que tous vos changements sont prêts, utilisez `npm run test-all` pour voir comment vos changements affectent les autres modules.

#### Nommer

Si vous ajoutez des typages pour un paquetage npm, créez un répertoire portant le même nom.
Si le paquet pour lequel vous ajoutez des typages n'est pas sur npm, assurez-vous que le nom que vous choisissez pour lui n'entre pas en conflit avec le nom d'un paquet sur npm.
(Vous pouvez utiliser `npm info <mon-paquet>` pour vérifier l'existence du paquet `<mon-paquet>`).

Si un paquet non-npm entre en conflit avec un paquet npm existant, essayez d'ajouter -browser à la fin du nom pour obtenir `<mon-paquet>-browser`.

#### `<mon-paquet>-tests.ts`

Il devrait y avoir un fichier `<mon-paquet>-tests.ts`, qui est considéré comme votre fichier de test, avec tous les fichiers `*.ts` qu'il importe.
Si vous ne voyez aucun fichier de test dans le dossier du module, créez un fichier `<mon-paquet>-tests.ts`.
Ces fichiers sont utilisés pour valider l'API exportée depuis les fichiers `*.d.ts` qui sont livrés en tant que `@types/<mon-paquet>`.

Les changements apportés aux fichiers `*.d.ts` doivent inclure un changement correspondant au fichier `*.ts` qui montre l'API utilisée, afin que quelqu'un ne casse pas accidentellement le code dont vous dépendez.
Si vous ne voyez aucun fichier de test dans le dossier du module, créez un fichier `<mon-paquet>-tests.ts`

Par exemple, cette modification d'une fonction dans un fichier `.d.ts` ajoute un nouveau paramètre à une fonction :

`index.d.ts`:

```diff
- export function twoslash(body: string): string
+ export function twoslash(body: string, config?: { version: string }): string
```

`<mon-paquet>-tests.ts`:

```diff
import {twoslash} from "./"

// $ExpectType string
const result = twoslash("//")

+ // Handle options param
+ const resultWithOptions = twoslash("//", { version: "3.7" })
+ // When the param is incorrect
+ // @ts-expect-error
+ const resultWithOptions = twoslash("//", {  })
```

Si vous vous demandez par où commencer avec le code de test, les exemples dans le README du module sont un bon point de départ.

Vous pouvez [valider vos changements](#exécution-des-tests) avec `npm test <paquet à tester>` depuis la racine de ce repo, qui prend en compte les fichiers modifiés.

Utilisez `$ExpectType` pour affirmer qu'une expression est d'un type donné, et `@ts-expect-error` pour affirmer qu'il s'agit d'une erreur de compilation. Exemples :

```js
// $ExpectType void
f(1);

// @ts-expect-error
f("one");
```

Pour plus de détails, voir le readme de [dtslint](https://github.com/Microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint#write-tests).

##### Linter: `.eslintrc.json`

Vous devez désactiver des règles spécifiques uniquement sur des lignes spécifiques :


```ts
// eslint-disable-next-line no-const-enum
const enum Const { One }
const enum Enum { Two } // eslint-disable-line no-const-enum
```

Vous pouvez toujours désactiver les règles avec un fichier .eslintrc.json, mais vous ne devriez pas le faire dans les nouveaux paquets.

#### `tsconfig.json`

`tsconfig.json` doit avoir `noImplicitAny`, `noImplicitThis`, `strictNullChecks`, et `strictFunctionTypes` mis à `true`.

Vous pouvez éditer le fichier `tsconfig.json` pour ajouter de nouveaux fichiers de test, pour ajouter `"target" : "es6"` (nécessaire pour les fonctions asynchrones), pour ajouter à `"lib"`, ou pour ajouter l'option de compilateur `"jsx"`.

##### `esModuleInterop`/`allowSyntheticDefaultImports`

TL;DR : `esModuleInterop` et `allowSyntheticDefaultImports` ne sont *pas autorisés* dans votre `tsconfig.json`.

> Ces options permettent d'écrire une importation par défaut pour une exportation CJS, modélisant l'interopérabilité intégrée entre les modules CJS et ES dans Node et dans certains bundlers JS:
>
> ```tsx
> // component.d.ts
> declare class Component {​​​​​}​​​​​
> // CJS export, modeling `module.exports = Component` in JS
> export = Component;
>
> // index.d.ts
> // ESM default import, only allowed under 'esModuleInterop' or 'allowSyntheticDefaultExports'
> import Component from "./component";
> ```
>
> Puisque la validité à la compilation de l'import dans `dex.d.ts` dépend de paramètres de compilation spécifiques, dont les utilisateurs de vos types n'héritent pas, l'utilisation de ce pattern dans DefinitelyTyped forcerait les utilisateurs à changer leurs propres paramètres de compilation, ce qui pourrait être incorrect pour leur environnement d'exécution. Au lieu de cela, vous devez écrire un import CJS pour un export CJS afin d'assurer une compatibilité généralisée et indépendante de la configuration :
>
> ```ts
> // index.d.ts
> // CJS import, modeling `const Component = require("./component")` in JS
> import Component = require("./component");
> ```

#### `package.json`

En général, vous n'en aurez pas besoin.
L'éditeur de paquets de DefinitelyTyped crée un `package.json` pour les paquets qui n'ont pas de dépendances en dehors de DefinitelyTyped.
Un `package.json` peut être inclus pour spécifier des dépendances qui ne sont pas d'autres paquets `@types`.
[Pikaday en est un bon exemple](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json)
Même si vous écrivez votre propre `package.json`, vous ne pouvez spécifier que des dépendances ; d'autres champs comme `"description"` ne sont pas autorisés.
Vous devez également ajouter la dépendance à [la liste des paquets autorisés](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt).
Cette liste est mise à jour par un humain, ce qui nous permet de nous assurer que les paquets `@types` ne dépendent pas de paquets malveillants.

Dans le rare cas où un paquet `@types` est supprimé et retiré en faveur des types fournis par le paquet source ET que vous avez besoin de dépendre de l'ancien paquet `@types` retiré, vous pouvez ajouter une dépendance sur un paquet `@types`.
Assurez-vous d'expliquer cela lors de l'ajout à la liste des paquets autorisés afin que le mainteneur humain sache ce qui se passe.

La deuxième raison de créer votre propre package.json est de spécifier les modules ES.
Si le paquet d'implémentation utilise ESM et spécifie `"type" : "module"`, alors vous devez ajouter un package.json avec la même chose :

```json
{
    "private": true,
    "type": "module"
}
```

Ceci s'applique également si le paquet d'implémentation a `exports` dans son package.json.

#### `OTHER_FILES.txt`

Si un fichier n'est ni testé ni référencé dans `index.d.ts`, ajoutez-le à un fichier nommé `OTHER_FILES.txt`. Ce fichier est une liste d'autres fichiers qui doivent être inclus dans le paquetage typings, un fichier par ligne.

#### Erreurs courantes

* Tout d'abord, suivez les conseils du [manuel](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html).
* Formatage : Utilisez 4 espaces. Prettier est installé sur ce repo, vous pouvez donc lancer `npm run prettier -- --write 'path/to/package/**/*.ts'`. [Lorsque vous utilisez des assertions](https://github.com/SamVerschueren/tsd#assertions), ajoutez l'exclusion `// prettier-ignore` pour marquer les lignes de code comme exclues du formatage :
  ```tsx
  // prettier-ignore
  // @ts-expect-error
  const incompleteThemeColorModes: Theme = { colors: { modes: { papaya: {
  ```
* `function sum(nums : number[]) : number` : Utilisez `ReadonlyArray` si une fonction n'écrit pas dans ses paramètres.
* `interface Foo { new(): Foo; }`:
  Cela définit un type d'objets qui peuvent être modifiés. Vous voudrez probablement `declare class Foo { constructor() ; }`.
* `const Class: { new(): IClass; }`:
  Il est préférable d'utiliser une déclaration de classe `class Class { constructor() ; }` plutôt qu'une constante modifiable.
* `getMeAT<T>(): T`:
  Si un paramètre de type n'apparaît dans les types d'aucun paramètre, il ne s'agit pas vraiment d'une fonction générique, mais simplement d'une assertion de type déguisée.
  Il est préférable d'utiliser une assertion de type réel, par exemple `getMeAT() as number`.
  Exemple où un paramètre de type est acceptable : `function id<T>(value : T) : T;`.
  Exemple où il n'est pas acceptable : `function parseJson<T>(json : string) : T;`.
  Exception : `new Map<string, number>()` est OK.
* L'utilisation des types `Function` et `Object` n'est presque jamais une bonne idée. Dans 99% des cas, il est possible de spécifier un type plus spécifique. Les exemples sont `(x : number) => number` pour les [fonctions](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions) et `{ x : number, y : number }` pour les objets. S'il n'y a aucune certitude sur le type, [`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) est le bon choix, pas `Object`. Si la seule chose connue à propos du type est qu'il s'agit d'un objet, utilisez le type [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type), pas `Object` ou `{ [key : string] : any }`.
* `var foo: string | any`:
  Lorsque `any` est utilisé dans un type union, le type résultant est toujours `any`. Ainsi, bien que la partie `string` de cette annotation de type puisse _look_ utile, elle n'offre en fait aucune vérification de  type supplémentaire par rapport à l'utilisation simple de `any`.
  Selon l'intention, les alternatives acceptables pourraient être `any`, `string`, ou `string | object`.

### Définition des propriétaires

> TL;DR : ne pas modifier `.github/CODEOWNERS`, toujours modifier la liste des propriétaires dans l'en-tête `index.d.ts`.

DT a le concept de "propriétaires de définition" qui sont des personnes qui veulent maintenir la qualité des types d'un module particulier.

* En vous ajoutant à la liste, vous serez notifié (via votre nom d'utilisateur GitHub) chaque fois que quelqu'un fera une pull request ou posera un problème concernant le paquet.
* Vos évaluations de PR auront une plus grande importance pour [le bot](https://github.com/DefinitelyTyped/dt-mergebot) qui maintient ce repo.
* Les mainteneurs de DT font confiance aux propriétaires des définitions pour assurer un écosystème stable, ne vous ajoutez pas à la légère.

Pour vous ajouter en tant que titulaire d'une définition :

* Ajouter votre nom à la fin de la ligne, comme dans l'exemple suivant `// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>`.
* Ou, s'il y a plus de personnes, il peut être multiligne
  ```typescript
  // Definitions by: Alice <https://github.com/alice>
  //                 Bob <https://github.com/bob>
  //                 Steve <https://github.com/steve>
  //                 John <https://github.com/john>
  ```

Une fois par semaine, les propriétaires de définitions sont synchronisés avec le fichier [.github/CODEOWNERS](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/.github/CODEOWNERS) qui est notre source de vérité.

## L'histoire de Definitely Typed

Definitely Typed est l'un des dépôts les plus actifs sur GitHub. Vous vous êtes peut-être demandé comment le projet a vu le jour. Un historique de Definitely Typed existe, il a été réalisé par @johnnyreilly. Il raconte les premiers jours de Definitely Typed, depuis un dépôt créé par @borisyankov, jusqu'au moment où il est devenu un élément central de l'écosystème TypeScript. [Vous pouvez lire l'histoire de Definitely Typed ici](https://johnnyreilly.com/definitely-typed-the-movie).

## FAQ

#### Quelle est la relation exacte entre ce dépôt et les paquets `@types` sur npm ?

La branche `master` est automatiquement publiée dans le scope `@types` sur npm grâce à [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher).

#### J'ai soumis une pull request. Dans combien de temps sera-t-elle fusionnée ?

Cela dépend, mais la plupart des pull requests seront fusionnées en une semaine.
Certains PR peuvent être fusionnés par les propriétaires d'un module, et ils peuvent être fusionnés beaucoup plus rapidement.
En gros :

> Les PRs qui ne modifient que les types d'un module, et qui ont des changements de tests correspondants seront fusionnés beaucoup plus rapidement.

Les PRs qui ont été approuvés par un auteur listé dans l'en-tête de la définition sont généralement fusionnés plus rapidement ; les PRs pour de nouvelles définitions prendront plus de temps car ils nécessitent plus de révision de la part des mainteneurs. Chaque PR est révisé par un membre de l'équipe TypeScript ou Definitely Typed avant d'être fusionné, donc soyez patient car des facteurs humains peuvent causer des retards. Consultez le [New Pull Request Status Board](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/5) pour voir les progrès réalisés par les mainteneurs sur les PRs ouverts.

#### J'aimerais apporter une modification à un projet très populaire, pourquoi sont-ils traités différemment ?

Pour les modifications apportées à des modules très populaires, par exemple Node/Express/Jest, qui sont téléchargés plusieurs millions de fois par semaine sur npm, les exigences en matière de contributions sont un peu plus élevées.
Les modifications apportées à ces projets peuvent avoir des effets considérables sur l'écosystème, et nous les traitons donc avec beaucoup d'attention.
Ces modules requièrent à la fois l'approbation d'un mainteneur de DT et le soutien enthousiaste des propriétaires du module. La barre pour réussir cela peut être assez haute, et souvent les PRs peuvent s'essouffler parce qu'il n'y a pas de champion.
Si vous constatez que personne ne s'engage, essayez de réduire la portée de votre PR.

#### Mon PR est fusionné ; quand le paquet npm `@types` sera-t-il mis à jour ?

Les paquets npm devraient être mis à jour dans les minutes qui suivent. Si cela fait plus d'une heure, mentionnez le numéro de PR sur [le canal Definitely Typed sur le serveur Discord de la communauté TypeScript](https://discord.gg/typescript) et le mainteneur actuel demandera au bon membre de l'équipe d'enquêter.

#### J'écris une définition qui dépend d'une autre définition. Dois-je utiliser `<reference types="" />` ou un import ?

Si le module auquel vous faites référence est un module externe (qui utilise `export`), utilisez un import.
Si le module auquel vous faites référence est un module ambiant (qui utilise `declare module`, ou qui déclare simplement des globaux), utilisez `<reference types="" />`.

#### Certains paquets n'ont pas de `tslint.json`, et certains `tsconfig.json` n'ont pas `"noImplicitAny" : true`, `"noImplicitThis" : true`, ou `"strictNullChecks" : true`.

Alors ils sont faux, et nous ne l'avons pas encore remarqué. Vous pouvez nous aider en soumettant une demande d'extraction pour les corriger.

#### Puis-je modifier/renforcer les paramètres de formatage des modules ?

Non. Nous avons déjà essayé de rendre le formatage du code de DT cohérent, mais nous sommes arrivés à une impasse en raison de la forte activité sur le repo. Nous incluons les paramètres de formatage via [`.editorconfig`](.editorconfig). Ceux-ci sont exclusivement destinés à l'outillage de votre éditeur, leurs paramètres n'entrent pas en conflit et nous ne prévoyons pas de les modifier. Nous ne prévoyons pas non plus d'imposer un style spécifique dans le repo. Nous voulons garder les barrières aux contributions basses.

#### Puis-je demander une définition ?

Voici les [définitions actuellement demandées](https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/categories/request-a-new-types-package).

#### Qu'en est-il des définitions de type pour le DOM ?

Si les types font partie d'un standard web, ils doivent être ajoutés à [TypeScript-DOM-lib-generator](https://github.com/Microsoft/TypeScript-DOM-lib-generator) afin qu'ils puissent faire partie de la `lib.dom.d.ts` par défaut.

#### Qu'en est-il des définitions de type sans paquet correspondant ?

S'il n'y a pas de code Javascript source du tout, par exemple si vous écrivez des types d'aide ou des types pour une spécification, vous devriez publier les types vous-même, pas sur Definitely Typed.
Parce qu'ils sont destinés à fournir des types pour du code Javascript existant, les paquets `@types` ne sont pas destinés à être importés directement.
En d'autres termes, vous ne devriez pas créer un paquet Definitely Typed destiné à être utilisé comme `import type { ... } from "@types/foo"`.
Vous ne devez pas non plus vous attendre à écrire `import type { ... } from "foo"` quand il n'y a pas de `foo` installé.

C'est différent de fournir des types pour une bibliothèque Javascript uniquement pour le navigateur ou des types pour un environnement entier comme node, bun, et al.
Là, les types sont résolus soit implicitement, soit en utilisant `/// <references types="foo" />`.

#### Dois-je ajouter un espace de noms vide à un paquetage qui n'exporte pas de module pour utiliser les importations de style ES6 ??

Certains paquets, comme [chai-http](https://github.com/chaijs/chai-http), exportent une fonction.

Importer ce module avec un import de style ES6 de la forme `import * as foo from "foo";` conduit à l'erreur :

> erreur TS2497 : Le module 'foo' se résout en une entité non-module et ne peut pas être importé en utilisant cette construction.

Cette erreur peut être supprimée en fusionnant la déclaration de la fonction avec un espace de noms vide du même nom, mais cette pratique est déconseillée.
Il s'agit d'une [réponse Stack Overflow](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this) couramment citée à ce sujet.

Il est plus approprié d'importer le module en utilisant la syntaxe `import foo = require("foo");`.
Néanmoins, si vous voulez utiliser un import par défaut comme `import foo from "foo";` vous avez deux options :
- vous pouvez utiliser l'option de compilation [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs) si votre module d'exécution supporte un schéma d'interopérabilité pour les modules non-ECMAScript, c'est-à-dire si les importations par défaut fonctionnent dans votre environnement (par exemple Webpack, SystemJS, esm).
- vous pouvez utiliser l'option de compilation [`--esModuleInterop`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop) si vous voulez que TypeScript prenne en charge l'interopérabilité non-ECMAScript (depuis TypeScript 2.7).

#### Un paquet utilise `export =`, mais je préfère utiliser les importations par défaut. Puis-je remplacer `export =` par `export default` ?

Comme dans la question précédente, il faut utiliser les options [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs)
ou [`--esModuleInterop`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop)
du compilateur.

Ne changez pas la définition du type si elle est correcte.
Pour un paquet npm, `export =` est correct si `node -p 'require("foo")'` fonctionne pour importer un module, et `export default` est correct si `node -p 'require("foo").default'` fonctionne pour importer un module.

#### Je souhaite utiliser les fonctionnalités des toutes nouvelles versions de TypeScript.

Vous devrez alors ajouter un commentaire à la dernière ligne de votre en-tête de définition (après `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`): `// Minimum TypeScript Version: X.Y`. Ceci définira la version minimale la plus basse supportée.

Cependant, si votre projet a besoin de maintenir des types compatibles avec, disons, 3.7 et plus *en même temps* que des types compatibles avec 3.6 ou moins, vous devrez utiliser la fonctionnalité `typesVersions`.
Vous trouverez une explication détaillée de cette fonctionnalité dans la [documentation officielle de TypeScript](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#version-selection-with-typesversions).

Voici un petit exemple pour commencer :

1. Vous devrez ajouter un fichier `package.json` à votre définition de paquet, avec le contenu suivant :

   ```json
   {
     "private": true,
     "types": "index",
     "typesVersions": {
       "<=3.6": { "*": ["ts3.6/*"] }
     }
   }
   ```

2. Créez le sous-répertoire mentionné dans le champ `typesVersions` à l'intérieur de votre répertoire de types (`ts3.6/` dans cet exemple).
  `ts3.6/` supportera les versions 3.6 et inférieures de TypeScript, donc copiez les types et les tests existants dans ce répertoire.

   Vous devrez supprimer l'en-tête de définition de `ts3.6/index.d.ts` puisque seule la racine `index.d.ts` est supposée l'avoir.

3. Définissez les options `baseUrl` et `typeRoots` dans `ts3.6/tsconfig.json` avec les chemins corrects, qui devraient ressembler à ceci :
   ```json
   {
     "compilerOptions": {
       "baseUrl": "../../",
       "typeRoots": ["../../"]
     }
   }
   ```

4. À la racine du paquet, ajoutez les fonctionnalités TypeScript 3.7 que vous souhaitez utiliser.
   Lors de l'installation du paquet, TypeScript 3.6 et moins démarrera à partir de `ts3.6/index.d.ts`, tandis que TypeScript 3.7 et plus démarrera à partir de `index.d.ts`.

   Vous pouvez prendre l'exemple de [bluebird](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f2512c2cf7cdcf9a487d989e288174e49b7839ab/types/bluebird).

#### Je souhaite ajouter une API DOM qui n'est pas présente par défaut dans TypeScript.

Cela pourrait être dans [TypeScript-DOM-lib-generator](https://github.com/Microsoft/TypeScript-DOM-lib-generator#readme). Voir les lignes directrices à cet endroit.
Si le standard est encore à l'état de projet, il a sa place ici.
Utilisez un nom commençant par `dom-` et incluez un lien vers le standard comme lien "Project" dans l'en-tête.
Lorsqu'il sort du mode brouillon, nous pouvons le retirer de Definitely Typed et déprécier le paquetage `@types` associé.

#### Comment les versions des paquets Definitely Typed sont-elles liées aux versions de la bibliothèque correspondante ?

*REMARQUE : la discussion dans cette section suppose une certaine familiarité avec le [Semantic versioning](https://semver.org/)*.

Chaque paquet Definitely Typed est versionné lorsqu'il est publié sur npm.
L'outil [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) (l'outil qui publie les paquets `@types` sur npm) définira la version du paquet de déclaration en utilisant le numéro de version `major.minor` listé dans la première ligne de son fichier `index.d.ts`.
Par exemple, voici les premières lignes de [Node's type declarations](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/node/index.d.ts) pour la version `10.12.x` au moment de l'écriture :

```js
// Type definitions for Node.js 10.12
// Project: https://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 Definitely Typed <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
```

Parce que `10.12` est à la fin de la première ligne, la version npm du paquet `@types/node` sera aussi `10.12.x`.
Notez que le commentaire de la première ligne du fichier `index.d.ts` ne doit contenir que la version `major.minor` (par exemple `10.12`) et ne doit pas contenir de version de correctif (par exemple `10.12.4`).
C'est parce que seuls les numéros de version majeure et mineure sont alignés entre les paquets de bibliothèques et les paquets de déclarations de types.
Le numéro de version du patch du paquet de déclaration de type (par exemple `.0` dans `10.12.0`) est initialisé à zéro par Definitely Typed et est incrémenté à chaque fois qu'un nouveau paquet `@types/node` est publié sur npm pour la même version majeure/mineure de la bibliothèque correspondante.

Il arrive que les versions des paquets de déclarations de type et les versions des paquets de bibliothèques ne soient pas synchronisées.
Voici quelques raisons courantes, classées par ordre de gêne pour les utilisateurs d'une bibliothèque.
Seul le dernier cas est généralement problématique.

* Comme indiqué ci-dessus, la version du patch du paquet de déclaration de type n'est pas liée à la version du patch de la bibliothèque.
  Cela permet à Definitely Typed de mettre à jour en toute sécurité les déclarations de types pour la même version majeure/mineure d'une bibliothèque.
* Si vous mettez à jour un paquet pour une nouvelle fonctionnalité, n'oubliez pas de mettre à jour le numéro de version pour qu'il corresponde à la version de la bibliothèque.
  Si les utilisateurs s'assurent que les versions correspondent entre les paquets JavaScript et leurs paquets `@types` respectifs, alors `npm update` devrait fonctionner.
* Il est fréquent que les mises à jour des paquets de déclarations de types soient en retard par rapport aux mises à jour des bibliothèques, car ce sont souvent les utilisateurs des bibliothèques, et non les mainteneurs, qui mettent à jour Definitely Typed lorsque de nouvelles fonctionnalités des bibliothèques sont publiées.
  Il peut donc y avoir un décalage de plusieurs jours, semaines ou même mois avant qu'un membre utile de la communauté n'envoie un PR pour mettre à jour le paquet de déclaration de type pour une nouvelle version de la bibliothèque.
  Si vous êtes affecté par cela, vous pouvez être le changement que vous voulez voir dans le monde et vous pouvez être ce membre utile de la communauté !

:exclamation: Si vous mettez à jour les déclarations de type pour une bibliothèque, mettez toujours la version `major.minor` dans la première ligne de `index.d.ts` pour qu'elle corresponde à la version de la bibliothèque que vous documentez ! :exclamation:

#### Si une bibliothèque est mise à jour vers une nouvelle version majeure comportant des changements importants, comment dois-je mettre à jour son paquet de déclarations de types ?

Le [Semantic versioning](https://semver.org/) requiert que les versions avec des changements importants doivent incrémenter le numéro de la version majeure.
Par exemple, une bibliothèque qui supprime une fonction exportée publiquement après sa version `3.5.8` doit augmenter sa version à `4.0.0` dans sa prochaine version.
De plus, lorsque la version `4.0.0` de la bibliothèque est sortie, son paquet Definitely Typed Type Declaration doit aussi être mis à jour en `4.0.0`, en incluant tous leschangements importants dans l'API de la bibliothèque.

De nombreuses bibliothèques disposent d'une large base installée de développeurs (y compris les responsables d'autres paquets utilisant cette bibliothèque comme dépendance) qui ne passeront pas immédiatement à une nouvelle version comportant des changements radicaux, car il peut s'écouler des mois avant qu'un responsable n'ait le temps de réécrire le code pour l'adapter à la nouvelle version.
En attendant, les utilisateurs des anciennes versions de la bibliothèque peuvent toujours vouloir mettre à jour les déclarations de type pour les anciennes versions.

Si vous avez l'intention de continuer à mettre à jour l'ancienne version des déclarations de types d'une bibliothèque, vous pouvez créer un nouveau sous-dossier (par exemple `/v2/`) nommé pour la version actuelle (bientôt "ancienne"), et copier les fichiers existants de la version actuelle dans ce sous-dossier.

Comme le dossier racine doit toujours contenir les déclarations de type de la dernière ("nouvelle") version, vous devrez apporter quelques modifications aux fichiers de votre sous-répertoire de l'ancienne version pour vous assurer que les références de chemin relatif pointent vers le sous-répertoire, et non vers la racine.

1. Mise à jour des chemins relatifs dans `tsconfig.json` ainsi que dans `tslint.json`.
2. Ajouter des règles de correspondance des chemins pour s'assurer que les tests s'exécutent avec la version prévue.

Par exemple, la bibliothèque [`history`](https://github.com/ReactTraining/history/) a introduit des changements entre les versions `2.x` et `3.x`.
Parce que beaucoup d'utilisateurs consomment encore l'ancienne version `2.x`, un mainteneur qui voulait mettre à jour les déclarations de type pour cette bibliothèque vers `3.x` a ajouté un dossier `v2` dans le référentiel history qui contient les déclarations de type pour l'ancienne version.
Au moment où j'écris ces lignes, le dossier [history v2 `tsconfig.json`](https://github.com/%44efinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/history/v2/tsconfig.json) ressemble à peu près à ceci :

```json
{
  "compilerOptions": {
    "baseUrl": "../../",
    "typeRoots": ["../../"],
    "paths": {
      "history": [ "history/v2" ]
    }
  },
  "files": [
    "index.d.ts",
    "history-tests.ts"
  ]
}
```

S'il y a d'autres paquets dans Definitely Typed qui sont incompatibles avec la nouvelle version, vous devrez ajouter des correspondances de chemin vers l'ancienne version.
Vous devrez aussi le faire récursivement pour les paquets qui dépendent de l'ancienne version.

Par exemple, `browser-sync` dépend de `micromatch@2`, donc [browser-sync `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/browser-sync/tsconfig.json) a un chemin vers `"micromatch" : ["micromatch/v2" ]`.
Transitivement, `browser-sync-webpack-plugin` (qui dépend de `browser-sync`) avait aussi besoin d'ajouter le même chemin (`"micromatch" : [ "micromatch/v2" ]`) dans son `tsconfig.json` jusqu'à ce que sa dépendance `browser-sync` soit mise à jour vers la dernière version.

De plus, `/// <reference types="..." />` ne fonctionnera pas avec la correspondance des chemins, donc les dépendances doivent utiliser `import`.

#### Comment puis-je écrire des définitions pour des paquets qui peuvent être utilisés globalement et en tant que module ?

Le manuel TypeScript contient d'excellentes [informations générales sur l'écriture de définitions](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), ainsi que [cet exemple de fichier de définition](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html) qui montre comment créer une définition en utilisant la syntaxe de module de style ES6, tout en spécifiant également les objets mis à la disposition de la portée globale.  Cette technique est démontrée en pratique dans la [définition de `big.js`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts), qui est une bibliothèque qui peut être chargée globalement via une balise script sur une page web, ou importée via require ou des importations de style ES6.

Pour tester comment votre définition peut être utilisée à la fois lorsqu'elle est référencée globalement ou en tant que module importé, créez un dossier `test`, et placez-y deux fichiers de test.  Nommez l'un `VotreNomBibliothèque-global.test.ts` et l'autre `VotreNomBibliothèque-module.test.ts`.  Le fichier de test *global* doit exercer la définition de la manière dont elle serait utilisée dans un script chargé sur une page web où la bibliothèque est disponible sur la portée globale - dans ce scénario, vous ne devez pas spécifier d'instruction d'importation.  Le fichier de test *module* doit exercer la définition selon la façon dont elle serait utilisée lorsqu'elle est importée (y compris la ou les déclarations `import`).  Si vous spécifiez une propriété `files` dans votre fichier `tsconfig.json`, assurez-vous d'inclure les deux fichiers de test.  Un [exemple pratique de ceci](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) est aussi disponible sur la définition de `big.js`.

Il suffit de tester uniquement les éléments accessibles globalement dans le fichier de test global et d'exercer pleinement la définition dans le fichier de test du module, ou vice versa.

#### Qu'en est-il des paquets délimités ?

Les types pour un paquetage scopé `@foo/bar` devraient aller dans `types/foo__bar`. Notez le double trait de soulignement.

Quand `dts-gen` est utilisé pour échafauder un paquet scopé, la propriété `paths` doit être adaptée manuellement dans le `tsconfig.json` généré pour référencer correctement le paquet scopé :

```json
{
  "compilerOptions": {
    "paths": {
      "@foo/*": ["foo__*"]
    }
  }
}
```

## Licence

Ce projet est placé sous la licence MIT.

Les droits d'auteur sur les fichiers de définition appartiennent à chaque contributeur mentionné au début de chaque fichier de définition.
