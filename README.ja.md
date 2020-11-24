# Definitely Typed

> 高品質な TypeScript の型定義用レポジトリ

*この README は[英語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md)・[スペイン語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md)・[韓国語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ko.md)・[ロシア語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md)・[中国語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.cn.md)・[ポルトガル語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.pt.md)でも閲覧できます！*

*[管理者用マニュアル](./docs/admin.md) はこちら*

## 目次

* [現在のステータス](#current-status)
* [型定義ファイルとは何ですか？ またどのように入手できますか？](#what-are-declaration-files-and-how-do-i-get-them)
* [コントリビュート（貢献）する方法](#how-can-i-contribute)
  - [試してみる](#testing)
  - [PR を作成する](#make-a-pull-request)<details><summary></summary>
    - [既存のパッケージを編集する](#edit-an-existing-package)
    - [新しくパッケージを作成する](#create-a-new-package)
    - [よくあるミス](#common-mistakes)
    - [パッケージを削除する](#removing-a-package)
    - [Linter](#linter)
    - [\<パッケージ名>-tests.ts](#my-package-teststs)
    - [テストの実行](#running-tests)
    </details>
  - [型定義のオーナー](#definition-owners)
* [よくある質問](#faq)
* [ライセンス](#license)


## 現在のステータス

このセクションではレポジトリと公開プロセスの稼働状況を追跡できます。
PR やパッケージに何か不具合がある場合は、これらが役に立つかもしれません。

* 直近のビルドの[型チェックと Lint](https://github.com/Microsoft/dtslint) が正常終了したか: [![Build Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.DefinitelyTyped?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=1&branchName=master)
* 次バージョンの TypeScript 上で全パッケージの型チェックと Lint が正常終了したか: [![Build status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/Nightly%20dtslint)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=8)
* 1時間以内に全パッケージが [npm に公開](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher)されているか: [![Publish Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
* Definitely Typed 上で [typescript-bot](https://github.com/typescript-bot) がアクティブかどうか: [![Activity Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)
* 現在の[運用基盤のステータス更新](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/44317)

掲載されているもので何かが正常ではなかったり、結果が失敗になっているものがある場合は、 [TypeScript コミュニティの Discord サーバーの Definitely Typed のチャンネル](https://discord.gg/typescript)までご連絡ください。

## 型定義ファイルとは何ですか？ またどのように入手できますか？

[TypeScript ハンドブック](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)<small>（英語）</small>を参照してください。

### npm

こちらが推奨される方式です。 例:

```sh
npm install --save-dev @types/node
```

上記のコマンドにより、コンパイラが自動的に型を追加します。
モジュールを使用しない場合は、下記のように `types` リファレンスを追加する必要があります。

```ts
/// <reference types="node" />
```

詳しくは[ハンドブック](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)を参照してください。

「foo」という名前の NPM モジュール用の型定義は「@types/foo」になります。
パッケージが見つからない場合は [TypeSearch](https://microsoft.github.io/TypeSearch/) で検索してください。

検索しても見つからない場合は、パッケージ内に型定義が[含まれている](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)かどうか確認してください。
大抵は `package.json` の `"types"` フィールドや `"typings"`  フィールドに指定されています。
もしくは、パッケージ内の各 ".d.ts" ファイルを確認し、 `/// <reference path="" />` を使って手動でインクルードしてください。

#### 古いバージョンの TypeScript （3.1 以前）

Definitely Typed では、リリースから2年以内のバージョンの TypeScript 上でのみパッケージのテストを実施しています。
現時点ではバージョン 3.2 以上でテストされています。
TypeScript 2.0 ～ 3.1 を使用している場合、引き続き `@types` パッケージをインストールすることは可能です &mdash; これは TypeScript の最新機能を使用しているパッケージがそんなに多くないためです。
ただし、正常に動作する保証もありません。
サポート期間については下記のとおりです。

| バージョン | リリース   | サポート終了 |
| ---------- | ---------- | ------------ |
| 2.8        | 2018年3月  | 2020年3月    |
| 2.9        | 2018年5月  | 2020年5月    |
| 3.0        | 2018年7月  | 2020年8月    |
| 3.1        | 2018年9月  | 2020年9月    |
| 3.2        | 2018年11月 | 2020年11月   |
| 3.3        | 2019年1月  | 2021年1月    |
| 3.4        | 2019年3月  | 2021年3月    |
| 3.5        | 2019年5月  | 2021年5月    |
| 3.6        | 2019年8月  | 2021年8月    |
| 3.7        | 2019年11月 | 2021年11月   |
| 3.8        | 2020年2月  | 2022年2月    |
| 3.9        | 2020年5月  | 2022年5月    |
| 4.0        | 2020年8月  | 2022年8月    |

`@types` パッケージには、サポートする TypeScript のバージョンを明示的に指定するタグがあるため、多くの場合はサポート期間内のバージョン用のパッケージを入手できます。
たとえば、 `npm dist-tags @types/react` を実行すると、 TypeScript 2.5 なら react@16.0 の、 TypeScript 2.6 や 2.7 なら react@16.4 の型定義がそれぞれ利用できることが確認できます。

| タグ   | バージョン |
| ------ | ---------- |
| latest | 16.9.23    |
| ts2.0  | 15.0.1     |
| ...    | ...        |
| ts2.5  | 16.0.36    |
| ts2.6  | 16.4.7     |
| ts2.7  | 16.4.7     |
| ...    | ...        |

#### TypeScript 1.x系

* このレポジトリの `master` ブランチから手動でダウンロードして、開発しているプロジェクトに配置してください。
* ~~[Typings](https://github.com/typings/typings)~~ （Typings は非推奨になったので、他の方式を使用すること）
* ~~[NuGet](http://nuget.org/packages?q=DefinitelyTyped)~~ （NuGet 上の DefinitelyTyped の公開は終了したので、他の方式を使用すること）

手動で[リファレンス](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)を追加する必要があります。

## コントリビュート（貢献）する方法

Definitely Typed は、あなたのようなユーザーによるコントリビュート（貢献）のおかげで成り立っています！

### 試してみる

改良したものを世界中に共有する前に、まず自分自身で使ってみてください。

> <small>（訳注: 原文における本セクションでの "test"・"testing" は、[テストの実行](#running-tests)で言及されるような dtslint による自動テストではなく、単に提出しようとしている変更を実際のアプリで試すことを指します。）</small>

#### 既存のパッケージへの変更点を試す

（訳注: 変更した型定義を試すための）あなたのアプリでローカル環境でテストする場合、[モジュール拡張](http://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)<small>（module augmentation）</small>を使うと、編集したい DefinitelyTyped モジュールからの型定義を拡張できます。
また、 `node_modules/@types/foo/index.d.ts` にある型定義を直接編集して、変更点を動作確認できます。そのあとに、下記手順に沿って変更をこのレポジトリに反映させてください。

#### 新しいパッケージを試す

次のコードを、（訳注: 新しい型定義を試すための）あなたのアプリの `tsconfig.json` に追加してください:

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

次に、 `types/foo/index.d.ts` を作成し、「foo」モジュールの型定義を含めてください。
これで、あなたのコード上で `"foo"` モジュールからインポートできるようになりました。インポートは新しい型定義を参照します。
そのあと、コードをビルドし、**そして**実行し、作製した型定義が実行時の動作と実際に一致していることを確認してください。

実際のコードで試す工程が完了したら、 [PR](#make-a-pull-request) を作成するので、[既存のパッケージを編集する](#edit-an-existing-package)か[新しくパッケージを作成する](#create-a-new-package)か、いずれかの指示に従ってください。

### PR を作成する

変更・新規作成したパッケージを試し終えたら、 Definitely Typed で共有しましょう。

まず、このレポジトリを[フォーク](https://guides.github.com/activities/forking/)し、 [node](https://nodejs.org/) をインストールし、 `npm install` を実行します。

DefinitelyTyped への大量の PR を全てセルフサービス方式で処理するために bot を導入しています。詳しい方法と理由については[こちら](https://devblogs.microsoft.com/typescript/changes-to-how-we-manage-definitelytyped/)<small>（英語）</small>で確認できます。下図は DefinitelyTyped への PR のライフサイクルを簡単に示したものです。

<img src="https://github.com/DefinitelyTyped/dt-mergebot/blob/master/docs/dt-mergebot-lifecycle.png?raw=true">

#### 既存のパッケージを編集する

* `cd types/<編集したいパッケージ名>` を実行。
* 変更を加える。[テストを編集する](#my-package-teststs)のも忘れずに行う。
  破壊的な変更を加えるときは、必ず[メジャーバージョンを更新する](#if-a-library-is-updated-to-a-new-major-version-with-breaking-changes-how-should-i-update-its-type-declaration-package)。
* [`npm test <テストしたいパッケージ名>` を実行](#running-tests)。

既存のパッケージを編集する PR を作成すると、 `dt-bot` が今までの型定義作者に@メンションを送ります。
もしメンションが自動でつかなかった場合は、 PR のコメントにてあなたがメンションを送ってください。

#### 新しくパッケージを作成する

もし、あなたがライブラリの作者で、そのライブラリが TypeScript で書かれている場合は、 Definitely Typed で型定義を公開するのではなく、ライブラリのパッケージ自体に[自動生成された型定義ファイルをバンドル](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)してください。

NPM のパッケージに型定義を追加する場合は、パッケージと同名でディレクトリを作成してください。
NPM 上にないパッケージの型定義を追加したい場合は、その名前が NPM 上のパッケージを競合しないか確認してください。
（ `npm info foo` コマンドで、 `foo` パッケージが存在するかどうか確認できます。）

型定義パッケージは次のような構造にする必要があります:

| ファイル      | 用途 |
| ------------- | ---- |
| index.d.ts    | 型定義が含まれる。 |
| [\<パッケージ名>-tests.ts](#my-package-teststs)  | 型定義をテストするサンプルコードが含まれる。このコードは実行は**されません**が、型チェックはされます。 |
| tsconfig.json | パッケージ内で `tsc` を実行するのに必要。 |
| tslint.json   | Lint を有効にする。 |

これらのファイルを生成するには、 npm 5.2.0 以上では `npx dts-gen --dt --name <パッケージ名> --template module` 、それより古い環境では `npm install -g dts-gen` と `dts-gen --dt --name <パッケージ名> --template module` を実行してください。
dts-gen の全オプションは[こちら](https://github.com/Microsoft/dts-gen)で確認できます。

`tsconfig.json` を編集して、テストコードファイルや `"target": "es6"` の指定（ async 関数に必要）、 `"jsx"` コンパイラオプションを追加したり、 `"lib"` フィールドに設定を追加したりしてください。 `index.d.ts` の他にも `.d.ts` ファイルがある場合は、それらが `index.d.ts` かテストコードのいずれかにおいて参照されているかどうか確認してください。

もしテストもされず、 `index.d.ts` でも参照されないファイルがある場合は、そのファイル名を `OTHER_FILES.txt` という名前のファイルに追記してください。このファイルは、型定義パッケージに含めたいその他のファイルを、1行につき1ファイルで記述した一覧です。

Definitely Typed のメンバーは常に新しい PR をチェックしていますが、他の PR の数によって処理が遅れる場合があることをご了承ください。

[base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js) を、パッケージのサンプルとして参考にするのがよいでしょう。

#### よくあるミス

* はじめに、[ハンドブック](http://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)に記載されているアドバイスに従ってください。
* フォーマットについて: 4個のスペースを使ってください。このレポジトリでは Prettier がセットアップされているので、 `npm run prettier — --write path/to/package/**/*.ts` で実行できます。[アサーションを使用している場合](https://github.com/SamVerschueren/tsd#assertions)、 `// prettier-ignore` を使ってその行をフォーマット対象から除外してください。
  ```tsx
  // prettier-ignore
  const incompleteThemeColorModes: Theme = { colors: { modes: { papaya: { // $ExpectError
  ```
* `function sum(nums: number[]): number`: 関数が引数に対して書き込まないときは `ReadonlyArray` を使用してください。
* `interface Foo { new(): Foo; }`:
  これは new 可能な object の型定義です。書きたかったのは `declare class Foo { constructor(); }` ではありませんか？
* `const Class: { new(): IClass; }`:
  new 可能な定数ではなく、クラス定義 `class Class { constructor(); }` を使ってください。
* `getMeAT<T>(): T`:
  型パラメーターが関数の引数の型で全く使用されない場合、その関数は本当のジェネリック関数にはなっていません。型注釈みたいに誤魔化された何かを書いているだけです。
  実際の型を型注釈として使用してください（例: `getMeAT() as number`）。
  型パラメーターを使用してよい例: `function id<T>(value: T): T;`。
  使用してはいけない例: `function parseJson<T>(json: string): T;`。
  例外: `new Map<string, number>()` はOKです。
* `Function` 型や `Object` 型<small>（訳注: 大文字の`O`から始まることに注意）</small>を使用するのは基本的に良くありません。ほとんどの場合で、より詳しい型を指定することが可能です。たとえば、[関数](http://www.typescriptlang.org/docs/handbook/functions.html#function-types)は `(x: number) => number` 、 object は `{ x: number, y: number }` と書けます。どのような型になるか全くわからないときは、 `Object` 型ではなく [`any` 型](http://www.typescriptlang.org/docs/handbook/basic-types.html#any)が正しいです。何らかの object であることしかわからないときは、 `Object` 型や `{ [key: string]: any }` ではなく、 [`object` 型](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type)<small>（訳注: 小文字の`o`から始まることに注意）</small>を使ってください。
* `var foo: string | any`:
  `any` を共用体型で使用した場合、最終的な型は `any` 型にしかなりません。したがって、例示された型注釈では、 `string` の部分が有用に**見えますが**、実際には単に `any` と指定したとき以上の型チェックは行われません。
  シチュエーションにもよりますが、 `any` や `string`、 `string | object` が代替案として考えられます。

#### パッケージを削除する

When a package [bundles](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) its own types, types should be removed from Definitely Typed to avoid confusion.

You can remove it by running `npm run not-needed -- typingsPackageName asOfVersion [libraryName]`.
* `typingsPackageName`: This is the name of the directory to delete.
* `asOfVersion`: A stub will be published to `@types/foo` with this version. Should be higher than any currently published version, and should be a version of `foo` on npm.
* `libraryName`: Name of npm package that replaces the Definitely Typed types. Usually this is identical to "typingsPackageName", in which case you can omit it.

Any other packages in Definitely Typed that referenced the deleted package should be updated to reference the bundled types.
You can get this list by looking at the errors from `npm run test-all`.
To fix the errors, add a `package.json` with `"dependencies": { "foo": "x.y.z" }`.
For example:

```json
{
  "private": true,
  "dependencies": {
    "foo": "^2.6.0"
  }
}
```

When you add a `package.json` to dependents of `foo`, you will also need to open a PR to add `foo` [to allowedPackageJsonDependencies.txt in DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt).

If a package was never on Definitely Typed, it does not need to be added to `notNeededPackages.json`.

#### Linter

All new packages must be linted. To lint a package, add a `tslint.json` to that package containing

```js
{
  "extends": "dtslint/dt.json"
}
```

This should be the only content in a finished project's `tslint.json` file. If a `tslint.json` turns rules off, this is because that hasn't been fixed yet. For example:

```js
{
  "extends": "dtslint/dt.json",
  "rules": {
    // This package uses the Function type, and it will take effort to fix.
    "ban-types": false
  }
}
```

(To indicate that a lint rule truly does not apply, use `// tslint:disable rule-name` or better, `//tslint:disable-next-line rule-name`.)

#### \<パッケージ名>-tests.ts

There should be a `<パッケージ名>-tests.ts` file, which is considered your test file, along with any `*.ts` files it imports.
If you don't see any test files in the module's folder, create a `<パッケージ名>-tests.ts`.
These files are used to validate the API exported from the `*.d.ts` files which are shipped as `@types/<my package>`.

Changes to the `*.d.ts` files should include a corresponding `*.ts` file change which shows the API being used, so that someone doesn't accidentally break code you depend on.
If you don't see any test files in the module's folder, create a `<パッケージ名>-tests.ts`

For example, this change to a function in a `.d.ts` file adding a new param to a function:

`index.d.ts`:

```diff
- export function twoslash(body: string): string
+ export function twoslash(body: string, config?: { version: string }): string
```

`<パッケージ名>-tests.ts`:

```diff
import {twoslash} from "./"

// $ExpectType string
const result = twoslash("//")

+ // Handle options param
+ const resultWithOptions = twoslash("//", { version: "3.7" })
+ // When the param is incorrect
+ // $ExpectError
+ const resultWithOptions = twoslash("//", {  })
```

If you're wondering where to start with test code, the examples in the README of the module are a great place to start.

You can [validate your changes](#running-tests) with `npm test <package to test>` from the root of this repo, which takes changed files into account.

Use `$ExpectType` to assert that an expression is of a given type, and `$ExpectError` to assert that a compile error. Examples:

```js
// $ExpectType void
f(1);

// $ExpectError
f("one");
```

For more details, see [dtslint](https://github.com/Microsoft/dtslint#write-tests) readme.

#### テストの実行

Test your changes by running `npm test <package to test>` where `<package to test>` is the name of your package.

This script uses [dtslint](https://github.com/microsoft/dtslint) to run the TypeScript compiler against your dts files.

### 型定義のオーナー

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

## よくある質問

#### What exactly is the relationship between this repository and the `@types` packages on NPM?

The `master` branch is automatically published to the `@types` scope on NPM thanks to [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher).

#### I've submitted a pull request. How long until it is merged?

It depends, but most pull requests will be merged within a week.
Some PRs can be merged by the owners of a module, and they can be merged much faster.
Roughly:

> PRs which only change the types of a module, and have corresponding tests changes will be merged much faster

PRs that have been approved by an author listed in the definition's header are usually merged more quickly; PRs for new definitions will take more time as they require more review from maintainers. Each PR is reviewed by a TypeScript or Definitely Typed team member before being merged, so please be patient as human factors may cause delays. Check the [New Pull Request Status Board](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/5) to see progress as maintainers work through the open PRs.

#### My PR is merged; when will the `@types` NPM package be updated?

NPM packages should update within a few minutes. If it's been more than an hour, mention the PR number on [the Definitely Typed channel on the TypeScript Community Discord server](https://discord.gg/typescript) and the current maintainer will get the correct team member to investigate.

#### I'm writing a definition that depends on another definition. Should I use `<reference types="" />` or an import?

If the module you're referencing is an external module (uses `export`), use an import.
If the module you're referencing is an ambient module (uses `declare module`, or just declares globals), use `<reference types="" />`.

#### I notice some packages having a `package.json` here.

Usually you won't need this.
DefinitelyTyped's package publisher creates a `package.json` for packages with no dependencies outside Definitely Typed.
A `package.json` may be included to specify dependencies that are not other `@types` packages.
[Pikaday is a good example.](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json)
Even if you write your own `package.json`, you can only specify dependencies; other fields such as `"description"` are not allowed.
You also need to add the dependency to [the list of allowed packages](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt).
This list is updated by a human, which gives us the chance to make sure that `@types` packages don't depend on malicious packages.

In the rare case that an `@types` package is deleted and removed in favor of types shipped by the source package AND you need to depend on the old, removed `@types` package, you can add a dependency on an `@types` package.
Be sure to explain this when adding to the list of allowed packages so that the human maintainer knows what is happening.

#### Some packages have no `tslint.json`, and some `tsconfig.json` are missing `"noImplicitAny": true`, `"noImplicitThis": true`, or `"strictNullChecks": true`.

Then they are wrong, and we've not noticed yet. You can help by submitting a pull request to fix them.

#### Can I request a definition?

Here are the [currently requested definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/labels/Definition%3ARequest).

#### What about type definitions for the DOM?

If types are part of a web standard, they should be contributed to [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator) so that they can become part of the default `lib.dom.d.ts`.

#### Should I add an empty namespace to a package that doesn't export a module to use ES6 style imports?

Some packages, like [chai-http](https://github.com/chaijs/chai-http), export a function.

Importing this module with an ES6 style import in the form `import * as foo from "foo";` leads to the error:

> error TS2497: Module 'foo' resolves to a non-module entity and cannot be imported using this construct

This error can be suppressed by merging the function declaration with an empty namespace of the same name, but this practice is discouraged.
This is a commonly cited [Stack Overflow answer](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this) regarding this matter.

It is more appropriate to import the module using the `import foo = require("foo");` syntax.
Nevertheless, if you want to use a default import like `import foo from "foo";` you have two options:
- you can use the [`--allowSyntheticDefaultImports` compiler option](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs) if your module runtime supports an interop scheme for non-ECMAScript modules, i.e. if default imports work in your environment (e.g. Webpack, SystemJS, esm).
- you can use the [`--esModuleInterop` compiler option](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop) if you want TypeScript to take care of non-ECMAScript interop (since TypeScript 2.7).

#### A package uses `export =`, but I prefer to use default imports. Can I change `export =` to `export default`?

Like in the previous question, refer to using either the [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs)
or [`--esModuleInterop`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop)
compiler options.

Do not change the type definition if it is accurate.
For an NPM package, `export =` is accurate if `node -p 'require("foo")'` works to import a module, and `export default` is accurate if `node -p 'require("foo").default'` works to import a module.

#### I want to use features from TypeScript 3.3 or above.

Then you will have to add a comment to the last line of your definition header (after `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`): `// Minimum TypeScript Version: 3.3`.

However, if your project needs to maintain types that are compatible with, say, 3.7 and above *at the same time as* types that are compatible with 3.6 or below, you will need to use the `typesVersions` feature.
You can find a detailed explanation of this feature in the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#version-selection-with-typesversions).

Here's a short example to get you started:

1. You'll have to add a `package.json` file to your package definition, with the following contents:

   ```json
   {
     "private": true,
     "types": "index",
     "typesVersions": {
       "<=3.6": { "*": ["ts3.6/*"] }
     }
   }
   ```

2. Create the sub-directory mentioned in the `typesVersions` field inside your types directory (`ts3.6/` in this example).
   `ts3.6/` will support TypeScript versions 3.6 and below, so copy the existing types and tests there.

   You'll need to delete the definition header from `ts3.6/index.d.ts` since only the root `index.d.ts` is supposed to have it.

3. Set the `baseUrl` and `typeRoots` options in `ts3.6/tsconfig.json` to the correct paths, which should look something like this:
   ```json
   {
     "compilerOptions": {
       "baseUrl": "../../",
       "typeRoots": ["../../"]
     }
   }
   ```

4. Back in the root of the package, add the TypeScript 3.7 features you want to use.
   When people install the package, TypeScript 3.6 and below will start from `ts3.6/index.d.ts`, whereas TypeScript 3.7 and above will start from `index.d.ts`.

   You can look at [styled-components](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/styled-components) for an example.

#### I want to add a DOM API not present in TypeScript by default.

This may belong in [TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme). See the guidelines there.
If the standard is still a draft, it belongs here.
Use a name beginning with `dom-` and include a link to the standard as the "Project" link in the header.
When it graduates draft mode, we may remove it from Definitely Typed and deprecate the associated `@types` package.

#### How do Definitely Typed package versions relate to versions of the corresponding library?

*NOTE: The discussion in this section assumes familiarity with [Semantic versioning](https://semver.org/)*

Each Definitely Typed package is versioned when published to NPM.
The [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) (the tool that publishes `@types` packages to npm) will set the declaration package's version by using the `major.minor` version number listed in the first line of its `index.d.ts` file.
For example, here are the first few lines of [Node's type declarations](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/node/index.d.ts) for version `10.12.x` at the time of writing:

```js
// Type definitions for Node.js 10.12
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 Definitely Typed <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
```

Because `10.12` is at the end of the first line, the npm version of the `@types/node` package will also be `10.12.x`.
Note that the first-line comment in the `index.d.ts` file should only contain the `major.minor` version (e.g. `10.12`) and should not contain a patch version (e.g. `10.12.4`).
This is because only the major and minor release numbers are aligned between library packages and type declaration packages.
The patch release number of the type declaration package (e.g. `.0` in `10.12.0`) is initialized to zero by Definitely Typed and is incremented each time a new `@types/node` package is published to NPM for the same major/minor version of the corresponding library.

Sometimes type declaration package versions and library package versions can get out of sync.
Below are a few common reasons why, in order of how much they inconvenience users of a library.
Only the last case is typically problematic.

* As noted above, the patch version of the type declaration package is unrelated to the library patch version.
  This allows Definitely Typed to safely update type declarations for the same major/minor version of a library.
* If updating a package for new functionality, don't forget to update the version number to line up with that version of the library.
  If users make sure versions correspond between JavaScript packages and their respective `@types` packages, then `npm update` should typically just work.
* It's common for type declaration package updates to lag behind library updates because it's often library users, not maintainers, who update Definitely Typed when new library features are released.
  So there may be a lag of days, weeks, or even months before a helpful community member sends a PR to update the type declaration package for a new library release.
  If you're impacted by this, you can be the change you want to see in the world and you can be that helpful community member!

:exclamation: If you're updating type declarations for a library, always set the `major.minor` version in the first line of `index.d.ts` to match the library version that you're documenting! :exclamation:

#### If a library is updated to a new major version with breaking changes, how should I update its type declaration package?

[Semantic versioning](https://semver.org/) requires that versions with breaking changes must increment the major version number.
For example, a library that removes a publicly exported function after its `3.5.8` release must bump its version to `4.0.0` in its next release.
Furthermore, when the library's `4.0.0` release is out, its Definitely Typed type declaration package should also be updated to `4.0.0`, including any breaking changes to the library's API.

Many libraries have a large installed base of developers (including maintainers of other packages using that library as a dependency) who won't move right away to a new version that has breaking changes, because it might be months until a maintainer has time to rewrite code to adapt to the new version.
In the meantime, users of old library versions still may want to update type declarations for older versions.

If you intend to continue updating the older version of a library's type declarations, you may create a new subfolder (e.g. `/v2/`) named for the current (soon to be "old") version, and copy existing files from the current version to it.

Because the root folder should always contain the type declarations for the latest ("new") version, you'll need to make a few changes to the files in your old-version subdirectory to ensure that relative path references point to the subdirectory, not the root.

1. Update the relative paths in `tsconfig.json` as well as `tslint.json`.
2. Add path mapping rules to ensure that tests are running against the intended version.

For example, the [`history`](https://github.com/ReactTraining/history/) library introduced breaking changes between version `2.x` and `3.x`.
Because many users still consumed the older `2.x` version, a maintainer who wanted to update the type declarations for this library to `3.x` added a `v2` folder inside the history repository that contains type declarations for the older version.
At the time of writing, the [history v2 `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/history/v2/tsconfig.json) looks roughly like:

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

If there are other packages in Definitely Typed that are incompatible with the new version, you will need to add path mappings to the old version.
You will also need to do this recursively for packages depending on the old version.

For example, `react-router` depends on `history@2`, so [react-router `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router/v2/tsconfig.json) has a path mapping to `"history": [ "history/v2" ]`.
Transitively, `react-router-bootstrap` (which depends on `react-router`) also needed to add the same path mapping (`"history": [ "history/v2" ]`) in its `tsconfig.json` until its `react-router` dependency was updated to the latest version.

Also, `/// <reference types=".." />` will not work with path mapping, so dependencies must use `import`.

#### How do I write definitions for packages that can be used globally and as a module?

The TypeScript handbook contains excellent [general information about writing definitions](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), and also [this example definition file](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html) which shows how to create a definition using ES6-style module syntax, while also specifying objects made available to the global scope.  This technique is demonstrated practically in the [definition for big.js](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts), which is a library that can be loaded globally via script tag on a web page, or imported via require or ES6-style imports.

To test how your definition can be used both when referenced globally or as an imported module, create a `test` folder, and place two test files in there.  Name one `YourLibraryName-global.test.ts` and the other `YourLibraryName-module.test.ts`.  The *global* test file should exercise the definition according to how it would be used in a script loaded on a web page where the library is available on the global scope - in this scenario you should not specify an import statement.  The *module* test file should exercise the definition according to how it would be used when imported (including the `import` statement(s)).  If you specify a `files` property in your `tsconfig.json` file, be sure to include both test files.  A [practical example of this](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) is also available on the big.js definition.

Please note that it is not required to fully exercise the definition in each test file - it is sufficient to test only the globally-accessible elements on the global test file and fully exercise the definition in the module test file, or vice versa.

#### What about scoped packages?

Types for a scoped package `@foo/bar` should go in `types/foo__bar`. Note the double underscore.

When `dts-gen` is used to scaffold a scoped package, the `paths` property has to be manually adapted in the generated `tsconfig.json` to correctly reference the scoped package:

```json
{
  "paths": {
    "@foo/*": ["foo__*"]
  }
}
```

#### The file history in GitHub looks incomplete.

GitHub doesn't [support](http://stackoverflow.com/questions/5646174/how-to-make-github-follow-directory-history-after-renames) file history for renamed files. Use [`git log --follow`](https://www.git-scm.com/docs/git-log) instead.

## ライセンス

This project is licensed under the MIT license.

Copyrights on the definition files are respective of each contributor listed at the beginning of each definition file.
