# Definitely Typed

> Репозиторий для _высококачественных_ определений типов TypeScript.

Также посетите веб-сайт [definitelytyped.org](https://definitelytyped.org), хотя информация в этом README более свежая.

_Вы также можете прочитать этот README на [английском](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md), [испанском](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md), [корейском](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ko.md) и [китайском](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.zh.md)._

<!-- For translators: add link to README.ja.md above! -->

## Текущее состояние

Этот раздел отслеживает состояние репозитория и процесс публикации.
Это может быть полезно для участников, испытывающих любые проблемы с PR'ами и пакетами.

-   Самая последняя сборка [прошла проверку-типов/линтинг](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint) полностью: [![Статус сборки](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.DefinitelyTyped?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=1&branchName=master)
-   Все пакеты проходят проверку-типов/линтинг полностью на `typescript@next`: [![Build status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/Nightly%20dtslint)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=8)
-   Все пакеты [публикуются на npm](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) в течении часа: [![Статус публикации](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
-   [typescript-bot](https://github.com/typescript-bot) проявляет активность на Definitely Typed [![Статус активности](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)

Если что-то здесь кажется неправильным или что-либо из вышеперечисленного не работает, пожалуйста, поднимите проблему на [канале DefiniteTyped Discord](https://discord.gg/typescript).

## Что такое файлы декларации (файлы описания/объявления типов)?

Смотрите [руководство по TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).

## Как их получить?

### npm

Это предпочтительный метод. Например:

```sh
npm install --save-dev @types/node
```

Компилятор должен автоматически подключить типы.
Вам может понадобиться добавить связь `types`, если вы не используете модули:

```ts
/// <reference types="node" />
```

Подробнее смотрите в [справочнике](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

Для npm пакета `foo`, описания будут находиться в `@types/foo`.
Если вы не можете найти необходимый вам пакет, ищите его в [TypeSearch](https://microsoft.github.io/TypeSearch/).

Если вы все еще не можете найти его, проверьте [включает](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) ли пакет собственную типизацию.
Обычно это отражается в поле `"types"` или `"typings"` файла `package.json`, или просто ищите любые файлы «.d.ts» в пакете и вручную включайте их с помощью `/// <reference path="" />`.

#### TypeScript 4.0 и старее

Начиная с ноября 2019 года, Definitely Typed тестирует пакеты только на версиях Typescript, которым меньше двух лет.
Если вы используете Typescript от 2.0 до 4.0, вы все равно можете попробовать установить пакеты `@types` - большинство пакетов не используют новые функции Typescript.
Но нет гарантии, что они будут работать.

График обновлений:

<img src="docs/support-window.svg#gh-light-mode-only" style="width:100%">
<img src="docs/support-window.svg#gh-dark-mode-only" style="width:100%">

Пакеты, которые существовали до ноября 2019 года, могут иметь более старые версии, которые явно помечены как совместимые с более старыми версиями Typescript; используйте тег "ts2.6" для Typescript 2.6, например.

Например, если вы запустите `npm dist-tags @types/react`, вы увидите следующую таблицу, которая показывает, что у react@16.4 есть типы для Typescript 2.6:

| Tag      | Version   |
| -------- | --------- |
| `latest` | `16.9.11` |
| `ts2.0`  | `15.0.1`  |
| …        | …         |
| `ts2.6`  | `16.4.7`  |
| …        | …         |

### TypeScript 1.8 и старше

-   [Typings](https://github.com/typings/typings)
-   ~~[NuGet](https://nuget.org/packages?q=DefinitelyTyped)~~ (используйте предпочтительные альтернативы, публикация типа nuget DT отключена)
-   Вручную загрузите из ветки `master` этого репозитория

Возможно, вам придется добавить ручные [ссылки (references)](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).

## Как я могу внести свой вклад?

Definitely Typed работает только благодаря вкладу таких пользователей, как вы!

### Тестирование

Прежде чем поделиться своим улучшением с миром, используйте его сами.

#### Тестирование редактирования существующего пакета

Для добавления новых функций вы можете использовать [разрешение модулей](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation).
Вы также можете напрямую редактировать типы в `node_modules/@types/foo/index.d.ts`, или скопировать их оттуда и выполнить следующие шаги.

#### Тестирование нового пакета

Добавьте к вашему `tsconfig.json`:

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

(Вы также можете использовать `src/types`.)
Создайте `types/foo/index.d.ts` содержащие объявления для модуля "foo".
Теперь вы сможете импортировать из `"foo"` в свой код, и он будет направлен к новому определению типа.
Затем запустите сборку (build) _и_ запустите код, чтобы убедиться, что ваше определение типа действительно соответствует тому, что происходит во время выполнения.
После того как вы проверили свои определения с реальным кодом, создайте [Запрос на принятие изменений (PR)](#запрос-на-принятие-изменений-pr)
и следуйте инструкциям [чтобы отредактировать существующий](#изменение-существующего-пакета) или
[создать новый пакет](#создание-нового-пакета).

### Запрос на принятие изменений (PR)

После того, как вы проверили ваш пакет, вы можете поделиться им с Definitely Typed.

Во-первых, [разветвите](https://guides.github.com/activities/forking/) этот репозиторий, установите [node](https://nodejs.org/), и запустите `npm install`.

#### Изменение существующего пакета

-   `cd types/<package to edit>`
-   Внесите изменения. [Не забудьте отредактировать тесты](#my-package-teststs).
    Если вы вносите критические изменения, не забудьте [обновить основную версию](#я-хочу-обновить-пакет-новой-старшей-версии).
-   Вы также можете добавить себя в раздел "Definitions by" заголовка пакета.

    -   Это приведет к тому, что вы будете уведомлены (через ваше имя пользователя GitHub) о том, что кто-то делает запрос на принятие изменений (PR) или проблему с пакетом.
    -   Сделайте это, добавив свое имя в конец строки, например `// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>`.
    -   Или, если есть больше людей, это может быть многострочным

    ```typescript
    // Definitions by: Alice <https://github.com/alice>
    //                 Bob <https://github.com/bob>
    //                 Steve <https://github.com/steve>
    //                 John <https://github.com/john>
    ```

-   [Запустите `npm test <package to test>`](#проверка).

Когда вы создаете PR для редактирования существующего пакета, `dt-bot` должен @-уведомить
предыдущих авторов. Если этого не произойдет, вы можете сделать это самостоятельно в комментарии, связанном с PR.

#### Создание нового пакета

Если вы являетесь автором библиотеки и ваш пакет написан на TypeScript, [свяжите автоматически сгенерированные файлы объявлений](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) в вашем пакете, а не публикуйте в Definitely Typed.

Если вы добавляете типизацию для пакета npm, создайте директорию с тем же именем.
Если пакет, для которого вы добавляете типизацию, отсутствует в npm, убедитесь, что выбранное вами имя не конфликтует с именем пакета в npm.
(Вы можете использовать `npm info <my-package>` чтобы проверить наличие пакета `<my-package>`.)

Ваш пакет должен иметь такую ​​структуру:

| Файл          | Назначение                                                                                           |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `index.d.ts`  | Содержит типизацию для пакета.                                                                       |
| [`<my-package>-tests.ts`](#my-package-teststs)  | Содержит пример кода, который проверяет типизацию. Этот код _не_ запускается, но он проверен на тип. |
| [`tsconfig.json`](#tsconfigjson) | Позволяет вам запускать `tsc` внутри пакета.                                      |
| [`tslint.json`](#linter-tslintjson)   | Включает linting.                                                            |

Создайте их, запустив `npx dts-gen --dt --name <my-package> --template module` если у вас npm ≥ 5.2.0, `npm install -g dts-gen` и `dts-gen --dt --name <my-package> --template module` в противном случае.
Посмотреть все варианты на [dts-gen](https://github.com/Microsoft/dts-gen).

Члены группы Definitely Typed регулярно следят за новыми PR, но имейте в виду, что количество других PR может замедлить ход событий.

Хороший пример пакета смотрите [base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js).

#### Удаление пакета

Когда пакет [объединяет](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) свои собственные типы, типы должны быть удалены из Definitely Typed чтобы избежать путаницы.

Вы можете удалить его, запустив `npm run not-needed -- <typingsPackageName> <asOfVersion> [<libraryName>]`.

-   `<typingsPackageName>`: название директории, который нужно удалить.
-   `<asOfVersion>`: заглушка будет опубликована в `@types/<typingsPackageName>` с этой версией. Должна быть выше, чем любая опубликованная на данный момент версия
-   `<libraryName>`: описательное имя библиотеки, например, "Angular 2" вместо "angular2". (Если опущено, будет идентично `<typingsPackageName>`.)

Любые другие пакеты в Definitely Typed которые ссылаются на удаленный пакет, должны быть обновлены для ссылки на связанные типы. Для этого добавьте в [`package.json`](#packagejson) ссыклу `"dependencies": { "<libraryName>": "x.y.z" }`.

Если пакет никогда не был в Definitely Typed, его не нужно добавлять в `notNeededPackages.json`.

#### Проверка

Протестируйте, запустив `npm test <package to test>` где `<package to test>` - это имя вашего пакета.

Этот скрипт использует [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint) для запуска компилятора TypeScript на ваших dts файлах.

#### Naming

Если вы добавляете типизацию для пакета npm, создайте директорию с тем же именем.
Если пакет, для которого вы добавляете типизацию, отсутствует в npm, убедитесь, что выбранное вами имя не конфликтует с именем пакета в npm.
(Вы можете использовать `npm info <my-package>` чтобы проверить наличие пакета `<my-package>`.)

If a non-npm package conflicts with an existing npm package try adding -browser to the end of the name to get `<my-package>-browser`.

#### `<my-package>-tests.ts`

There should be a `<my-package>-tests.ts` file, which is considered your test file, along with any `*.ts` files it imports.
If you don't see any test files in the module's folder, create a `<my-package>-tests.ts`.
These files are used to validate the API exported from the `*.d.ts` files which are shipped as `@types/<my-package>`.

Changes to the `*.d.ts` files should include a corresponding `*.ts` file change which shows the API being used, so that someone doesn't accidentally break code you depend on.
If you don't see any test files in the module's folder, create a `<my-package>-tests.ts`

For example, this change to a function in a `.d.ts` file adding a new param to a function:

`index.d.ts`:

```diff
- export function twoslash(body: string): string
+ export function twoslash(body: string, config?: { version: string }): string
```

`<my-package>-tests.ts`:

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

If you're wondering where to start with test code, the examples in the README of the module are a great place to start.

You can [validate your changes](#проверка) with `npm test <package to test>` from the root of this repo, which takes changed files into account.

Чтобы проверить, что выражение имеет заданный тип, используйте `$ExpectType`. Чтобы проверить, что выражение вызывает ошибку компиляции, используйте `@ts-expect-error`.

```js
// $ExpectType void
f(1);

// @ts-expect-error
f('one');
```

Для получения дополнительной информации см. [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint#write-tests) readme.

#### Linter: `tslint.json`

The linter configuration file, `tslint.json` should contain `{ "extends": "@definitelytyped/dtslint/dt.json" }`, and no additional rules.

If for some reason some rule needs to be disabled, [disable it for that specific line](https://palantir.github.io/tslint/usage/rule-flags/#comment-flags-in-source-code:~:text=%2F%2F%20tslint%3Adisable%2Dnext%2Dline%3Arule1%20rule2%20rule3...%20%2D%20Disables%20the%20listed%20rules%20for%20the%20next%20line) using `// tslint:disable-next-line:[ruleName]` — not for the whole package, so that disabling can be reviewed. (There are some legacy lint configs that have additional contents, but these should not happen in new work.)

#### `tsconfig.json`

`tsconfig.json` should have `noImplicitAny`, `noImplicitThis`, `strictNullChecks`, and `strictFunctionTypes` set to `true`.

Вы можете отредактировать `tsconfig.json` чтобы добавить новые файлы, добавить `"target": "es6"` (необходимо для асинхронных функций), добавить в `"lib"`, или добавить опцию компилятора `"jsx"`.

#### `package.json`

Обычно вам это не нужно. При публикации пакета мы обычно автоматически создаем `package.json`.
`package.json` может быть включен для определения зависимостей. Вот [пример](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json).
Мы не разрешаем определять другие поля, такие как "description", вручную.
Кроме того, если вам нужно сослаться на более старую версию типизаций, вы должны сделать это, добавив в `package.json` строки `"dependencies": { "@types/<libraryName>": "x.y.z" }`.

#### `OTHER_FILES.txt`

If a file is neither tested nor referenced in `index.d.ts`, add it to a file named `OTHER_FILES.txt`. This file is a list of other files that need to be included in the typings package, one file per line.

#### Распространенные ошибки

* Сначала следуйте советам из справочника [handbook](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html).
* Форматирование: либо используйте все табы, либо всегда используйте 4 пробела.
* `function sum(nums: number[]): number`: используйте `ReadonlyArray` если функция не записывает свои параметры.
* `interface Foo { new(): Foo; }`:
  Это определяет тип объектов, с методом `new`. Вы, вероятно, хотите объявить `declare class Foo { constructor(); }`.
* `const Class: { new(): IClass; }`:
  Предпочитайте использовать объявление класса `class Class { constructor(); }` вместо `new`.
* `getMeAT<T>(): T`:
  Если параметр типа не отображается в типах каких-либо параметров, у вас нет универсальной функции, а просто замаскированное утверждение типа.
  Предпочитайте использовать утверждение реального типа, например, `getMeAT() as number`.
  Пример, где допустим параметр типа: `function id<T>(value: T): T;`.
  Пример, где это недопустимо: `function parseJson<T>(json: string): T;`.
  Исключение: `new Map<string, number>()` все ОК.
* Использование типов `Function` and `Object` почти никогда не является хорошей идеей. В 99% случаев можно указать более конкретный тип. Примеры: `(x: number) => number` для [функций](https://www.typescriptlang.org/docs/handbook/functions.html#function-types) and `{ x: number, y: number }` для объектов. Если нет никакой уверенности в типе, [`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) является правильным выбором, а не `Object`. Если единственным известным фактом о типе является то, что это какой-то объект, используйте тип [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type), а не `Object` или `{ [key: string]: any }`.
* `var foo: string | any`:
  когда `any` используется в типе объединения, результирующий тип все еще `any`. Таким образом, хотя `string` часть аннотации этого типа может _выглядеть_ полезной, на самом деле она не предлагает никакой дополнительной проверки типов по сравнению с простым использованием `any`.
  В зависимости от намерения, приемлемыми альтернативами могут быть `any`, `string`, или `string | object`.

### Definition owners

DT has the concept of "Definition Owners" which are people who want to maintain the quality of a particular module's types

* Adding yourself to the list will cause you to be notified (via your GitHub username) whenever someone makes a pull request or issue about the package.
* Your PR reviews will have a higher precedence of importance to [the bot](https://github.com/DefinitelyTyped/dt-mergebot) which maintains this repo.
* The DT maintainers are putting trust in the definition owners to ensure a stable eco-system, please don't add yourself lightly.

To Add yourself as a Definition Owner:

* Adding your name to the end of the line, as in `// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>`.
* Or if there are more people, it can be multiline
  ```typescript
  // Definitions by: Alice <https://github.com/alice>
  //                 Bob <https://github.com/bob>
  //                 Steve <https://github.com/steve>
  //                 John <https://github.com/john>
  ```

Once a week the Definition Owners are synced to the file [.github/CODEOWNERS](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/.github/CODEOWNERS) which is our source of truth.

## Часто задаваемые вопросы

#### Какая связь между этим репозиторием и пакетами `@types` в npm?

Ветвь `master` автоматически публикуется в область `@types` на npm благодаря [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher).

#### Я отправил PR. Когда он сольется?

Это зависит, но большинство запросов на получение данных будут объединены в течение недели. PR, утвержденные автором, указанным в заголовке определения, обычно объединяются быстрее; PR для новых определений займет больше времени, так как они требуют большего количества проверок от сопровождающих. Каждый PR проверяется членом команды TypeScript или Definitely Typed перед объединением, поэтому будьте терпеливы, так как человеческий фактор может вызвать задержки. Посмотрите на [New Pull Request Status Board](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/5) чтобы увидеть, как сопровождающие работают через открытые PR.

#### Мой PR слит; когда будет обновлен пакет `@types` npm?

Пакеты npm должны обновиться в течение нескольких часов. Если прошло более 24 часов, пингуйте @RyanCavanaugh и @andy-ms в PR, чтобы расследовать.

#### Я пишу определение, которое зависит от другого определения. Должен ли я использовать `<reference types="" />` или import?

Если модуль, на который вы ссылаетесь, является внешним модулем (использует `export`), используйте import.
Если модуль, на который вы ссылаетесь, является окружающим модулем (использует `declare module`, или просто объявляет глобальные переменные), используйте `<reference types="" />`.

#### В некоторых пакетах отсутствует `tslint.json`, а в некоторых `tsconfig.json` отсутствует `"noImplicitAny": true`, `"noImplicitThis": true`, или `"strictNullChecks": true`.

Тогда они не правы. Вы можете помочь, отправив PR, чтобы исправить их.

#### Могу ли я запросить определение?

Вот [текущие запрошенные определения](https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/categories/request-a-new-types-package).

#### Как насчет определений типов для DOM?

Если типы являются частью веб-стандарта, они должны быть добавлены в [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator) чтобы они могли стать частью `lib.dom.d.ts` по умолчанию.

#### Пакет использует export `export =`, но я предпочитаю использовать импорт по умолчанию. Могу ли я изменить `export =` на `export default`?

Если вы используете TypeScript 2.7 или более позднюю версию, используйте `--esModuleInterop` в вашем проекте.
В противном случае, если импорт по умолчанию работает в вашей среде (например, Webpack, SystemJS, esm), рассмотрите возможность включения опции компилятора [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/compiler-options.html).
Не меняйте определение типа, если оно точное.
Для пакета npm, `export =` является точным, если `node -p 'require("foo")'` является экспортом, а `export default` является точным, если `node -p 'require("foo").default'` является экспортом.

#### Я хочу использовать функции из TypeScript 3.3 или выше.

В таком случае вам нужно будет добавить комментарий к последней строке заголовка вашего определения (после `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`): `// Minimum TypeScript Version: 3.3`.

#### Я хочу добавить DOM API, отсутствующий в TypeScript по умолчанию.

Это может принадлежать [TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme). Смотрите инструкции там.
Если стандарт все еще является черновиком, добавляйте сюда.
Используйте имя, начинающееся с `dom-` и включите ссылку на стандарт в качестве ссылки "Project" в заголовке.
Когда он завершает черновой режим, мы можем удалить его из Definitely Typed и объявить устаревшим связанный пакет `@types`.

#### Я хочу обновить пакет новой старшей версии

Если вы намерены продолжить обновление старой версии пакета, вы можете создать новую подпапку с текущей версией, например, `v2` и скопируйте в него существующие файлы. Если это так, вам необходимо:

1. Обновите относительные пути в `tsconfig.json` а также в `tslint.json`.
2. Добавьте правила сопоставления путей, чтобы убедиться, что тесты выполняются для предполагаемой версии.

Например [history v2 `tsconfig.json`](https://github.com/%44efinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/history/v2/tsconfig.json) looks like:

```json
{
    "compilerOptions": {
        "baseUrl": "../../",
        "typeRoots": ["../../"],
        "paths": {
            "history": ["history/v2"]
        }
    },
    "files": ["index.d.ts", "history-tests.ts"]
}
```

Если в Definitely Typed есть другие пакеты, несовместимые с новой версией, вам нужно будет добавить сопоставления путей к старой версии. Вам также нужно будет сделать это для пакетов в зависимости от пакетов в зависимости от старой версии.

Например, `react-router` зависит от `history@2`, поэтому [react-router `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router/tsconfig.json) есть сопоставление пути с `"history": [ "history/v2" ]`;
транзитивно `react-router-bootstrap` (который зависит от `react-router`) также добавляет отображение пути в свой [`tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router-bootstrap/tsconfig.json).

Также, `/// <reference types=".." />` не будет работать с отображением пути, поэтому зависимости должны использовать `import`.

#### Как мне написать определения для пакетов, которые могут использоваться и глобально и в качестве модуля?

Руководство TypeScript содержит отличную [общую информацию о написании определений](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), а также [этот пример файла определения](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html) , в котором показано, как создать определение с использованием синтаксиса модуля в стиле ES6, а также указаны объекты, доступные для глобальной области. Этот метод демонстрируется практически в определении для [definition for `big.js`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts), библиотекой, которую можно загружать глобально с помощью тега скрипта на веб-странице или импортировать с помощью импорта по требованию или в стиле ES6.

Чтобы проверить, как ваше определение может использоваться как при глобальных ссылках, так и в качестве импортированного модуля, создайте тестовую папку `test`, и поместите туда два тестовых файла. Назовите один `YourLibraryName-global.test.ts` а другой `YourLibraryName-module.test.ts`. _Глобальный_ тестовый файл должен использовать определение в соответствии с тем, как он будет использоваться в скрипте, загруженном на веб-страницу, где библиотека доступна в глобальной области видимости - в этом сценарии не следует указывать оператор импорта. Тестовый файл _модуля_ должен использовать определение в соответствии с тем, как оно будет использоваться при импорте (включая оператор(ы) `import`). Если вы указали свойство `files` в файле `tsconfig.json`, обязательно включите оба тестовых файла. [Практический пример этого](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) также доступен в определении `big.js`.

Обратите внимание, что не требуется полностью использовать определение в каждом тестовом файле - достаточно протестировать только глобально доступные элементы в глобальном тестовом файле и полностью выполнить определение в тестовом файле модуля, или наоборот.

#### А как насчет областных пакетов?

Типы для пакета с областью `@foo/bar` должны указываться в `types/foo__bar`. Обратите внимание на двойное подчеркивание.

Когда `dts-gen` используется для компоновки пакета с областью действия, свойство `paths` должно быть вручную адаптировано в сгенерированном файле
`tsconfig.json` для правильной ссылки на пакет с областью действия:

```json
{
    "paths": {
        "@foo/*": ["foo__*"]
    }
}
```

#### Должен ли я добавить пустой namespace в пакет, который не экспортирует модуль для использования импорта в стиле ES6?

Некоторые пакеты, такие как [chai-http](https://github.com/chaijs/chai-http), экспортируют функцию.

Импорт этого модуля с импортом в стиле ES6 в форме `import * as foo from "foo";` приводит к ошибке:

> error TS2497: Module 'foo' resolves to a non-module entity and cannot be imported using this construct

Эту ошибку можно устранить, объединив объявление функции с пустым namespace'ом с тем же именем, но это не рекомендуется.
Это часто цитируемый [ответ с Stack Overflow](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this) по этому вопросу.

Более целесообразно импортировать модуль, используя `import foo = require("foo");` синтаксис или использовать импорт по умолчанию, такой как `import foo from "foo";` при использовании флага `--allowSyntheticDefaultImports`, если среда выполнения вашего модуля поддерживает схему взаимодействия для модулей не-ECMAScript как таковых.

## Лицензия

Этот проект лицензирован по лицензии MIT.

Авторские права на файлы определений принадлежат каждому участнику, указанному в начале каждого файла определения.
