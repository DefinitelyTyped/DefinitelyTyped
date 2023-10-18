# Definitely Typed

> 이 저장소는 고품질의 타입스크립트(TypeScript) 자료형 정의(Type definition)를 위한 저장소입니다.

*이 도움말은 [영어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md), [스페인어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md), [러시아어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md), 그리고 [중국어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.zh-Hans.md)로도 읽으실 수 있습니다!*

<!-- For translators: add link to README.ja.md above! -->

*[관리자 설명서](./docs/admin.md) 링크*

## 현재 상태

저장소 및 퍼블리싱 과정의 상태를 표시합니다.
기여자분들이 작성한 PR 또는 패키지에 문제가 발생했을 경우 이 표시를 보면 도움이 될 수 있습니다.

* 최신 빌드가 [타입 체크/린트](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint) 과정을 깔끔하게 통과했습니다: [![Build Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.DefinitelyTyped?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=1&branchName=master)
* 모든 패키지가 typescript@next상에서 타입 체크/린트 과정을 깔끔하게 통과합니다: [![Build status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/Nightly%20dtslint)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=8)
* 모든 패키지가 1시간 내에 [npm에 배포](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher)되었습니다: [![Publish Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
* [typescript-bot](https://github.com/typescript-bot)이 Definitely Typed에서 잘 돌고 있습니다 [![Activity Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)

상태 표시가 비정상이거나 고장 표시가 발생하면 [Definitely Typed Discord 채널](https://discord.gg/typescript)에서 이 문제를 알려주세요.

## 선언 파일(Declaration file)이 뭔가요?

[타입스크립트 안내서(TypeScript handbook)](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)를 읽어보세요.

## 어떻게 받을 수 있나요?

### npm

이 방법을 사용하기를 추천합니다. 아래는 예시입니다:

```sh
npm install --save-dev @types/node
```

`node` 를 위한 자료형(Typing)이 컴파일 과정에 자동으로 포함될 겁니다.
모듈을 사용하지 않는 경우 `types` 참조를 추가해 주어야 할 수 있습니다.

```ts
/// <reference types="node" />
```

더 자세한 내용은 [안내서(Handbook)](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)에서 확인해보실 수 있습니다.

npm 의 "foo" 패키지에 대응되는 자료형 패키지는 "@types/foo" 입니다.
원하시는 패키지를 찾을 수 없는 경우, [타입서치(TypeSearch)](https://microsoft.github.io/TypeSearch/) 사이트에서 한 번 찾아보세요.

그래도 찾을 수 없는 경우, 찾고 있는 패키지가 자료형(Typing)을
[함께 제공](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)하고 있지는 않은지 확인해보세요.
이 경우 주로 `package.json` 파일의 `"types"` 나 `"typings"` 필드(Field)를 통해 제공되지만,
`/// <reference path="" />` 같은 주석을 사용하여 패키지 안의 ".d.ts" 파일들을 직접 가져와야 할 수도 있습니다.

#### 이전 버전 TypeScript (4.0 또는 그 이전)

Definitely Typed는 2년이 지나지 않은 TypeScript 버전만을 대상으로 패키지를 테스트합니다.
현재 버전 4.1 및 그 이상만을 테스트하고 있습니다.
TypeScript 2.0에서 4.0 버전을 사용하는 경우, 그래도 `@types` 패키지를 한번 설치해 보셔도 무방합니다. 최신 TypeScript 기능을 사용하는 패키지는 그리 많지 않으니까요.
그러나 작동 여부를 보장하지는 못합니다.
지원 기간은 다음과 같습니다:

<img src="docs/support-window.svg#gh-light-mode-only" style="width:100%">
<img src="docs/support-window.svg#gh-dark-mode-only" style="width:100%">

`@types` 패키지 안에는 패키지가 확실하게 지원하는 TypeScript 버전이 태그로 쓰여 있으므로, 2년 지원 기간이 지난 오래된 패키지도 보통 찾아보실 수 있습니다.
예를 들어, `npm dist-tags @types/react` 명령어를 입력하면 TypeScript 2.5는 react@16.0용 타입을, TypeScript 2.6 및 2.7은 react@16.4용 타입을 사용할 수 있는 것을 확인하실 수 있습니다:

|태그 | 버전|
|----|---------|
|latest| 16.9.23|
|ts2.0| 15.0.1|
| ... | ... |
|ts2.5| 16.0.36|
|ts2.6| 16.4.7|
|ts2.7| 16.4.7|
| ... | ... |

#### TypeScript 1.*

* 이 저장소의 `master` 브랜치에서 직접 다운로드해 프로젝트에 삽입하기
* ~~[Typings](https://github.com/typings/typings)를 사용하기~~ (다른 방법을 사용해주세요. typings는 더이상 추천하지 않습니다)
* ~~[NuGet](https://nuget.org/packages?q=DefinitelyTyped) 을 사용하기~~ (다른 방법을 사용해주세요. NuGet은 더 이상 DT 자료형(Typing)을 제공하지 않습니다.)

위 방법을 사용할 경우 수동으로 [참조(Reference)](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)를 추가해주어야 할 수 있습니다.


## 어떻게 기여하나요?

Definitely Typed는 여러분과 같은 많은 기여자들의 도움 덕분에 돌아가고 있습니다!

### 테스트

개선한 부분을 세상에 공유하기 전에 먼저 직접 사용해 보세요.

#### 이미 존재하는 패키지를 수정하고 테스트하기

새로운 기능을 추가하려면 [모듈 증강(module augmentation)](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)를 사용할 수 있습니다.
물론 `node_modules/@types/foo/index.d.ts` 를 직접 수정하실 수도 있으며, 이 파일을 복사한 다음 아래의 과정을 따라하실 수도 있습니다.


#### 새 패키지를 테스트하기

사용하고 계신 `tsconfig.json` 에 다음 내용을 추가해주세요.

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

(`types` 대신 `src/types` 을 사용하실 수도 있습니다.)
그리고 "foo" 모듈(Module)에 대한 선언(Declaration)을 포함하는 `types/foo/index.d.ts` 파일을 만들어주세요.
이제 코드 안에서 여러분의 새 자료형 선언(Type declaration)을 사용하는 `"foo"` 모듈(Module)을 임포트(Import)하실 수 있을 겁니다.
코드를 컴파일하고 실행시켜서 여러분의 자료형(Typing)이 실행 중에 실제로 벌어지는 일과 잘 맞아떨어지는지 확인해주세요.
실제 코드를 통한 확인이 끝나면, [풀 리퀘스트(Pull request)](#풀-리퀘스트pull-request-만들기)를 만들어주세요.
[이미 존재하는 패키지를 수정](#이미-존재하는-패키지를-수정하기)하거나 [새 패키지를 만들기](#새-패키지를-만들기)위한 과정들을 따라하시면 됩니다.


### 풀 리퀘스트(Pull request) 만들기

패키지가 잘 작동하는지 확인하셨다면, Definitely Typed에 공유해주세요.

우선, 이 저장소를 [포크(fork)](https://guides.github.com/activities/forking/)해 주시고, [node](https://nodejs.org/) 를 설치하신 뒤, `npm install` 명령을 실행해주세요.


#### 이미 존재하는 패키지를 수정하기

* `cd types/<package to edit>` 명령을 실행합니다.
* 자료형(Typing) 파일들을 수정합니다. [테스트를 추가하는 것도 잊지마세요](#my-package-teststs)!
  만약 브레이킹 체인지(Breaking change)를 만드셨다면, [메이저 버전(major version)](#패키지를-새-메이저-버전major-version에-맞게-갱신하고-싶어요)을 꼭 올려주세요.
* 패키지 머릿주석의 "Definitions by" 부분에 여러분의 이름을 추가하실 수도 있습니다.
  - 이름을 추가하시면 다른 사람들이 그 패키지에 대한 풀 리퀘스트(Pull request)나 이슈(Issue)를 만들 때 여러분에게 알람이 갑니다.
  - `// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>` 와 같이 여러분의 이름을 줄의 맨 마지막에 추가할 수 있습니다.
  - 사람이 너무 많을 경우엔, 다음과 같이 여러 줄로 쓰실 수도 있습니다.
  ```typescript
  // Definitions by: Alice <https://github.com/alice>
  //                 Bob <https://github.com/bob>
  //                 Steve <https://github.com/steve>
  //                 John <https://github.com/john>
  ```
* [`npm test <package to test>` 명령을 실행시키고 결과를 확인해주세요](#검증하기).

이미 존재하는 패키지에 대한 풀 리퀘스트(Pull request)를 만들었을 경우에는, `dt-bot` 이 이전 저자들을 자동으로 호출하는지 확인해주세요.
그렇지 않은 경우에는, 여러분이 직접 풀 리퀘스트(Pull request)와 관계있는 사람들을 호출할 수도 있습니다.


#### 새 패키지를 만들기

만약 라이브러리를 만드는 중이고 라이브러리가 타입스크립트(TypeScript)로 쓰여있다면, Definitely Typed 에 선언(Declaration)을 올리는 대신 패키지에 [자동생성된 선언(Declaration) 파일을 포함](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)시킬 수 있습니다.

npm 패키지를 위한 자료형(Typing) 패키지를 만드시려면, 패키지의 이름과 같은 이름의 디렉토리를 만들어주세요.
npm 에 올라가 있지 않은 패키지를 위한 자료형(Typing) 패키지를 만드시려면, 그 패키지가 npm 에 올라와 있는 패키지와 이름이 겹치지 않는지 확인해주세요.
(`npm info <my-package>` 명령어를 사용하여 `<my-package>` 패키지가 npm 에 있는지 확인할 수 있습니다.)

새 자료형 패키지는 다음과 같은 구조로 구성되어있어야만 합니다.

| 파일 이름 | 용도 |
| --- | --- |
| `index.d.ts` | 패키지를 위한 자료형(Typing)을 포함하는 파일입니다. |
| [`<my-package>-tests.ts`](#my-package-teststs) | 자료형(Typing)의 테스트를 위한 파일입니다. 이 파일의 코드는 실행되지는 않지만, 자료형 검사(Type checking)를 통과해야 합니다. |
| [`tsconfig.json`](#tsconfigjson) | `tsc` 명령을 돌릴 수 있게 해주는 파일입니다. |
| [`tslint.json`](#linter-tslintjson) | 린터(Linter)를 사용할 수 있게 해주는 파일입니다. |

이 파일들은, npm ≥ 5.2.0 에서는 `npx dts-gen --dt --name <my-package> --template module` 명령으로,
그 이하 경우에는 `npm install -g dts-gen` 와 `dts-gen --dt --name <my-package> --template module` 명령으로 만들 수 있습니다.
`dts-gen` 의 모든 옵션(Option)을 보고싶으시면 [dts-gen](https://github.com/Microsoft/dts-gen) 저장소를 확인해주세요.

Definitely Typed 의 관리자들이 주기적으로 새로운 풀 리퀘스트(Pull request)들을 확인하기는 하지만,
다른 풀 리퀘스트(Pull request)가 많을 경우 확인이 느려질 수 있다는 걸 알아주세요.

[base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js) 패키지는 좋은 예시 중 하나입니다.

#### 패키지 삭제하기

패키지가 스스로의 형(Type)을 [포함](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)하게 되면, Definitely Typed 에 있는 자료형(Typing) 패키지를 삭제하는 것이 좋습니다.

`pnpm run not-needed -- <typingsPackageName> <asOfVersion> [<libraryName>]` 명령어를 사용하여 자료형(Typing) 패키지를 삭제할 수 있습니다.
- `<typingsPackageName>` 는 삭제할 디렉토리의 이름입니다.
- `<asOfVersion>`  는 새 스텁(Stub) 용 `@types/<typingsPackageName>` 를 퍼블리시(Publish)할 버전입니다. 이 버전은 현재 npm 에 올라간 버전보다 더 높은 버전이어야 합니다.
- `<libraryName>` 는 패키지의 이름을 읽기 쉽게 쓴 것입니다. 즉, "angular2" 대신에 "Angular 2" 와 같이 쓰는 것이 좋습니다. (생략했을 경우에는 `<typingsPackageName>` 와 같은 것으로 취급됩니다.)

Definitely Typed 의 다른 패키지들이 삭제된 자료형(Typing) 패키지를 사용하고 있을 경우, 형(Type)을 포함하기 시작한 원래 패키지를 사용하도록 수정해야합니다. 삭제된 자료형(Typing) 패키지를 사용하는 각 Definitely Typed 패키지들의 [`package.json`](#packagejson) 파일에 `"dependencies": { "<libraryName>": "x.y.z" }` 를 추가해주시면 됩니다.

Definitely Typed 에 한 번도 올라온 적 없는 패키지가 형(Type)을 포함하게 되었다면, `notNeededPackages.json` 파일에 추가할 필요도 없습니다.

#### 검증하기

`npm test <package to test>` 명령을 통해 변경점을 테스트할 수 있습니다. 이 때, `<package to test>`은 테스트하고 싶은 패키지의 이름입니다.

작성한 dts 파일을 타입스크립트 컴파일러로 돌려보기 위해 테스트 스크립트 내부적으로 [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint)를 사용합니다.

#### Naming

npm 패키지를 위한 자료형(Typing) 패키지를 만드시려면, 패키지의 이름과 같은 이름의 디렉토리를 만들어주세요.
npm 에 올라가 있지 않은 패키지를 위한 자료형(Typing) 패키지를 만드시려면, 그 패키지가 npm 에 올라와 있는 패키지와 이름이 겹치지 않는지 확인해주세요.
(`npm info <my-package>` 명령어를 사용하여 `<my-package>` 패키지가 npm 에 있는지 확인할 수 있습니다.)

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

You can [validate your changes](#검증하기) with `npm test <package to test>` from the root of this repo, which takes changed files into account.

어떤 표현식(Expression)이 특정한 형(Type)을 가진다고 단언(Assert)하고 싶을 때에는 `$ExpectType` 를 사용하시면 됩니다. 어떤 표현식(Expression)이 컴파일에 실패해야하는 경우에는 `@ts-expect-error` 를 하시면 됩니다.

```js
// $ExpectType void
f(1);

// @ts-expect-error
f("one");
```

[dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint#write-tests) 저장소의 README 파일에서 더 자세한 내용을 확인하실 수 있습니다.

#### Linter: `tslint.json`

The linter configuration file, `tslint.json` should contain `{ "extends": "@definitelytyped/dtslint/dt.json" }`, and no additional rules.

If for some reason some rule needs to be disabled, [disable it for that specific line](https://palantir.github.io/tslint/usage/rule-flags/#comment-flags-in-source-code:~:text=%2F%2F%20tslint%3Adisable%2Dnext%2Dline%3Arule1%20rule2%20rule3...%20%2D%20Disables%20the%20listed%20rules%20for%20the%20next%20line) using `// tslint:disable-next-line:[ruleName]` — not for the whole package, so that disabling can be reviewed. (There are some legacy lint configs that have additional contents, but these should not happen in new work.)

#### `tsconfig.json`

`tsconfig.json` should have `noImplicitAny`, `noImplicitThis`, `strictNullChecks`, and `strictFunctionTypes` set to `true`.

자료형(Typing) 패키지에 새 파일을 추가하거나, `async` 키워드를 사용하기 위해 `"target"` 을 `"es6"` 로 설정하거나, `"lib"` 를 추가하거나, `jsx` 지원을 추가하기 위해서 `tsconfig.json` 파일을 변경해야 할 수도 있습니다.

#### `package.json`

일반적으로는 `package.json` 파일을 사용할 필요가 없습니다. 패키지가 퍼블리시(Publish)될 때 패키지를 위한 `package.json` 파일은 자동으로 생성됩니다.
가끔 보이는 `package.json` 파일은 의존하는 것들을 표시하기 위해 사용됩니다. [예시](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json)를 한 번 보세요.
의존성을 제외한 다른 필드(Field)들, 그러니까 `"description"` 같은 것들은 사용해서는 안됩니다.
옛날 `@types` 패키지를 사용하고 싶으실 경우에도 `"dependencies": { "@types/<libraryName>": "x.y.z" }` 와 같은 내용을 `package.json` 파일에 넣으셔야 합니다.

#### `OTHER_FILES.txt`

If a file is neither tested nor referenced in `index.d.ts`, add it to a file named `OTHER_FILES.txt`. This file is a list of other files that need to be included in the typings package, one file per line.

#### 많이 저지르는 실수들

* 우선, [안내서(Handbook)](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)에 나와있는 내용들을 따라주세요.
* 코드에서는 모든 곳에서 탭(Tab)을 사용하거나, 항상 4 개의 띄어쓰기를 사용해주세요.
* `function sum(nums: number[]): number`의 경우, 만약 함수가 인자를 변경하지 않는다면 `ReadonlyArray` 를 사용해주세요.
* `interface Foo { new(): Foo; }`의 경우,
  이런 선언은 이 형(Type)을 가진 객체(Object)에 `new` 를 사용할 수 있도록 만듭니다. 많은 경우 여러분은 `declare class Foo { constructor(); }` 를 사용하려는 것일 겁니다.
* `const Class: { new(): IClass; }`의 경우,
  `new` 를 사용할 수 있는 상수를 만드는 대신, `class Class { constructor(); }` 와 같이 클래스 선언(Class declaration)을 사용하는 게 더 좋습니다.
* `getMeAT<T>(): T`의 경우,
  만일 자료형 매개변수(Type parameter)가 함수의 매개변수에 등장하지 않는다면, 그런 제너릭(Generic) 함수를 사용할 필요가 없습니다.
  그 제너릭(Generic) 함수는 단순히 자료형 단언(Type assertion)을 위장시킨 것뿐입니다. 이 경우 `getMeAT() as number` 와 같이 진짜 자료형 단언(Type assertion) 을 사용하는 게 더 좋습니다.
  다음은 괜찮은 제너릭(Generic)의 예시입니다. `function id<T>(value: T): T;`.
  다음은 문제가 있는 제너릭(Generic)의 예시입니다. `function parseJson<T>(json: string): T;`.
  예외적으로, `new Map<string, number>()` 와 같은 경우는 괜찮습니다.
* `Function` 이나 `Object` 와 같은 형(Type)을 사용하는 것은 대부분의 경우 문제를 일으킵니다. 99% 의 경우 더 구체적인 형(Type)을 사용하는게 가능합니다. [함수(Function)](https://www.typescriptlang.org/docs/handbook/functions.html#function-types) 를 위해서는 `(x: number) => number` 와 같은, 객체를 위해서는 `{ x: number, y: number }` 와 같은 형(Type)들을 사용할 수 있습니다. 형(Type)에 대한 정보가 전혀 없을 경우에는, `Object` 형(Type)이 아니라 [`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) 형(Type)을 사용해야 합니다. 만일 어떤 형(Type)이 객체라는 사실만 알고 있는 경우, `Object` 나 `{ [key: string]: any }` 가 아니라 [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type) 를 사용해주세요.
* `var foo: string | any`의 경우,
  `any` 가 합 자료형(Union type)의 안에서 사용될 경우, 결과 형(Type)은 언제나 `any` 가 됩니다. 따라서 형(Type)의 `string` 부분이 유용해 보인다 하더라도, 사실은 자료형 검사(Type checking)의 측면에서 `any` 와 다른 것이 없습니다.
  대신, `any`, `string`, 나 `string | object` 중 하나를 필요에 맞게 골라서 사용해주세요.

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

## 자주 하는 질문들

#### 이 저장소와 `@types` 패키지들이 대체 무슨 관계가 있는 건가요?

`master` 브랜치(Branch)의 내용들이 [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) 를 사용해 자동으로 `@types` 퍼블리시(Publish)됩니다.

#### 풀 리퀘스트(Pull request)를 제출했습니다. 이게 합쳐질 때까지 얼마나 걸리나요?

상황에 따라 다르지만, 대부분의 풀 리퀘스트(Pull request)들은 일주일 안에 합쳐집니다. 머릿주석에 있는 저자 중 한명에 의해 승인된 풀 리퀘스트(Pull request)는 보통 더 빨리 합쳐집니다. 새로운 패키지에 대한 풀 리퀘스트(Pull request)는 관리자의 세세한 코드 리뷰를 필요로 하기 때문에 더 오래 걸리는 경우가 많습니다. 각 PR 들은 합쳐지기 전에 TypeScript or Definitely Typed 팀 구성원의 코드 리뷰를 받아야 하며, 이는 사람이 하는 일이기 때문에 느려질 수도 있으니 양해를 바랍니다. [풀 리퀘스트 번다운 보드(New Pull Request Status Board)](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/5)에서 열린 풀 리퀘스트에 대한 관리자들의 진행도를 확인하실 수 있습니다.

#### 내 풀 리퀘스트(Pull request)는 합쳐졌습니다. 언제 npm 에 `@types` 패키지가 갱신되나요?

npm 의 패키지들은 수시간 안에 갱신될 겁니다. 만약 24 시간이 지나도 갱신되지 않으면, 문제를 파악하기 위해 @RyanCavanaugh 나 @andy-ms 를 풀 리퀘스트(Pull request)에서 호출해주세요.

#### 다른 자료형 정의(Type definition)에 의존하는 자료형 정의(Type definition)을 만들고 있습니다. `<reference types="" />` 와 임포트(import) 중 무엇을 사용해야하나요?

외부 모듈(`export` 를 사용하는 모듈)을 사용할 경우, 임포트(import)를 사용해주세요.
환경과 관련된 모듈(ambient module)(`declare module` 를 쓰거나 전역 변수들을 선언한 모듈)을 사용할 경우, `<reference types="" />` 를 사용해주세요.

#### 어떤 패키지들에 `tslint.json` 이 없거나, `tsconfig.json` 에 `"noImplicitAny": true`, `"noImplicitThis": true`, 나 `"strictNullChecks": true` 가 없어요.

그럼 그 패키지들이 잘못된 겁니다. 고쳐서 풀 리퀘스트(Pull request)를 제출해주시면 고맙겠습니다.

#### 자료형 정의(Type definition)을 요청할 수 있나요?

이미 요청된 자료형 정의(Type definition)들을 [여기서](https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/categories/request-a-new-types-package) 보실 수 있습니다.

#### DOM 을 위한 자료형 정의(Type definitions)는요?

웹 표준(Web standard)과 관련이 있는 자료형(Typing)들은 [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator) 저장소에 기여해서 고치실 수 있습니다. 고쳐진 자료형(Typing)은 `lib.dom.d.ts` 파일에 포함될 겁니다.

#### 어떤 패키지가 `export =` 를 쓰고 있는데, 저는 디폴트 임포트(Default import)가 더 좋습니다. `export =` 를 `export default` 로 바꿔도 되나요?

타입스크립트(TypeScript) 2.7 이상을 사용하고 계시면 프로젝트 안에서 `--esModuleInterop` 를 사용해주세요.
그 이하의 경우, 디폴트 임포트(Default import)가 동작하는 환경(Webpack, SystemJS, esm)에서 작업 중이시면 [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/compiler-options.html) 를 사용하는 걸 고려해보세요.
자료형 정의(Type definition)가 맞는 경우에는 자료형 정의(Type definition)을 수정하지 마세요.
npm 패키지의 경우, `node -p 'require("foo")'` 가 원하는 값이라면 `export =` 이 맞고, `node -p 'require("foo").default'` 이 원하는 값이라면 `export default` 이 맞습니다.

#### 자료형 선언(Type declaration)에서 타입스크립트(TypeScript) 3.3 이상의 기능을 사용하고 싶습니다.

정의(Definition) 머릿주석(`// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`) 뒤에 `// Minimum TypeScript Version: 3.3` 를 추가해주시면 됩니다.

#### 타입스크립트(TypeScript)에 기본으로 포함되지 않은 DOM API 를 추가하고 싶어요.

[TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme) 저장소가 관련되어있을 가능성이 있습니다. 해당 저장소의 안내를 따라주세요.
해당 표준이 아직 초안인 상태라면, 이 저장소와 관련된 일입니다.
`dom-` 으로 시작하는 패키지를 만드신 뒤, "Project" 머릿주석 부분에 해당 표준의 링크를 써 주세요.
다만 표준이 초안을 벗어나면 Definitely Typed 에서 삭제되고 `@types` 패키지가 지원이 중단된(Deprecated) 것으로 표시될 수도 있습니다.

#### 패키지를 새 메이저 버전(major version)에 맞게 갱신하고 싶어요.

옛날 버전도 계속해서 수정할 예정이라면, 이전 버전에 해당하는 새 디렉토리(예를 들어 `2.` 버전을 위해서는 `v2`)를 만들고 현재 파일들을 그 디렉토리로 옮겨야 합니다. 새 디렉토리로 옮긴 뒤에는

1. `tsconfig.json` 와 `tslint.json` 에 포함된 상대경로들을 수정해주어야 합니다.
2. 경로 대응 규칙(Path mapping rule)을 추가하여 테스트가 올바른 버전을 검사하도록 해야합니다.

예를 들어, [history 패키지의 2 버전의 `tsconfig.json`](https://github.com/%44efinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/history/v2/tsconfig.json) 파일은 다음과 같이 생겼습니다.

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

수정 중인 패키지에 의존하는 Definitely Typed 의 다른 패키지들이 새 버전과 호환되지 않을 경우, 그 패키지들에도 옛날 버전으로의 경로 대응 규칙(Path mapping rule)을 추가해주어야 합니다. 수정 중인 패키지에 의존하는 패키지에 의존하는 패키지들에도 똑같은 작업을 해 주셔야 합니다.

예를 들어, `browser-sync` 패키지는 `history@2` 패키지에 의존하고 있기 때문에, [browser-sync 패키지의 `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/browser-sync/tsconfig.json) 파일이 `"micromatch": [ "micromatch/v2" ]` 와 같은 경로 대응 규칙(Path mapping rule)을 가지고 있는 걸 볼 수 있습니다.
이어서 (`browser-sync` 패키지에 의존하는 패키지인) `browser-sync-webpack-plugin` 또한 [`tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/browser-sync-webpack-plugin/tsconfig.json) 파일 안에 경로 대응 규칙(Path mapping rule)을 가지고 있는 것을 보실 수 있습니다.

`/// <reference types=".." />` 에서는 경로 대응 규칙(Path mapping rule)이 동작하지 않기 때문에, Definitely Typed 패키지로에 의존할 때에는 임포트(import) 를 사용해야 합니다.

#### 전역적으로도 모듈로도 사용될 수 있는 패키지의 자료형 선언(Type declaration)은 어떻게 쓰나요?

타입스크립트 안내서(TypeScript Handbook)은 [선언(Declaration)을 쓰는 방법에 대한 전반적인 정보](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)와 [예시들](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html)을 포함하고 있습니다. 이 내용에는 ES6 식의 모듈 문법을 사용할 수 있는 자료형 선언(Type declaration)을 만드는 방법과 객체를 전역에서 사용할 수 있도록 하는 방법이 포함되어 있습니다. [`big.js` 패키지의 자료형 선언(Type declaration)](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts)이 실례입니다. 이 패키지는 웹 페이지의 스크립트 태그를 사용해 불러올 수 있으며, 또한 ES6 식의 임포트(Import) 구문을 사용해서 불러올 수도 있습니다.

여러분의 패키지가 임포트(Import) 구문을 사용했을 때와 전역적으로 불렀을 때를 테스트 해보고 싶다면, `test` 디렉토리를 추가하고 `YourLibraryName-global.test.ts` 그리고 `YourLibraryName-module.test.ts` 라는 이름으로 테스트 파일 두 개를 추가해주세요. **전역(Global)** 테스트 파일은 웹 페이지에서 전역적으로 사용될 때를 테스트하는 파일입니다. 이 파일에서는 임포트(Import) 구문을 사용하지 않아야 합니다. **모듈(Module)** 테스트 파일은 임포트(Import) 구문을 사용할 때를 테스트 하는 파일입니다. 만약 여러분의 `tsconfig.json` 파일이 `files` 필드(Field)를 가지고 있다면, 이 필드(Field)는 반드시 두 테스트 파일을 모두 포함해야 합니다. [이 방식을 사용하는 실례](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) 또한 `big.js` 패키지의 자료형 선언(Type declaration)에서 확인해보실 수 있습니다.

각각의 테스트 파일에 모든 상황을 테스트할 필요는 없다는 걸 잊지마세요. 전역 테스트 파일에서는 전역적으로 사용될 때만 테스트하고, 모듈 테스트 파일에서 나머지 상황들을 모두 테스트 할 수 있으며, 그 반대의 경우도 괜찮습니다.

#### 지역 패키지(Scoped package)의 경우는 어떻게 하죠?

`@foo/bar` 패키지와 같은 지역 패키지(Scoped package)를 위한 자료형 패키지(Type package)는 `types/foo__bar` 디렉토리에 추가하면 됩니다. 밑줄 문자가 두 번 있는 것에 주의하세요.

지역 패키지(Scoped package)를 위한 자료형 패키지(Type package)를 생성하기 위해 `dts-gen` 를 사용한 경우에는,
다음과 같이 생성된 `tsconfig.json` 안에 지역 패키지(Scoped package)를 위한 적절한 경로 대응 규칙(Path mapping rule)을 추가해주어야 합니다.

```json
{
    "paths":{
      "@foo/*": ["foo__*"]
    }
}
```

#### ES6 에서 사용하는 임포트(Import)를 사용하기 위해 모듈을 익스포트(Export)하지 않는 패키지들에 빈 이름공간을 추가해야 하나요?

[chai-http](https://github.com/chaijs/chai-http) 패키지와 같은 몇몇 패키지들은 함수를 익스포트(Export)합니다.

이런 패키지들을 `import * as foo from "foo";` 와 같이 임포트(Import)하면 다음과 같은 오류가 발생합니다.

> error TS2497: Module 'foo' resolves to a non-module entity and cannot be imported using this construct

이 오류는 함수의 이름과 똑같은 빈 이름공간(Namespace)을 정의해서 없앨 수 있으나, 좋은 방법은 아닙니다.
[스택오버플로(Stack Overflow)의 이 질문의 답변](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this)이 이 문제와 관련되어 자주 언급됩니다.

`import foo = require("foo");` 를 사용하여 모듈을 임포트(Import)하거나, 환경에서 ES6 모듈 변환(Module interop)을 지원한다면 `--allowSyntheticDefaultImports` 와 함께 `import foo from "foo";` 같은 디폴트 임포트(Default import)를 사용하는 것이 더 나은 방법입니다.

## 라이센스

이 프로젝트는 MIT license 가 적용되어 있습니다.

각 자료형 정의(Type definition) 파일들의 저작권은 각 기여자들에게 있으며, 기여자들은 해당 자료형 정의(Type definition) 파일들의 맨 위에 나열되어 있습니다.
