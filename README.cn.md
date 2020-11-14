# Definitely Typed

> 这是一个 *高质量* 的 TypeScript 类型定义的仓库。

也可以去看 [definitelytyped.org](http://definitelytyped.org) 这个网站，尽管这个 README 里的信息更新。

*你可以去看其他语言的 README，[英语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md)，[西班牙语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md)，[韩语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ko.md)，[俄罗斯语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md)*

*[管理员手册](./docs/admin.md)*

## 目录

* [当前状态](#当前状态)
* [我该如何贡献？](#我该如何贡献)
    * [测试](#测试)
    * [发起一个 pull request](#发起一个-pull-request)
        * [编辑一个现有包](#编辑一个现有包)
        * [创建一个新的包](#创建一个新的包)
        * [常见错误](#常见错误)
        * [删除一个包](#删除一个包)
        * [Linter](#linter)
* [FAQ](#faq)

## 当前状态

这个部分会跟踪仓库和发布过程的运行状况。
这可能会对在 PRs 和包中遇到任何问题的贡献者有所帮助。

* 最近的构建都具有完善的 [类型标注](https://github.com/Microsoft/dtslint)：[![Build Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.DefinitelyTyped?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=1&branchName=master)
* 所有的包基于 typescript@next 版本都有完善的类型标注：[![Build status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/Nightly%20dtslint)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=8)
* 所有的包都会在1小时内 [发布到 npm](https://github.com/Microsoft/types-publisher):  [![Publish Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
* [typescript-bot](https://github.com/typescript-bot) 在 Definitely Typed 一直处于活跃状态 [![Activity Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)

如果这里面的任何内容出现问题或者失败的情况，请在 [the Definitely Typed channel on the TypeScript Community Discord server](https://discord.gg/typescript) 提出问题。

## 什么是声明文件？

可以查看 [TypeScript 手册](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)。

## 如何去获取它？

### npm

这是首选方法。它仅适用于 TypeScript 2.0+ 的用户。例如：

```sh
npm install --save-dev @types/node
```

编译器中会自动包含这些类型。
可以在 [手册](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html) 中查看更多信息。

对于 NPM 包 "foo"，它的类型将是 "@types/foo"。
如果没有找到你的包，请在 [TypeSearch](https://microsoft.github.io/TypeSearch/) 查询。

如果你仍然没有找到它，请检查它是否 [捆绑](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) 了自己的类型。
这通常会在 `package.json` 文件中的 `"types"` 或 `"typings"` 字段中提供，
或者可以只查找包中的任何 ".d.ts" 文件并手动将它们包含在 `/// <reference path="" />`.

#### 旧版本的 TypeScript（3.1 和更早版本）

Definitely Typed 仅在小于 2 年的 TypeScript 版本上测试软件包。当前已测试 3.2 及更高版本。如果您使用的是 TypeScript 2.0 到 3.1，仍然可以尝试安装 @types 软件包，大多数软件包都不使用 TypeScript 的新特性。但是不能保证它们会起作用，这是支持窗口：

Version | Released | End of Support
-- | -- | --
2.8 | March 2018 | March 2020
2.9 | May 2018 | May 2020
3.0 | July 2018 | July 2020
3.1 | September 2018 | September 2020
3.2 | November 2018 | November 2020
3.3 | January 2019 | January 2021
3.4 | March 2019 | March 2021
3.5 | May 2019 | May 2021
3.6 | August 2019 | August 2021
3.7 | November 2019 | November 2021
3.8 | February 2020 | February 2022
3.9 | May 2020 | May 2022
4.0 | August 2020 | August 2022

`@types` 软件包具有它们明确支持的 TypeScript 版本的标记，因此通常可以获取早于 2 年窗口的较早版本的软件包。例如，如果运行 `npm dist-tags @types/react`，您将看到 TypeScript 2.5 可以将类型用于 react@16.0，而 TypeScript 2.6 和 2.7 可以将类型用于 react@16.4：

|Tag | Version|
|----|---------|
|latest| 16.9.23|
|ts2.0| 15.0.1|
| ... | ... |
|ts2.5| 16.0.36|
|ts2.6| 16.4.7|
|ts2.7| 16.4.7|
| ... | ... |

#### TypeScript 1.*

这些可以被 TypeScript 1.0 使用。

* 从该仓库的 `master` 分支手动下载并将其放入您的项目中
* ~~[Typings](https://github.com/typings/typings)~~ (使用首选替代方案，typings 已经被弃用)
* ~~[NuGet](http://nuget.org/packages?q=DefinitelyTyped)~~ (使用首选替代方案, nuget DT 类型发布已关闭)

你可能需要手动添加 [引用](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)。

## 我该如何贡献？

只有像你一样的用户的贡献，Definitely Typed 才能发挥作用

### 测试

在你分享你的成果前，请务必自己试用一下。

#### 测试编辑现有的包

你可以使用 [module augmentation](http://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) 添加新功能。
你也可以直接在 `node_modules/@types/foo/index.d.ts` 编辑类型，或者从那里复制它们并按照以下步骤操作。

#### 测试新的包

添加到你的 `tsconfig.json`:

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

(你也可以使用 `src/types`.)
创建包含模块 "foo" 声明的 `types/foo/index.d.ts`.
你现在应该将 `"foo"` 导入到你的代码中，它会使用新的类型声明。
然后构建并运行代码确保你的类型定义与实际上发生的情况一致。
一旦你的真实代码中的类型定义通过测试，那么可以发起一个 [PR](#make-a-pull-request)，
然后按照下面的说明去 [编辑一个现有包](#edit-an-existing-package) 或
[创建一个新包](#create-a-new-package)。

### 发起一个 pull request

一旦你的包测试通过，你可以在 Definitely Typed 分享它。

首先，[fork](https://guides.github.com/activities/forking/) 这个仓库，然后安装 [node](https://nodejs.org/)，并运行以下命令 `npm install`.

#### 编辑一个现有包

* `cd types/my-package-to-edit`
* 作出修改之后，记得新增测试。
  如果你进行了重大修改，不要忘记 [更新主版本](#if-a-library-is-updated-to-a-new-major-version-with-breaking-changes-how-should-i-update-its-type-declaration-package)
* 你可能还想将自己添加到包头部的 "Definitions by" 部分。
  - 这会导致一旦有人对该包发起 PR 或者 issue，都会通知你（通过你的 GitHub 用户名）。
  - 通过将您的名字添加到行尾来执行此操作，比如 `// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>`.
  - 或者如果有多人，它也可以是多行的
  ```typescript
  // Definitions by: Alice <https://github.com/alice>
  //                 Bob <https://github.com/bob>
  //                 Steve <https://github.com/steve>
  //                 John <https://github.com/john>
  ```
* 如果这里有 `tslint.json` 文件，就运行 `npm run lint package-name`。否则，在包目录里运行 `tsc`.

当你对现有的包发起 PR 的时候，请确保 `dt-bot` 会通知以前的作者。
如果没有，你可以在与 PR 关联的评论中手动去 @ 他们。

#### 创建一个新的包

如果你是库作者并且你的包是用 TypeScript 编写的，那么请在你的包里 [捆绑自动生成的声明文件](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) 而不是发布到 Definitely Typed.

如果你要为 NPM 包添加类型，请创建具有相同名字的目录。
如果你要添加类型的包不再 NPM 上，请确保为它选择的名字不会与 NPM 上面的包名冲突。
(你可以使用 `npm info foo` 来检查 `foo` 包是否存在。)

你的包应该具有这样的结构：

| 文件名 | 目的 |
| --- | --- |
| index.d.ts | 这里包含了包的类型声明。 |
| foo-tests.ts | 这里包含了测试类型的示例代码，此代码 **不会** 运行，但是它需要通过类型检查。 |
| tsconfig.json | 这里允许你在包里运行 `tsc`. |
| tslint.json | 启用 linting. |

如果你的 npm ≥ 5.2.0，运行 `npx dts-gen --dt --name my-package-name --template module` 来生成这些文件，否则就运行 `npm install -g dts-gen` 和 `dts-gen --dt --name my-package-name --template module`.
可以在 [dts-gen](https://github.com/Microsoft/dts-gen) 查看所有的选项。

你可以编辑 `tsconfig.json` 来增加新文件，增加 `"target": "es6"` (异步函数需要)，去增加 `"lib"`，或者增加 `"jsx"` 编译选项。

Definitely Typed 的成员会定期查看新的 PRs，但是请记住当有许多其他 PRs 的时候，检查会变慢。

[base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js) 是个很好的示例。

#### 常见错误

* 首先，请遵循 [手册](http://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html) 的建议。
* 格式化：使用4个空格。 该仓库已经设置了 prettier，因此你只需要运行 `npm run prettier -- --write path/to/package/**/*.ts`. [使用断言时](https://github.com/SamVerschueren/tsd#assertions)，添加 `// prettier-ignore` 将这几行标记为不需要格式化的代码：
    ```tsx
    // prettier-ignore
    const incompleteThemeColorModes: Theme = { colors: { modes: { papaya: { // $ExpectError
    ```
* `function sum(nums: number[]): number`: 如果函数没有写入的参数，请使用 `ReadonlyArray`.
* `interface Foo { new(): Foo; }`:
    这定义了一个可实例化的类型，你可能需要的是 `declare class Foo { constructor(); }`.
* `const Class: { new(): IClass; }`:
    更推荐使用类声明 `class Class { constructor(); }`，而不是生成一个可实例化的类型。
* `getMeAT<T>(): T`:
    如果类型参数没有出现在函数的参数中，那么实际上你不需要这个泛型函数，你只是用了一个伪装的类型断言。
    这种情况下最好使用真实的类型断言，类似这样，`getMeAT() as number`.
    类型参数可接受的示例：`function id<T>(value: T): T;`.
    类型参数不可接受的示例：`function parseJson<T>(json: string): T;`.
    有一个例外：`new Map<string, number>()` 是 OK 的。
* 使用 `Function` 和 `Object` 的类型基本上不是一个好方法。在 99% 的情况你可以去指定一个更具体的类型。比如，对于 [Function](http://www.typescriptlang.org/docs/handbook/functions.html#function-types)，可以使用 `(x: number) => number`，对于 `Object` 可以使用 `{ x: number, y: number }`. 对于不确定的类型，你需要使用 [`any`](http://www.typescriptlang.org/docs/handbook/basic-types.html#any) 而不是 `Object`. 只有当它类型确定且是某个对象的时候，使用 [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type), 而不是 `Object` 或 `{ [key: string]: any }`.
* `var foo: string | any`:
    如果在联合类型中使用 `any`, 则结果始终为 `any`. 因此，即便类型中的 `string` 部分看起来很有用，但实际上在类型检查方面与 `any` 没有什么区别。根据你的意图，可以选择 `any`, `string`, 或 `string | object`.

#### 删除一个包

当一个包 [捆绑](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) 了自己的类型时，应该从 Definitely Typed 中删除类型避免被混淆。

你可以运行以下命令来删除它 `npm run not-needed -- typingsPackageName asOfVersion sourceRepoURL [libraryName]`.
- `typingsPackageName`: 这是你要删除的目录名字.
- `asOfVersion`: 将使用此版本将存根发布到 `@types/foo`. 版本号应该高于当前发布的任何版本，并且应该是 npm 上的 `foo` 版本。
- `libraryName`: 替换 Definitely Typed 中类型的 npm 的包名。通常这与 "typingsPackageName" 相同，这种情况下你可以忽略它。

Definitely Typed 中其他引用了删除包的任何包，都需要去更新去引用新的捆绑类型。
你可以查看 `npm run test` 中的错误来获得此列表。
添加一个带有 `"dependencies": { "foo": "x.y.z" }` 的 `package.json` 文件，去修复这些错误。
比如：

```json
{
  "private": true,
  "dependencies": {
    "foo": "^2.6.0"
  }
}
```

当你将 `package.json` 添加到 `foo` 依赖的时候，你还需要发起一个 PR, 将 `foo` 添加到 ["types-publisher" 中的 "dependenciesWhitelist.txt"](https://github.com/Microsoft/types-publisher/blob/master/dependenciesWhitelist.txt).

如果这个包从未发布到 Definitely Typed 过，则不需要将其添加到 `notNeededPackages.json`.

#### Linter

所有新的包都必须通过 lint. 需要添加 `tslint.json` 文件去 lint 这个包。
```js
{
    "extends": "dtslint/dt.json"
}
```

这应该是一个已完成项目里 `tslint.json` 文件的唯一内容。如果这个文件关闭了某些规则，是因为它还未完全修复。例如：
```js
{
    "extends": "dtslint/dt.json",
    "rules": {
        // This package uses the Function type, and it will take effort to fix.
        "ban-types": false
    }
}
```

(若要使某个 lint 规则不生效，可以使用 `// tslint:disable rule-name`，当然使用 `//tslint:disable-next-line rule-name` 更好。)

若要声明的表达式是一个给定类型，请使用 `$ExpectType`. 若要声明的表达式会导致编译错误，请使用 `$ExpectError`.

```js
// $ExpectType void
f(1);

// $ExpectError
f("one");
```

你可以查阅 [dtslint](https://github.com/Microsoft/dtslint#write-tests) 的 readme 去看更多详细信息。

## 验证

通过运行 `npm run lint package-name` 去测试你的改动，其中 `package-name` 是你的包名。
这个脚本使用了 [dtslint](https://github.com/Microsoft/dtslint).


## FAQ

#### 这个仓库和 NPM 上的 `@types` 包究竟有什么关系？

`master` 分支会通过 [types-publisher](https://github.com/Microsoft/types-publisher) 自动发布到 NPM 上的 `@types`.

#### 我已经发起了 PR, 它多久会被合并？

这得看情况，但是大多数的 PR 会在一周内被合并。已经由定义包头部中的作者同意的 PR 通常会更快被合并。新定义类型的 PR 需要更多时间，因为它们需要维护人员花更多的时间去审核。每一个 PR 在合并之前都会由 TypeScript 或 Definitely Typed 的团队成员进行审核，所以请耐心等待这些因为人为因素导致的延迟。通过查看 [New Pull Request Status Board](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/5)，可以看到维护人员在开放 PRs 的工作进度。

#### 我的 PR 被合并了，什么时候 `@types` 的 NPM 包会被更新？

NPM 包应该会在几分钟内更新。如果已经超过了一小时，请在 [the Definitely Typed channel on the TypeScript Community Discord server](https://discord.gg/typescript) 上提及 PR 的编号，当前维护者会让团队成员去调查。

#### 我正在编写一个依赖其他类型定义的类型定义。我应该使用 `<reference types="" />` 还是导入？

如果你引用的外部模块（使用 `export`），那么请使用导入。
如果你引用的是环境模块（使用 `declare module`, 或者只声明全局变量），那么请使用 `<reference types="" />`.

#### 我注意带这里有一些包含 `package.json` 的包。

通常你不需要它。
Definitely Typed 包的发布者会为在 Definitely Typed 之外没有依赖的包创建一个 `package.json` 文件。
`package.json` 包含了指定的而不是其他 `@types` 包的依赖。
当你发布包的时候会自动创建一个 `package.json` 的文件。
[Pikaday 是一个好的例子](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json)。
包含 `package.json` 以便解析依赖。这有个 [示例](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json)。
你还需要将依赖项添加到[允许的包列表](https://github.com/microsoft/types-publisher/blob/master/dependenciesWhitelist.txt)。
即使你编写自己的 `package.json` 文件，也只能指定依赖项。不允许使用其他字段，例如 `"description"`.
该列表是人为更新，这让我们确保了 `@types` 包不会依赖恶意包。
在极少数情况下，`@types` 包会被删除，而不是源码包中提供的类型，并且你需要依赖旧的已经删除的 `@types` 包，你可以添加对 `@types` 包的依赖。
再添加到允许的包列表中时，请确保作出解释，以便让人工维护者知道发生了什么。

#### 有些包没有 `tslint.json` 文件，有些 `tsconfig.json` 文件缺少 `"noImplicitAny": true`, `"noImplicitThis": true`, 或 `"strictNullChecks": true`.

当然它们是错误的，你可以通过发起 PR 来修复它们。

#### 我可以请求类型定义吗？

这里是 [当前在请求的类型定义](https://github.com/DefinitelyTyped/DefinitelyTyped/labels/Definition%3ARequest)。

#### DOM 上的类型定义是什么？

如果类型是 Web 标准的一部分，它们应该被贡献给 [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator), 以便它们成为默认 `lib.dom.d.ts` 的一部分。

#### 如果一个包不导出模块，那么为了能使用 ES6 风格，我是否应该使用空的命名空间？

有些包，比如 [chai-http](https://github.com/chaijs/chai-http), 导出一个函数。

使用 ES6 风格导入此模块的形式为 `import * as foo from "foo";`, 会报下面的错误：

> error TS2497: Module 'foo' resolves to a non-module entity and cannot be imported using this construct

通过将函数声明和同名的空命名空间合并可以抑制此错误，但不鼓励这种做法。
关于这个问题这是常被引用的 [Stack Overflow 答案](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this)。

使用 `import foo = require("foo");` 语法导入模块更合适。
不过，如果你想使用像 `import foo from "foo";` 这样的默认导入，你有两个选择：
- 你可以使用 [`--allowSyntheticDefaultImports` 的编译器选项](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs) 取决于你的模块运行是支持 non-ECMAScript 模块的互操作方案 ，即默认导入是否适用于你的环境（例如 Webpack, SystemJS, esm）。
- 你可以使用 [`--esModuleInterop` 的编译器选项](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop)，如果你想使用 TypeScript 去处理 non-ECMAScript 的操作（从 Typescript 2.7 版本开始）。

#### 一个包使用了 `export =`, 但是我更喜欢使用默认导入。我可以将 `export =` 改为 `export default` 吗？

跟之前的问题一样，参考使用 [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs)
或 [`--esModuleInterop`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop)
的编译器选项。

请不要更改准确的类型定义。
对于一个 NPM 包，如果使用 `node -p 'require("foo")'` 去导入模块，那么 `export =` 是准确的。如果使用 `node -p 'require("foo").default'` 去导入模块，那么 `export default` 是准确的。

#### 我想使用 TypeScript 3.3 或更高版本的功能。

那么你必须在你的定义头部的最后一行添加注释（在 `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped` 之后）：`// Minimum TypeScript Version: 3.3`.
但是，如果你的项目在维护类型时需要在兼容 3.1 版本及以上的同时还要兼容 3.0 及以下的版本，那么你需要使用一个只有在 TypeScript 3.1 及以上版本的新特性 `typesVersions`.
你可以在 [官方 TypeScript 文档](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#version-selection-with-typesversions) 中找到此功能的详细说明。

这里是个简短的说明，可以帮助您入门：

1. 你必须在包定义中添加 `package.json` 文件，其中包含以下内容：

```json
{
    "private": true,
    "types": "index",
    "typesVersions": {
        ">=3.1.0-0": { "*": ["ts3.1/*"] }
    }
}
```

2. 在你的类型目录中创建一个在 `typesVersions` 字段中提到的子目录（在本例中为 `ts3.1/`），并为这个新版本添加特定的类型和测试。你不需要在 `ts3.1/` 目录中任何一个文件添加传统的定义头部。

3. 将 `ts3.1/tsconfig.json` 中 `baseUrl` 和 `typeRoots` 选项设置成正确的路径，它们应该如下所示：
```json
{
    "compilerOptions": {
        "baseUrl": "../../",
        "typeRoots": ["../../"]
    }
}
```

你可以在 [这里](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/debounce-promise) 和 [这里](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/create-html-element) 查看示例。

#### 我想去添加默认情况下不存在于 TypeScript 的 DOM API.

这属于 [TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme). 请阅读那里的指南。
如果标准仍然是草案，则它属于这里。
使用以 `dom-` 开头的名称，并在头部中包含指向标准的链接作为项目的链接。
当它结束草案模式时，我们可以将它从 Definitely Typed 删除，并弃用相关的 `@types`包。

#### Definitely Typed 包版本号如何与对应库的版本号相关联？

_注意：本节中的讨论假定你熟悉 [语义版本控制](https://semver.org/)_

每个 Definitely Typed 包在发布到 NPM 时都会进行版本控制。
[types-publisher](https://github.com/Microsoft/types-publisher) (将 `@types` 包发布到 npm 的工具) 会通过将 `major.minor` 版本号写在 `index.d.ts` 文件的第一行来设置定义包的版本号。
例如，以下是 `10.12.x` 版本的 [Node 的类型声明](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/node/index.d.ts) 的前几行：

```js
// Type definitions for Node.js 10.12
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 Definitely Typed <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
```

因为 `10.12` 在第一行的末尾，所以 `@types/node` 包的版本号也是 `10.12.x`.
注意在 `index.d.ts` 文件的第一行注释中应该只包含 `major.minor` 的版本号（比如 `10.12`），不应该包含补丁版本（例如 `10.12.4`）。
这是因为只有主要版本号和次要版本号在库包和类型声明包之间相对齐。
类型声明包的补丁版本号（比如 `10.12.0` 中的 `.0`）是由 Definitely Typed 初始化为 0，每次将新的 `@types/node` 包发布到对应库的同一主/次版本的 NPM 是，他都会递增。

有时候，类型声明包的版本号和库包的版本号可能会不同步。
以下是一些常见的原因，是按照给库的用户带来不便的顺序排序的。
只有最后一种情况通常是有问题的。

* 如上所示，类型定义包的补丁版本与库包的补丁版本是无关的。这允许 Definitely Typed 安全地更新同一主/次版本的类型声明。
* 如果要更新包去获取新的功能，请不要忘记更新版本号以与该版本的库对齐。
* 类型定义包的更新落后于库的原因通常是因为库用户而不是维护者，他们在发布新特性从而更新了库的版本。因此，在愿意帮忙的社区成员发送 PR 去更新新的库版本对应的类型声明包之前，可能会有几天，几周甚至几个月的滞后。如果你深受此影响，你可以成为你想改变的，你可以去成为乐于助人的社区成员！

:exclamation: 如果你想更新库的类型声明，请记住始终要在 `index.d.ts` 文件的第一行设置 `major.minor` 的版本号去匹配你正在记录的库版本！ :exclamation:

#### 如果一个包做了重大的修改而更新了主要版本，我应该如何更新它的类型声明包？

[语义版本控制](https://semver.org/) 要求具有重大修改的版本必须增加主版本号。
例如，一个库在 `3.5.8` 版本之后删除了一个公有的导出函数，那么它的下一版本必须升级到 `4.0.0`.
此外，当该库的 `4.0.0` 版本发布时，它的类型声明包也需要更新到 `4.0.0`, 包括对该库 API 的任何重大修改。

许多库都有大量的开发人员（包括使用该库作为依赖的其他包的维护者），他们不会立即迁移到具有重大改变的新版本。因为维护人员需要几个月的时间去重写代码以适应新版本。
与此同时，旧版本库的用户仍然想去更新旧版本的类型声明。

如果你打算继续更新旧版本库的类型声明，你可以创建一个以当前版本（很快就是旧版本）命名的新的子文件夹（比如 `/v2/`），并将现有版本的文件都拷贝进去。

因为根文件夹始终包含最新版本的类型声明，所以你需要对旧版本子目录中的文件进行一些修改，以确保相对路径的引用指向子目录，而不是根目录。

1. 更新 `tsconfig.json` 和 `tslint.json` 中的相对路径。
2. 添加路径映射规则以确保测试能够针对预期版本运行。

例如，[`history`](https://github.com/ReactTraining/history/) 库在 `2.x` 到 `3.x` 版本间引入了重大的修改。
因为许多用户仍然使用较老的 `2.x` 版本，维护人员想要将此库的类型声明更新到 `3.x`, 需要在仓库里添加 `v2` 文件夹，里面包含了旧版本的类型声明。
在编写时，[history v2 `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/history/v2/tsconfig.json) 大致如下：

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

如果 Definitely Typed 上的其他包与新版本不兼容，你需要将路径映射到旧版本。
对于依赖于旧版本的包，你还需要递归地执行此操作。

例如，`react-router` 依赖 `history@2` 包，所以 [react-router `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router/v2/tsconfig.json) 有一个映射到 `"history": [ "history/v2" ]` 的路径。
所以，`react-router-bootstrap`（依赖 `react-router` 包）在它的依赖 `react-router` 更新到最新版本之前，也需要在它的 `tsconfig.json` 里添加相同的路径映射（`"history": [ "history/v2" ]`）。

此外，`/// <reference types=".." />` 不适用于路径映射，因此依赖需要使用 `import`.

#### 如何为可以在全局使用的包和作为模块的包编写类型定义？

TypeScript 手册包含了优秀的 [关于编写类型定义的概括信息](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), 以及 [此示例定义文件](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html)，它展示了如何使用 ES6 模块语法创建定义，同时还指定了全局范围可用的对象。这个技术在 [big.js 的定义](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts) 得到了实际证明。该库可以通过网页上的脚本标记全局加载，也可以通过 require 或者 ES6 风格的风格导入。

要测试你的类型定义是否能全局引用或者作为模块导入，请创建一个 `test` 文件，并在其中放置两个测试文件。一个命名为 `YourLibraryName-global.test.ts`, 另一个为 `YourLibraryName-module.test.ts`. *全局* 测试文件应该根据如何在全局范围内库可用的网页上加载的脚本中使用它来执行定义，在这种情况下，你不应该制定 import 语句。*模块* 测试文件应该根据导入时的使用方式（包括 `import` 语句）来执行定义。如果在 `tsconfig.json` 文件中指定了 `files` 属性，请确保包含了两个测试文件。big.js 定义中还提供了一个 [实际例子](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test)。

请注意，不需要在每个测试文件中完全执行定义 - 只需要在全局测试文件中测试全局可访问元素并在模块测试文件中完全执行定义，反之亦然。

#### 什么是作用域包？

作用域包 `@foo/bar` 的类型应该放在 `types/foo__bar` 中。请注意使用双下划线。

当使用 `dts-gen` 去构建作用域包时，必须在生成的 `tsconfig.json` 中手动调整 `paths` 属性去正确引用作用域包：

```json
{
    "paths":{
      "@foo/*": ["foo__*"]
    }
}
```

#### GitHub 中的文件记录看起来不完整。

GitHub 不 [支持](http://stackoverflow.com/questions/5646174/how-to-make-github-follow-directory-history-after-renames) 重命名文件的历史记录。请使用 [`git log --follow`](https://www.git-scm.com/docs/git-log) 命令代替。

## 许可证

该项目根据 MIT 许可证授权。

定义文件的版权分别对应于每个定义文件开头列出的每个贡献者。
