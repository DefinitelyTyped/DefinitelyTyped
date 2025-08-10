<!--  Translated based on README.md at https://github.com/DefinitelyTyped/DefinitelyTyped/commit/07a3c6155f202ab4f104f511bec78abd189c24f8-->

# Definitely Typed

> 이 리포지터리는 고품질의 타입스크립트(TypeScript) 타입 정의(Type definition)를 위한 리포지터리입니다.

_이 README는 [영어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md), [스페인어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md), [러시아어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md), [중국어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.zh-Hans.md), [포르투갈어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.pt.md), [이탈리아어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.it.md), [일본어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ja.md), 그리고 [프랑스어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.fr.md)로도 읽을 수 있습니다!_

_[관리자 설명서](./docs/admin.md) 링크_

## !!! 중요! 최근 리포지토리의 레이아웃이 변경되었습니다! !!!

최근 Definitely Typed가 본격적인 `pnpm` 모노리포(monorepo)로 변경되었습니다. 리포지토리의 패키지 레이아웃 변경 사항을 확인하려면 이 문서를 다시 읽기를 권장합니다.

우선, `node_modules`를 정리하기 위해 리포지토리에서 `git clean -fdx` (Windows의 경우 `node ./scripts/clean-node-modules.js`)를 실행하고, 워크스페이스 루트(Workspace root)를 설치하기 위해 `pnpm install --filter .`를 실행해 주세요. `pnpm install`에 대한 자세한 정보는 이후 섹션을 참조하세요.

## 현재 상태

해당 섹션은 리포지터리의 상태와 배포 과정을 추적합니다.
기여자의 PR이나 패키지에 이슈가 있는 경우 유용합니다.

- 최신 빌드가 [타입 체크/린트](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint) 과정을 깔끔하게 통과했습니다: [![Build status](https://github.com/DefinitelyTyped/DefinitelyTyped/actions/workflows/CI.yml/badge.svg?branch=master&event=push)](https://github.com/DefinitelyTyped/DefinitelyTyped/actions/workflows/CI.yml?query=branch%3Amaster+event%3Apush)
- 모든 패키지가 typescript@next상에서 타입 체크/린트 과정을 깔끔하게 통과합니다: [![Build status](https://github.com/DefinitelyTyped/DefinitelyTyped/actions/workflows/CI.yml/badge.svg?branch=master&event=schedule)](https://github.com/DefinitelyTyped/DefinitelyTyped/actions/workflows/CI.yml?query=branch%3Amaster+event%3Aschedule)
- 모든 패키지가 1시간 내에 [npm에 배포](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher)되었습니다: [![Publish Status](https://github.com/DefinitelyTyped/DefinitelyTyped/actions/workflows/watchdog-publisher.yml/badge.svg)](https://github.com/DefinitelyTyped/DefinitelyTyped/actions/workflows/watchdog-publisher.yml)
- [typescript-bot](https://github.com/typescript-bot)이 Definitely Typed에서 잘 돌고 있습니다: [![Activity Status](https://github.com/DefinitelyTyped/DefinitelyTyped/actions/workflows/watchdog-typescript-bot.yml/badge.svg)](https://github.com/DefinitelyTyped/DefinitelyTyped/actions/workflows/watchdog-typescript-bot.yml)

상태 표시가 비정상이거나 고장 표시가 발생하면 [Definitely Typed Discord 채널](https://discord.gg/typescript)에서 이 문제를 알려주세요.

## 선언 파일(Declaration file)이 뭔가요?

[타입스크립트 안내서(TypeScript handbook)](https://www.typescriptlang.org/ko/docs/handbook/declaration-files/introduction.html)를 읽어보세요.

## 어떻게 받을 수 있나요?

### npm

아래 방법이 추천됩니다:

```sh
npm install --save-dev @types/node
```

지역 모듈(Scoped module)의 자료형(Typings)을 설치하려면, `@`를 제거하고 스코프 뒤에 밑줄 두 개(__)를 추가하세요. 예를 들어, `@babel/preset-env`의 자료형을 설치하는 방법은 다음과 같습니다.

```sh
npm install --save-dev @types/babel__preset-env
```

자료형은 컴파일 과정에 자동으로 포함됩니다.
모듈을 사용하지 않는 경우 `types` 참조를 추가해 주어야 합니다.

```ts
/// <reference types="node" />
```

더 자세한 내용은 [안내서(Handbook)](https://www.typescriptlang.org/ko/docs/handbook/declaration-files/consumption.html)에서 확인해보실 수 있습니다.

"foo" npm 패키지를 위한 자료형 패키지는 "@types/foo" 입니다.

만약 해당 패키지가 `package.json` 파일에 `types` 또는 `typings` 키를 사용하여 자료형을 명시하면, npm 레지스트리는 해당 패키지가 사용 가능한 바인딩(available bindings)을 제공함을 다음과 같이 표시합니다:

![image](https://user-images.githubusercontent.com/30049719/228748963-56fabfd1-9101-42c2-9891-b586b775b01e.png)

만약 그래도 자료형을 찾을 수 없다면, ".d.ts" 파일을 찾아 `/// <reference path="" />` 주석으로 수동으로 가져와야 합니다.

### Support window

Definitely Typed는 출시 2년 미만의 TypeScript 버전에 대해서 패키지를 테스트합니다.

<img src="docs/support-window.svg#gh-light-mode-only" style="width:100%">
<img src="docs/support-window.svg#gh-dark-mode-only" style="width:100%">

<details>
<summary>이전 버전 TypeScript</summary>

`@types` 패키지 안에는 패키지가 확실하게 지원하는 TypeScript 버전이 태그로 쓰여 있으므로, 2년 지원 기간이 지난 오래된 패키지도 보통 찾을 수 있습니다.
예를 들어, `npm dist-tags @types/react` 명령어를 입력하면 TypeScript 2.5는 react@16.0용 타입을, TypeScript 2.6 및 2.7은 react@16.4용 타입을 사용할 수 있는 것을 확인할 수 있습니다:

| 태그   | 버전    |
| ------ | ------- |
| latest | 16.9.23 |
| ts2.0  | 15.0.1  |
| ...    | ...     |
| ts2.5  | 16.0.36 |
| ts2.6  | 16.4.7  |
| ts2.7  | 16.4.7  |
| ...    | ...     |

#### TypeScript 1.*

- 이 리포지터리의 `master` 브랜치에서 수동으로 다운로드해 프로젝트에 삽입하기
- ~~[Typings](https://github.com/typings/typings)를 사용하기~~ (다른 방법을 사용해주세요. typings는 더이상 추천하지 않습니다)
- ~~[NuGet](https://nuget.org/packages?q=DefinitelyTyped) 을 사용하기~~ (다른 방법을 사용해주세요. NuGet은 더 이상 DT 자료형(Typings)을 제공하지 않습니다.)

위 방법을 사용할 경우 수동으로 [참조(Reference)](https://www.typescriptlang.org/ko/docs/handbook/triple-slash-directives.html)를 추가해주어야 할 수 있습니다.

</details>

## 어떻게 기여할 수 있나요?

Definitely Typed는 당신과 같은 많은 기여자의 도움으로 운영되고 있습니다!

### 테스트

개선 사항을 세상에 공개하기 전에, 먼저 프로젝트에 `typename.d.ts` 파일을 만들고 `export` 구문을 작성해서 직접 타입을 사용해 보세요.

```ts
declare module "libname" {
    // Types inside here
    export function helloWorldMessage(): string;
}
```

#### 기존 패키지 테스트 수정하기

변경 사항을 테스트하기 위해 `node_modules/@types/foo/index.d.t`s` 파일을 직접 수정한 뒤, 아래 단계에 따라 변경 내용을 이 리포지토리에 반영할 수 있습니다.

다른 방법으로는, [모듈 보강(Module augmentation)](https://www.typescriptlang.org/ko/docs/handbook/declaration-merging.html#%EB%AA%A8%EB%93%88-%EB%B3%B4%EA%B0%95-module-augmentation)을 사용해 기존 DT 모듈의 타입을 확장하거나 위에 언급된 `declare module` 구문으로 `node_modules`에 있는 버전을 덮어쓸 수 있습니다.

#### 새 패키지에 테스트 추가하기

사용하고 계신 `tsconfig.json` 에 다음 내용을 추가해주세요.

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

(`types` 대신 `src/types` 을 사용하실 수도 있습니다.)
그리고 "foo" 모듈(Module)에 대한 선언(Declaration)을 포함하는 `types/foo/index.d.ts` 파일을 만들어주세요.
이제 코드 안에서 당신의 새 타입 선언(Type declaration)을 사용하는 `"foo"` 모듈(Module)을 임포트(Import)하실 수 있을 겁니다.
코드를 컴파일하고 실행시켜서 당신의 자료형(Typings)이 런타임(Runtime) 중에 실제로 벌어지는 일과 잘 맞아떨어지는지 확인해주세요.

실제 코드를 통해 타입 선언을 테스트 한 뒤, [풀 리퀘스트(Pull request)](#풀-리퀘스트pull-request-보내기)를 보내주세요.
[기존 패키지를 수정](#기존-패키지-수정하기)하거나 [새 패키지 만들기](#새-패키지-만들기) 섹션 설명을 따르세요.

### 풀 리퀘스트(Pull request) 보내기

패키지를 테스트한 이후, Definitely Typed에 공유해주세요.

1. 리포지터리를 [포크](https://guides.github.com/activities/forking/)하세요.
1. 포크한 리포지터리를 클론하세요.
   - Definitely Typed 리포지터리는 용량이 크므로, `git clone` 실행 시 `--filter=blob:none`옵션을 사용하여 ["blobless clone"](https://github.blog/open-source/git/get-up-to-speed-with-partial-clone-and-shallow-clone/#user-content-blobless-clones)을 사용하면 시간과 공간을 절약할 수 있습니다.
1. [node](https://nodejs.org/)를 설치하세요.
1. `pnpm install`을 실행하세요.
   - `pnpm install`은 당신이 수정하지 않을 패키지를 포함한 "모든" 리포지터리를 설치합니다. 일부만 설치하고 싶다면, `pnpm install -w --filter "{./types/foo}..."`를 실행하여 `@types/foo`와 그 모든 의존성만을 설치할 수 있습니다. 만약 `@types/foo`에 의존하는 패키지들의 테스트를 실행해야 한다면, `pnpm install -w --filter "...{./types/foo}..."`를 실행하여 테스트에 필요한 모든 관련 패키지를 가져올 수 있습니다.

> [!참고]
> Windows를 사용하시는 경우, `git clean`이 `node_modules` 디렉터리를 삭제하지 못하거나 실행 중 멈추는 현상을 겪을 수 있습니다. `node_modules`를 삭제해야 한다면, `pnpm clean-node-modules`를 실행하여 리포지터리를 초기화할 수 있습니다.

저희는 DefinitelyTyped로 들어오는 수많은 풀 리퀘스트가 완전 자동화 방식으로 처리될 수 있도록 봇을 사용합니다. [여기](https://devblogs.microsoft.com/typescript/changes-to-how-we-manage-definitelytyped/)에서 그 이유와 방법에 대해 더 자세히 읽어볼 수 있습니다. 다음은 DT 풀 리퀘스트의 생명 주기를 보여주는 유용한 참고 자료입니다:

<img src="https://raw.githubusercontent.com/microsoft/DefinitelyTyped-tools/main/packages/mergebot/docs/dt-mergebot-lifecycle.svg">

#### 기존 패키지 수정하기

- `cd types/<package to edit>`를 실행합니다.
- 자료형(typings) 파일들을 수정합니다. [테스트를 추가하는 것도 잊지마세요](#my-package-teststs)!
  만약 브레이킹 체인지(Breaking change)를 만드셨다면, [메이저 버전(Major version)](#패키지를-새-메이저-버전Major-version에-맞게-업데이트-하고-싶어요)을 꼭 올려주세요.
- 패키지 머릿주석의 "Definitions by" 부분에 당신의 이름을 추가하실 수도 있습니다.
  - 이름을 추가하시면 다른 사람들이 그 패키지에 대한 풀 리퀘스트(Pull request)나 이슈(Issue)를 만들 때 당신에게 알람이 갑니다.
  - `// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>` 와 같이 당신의 이름을 줄의 맨 마지막에 추가할 수 있습니다.
  - 사람이 너무 많을 경우엔, 다음과 같이 여러 줄로 쓰실 수도 있습니다.
  ```typescript
  // Definitions by: Alice <https://github.com/alice>
  //                 Bob <https://github.com/bob>
  //                 Steve <https://github.com/steve>
  //                 John <https://github.com/john>
  ```
- [`npm test <package to test>` 명령을 실행시키고 결과를 확인해주세요](#테스트-실행하기).

기존 패키지에 대한 풀 리퀘스트(Pull request)를 보내는 경우, `dt-bot`이 이전 저자들을 자동으로 호출하는지 확인해주세요.
그렇지 않은 경우에는, 당신이 직접 풀 리퀘스트와 관계있는 사람들을 호출할 수도 있습니다.

#### 새 패키지 만들기

만약 당신이 타입스크립트로 작성된 라이브러리의 저자(Author)라면, Definitely Typed에 추가하는 대신 당신의 패키지에 [자동생성된 선언(Declaration) 파일을 포함](https://www.typescriptlang.org/ko/docs/handbook/declaration-files/publishing.html)시키세요.
또한 JSDoc 타입 주석을 사용하여 JavaScript 파일로부터 선언 파일을 생성할 수도 있습니다.

만약 기존 npm 패키지를 위한 타입 패키지를 만드려면, 패키지의 이름과 같은 이름의 디렉터리를 만들어주세요.
만약 npm에 올라와 있지 않은 패키지를 위한 타입 패키지를 만드려면, 당신이 선택한 패키지 이름이 다른 npm 패키지와 이름이 겹치지 않는지 확인해주세요.
(`npm info <my-package>`를 사용하여 `<my-package>` 패키지가 npm에 있는지 확인할 수 있습니다.)

새 패키지는 다음과 같은 구조로 구성되어있어야만 합니다.

| 파일 이름                                      | 용도                                                                                                                         |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `index.d.ts`                                   | 패키지를 위한 자료형(Typings)을 포함하는 파일입니다.                                                                         |
| [`<my-package>-tests.ts`](#my-package-teststs) | 자료형(Typing)의 테스트를 위한 파일입니다. 이 파일의 코드는 실행되지는 않지만, 자료형 검사(Type checking)를 통과해야 합니다. |
| [`tsconfig.json`](#tsconfigjson)               | `tsc` 명령을 돌릴 수 있게 해주는 파일입니다.                                                                                 |
| [`.eslintrc.json`](#linter-eslintrcjson)       | (드물게 사용) eslint를 위해 작성된 린트 규칙을 비활성화할 때만 필요합니다.                                                   |
| [`package.json`](#packagejson)                 | 이름, 버전, 의존성 등 패키지에 대한 메타데이터를 포함합니다.                                                                 |
| [`.npmignore`](#npmignore)                     | 패키지에 포함될 파일들을 지정합니다.                                                                                         |

이 파일들은, npm ≥ 5.2.0 에서는 `npx dts-gen --dt --name <my-package> --template module` 명령으로,
그 이하 경우에는 `npm install -g dts-gen` 와 `dts-gen --dt --name <my-package> --template module` 명령으로 만들 수 있습니다.
`dts-gen` 의 모든 옵션(Option)을 보고싶으시면 [dts-gen](https://github.com/microsoft/DefinitelyTyped-tools/tree/main/packages/dts-gen) 리포지터리를 확인해주세요.

Definitely Typed의 메인테이너들이 주기적으로 새 풀 리퀘스트(Pull request)들을 확인하지만, 풀 리퀘스트가 많을 경우 확인이 느려질 수 있다는 점을 유의해주세요.

[base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/a2ff1d2088143cbacc15786c7f3b0ec67179523c/types/base64-js) 패키지는 좋은 예시입니다.

#### 패키지 제거하기

패키지가 스스로의 타입을 [포함](https://www.typescriptlang.org/ko/docs/handbook/declaration-files/publishing.html)(Bundle)하게 되면, 혼란을 막기위해 Definitely Typed에서 타입을 제거하기를 권장합니다.

`pnpm run not-needed -- <typingsPackageName> <asOfVersion> [<libraryName>]`을 실행하여 제거할 수 있습니다.

- `<typingsPackageName>` : 제거할 디렉터리의 이름입니다.
- `<asOfVersion>` : 새 스텁(Stub) 용 `@types/<typingsPackageName>` 를 배포(Publish)할 버전입니다. 이 버전은 현재 npm 에 올라간 버전보다 더 높은 버전이어야 합니다.
- `<libraryName>` : Definitely Typed의 타입 정의를 대체하는 npm 패키지의 이름입니다. 보통 `<typingsPackageName>`과 동일하며, 이 경우 생략할 수 있습니다.

만약 패키지가 Definitely Typed에 등록된 적이 없다면, `notNeededPackages.json` 파일에 추가할 필요가 없습니다.

#### 테스트 실행하기

변경 사항을 테스트하려면 `pnpm test <테스트할_패키지>`를 실행하세요. 여기서 `<테스트할_패키지>`는 당신이 작업한 패키지의 이름입니다.
개별 `package.json` 파일에는 테스트 스크립트가 정의되어 있지 않으므로, 이 명령어는 반드시 DefinitelyTyped 디렉터리에서 실행해야 합니다.

해당 스크립트는 작성된 dts 파일을 타입스크립트 컴파일러로 돌려보기 위해 [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint)를 사용합니다.

모든 변경 사항이 준비되면, `pnpm run test-all`을 사용하여 당신의 변경사항이 다른 모듈에 어떤 영향을 미치는지 확인하세요.

##### @arethetypeswrong/cli (`attw`) 검사

dtslint는 [@arethetypeswrong/cli](https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/packages/cli)의 모듈 포맷 및 `package.json` 설정 검사를 포함합니다.이 검사는 npm에서 SemVer 메이저 버전과 호환되는 구현 패키지(SemVer-major-compatible implementation package)를 찾아 DefinitelyTyped 패키지와 비교할 수 있을 때만 실행됩니다. (`package.json`에 `nonNpm`으로 표시된 DefinitelyTyped 패키지는 이 검사를 건너뜁니다.)

현재 많은 패키지가 `attw` 검사를 통과하지 못하며 수정이 필요합니다. 점진적인 개선을 위해, [`attw.json](./attw.json) 파일의`failingPackages`목록에 있는 패키지는`attw`검사에 실패하더라도`dtslint`실행이 실패하지는 않습니다. 하지만`pnpm test my-package`출력에는 실패 내용이 계속 보고됩니다. 패키지를 수정했다면`failingPackages`에서 제거하여, 이후`attw`검사 실패 시`dtslint` 실행도 실패하도록 만들어야 합니다.

`attw`가 보고하는 모든 문제에는 출력 결과에 관련 문서가 링크되어 있습니다. 문제를 피하는 데 도움이 되는 몇 가지 경험적인 규칙은 다음과 같습니다:

- Definitely Typed 패키지의 `package.json`은 실제 구현 패키지의 `package.json`이 `type`과 `exports` 필드를 사용한다면, 해당 필드들을 동일하게 가져야 합니다. 예를 들어, 구현 패키지의 `package.json`이 아래와 같다면:

  ```json
  {
      "name": "my-package",
      "version": "1.0.1",
      "type": "module",
      "main": "dist/cjs/index.cjs",
      "exports": {
          ".": {
              "import": "./dist/esm/index.js",
              "require": "./dist/cjs/index.cjs"
          },
          "./subpath": {
              "import": "./dist/esm/subpath.js",
              "require": "./dist/cjs/subpath.cjs"
          }
      }
  }
  ```

  DefinitelyTyped의 `package.json`은 다음과 같아야 합니다:

  ```json5
  {
      "name": "@types/my-package",
      "version": "1.0.9999",
      "type": "module",
      "types": "index.d.ts",
      "exports": {
          ".": {
              "import": "./index.d.ts",
              "require": "./index.d.cts"
          },
          "./subpath": {
              "import": "./subpath.d.ts",
               "require": "./subpath.d.cts"
          }
      }
  }
  ```
  각 `exports` 하위 경로(Subpath)가 반영되었고, 각 JavaScript 파일에 상응하는 선언 파일이 일치하는 확장자와 함께 제공된 것을 확인해주세요.(`.d.ts` 파일은 `.js` 파일의 타입을 정의하며, `.mjs`나 `.cjs` 파일이 아닙니다!)
- 구현 패키지가 `module.exports = ...`를 사용할 때, Definitely Typed 패키지는 `export default`가 아닌 `export =`를 사용해야 합니다. (대안으로, `module.exports`가 단순히 이름 있는 속성들로 이루어진 객체라면, Definitely Typed 패키지는 이름 있는 내보내기(Named exports)를 여러 개 사용할 수 있습니다.) 이 문제를 해결할 때 가장 흔한 곤란한 점은 주된 `export` 외에 다른 타입들을 어떻게 함께 내보낼지 혼란스럽다는 것입니다. 예를 들어, 아래 타입들이 `export default`를 잘못 사용하고 있다고 가정해 봅시다:

  ```ts
  export interface Options {
      // ...
  }
  export default function doSomething(options: Options): void;
  ```

  `export default`를 `export =`로 바꾸면 에러가 발생합니다:

  ```ts
  export interface Options {
      // ...
  }
  declare function doSomething(options: Options): void;
  export = doSomething;
  // ^^^^^^^^^^^^^^^^^
  // Error: An export assignment cannot be used in a module with other exported elements.
  ```

  이 문제를 해결하려면, 타입들을 함수와 동일한 이름의 네임스페이스(Namespace) 안으로 옮기세요:

  ```ts
  declare namespace doSomething {
      export interface Options {
          // ...
      }
  }
  declare function doSomething(options: doSomething.Options): void;
  export = doSomething;
  ```

문제 해결에 도움이 필요하면 [Definitely Typed Discord 채널](https://discord.gg/typescript)에서 질문해주세요.

#### 이름짓기

npm 패키지에 대한 자료형(Typings)을 추가하는 경우, 같은 이름의 디렉터리를 생성하세요.
만약 자료형을 추가하려는 패키지가 npm에 없다면, `package.json`에 `"nonNpm": true`를 설정하고, 선택한 이름이 npm에 있는 다른 패키지 이름과 충돌하지 않는지 확인해야 합니다.
(`pm info <my-package>` 명령어를 사용하여 `<my-package>`패키지의 존재 여부를 확인할 수 있습니다.)

드문 경우, `nonNpm`을 `"conflict"`로 설정할 수도 있는데, 이는 npm에 같은 이름의 패키지가 존재하지만 해당 타입이 의도적으로 그 패키지와 충돌한다는 것을 나타냅니다.
이는 `@types/node`처럼 특정 환경을 정의하는 패키지나 `aws-lambda`와 같은 더미 패키지의 경우에 해당될 수 있습니다. 가능하다면 `"conflict"` 사용은 피하세요.

#### `<my-package>-tests.ts`

테스트 파일로 간주되는 `<my-package>-tests.ts` 파일과, 이 파일이 임포트(Import)하는 모든 `*.ts` 파일이 있어야 합니다.
만약 모듈 폴더에 테스트 파일이 보이지 않는다면, `<my-package>-tests.ts`파일을 생성하세요.
테스트 파일은 `@types/<my-package>`로 배포되는 `*.d.ts` 파일에서 내보낸(Export) API의 유효성을 검사하는 데 사용됩니다.
테스트 파일은 배포에는 포함되지 않습니다.

`*.d.ts` 파일을 변경할 때에는, 다른 사람이 당신이 의존하는 코드를 실수로 손상시키는 일이 없도록 해당 API가 어떻게 사용되는지를 보여주는 `*.ts` 파일 변경 사항도 함께 포함해야 합니다. 모듈 폴더에 테스트 파일이 없다면 `<my-package>-tests.ts`를 생성하세요.
예를 들어, `.d.ts` 파일의 함수에 새 매개변수(param)를 추가하는 변경 사항은 다음과 같습니다:

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

테스트 코드를 어디서부터 작성해야 할지 모르겠다면, 해당 모듈의 README에 있는 예제들이 좋은 시작점입니다.

루트 리포지터리에서 `npm test <package to test>` 명령어를 실행하여 [테스트를 실행](#테스트-실행하기)할 수 있습니다. 이 명령어는 변경된 파일들을 고려하여 동작합니다.

어떤 표현식(Expression)이 특정한 타입을 가진다고 단언(Assert)하고 싶을 때에는 `$ExpectType` 를 사용할 수 있습니다. 어떤 표현식이 컴파일에 실패해야하는 경우에는 `@ts-expect-error` 를 사용할 수 있습니다.

```js
// $ExpectType void
f(1);

// @ts-expect-error
f("one");
```

더 자세한 내용은 [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint#write-tests) README에서 확인하세요.

##### Linter: `.eslintrc.json`

만약 린트(Lint) 규칙을 비활성화해야 한다면, 특정 라인에서만 비활성화하세요:

```ts
// eslint-disable-next-line no-const-enum
const enum Const {
    One,
}
const enum Enum { // eslint-disable-line no-const-enum
    Two,
}
```

`.eslintrc.json`에서 규칙을 비활성화할 수도 있지만, 새 패키지에서는 권장하지 않습니다.
패키지 전체에 대한 규칙 비활성화는 리뷰를 어렵게 만듭니다.

#### `tsconfig.json`

`tsconfig.json`에는 `noImplicitAny`, `noImplicitThis`, `strictNullChecks`, `strictFunctionTypes`이 `true`로 설정되어 있어야 합니다.

자료형(typings) 패키지에 새 파일을 추가하거나, `async` 키워드를 사용하기 위해 `"target"` 을 `"es6"` 로 설정하거나, `"lib"` 를 추가하거나, `jsx` 지원을 추가하기 위해서 `tsconfig.json` 파일을 변경해야 할 수도 있습니다.

#### `package.json`

이 파일은 필수이며, 다음 템플릿을 따라야 합니다:

```json5
{
    "private": true,
    "name": "@types/PACKAGE-NAME",
    "version": "1.2.9999",
    "projects": [
        "https://aframe.io/"
    ],
    "dependencies": {
        "@types/DEPENDENCY-1": "*",
        "@types/DEPENDENCY-2": "*"
    },
    "devDependencies": {
        "@types/PACKAGE-NAME": "workspace:."
    },
    "owners": [
        {
            "name": "Your Name Here",
            "githubUsername": "ghost"
        }
    ]
}
```

`package.json`은 다른`@types` 패키지를 포함한 모든 의존성(Dependencies)을 명시합니다

`@types`가 아닌 의존성은 반드시 [허용된 외부 의존성 목록](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt)에 추가되어야 합니다.
[Pikaday가 좋은 예시입니다.](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json)
이러한 추가는 메인테이너(Maintainer)에 의해 승인되며, 이 과정을 통해 `@types` 패키지가 악의적인 패키지에 의존하지 않도록 합니다.

만약 구현 패키지가 ESM을 사용하고 `package.json`에 `"type": "module"`을 명시했다면, 당신의 `package.json`도 동일하게 수정해야 합니다:

```json
{
    "type": "module"
}
```

이는 구현 패키지의 `package.json`에 `exports` 필드가 있는 경우에도 동일하게 적용됩니다.

##### 피어 의존성(Peer dependencies)

Definitely Typed는 `package.json` 내 `peerDependencies` 사용을 허용합니다.
피어 의존성은 패키지 매니저가 예기치 않게 너무 새로운 버전이나 동일한 패키지의 여러 버전을 설치하는 상황을 방지하는 데 도움이 될 수 있습니다.
하지만 피어 의존성과 관련해서는 패키지 매니저마다 이를 다루는 방식이 다르다는 것이 곤란합니다.(예: yarn은 자동 설치하지 않고, npm은 버전 불일치 시 --legacy-peer-deps 옵션이 필요함)
따라서, 새로운 피어 의존성을 도입하는 PR은 메인테이너(Maintainer)의 승인이 필요하며 특정 상황으로 제한되어야 합니다.

**일반적으로, 타입 패키지는 원본(Upstream) 패키지가 동일한 패키지(또는 그 타입)에 대한 피어 의존성을 가지고 있을 경우에만 피어 의존성을 가져야 합니다.**
예를 들어, React 컴포넌트에 대한 DT 패키지는 `@types/react@*`에 대한 피어 의존성을 명시할 수 있습니다. 왜냐하면 사용자는 애초에 JSX를 사용하기 위해 `@types/react`를 설치해야 하기 때문입니다. 만약 사용자가 프로젝트에 `@types/react@16`을 설치했는데 npm에 더 새로운 버전의 `@types/react`가 존재한다면, 피어 의존성은 패키지 매니저가 그 새로운 버전 대신 `@types/react@16`을 선택하도록 도울 수 있습니다.
마찬가지로, `chai-as-promised`는 `chai`에 대한 피어 의존성을 가지므로, `@types/chai-as-promised`는 `@types/chai`에 대한 피어 의존성을 가져야 합니다.

원본 패키지가 피어 의존성을 가지고 있지 않지만, 피어 의존성이 적절한 경우도 있습니다.
이는 보통 원본 패키지가 다른 패키지를 확장하고 그 존재를 가정하면서도, 실제로는 피어 의존성을 선언했어야 하지만 하지 않은 경우입니다.
예를 들어,`chai-match-pattern`은 `chai`를 확장하지만 `chai`에 대한 피어 의존성를 선언하지 않았음에도, 동작을 위해 `chai`를 필요로 합니다. `@types/chai-match-pattern`은 `@types/chai`에 대한 피어 의존성을 가져야 합니다.

만약 원본 패키지의 일반 의존성(Regular dependancy) 때문에 어떤 패키지가 단순히 다른 패키지의 타입을 API의 일부로 노출하는 경우라면, 피어 의존성를 사용해서는 안 됩니다.
예를 들어, `express`는 `dependencies`에 `qs`를 가지고 있습니다. 사용자가 `express`를 설치할 때 `qs`를 수동으로 설치할 필요가 없습니다. 마찬가지로,`@types/express`는 `dependencies`에 `@types/qs`를 가집니다.
`@types/qs`를 `@types/express`의 피어 의존성으로 선언하는 것은 올바르지 않은데, 이는 일부 하위 사용자가 `@types/qs`를 수동으로 설치하도록 요구하기 때문입니다.

#### `.npmignore`

이 파일은 각 `@types` 패키지에 포함될 파일을 정의합니다. 이 파일은 반드시 특정 형식을 따라야 합니다. 리포지터리에 단일 버전만 있는 패키지의 경우:

```ignore
*
!**/*.d.ts
!**/*.d.cts
!**/*.d.mts
!**/*.d.*.ts
```

이는 "모든 파일을 무시하되, 모든 선언 파일은 무시하지 말라"는 의미입니다. 리포지터리에 여러 버전이 있는 패키지의 경우, "최신" 버전(최상위 레벨)은 다음과 같은 내용을 포함해야 합니다:

```ignore
*
!**/*.d.ts
!**/*.d.cts
!**/*.d.mts
!**/*.d.*.ts
/v15/
/v16/
/v17/
```

이는 이전 `.npmignore`와 동일하지만, 각 버전별 하위 디렉터리를 무시하는 내용이 추가된 것입니다.

이 파일의 내용이 올바르지 않으면 CI가 실패하며 올바른 값을 제안할 것입니다. 이 파일의 내용과 상관없이, 퍼블리셔(Publisher)는 오직 선언 파일만 배포(Publish)합니다.

#### 많이 저지르는 실수

- 우선, [안내서(Handbook)](https://www.typescriptlang.org/ko/docs/handbook/declaration-files/do-s-and-don-ts.html)에 나와있는 내용들을 따라주세요.
- 코드에서는 모든 곳에서 탭(Tab)을 사용하거나, 항상 4 개의 띄어쓰기를 사용해주세요.
- `function sum(nums: number[]): number`의 경우, 만약 함수가 인자를 변경하지 않는다면 `ReadonlyArray` 를 사용해주세요.
- `interface Foo { new(): Foo; }`의 경우,
  이런 선언은 해당 타입을 가진 객체(Object)에 `new` 를 사용할 수 있도록 만듭니다. 많은 경우 당신은 `declare class Foo { constructor(); }` 를 사용하려는 것일 겁니다.
- `const Class: { new(): IClass; }`의 경우,
  `new` 를 사용할 수 있는 상수를 만드는 대신, `class Class { constructor(); }`와 같이 클래스 선언(Class declaration)을 사용하는 게 더 좋습니다.
- `getMeAT<T>(): T`의 경우,
  만일 타입 매개변수(Type parameter)가 함수의 매개변수에 등장하지 않는다면, 그런 제네릭(Generis) 함수를 사용할 필요가 없습니다.
  그 제네릭 함수는 단순히 자료형 단언(Type assertion)을 위장시킨 것뿐입니다. 이 경우 `getMeAT() as number` 와 같이 진짜 자료형 단언을 사용하는 게 더 좋습니다.
  다음은 괜찮은 제네릭의 예시입니다. `function id<T>(value: T): T;`.
  다음은 문제가 있는 제네릭의 예시입니다. `function parseJson<T>(json: string): T;`.
  예외적으로, `new Map<string, number>()` 와 같은 경우는 괜찮습니다.
- `Function` 이나 `Object` 와 같은 타입을 사용하는 것은 대부분의 경우 문제를 일으킵니다. 99% 의 경우 더 구체적인 타입을 사용하는게 가능합니다. [함수(Function)](https://www.typescriptlang.org/ko/docs/handbook/2/functions.html#%ED%95%A8%EC%88%98-%ED%83%80%EC%9E%85-%ED%91%9C%ED%98%84%EC%8B%9D) 를 위해서는 `(x: number) => number` 와 같은, 객체를 위해서는 `{ x: number, y: number }` 와 같은 타입들을 사용할 수 있습니다. 타입에 대한 정보가 전혀 없을 경우에는, `Object` 타입이 아니라 [`any`](https://www.typescriptlang.org/ko/docs/handbook/2/everyday-types.html#any) 타입을 사용해야 합니다. 만일 어떤 타입이 객체라는 사실만 알고 있는 경우, `Object` 나 `{ [key: string]: any }` 가 아니라 [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type) 를 사용해주세요.
- `var foo: string | any`의 경우,
  `any` 가 유니온 타입(Union type)의 안에서 사용될 경우, 결과 타입은 언제나 `any` 가 됩니다. 따라서 타입의 `string` 부분이 유용해 보인다 하더라도, 사실은 자료형 검사(Type checking)의 측면에서 `any` 와 다른 것이 없습니다.
  대신, `any`, `string`, 나 `string | object` 중 하나를 필요에 맞게 골라서 사용해주세요.

### 정의 소유자(Definition owners)

> 요약: `.github/CODEOWNERS` 파일을 수정하지 말고, 항상 `package.json`의 소유자 목록을 수정하세요.

DT(Definitely Typed)에는 특정 모듈 타입의 품질을 유지하고자 하는 사람들을 위한 "정의 소유자"라는 개념이 있습니다.

- 목록에 자신을 추가하면, 누군가 해당 패키지에 대한 풀 리퀘스트(Pull request)나 이슈(Issue)를 생성할 때마다 (당신의 GitHub 사용자 이름으로) 알림을 받게 됩니다.
- 당신의 PR 리뷰는 이 리포지터리를 유지하는 [봇](https://github.com/microsoft/DefinitelyTyped-tools/tree/main/packages/mergebot)에게 더 높은 중요도를 갖게됩니다.
- DT 메인테이너들은 안정적인 생태계를 보장하기 위해 정의 소유자들을 신뢰하고 있습니다. 가벼운 마음으로 자신을 추가하지 말아 주세요.

자신을 정의 소유자로 추가하려면, `package.json`의 `owners` 배열을 수정하세요:

```json
"owners": [
    {
        "name": "Some Person",
        "githubUsername": "somebody"
    },
    {
        "name": "Some Corp",
        "url": "https://example.org"
    }
]
```

이 목록은 기여에 대한 공로를 인정하는 데 사용되는 것이 아니라, 오직 PR 리뷰를 관리하는 데만 사용된다는 점을 유의하세요.

정의 소유자 목록은 일주일에 한 번, 우리의 진실의 공급원(Source of truth)인 `.github/CODEOWNERS` 파일과 동기화됩니다.

## Definitely Typed의 역사

Definitely Typed는 GitHub에서 가장 활발한 리포지터리 중 하나입니다. 이 프로젝트가 어떻게 시작되었는지 궁금해하셨을지도 모릅니다. @johnnyreilly가 Definitely Typed의 역사에 대해 글을 썼습니다. 이 글은 @borisyankov가 생성한 리포지터리에서 시작하여 TypeScript 생태계의 중추적인 부분이 되기까지, Definitely Typed의 초창기 시절 이야기를 담고 있습니다. [여기에 Definitely Typed의 이야기를 읽어보실 수 있습니다.](https://johnnyreilly.com/definitely-typed-the-movie).

## FAQ

#### 이 리포지터리와 `@types` 패키지들은 대체 무슨 관계가 있는 건가요?

`master` 브랜치(Branch)의 내용들이 [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher)를 사용해 자동으로 `@types` 배포(Publish)됩니다.

#### 풀 리퀘스트(Pull request)를 제출했습니다. 병합까지 얼마나 걸리나요?

상황에 따라 다르지만, 대부분의 풀 리퀘스트는 일주일 이내에 병합됩니다.
일부 PR은 모듈 소유자가 직접 병합할 수 있으며, 이 경우 훨씬 더 빠르게 처리될 수 있습니다.
대략적으로는 다음과 같습니다.

> 모듈의 타입만 변경하고 관련 테스트를 함께 수정하는 PR은 훨씬 빠르게 병합됩니다.

타입 패키지의 `package.json`에 명시된 소유자의 승인을 받은 PR은 일반적으로 더 빠르게 병합됩니다. 반면, 새로운 타입 패키지를 추가하는 PR은 메인테이너의 더 많은 검토가 필요하므로 시간이 더 걸릴 수 있습니다. 모든 PR은 병합되기 전에 TypeScript 또는 Definitely Typed 팀 멤버의 검토를 거칩니다. 그러니, 휴먼 팩터(Haman factors)에 의해 발생할 수 있는 지연을 기다려주시면 감사하겠습니다. 메인테이너들이 열려 있는 PR들을 처리하는 진행 상황은 [풀 리퀘스트 상태 보드](https://github.com/orgs/DefinitelyTyped/projects/1)에서 확인할 수 있습니다.

#### 매우 인기 있는 프로젝트에 변경 사항을 제출하고 싶습니다. 왜 인기있는 프로젝트는 다르게 처리되나요?

npm에서 매주 수백만 건씩 다운로드되는 Node, Express, Jest와 같이 매우 인기 있는 모듈의 경우, 기여에 대한 요구 조건이 조금 더 높습니다.
이러한 프로젝트의 변경 사항은 생태계 전반에 막대한 영향을 미칠 수 있으므로 저희는 변경 사항을 매우 신중하게 다룹니다.
이러한 모듈들은 DT(Definitely Typed) 메인테이너의 승인과 모듈 소유자의 적극적인 지지를 모두 필요로 합니다. 이 기준을 통과하기는 상당히 어려울 수 있으며, 주도적으로 이끌어주는 사람(Champion)이 없어 PR이 오랫동안 처리되지 않는 경우도 많습니다.
만약 아무도 PR에 관심을 보이지 않는다면, PR의 범위를 더 좁게 수정해 보시는 것도 좋습니다.

#### 내 풀 리퀘스트(Pull request)가 병합되었습니다. 언제 npm의 `@types` 패키지가 갱신되나요?

npm 의 패키지들은 수시간 안에 갱신될 겁니다. 만약 24 시간이 지나도 갱신되지 않으면, 문제를 파악하기 위해 @RyanCavanaugh 나 @andy-ms를 풀 리퀘스트에서 호출해주세요.

#### 다른 타입 정의(Type definition)에 의존하는 타입 정의를 만들고 있습니다. `<reference types="" />` 와 임포트(Import) 중 무엇을 사용해야하나요?

외부 모듈(`export` 를 사용하는 모듈)을 사용할 경우, 임포트(Import)를 사용해주세요.
환경과 관련된 모듈(Ambient module)(`declare module` 를 쓰거나 전역 변수들을 선언한 모듈)을 사용할 경우, `<reference types="" />` 를 사용해주세요.

#### 어떤 패키지들은 `tslint.json` 이 없거나, `tsconfig.json` 에 `"noImplicitAny": true`, `"noImplicitThis": true`, 나 `"strictNullChecks": true` 가 없어요.

그렇다면 해당 패키지들이 잘못된 겁니다. 고쳐서 풀 리퀘스트(Pull request)를 제출해주시면 감사하겠습니다.

#### 파일이 자동으로 포맷되나요?

네, [dprint](https://dprint.dev)를 사용해 자동으로 포맷됩니다.
[dprint 확장 프로그램](https://dprint.dev/install/#editor-extensions) 사용을 권장합니다.

다른 방법으로는, 코드를 자동으로 포맷해주는 깃 훅(Git hook)을 활성화할 수 있습니다. `pnpm run setup-hooks`을 실행하면, 커밋할 때 마다 변경된 파일에 `dprint fmt` 명령어가 실행됩니다.

풀 리퀘스트가 병합되기 위해서는 정확한 포매팅이 필요하지 않습니다.
포맷되지 않은 코드는 병합된 이후 자동으로 포맷됩니다.

> 💡 VS Code user를 사용한다면, `.vscode/settings.template.json` 파일을 `.vscode/settings.json`으로 복사 하세요.
> 이 템플릿은 [dprint VS Code 확장 프로그램](https://marketplace.visualstudio.com/items?itemName=dprint.dprint)을 이 리포지터리의 기본 포매터로 설정합니다.

#### 타입 정의(Type definition)을 요청할 수 있나요?

이미 요청된 타입 정의들을 [여기서](https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/categories/request-a-new-types-package) 확인할 수 있습니다.

#### DOM을 위한 타입 정의(Type definitions)는요?

웹 표준(Web standard)에 해당하는 타입(Types)의 경우, [TypeScript-DOM-lib-generator](https://github.com/Microsoft/TypeScript-DOM-lib-generator)에서 기여할 수 있습니다. 기여된 타입은 디폴트 `lib.dom.d.ts`에 포함됩니다.

#### 일치하는 패키지가 없는 타입 정의(Type definitions)는요?

만약 소스 자바스크립트 코드가 전혀 없다면(예: 헬퍼 타입이나 명세를 위한 타입을 작성하는 경우), Definitely Typed가 아닌 곳에 타입을 직접 배포해야 합니다.
@types 패키지는 기존 자바스크립트 코드에 타입을 제공하는 것이 목적이므로, 직접 가져와서(Import) 사용하도록 만들어진 것이 아닙니다.
즉, `import type { ... } from "@types/foo"`와 같이 사용될 것을 의도하고 Definitely Typed 패키지를 만들어서는 안 됩니다.
또한, `foo` 패키지가 설치되지 않았는데 `import type { ... } from "foo"`와 같이 타입을 가져올 수 있을 것이라고 기대해서도 안 됩니다.

이는 브라우저 전용 자바스크립트 라이브러리나, node, bun 등과 같은 전체 실행 환경(Environment)을 위한 타입을 제공하는 경우와는 다릅니다. 이러한 경우, 타입은 암시적으로 로드되거나 `/// <references types="foo" />` 주석를 통해 참조됩니다.

#### ES6 임포트(Import)를 사용하기 위해 모듈을 내보내지 않는 패키지에 빈 네임스페이스(Namespace)를 추가해야 할까요??

[chai-http](https://github.com/chaijs/chai-http)같은 몇몇 패키지들은 함수를 익스포트(Export)합니다.

이런 패키지들을 `import * as foo from "foo";`와 같이 임포트(Import)하면 다음과 같은 오류가 발생합니다.

> error TS2497: Module 'foo' resolves to a non-module entity and cannot be imported using this construct

이 오류는 함수 선언을 동일한 이름의 빈 네임스페이스(Namespace)와 병합하여 해결할 수 있지만, 좋은 방법은 아닙니다.
이 내용은 이 문제와 관련하여 흔히 인용되는 [스택오버플로 답변](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this)에 잘 설명되어 있습니다.

`import foo = require("foo");` 구문을 사용하여 모듈을 가져오는 것이 더 적절합니다.
그럼에도 불구하고 `import foo from "foo";`와 같은 디폴트 임포트(Default import)를 사용하고 싶다면 두 가지 옵션이 있습니다.

- 모듈 런타임이 비-ECMAScript 모듈에 대한 상호 운용성 체계를 지원하는 경우, 즉 사용자의 환경(예: Webpack, SystemJS, esm)에서 디폴트 임포트가 작동하는 경우 [--allowSyntheticDefaultImports 컴파일러 옵션을](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs4) 사용할 수 있습니다.

- TypeScript가 비-ECMAScript 모듈과의 상호 운용성을 처리하도록 하려면 (TypeScript 2.7부터) [--esModuleInterop 컴파일러 옵션을](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop) 사용할 수 있습니다.

#### 어떤 패키지가 `export =` 를 쓰고 있는데, 저는 디폴트 임포트(Default import)가 더 좋습니다. `export =` 를 `export default` 로 바꿔도 되나요?

타입스크립트(TypeScript) 2.7 이상을 사용하고 계시면 프로젝트 안에서 `--esModuleInterop` 를 사용해주세요.
그 이하의 경우, 디폴트 임포트(Default import)가 동작하는 환경(Webpack, SystemJS, esm)에서 작업 중이시면 [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/ko/docs/handbook/compiler-options.html)를 사용하는 걸 고려해보세요.
타입 정의(Type definition)가 맞는 경우에는 타입 정의(Type definition)을 수정하지 마세요.
npm 패키지의 경우, `node -p 'require("foo")'` 가 원하는 값이라면 `export =` 이 맞고, `node -p 'require("foo").default'` 이 원하는 값이라면 `export default` 이 맞습니다.

#### 최신 TypeScript 버전의 기능을 사용하고 싶어요

그렇다면 `package.json`에 `"minimumTypeScriptVersion": "X.Y"`를 명시하여 최소 지원 버전을 설정해야 합니다.

하지만, 만약 프로젝트에서 3.7 이상 버전과 호환되는 타입과 3.6 이하 버전과 호환되는 타입을 동시에 지원해야 한다면, `typesVersions` 기능을 사용해야 합니다.
이 기능에 대한 자세한 설명은 [Typescript 공식 문서](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#version-selection-with-typesversions)에 찾아볼 수 있습니다.

다음은 시작을 돕기 위한 간단한 예제입니다:

1. 먼저 `package.json`에 `typesVersions`를 추가해야 합니다:

   ```json
   {
       "private": true,
       "types": "index",
       "typesVersions": {
           "<=3.6": { "*": ["ts3.6/*"] }
       }
   }
   ```

2. 타입 디렉터리 내부에 `typesVersions` 필드에 명시한 하위 디렉터리(이 예제에서는 `ts3.6/`)를 생성합니다. `ts3.6/` 디렉터리는 TypeScript 3.6 및 그 이하 버전을 지원하므로, 기존의 타입과 테스트 파일을 그곳으로 복사합니다.

3. 이제 패키지의 루트 디렉터리로 돌아와 사용하려는 TypeScript 3.7의 새로운 기능들을 추가합니다. 사용자가 이 패키지를 설치하면, TypeScript 3.6 및 그 이하 버전은 `ts3.6/index.d.ts`에서 타입을 가져오고, TypeScript 3.7 이상 버전은 루트의 `index.d.ts`에서 타입을 가져오게 됩니다.

   예시는 [bluebird](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f2512c2cf7cdcf9a487d989e288174e49b7839ab/types/bluebird)에서 확인할 수 있습니다.

#### 타입스크립트 기본적으로 포함되지 않은 DOM API를 추가하고 싶어요.

[TypeScript-DOM-lib-generator](https://github.com/Microsoft/TypeScript-DOM-lib-generator#readme)를 확인해보세요. 해당 리포지터리의 가이드라인을 확인하세요.
만약 해당 표준(Standard)가 아직 초안(Draft) 상태라면 여기(Definitely Typed)에 추가하는 것이 맞습니다.
이 경우, `dom-`으로 시작하는 이름을 사용하고, `package.json`의 "Project" 링크에 해당 표준 문서의 링크를 포함해야 합니다. 해당 표준이 정식으로 채택되면, Definitely Typed에서 해당 패키지를 제거하고 관련된 `@types` 패키지를 사용 중단(Deprecate) 처리할 수 있습니다.

#### Definitely Typed 패키지 버전은 원본 라이브러리 버전과 어떤 관련이 있나요?

_참고: 해당 섹션의 내용은 [시멘틱 버저닝](https://semver.org/)에 대한 이해를 전제로 합니다._

각 Definitely Typed 패키지는 npm에 게시될 때 버전이 매겨집니다. [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher)(`@types` 패키지를 npm에 게시하는 도구)는 `package.json`에 명시된 `major.minor.9999` 버전 번호를 사용하여 타입 선언 패키지의 버전을 설정합니다. 예를 들어, 다음은 Node `20.8.x` 버전 타입 선언의 `package.json` 일부입니다.

```json
{
    "private": true,
    "name": "@types/node",
    "version": "20.8.9999"
}
```

버전이 `20.8.9999`로 표시되어 있으므로, npm에 게시되는 `@types/node` 패키지의 버전은 20.8.x가 됩니다.
`package.json`의 버전은 `major.minor`버전(예: `10.12`)에 `.9999`를 붙인 형태여야 합니다
이는 라이브러리 패키지와 타입 선언 패키지 간에는 주(major) 버전과 부(minor) 버전 번호만 일치시키기 때문입니다.(`.9999`는 로컬 개발 중 @types 패키지가 항상 최신 상태를 유지하도록 보장합니다.)
타입 선언 패키지의 패치 릴리즈 번호(Patch release number)(예: `20.8.0`의 `.0`)는 0으로 초기화되며, 동일한 major/minor 버전의 패키지가 새로 게시될 때마다 1씩 증가합니다.

때때로 타입 선언 패키지와 라이브러리 패키지의 버전이 동기화되지 않을 수 있습니다.
일반적으로 아래와 같은 이유입니다. 라이브러리 사용자에게 불편함을 주는 순서로 나열되었습니다.
오직 마지막 경우만이 전형적으로 문제가 됩니다.

- 위에서 언급했듯이, 타입 선언 패키지의 패치 버전은 라이브러리의 패치 버전과 관련이 없습니다. 이를 통해 Definitely Typed는 라이브러리의 동일한 `major/minor` 버전에 대한 타입 선언을 안전하게 업데이트할 수 있습니다.

- 새로운 기능 때문에 패키지를 업데이트하는 경우, 라이브러리 버전에 맞춰 버전 번호를 업데이트하는 것을 잊지 마세요. 사용자가 자바스크립트 패키지와 `@types` 패키지 버전을 일치시키면 `npm update`는 일반적으로 문제없이 작동합니다.

- 타입 선언 패키지 업데이트가 라이브러리 업데이트보다 늦어지는 것은 흔한 일입니다. 왜냐하면 새로운 기능이 출시될 때 Definitely Typed를 업데이트하는 주체는 라이브러리 메인테이너가 아닌 사용자인 경우가 많기 때문입니다. 따라서 유용한 커뮤니티 구성원이 PR을 보내기까지 며칠, 몇 주, 또는 몇 달이 걸릴 수 있습니다. 만약 이로 인해 불편을 겪고 있다면, 당신이 바로 그 변화를 만드는 주인공이 될 수 있습니다!

❗ 라이브러리의 타입 선언을 업데이트할 때는, `package.json`의 `major.minor` 버전을 반드시 문서화하려는 라이브러리 버전과 일치시켜야 합니다! ❗

#### 패키지를 새 메이저 버전(Major version)에 맞게 업데이트 하고 싶어요.

[시멘틱 버저닝(Semantic versioning)](https://semver.org/)에 따르면, 환성이 깨지는 변경 사항이 있는 버전은 반드시 주(Major) 버전 번호를 올려야 합니다.
예를 들어,`3.5.8` 릴리스 이후에 공개된 함수를 제거하는 라이브러리는 다음 릴리스에서 버전을 `4.0.0`으로 올려야 합니다. 라이브러리의`4.0.0` 버전이 출시되면, Definitely Typed의 타입 선언 패키지 또한 라이브러리 API의 모든 호환성 깨짐 변경 사항을 포함하여 `4.0.0`으로 업데이트되어야 합니다.

많은 라이브러리의 경우 브레이킹 체인지(Breaking changes)를 포함하는 새 버전이 출시되어도, 많은 개발자들이(해당 라이브러리를 의존성으로 사용하는 다른 패키지의 메인테이너를 포함) 즉시 이전하지 않습니다. 이는 새 버전에 맞는 코드를 작성하는데 몇달이 소요될 수 도 있기 때문입니다.
그동안, 구 버전의 라이브러리 사용자들은 구 버전에 대한 타입 선언이 업데이트 되기를 바랄 수 있습니다.

만약 구 버전의 라이브러리에 대한 타입 선언을 업데이트하려면, 현재 버전(곧 '구' 버전이 될)의 이름의 새로운 하위 폴더(예: `/v2/`)를 만들고 기존 파일들을 그곳으로 복사할 수 있습니다

새로운 버전 폴더를 만들 때, `package.json`의 버전 필드가 올바르게 업데이트되었는지 확인해야 합니다. `pnpm`은 필요할 때 이 버전의 패키지를 자동으로 사용합니다. 만약 리포지터리 내 다른 패키지가 이 새 버전에 의존해야 한다면, 해당 패키지들의 `package.json`도 업데이트해야 합니다

예를 들어, `types/history/v2`를 만든다면, `package.json`은 다음과 같을 것입니다:

```json
{
    "private": true,
    "name": "@types/history",
    "version": "2.4.9999"
}
```

다른 패키지는 다음과 같이 해당 버전을 선택할 수 있습니다.

```json
{
    "private": true,
    "name": "@types/browser-sync",
    "version": "2.26.9999",
    "dependencies": {
        "@types/history": "^2"
    }
}
```

또한, `/// <reference types=".." />`는 경로 매핑(Path mapping)과 함께 작동하지 않으므로, 의존성은 반드시 `import`를 사용해야 합니다.

#### 타입 선언 패키기가 라이브러리 패키지 버전을 밀접하게 추적(Track)하는 경우, 브레이킹 타입 체인지(Breaking type changes)는 어떻게 처리되나요?

`@types` 패키지는 항상 동일한 버전의 라이브러리 패키지 타입을 선언합니다. 예를 들어, `@types/foo@5.4.x`는 `foo@5.4.x`를 위한 타입입니다.
결과적으로, 브레이킹 체인지 여부와 상관없이 모든 변경 사항은 패치(patch) 버전으로 게시됩니다. 단, 대상 패키지 버전 자체에 메이저/마이너 버전 변경이 있는 경우는 예외입니다.

DT 메인테이너들은 브레이킹 체인지를 적용할 때, 해당 패키지의 인기도, 제안된 브레이킹 체인지의 이점, 사용자가 자신의 코드를 수정하는데 필요할 것으로 예상되는 노력, 당 변경이 원본 라이브러리의 메이저 버전 업데이트와 동기화될 때까지 합리적으로 연기될 수 있는지 여부를 고려합니다.

#### 전역적으로도 모듈로도 사용될 수 있는 패키지의 타입 선언(Type declaration)은 어떻게 작성하나요?

타입스크립트 안내서(TypeScript Handbook)은 [선언(Declaration)을 작성하는 방법에 대한 전반적인 정보](https://www.typescriptlang.org/ko/docs/handbook/declaration-files/introduction.html)와 [예시들](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html)을 포함하고 있습니다. 이 내용에는 ES6 스타일 모듈 문법을 사용할 수 있는 타입 선언을 만드는 방법과 객체를 전역에서 사용할 수 있도록 하는 방법이 포함되어 있습니다. [`big.js` 패키지의 타입 선언](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts)이 실례입니다. 이 패키지는 웹 페이지의 스크립트 태그를 사용해 불러올 수 있으며, 또한 ES6 스타일 임포트(Import) 구문을 사용해서 불러올 수도 있습니다.

당신의 패키지가 임포트(Import) 구문을 사용했을 때와 전역적으로 불렀을 때를 테스트 해보고 싶다면, `test` 디렉터리를 추가하고 `YourLibraryName-global.test.ts` 그리고 `YourLibraryName-module.test.ts` 라는 이름으로 테스트 파일 두 개를 추가해주세요. **전역(Global)** 테스트 파일은 웹 페이지에서 전역적으로 사용될 때를 테스트하는 파일입니다. 이 파일에서는 임포트(Import) 구문을 사용하지 않아야 합니다. **모듈(Module)** 테스트 파일은 임포트 구문을 사용할 때를 테스트 하는 파일입니다. 만약 당신의 `tsconfig.json` 파일이 `files` 필드(Field)를 가지고 있다면, 이 필드는 반드시 두 테스트 파일을 모두 포함해야 합니다. [이 방식을 사용하는 실례](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) 또한 `big.js` 패키지의 타입 선언(Type declaration)에서 확인해보실 수 있습니다.

각각의 테스트 파일에 모든 상황을 테스트할 필요는 없다는 걸 잊지마세요. 전역 테스트 파일에서는 전역적으로 사용될 때만 테스트하고, 모듈 테스트 파일에서 나머지 상황들을 모두 테스트 할 수 있으며, 그 반대의 경우도 괜찮습니다.

#### 지역 패키지(Scoped package)의 경우는 어떻게 하죠?

`@foo/bar` 패키지와 같은 지역 패키지를 위한 타입 패키지(Type package)는 `types/foo__bar` 디렉터리에 추가하면 됩니다. 밑줄 문자가 두 번 있는 것에 주의하세요.

지역 패키지를 위한 타입 패키지(Type package)를 생성하기 위해 `dts-gen` 를 사용한 경우에는,
다음과 같이 생성된 `tsconfig.json` 안에 지역 패키지를 위한 적절한 경로 대응 규칙(Path mapping rule)을 추가해주어야 합니다.

```json
{
    "paths": {
        "@foo/*": ["foo__*"]
    }
}
```

## 라이센스

이 프로젝트는 MIT license 가 적용되어 있습니다.

각 타입 정의(Type definition) 파일들의 저작권은 각 기여자들에게 있으며, 기여자들은 해당 타입 정의 파일들의 맨 위에 나열되어 있습니다.
