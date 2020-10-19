# Definitely Typed

> 这是一个 *高质量* 的 TypeScript 类型定义的仓库。

也可以去看 [definitelytyped.org](http://definitelytyped.org) 这个网站，尽管这个 README 里的信息更新。

*你可以去看其他语言的 README，[英语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md)，[西班牙语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md)，[韩语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ko.md)，[俄罗斯语](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md)*

*[管理员手册](./docs/admin.md)*

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

See [CONTRIBUTING.cn.md](CONTRIBUTING.cn.md).

## 许可证

该项目根据 MIT 许可证授权。

定义文件的版权分别对应于每个定义文件开头列出的每个贡献者。
