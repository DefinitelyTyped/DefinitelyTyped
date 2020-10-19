# Definitely Typed

> 이 저장소는 고품질의 타입스크립트(TypeScript) 자료형 정의(Type definition)를 위한 저장소입니다.

*이 도움말은 [영어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md), [스페인어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md), [러시아어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md), 그리고 [중국어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.cn.md)로도 읽으실 수 있습니다!*

*[관리자 설명서](./docs/admin.md) 링크*

## 현재 상태

저장소 및 퍼블리싱 과정의 상태를 표시합니다.
기여자분들이 작성한 PR 또는 패키지에 문제가 발생했을 경우 이 표시를 보면 도움이 될 수 있습니다.

* 최신 빌드가 [타입 체크/린트](https://github.com/Microsoft/dtslint) 과정을 깔끔하게 통과했습니다: [![Build Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.DefinitelyTyped?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=1&branchName=master)
* 모든 패키지가 typescript@next상에서 타입 체크/린트 과정을 깔끔하게 통과합니다: [![Build status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/Nightly%20dtslint)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=8)
* 모든 패키지가 1시간 내에 [npm에 배포](https://github.com/microsoft/types-publisher)되었습니다: [![Publish Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
* [typescript-bot](https://github.com/typescript-bot)이 Definitely Typed에서 잘 돌고 있습니다 [![Activity Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)

상태 표시가 비정상이거나 고장 표시가 발생하면 [Definitely Typed Discord 채널](https://discord.gg/typescript)에서 이 문제를 알려주세요.

## 선언 파일(Declaration file)이 뭔가요?

[타입스크립트 안내서(TypeScript handbook)](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)를 읽어보세요.

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

더 자세한 내용은 [안내서(Handbook)](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)에서 확인해보실 수 있습니다.

NPM 의 "foo" 패키지에 대응되는 자료형 패키지는 "@types/foo" 입니다.
원하시는 패키지를 찾을 수 없는 경우, [타입서치(TypeSearch)](https://microsoft.github.io/TypeSearch/) 사이트에서 한 번 찾아보세요.

그래도 찾을 수 없는 경우, 찾고 있는 패키지가 자료형(Typing)을
[함께 제공](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)하고 있지는 않은지 확인해보세요.
이 경우 주로 `package.json` 파일의 `"types"` 나 `"typings"` 필드(Field)를 통해 제공되지만,
`/// <reference path="" />` 같은 주석을 사용하여 패키지 안의 ".d.ts" 파일들을 직접 가져와야 할 수도 있습니다.

#### 이전 버전 TypeScript (3.1 또는 그 이전)

Definitely Typed는 2년이 지나지 않은 TypeScript 버전만을 대상으로 패키지를 테스트합니다.
현재 버전 3.2 및 그 이상만을 테스트하고 있습니다.
TypeScript 2.0에서 3.1 버전을 사용하는 경우, 그래도 `@types` 패키지를 한번 설치해 보셔도 무방합니다. 최신 TypeScript 기능을 사용하는 패키지는 그리 많지 않으니까요.
그러나 작동 여부를 보장하지는 못합니다.
지원 기간은 다음과 같습니다:

버전 | 출시일 | 지원 종료
-- | -- | --
2.8 | 2018년 3월 | 2020년 3월
2.9 | 2018년 5월 | 2020년 5월
3.0 | 2018년 7월 | 2020년 7월
3.1 | 2018년 9월 | 2020년 9월
3.2 | 2018년 11월 | 2020년 11월
3.3 | 2019년 1월 | 2021년 1월
3.4 | 2019년 3월 | 2021년 3월
3.5 | 2019년 5월 | 2021년 5월
3.6 | 2019년 8월 | 2021년 8월
3.7 | 2019년 11월 | 2021년 11월
3.8 | 2020년 2월 | 2022년 2월
3.9 | 2020년 5월 | 2022년 5월
4.0 | 2020년 8월 | 2022년 8월

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
* ~~[NuGet](http://nuget.org/packages?q=DefinitelyTyped) 을 사용하기~~ (다른 방법을 사용해주세요. NuGet은 더 이상 DT 자료형(Typing)을 제공하지 않습니다.)

위 방법을 사용할 경우 수동으로 [참조(Reference)](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)를 추가해주어야 할 수 있습니다.


## 어떻게 기여하나요?

See [CONTRIBUTING.ko.md](CONTRIBUTING.ko.md).

## 라이센스

이 프로젝트는 MIT license 가 적용되어 있습니다.

각 자료형 정의(Type definition) 파일들의 저작권은 각 기여자들에게 있으며, 기여자들은 해당 자료형 정의(Type definition) 파일들의 맨 위에 나열되어 있습니다.
