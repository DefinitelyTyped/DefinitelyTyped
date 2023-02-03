# Definitely Typed

> 这是一个 *高质量* 的 TypeScript 类型定义的仓库。

*你可以去看其他语言的 README，[英语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md)，[西班牙语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md)，[韩语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ko.md)，[俄罗斯语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md)，[葡萄牙语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.pt.md)，[意大利语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.it.md)，[日语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ja.md)!*

*[管理员手册](./docs/admin.md)*

## 当前状态

这个部分会跟踪仓库和发布过程的运行状况。
这可能会对在 PRs 和包中遇到任何问题的贡献者有所帮助。

* 最近的构建都具有完善的 [类型标注](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint)：[![Build Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.DefinitelyTyped?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=1&branchName=master)
* 所有的包基于 typescript@next 版本都有完善的类型标注：[![Build status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/Nightly%20dtslint)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=8)
* 所有的包都会在1小时30分钟内 [发布到 npm](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher):  [![Publish Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
* [typescript-bot](https://github.com/typescript-bot) 在 Definitely Typed 一直处于活跃状态 [![Activity Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)

如果这里面的任何内容出现问题或者失败的情况，请在 [the Definitely Typed channel on the TypeScript Community Discord server](https://discord.gg/typescript) 提出问题。

## 什么是声明文件，如何获取它们？

查看 [TypeScript 手册](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)。

### npm

这是首选方法。例如：

```sh
npm install --save-dev @types/node
```

编译器中会自动引入这些类型。
如果你的项目没有使用模块系统的话，你可能需要使用 `types` 进行手动引用：

```ts
/// <reference types="node" />
```

可以在 [手册](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html) 中查看更多信息。

对于 npm 包 "foo"，它的类型定义的包名应该是 "@types/foo"。
如果没有找到你的包，请在 [TypeSearch](https://microsoft.github.io/TypeSearch/) 查询。

如果你仍然没有找到它，请检查它是否 [捆绑](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) 了自己的类型。
这通常会通过 `package.json` 文件中的 `"types"` 或 `"typings"` 字段提供，
或者将包中包含类型定义的 ".d.ts" 文件手动通过 `/// <reference path="" />` 引入.

#### 支持窗口

Definitely Typed 仅在发布时间小于 2 年的 TypeScript 版本上测试软件包。

<details>
<summary>当前已测试 4.1 及更高版本</summary>

如果您使用的是 TypeScript 2.0 到 4.0，仍然可以尝试安装 @types 软件包 &mdash; 大多数软件包都没有使用 TypeScript 的新特性。

但是不能保证它们会起作用，这是支持窗口：

<img src="docs/support-window.svg#gh-light-mode-only" style="width:100%">
<img src="docs/support-window.svg#gh-dark-mode-only" style="width:100%">

`@types` 软件包具有它们明确支持的 TypeScript 版本的标记，因此通常可以获取早于 2 年窗口的较早版本的软件包。

例如，如果运行 `npm dist-tags @types/react`，您能看到 TypeScript 2.5 最高支持 react@16.0 的类型定义，而 TypeScript 2.6 和 2.7 则最高支持 react@16.4：

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

* 从该仓库的 `master` 分支手动下载并将其放入您的项目中
* ~~[Typings](https://github.com/typings/typings)~~ (使用首选替代方案，typings 已经被弃用)
* ~~[NuGet](https://nuget.org/packages?q=DefinitelyTyped)~~ (使用首选替代方案, nuget DT 类型发布已关闭)

你可能需要手动添加 [引用](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)。

</details>

## 我该如何贡献？

有像你这样的用户不断贡献，Definitely Typed 才能持续运作下去

### 测试

在你向世界分享你的成果前，请务必自己试用一下。


Before you share your improvement with the world, use the types yourself by creating a `typename.d.ts` file in your project and filling out its exports:

在你与世界分享你的成果之前，通过在你的项目中创建一个`typename.d.ts`文件并填写导出模块，自己先使用这些 types。

```ts
declare module "libname" {
  // Types inside here
  export function helloWorldMessage(): string
}
```

#### 测试编辑现有的包

你可以直接在`node_modules/@types/foo/index.d.ts`中编辑类型，以验证你的修改，然后按照下面的步骤把修改带到这个仓库。

此外，你也可以使用 [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) 扩展已有的DT模块。

或者使用上面的 `declare module` 技术，它将覆盖 `node_modules` 中的版本。

#### 为新创建的库添加测试

在你的 `tsconfig.json` 中添加:

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

创建包含 `"foo"` 模块声明的 `types/foo/index.d.ts`。
现在你应该可以在你的代码中导入 `"foo"`，它会连接到你上面所定义的新的类型声明。
然后构建**并**运行代码以确保你的类型定义与实际运行情况一致。

一旦你的真实代码中的类型定义通过测试，那么可以发起一个 [PR](#发起一个-pull-request)，
然后按照下面的说明去 [编辑一个现有包](#编辑一个现有包) 或
[创建一个新包](#创建一个新的包)。

### 发起一个 pull request

一旦你的包测试通过，你可以在 Definitely Typed 分享它。

首先，[fork](https://guides.github.com/activities/forking/) 这个仓库，[clone](#部分克隆)后，安装 [node](https://nodejs.org/)，并运行 `npm install`。如果你使用的 `npm` 版本是 v7，你需要在命令行增加 `--legacy-peer-deps` 参数。

我们使用机器人使大量请求到 DefinitelyTyped 的 PR 完全以自助方式处理，你可以在 [why and how here](https://devblogs.microsoft.com/typescript/changes-to-how-we-manage-definitelytyped/) 查看更多细节。下面是一个简易的示意图，显示了一个 PR 的生命周期：

<img src="https://github.com/DefinitelyTyped/dt-mergebot/blob/master/docs/dt-mergebot-lifecycle.svg">

#### 部分克隆

<details>
<summary>你可以<a href='https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository'>和以前一样</a>克隆整个仓库, 但本仓库很大，包括一个庞大的类型包目录。</summary>

你可以<a href='https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository'>和以前一样</a>克隆整个仓库, 但本仓库很大，包括一个庞大的类型包目录。这将需要一些时间来克隆，而且可能是不必要也不方便的。

为了更容易管理的克隆，即**仅**包含与你相关的类型包，你可以使用 git 的 [`sparse-checkout`](https://git-scm.com/docs/git-sparse-checkout)，[`--filter`](https://git-scm.com/docs/git-rev-list#Documentation/git-rev-list.txt---filterltfilter-specgt)，和 [`--depth`](https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---depthltdepthgt) 特性，这样能够减少克隆代码的时间和提高 git 操作的性能。

>:warning: 该特性需要至少 [git 2.27.0 版本](https://git-scm.com/downloads)，这可能比大部分人安装的版本要更新，旧版本的 git 也有更复杂一点的方式能够实现局部克隆，但本文不涉及。

1. `git clone --sparse --filter=blob:none --depth=1 <forkedUrl>`
    - `--sparse`初始化 sparse-checkout 文件，工作目录开始时只有版本库根部的文件。
    - `--filter=blob:none` 将排除文件，只在需要时获取它们。
    - `--depth=1` 可以通过截断提交历史来进一步提高克隆速度，不过它可能会导致一些问题，总结于：[这里](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/)(英文)。
2. `git sparse-checkout add types/<type> types/<dependency-type> ...`

</details>

#### 编辑一个现有包

* `cd types/<package to edit>`
* 作出修改之后，记得[编辑测试](#my-package-teststs)。
  如果你进行了重大修改，不要忘记 [更新主版本](#如果一个包做了重大的修改而更新了主要版本我应该如何更新它的类型声明包)
* [运行 `npm test <package to test>`](#验证).

当你对现有的包发起 PR 的时候，`dt-bot` 应该会通知以前的作者。
如果没有，你可以在与 PR 关联的评论中手动去 @ 他们。

#### 创建一个新的包

如果你是库作者并且你的包是用 TypeScript 编写的，那么请在你的包里 [捆绑自动生成的声明文件](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) 而不是发布到 Definitely Typed.

如果你要为 npm 包添加类型，请创建具有相同名字的目录。
如果你要添加类型的包不再 npm 上，请确保为它选择的名字不会与 npm 上面的包名冲突。
(你可以使用 `npm info <my-package>` 来检查 `<my-package>` 包是否存在。)

你的包应该具有这样的结构：

| 文件名 | 目的 |
| --- | --- |
| `index.d.ts` | 这里包含了包的类型声明。 |
| [`<my-package>-tests.ts`](#my-package-teststs) | 这里包含了测试类型的示例代码，此代码 **不会** 运行，但是它需要通过类型检查。 |
| [`tsconfig.json`](#tsconfigjson) | 这里允许你在包里运行 `tsc`. |
| [`tslint.json`](#linter-tslintjson) | (很少）只需要禁用为eslint编写的lint规则。 |

如果你的 npm ≥ 5.2.0，运行 `npx dts-gen --dt --name <my-package> --template module` 来生成这些文件，否则运行 `npm install -g dts-gen` 和 `dts-gen --dt --name <my-package> --template module`.
可以在 [dts-gen](https://github.com/Microsoft/dts-gen) 查看所有的选项。

如果你除了 `index.d.ts` 以外还有别的 `.d.ts` 文件，请确保它们有在 `index.d.ts` 或测试文件中被引用。

Definitely Typed 的成员会定期查看新的 PRs，但是请记住当有许多其他 PRs 的时候，检查会变慢。

[base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js) 是个很好的示例。

#### 删除一个包

当一个包 [捆绑](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) 了自己的类型时，应该从 Definitely Typed 中删除类型避免被混淆。

你可以运行以下命令来删除它 `npm run not-needed -- <typingsPackageName> <asOfVersion> [<libraryName>]`.
- `<typingsPackageName>`: 这是你要删除的目录名字.
- `<asOfVersion>`: 将使用此版本将存根发布到 `@types/<typingsPackageName>`. 版本号应该高于当前发布的任何版本，并且应该是 npm 上的 `<libraryName>` 版本。
- `<libraryName>`: 替换 Definitely Typed 中类型的 npm 的包名。通常这与 `<typingsPackageName>` 相同，这种情况下你可以忽略它。

Definitely Typed 中其他引用了删除包的任何包，都需要去更新去引用新的捆绑类型。
你可以查看 `npm test` 中的错误来获得此列表。
添加一个带有 `"dependencies": { "<libraryName>": "x.y.z" }` 的 [`package.json`](#packagejson) 文件，以修复这些错误。
例如：

```json
{
  "private": true,
  "dependencies": {
    "<libraryName>": "^2.6.0"
  }
}
```

当你将 `package.json` 添加到 `<libraryName>` 依赖的时候，你还需要发起一个 PR, 将 `<libraryName>` 添加到 ["DefinitelyTyped-tools" 中的 "allowedPackageJsonDependencies.txt"](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt).

如果这个包从未发布到 Definitely Typed 过，则不需要将其添加到 `notNeededPackages.json`.

#### 验证

通过运行 `npm test <package to test>` 以测试你的改动，其中 `<package to test>` 是你的包名。

这个脚本使用了 [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint) 来对你的 dts 文件进行 TypeScript 编译测试.

一旦你准备好所有的改动，使用 `npm run test-all` 来看看你的改动对其他模块的影响。

#### 命名

如果你要为 npm 包添加类型，请创建具有相同名字的目录。
如果你要添加类型的包不再 npm 上，请确保为它选择的名字不会与 npm 上面的包名冲突。
(你可以使用 `npm info <my-package>` 来检查 `<my-package>` 包是否存在。)

如果一个非npm包与现有的npm包发生冲突，可以尝试在名字后面加上-browser，改为 `<my-package>-browser`。

#### `<my-package>-tests.ts`

应该包含一个 `<my-package>-tests.ts` 文件，它与其导入的 `*.ts` 文件都被认为是你的类型定义项目的测试文件。

如果你在模块的文件夹中没有看到任何测试文件，创建一个 `<my-package>-tests.ts` 。

这些文件以 `@types/<my package>` 形式提供，用来验证从`*.d.ts`文件中导出的 API。

对 `*.d.ts` 的任何修改应该在 `*.ts` 中进行相应的更改，这样别人就不会意外的破坏你所依赖的代码。

举个例子，你为了 `.d.ts` 中的一个函数增加了一个新入参：

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

如果你不知道从何开始，README 中的示例模块是个很好的参考。

你可以在根目录执行 `npm test <package to test>` 来 [验证你的更改](#验证) 。

若要声明的表达式是一个给定类型，请使用 `$ExpectType`. 若要声明的表达式会导致编译错误，请使用 `@ts-expect-error`。例如：

```js
// $ExpectType void
f(1);

// @ts-expect-error
f("one");
```

你可以查阅 [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint#write-tests) 的 readme 去看更多详细信息。

#### Linter: `tslint.json`

linter配置文件 `tslint.json` 应该包含 `{ "extends": "@definitelytyped/dtslint/dt.json" }` ，并且没有其他规则。

如果因为某些原因需要禁用某些规则，则使用 `// tslint:disable-next-line:[ruleName]` [为该特定行禁用](https://palantir.github.io/tslint/usage/rule-flags/#comment-flags-in-source-code:~:text=%2F%2F%20tslint%3Adisable%2Dnext%2Dline%3Arule1%20rule2%20rule3...%20%2D%20Disables%20the%20listed%20rules%20for%20the%20next%20line) &mdash; 而不是针对整个软件包，这样可以审查禁用情况。(有一些以前的lint配置有额外的内容，但这些不应该发生在新工作中)。

##### Linter: `.eslintrc.json`

Definitely Typed 正在从 linting 转到 eslint。

与 tslint 相比，不同的是，你不需要一个配置文件来启用 linting。
相同的是，你应该只在特定的行上禁用特定的规则。


```ts
// eslint-disable-next-line no-const-enum
const enum Const { One }
const enum Enum { Two } // eslint-disable-line no-const-enum
```

你仍然可以用 `.eslintrc.json` 来禁用规则，但不应在新的软件包中禁用。

#### `tsconfig.json`

`tsconfig.json` 中应该把 `noImplicitAny`、`noImplicitThis`、`strictNullChecks` 和 `strictFunctionTypes` 设置为 `true`.

你可以编辑 `tsconfig.json` 以增加新测试文件、增加 `"target": "es6"` (异步函数需要)、`"lib"`，或者是增加 `"jsx"` 编译选项。

##### `esModuleInterop`/`allowSyntheticDefaultImports`

简而言之：在你的`tsconfig.json` 中 `esModuleInterop` 和 `allowSyntheticDefaultImports` 都是**不允许**的。 

> 这些选项模拟了 Node 和一些 JS 捆绑器中 CJS 和 ES 模块之间的内置互操作性,使得为 CJS 导出编写默认导入成为可能:
>
> ```tsx
> // component.d.ts
> declare class Component {​​​​​}​​​​​
> // CJS 导出, 模拟 JS 中的 `module.exports = Component`
> export = Component;
>
> // index.d.ts
> // 默认导入，只允许在 'esModuleInterop' 或 'allowSyntheticDefaultExports' 下进行
> import Component from "./component";
> ```
>
> 由于 `index.d.ts` 中导入的编译时有效性取决于特定的编译设置，而你的类型的用户并不继承这些设置，在 Definitely Typed 中使用这种模式会迫使用户改变他们自己的编译设置，这对他们的运行时间来说可能是不正确的。相反，你必须为CJS导出编写一个CJS导入，以确保广泛的、独立于配置的兼容性。
>
> ```ts
> // index.d.ts
> // CJS 导入, 模拟 JS 中的 `const Component = require("./component")`
> import Component = require("./component");
> ```

#### `package.json`

通常你不需要它。
Definitely Typed 包的发布者会为在 Definitely Typed 之外没有依赖的包创建一个 `package.json` 文件。
`package.json` 包含了指定的而不是其他 `@types` 包的依赖。
当你发布包的时候会自动创建一个 `package.json` 的文件。
[Pikaday 是一个好的例子](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json)。
包含 `package.json` 以便解析依赖。这有个 [示例](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json)。
你还需要将依赖项添加到[允许的包列表](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt)。
即使你编写自己的 `package.json` 文件，也只能指定依赖项。不允许使用其他字段，例如 `"description"`。
该列表是人为更新，这让我们确保了 `@types` 包不会依赖恶意包。

在极少数情况下，`@types` 包会被删除，而不是源码包中提供的类型，并且你需要依赖旧的已经删除的 `@types` 包，你可以添加对 `@types` 包的依赖。
在添加到允许的包列表中时，请确保作出解释，以便让人工维护者知道发生了什么。

#### `OTHER_FILES.txt`

如果有一些文件需要包含在类型定义包中，但没有在测试文件或 `index.d.ts` 中被引用的话。你需要在 `OTHER_FILES.txt` 列出，一个文件占一行。

#### 常见错误

* 首先，请遵循 [手册](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html) 的建议。
* 格式化：使用 4 个空格。 该仓库已经设置了 prettier，因此你只需要运行 `npm run prettier -- --write path/to/package/**/*.ts`， 在[使用断言时](https://github.com/SamVerschueren/tsd#assertions)，添加 `// prettier-ignore` 将这几行标记为不需要格式化的代码：
  ```tsx
  // prettier-ignore
  // @ts-expect-error
  const incompleteThemeColorModes: Theme = { colors: { modes: { papaya: {
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
  有一个例外：`new Map<string, number>()` 是允许的。
* 使用 `Function` 和 `Object` 的类型基本上不是一个好方法。在 99% 的情况你可以去指定一个更具体的类型。比如，对于 [Function](https://www.typescriptlang.org/docs/handbook/functions.html#function-types)，可以使用 `(x: number) => number`，对于 `Object` 可以使用 `{ x: number, y: number }`. 对于不确定的类型，你需要使用 [`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) 而不是 `Object`. 只有当它类型确定且是某个对象的时候，使用 [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type), 而不是 `Object` 或 `{ [key: string]: any }`.
* `var foo: string | any`:
  如果在联合类型中使用 `any`, 则结果始终为 `any`. 因此，即便类型中的 `string` 部分**看起来**可能很有用，但实际上在类型检查方面与 `any` 没有什么区别。根据你的意图，可以选择 `any`, `string`, 或 `string | object`.

### 定义的所有者

> 简而言之：不要修改 `.github/CODEOWNERS` ，始终修改 `index.d.ts` 头中的所有者列表。

DT 有 "定义拥有者" 的概念，他们是希望保持特定模块类型质量的人。

* 将自己添加到列表中会使你在有人提出关于该软件包的拉动请求或问题时得到通知（通过你的GitHub用户名）。
* 你的 PR 评论对于维护这个仓库的[机器人](https://github.com/DefinitelyTyped/dt-mergebot)来说，会有更高的重要性优先权。
* DT 维护者将信任寄托在定义所有者身上，以确保生态环境的稳定，请不要轻易添加自己。

将自己添加为定义所有者：

* 在行末添加你的名字，如：`// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>`.
* 或者如果有更多的人，可以是多行的
  ```typescript
  // Definitions by: Alice <https://github.com/alice>
  //                 Bob <https://github.com/bob>
  //                 Steve <https://github.com/steve>
  //                 John <https://github.com/john>
  ```

定义所有者每周会同步到[.github/CODEOWNERS](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/.github/CODEOWNERS)文件，这是我们的信息源。

## FAQ

#### 这个仓库和 npm 上的 `@types` 包究竟有什么关系？

`master` 分支会通过 [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) 自动发布到 npm 上的 `@types`.

#### 我已经发起了 PR, 它多久会被合并？

这得看情况，但是大多数的 PR 会在一周内被合并。
有些 PR 可能由模块的作者合并，他们可以合并得更快。

基本上是：

> 只改变模块类型的 PR ，并且有相应的测试变化，会被更快地合并。

由定义标题中列出的作者批准的 PR 通常会被更快地合并；新定义的PR会花费更多时间，因为它们需要维护者的更多审查。每个 PR 在合并前都会由 TypeScript 或 Definitely Typed 团队成员审核，所以请耐心等待，因为人为因素可能会导致延迟。请查看 [新的 PR 状态板](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/5) 以了解维护者在处理开放的 PRs 时的进展。

#### 我想提交对一个非常受欢迎的项目的修改，为什么它们被区别对待？

对于非常受欢迎的模块的改动，例如 Node/Express/Jest ，它们在npm上每周都有数百万的下载量，对贡献的要求要高一些。
对这些项目的改动会对生态系统产生巨大的影响，因此我们对这些项目的改动要非常谨慎。
这些模块既需要 DT 维护者的签字，也需要模块所有者的热情支持。这方面的要求很高，而且经常会因为没有人支持而导致 PR 过期。
如果你发现没有人评论，可以尝试让你的PR有一个较小的焦点。

#### 我的 PR 被合并了，什么时候 `@types` 的 npm 包会被更新？

npm 包应该会在几分钟内更新。如果已经超过了一小时，请在 [the Definitely Typed channel on the TypeScript Community Discord server](https://discord.gg/typescript) 上提及 PR 的编号，当前维护者会让团队成员去调查。

#### 我正在编写一个依赖其他类型定义的类型定义。我应该使用 `<reference types="" />` 还是导入？

如果你引用的外部模块（使用 `export`），那么请使用导入。
如果你引用的是环境模块（使用 `declare module`, 或者只声明全局变量），那么请使用 `<reference types="" />`.

#### 有些包没有 `tslint.json` 文件，有些 `tsconfig.json` 文件缺少 `"noImplicitAny": true`, `"noImplicitThis": true`, 或 `"strictNullChecks": true`.

如果我们还没有注意到它们是错误的，你可以通过发起 PR 来修复它们。


#### 我可以改变/增强模块的格式化设置吗？

我们曾经探讨过如何使DT的代码格式一致，但由于仓库上的活动太多，所以陷入了僵局。我们通过 [`.editorconfig`](.editorconfig) 和 [`.prettierrc.json`](.prettierrc.json) 导入格式化设置。这些是专门为你的编辑器提供的工具，它们的设置并不冲突，我们也不打算改变它们。我们也不打算在 repo 中强制执行一种特定的风格。我们希望保持低门槛的贡献。

#### 我可以请求类型定义吗？

这里是 [当前在请求的类型定义](https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/categories/request-a-new-types-package)。

#### DOM 上的类型定义是什么？

如果类型是 Web 标准的一部分，它们应该被贡献给 [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator), 以便它们成为默认 `lib.dom.d.ts` 的一部分。

#### 如果一个包不导出模块，那么为了能使用 ES6 风格，我是否应该使用空的命名空间？

比如 [chai-http](https://github.com/chaijs/chai-http) 之类的包, 导出一个函数。

使用 ES6 风格导入此模块的形式为 `import * as foo from "foo";`, 会报下面的错误：

> error TS2497: Module 'foo' resolves to a non-module entity and cannot be imported using this construct
> (error TS2497: 模块'foo'被解析为一个非模块实体，不能使用此结构导入)

通过将函数声明和同名的空命名空间合并可以抑制此错误，但不鼓励这种做法。
关于这个问题这是常被引用的 [Stack Overflow 答案](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this)。

使用 `import foo = require("foo");` 语法导入模块更合适。
不过，如果你想使用像 `import foo from "foo";` 这样的默认导入，你有两个选择：
- 如果你的模块运行支持 non-ECMAScript 模块的互操作方案，也就是如果默认导入适用于你的环境（例如 Webpack, SystemJS, esm），你可以使用 [`--allowSyntheticDefaultImports` 的编译器选项](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs) 。
- 如果你想使用 TypeScript 去处理 non-ECMAScript 的操作（从 Typescript 2.7 版本开始），你可以使用 [`--esModuleInterop` 的编译器选项](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop)。

#### 包使用了 `export =`, 但是我更喜欢使用默认导入。我可以将 `export =` 改为 `export default` 吗？

跟之前的问题一样，参考使用 [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs)
或 [`--esModuleInterop`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop)
的编译器选项。

请不要更改准确的类型定义。
对于一个 npm 包，如果使用 `node -p 'require("foo")'` 去导入模块，那么 `export =` 是准确的。如果使用 `node -p 'require("foo").default'` 去导入模块，那么 `export default` 是准确的。

#### 我想使用非常新的TypeScript版本的功能。

那你必须在你的定义头部的最后一行添加注释（在 `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped` 之后）：`// Minimum TypeScript Version: X.Y`。这将设置最低的支持版本。

但是，如果你的项目需要维护与3.7及以上版本兼容的类型，**同时**维护与3.6或以下版本兼容的类型，你将需要使用`typesVersions`功能。
你可以在 [官方 TypeScript 文档](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#version-selection-with-typesversions) 中找到此功能的详细说明。

这里是个简短的说明，可以帮助你入门：

1. 你必须在包定义中添加 `package.json` 文件，其中包含以下内容：

   ```json
   {
     "private": true,
     "types": "index",
     "typesVersions": {
       "<=3.6": { "*": ["ts3.6/*"] }
     }
   }
   ```

2. 在你的类型目录（本例中为 `ts3.6/` ）中创建 `typesVersions` 字段中提到的子目录。`ts3.6/` 将支持TypeScript 3.6及以下版本，所以将现有的类型和测试复制到那里。

   你需要删除`ts3.6/index.d.ts`中的定义头，因为只有根`index.d.ts`应该有这个头。

3. 将 `ts3.6/tsconfig.json` 中的 `baseUrl` 和 `typeRoots` 选项设置为正确的路径，看起来应该是这样的。
   ```json
   {
     "compilerOptions": {
       "baseUrl": "../../",
       "typeRoots": ["../../"]
     }
   }
   ```

4. 回到包的根目录，添加你想使用的 TypeScript 3.7 功能。
   当人们安装软件包时，TypeScript 3.6及以下版本将从`ts3.6/index.d.ts`开始，而TypeScript 3.7及以上版本将从`index.d.ts`开始。

   你可以在 [bluebird](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f2512c2cf7cdcf9a487d989e288174e49b7839ab/types/bluebird) 查看示例。

#### 我想去添加默认情况下不存在于 TypeScript 的 DOM API.

这属于 [TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme). 请阅读那里的指南。
如果标准仍然是草案，则它属于这里。
使用以 `dom-` 开头的名称，并在头部中包含指向标准的链接作为项目的链接。
当它结束草案模式时，我们可以将它从 Definitely Typed 删除，并弃用相关的 `@types`包。

#### Definitely Typed 包的版本与相应的库的版本有什么关系？

_注意：本节中的讨论假定你熟悉 [语义版本控制](https://semver.org/)_

每个 Definitely Typed 包在发布到 npm 时都会进行版本控制。
[DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) (将 `@types` 包发布到 npm 的工具) 会通过将 `major.minor` 版本号写在 `index.d.ts` 文件的第一行来设置定义包的版本号。
例如，以下是 `10.12.x` 版本的 [Node 的类型声明](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/node/index.d.ts) 的前几行：

```js
// Type definitions for Node.js 10.12
// Project: https://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 Definitely Typed <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
```

因为 `10.12` 在第一行的末尾，所以 `@types/node` 包的版本号也是 `10.12.x`.
注意在 `index.d.ts` 文件的第一行注释中应该只包含 `major.minor` 的版本号（比如 `10.12`），不应该包含补丁版本（例如 `10.12.4`）。
这是因为在库包和类型声明包之间只有主要版本号和次要版本号是一致的。
类型声明包的补丁版本号（比如 `10.12.0` 中的 `.0`），由 Definitely Typed 初始化为 0，每次将新的 `@types/node` 包发布到对应库的同一主/次版本的 npm 是，他都会递增。

有时候，类型声明包的版本号和库包的版本号可能会不同步。
以下是一些常见的原因，是按照给库的用户带来不便的顺序排序的。
只有最后一种情况通常是有问题的。

* 如上所示，类型定义包的补丁版本与库包的补丁版本是无关的。这允许 Definitely Typed 安全地更新同一主/次版本的类型声明。
* 如果要更新包去获取新的功能，请不要忘记更新版本号以与该版本的库保持一致。如果用户确保 JavaScript 包和它们各自的 `@types` 包之间的版本一致，那么 `npm update` 通常就可以工作了。
* 类型声明包的更新滞后于库的更新是很常见的，因为当库的新功能发布时，通常是库的用户来更新 Definitely Typed，而不是维护者。因此，在愿意帮忙的社区成员发送 PR 去更新新的库版本对应的类型声明包之前，可能会有几天，几周甚至几个月的滞后。
  如果你深受此影响，你可以成为你想在世界上看到的改变，你可以去成为乐于助人的社区成员！

:exclamation: 如果你想更新库的类型声明，请记住始终要在 `index.d.ts` 文件的第一行设置 `major.minor` 的版本号去匹配你正在记录的库版本！ :exclamation:

#### 如果一个包做了重大的修改而更新了主要版本，我应该如何更新它的类型声明包？

[语义版本控制](https://semver.org/) 要求具有重大修改的版本必须增加主版本号。
例如，一个库在 `3.5.8` 版本之后删除了一个公有的导出函数，那么它的下一版本必须升级到 `4.0.0`.
此外，当该库的 `4.0.0` 版本发布时，它的类型声明包也需要更新到 `4.0.0`, 包括对该库 API 的任何重大修改。

许多库都有大量的开发人员（包括使用该库作为依赖的其他包的维护者），他们不会立即迁移到具有重大改变的新版本。因为维护人员需要几个月的时间去重写代码以适应新版本。
与此同时，旧版本库的用户仍然想去更新旧版本的类型声明。

如果你打算继续更新旧版本库的类型声明，你可以创建一个以当前版本（很快就是旧版本）命名的新的子文件夹（比如 `/v2/`），并将现有版本的文件都拷贝进去。

因为根文件夹始终包含最新（`"新"`）版本的类型声明，所以你需要对旧版本子目录中的文件进行一些修改，以确保相对路径的引用指向子目录，而不是根目录。

1. 更新 `tsconfig.json` 和 `tslint.json` 中的相对路径。
2. 添加路径映射规则以确保测试能够针对预期版本运行。

例如，[`history`](https://github.com/ReactTraining/history/) 库在 `2.x` 到 `3.x` 版本间引入了重大的修改。
因为许多用户仍然使用较老的 `2.x` 版本，维护人员想要将此库的类型声明更新到 `3.x`, 需要在仓库里添加 `v2` 文件夹，里面包含了旧版本的类型声明。
在编写时，[history v2 `tsconfig.json`](https://github.com/%44efinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/history/v2/tsconfig.json) 大致如下：

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

TypeScript 手册包含了优秀的 [关于编写类型定义的概括信息](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), 以及 [此示例定义文件](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html)，它展示了如何使用 ES6 模块语法创建定义，同时还指定了全局范围可用的对象。这个技术在 [`big.js` 的定义](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts) 得到了实际证明。该库可以通过网页上的脚本标记全局加载，也可以通过 require 或者 ES6 风格的风格导入。

要测试你的类型定义是否能全局引用或者作为模块导入，请创建一个 `test` 文件，并在其中放置两个测试文件。一个命名为 `YourLibraryName-global.test.ts`, 另一个为 `YourLibraryName-module.test.ts`. *全局* 测试文件应该根据如何在全局范围内库可用的网页上加载的脚本中使用它来执行定义，在这种情况下，你不应该制定 import 语句。*模块* 测试文件应该根据导入时的使用方式（包括 `import` 语句）来执行定义。如果在 `tsconfig.json` 文件中指定了 `files` 属性，请确保包含了两个测试文件。`big.js` 定义中还提供了一个 [实际例子](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test)。

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

## 许可证

该项目根据 MIT 许可证授权。

定义文件的版权分别对应于每个定义文件开头列出的每个贡献者。
