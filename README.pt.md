# Definitely Typed

> O repositório para definições de tipo do TypeScript de *alta qualidade*.

Veja também o site [definitelytyped.org](http://definitelytyped.org), embora as informações neste README sejam mais atualizadas.

*Link para o [manual do Admin](./docs/admin.md)*

## Status atual

Essa seção acompanha a saúde do respositório e o processo de publicação.
Ela pode servir de ajuda para contribuidores que estejam passando por problemas com suas PRs e pacotes.

* Build mais recente com [tipagem checada/analisada pelo linter](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint) de forma limpa: [![Build Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.DefinitelyTyped?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=1&branchName=master)
* Todos os pacotes tem seus tipos checados/são analisadas pelo linter no typescript@next: [![Build status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/Nightly%20dtslint)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=8)
* Todos os pacotes estão sendo [publicados no npm](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) em menos de uma hora: [![Publish Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
* [typescript-bot](https://github.com/typescript-bot) esteve ativo no Definitely Typed [![Activity Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)
* [Atualizações do status da infraestrutura](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/44317) atual

Se algo aqui parece estar errado, ou se algum dos itens acima está falhando, por favor fale sobre este problema no [canal do Definitely Typed no Discord](https://discord.gg/typescript).

## O que são arquivos de declaração?

Veja o [manual do TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).

## Como eu consigo eles?

### npm

Esse é o método aconselhável:

```sh
npm install --save-dev @types/node
```

Os tipos então devem ser automaticamente incluidos pelo compilador.
Talvez você precise adicionar a referência `types` se não estiver usando módulos:

```ts
/// <reference types="node" />
```

Veja mais no [manual](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

Para um pacote "foo" do npm, suas tipagens serão "@types/foo".
Se você não conseguir achar o pacote desejado, procure no [TypeSearch](https://microsoft.github.io/TypeSearch/).

Se você mesmo assim não consegue achar o pacote, verifique se ele [inclui](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) seus próprios tipos.
Isso normalmente é informado nos campos `"types"` ou `"typings"` no `package.json`,
ou apenas procure por qualquer arquivo ".d.ts" no pacote e manualmente inclua-os com `/// <reference path="" />`.

#### Versões antigas do TypeScript (4.0 e anteriores)

O Definitely Typed testa apenas pacotes em versões do TypeScript que tenham sido lançadas a menos de 2 anos.
Atualmente, as versões 4.1 e acima são testadas.
Se você está usando as versões 2.0 a 4.0 do TypeScript, você ainda pode tentar instalar os pacotes `@types` &mdash; a maioria dos pacotes não usam as novas funcionalidades chiques do TypeScript.
Mas não tem nenhuma garantia de que elas funcionarão.
Esta é a tabela de duração de suporte das versões.

<img src="docs/support-window.svg#gh-light-mode-only" style="width:100%">
<img src="docs/support-window.svg#gh-dark-mode-only" style="width:100%">

Pacotes `@types` têm tags para versões do TypeScript que elas explicitamente suportam, então normalmente você pode usar versões mais antigas dos pacotes que precedem o período de 2 anos.
Por exemplo, se você executar o comando `npm dist-tags @types/react`, você verá que o TypeScript 2.5 pode usar os tipos para o react@16.0, enquanto o TypeScript 2.6 e 2.7 podem usar os tipos para o react@16.4:

|Tag | Versão|
|----|---------|
|latest| 16.9.23|
|ts2.0| 15.0.1|
| ... | ... |
|ts2.5| 16.0.36|
|ts2.6| 16.4.7|
|ts2.7| 16.4.7|
| ... | ... |


#### TypeScript 1.*

* Faça download manualmente da branch `master` deste repositório e adicione-o no seu projeto
* ~~[Typings](https://github.com/typings/typings)~~ (use alternativas aconselhadas. O typings foi descontinuado)
* ~~[NuGet](https://nuget.org/packages?q=DefinitelyTyped)~~ (use alternativas aconselhadas. A publicação de tipos do NuGet DT foi desligada)

Talvez você precise adicionar [referências](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) manuais.

## Como eu posso contribuir?

O Definitely Typed só funciona por causa de contribuições de usuários como você!

### Testando

Antes de compartilhar sua melhora com o mundo, use-a você mesmo.

#### Teste editando um pacote existente

Para testar localmente em seu aplicativo, você pode usar o [acréscimo de módulos](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) para herdar os tipos existentes do módulo DT que você quer editar.
Você também pode editar os tipos diretamente em `node_modules/@types/foo/index.d.ts` para validar suas mudanças, e então trazer suas mudanças para o respositório seguindo os passos abaixo.

#### Adicionando testes ao novo pacote

Adicione ao seu `tsconfig.json`:

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

Crie o arquivo `types/foo/index.d.ts` contendo as declarações para o módulo "foo".
Você deve conseguir fazer imports de `"foo"` em seu código e ele será redirecionado para a nova definição de tipos.
Então faça uma build *e* execute o código para ter certeza que sua definição de tipos realmente corresponde ao que acontece em tempo de execução.

Logo após testar suas definições com um código real, faça uma [PR](#faça-uma-pull-request)
e então siga as instruções para [editar um pacote existente](#edite-um-pacote-existente) ou
[criar um novo pacote](#crie-um-novo-pacote).


### Faça uma pull request

Logo após testar seu pacote, você pode compartilhá-lo aqui no Definitely Typed.

Primeiro, [faça um fork](https://guides.github.com/activities/forking/) deste respositório, instale o [node](https://nodejs.org/), e execute `npm install`.


#### Edite um pacote existente

* `cd types/meu-pacote-para-editar`
* Faça as mudanças. Lembre de [editar os testes](#my-package-teststs).
  Se você está fazendo mudanças que podem "quebrar" o pacote, não se esqueça de [atualizar a versão principal](#se-uma-biblioteca-for-atualizada-para-uma-nova-versão-major-com-mudanças-drásticas-como-eu-devo-atualizar-a-declaração-de-tipos).
* [Execute `npm test nome-do-pacote`](#verificando).

Quando você fizer uma PR para editar um pacote existente, o `dt-bot` deve mencionar (usando "@") os antigos autores.
Se ele não o fizer, você mesmo pode fazer isso no comentário associado a PR.

#### Crie um novo pacote

Se você é o autor de uma biblioteca e seu pacote está escrito em TypeScript, [inclua os arquivos de declaração gerados automaticamente](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) em seu pacote, em vez de publicá-los no Definitely Typed.

Se você está adicionando tipos para um pacote do npm, crie um diretório com o mesmo nome do pacote.
Se o pacote ao qual você está adicionando tipos não está no npm, tenha certeza de que o nome escolhido para ele não entre em conflito com o nome de um outro pacote no npm.
(Você pode executar `npm info <my-package>` para verificar a existência do pacote `<my-package>`.)

Seu pacote deve possuir a seguinte estrutura:

| Arquivo | Propósito |
| --- | --- |
| `index.d.ts` | Contém os tipos para o pacote. |
| [`<my-package>-tests.ts`](#my-package-teststs) | Contém código de exemplo que testa os tipos. Esse código *não* é executado, mas seus tipos são checados. |
| [`tsconfig.json`](#tsconfigjson) | Permite que você execute `tsc` dentro do pacote. |
| [`tslint.json`](#linter-tslintjson) | Habilita a análise do código pelo linter. |

Gere esses arquivos executando `npx dts-gen --dt --name nome-do-seu-pacote --template module` se você possuir a versão 5.2.0 ou mais recente do npm ou `npm install -g dts-gen` e `dts-gen --dt --name nome-do-seu-pacote --template module` caso possua uma versão mais antiga.
Veja todas as opções em [dts-gen](https://github.com/Microsoft/dts-gen).

Se há outros arquivos `.d.ts` além do arquivo `index.d.ts`, tenha certeza de que eles são referenciados no arquivo `index.d.ts` ou nos testes.

Os membros do Definitely Typed frequentemente monitoram os novos PRs, porém tenha em mente de que a quantidade de PRs pode atrasar o processo.

Para ver um bom exemplo, veja o pacote [base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js).

#### Removendo um pacote

Quando um pacote [inclui](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) seus próprios tipos, os tipos devem ser removidos do Definitely Typed para evitar confusão.

Você pode removê-lo executando `npm run not-needed -- <typingsPackageName> <asOfVersion> [<libraryName>]`
- `<typingsPackageName>`: O nome do diretório a ser deletado.
- `<asOfVersion>`: Um esboço será publicado em `@types/<typingsPackageName>` com essa versão. Deve ser maior do que qualquer versão atualmente publicada, e deve ser uma versão de `<libraryName>` no npm.
- `<libraryName>`: Nome do pacote no npm que substitui os tipos do Definitely Typed. Normalmente é idêntico ao `<typingsPackageName>`, e nesse caso pode ser omitido.

Quaisquer outros pacotes no Definitely Typed que referenciavam o pacote deletado devem ser atualizados para referenciar os tipos inclusos pelo pacote.
Você pode obter esta lista olhando os erros do `npm test`.
Para corrigir os erros, [adicione o arquivo `package.json`](#packagejson) com `"dependencies": { "<libraryName>": "x.y.z" }`.
Por exemplo:

```json
{
  "private": true,
  "dependencies": {
    "<libraryName>": "^2.6.0"
  }
}
```

Quando você adicionar um `package.json` aos dependentes de `<libraryName>`, você também precisará abrir uma PR para adicionar `<libraryName>` [ao allowedPackageJsonDependencies.txt em DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt).

Se um pacote nunca esteve no Definitely Typed, ele não precisa ser adicionado ao `notNeededPackages.json`.

#### Verificando

Teste suas mudanças executando o comando `npm test nome-do-pacote` onde `nome-do-pacote` é o nome do seu pacote.

Este script usa o [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint) para executar o compilador de TypeScript em seus arquivos dts.

#### Naming

Se você está adicionando tipos para um pacote do npm, crie um diretório com o mesmo nome do pacote.
Se o pacote ao qual você está adicionando tipos não está no npm, tenha certeza de que o nome escolhido para ele não entre em conflito com o nome de um outro pacote no npm.
(Você pode executar `npm info <my-package>` para verificar a existência do pacote `<my-package>`.)

If a non-npm package conflicts with an existing npm package try adding -browser to the end of the name to get `<my-package>-browser`.

#### `<my-package>-tests.ts`

Deve existir um arquivo `<my-package>-tests.ts`, que é considerado seu arquivo de teste, junto a qualquer arquivo `*.ts` que ele importar.
Se você não encontrou nenhum arquivo de teste na pasta do módulo, crie um arquivo `<my-package>-tests.ts`.
Esses arquivos serão usados para validar a API exportada dos arquivos `*.d.ts` que são enviadas como `@types/seumódulo`.

Mudanças nos arquivos `*.d.ts` devem ser acompanhadas de mudanças nos arquivos `*.ts` que mostrem que a API sendo usada, para que ninguém acidentalmente "quebre" o código do qual você depende.
Se você não encontrou nenhum arquivo de teste na pasta do módulo, crie um arquivo `<my-package>-tests.ts`.

Abaixo há um exemplo dessas mudanças em uma função em um arquivo `d.ts` adicionando um novo parâmetro à função:

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

+ // Lida com o parâmetro options
+ const resultWithOptions = twoslash("//", { version: "3.7" })
+ // Quando o parâmetro está incorreto
+ // @ts-expect-error
+ const resultWithOptions = twoslash("//", {  })
```

Se você está se perguntando por onde começar os testes em seu código, os exemplos no README do módulo são um ótimo lugar para começar.

Você pode [validar suas mudanças](#verificando) executando `npm test` na raiz deste repositório, que leva em consideração os arquivos alterados.

Para afirmar que uma expressão é de um tipo determinado, use `$ExpectType`. Para afirmar que uma expressão causa um erro de compilador, use `@ts-expect-error`.

```js
// $ExpectType void
f(1);

// @ts-expect-error
f("um");
```

Para mais detalhes, veja o arquivo readme do [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint#write-tests).

#### Linter: `tslint.json`

The linter configuration file, `tslint.json` should contain `{ "extends": "@definitelytyped/dtslint/dt.json" }`, and no additional rules.

If for some reason some rule needs to be disabled, [disable it for that specific line](https://palantir.github.io/tslint/usage/rule-flags/#comment-flags-in-source-code:~:text=%2F%2F%20tslint%3Adisable%2Dnext%2Dline%3Arule1%20rule2%20rule3...%20%2D%20Disables%20the%20listed%20rules%20for%20the%20next%20line) using `// tslint:disable-next-line:[ruleName]` — not for the whole package, so that disabling can be reviewed. (There are some legacy lint configs that have additional contents, but these should not happen in new work.)

#### `tsconfig.json`

`tsconfig.json` should have `noImplicitAny`, `noImplicitThis`, `strictNullChecks`, and `strictFunctionTypes` set to `true`.

Você pode editar o `tsconfig.json` para adicionar novos arquivos de teste, para adicionar `"target": "es6"` (necessário para funções assíncronas), para adicionar a `"lib"`, ou para adicionar a opção `"jsx"` do compilador.

#### `package.json`

Geralmente você não precisa disso.
O distribuidor de pacotes do Definitely Typed cria um `package.json` para pacotes sem dependências fora do Definitely Typed.
Um `package.json` pode ser incluído para especificar dependências que não são outros pacotes `@types`.
[Pikaday é um bom exemplo.](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json)
Mesmo se você criar seu próprio `package.json`, você pode apenas especificar dependências; outros campos como `"description"` não são permetidos.
Você também precisa adicionar uma dependência à [lista de pacotes permitidos](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt).
Essa lista é atualizada por um humano, o que nos dá a chance de nos certificar que os pacotes `@types` não dependem de pacotes maliciosos.

Nos caso raro que um pacote `@types` é deletado e removido em favor dos tipos enviados pelo pacote-fonte e você precise depender do pacote antigo `@types`, já removido, você pode adicionar a dependência no pacote `@types`.
Tenha certeza de explicar isso quando adicioná-lo à lista de pacotes permitidos, para que o mantenedor humano saiba o que está acontecendo.

#### `OTHER_FILES.txt`

Se um arquivo não for testado nem referenciado no `index.d.ts`, adicione-o em um arquivo chamado `OTHER_FILES.txt`. Este arquivo é uma lista de outros arquivos que precisam ser incluidos no pacote de tipos, um arquivo por linha.

#### Erros comuns

* Primeiro, siga as instruções do [manual](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html).
* Formatação: Use 4 espaços. O Prettier está configurado neste repositório, então você pode executar `npm run prettier -- --write path/to/package/**/*.ts`. [Se estiver usando asserções](https://github.com/SamVerschueren/tsd#assertions), adicione a tag de exclusão `// prettier-ignore` para marcar linhas de código como exclusas da formatação:
  ```tsx
  // prettier-ignore
  // @ts-expect-error
  const incompleteThemeColorModes: Theme = { colors: { modes: { papaya: {
  ```
* `function sum(nums: number[]): number`: Use `ReadonlyArray` se a função não adiciona valores a seus parâmetros.
* `interface Foo { new(): Foo; }`:
  Isto define um tipo de objeto que pode ser instanciado utlizando o operador `new`. Você provavelmente deveria escrever `declare class Foo { constructor(); }`.
* `const Class: { new(): IClass; }`:
  Prefira usar a declaração de classe `class Class { constructor(); }` em vez de uma constante que pode ser instanciada utlizando o operador `new`.
* `getMeAT<T>(): T`:
  Se um parâmetro de tipo não estiver no tipo de nenhum dos parâmetros, então você não tem realmente uma função genérica, você só tem uma asserção de tipos disfarçada.
  Prefira usar uma asserção de tipos real, por exemplo `getMeAT() as number`.
  Um exemplo onde um parâmetro de tipo é aceitável: `function id<T>(value: T): T;`.
  Um exemplo onde não é aceitável: `function parseJson<T>(json: string): T;`.
  Exceção: `new Map<string, number>()` é aceitável.
* Usar os tipos `Function` e `Object` quase nunca é uma boa ideia. Em 99% dos casos é possível especificar um tipo mais específico. Por exemplo `(x: number) => number` para [funções](https://www.typescriptlang.org/docs/handbook/functions.html#function-types) e `{ x: number, y: number }` para objetos. Se você não tem nenhuma certeza sobre o tipo, [`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) é a escolha correta, não `Object`. Se a única certeza sobre o tipo é que ele é algum objeto, use o tipo [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type), não `Object` ou `{ [key: string]: any }`.
* `var foo: string | any`:
  Quando `any` é usado em um tipo de união, o tipo resultante ainda é `any`. Então, enquanto a parte da anotação de tipo `string` pode _parecer_ útil, na verdade ela não oferece nenhuma verificação de tipo adicional do que simplesmente usar `any`.
  Dependendo da intenção, alternativas aceitáveis podem ser `any`, `string`, ou `string | object`.

### Donos de definição

O DT tem o coneito de "Donos de definição", que são pessoas que querem manter a qualidade dos tipos de um módulo específico

* Adicionar você mesmo à lista, vai garantir que você seja notificado (pelo seu usuário do GitHub) sempre que qualquer um fizer uma pull request ou um issue sobre o pacote.
* Suas revisões da PR terão uma precedência de importância maior para [o bot](https://github.com/DefinitelyTyped/dt-mergebot) que mantém este repositório.
* Os mantenedores do DT estão confiando nos donos da definição para garantir um ecossistema estável, por favor não se adicione apenas por adicionar.

Para se adicionar como um Dono de definição:

* Adicione seu nome ao final da linha, por exemplo: `// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>`.
* Ou se há muitas pessoas, pode ser em várias linhas:
  ```typescript
  // Definitions by: Alice <https://github.com/alice>
  //                 Bob <https://github.com/bob>
  //                 Steve <https://github.com/steve>
  //                 John <https://github.com/john>
  ```

Uma vez por semana os Donos de definição são sincronizados para o arquivo [.github/CODEOWNERS](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/.github/CODEOWNERS), que é a nossa fonte da verdade.

## FAQ

#### Qual exatamente é a relação entre este repositório e os pacotes `@types` no npm?

A branch `master` é automaticamente publicada ao escopo `@types` no npm graças ao [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher).

#### Eu já enviei uma pull request. Quanto tempo pode demorar até que haja um merge?

Depende, mas a maioria das pull requests sofrem merge dentro de uma semana.
Algumas PRs podem sofrer merge pelos donos de um módulo, fazendo com que elas sejam mescladas muito mais rapidamente.
Superficialmente:

> PRs que alteram apenas os tipos de um módulo, e têm mudanças de testes correspondentes sofrerão merges muito mais rapidamente.

PRs que forem aprovadas por um autor listado no cabeçalho da definição geralmente sofrem merge mais rápido; PRs para novas definições levarão mais tempo para serem aprovadas, uma vez que requerem mais revisão dos mantenedores. Cada PR é revisada por um membro do time do TypeScript ou Definitely Typed antes de sofrer merge, então por favor, seja paciente, pois fatores humanos podem causar alguns atrasos. Verifique o [Painel de Status de Novas Pull Requests](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/5) para checar o progresso enquanto os mantenedores revisam as PRs abertas.

#### Minha PR já sofreu merge; Quando é que o pacote `@types` no npm será atualizado?

Pacotes do npm devem atualizar dentro de alguns minutos. Se já passou de uma hora, mencione o número da PR [no canal do Discord do Definitely Typed](https://discord.gg/typescript) e um mantenedor vai contatar o membro certo do time para investigar.

#### Eu estou criando uma definição que depende de outra definição. Eu deveria usar `<reference types="" />` ou um import?

Se o módulo o qual você está referenciando é um módulo externo (usa `export`), use um import.
Se o módulo que você está referenciando é um módulo de ambiente (usa `declare module`, ou apenas declara globalmente), use `<reference types="" />`.

#### Alguns pacotes não têm `tslint.json`, e alguns arquivos `tsconfig.json` não têm `"noImplicitAny": true`, `"noImplicitThis": true`, ou `"strictNullChecks": true`.

Então eles estão errados, e nós não notamos ainda. Você pode ajudar enviando uma pull request pra consertá-los.

#### Posso requisitar uma definição?

Aqui estão as [definições requisitadas atualmente](https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/categories/request-a-new-types-package).

#### Mas e as definições de tipo para a DOM?

Se os tipos são parte de um padrão de web, eles devem ser enviados para o [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator), fazendo com que eles se tornem parte do `lib.dom.d.ts`.

#### Eu deveria adicionar um namespace vazio para um pacote que não exporta um módulo, para usar imports no estilo do ES6?

Alguns pacotes, como o [chai-http](https://github.com/chaijs/chai-http), exportam uma função.

Importar este módulo com o estilo de import do ES6 na forma de `import * as foo from "foo";` resulta no erro:

> error TS2497: Module 'foo' resolves to a non-module entity and cannot be imported using this construct

Este erro pode ser suprimido por mesclar a declaração da função com um namespace vazio do mesmo nome, mas essa prática é desencorajada.
Isso é recorrentemente citado nesta [resposta do Stack Overflow](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this) que fala sobre essa prática.

É mais apropriado importar o módulo usando a sintaxe `import foo = require("foo");`.
Mesmo assim, se você quer usar um import padrão como `import foo from "foo";`, você tem duas opções:
- você pode usar a [opção de compilador `--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs) se o seu módulo suporta, em tempo de execução, um esquema de interop para módulos não-ECMAScript, isto é, se os imports padrão funcionam no seu ambiente (por exemplo, Webpack, SystemJS, esm).
- você pode usar a [opção de compilador `--esModuleInterop`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop) se você quiser que o TypeScript tome conta dos interop não-ECMAScript (desde o TypeScript 2.7).

#### Um pacote usa um `export =`, mas eu prefiro usar os imports padrão. Eu posso mudar o `export =` para `export default`?

Como na pergunta anterior, lembre-se de que você pode usar as opções de compilador [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs)
e [`--esModuleInterop`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop).

Não mude a definição de tipo se ela já está correta.
Para um pacote npm, `export =` é o certo, se `node -p 'require("foo")'` funciona para importar um módulo, e `export default` é o certo se `node -p 'require("foo").default'` funciona para importar um módulo.

#### Eu quero usar features do TypeScript 3.3 ou superior.

Então você vai precisar adicionar este comentário na última linha do seu cabeçalho de definição (depois de `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`): `// Minimum TypeScript Version: 3.3`.

Entretanto, se o seu projeto precisa manter tipos que são compatíveis com o 3.1 e superior *ao mesmo tempo que* tipos que são compatíveis com o 3.0 ou inferior, você vai precisar usar a feature `typesVersions`, que está disponível no TypeScript 3.1 e superior.
Você pode achar uma explicação detalhada dessa feature na [documentação oficial do TypeScript](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#version-selection-with-typesversions).

Aqui vai uma explicação curta pra te ajudar:

1. Você vai precisar adicionar um arquivo `package.json` à sua definição de pacote, com os seguintes conteúdos:

```json
{
    "private": true,
    "types": "index",
    "typesVersions": {
        ">=3.1.0-0": { "*": ["ts3.1/*"] }
    }
}
```

2. Crie o sub-diretório mencionado no campo `typesVersions` dentro do seu diretório de tipos (`ts3.1/` neste exemplo)
e adicione os tipos e testes específicos para a nova versão do TypeScript. Você não precisa do típico cabeçalho de definição nos arquivos do diretório `ts3.1/`.

3. Defina as opções `baseUrl` e `typeRoots` no `ts3.1/tsconfig.json` para os caminhos corretos. Eles devem ficar semelhantes a isto:
```json
{
    "compilerOptions": {
        "baseUrl": "../../",
        "typeRoots": ["../../"]
    }
}
```

Você pode verificar [bluebird](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f2512c2cf7cdcf9a487d989e288174e49b7839ab/types/bluebird) e [express](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/95a309dcd7dc2632b4ebab87a75329f17af62dbc/types/express) para exemplos.

#### Eu quero adicionar uma API da DOM não presente no TypeScript por padrão.

Isso talvez pertença ao [TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme). Veja as regras lá.
Se esse padrão ainda é um rascunho, ele pertence a aqui.
Use o nome começando com `dom-` e inclua um link para o padrão como o link do "Projeto" no cabeçalho.
Quando o padrão sair do papel, nós o removeremos do Definitely Typed e descontinuaremos os pacotes `@types` associados.

#### Como as versões do pacote do Definitely Typed se relacionam às versões da biblioteca correspondente?

_NOTA: A discussão nesta sessão supõe familiaridade com [versionamento semântico](https://semver.org/)_

Cada pacote do Definitely Typed é versionado ao ser publicado ao npm.
O [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) (a ferramenta que publica pacotes `@types` ao npm) definirá a declaração da versão do pacote usando o número da versão `major.minor` listado na primeira linha do seu arquivo `index.d.ts`.
Por exemplo, aqui estão as primeiras linhas das [declarações de tipo do Node](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/node/index.d.ts) para a versão `10.12.x`, no momento de escrita:

```js
// Type definitions for Node.js 10.12
// Project: https://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 Definitely Typed <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
```

A versão do npm do pacote `@types/node` será `10.12.x` porque está escrito `10.12` no final da primeira linha.
Note que o comentário da primeira linha no arquivo `index.d.ts` deve conter apenas a versão `major.minor` (por exemplo, `10.12`) e não deve conter uma versão de patch. (por exemplo, `10.12.4`).
Isto acontece porque apenas os números de release "major" e "minor" estão alinhados entre os pacotes de biblioteca e os pacotes de declaração de tipo.
O número de release do patch do pacote de declaração de tipo (`.0` em `10.12.0`) é inicializado como zero pelo Definitely Typed e é incrementado a cada vez que um novo pacote `@types/node` é publicado ao npm para a mesma versão "major"/"minor" da biblioteca correspondente.

Algumas vezes as versões de pacotes de declaração de tipo e as versões de pacotes de biblioteca podem sair de sincronia.
Abaixo estão algumas razões do porquê, por causa do quanto elas incomodam os usuários de uma biblioteca.
Apenas o último caso é tipicamente problemático.

* Como notado acima, a versão do patch do pacote de declaração de tipo não está relacionada à versão do patch da biblioteca.
  Isso permite que o Definitely Typed atualize as declarações de tipo de forma segura para a mesma versão "major"/"minor" de uma biblioteca.
* Caso esteja atualizando um pacote para uma nova funcionalidade, não se esqueça de atualizar o número da versão para alinhá-lo com aquela versão da biblioteca.
  Caso os usuários tenham certeza de que versões correspondam entre os pacotes JavaScript e seus respectivos pacotes `@types`, então um `npm update` deve tipicamente funcionar.
* É comum para atualizações de um pacote de declaração de tipos ficarem atrasadas em relação às atualizações da biblioteca, porque é mais comum que os usuários das bibliotecas, não os mantenedores, atualizem o Definitely Typed quando novas features da biblioteca são lançadas.
  Então talvez haja um atraso de alguns dias, semanas ou até mesmo meses antes de um membro solidário da comunidade mandar uma PR para atualizar o pacote de declaração de tipos para uma nova release da biblioteca. Se você estiver comovido com isso, você pode ser a mudança que você quer ver no mundo, e você pode ser esse membro solidário da comunidade!

:exclamation: Se você está atualizando as declarações de tipo para uma biblioteca, sempre defina a versão `major.minor` na primeira linha do `index.d.ts` correspondendo à versão da biblioteca que você está documentando! :exclamation:

#### Se uma biblioteca for atualizada para uma nova versão "major" com mudanças drásticas, como eu devo atualizar a declaração de tipos?

[Versionamento semântico](https://semver.org/) requer que versões com mudanças drásticas devem incrementar o número "major" da versão.
Por exemplo, uma biblioteca que remove uma função publicamente exportada depois de sua release `3.5.8` deve aumentar sua versão para `4.0.0` na próxima release.
Além do mais, quando a release `4.0.0` da biblioteca for publicada, seu pacote de declaração de tipos do Definitely Typed deve também ser atualizado para `4.0.0`, incluindo quaisquer mudanças drásticas para a API da biblioteca.

Muitas bibliotecas têm uma grande base de desenvolvedores instalados (incluindo mantenedores de outros pacotes usando aquela biblioteca como dependência) os quais não vão migrar imediatamente para a nova versão que tem mudanças drásticas, porque pode levar meses até que um mantenedor tenha tempo de reescrever o código para adaptá-lo à nova versão.
Enquanto isso, usuários das versões antigas da biblioteca ainda podem querer atualizar as declarações de tipo para versões antigas.

Se você pretende continuar atualizando a versão mais antiga de uma declaração de tipos de uma biblioteca, você pode criar uma nova sub-pasta (por exemplo, `/v2/`), nomeá-la de acordo com a versão atual (que será antiga em breve), e copiar os arquivos da versão atual para essa pasta.

Porque o diretório-raíz deve sempre conter as declarações de tipo para as últimas versões ("novas"), você precisará fazer algumas mudanças aos arquivos do seu sub-diretório da sua versão antiga para garantir que as referências de caminho relativo apontam ao sub-diretório, não ao diretório-raíz.

1. Atualize os caminhos relativos no `tsconfig.json`, assim como no `tslint.json`.
2. Adicione regras de mapeamento de caminhos para garantir que os testes estão sendo executados sobre a versão pretendida.

Por exemplo, a biblioteca [`history`](https://github.com/ReactTraining/history/) introduziu mudanças drásticas entre a versão `2.x` e `3.x`.
Mas porque muitos usuários ainda consumiam a antiga versão `2.x`, o mantenedor que queria atualizar as declarações de tipo dessa biblioteca para a versão `3.x` adidionou uma pasta `v2` dentro do repositório "history" que contém declarações de tipo para a versão anterior.
No tempo de escrita, a [history v2 `tsconfig.json`](https://github.com/%44efinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/history/v2/tsconfig.json) está assim:

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

Se há outros pacotes no Definitely Typed que são incompatíveis com a nova versão, você precisará adicionar mapeamentos de caminho para a versão antiga.
Você também precisará fazer isso recursivamente para pacotes dependentes da versão antiga.

Por exemplo, `react-router` depende de `history@2`, então o [`tsconfig.json` do react-router](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router/v2/tsconfig.json) tem um mapeamento de caminho para `"history": [ "history/v2" ]`.
Provisoriamente, o `react-router-bootstrap` (que depende do `react-router`) também precisou ter o mesmo mapeamento de caminhos adicionado (`"history": [ "history/v2" ]`) no seu `tsconfig.json` até que o sua dependência `react-router` fosse atualizada para a última versão.

`/// <reference types=".." />` também não vai funcionar com o mapeamento de caminhos, então dependências devem usar `import`.

#### Como eu crio definições para pacotes que podem ser usados globalmente e como um módulo?

O manual do TypeScript contém excelentes [informações gerais sobre criar definições](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), e também [este arquivo de definição de exemplo](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html) que mostra como criar uma definição usando a sintaxe de módulo no estilo ES6, enquanto também especifica os objetos que tornaram-se disponíveis ao escopo global. Essa técnica é demonstrada de forma prática na [definição da `big.js`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts), que é uma biblioteca que pode ser carregada globalmente via tags de script numa página da web, ou importada via require ou via imports no estilo do ES6.

Para testar como sua definição pode ser usada tanto quando referenciada globalmente quanto como um módulo importável, crie uma pasta `test`, e coloque dois arquivos de teste nela. Chame um de `NomeDaSuaBiblioteca-global.test.ts` e o outro de `NomeDaSuaBiblioteca-module.test.ts`. O arquivo de teste *global* deve exercer a definição de acordo com como ele seria usado num script carregado numa página da web onde a biblioteca está disponível no escopo global - nesse cenário você não deve especificar uma declaração de importação. O arquivo de teste *module* deve exercer a definição de acordo com como ele seria usado quando importado (incluindo a(s) definição(ões) de `import`). Se Você especificar uma propriedade `files` no seu arquivo `tsconfig.json`, tenha certeza de incluir ambos os arquivos de teste. Um [exemplo prático de como fazer isso](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) também está disponível na definição da `big.js`.

Por favor note que isso não é obrigatório para exercer completamente a definição em cada arquivo de teste - é suficiente para testar apenas os elementos accessíveis globalmente no arquivo de teste global e exercer a definição no arquivo de teste do módulo, ou vice versa.

#### Mas e os pacotes com escopo?

Tipos para um pacote com escopo `@foo/bar` devem estar em `types/foo__bar`. Note o underscore duplo.

Quando `dts-gen` for usado para montar um pacote com escopo, a propriedade `paths` tem de ser manualmente adaptada no arquivo `tsconfig.json` gerado, para referenciar corretamente o segundo pacote com escopo:

```json
{
    "paths":{
      "@foo/*": ["foo__*"]
    }
}
```

## Licença

Esse projeto é licenciado sob a licença MIT.

Copyrights nos arquivos de definição são respectivos de cada contribuidor listado no começo de cada arquivo de definição.
