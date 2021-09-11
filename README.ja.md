# Definitely Typed

> 高品質な TypeScript の型定義用レポジトリ

*この README は[英語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md)・[スペイン語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md)・[韓国語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ko.md)・[ロシア語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md)・[中国語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.cn.md)・[ポルトガル語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.pt.md)でも閲覧できます！*

*[管理者用マニュアル](./docs/admin.md) はこちら*

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

[TypeScript ハンドブック](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)<small>（英語）</small>を参照してください。

### npm

こちらが推奨される方式です。 例:

```sh
npm install --save-dev @types/node
```

上記のコマンドの後、型はコンパイラにより自動的に認識されるようになります。
モジュールを使用しない場合は、下記のように `types` リファレンスを追加する必要があります。

```ts
/// <reference types="node" />
```

詳しくは[ハンドブック](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)を参照してください。

「foo」という名前の npm モジュール用の型定義は「@types/foo」になります。
パッケージが見つからない場合は [TypeSearch](https://microsoft.github.io/TypeSearch/) で検索してください。

検索しても見つからない場合は、パッケージ内に型定義が[含まれている](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)かどうか確認してください。
大抵は `package.json` の `"types"` フィールドや `"typings"`  フィールドに指定されています。
もしくは、パッケージ内の各 ".d.ts" ファイルを確認し、 `/// <reference path="" />` を使って手動でインクルードしてください。

#### 古いバージョンの TypeScript （3.6 以前）

Definitely Typed では、リリースから2年以内のバージョンの TypeScript 上でのみパッケージのテストを実施しています。
現時点ではバージョン 3.7 以上でテストされています。
TypeScript 2.0 ～ 3.6 を使用している場合、引き続き `@types` パッケージをインストールすることは可能です &mdash; これは TypeScript の最新機能を使用しているパッケージがそんなに多くないためです。
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
| 4.1        | 2020年11月 | 2022年11月   |
| 4.2        | 2021年2月  | 2023年2月    |
| 4.3        | 2021年5月  | 2023年5月    |
| 4.4        | 2021年8月  | 2023年8月    |

`@types` パッケージには、サポートする TypeScript のバージョンを明示的に指定するタグがあるため、多くの場合はサポート期間外のバージョン用のパッケージでも入手できます。
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
* ~~[NuGet](https://nuget.org/packages?q=DefinitelyTyped)~~ （NuGet 上の DefinitelyTyped の公開は終了したので、他の方式を使用すること）

手動で[リファレンス](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)を追加する必要があります。

## コントリビュート（貢献）する方法

Definitely Typed は、あなたのようなユーザーによるコントリビュート（貢献）のおかげで成り立っています！

### 試してみる

改良したものを世界中に共有する前に、まず自分自身で使ってみてください。

> <small>（訳注: 原文における本セクションでの "test"・"testing" は、[テストの実行](#テストの実行)で言及されるような dtslint による自動テストではなく、単に提出しようとしている変更を実際のアプリで試すことを指します。）</small>

#### 既存のパッケージへの変更点を試す

（訳注: 変更した型定義を試すための）あなたのアプリでローカル環境でテストする場合、[モジュール拡張](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)<small>（module augmentation）</small>を使うと、編集したい DefinitelyTyped モジュールからの型定義を拡張できます。
また、 `node_modules/@types/foo/index.d.ts` にある型定義を直接編集しても、変更点を検証できます。そのあとに、下記手順に沿って変更をこのレポジトリに反映させてください。

#### 新しいパッケージを試す

次のコードを、（訳注: 新しい型定義を試すための）あなたのアプリの `tsconfig.json` に追加してください:

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

次に、 `types/foo/index.d.ts` を作成し、「foo」モジュールの型定義を含めてください。
これで、あなたのコード上で `"foo"` モジュールからインポートできるようになりました。インポートは新しい型定義を参照します。
そのあと、コードをビルドし、**そして**実行し、作成した型定義が実行時の動作と実際に一致していることを確認してください。

実際のコードで試したら、 [PR](#pr-を作成する) を作成するので、[既存のパッケージを編集する](#既存のパッケージを編集する)か[新しくパッケージを作成する](#新しくパッケージを作成する)か、いずれかの指示に従ってください。

### PR を作成する

変更・新規作成したパッケージを試し終えたら、 Definitely Typed で共有しましょう。

まず、このレポジトリを[フォーク](https://guides.github.com/activities/forking/)し、 [node](https://nodejs.org/) をインストールし、 `npm install` を実行します。

DefinitelyTyped への大量の PR を全てセルフサービス方式で処理するために bot を導入しています。詳しい方法と理由については[こちら](https://devblogs.microsoft.com/typescript/changes-to-how-we-manage-definitelytyped/)<small>（英語）</small>で確認できます。下図は DefinitelyTyped への PR のライフサイクルを簡単に示したものです。

<img src="https://github.com/DefinitelyTyped/dt-mergebot/blob/master/docs/dt-mergebot-lifecycle.svg">

#### 既存のパッケージを編集する

* `cd types/<編集したいパッケージ名>` を実行。
* 変更を加える。[テストを編集する](#パッケージ名-teststs)のも忘れずに行う。
  破壊的な変更を加えるときは、必ず[メジャーバージョンを更新する](#ライブラリが破壊的な変更をしてメジャーバージョンが更新されました型定義パッケージはどのように更新すればよいですか)。
* [`npm test <テストしたいパッケージ名>` を実行](#テストの実行)。

既存のパッケージを編集する PR を作成すると、 `dt-bot` が今までの型定義作者に@メンションを送ります。
もしメンションが自動でつかなかった場合は、 PR のコメントにてあなたがメンションを送ってください。

#### 新しくパッケージを作成する

もし、あなたがライブラリの作者で、そのライブラリが TypeScript で書かれている場合は、 Definitely Typed で型定義を公開するのではなく、ライブラリのパッケージ自体に[自動生成された型定義ファイルをバンドル](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)してください。

npm のパッケージに型定義を追加する場合は、パッケージと同名でディレクトリを作成してください。
npm 上にないパッケージの型定義を追加したい場合は、その名前が npm 上のパッケージを競合しないか確認してください。
（`npm info <my-package>` コマンドで、 `<my-package>` パッケージが存在するかどうか確認できます。）

型定義パッケージは次のような構造にする必要があります:

| ファイル      | 用途 |
| ------------- | ---- |
| `index.d.ts` | 型定義が含まれる。 |
| [`<パッケージ名>-tests.ts`](#パッケージ名-teststs)  | 型定義をテストするサンプルコードが含まれる。このコードは実行は**されません**が、型チェックはされます。 |
| [`tsconfig.json`](#tsconfigjson) | パッケージ内で `tsc` を実行するのに必要。 |
| [`tslint.json`](#linter-tslintjson) | Lint を有効にする。 |

これらのファイルを生成するには、 npm 5.2.0 以上では `npx dts-gen --dt --name <パッケージ名> --template module` 、それより古い環境では `npm install -g dts-gen` と `dts-gen --dt --name <パッケージ名> --template module` を実行してください。
dts-gen の全オプションは[こちら](https://github.com/Microsoft/dts-gen)で確認できます。

`index.d.ts` の他にも `.d.ts` ファイルがある場合は、それらが `index.d.ts` かテストコードのいずれかにおいて参照されているかどうか確認してください。

Definitely Typed のメンバーは常に新しい PR をチェックしていますが、他の PR の数によっては対応が遅れる場合があることをご了承ください。

[base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js) を、パッケージのサンプルとして参考にするのがよいでしょう。

#### パッケージを削除する

パッケージに型定義が[バンドル](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)されている場合、混乱を避けるために Definitely Typed 側の型定義は削除します。

`npm run not-needed -- <typingsPackageName> <asOfVersion> [<libraryName>]` を実行するとパッケージを削除できます。.
* `<typingsPackageName>`: 削除したいディレクトリ名。
* `<asOfVersion>`: `@types/<typingsPackageName>` に対してスタブ（stub）を公開したいバージョン。現在公開中のバージョンより新しく、かつ npm 上の `<libraryName>` のバージョンとあわせる必要があります。
* `<libraryName>`: Definitely Typed 側の型定義の代わりとなる npm のパッケージ名。基本的に `<typingsPackageName>` と一致し、その場合は省略できます。

削除されたパッケージを参照していた、他の Definitely Typed 上のパッケージは全て、ライブラリにバンドルされている型定義を参照するように更新する必要があります。
`npm run test-all` を実行した際のエラーを参照することで、更新が必要なライブラリのリストが確認できます。
エラーを修正するには、 [`package.json`](#packagejson) を追加し、 `"dependencies": { "<libraryName>": "x.y.z" }` と記述します。
たとえば下記のようになります:

```json
{
  "private": true,
  "dependencies": {
    "<libraryName>": "^2.6.0"
  }
}
```

`<libraryName>` に依存するモジュールに `package.json` を追加する場合は、 [DefinitelyTyped-tools の allowedPackageJsonDependencies.txt](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt) に `<libraryName>` を追加する PR も併せて作成する必要があります。

パッケージが Definitely Typed に存在しなかった場合は、 `notNeededPackages.json` に追加する必要はありません。

#### テストの実行

`npm test <テストしたいパッケージ名>`（`<テストしたいパッケージ名>`をパッケージ名に置き換える）を実行して、変更をテストしてください。

このスクリプトは [dtslint](https://github.com/microsoft/dtslint) を使用して、 dts ファイルに対し TypeScript コンパイラを実行しています。

#### Naming

npm のパッケージに型定義を追加する場合は、パッケージと同名でディレクトリを作成してください。
npm 上にないパッケージの型定義を追加したい場合は、その名前が npm 上のパッケージを競合しないか確認してください。
（`npm info <my-package>` コマンドで、 `<my-package>` パッケージが存在するかどうか確認できます。）

If a non-npm package conflicts with an existing npm package try adding -browser to the end of the name to get `<my-package>-browser`.

#### `<パッケージ名>-tests.ts`

パッケージには `<パッケージ名>-tests.ts` が必要です。このファイルは、ファイル内でインポートしている他の `*.ts` とあわせて、テスト用のファイルになります。
モジュールのフォルダにテスト用ファイルが見当たらない場合は、 `<パッケージ名>-tests.ts` を作成してください。
これらのファイルは、 `@types/<パッケージ名>` で取得される `*.d.ts` ファイルからエクスポートされた API を検証するのに使われます。

`*.d.ts` ファイルを変更した場合は、対応する `*.ts` ファイルを変更して API がどのように使われるかを示し、他者が意図せずあなたのコードを破壊しないようにします。

下記は、 `.d.ts` 内の関数に新しい引数を追加する変更の例です:

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

+ // オプションの引数に対応
+ const resultWithOptions = twoslash("//", { version: "3.7" })
+ // 引数が正しくないとき
+ // $ExpectError
+ const resultWithOptions = twoslash("//", {  })
```

もしどこからテストコードを書き始めればよいかわからないときは、そのモジュールの README に書かれてるサンプルをテストするコードから始めるのがよいでしょう。

レポジトリのルートで `npm test <テストしたいパッケージ名>` を実行すると、このコマンドはファイルが変更された状態でテストを実行するので、[変更を検証](#テストの実行)することができます。

式が与えられた型であるか確認するには `$ExpectType` を、コンパイルエラーになるかを確認するには `$ExpectError` をそれぞれ使います。 例:

```js
// $ExpectType void
f(1);

// $ExpectError
f("one");
```

詳しくは、 [dtslint](https://github.com/Microsoft/dtslint#write-tests) の README を参照してください。

#### Linter: `tslint.json`

何らかの理由で何らかのLintルールを無効化する必要がある場合は、[特定の行を無効化する](https://palantir.github.io/tslint/usage/rule-flags/#comment-flags-in-source-code:~:text=%2F%2F%20tslint%3Adisable%2Dnext%2Dline%3Arule1%20rule2%20rule3...%20%2D%20Disables%20the%20listed%20rules%20for%20the%20next%20line) `// tslint:disable-next-line:[ruleName]` を使い特定の行を無効化することで、無効にしたことをレビューできるようにします。
(追加の内容を持つ古いLint設定もありますが、新しい作業ではこのような設定を変更する必要はないはずです。)

#### tsconfig.json

`tsconfig.json` を編集して、テストコードファイルや `"target": "es6"` の指定（ async 関数に必要）、 `"jsx"` コンパイラオプションを追加したり、 `"lib"` フィールドに設定を追加したりしてください。

#### package.json

基本的にはこのファイルは不要です。
DefinitelyTyped 外のモジュールに依存しないパッケージについては、 DefinitelyTyped のパッケージ公開 bot が `package.json` を作成します。
`@types` 以外のパッケージとの依存関係を指定したい場合は、 `package.json` をパッケージに含めてもよいです。
[Pikaday が良い例でしょう。](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json)
自分で `package.json` を作成する場合も、依存関係を指定する以外のフィールド（例: `"description"`）は許可されません。
また、指定した依存モジュールを[依存許可済みパッケージ一覧](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt)に追加する必要があります。
`@types` パッケージが悪意のあるパッケージに依存しないようにするため、この一覧は手動で更新されます。

ごく稀ですが、 `@types` パッケージが削除<small>（deleted）</small>されたり、元ライブラリに型定義が含まれたために削除<small>（removed）</small>されたりし、かつその削除された古い `@types` パッケージに依存する必要がある場合は、 `package.json` に依存モジュールとして `@types` パッケージを含めることができます。
依存許可済みパッケージ一覧に追加する際に必ずその旨を説明し、メンテナーが把握できるようにしてください。

#### よくあるミス

* はじめに、[ハンドブック](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)に記載されているアドバイスに従ってください。
* フォーマットについて: 4個のスペースを使ってください。このレポジトリでは Prettier がセットアップされているので、 `npm run prettier -- --write path/to/package/**/*.ts` で実行できます。[アサーションを使用している場合](https://github.com/SamVerschueren/tsd#assertions)、 `// prettier-ignore` を使ってその行をフォーマット対象から除外してください。
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
* `Function` 型や `Object` 型<small>（訳注: 大文字の`O`から始まることに注意）</small>を使用するのは基本的に良くありません。ほとんどの場合で、より詳しい型を指定することが可能です。たとえば、[関数](https://www.typescriptlang.org/docs/handbook/functions.html#function-types)は `(x: number) => number` 、 object は `{ x: number, y: number }` と書けます。どのような型になるか全くわからないときは、 `Object` 型ではなく [`any` 型](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)が正しいです。何らかの object であることしかわからないときは、 `Object` 型や `{ [key: string]: any }` ではなく、 [`object` 型](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type)<small>（訳注: 小文字の`o`から始まることに注意）</small>を使ってください。
* `var foo: string | any`:
  `any` を共用体型で使用した場合、最終的な型は `any` 型にしかなりません。したがって、例示された型注釈では、 `string` の部分が有用に**見えますが**、実際には単に `any` と指定したとき以上の型チェックは行われません。
  シチュエーションにもよりますが、 `any` や `string`、 `string | object` が代替案として考えられます。

#### `OTHER_FILES.txt`

もしテストもされず、 `index.d.ts` でも参照されないファイルがある場合は、そのファイル名を `OTHER_FILES.txt` という名前のファイルに追記してください。このファイルは、型定義パッケージに含めたいその他のファイルを、1行につき1ファイルで記述した一覧です。

### 型定義のオーナー

DefinitelyTyped では、ある特定のモジュールの型定義の品質を管理している人を「型定義のオーナー」としています。

* あなたの名前をリストに載せると、誰かがパッケージに対して PR や issue を作成した際に、 GitHub のユーザー名によってあなたに通知されます。
* オーナーが PR をレビューすると、このレポジトリ全体を管理する [bot](https://github.com/DefinitelyTyped/dt-mergebot) は、そのレビューを他より重要なものとして扱います。
* DefinitelyTyped のメンテナーは、安定したエコシステムを確保するべく、型定義のオーナーに信用を置いています。軽率にオーナーになるのはお控えください。

型定義のオーナーになるには:

* `// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>` というような形式で、行の終わりにあなたの名前を追加してください。
* 行が長くなるようであれば、複数行にしてもかまいません。
  ```typescript
  // Definitions by: Alice <https://github.com/alice>
  //                 Bob <https://github.com/bob>
  //                 Steve <https://github.com/steve>
  //                 John <https://github.com/john>
  ```

型定義のオーナーのリストが、週に1回 [.github/CODEOWNERS](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/.github/CODEOWNERS) に同期されます。このファイルが私たちの信頼の源になります。

## よくある質問

#### 厳密には、このレポジトリと npm 上の `@types` パッケージはどう関係していますか？

[DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) が、`master` ブランチの内容を自動的に、 npm の `@types` スコープに公開してくれています。

#### PR を送りましたが、どれぐらいでマージされますか？

一概には言えませんが、ほとんどの PR は1週間以内にマージされます。
モジュールの作者によりマージされることもあり、その場合はかなり早く処理されます。
大まかには次のようにいえるでしょう。

> モジュールの型定義のみの変更で、対応するテストもきちんと変更されている PR は早くマージされる

通例、型定義ファイルのヘッダーに載っている著者が承認した PR はより早くマージされます。新しい型定義の PR は、 DefinitelyTyped のメンテナーからのレビューも必要になるので時間がかかります。各 PR は TypeScript や DefinitelyTyped のチームメンバーがマージ前にレビューします。人為的要因で遅れが発生する場合があるので、しばらくお待ちください。メンテナーがオープンな PR を処理している間は、 [New Pull Request Status Board](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/5) で進捗を確認できます。

#### PR はマージされましたが、 `@types` npm パッケージはいつ更新されますか？

npm パッケージは数分で更新されます。もし1時間以上かかっている場合は、 [TypeScript コミュニティの Discord サーバーの Definitely Typed のチャンネル](https://discord.gg/typescript) に PR 番号を連絡してください。当番のメンテナーが適切なチームメンバーに調査を依頼します。

#### 作成中の型定義が別の型定義に依存しています。 `<reference types="" />` を使うかインポートするか、どちらがよいですか？

参照しているモジュールが外部モジュールの場合（`export` を使っている場合）は、インポートしてください。
参照しているモジュールがアンビエント モジュールの場合（`declare module` を使っているか、グローバルに宣言している場合）は、 `<reference types="" />` を使用してください。

#### `tslint.json` が無かったり、 `tsconfig.json` から `"noImplicitAny": true` や `"noImplicitThis": true` 、 `"strictNullChecks": true` が抜けたりしているパッケージがあります。

それらは、私たちがまだ把握しきれていない不備です。修正する PR の作成をぜひお願いします。

#### 型定義をリクエストしたいです。

現在リクエストされている型定義は[こちら](https://github.com/DefinitelyTyped/DefinitelyTyped/labels/Definition%3ARequest)です。

#### DOM に対する型定義はどうすればよいですか？

その型がウェブ標準の一部であれば、 [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator) に対してコントリビュートしてください。コントリビュートした内容が、デフォルトの `lib.dom.d.ts` に反映されます。

#### モジュールをエクスポートしてないパッケージでは、 ES6 方式のインポートを使えるようにするために、空の名前空間を追加すべきですか？

[chai-http](https://github.com/chaijs/chai-http) などのいくつかのパッケージでは関数をエクスポートしています。

このモジュールを ES6 方式の `import * as foo from "foo";` でインポートすると次のようなエラーになります。

> error TS2497: Module 'foo' resolves to a non-module entity and cannot be imported using this construct

このエラーは、同じ名前の空の名前空間を関数の宣言と一緒におくことで抑制できますが、この慣例は避けるべきです。
この件についてはよく [Stack Overflow の回答](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this)が引用されています。

`import foo = require("foo");` 構文を使ってモジュールをインポートするほうが適切でしょう。
それでもなお `import foo from "foo";` のようなデフォルトインポートを使いたい場合は、2つ選択肢があります:
- モジュールの実行環境で非 ECMAScript モジュール向けの相互運用体系が整っている場合、つまりデフォルトインポートがあなたの環境（ Webpack や SystemJS 、 esm など）で動作する場合は、 [`--allowSyntheticDefaultImports` コンパイラー オプション](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs)が使用できます。
- TypeScript 側に非 ECMAScript の対応をさせたい場合は、 [`--esModuleInterop` コンパイラー オプション](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop)が使用できます（ TypeScript 2.7 以降）。

#### パッケージでは `export =` が使われていますが、デフォルトインポートを使えるようにしたいので、 `export =` を `export default` に変えても良いですか？

1つ前の回答の繰り返しになりますが、 [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs)
または [`--esModuleInterop`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop)
コンパイラー オプションを確認してください。

型定義が正確に記述されているときは変更しないでください。
npm パッケージでは、モジュールを `node -p 'require("foo")'` でインポートできるときは `export =` が、 `node -p 'require("foo").default'` でインポートできるときは `export default` がそれぞれ正しい表記です。

#### TypeScript 3.3 以上にある機能を使いたいです。

その場合は、型定義ファイルのヘッダーの最後の行（`// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped` の次行）に、 `// Minimum TypeScript Version: 3.3` といったコメントを追加してください。

なお、たとえば「3.7 以上」用と「3.6 以下」用の型定義を**それぞれ同時に**管理する必要がある場合は、 `typesVersions` 機能を使用することになります。
この機能の詳しい説明は [TypeScript 公式ドキュメント](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#version-selection-with-typesversions)を確認してください。

以下に、簡易的な例を示します:

1. `package.json` をパッケージに追加し、次の内容を記述する:

   ```json
   {
     "private": true,
     "types": "index",
     "typesVersions": {
       "<=3.6": { "*": ["ts3.6/*"] }
     }
   }
   ```

2. 型定義のディレクトリ内に、 `typesVersions` に指定したサブディレクトリ（上の例では `ts3.6/`）を作成する。
   `ts3.6/` が TypeScript 3.6 以下用のディレクトリになるので、既存の型定義とテストをそこにコピーする。

   型定義ファイルのヘッダーは `index.d.ts` のみにあればよいので、 `ts3.6/index.d.ts` からは削除する。

3. `ts3.6/tsconfig.json` の `baseUrl` ・ `typeRoots` オプションに正しいパスを指定する。次のような値になるはずです:
   ```json
   {
     "compilerOptions": {
       "baseUrl": "../../",
       "typeRoots": ["../../"]
     }
   }
   ```

4. パッケージのルートに戻り、使用したい TypeScript 3.7 の機能を追加する。
   これで、パッケージが使用されるときは、 TypeScript 3.6 以下の場合は `ts3.6/index.d.ts` を、 TypeScript 3.7 以上の場合は `index.d.ts` をそれぞれ読みにいくようになります。

   [styled-components](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/styled-components) モジュールを参考にしてください。

#### デフォルトでは TypeScript に存在しない DOM API を追加したいです。

それは [TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme) に含めるものかもしれないので、そちらの方針を確認してください。
該当するウェブ標準の仕様がまだ草稿段階なら、このレポジトリに含められます。
型定義パッケージ名は `dom-` から始まるようにし、型定義ヘッダーの "Project" リンクに仕様書へのリンクを張ってください。
仕様書が草稿から脱すると、パッケージは Definitely Typed から削除され、対応する `@types` パッケージは非推奨となります。

#### Definitely Typed パッケージのバージョンと、対応するライブラリ本体のバージョンはどのように関係していますか？

*注意: このセクションを読むには[セマンティック バージョニング](https://semver.org/)の知識が必要です。*

Definitely Typed の各パッケージは npm に公開される際にバージョン番号が付されます。
[DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) （`@types` パッケージを npm に公開するツール）は、パッケージの `index.d.ts` の1行目に載っている `メジャー.マイナー` バージョン番号を使って、型定義パッケージのバージョンを付けます。
たとえば、下記は執筆時点<small>（訳注: 英語版執筆当時）</small>の [Node の型定義](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/node/index.d.ts)（バージョン `10.12.x` 用）の最初の数行です:

```js
// Type definitions for Node.js 10.12
// Project: https://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 Definitely Typed <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
```

1行目の終わりが `10.12` なので、 `@types/node` パッケージの npm でのバージョン番号も `10.12.x` になります。
`index.d.ts` の1行目には `メジャー.マイナー` バージョンのみ（例: `10.12`）を含めます。パッチバージョンは含めないでください（`10.12.4` のようにはしない）。
これは、メジャーバージョンとマイナーバージョンの番号のみを、ライブラリ本体と型定義パッケージで揃えるためです。
型定義パッケージのパッチバージョン番号（`10.12.0` なら `.0` の部分）は、 Definitely Typed 側で0に初期化され、対応するライブラリの同じメジャー・マイナーバージョン用の `@types/node` パッケージが npm に公開されるたびに増えていきます。

ときどき、型定義パッケージとライブラリ本体のバージョンが揃わなくなることがあります。
考えられる原因を、ライブラリ使用者にとって不便に思う順に下記に列挙します<small>（訳注: 一番困るものが一番下）</small>。
一番下のみが一般的に問題とされます。

* 先述した通り、型定義パッケージのパッチバージョンはライブラリ本体とは無関係です。
  これにより Definitely Typed 側で、同じメジャー・マイナーバージョン用の型定義を安全に更新することができます。
* パッケージを新機能で更新したときは、ライブラリ本体のバージョンと合うように、型定義パッケージのバージョン番号を更新してください。
  JavaScript のパッケージとそれぞれの `@types` パッケージのバージョンが一致することがユーザー側で把握されていれば、 `npm update` は基本的に正常に動作します。
* 型定義パッケージの更新がライブラリ本体の更新から遅れることはよくあります。これは、ライブラリに新しい機能がリリースされた際に Definitely Typed を更新しているのが、メンテナーではなくライブラリ使用者である場合も多いためです。
  そのため、面倒見の良いコミュニティメンバーが、新しいリリース用に型定義を更新する PR を送ってくれるまで、数日、数週間、場合によって数か月かかる場合があります。
  もしこれによってお困りでしたら、「世の中に見たいと思う変化にあなたがなって」あなたがその面倒見の良いコミュニティメンバーになるのはいかがでしょうか？

:exclamation: ライブラリの型定義を更新する際は、 `index.d.ts` の1行目の `メジャー.マイナー` バージョンを対象のライブラリのバージョンに必ず合わせてください！ :exclamation:

#### ライブラリが破壊的な変更をして、メジャーバージョンが更新されました。型定義パッケージはどのように更新すればよいですか？

[セマンティック バージョニング](https://semver.org/)では、破壊的な変更を行なった際に、必ずメジャーバージョン番号を増やすように定められています。
たとえば、あるライブラリがバージョン `3.5.8` をリリースした後、 public にエクスポートしていた関数を削除した場合、次のリリースではバージョン `4.0.0` に上げなければなりません。
そして、ライブラリがバージョン `4.0.0` をリリースしたら、 Definitely Typed 側の型定義パッケージも同様に、ライブラリ API への破壊的な変更を含んだ `4.0.0` に更新する必要があります。

ほとんどのライブラリには、破壊的な変更を含んだ次のバージョンにすぐ乗り換えない使用者が多くいます。これにはそのライブラリに依存している他のパッケージのメンテナーも含まれ、彼らが新しいバージョンにあわせて自分たちのコードを書き直すには数か月かかることもあります。
その間は、古いバージョンを使用しているライブラリ使用者のために、そのバージョンの型定義の更新を行う必要があるかもしれません。

もし古いバージョンの型定義も更新し続けたい場合は、現在のバージョン（直に「古い」バージョンとなる方）用に新しいサブフォルダー（例: `/v2/`）を作成し、現在のバージョンのファイルをコピーしてください。

ルートフォルダーは必ず最新の（「新しい」）バージョンの型定義が含まれるようになるので、古いバージョン用のサブフォルダー内のファイルにおいて、きちんと相対パスがルートフォルダーではなくサブフォルダーに向くように変更する必要があります。

1. `tsconfig.json` と `tslint.json` 内の相対パスを更新する。
2. テストが意図したバージョンで実行されるように、パスの変換ルールを追加する。

たとえば、 [`history`](https://github.com/ReactTraining/history/) ライブラリはバージョン `2.x` から `3.x` の間で破壊的な変更を行いました。
多くのユーザーがなお古いバージョン `2.x` 系を使用していたので、バージョン `3.x` 系の型定義に更新したかったメンテナーは `v2` フォルダーを作成し、そこに古いバージョン用の型定義を含めるようにしました。
下記は、執筆時点<small>（訳注: 英語版執筆当時）</small>の [history モジュールの v2 の `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/history/v2/tsconfig.json) の大まかな内容です:

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

あるライブラリの新しいバージョンに、 Definitely Typed 内の他のパッケージが対応していない場合は、古いバージョンへのパス変換<small>（path mapping）</small>を追加する必要があります。
古いバージョンに対応していないパッケージにさらに依存しているパッケージに対しても、再帰的に行う必要があります。

たとえば、 `react-router` は `history@2` に依存しているため、 [react-router の `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router/v2/tsconfig.json) には `"history": [ "history/v2" ]` というパス変換が追加されています。
さらに、 `react-router` に依存している `react-router-bootstrap` でも、 `react-router` が最新版に更新されるまでの間、 `tsconfig.json` の中で同様のパス変換（`"history": [ "history/v2" ]`）を行う必要があります。

`/// <reference types=".." />` についてはパス変換でうまく動作しないため、依存モジュールは `import` を使う必要があります。

#### グローバルにも使えてモジュールとしても使えるパッケージについては、どのように型定義すればよいですか？

TypeScript ハンドブックには、[型定義を書くにあたっての一般的な情報](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)がとてもよくまとめられており、また object をグローバル スコープで使えるようにしながら ES6 方式のモジュール構文を使って型定義を作成している[型定義ファイルの例](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html)も掲載されています。この手法は実際に [`big.js` の型定義](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts)で使われています。このモジュールはウェブページでは `<script>` タグでグローバルに読み込むことができ、 `require` や ES6 方式の `import` でインポートすることもできます。

型定義ファイルがグローバルにも、インポートされたモジュールとしても使用できるかをテストするには、次のようにします。まず `test` フォルダを作成し、そこに `YourLibraryName-global.test.ts` と `YourLibraryName-module.test.ts` の2つのファイルを用意します。 *global* テストファイルでは、ウェブページ上でスクリプトとして読み込まれ、ライブラリがグローバル スコープで使用可能になるようにテストします &mdash; このとき、インポート構文は使用してはいけません。 *module* テストファイルでは、 `import` 構文などを使用し、モジュールとしてインポートする方法に沿ってテストします。 `tsconfig.json` ファイル内で `files` プロパティを指定している場合は、両方をテストファイルを含めるのを忘れないでください。 `big.js` の型定義での[実際のテストファイル](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test)も参考にしてください。

両方のテストファイルで、型定義に対する完全なテストを行う必要はありません &mdash; *global* テストファイルではグローバルな要素にアクセスできるかのみをテストし、 *module* テストファイルで型定義の完全なテストを行う（またはその逆パターン）のでもかまいません。

#### スコープ付きパッケージについてはどうすればよいですか？

スコープ付きパッケージ「`@foo/bar`」の型定義は、 `types/foo__bar` の中に含めてください（注: アンダーバー2個です）。

`dts-gen` をスコープ付きパッケージの初期生成に使用した場合、生成された `tsconfig.json` の `paths` プロパティを、スコープ付きパッケージを正しく参照できるように手動で修正する必要があります:

```json
{
  "paths": {
    "@foo/*": ["foo__*"]
  }
}
```

#### GitHub のファイル履歴がおかしいです。

GitHubは、名前が変更されたファイルの履歴には[対応していない](https://stackoverflow.com/questions/5646174/how-to-make-github-follow-directory-history-after-renames)ので、代わりに [`git log --follow`](https://www.git-scm.com/docs/git-log) を使用してください。

## ライセンス

このプロジェクトは MIT License でライセンスされています。

型定義ファイルの著作権は、各定義ファイルの冒頭に掲載されているコントリビューターそれぞれに帰属します。
