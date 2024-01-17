# Definitely Typed

> 提供*高质量* TypeScript 类型定义的仓库。

*你也可以阅读此 README 文件的[英语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md)、[西班牙语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md)、[韩语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ko.md)、[俄罗斯语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md)、[葡萄牙语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.pt.md)、[意大利语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.it.md)或[日语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ja.md)版本！*

*[管理员手册](./docs/admin.md)*

## ！！！重要提示！此仓库最近已更改布局！！！！

Definitely Typed 最近已转为正确的 `pnpm` monorepo(包含多项目或模块)；你可能需要重新阅读此文档，以了解此仓库中包的布局更改。

至少，你可能需要执行 `git clean -fdx` 指令（在 Windows 上为 `node ./scripts/clean-node-modules.js`）清理仓库以清理 `node_modules`，然后运行 `pnpm install --filter .` 以安装工作区根目录。有关 `pnpm install` 的更多信息，请参见后续章节。

## 当前状态

此章节跟踪了当前仓库及发布流程的健康状况。如果贡献者的 PR 和软件包遇到任何问题，此处的内容可能有帮助。

* 最新构建全部通过[类型检查/Lint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint)：[![构建状态](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.DefinitelyTyped?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=1&branchName=master)
* 所有软件包在 typescript@next 版本中全部通过类型检查/Lint：[![构建状态](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/Nightly%20dtslint)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=8)
* 所有软件包都在一个半小时内[发布至 npm](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher): [![发布状态](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
* [typescript-bot](https://github.com/typescript-bot) 在 Definitely Typed 上处于活动状态：[![活动状态](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)
* [基础设施更新现状](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/44317)

如果此处有任何错误或上述任何操作失败，请在 [TypeScript 社群 Discord 服务器中的 Definitely Typed 频道](https://discord.gg/typescript)提出。

## 声明文件是什么，我如何获取它们？

你可以查看 [TypeScript 手册](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)。

### npm

首选方式是使用 npm 获取声明文件。例如：

```sh
npm install --save-dev @types/node
```

编译器会自动引入这些类型。
如果你的项目没有使用模块系统，你可能需要手动添加 `types` 引用：

```ts
/// <reference types="node" />
```

更多信息请参见[手册](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)。

例如，若 npm 软件包名为“foo”，其类型声明的包名应为“@types/foo”。

如果你的软件包使用 ``package.json`` 中的 ``types`` 或 ``typings`` 关键字指定了类型，那么 npm 注册表就会像这样显示该软件包有可用的绑定：

![image](https://user-images.githubusercontent.com/30049719/228748963-56fabfd1-9101-42c2-9891-b586b775b01e.png)

如果还是找不到类型，只需查找软件包中的任何".d.ts "文件，然后用 `/// <reference path="" />` 手动将其包含在内即可

### 支持周期

Definitely Typed 仅在发布时间小于 2 年的 TypeScript 版本上测试软件包。

<img src="docs/support-window.svg#gh-light-mode-only" style="width:100%">
<img src="docs/support-window.svg#gh-dark-mode-only" style="width:100%">

<details>
<summary>旧版本的 TypeScript</summary>

`@types` 软件包在标签种列出了其明确支持的 TypeScript 版本，因此你常常可以取得大于 2 年支持周期的软件包旧版本。
例如，若运行 `npm dist-tags @types/react`，你将看到 TypeScript 2.5 可使用 react@16.0 的类型定义，而 TypeScript 2.6 和 2.7 则可使用 react@16.4：

| 标签   | 版本    |
| ------ | ------- |
| latest | 16.9.23 |
| ts2.0  | 15.0.1  |
| ...    | ...     |
| ts2.5  | 16.0.36 |
| ts2.6  | 16.4.7  |
| ts2.7  | 16.4.7  |
| ...    | ...     |

#### TypeScript 1.*

* 从本仓库的 `master` 分支手动下载并将其放入你的项目中；
* ~~[Typings](https://github.com/typings/typings)；~~ (请使用首选替代方案，typings 已经被弃用)
* ~~[NuGet](https://nuget.org/packages?q=DefinitelyTyped)。~~ (请使用首选替代方案，NuGet DT 类型发布已关闭)

你可能需要手动添加[引用](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)。

</details>

## 我该如何贡献？

Definitely Typed 因来自阁下及众多用户的贡献而发光发热！

### 测试

在向大众分享你的改进前，请在你的项目中创建名为 `typename.d.ts` 的文件，并填写其导出以试用你编写的类型声明：

```ts
declare module "libname" {
  // 类型放置于此处
  export function helloWorldMessage(): string
}
```

#### 测试对现有软件包的修改

你可直接编辑 `node_modules/@types/foo/index.d.ts` 来验证你的修改。接着，请使用下文所述的步骤将这些修改加入本仓库。

你亦可以使用[模块扩充（Module Argumentation）](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)来向 Definitely Typed 模块中添加类型，或使用上文所示的 `declare module` 方法来覆盖 `node_modules` 中的版本。

#### 为新增的软件包添加测试

在你的 `tsconfig.json` 中添加以下内容:

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

接下来，请创建 `types/foo/index.d.ts` 文件，其中包含模块“foo”的类型声明。
现在，你应该能够在代码中导入 `"foo"` 中的内容，其会自动连接到新增的类型声明。
然后，请构建*并*运行代码，以确保你的类型声明与运行时发生的情况一致。

一旦你的类型定义在实战中通过测试，请发起[拉取请求（Pull request）](#发起拉取请求pull-request)，
然后按照下方的说明[编辑现有软件包](#编辑现有软件包)或[创建新软件包](#创建新软件包)。

### 发起拉取请求（Pull request）

一旦你的软件包通过测试，你便可以在 Definitely Typed 分享它。

首先，[复刻（fork）](https://guides.github.com/activities/forking/)并[克隆](#部分克隆)此仓库，
然后安装 [Node](https://nodejs.org/)，并运行此命令：`pnpm install`。请注意，`pnpm install` 将安装*整个*仓库，包括你可能不需要编辑的包。
如果你只想安装部分内容，可以运行 `pnpm install -w --filter "{./types/foo}..."` 以安装 `@types/foo` 及其所有依赖项。
如果你需要运行依赖于 `@types/foo` 的包的测试，可以运行 `pnpm install -w --filter "...{./types/foo}..."` 来引入所有相关的测试包。


> [!NOTE]
> 如果你使用的是 Windows，你可能会发现 `git clean` 不会移除 `node_modules` 目录，或者在尝试移除时挂起。如果你需要移除 `node_modules`，你可以运行 `pnpm clean-node-modules` 来重置仓库。

我们使用机器人来确保能像自助服务一样处理提交至 Definitely Typed 的大量拉取请求。欲知详情，请阅读[此处](https://devblogs.microsoft.com/typescript/changes-to-how-we-manage-definitelytyped/)。下图简要展示了拉取请求的生命周期：

<img src="https://github.com/DefinitelyTyped/dt-mergebot/blob/master/docs/dt-mergebot-lifecycle.svg">

#### 部分克隆

<details>
<summary>你可<a href='https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository'>照常</a>克隆本仓库，但本仓库极为庞大，包含海量的类型声明包。</summary>

你可[照常](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)克隆本仓库，但本仓库极为庞大，包含海量的类型声明包。因此，克隆操作将会耗费大量时间，显得笨拙且毫无必要。

你可以使用 git 的 [`sparse-checkout`](https://git-scm.com/docs/git-sparse-checkout)，[`--filter`](https://git-scm.com/docs/git-rev-list#Documentation/git-rev-list.txt---filterltfilter-specgt)，和 [`--depth`](https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---depthltdepthgt) 功能。这样，仓库克隆只会包含相关的类型软件包，更便于管理、减少了克隆时间且提高了 git 的性能。

>:warning: 该特性需要 [git 版本 2.27.0 或更高](https://git-scm.com/downloads)，而大多数设备上的默认版本通常要低于此。旧版本的 git 可以通过更复杂的流程实现类似功能，但本文不涉及。

1. `git clone --sparse --filter=blob:none --depth=1 <forkedUrl>`
    - `--sparse` 将初始化 sparse-checkout 文件，首次克隆的只有仓库根目录的文件。
    - `--filter=blob:none` 将排除文件，只在需要时获取它们。
    - `--depth=1` 可以通过截断提交历史来进一步提高克隆速度，不过它可能会导致一些问题，详情请见[此链接](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/)。
2. `git sparse-checkout add types/<type> types/<dependency-type> ...`

</details>

#### 编辑现有软件包

* 作出修改之后，[请记得编辑测试](#my-package-teststs)。
  如果你作出了破坏性更改，请不要忘记[更新主版本](#如果一个软件包做了重大的修改而更新了主版本我应该如何更新它的类型声明包)。
* [运行 `pnpm test <package to test>`](#运行测试)。

当你对现有的软件包发起 PR 的时候，`dt-bot` 应该会通知先前的作者。
如果没有，你可在与 PR 关联的评论中手动 @ 作者。

#### 创建新软件包

如果你是库作者，并且你的软件包使用 TypeScript 编写，那么请在你的软件包里[捆绑自动生成的声明文件](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)而非将其发布至 Definitely Typed。

如果你要为 npm 软件包添加类型，请创建一个同名目录。
如果你想要添加类型的软件包不在 npm 上，请选择一个不与 npm 上已有的包名冲突的名称。
(你可以使用 `npm info <my-package>` 来检查 `<my-package>` 软件包是否存在。)

你的软件包应该具有这样的结构：

| 文件名 | 目的 |
| --- | --- |
| `index.d.ts` | 此文件包含软件包的类型声明。 |
| [`<my-package>-tests.ts`](#my-package-teststs) | 此文件包含测试类型声明的示例代码，其**不会**运行，但是它会通过类型检查。 |
| [`tsconfig.json`](#tsconfigjson) | 此文件允许你在软件包中运行 `tsc`。 |
| [`.eslintrc.json`](#linter-eslintrcjson)   | （极少使用）仅在需要禁用 ESLint 规则时使用。 |
| [`package.json`](#packagejson) | 包含该包的元数据(metadata)，包括其名称、版本和依赖关系。       |
| [`.npmignore`](#npmignore)    | 指定哪些文件应包含在包中。                  |


通过运行 `npx dts-gen --dt --name <my-package> --template module` 来生成这些文件。
可以在 [dts-gen](https://github.com/Microsoft/dts-gen) 查看所有的选项。

如果软件包中除了 `index.d.ts` 以外还有别的 `.d.ts` 文件，请确保它们在 `index.d.ts` 或测试文件中被引用。

Definitely Typed 的成员会定期查看新的 PR，但是请留意，当 PR 数量过多的时候，检查速度可能会减慢。

如果你想要真实的示例，[base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js) 是个很好的例子。

#### 删除软件包

当一个软件包[捆绑](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)了自己的类型时，应该从 Definitely Typed 中删除相应的类型以避免混淆。

你可以运行以下命令来删除它： `pnpm run not-needed -- <typingsPackageName> <asOfVersion> [<libraryName>]`。
* `<typingsPackageName>`：这是你要删除的目录名字。
* `<asOfVersion>`：一个含有废弃信息的软件包的新版本将会发布到 `@types/<typingsPackageName>`。此选项指定新版本的版本号，其应该高于当前发布的任何版本，并且应该是 npm 上的 `<libraryName>` 版本。
* `<libraryName>`：替换 Definitely Typed 中类型的 npm 的包名。与 `<typingsPackageName>` 相同时可省略此项。

如果这个软件包从未发布到 Definitely Typed 过，则不需要将其添加到 `notNeededPackages.json`。

#### 运行测试

请运行 `npm test <package to test>` 以测试你的改动，其中 `<package to test>` 是你的包名。
你需要从 DefinelyTyped 目录运行它，因为单个 package.json 不定义测试脚本。

此脚本使用了 [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint) 来对你的 `.d.ts` 文件进行 TypeScript 编译测试。

一旦你完成以上所有事项，请运行 `pnpm run test-all` 以查看你的更改对其他模块是否存在影响。

#### 命名

如果你要为 npm 软件包添加类型，请创建一个同名目录。
如果你想要添加类型的软件包不在 npm 上，请选择一个不与 npm 上已有的包名冲突的名称。
(你可以使用 `npm info <my-package>` 来检查 `<my-package>` 软件包是否存在。)

如果一个不在 npm 上的软件包与另一个 npm 软件包重名，请尝试在包名末尾添加 `-browser`，即 `<my-package>-browser`。

#### `<my-package>-tests.ts`

在类型声明包目录下应该存在一个名为 `<my-package>-tests.ts` 的文件。该文件自身与其导入的所有 `*.ts` 文件都被视为测试文件。
若你的项目目录下不存在测试文件，请建立 `<my-package>-tests.ts`。这些文件用于验证 `*.d.ts` 文件导出的 API，也就是发布至 `@types/<my-package>` 中的类型声明。它们本身不会被发布。

对 `*.d.ts` 的任何修改应该在 `*.ts` 中进行相应的更改以演示此 API 的用途，因而他人将不会意外破坏你所依赖的代码。

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

+ // 处理选项参数
+ const resultWithOptions = twoslash("//", { version: "3.7" })
+ // 如果参数错误
+ // @ts-expect-error
+ const resultWithOptions = twoslash("//", {  })
```

如果你不知道从何处开始编写测试代码，模块 README 文件中的示例代码是个很好的参考。

你可以在根目录执行 `npm test <package to test>` 来[验证你的更改](#运行测试)，该命令会考虑到已更改的文件。

若要断言表达式为给定类型，请使用 `$ExpectType`. 若要断言表达式会导致编译错误，请使用 `@ts-expect-error`。例如：

```js
// $ExpectType void
f(1);

// @ts-expect-error
f("one");
```

更多详细信息，请参见 [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint#write-tests) 的 README 文件。

##### Linter: `.eslintrc.json`

你仅应在需要禁用规则的那一行处禁用规则，与 TSLint 相同：

```ts
// eslint-disable-next-line no-const-enum
const enum Const { One }
const enum Enum { Two } // eslint-disable-line no-const-enum
```

你仍可以在 `.eslintrc.json` 中禁用规则，但在新增软件包中不应这么做。
为整个包禁用规则会使审查变得更加困难。

#### `tsconfig.json`

`tsconfig.json` 应包含 `noImplicitAny`、`noImplicitThis`、`strictNullChecks` 和 `strictFunctionTypes`，其值均为 `true`。

你可以编辑 `tsconfig.json` 来增加新测试文件、增加 `"target": "es6"`（以启用异步函数支持）、增加 `"lib"`，或者增加 `"jsx"` 编译选项。

##### `esModuleInterop`/`allowSyntheticDefaultImports`

简言之：你的 `tsconfig.json` 中*不应*出现 `esModuleInterop` 和 `allowSyntheticDefaultImports`。

> 这些选项使得为 CommonJS 导出设置默认导入成为可能，目的是在 Node 以及部分 JS 打包器中实现 CJS 和 ESM 的互操作性：
>
> ```tsx
> // component.d.ts
> declare class Component {​​​​​}​​​​​
> // CJS 导出，相当于 JS 中的 `module.exports = Component`
> export = Component;
>
> // index.d.ts
> // ESM 默认导入，仅在 'esModuleInterop' 或 'allowSyntheticDefaultExports' 选项设置时才允许
> import Component from "./component";
> ```
>
> 鉴于 `index.d.ts` 中的导入在编译时是否有效取决于特定的编译设置，而你的类型声明的用户不一定遵照了这些设置。在 Definitely Typed 中使用这些选项将会迫使用户更改其编译设置，而在他们的运行时环境下这么做可能是错误的。相反，在使用 CJS 导出时，你必须使用 CJS 导入语法，以确保广泛的、独立于配置的兼容性。
>
> ```ts
> // index.d.ts
> // CJS 导入，相当于 JS 中的 `const Component = require("./component")`
> import Component = require("./component");
> ```

#### `package.json`

此文件是必需的，应遵循以下模板：

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

`package.json` 指定了*所有*依赖项，包括其他 `@types` 包。

你必须将非 `@types` 依赖项添加到 [允许的外部依赖项列表](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt)。
[Pikaday 是一个很好的示例。](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json)
这些添加需要由维护者批准，这样我们就可以确保 `@types` 包不依赖于恶意包。

如果实现包使用 ESM 并指定了 `"type": "module"`，那么你应该修改 `package.json` 以匹配：

```json
{
    "type": "module"
}
```

如果软件包在 `package.json` 中包含了 `export` 导出，这么做仍旧适用。


#### `.npmignore`

此文件定义了应该包含在每个 `@types` 包中的文件。它必须采用特定的形式。对于仓库中只有一个版本的包：

```ignore
*
!**/*.d.ts
!**/*.d.cts
!**/*.d.mts
!**/*.d.*.ts
```

这意味着“忽略所有文件，但不要忽略任何声明文件”。对于仓库中有多个版本的包，"latest" 版本（位于顶层）应包含类似以下内容：

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

这与前面的 `.npmignore` 相同，只是忽略了每个版本化的子目录。

如果此文件包含错误的内容，CI 将失败并提供预期的值。无论此文件包含什么内容，发布者都只会发布声明文件。

#### 常见错误

* 首先，请遵循[手册](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)的建议。
* 格式化：此仓库已设置 [dprint](https://dprint.dev)，因此你可以运行 `pnpm dprint fmt -- 'path/to/package/**/*.ts'`。
  * 考虑使用 VS Code 的 `.vscode/settings.template.json`（或其他编辑器的等效文件），通过 [VS Code dprint 扩展](https://marketplace.visualstudio.com/items?itemName=dprint.dprint) 在保存时进行格式化。
* `function sum(nums: number[]): number`: 如果函数没有修改传入的参数，请使用 `ReadonlyArray`。
* `interface Foo { new(): Foo; }`:
  以上代码定义了一个可以实例化的接口（对象），你可能想要的是 `declare class Foo { constructor(); }`。
* `const Class: { new(): IClass; }`:
  更推荐使用类声明 `class Class { constructor(); }`，而不是可实例化的常量。
* `getMeAT<T>(): T`:
  如果类型参数没有在函数的参数列表中出现，那么其仅仅是变相的类型断言。
  这种情况下，并不需要使用泛型，建议你使用真正的类型断言，类似这样：`getMeAT() as number`。
  可接受的类型参数示例：`function id<T>(value: T): T;`。
  不可接受的类型参数示例：`function parseJson<T>(json: string): T;`。
  例外：`new Map<string, number>()` 是可以接受的。
* 使用 `Function` 和 `Object` 类型基本上属于下下策。在 99% 的情况下，你都可以将其替换为更精确的类型。例如，如果使用 `(x: number) => number` 表示 [函数(Function)](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions)；使用 `{ x: number, y: number }` 表示 `Object`。对于完全无法确定的类型，应使用 [`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) 而不是 `Object`。如果仅知道某个类型为某种对象，请使用 [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type)，而不是 `Object` 或 `{ [key: string]: any }`。
* `var foo: string | any`:
 在联合类型中使用 `any` 将导致最终结果始终为 `any`。因此，即便类型中的 `string` 部分*看起来*很有用，但实际上在类型检查方面与 `any` 并无区别。根据你的实际目的，请考虑选择 `any`、`string`，或 `string | object`。

### 类型定义所有者

> 简言之：请勿修改 `.github/CODEOWNERS`，请始终修改 `package.json` 中的 `owners` 数组

Definitely Typed 有“类型定义所有者”的概念——即愿意维护特定模块类型声明的人。

* 如果你将自己添加到了列表中，当他人发起关于此软件包的 PR 或 issue 时，你将会收到通知（通过你的 GitHub 用户名）。
* 对于维护本仓库的[机器人](https://github.com/DefinitelyTyped/dt-mergebot)而言，你的 PR 审核将会具有更高优先级以及重要性。
* 为维护稳定的社区环境，DT 维护者对类型定义所有者给予了较高的信任，因此将你自己添加为所有者时，请三思而后行。

若要将你自己添加为类型定义所有者，编辑 `package.json` 中的 `owners` 数组：

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

请注意，此列表*不用于*为贡献者提供认可；它仅用于管理 PR 的审查。

类型定义所有者会被同步到文件 [.github/CODEOWNERS](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/.github/CODEOWNERS)，每周更新一次。此数组就是我们的事实来源（Source of Truth）。

## Definitely Typed 历史

Definitely Typed 是 GitHub 上最活跃的软件源之一。你可能想知道这个项目是如何诞生的。@johnnyreilly 整理了 Definitely Typed 的历史。它讲述了 Definitely Typed 早期的故事，从 @borisyankov 创建仓库到成为 TypeScript 生态系统的关键部分。你可以在这里[阅读 Definitely Typed 的故事](https://johnnyreilly.com/definitely-typed-the-movie)。

## 常见问题（FAQ）

#### 这个仓库和 npm 上的 `@types` 软件包究竟是什么关系？

`master` 分支中的内容会通过 [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) 自动发布到 npm 上的 `@types` 软件包中。

#### 我已经发起了 PR，它多久会被合并？

视情况而定，但大多数的 PR 会在一周内被合并。部分 PR 可以由模块的所有者合并，因此它们的合并时间比其他 PR 快得多。大致上：

> 如果 PR 仅仅更改了模块中的类型，并且包含了相应的测试，合并过程会大大加快。

被类型定义所有者（在定义文件的标头列明）批准的 PR 通常合并得更快；提交新类型定义的 PR 需要更多时间，因为它们需要维护人员花更多的时间审核。每一个 PR 在合并之前都会由 TypeScript 或 Definitely Typed 的团队成员进行审核，所以请耐心等待，因为人为因素可能导致延迟。通过查看 [新拉取请求状态板](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/5)，可以看到维护人员在开启的 PR 上的工作进度。

#### 我想给流行项目提交更改，为什么它们受到了特殊对待？

对于针对广泛使用的项目的更改，例如 Node、Express、Jest 这些 npm 每周下载量数百万的项目，提交贡献的要求会稍高一些。
由于这些项目的更改可能在整个软件生态系统中带来巨大的影响，我们会对这些项目给予特殊关照。
这些模块的更改需要来自一位 DT 维护者的同意以及来自模块所有者的强烈支持才会被合并。标准线可能非常高，因而许多 PR 由于得不到足够多的支持而被搁置。
如果你发现无人愿意支持你的 PR，请尝试缩小你的 PR 的关注点。

#### 我的 PR 已经合并，什么时候 `@types` npm 软件包会更新？

npm 软件包应该会在几分钟内更新。如果已经超过了一小时，请在 [TypeScript 社群 Discord 服务器中的 Definitely Typed 频道](https://discord.gg/typescript)上提及 PR 的编号，当前维护者会让团队成员展开调查。

#### 我正在编写依赖其他类型定义的类型定义，应该使用 `<reference types="" />` 还是 `import` 来导入？

如果你引用的外部模块（使用 `export`），那么请使用导入。
如果你引用的是环境模块（使用 `declare module`，或者只声明全局变量），那么请使用 `<reference types="" />`。

#### 有些软件包不含 `tslint.json` 文件，有些 `tsconfig.json` 文件缺少 `"noImplicitAny": true`、`"noImplicitThis": true`，或 `"strictNullChecks": true`。

那么这些文件就是错误的，但我们还没有注意到它们。你可以通过发起 PR 来修复它们。

#### 文件是否会自动格式化？

是的，使用 [dprint](https://dprint.dev)。
我们建议使用 [编辑器的 dprint 扩展](https://dprint.dev/install/#editor-extensions)。

合并请求不需要正确的格式化即可合并。
任何未格式化的代码将在合并后自动重新格式化。

> 💡 如果你使用 VS Code，请建议将 `.vscode/settings.template.json` 文件复制到 `.vscode/settings.json`。
> 该模板将 [dprint VS Code 扩展](https://marketplace.visualstudio.com/items?itemName=dprint.dprint) 设置为仓库中的默认格式化工具。

#### 我可以申请新增类型定义吗？

这里是[当前申请中的类型定义](https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/categories/request-a-new-types-package)。

#### DOM 的类型定义应该包含于此吗？

如果类型是 Web 标准的一部分，它们应该贡献给  [TypeScript-DOM-lib-generator](https://github.com/Microsoft/TypeScript-DOM-lib-generator)，以便其成为默认 `lib.dom.d.ts` 的一部分。

#### 没有匹配软件包的类型定义怎么办?

如果完全没有 Javascript 源代码，例如你正在编写辅助类型或规范类型，则应自行发布这些类型，而不是在 Definitely Typed 上发布。
因为 `@types` 包的目的是为现有 Javascript 代码提供类型，所以不能直接导入。
也就是说，你不应该创建一个类似于 `import type { ... } from "@types/foo"` 的 Definitely Typed 包。
当 `foo` 未安装时，也不要指望写出 `import type { ... } from "foo"`。

这不同于为浏览器专用 Javascript 库提供类型，也不同于为整个环境（如 node、bun 等）提供类型。
在那种情况下，要么隐式地解析类型，要么使用  `/// <references types="foo" />` 来解析。


#### 如果一个软件包导出的不是模块对象，为了能使用 ES6 风格的导入语法，我应该向软件包中添加一个空命名空间吗？

有些软件包，比如 [chai-http](https://github.com/chaijs/chai-http)，导出内容为一个函数。

使用 ES6 风格的导入语法 `import * as foo from "foo";` 导入此模块将产生如下错误：

> 错误 TS2497： 模块'foo'解析为非模块实体，不能使用此结构导入

添加同名的空命名空间与函数声明合并可以抑制此错误，但不鼓励这种做法。关于此问题，该 [Stack Overflow 回答](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this)常被提及，值得参考。

使用 `import foo = require("foo");` 语法导入模块更合适。
但如果你欲使用如 `import foo from "foo";` 这样的默认导入，有两个选择：
- 你可以使用 [`--allowSyntheticDefaultImports` 编译器选项](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs) ，如果你的模块运行时环境支持与非 ECMAScript 模块的互操作，即默认导入在你的环境中能正常工作（例如 Webpack、SystemJS、esm）。
- 你可以使用 [`--esModuleInterop` 编译器选项](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop)，如果你想使用 TypeScript 处理非 ECMAScript 模块的互操作（自 TypeScript 2.7 版本开始）。

#### 一个软件包使用了 `export =`，但是我更喜欢使用默认导入。我可以将 `export =` 改为 `export default` 吗？

答案与上一个问题相同，请考虑使用 [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs)
或 [`--esModuleInterop`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop)
编译器选项。

如果类型定义准确，请勿更改。
如果一个 npm 软件包可以使用 `node -p 'require("foo")'` 导入，那么 `export =` 就是准确的；如果其可以使用 `node -p 'require("foo").default'` 导入，那么 `export default` 就是准确的。

#### 我想使用极新的 TypeScript 版本的功能。

那么，你必须在你的类型定义标头的最后一行添加注释（在 `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped` 之后）：`// Minimum TypeScript Version: X.Y`，来设置受支持的最低 TypeScript 版本。

然而，举个例子，如果你的项目需要*同时*维护兼容 3.7 及以上版本和兼容 3.6 及以下的版本的类型，那么你需要使用 `typesVersions` 功能。
你可以在[官方 TypeScript 文档](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#version-selection-with-typesversions)中找到此功能的详细说明。

为帮助你理解，以下为简要示例：

1. 你需要在 `package.json` 中添加 `typesVersions`：

    ```json
    {
        "private": true,
        "types": "index",
        "typesVersions": {
            "<=3.6": { "*": ["ts3.6/*"] }
        }
    }
    ```

2. 在你的类型目录中创建在 `typesVersions` 字段中提到的子目录（在本例中为 `ts3.6/`），其中包含支持 TypeScript 3.6 及以下版本的类型声明。接着，请复制现有的类型声明和测试文件至该目录。

   由于只有根目录的 `index.d.ts` 文件才应拥有类型定义标头，你需要删除 `ts3.6/index.d.ts` 中的类型定义标头。

3. 回到包的根目录，在那里添加你想要使用的 TypeScript 3.7 功能。
   当安装软件包时，TypeScript 3.6 及更低版本将会使用 `ts3.6/index.d.ts`，而 TypeScript 3.7 及更高版本将会使用 `index.d.ts`。

   你可参照 [bluebird](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f2512c2cf7cdcf9a487d989e288174e49b7839ab/types/bluebird) 作为示例。

#### 我想添加默认情况下不存在于 TypeScript 的 DOM API。

这些 API 属于 [TypeScript-DOM-lib-generator](https://github.com/Microsoft/TypeScript-DOM-lib-generator#readme)，请阅读其指引以了解更多信息。
如果标准仍处于草案阶段，那么它应该收录于此。
请使用以 `dom-` 开头的名称作为包名，并在标头中包含指向标准的链接作为项目链接。
当它成为正式标准时，我们可以将它从 Definitely Typed 删除，并弃用相关的 `@types`软件包。

#### Definitely Typed 软件包的版本好与相应库的版本号有什么关系？

*注意：本节中的讨论假定你熟悉[语义化版本（Semantic Versioning）](https://semver.org/lang/zh-CN/)*

每个 Definitely Typed 软件包在发布到 npm 时都会标注版本。
[DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) (将 `@types` 软件包发布到 npm 的工具) 将使用在 `package.json` 中列出的 `major.minor.9999` 版本号来设置声明包的版本。
例如，在撰写时，以下是 Node 版本 `20.8.x` 的类型声明的前几行：

```json
{
    "private": true,
    "name": "@types/node",
    "version": "20.8.9999",
}
```

由于版本被列为 `20.8.9999`，`@types/node` 包的 npm 版本也将是 `20.8.x`。
请注意，`package.json` 中的版本应该只包含 `major.minor` 版本（例如 `10.12`），后跟 `.9999`。
这是因为只有库包和类型声明包之间的主要和次要发布版本号是对齐的。（`.9999` 是为了确保在本地开发期间本地的 `@types` 包始终是最新的。）
类型声明包的补丁版本号（比如 `10.12.0` 中的 `.0`）由 Definitely Typed 初始化为 0，每次将新的 `@types/node` 软件包以同一主/次版本发布到 npm 中对应库时，其都会递增。

有时，类型声明包的版本号和库包的版本号可能会不同步。
以下是一些常见的原因，按照给库的用户带来不便的程度排序。
只有最后一种情况通常是有问题的。

* 如上所示，类型定义包的补丁版本与库包的补丁版本是无关的。这允许 Definitely Typed 安全地更新同一主/次版本的类型声明。
* 如果要更新类型声明包以获取新功能，请务必更新版本号以与该版本的库保持一致。如果用户能确保 JavaScript 软件包与其各自的 `@types` 软件包之间的版本一一对应，那么 `npm update` 通常就可以正常使用。
* 类型声明包的更新滞后于库的更新是很常见的，这通常是因为当库的新功能发布时，通常是库的用户来更新 Definitely Typed，而不是维护者。因此，在愿意帮忙的社区成员发送 PR 以更新库的新版本对应的类型声明包之前，可能会有几天、几周甚至几个月的滞后。如果你深受此影响，你不妨亲自动手作出喜闻乐见的贡献，成为乐于助人的社区成员！

:exclamation: 如果你想更新库的类型声明，请记住始终要在 `index.d.ts` 文件的第一行设置 `major.minor` 的版本号以匹配你正在描述的库版本！ :exclamation:

#### 如果一个软件包做了重大的修改而更新了主版本，我应该如何更新它的类型声明包？

[语义化版本（Semantic Versioning）](https://semver.org/lang/zh-CN/)要求具有重大修改的版本必须增加主版本号。
例如，一个库在 `3.5.8` 版本之后删除了一个公有的导出函数，那么它的下一版本必须升级到 `4.0.0`。
此外，当该库的 `4.0.0` 版本发布时，它的类型声明包也需要更新到 `4.0.0`，包括对该库 API 的任何重大修改。

许多库都有大量的开发人员（包括使用该库作为依赖的其他软件包的维护者），他们不会立即迁移到具有重大改变的新版本。因为维护人员需要几个月的时间重写代码以适应新版本。
与此同时，旧版本库的用户仍然想更新旧版本的类型声明。

如果你打算继续更新旧版本库的类型声明，你可以创建一个以当前版本（很快就是旧版本）命名的新的子文件夹（比如 `/v2/`），并将现有版本的文件都拷贝进去。

在创建新的版本目录时，请确保已更新 `package.json` 的版本字段；`pnpm` 将在需要时自动解析到这个版本化的包。如果仓库中的其他包需要依赖于这个新版本，请确保它们的 `package.json` 也已更新。

例如，如果我们正在创建 `types/history/v2`，其 `package.json` 将如下所示：

```json
{
    "private": true,
    "name": "@types/history",
    "version": "2.4.9999",
}
```

另一个包可以通过指定以下内容选择此版本：

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

另外，`/// <reference types=".." />` 在使用路径映射时无法正常工作，因此依赖项必须使用 `import`。

#### 如何为既可全局使用，也可作为模块使用的软件包编写类型定义？

TypeScript 手册包含了优秀的[编写类型定义的一般信息](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)，以及[此示例定义文件](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html)，它展示了如何使用 ES6 模块语法创建定义，同时还指定了全局范围可用的对象。这个技术在 [`big.js` 的定义](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts) 得到了实际证明。该库可以通过网页上的脚本标记全局加载，也可以通过 require 或者 ES6 风格的风格导入。

要测试你的类型定义是否能全局引用或者作为模块导入，请创建一个 `test` 文件夹，并在其中放置两个测试文件。一个命名为 `YourLibraryName-global.test.ts`，另一个为 `YourLibraryName-module.test.ts`。*全局*测试文件应该根据如何在全局范围内库可用的网页上加载的脚本中使用它来执行定义，在这种情况下，你不应该使用 import 语句。*模块*测试文件应该根据导入时的使用方式（包括 `import` 语句）来执行定义。如果在 `tsconfig.json` 文件中指定了 `files` 属性，请确保包含了两个测试文件。`big.js` 定义中还提供了一个[实际例子](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test)。

请注意，不需要在每个测试文件中完全执行定义——只需要在全局测试文件中测试全局可访问元素并在模块测试文件中完全执行定义，反之亦然。

#### 如何处理作用域包（Scoped package）？

作用域包 `@foo/bar` 的类型应该放在 `types/foo__bar` 中。请注意使用双下划线。

## 许可证

该项目根据 MIT 许可证授权。

定义文件的版权分别属于每个定义文件开头列出的每个贡献者。
