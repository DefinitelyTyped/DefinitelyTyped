# Definitely Typed

> O repositório para definições de tipo do TypeScript de _high quality_.

_Podes também ler este README em [Español](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md), [한국어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ko.md), [Русский](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md), [简体中文](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.zh-Hans.md), [English](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md), [Italiano](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.it.md)
e [日本語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ja.md)!_

Consulta também o site [definitelytyped.org](http://definitelytyped.org), embora a informação neste README esteja mais atualizada.

_Liga-te ao [manual do Admin](./docs/admin.md)_

## !!! Importante! Este repositório mudou recentemente de estrutura! !!!

O Definitely Typed alterou recentemente para um `pnpm` monorepo adequado e precisas de ler este documento para estares a par das mudanças na organização e dos packages deste repositório.

Pelo menos, é recomendável que executes `git clean -fdx` no repositório (ou `node ./scripts/clean-node-modules.js` no Windows) para limpar o diretório `node_modules` e depois executa `pnpm install --filter .` para instalares a raiz do workspace. Consulta as secções seguintes para mais informações sobre o comando `pnpm install`.

## Estado Atual

Esta secção acompanha a saúde do repositório e o processo de publicação.
Pode ajudar os contribuidores que estejam a enfrentar problemas com os PRs e packages.

- Última build com [type-checked/linted](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint) sem erros: [![Build Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.DefinitelyTyped?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=1&branchName=master)
- Todos os packages possuem os types validados pelo linter em typescript@next: [![Build status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/Nightly%20dtslint)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=8)
- Todos os packages estão a ser [publicados no npm](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) em menos de uma hora: [![Publish Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
- [typescript-bot](https://github.com/typescript-bot) esteve ativo no Definitely Typed [![Activity Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)
- [Atualizações do estado da infraestrutura](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/44317) atual

Se algo parecer incorreto, ou se algum dos itens acima falhar, por favor reporta o problema no [canal do Definitely Typed no Discord](https://discord.gg/typescript).

## O que são declaration files e como posso obte-los?

Consulta o [manual do TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).

### npm

Este é o método recomendado. Por exemplo:

```sh
npm install --save-dev @types/node
```

Para instalar as typings para um módulo com scope, remove o `@` e adiciona dois underscores após o scope. Por exemplo, como instalar typings para `@babel/preset-env`:

```sh
npm install --save-dev @types/babel__preset-env
```

Os types devem ser automaticamente incluidos pelo compiler. Talvez precisas de adicionar a referência `types` se não estiveres a usar os módulos:

```ts
/// <reference types="node" />
```

Consulta mais no [manual](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

Para um pacote "foo" do npm, os typings serão "@types/foo".

Se o teu package especifica as definições de tipos utilizando a chave `types` ou `typings` no teeu `package.json`, o registo npm irá mostrar que o pacote tem ligações de tipos disponíveis, como segue:

![image](https://user-images.githubusercontent.com/30049719/228748963-56fabfd1-9101-42c2-9891-b586b775b01e.png)

Se ainda assim não conseguires encontrar as typings, basta procurar por qualquer ficheiro ".d.ts" no pacote e incluí-los manualmente com `/// <reference path="" />`.

### Janela de suporte

O Definitely Typed apenas testa packages em versões do TypeScript que têm menos de 2 anos.

<img src="docs/support-window.svg#gh-light-mode-only" style="width:100%">
<img src="docs/support-window.svg#gh-dark-mode-only" style="width:100%">

<details>
<summary>Versões antigas do TypeScript</summary>

Os packages `@types` têm etiquetas para versões do TypeScript que suportam explicitamente, então normalmente podes usar versões mais antigas dos pacotes que antecedem o período de 2 anos.
Por exemplo, se executares o comando `npm dist-tags @types/react`, verás que o TypeScript 2.5 pode usar os tipos para o react@16.0, enquanto o TypeScript 2.6 e 2.7 podem usar os tipos para o react@16.4:

| Tag    | Versão |
| ------ | ------- |
| latest | 16.9.23 |
| ts2.0  | 15.0.1  |
| ...    | ...     |
| ts2.5  | 16.0.36 |
| ts2.6  | 16.4.7  |
| ts2.7  | 16.4.7  |
| ...    | ...     |

#### TypeScript 1.*

- Faz o download manualmente da branch `master` deste repositório e adiciona-o ao teu projeto.
- ~~[Typings](https://github.com/typings/typings)~~ (usa alternativas recomendadas. O typings foi descontinuado).
- ~~[NuGet](https://nuget.org/packages?q=DefinitelyTyped)~~ (usa alternativas recomendadas. A publicação de tipos no NuGet DT foi desligada).

Poderás precisar de adicionar [referências](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) manuais.

</details>

## Como posso contribuir?

O Definitely Typed só funciona devido a contribuições de utilizadores como tu!

### Testes

Antes de partilhares a tua melhoria com o mundo, usa os types no teu próprio projeto, criando um ficheiro `typename.d.ts` e preenchendo os exports:

```ts

declaremodule"libname" {

// Types inside here

exportfunctionhelloWorldMessage():string;

}

```

#### Testa editando um pacote existente

Para testares localmente na tua aplicação, podes usar a [extensão de módulos](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) para herdares os tipos existentes do módulo DT que queres editar.
Podes também editar os tipos diretamente em `node_modules/@types/foo/index.d.ts` para validares as tuas mudanças, e de seguida trazê-las para o repositório seguindo os passos abaixo.

Alternativamente, podes usar [aumentação de módulos](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) para estender os tipos existentes do módulo DT ou usar a técnica `declare module` mencionada acima, que irá sobrepor a versão em `node_modules`.

#### Adiciona testes ao novo pacote

Adiciona ao teu `tsconfig.json`:

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

Cria o ficheiro `types/foo/index.d.ts` contendo as declarações para o módulo "foo".
Deverás conseguir fazer importações de `"foo"` no teu código e ele será redirecionado para a nova definição de tipos.
De seguida, faz a build _e_ executa o código para garantir que a tua definição de tipos corresponde ao que acontece em tempo de execução.

Logo após testar as tuas definições com código real, faz uma [PR](#faz-uma-pull-request)
e segue as instruções para [editar um pacote existente](#edita-um-pacote-existente) ou
[criar um novo pacote](#cria-um-novo-pacote).

### Faz uma pull request

Depois de testares o teu package, podes partilhá-lo no Definitely Typed.

Primeiro, [faz um fork](https://guides.github.com/activities/forking/) deste repositório, [clona-o](#partial-clone), instala o [node](https://nodejs.org/) e executa `pnpm install`. Nota que o comando `pnpm install` vai instalar _todo_
o repositório, incluindo pacotes que não estás a editar. Se preferires instalar apenas um subconjunto, podes executar `pnpm install -w --filter "{./types/foo}..."` para instalar `@types/foo` e todas as suas dependências. Se precisares de executar testes para packages que _dependem_ de `@types/foo`, podes usar o comando `pnpm install -w --filter "...{./types/foo}..."` para puxar todos os pacotes relacionados para teste.

> [!NOTA]
> Se estiveres a usar o Windows, poderás verificar que o comando `git clean` não remove o diretório `node_modules` ou pode travar ao fazê-lo. Se precisares de remover o `node_modules`, podes executar `pnpm clean-node-modules` para reiniciar o repositório.

Utilizamos um bot para permitir que um grande número de pull requests para o DefinitelyTyped seja gerido de forma totalmente self-service. Podes ler mais sobre o [porquê e como aqui](https://devblogs.microsoft.com/typescript/changes-to-how-we-manage-definitelytyped/). Aqui está uma referência útil mostrando o ciclo de vida de uma pull request no DT:

#### Clone parcial

<details>
<summary>Podes clonar todo o repositório <a href='https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository'>como de costume</a>, mas ele é grande e inclui um diretório massivo de packages de types.</summary>

Podes clonar todo o repositório [como de costume](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository), mas ele é grande e inclui um diretório massivo de pacotes de tipos. Isso vai demorar algum tempo para clonar e pode tornar-se pesado de gerir.

Para um clone mais gerível, que inclua _apenas_ os pacotes de tipos relevantes para ti, podes usar as funcionalidades [`sparse-checkout`](https://git-scm.com/docs/git-sparse-checkout) e [`--filter`](https://git-scm.com/docs/git-rev-list#Documentation/git-rev-list.txt---filterltfilter-specgt) do git. Isso reduzirá o tempo de clone e melhorará o desempenho do git.

> ⚠️ Isto requer no mínimo a [versão 2.27.0 do git](https://git-scm.com/downloads), que provavelmente é mais recente do que a padrão na maioria das máquinas. Procedimentos mais complicados estão disponíveis em versões mais antigas, mas não são abordados neste guia.

1. `git clone --sparse --filter=blob:none <forkedUrl>`
   - `--sparse` inicializa o arquivo sparse-checkout para que o diretório de trabalho comece apenas com os ficheiros na raiz do repositório.
   - `--filter=blob:none` inclui todo o histórico de commits, mas exclui os ficheiros, recuperando-os apenas conforme necessário.
2. `git sparse-checkout add types/<type> types/<dependency-type> ...`

</details>

#### Edita um package existente

- `cd types/meu-pacote-para-editar`
- Faz as alterações. Não te esqueças de [editar os testes](#my-package-tests).
  Se estiveres a fazer alterações que podem "quebrar" o package, lembra-te de [atualizar a versão principal](#se-uma-biblioteca-for-atualizada-para-uma-nova-versao-major-com-mudancas-dramaticas-como-devo-atualizar-a-declaracao-de-tipos).
- [Executa `npm test nome-do-pacote`](#verificacao).

Quando fizeres um PR para editar um package existente, o `dt-bot` deverá mencionar (usando "@") os antigos autores.
Se ele não o fizer, podes tu mesmo fazer isso no comentário associado à PR.

#### Cria um novo package

Se és o autor de uma biblioteca e o teu package está escrito em TypeScript, [inclui os ficheiros de declaração gerados automaticamente](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) no teu package, em vez de os publicares no Definitely Typed.

Se estás a adicionar tipos para um package do npm, cria um diretório com o mesmo nome do pacote.Se o package ao qual estás a adicionar types não está no npm, certifica-te do nome escolhido para ele não entrar em conflito com o nome de um outro pacote no npm.
(Podes executar `npm info <my-package>` para verificar a existência do pacote `<my-package>`.)

O teu pacote deverá ter a seguinte estrutura:

| Ficheiro                                    | Propósito                                                                                                          |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `index.d.ts`                              | Contém os tipos para o pacote.                                                                                     |
| [`<my-package>-tests.ts`](#my-package-tests) | Contém código de exemplo que testa os tipos. Este código_não_ é executado, mas os seus tipos são verificados. |
| [`tsconfig.json`](#tsconfigjson)             | Permite que executes `tsc` dentro do pacote.                                                                      |

Gera esses ficheiros executando `npx dts-gen --dt --name nome-do-teu-pacote --template module` se tiveres a versão 5.2.0 ou mais recente do npm ou `npm install -g dts-gen` e `dts-gen --dt --name nome-do-teu-pacote --template module` se tiveres uma versão mais antiga.
Consulta todas as opções em [dts-gen](https://github.com/microsoft/DefinitelyTyped-tools/tree/main/packages/dts-gen).

Se houverem outros ficheiros `.d.ts` além do ficheiro `index.d.ts`, certifica-te de que eles são referenciados no ficheiro `index.d.ts` ou nos testes.

Os membros do Definitely Typed monitoram frequentemente os novos PRs, mas tem em conta que a quantidade de PRs pode atrasar o processo.

Para ver um bom exemplo, consulta o pacote [base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js).

#### Remover um pacote

Quando um package [inclui](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) os seus próprios types, estes devem ser removidos do Definitely Typed para evitar confusão.

Podes removê-lo executando `pnpm run not-needed -- <typingsPackageName> <asOfVersion> [<libraryName>]`

- `<typingsPackageName>`: O nome do diretório a ser eliminado.
- `<asOfVersion>`: Um esboço será publicado em `@types/<typingsPackageName>` com esta versão. Deve ser maior do que qualquer versão atualmente publicada, e deve ser uma versão de `<libraryName>` no npm.
- `<libraryName>`: Nome do pacote no npm que substitui os tipos do Definitely Typed. Normalmente é idêntico a `<typingsPackageName>`, e nesse caso pode ser omitido.

Quaisquer outros pacotes no Definitely Typed que referenciavam o package eliminado devem ser atualizados para referenciar os types incluídos pelo package. Podes obter esta lista consultando os erros do `npm test`. Para corrigir os erros, [adiciona o ficheiro `package.json`](#packagejson) com `"dependencies": { "<libraryName>": "x.y.z" }`.
Por exemplo:

```json
{
    "private": true,
    "dependencies": {
        "<libraryName>": "^2.6.0"
    }
}
```

Quando adicionares um `package.json` aos dependentes de `<libraryName>`, também precisarás de abrir um PR para adicionar `<libraryName>` [à allowedPackageJsonDependencies.txt em DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt).

Se um package nunca esteve no Definitely Typed, não precisas de o adicionar ao `notNeededPackages.json`.

#### Correr os testes

Testa as tuas alterações executando `pnpm test <package a testar>`, onde `<package a testar>` é o nome do teu package.
Tens de executar este comando a partir do diretório do DefinitelyTyped, porque os `package.json` individuais não definem scripts de teste.

Este script usa o [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint) para executar o compilador TypeScript nos teus ficheiros `.d.ts`.

Depois de teres todas as tuas alterações prontas, usa `pnpm run test-all` para ver como as tuas alterações afetam outros módulos.

##### Verificações @arethetypeswrong/cli (`attw`)

O `dtslint` inclui verificações de formato de módulo e de configuração do `package.json` através do [@arethetypeswrong/cli](https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/packages/cli). As verificações são executadas apenas se for encontrado um package de implementação compatível com a SemVer-major no npm para comparar com o pacote do DefinitelyTyped. (Os pacotes do DefinitelyTyped marcados como `nonNpm` no seu `package.json` são ignorados.)

Atualmente, muitos packages falham nas verificações `attw` e precisam de ser corrigidos. Para permitir um progresso incremental, as verificações `attw` falhadas não falham a execução do `dtslint` quando o pacote está listado em `failingPackages` no [`attw.json`](./attw.json), mas continuam a ser reportadas na saída do `pnpm test my-package`. Se corrigires o package, remove-o de `failingPackages` para que as verificações `attw` possam começar a falhar as execuções do `dtslint`.

Todos os problemas reportados pelo `attw` têm documentação com links na saída. Algumas regras gerais para evitar problemas:

- O `package.json` no pacote DefinitelyTyped deve ter campos `type` e `exports` correspondentes se o pacote de implementação os utilizar no seu `package.json`. Por exemplo, se o `package.json` de implementação parecer:

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

então o `package.json` do DefinitelyTyped deve ser algo assim:

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

Repara que cada subcaminho `exports` é refletido, e que cada ficheiro JavaScript tem um ficheiro de declaração correspondente com a extensão correta — um ficheiro `.d.ts` tipa um ficheiro `.js`, e não um ficheiro `.mjs` ou `.cjs`!

- Quando o pacote de implementação usa `module.exports = ...`, o pacote DefinitelyTyped deve usar `export =`, e não `export default`. (Alternativamente, se o `module.exports` for apenas um objeto com propriedades nomeadas, o package DefinitelyTyped pode usar uma série de exports nomeados.) O obstáculo mais comum para corrigir este problema é a confusão sobre como exportar tipos além da exportação principal. Por exemplo, assume que estes tipos estão a usar incorretamente `export default`:

  ```ts
  export interface Options {
      // ...
  }
  export default function doSomething(options: Options): void;
  ```

Alterar o `export default` para `export =` cria um erro:

```ts
  export interface Options {
      // ...
  }
  declare function doSomething(options: Options): void;
  export = doSomething;
  // ^^^^^^^^^^^^^^^^^
  // Erro: Não pode ser usada uma atribuição de exportação num módulo com outros elementos exportados.
```

Para corrigir isto, move os tipos para dentro de um namespace com o mesmo nome da função:

```ts
  declare namespace doSomething {
      export interface Options {
          // ...
      }
  }
  declare function doSomething(options: doSomething.Options): void;
  export = doSomething;
```

Se precisares de ajuda para resolver um problema, pergunta no canal do DefinitelyTyped no [servidor de Discord da Comunidade TypeScript](https://discord.gg/typescript).

#### Nomeação

Se estiveres a adicionar tipos para um package npm, cria um diretório com o mesmo nome do package.
Se o package ao qual estás a adicionar tipos não está no npm, certifica-te de que o nome escolhido não entre em conflito com o nome de um outro pacote no npm. (Podes executar `npm info <my-package>` para verificar a existência do package `<my-package>`.)

Se um package que não está no npm entrar em conflito com um pacote existente no npm, tenta adicionar -browser ao final do nome para obter `<my-package>-browser`.

#### `<my-package>-tests.ts`

Deve existir um ficheiro `<my-package>-tests.ts`, que é considerado o ficheiro de teste, juntamente com qualquer outro ficheiro `*.ts` que ele importe.
Se não encontraste nenhum ficheiro de teste na pasta do módulo, cria um ficheiro `<my-package>-tests.ts`.
Estes ficheiros são usados para validar a API exportada dos ficheiros `*.d.ts` enviados como `@types/teu-módulo`.

Alterações nos ficheiros `*.d.ts` devem ser acompanhadas de alterações nos ficheiros `*.ts` que demonstram a API em uso, para que ninguém acidentalmente "quebre" o código do qual dependes. Se não encontraste nenhum ficheiro de teste na pasta do módulo, cria um ficheiro `<my-package>-tests.ts`.

Abaixo está um exemplo de alterações numa função num ficheiro `d.ts`, adicionando um novo parâmetro à função:

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

Se estiveres a questionar-te por onde começar os testes no teu código, os exemplos no README do módulo são um ótimo ponto de partida. Podes validar as tuas alterações executando npm test na raiz deste repositório, que irá considerar os ficheiros alterados.

Para afirmar que uma expressão é de um tipo específico, usa $ExpectType. Para afirmar que uma expressão causa um erro de compilação, usa @ts-expect-error.

```js
// $ExpectType void
f(1);

// @ts-expect-error
f("um");
```

Para mais detalhes, consulta o ficheiro readme do [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint#write-tests).

##### Linter: `.eslintrc.json`

Se por algum motivo for necessário desativar uma regra de lint, desativa-a para uma linha específica:

```ts
// eslint-disable-next-line no-const-enum
const enum Const {
    One,
}
const enum Enum { // eslint-disable-line no-const-enum
    Two,
}
```

Ainda podes desativar regras com um .eslintrc.json, mas não deverias fazê-lo em packages novos. Desativar regras para o package inteiro torna a revisão mais difícil.

#### `tsconfig.json`

O `tsconfig.json` deve ter as opções `noImplicitAny`, `noImplicitThis`, `strictNullChecks` e `strictFunctionTypes` definidas como `true`.

Podes editar o `tsconfig.json` para adicionar novos ficheiros de teste, para definir `"target": "es6"` (necessário para funções assíncronas), adicionar a `"lib"`, ou configurar a opção `"jsx"` do compilador.

##### `esModuleInterop`/`allowSyntheticDefaultImports`

TL;DR: `esModuleInterop` e `allowSyntheticDefaultImports` **não são permitidos** no teu `tsconfig.json`.

> Estas opções permitem escrever uma importação padrão (default import) para uma exportação CommonJS (CJS), modelando a interoperabilidade nativa entre módulos CJS e ES no Node e em alguns bundlers JS:
>
> ```tsx
> // component.d.ts
> declare class Component {}
> // Exportação CJS, modelando `module.exports = Component` em JS
> export = Component;
>
> // index.d.ts
> // Importação padrão ESM, permitida apenas com 'esModuleInterop' ou 'allowSyntheticDefaultExports'
> import Component from "./component";
> ```
>
> Como a validade da importação em `index.d.ts` depende de configurações de compilação específicas, que os utilizadores dos teus tipos não herdam, o uso deste padrão no DefinitelyTyped forçaria os utilizadores a alterar as suas próprias configurações de compilação, o que pode ser incorreto para o runtime deles. Em vez disso, deves escrever uma importação CJS para uma exportação CJS para garantir compatibilidade generalizada e independente de configuração:
>
> ```ts
> // index.d.ts
> // Importação CJS, modelando `const Component = require("./component")` em JS
> import Component = require("./component");
> ```

#### `package.json`

Este ficheiro é obrigatório e deve seguir este modelo:

```json5
{
    "private": true,
    "name": "@types/NOME-DO-PACOTE",
    "version": "1.2.9999",
    "projects": [
        "https://aframe.io/"
    ],
    "dependencies": {
        "@types/DEPENDENCIA-1": "*",
        "@types/DEPENDENCIA-2": "*"
    },
    "devDependencies": {
        "@types/NOME-DO-PACOTE": "workspace:."
    },
    "owners": [
        {
            "name": "O Teu Nome Aqui",
            "githubUsername": "ghost"
        }
    ]
}
```



O ficheiro `package.json` especifica **todas** as dependências, incluindo outros packages `@types`.

Deves adicionar dependências que não sejam `@types` à [lista de dependências externas permitidas](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt). [Pikaday é um bom exemplo.](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json)
Estas adições são aprovadas por um maintainer, o que nos dá a oportunidade de garantir que packages `@types` não dependem de packages maliciosos.

Se o package de implementação usar ESM e especificar `"type": "module"`, deves modificar o `package.json` para corresponder:

```json
{
    "type": "module"
}
```

Isto também se aplica se o package de implementação tiver `exports` no seu `package.json`.

#### `.npmignore`

Este ficheiro define quais os ficheiros que devem ser incluídos em cada package `@types`. Deves seguir um formato específico. Para packages com apenas uma versão no repositório:

```ignore
*
!**/*.d.ts
!**/*.d.cts
!**/*.d.mts
!**/*.d.*.ts
```

Isto significa "ignorar todos os ficheiros, exceto os ficheiros de declaração". Para pacotes que têm mais de uma versão no repositório, a versão "mais recente" (no nível superior) deve conter algo como:

```
*
!**/*.d.ts
!**/*.d.cts
!**/*.d.mts
!**/*.d.*.ts
/v15/
/v16/
/v17/
```

O que é o mesmo que o `.npmignore` anterior, mas a ignorar cada um dos diretórios de versão.

O CI falhará se este ficheiro contiver o conteúdo errado e fornecerá o valor pretendido. Independentemente do que este ficheiro contenha, o publicador apenas publicará ficheiros de declaração.

#### Erros comuns

- Primeiro, segue as instruções do [manual](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html).
- Formatação: Usa 4 espaços. O Prettier está configurado neste repositório, então podes executar `pnpm run prettier -- --write 'path/to/package/**/*.ts'`. [Se estiveres a usar asserções](https://github.com/SamVerschueren/tsd#assertions), adiciona a tag de exclusão `// prettier-ignore` para marcar linhas de código como excluídas da formatação:

  ```tsx
  // prettier-ignore
  // @ts-expect-error
  const incompleteThemeColorModes: Theme = { colors: { modes: { papaya: {
  ```
- Considera usar o VS Code `.vscode/settings.template.json` (ou equivalente para outros IDEs) para formar on save usando [VS Code dprint extension](https://marketplace.visualstudio.com/items?itemName=dprint.dprint)
- `function sum(nums: number[]): number`: Usa `ReadonlyArray` se a função não adicionar valores aos seus parâmetros.
- `interface Foo { new(): Foo; }`:
  Isto define um tipo de objeto que pode ser instanciado utilizando o operador `new`. Provavelmente deverias escrever `declare class Foo { constructor(); }`.
- `const Class: { new(): IClass; }`:
  Prefere a declaração de classe `class Class { constructor(); }` em vez de uma constante que pode ser instanciada utilizando o operador `new`.
- `getMeAT<T>(): T`:
  Se um parâmetro de tipo não aparecer no tipo de nenhum dos parâmetros da função, então não tens uma função genérica, tens apenas uma asserção de tipos disfarçada. Prefere utilizar uma asserção de tipos real, por exemplo, `getMeAT() as number`.
  Um exemplo onde um parâmetro de tipo é aceitável: `function id<T>(value: T): T;`.
  Um exemplo onde não é aceitável: `function parseJson<T>(json: string): T;`.
  Exceção: `new Map<string, number>()` é aceitável.
- Usar os tipos `Function` e `Object` quase nunca é uma boa ideia. Em 99% dos casos, é possível especificar um tipo mais específico. Por exemplo, `(x: number) => number` para [funções](https://www.typescriptlang.org/docs/handbook/functions.html#function-types) e `{ x: number, y: number }` para objetos. Se não tens a certeza sobre o tipo, [`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) é a escolha certa, não `Object`. Se a única certeza é que o tipo é algum tipo de objeto, usa o tipo [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type), não `Object` ou `{ [key: string]: any }`.
- `var foo: string | any`:
  Quando `any` é usado numa união de tipos, o tipo resultante ainda é `any`. Portanto, embora a anotação de tipo `string` possa _parecer_ útil, na realidade não oferece nenhuma verificação de tipo adicional do que simplesmente usar `any`.
  Dependendo da intenção, alternativas aceitáveis podem ser `any`, `string`, ou `string | object`.
- Consider using the VS Code `.vscode/settings.template.json` (or equivalent for other editors) to format on save with the [VS Code dprint extension](https://marketplace.visualstudio.com/items?itemName=dprint.dprint)

### Definition Owners

> TL;DR: não modifiques o ficheiro `.github/CODEOWNERS`, altera sempre a lista de responsáveis no `package.json`.

O DT tem o conceito de "Definition Owners", que são pessoas que querem manter a qualidade dos tipos de um módulo específico.

- Ao adicionar-te à lista, vais garantir que serás notificado (pelo teu utilizador GitHub) sempre que alguém fizer uma pull request ou abrir um issue sobre o package.
- As tuas revisões de PR terão uma precedência de importância maior para [o bot](https://github.com/microsoft/DefinitelyTyped-tools/tree/main/packages/mergebot), que mantém este repositório.
- Os mainteners do DT confiam nos Definition Ownerspara garantir um ecossistema estável, por isso não te adiciones apenas por adicionar.

Para te adicionares como um Definition Owners:

- Adiciona o teu nome ao final da linha, por exemplo: `// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>`.
- Ou se houver muitas pessoas, pode ser em várias linhas:

  ```typescript
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

Nota que esta lista _não_ é usada para dar crédito pelas contribuições; é utilizada apenas para gerir as revisões de PR.

Uma vez por semana, os Definition Owners são sincronizados para o ficheiro [.github/CODEOWNERS](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/.github/CODEOWNERS), que é a nossa fonte oficial.

## A história do Definitely Typed

O Definitely Typed é um dos repositórios mais ativos no GitHub. Talvez te perguntes como o projeto surgiu. @johnnyreilly escreveu uma história sobre o Definitely Typed. Ele conta a história dos primeiros dias do Definitely Typed, desde a criação do repositório por @borisyankov até se tornar uma parte essencial do ecossistema TypeScript. [Podes ler a história do Definitely Typed aqui](https://johnnyreilly.com/definitely-typed-the-movie).

## Perguntas Frequentes (FAQ)

#### Qual é exatamente a relação entre este repositório e os pacotes `@types` no npm?

A branch `master` é automaticamente publicada no scope `@types` no npm através das ferramentas [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher).

#### Já submeti uma pull request. Quanto tempo vai demorar até que seja integrada?

Depende, mas a maioria das pull requests são integradas dentro de uma semana. Algumas PRs podem ser integradas mais rapidamente pelos donos de um módulo. Em termos gerais:

> PRs que alteram apenas os tipos de um módulo, e têm testes correspondentes, serão integradas mais rapidamente.

As PRs aprovadas por um autor listado no cabeçalho da definição tendem a ser integradas mais rapidamente; PRs para novas definições demoram mais tempo, pois exigem mais revisão dos mainteners. Cada PR é revista por um membro da equipa do TypeScript ou do Definitely Typed antes de ser integrada, por isso, por favor, seja paciente, pois fatores humanos podem causar atrasos. Consulte o [Painel de Estado das Novas Pull Requests](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/5) para acompanhar o progresso enquanto as PRs abertas estão a ser revistas.

#### A minha PR já foi integrada; Quando é que o pacote `@types` no npm será atualizado?

Os pacotes no npm devem ser atualizados dentro de alguns minutos. Se já passou mais de uma hora, mencione o número da PR [no canal do Discord do Definitely Typed](https://discord.gg/typescript) e um maintener entrará em contacto com o membro responsável da equipa para investigar.

#### Estou a criar uma definição que depende de outra definição. Devo usar `<reference types="" />` ou um `import`?

Se o módulo que está a referenciar é um módulo externo (usa `export`), deve usar um `import`. Se o módulo que está a referenciar é um módulo de ambiente (usa `declare module`, ou declara apenas globalmente), deve usar `<reference types="" />`.

#### Alguns pacotes não têm `tslint.json`, e alguns ficheiros `tsconfig.json` não têm `"noImplicitAny": true`, `"noImplicitThis": true`, ou `"strictNullChecks": true`.

Então esses pacotes estão incorretos, e nós ainda não notámos. Pode ajudar enviando uma pull request para os corrigir.

#### Posso pedir uma definição?

Aqui estão as [definições atualmente solicitadas](https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/categories/request-a-new-types-package).

#### E as definições de tipo para o DOM?

Se os tipos fazem parte de um padrão web, devem ser enviados para o [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator), para que se tornem parte do `lib.dom.d.ts`.

#### Devo adicionar um namespace vazio para um pacote que não exporta um módulo, para usar imports no estilo ES6?

Alguns pacotes, como o [chai-http](https://github.com/chaijs/chai-http), exportam uma função.

Importar este módulo com o estilo de importação ES6, na forma `import * as foo from "foo";`, resulta no erro:

> erro TS2497: O módulo 'foo' resolve-se para uma entidade não-módulo e não pode ser importado com esta construção

Este erro pode ser suprimido ao fundir a declaração da função com um namespace vazio com o mesmo nome, mas esta prática é desencorajada. Isto é frequentemente mencionado nesta [resposta no Stack Overflow](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this), que discute esta prática.

É mais apropriado importar o módulo usando a sintaxe `import foo = require("foo");`. No entanto, se preferires usar um import padrão, como `import foo from "foo";`, tem duas opções:

- Podes usar a [opção do compilador `--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs) se o seu módulo suportar, em tempo de execução, um esquema de interop para módulos não-ECMAScript, ou seja, se os imports padrão funcionarem no seu ambiente (por exemplo, Webpack, SystemJS, esm).
- Podes usar a [opção do compilador `--esModuleInterop`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop) se quiser que o TypeScript trate dos interop não-ECMAScript (desde o TypeScript 2.7).

#### Um pacote usa `export =`, mas eu prefiro usar os imports padrão. Posso mudar `export =` para `export default`?

Como mencionado na pergunta anterior, lembra-te de que podes usar as opções de compilador [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs)
e [`--esModuleInterop`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop).

Não alteres a definição de tipos se ela já estiver correta. Para um pacote npm, `export =` é correto se `node -p 'require("foo")'` funcionar para importar um módulo, e `export default` é correto se `node -p 'require("foo").default'` funcionar para importar um módulo.

#### Quero usar funcionalidades do TypeScript 3.3 ou superior.

Nesse caso, deve adicionar este comentário na última linha do cabeçalho da sua definição (depois de `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`): `// Minimum TypeScript Version: 3.3`.

No entanto, se o teu projeto precisar de manter tipos compatíveis com o 3.1 ou superior _ao mesmo tempo que_ tipos compatíveis com o 3.0 ou inferior, terá de usar a funcionalidade `typesVersions`, disponível no TypeScript 3.1 ou superior.
Podes encontrar uma explicação detalhada desta funcionalidade na [documentação oficial do TypeScript](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#version-selection-with-typesversions).

Aqui está uma explicação curta para ajudar:

1. Vai precisar de adicionar um ficheiro `package.json` à tua definição de pacote, com os seguintes conteúdos:

```json
{
    "private": true,
    "types": "index",
    "typesVersions": {
        ">=3.1.0-0": { "*": ["ts3.1/*"] }
    }
}
```

2. Cria o subdiretório mencionado no campo `typesVersions` dentro do diretório de tipos (por exemplo, `ts3.1/`) e adiciona os tipos e testes específicos para a nova versão do TypeScript. Não é necessário incluir o cabeçalho de definição habitual nos ficheiros deste subdiretório `ts3.1/`.
3. Define as opções `baseUrl` e `typeRoots` no ficheiro `ts3.1/tsconfig.json` para os caminhos corretos. Elas devem ser semelhantes a isto:

```json
{
    "compilerOptions": {
        "baseUrl": "../../",
        "typeRoots": ["../../"]
    }
}
```

Podes verificar [bluebird](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f2512c2cf7cdcf9a487d989e288174e49b7839ab/types/bluebird) e [express](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/95a309dcd7dc2632b4ebab87a75329f17af62dbc/types/express) para exemplos.

#### Eu quero adicionar uma API da DOM que não está presente no TypeScript por padrão.

Isso provavelmente pertence ao [TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme). Verifica as regras lá.
Se o padrão ainda está em rascunho, deve ser incluído aqui.
Utiliza um nome que comece com `dom-` e inclui um link para o rascunho do padrão na secção de "Projeto" no cabeçalho.
Quando o padrão for finalizado, removê-lo-emos do Definitely Typed e descontinuaremos os pacotes `@types` relacionados.

#### Como é que as versões do pacote Definitely Typed se relacionam com as versões da biblioteca correspondente?

_NOTA: Esta secção pressupõe familiaridade com [versionamento semântico](https://semver.org/)_

Cada pacote no Definitely Typed é versionado quando é publicado no npm.
A ferramenta [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher), que publica pacotes `@types` no npm, define a versão do pacote utilizando o número de versão `major.minor` listado na primeira linha do ficheiro `index.d.ts`.
Por exemplo, aqui estão as primeiras linhas das [definições de tipo para Node](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/node/index.d.ts) para a versão `10.12.x` no momento da escrita:

```js
// Type definitions for Node.js 10.12
// Project: https://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 Definitely Typed <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
```

A versão do npm do package `@types/node` será `10.12.x` porque está indicado `10.12` no final da primeira linha.
Nota que o comentário da primeira linha no ficheiro `index.d.ts` deve conter apenas a versão `major.minor` (por exemplo, `10.12`) e não deve conter uma versão de patch (por exemplo, `10.12.4`).
Isto acontece porque apenas os números de release "major" e "minor" estão alinhados entre os pacotes de biblioteca e os pacotes de declaração de tipo.
O número de release do patch do pacote de declaração de tipo (`.0` em `10.12.0`) é inicializado como zero pelo Definitely Typed e é incrementado sempre que um novo pacote `@types/node` é publicado no npm para a mesma versão "major"/"minor" da biblioteca correspondente.

Às vezes, as versões dos pacotes de declaração de tipo e as versões dos pacotes de biblioteca podem ficar desalinhadas.Abaixo estão algumas razões do porquê, e do quanto isso pode ser problemático para os utilizadores de uma biblioteca.Apenas o último caso costuma ser problemático:

- Como referido acima, a versão do patch do pacote de declaração de tipo não está relacionada com a versão do patch da biblioteca.
  Isso permite que o Definitely Typed atualize as declarações de tipo de forma segura para a mesma versão "major"/"minor" de uma biblioteca.
- Se está a atualizar um pacote com uma nova funcionalidade, não te esqueças de atualizar o número da versão para alinhá-lo com a versão da biblioteca.
  Se os utilizadores tiverem a certeza de que as versões correspondem entre os pacotes JavaScript e os seus pacotes `@types`, então um `npm update` deve funcionar normalmente.
- É comum que atualizações de um package de declaração de tipos se atrasem em relação às atualizações da biblioteca, porque geralmente são os utilizadores das bibliotecas, e não os seus mainteners, que atualizam o Definitely Typed quando novas funcionalidades da biblioteca são lançadas.
  Pode haver um atraso de alguns dias, semanas ou até meses antes de um membro solidário da comunidade submeter um PR para atualizar o pacote de declaração de tipos para uma nova versão da biblioteca.
  Se isso incomoda-te, podes ser a mudança que quer ver no mundo e ser esse membro solidário da comunidade!

❗️ Se estás a atualizar as declarações de tipo para uma biblioteca, defina sempre a versão `major.minor` na primeira linha do `index.d.ts` que corresponda à versão da biblioteca que está a documentar! ❗️

#### Se uma biblioteca for atualizada para uma nova versão "major" com mudanças significativas, como devo atualizar a declaração de tipos?

[Versionamento semântico](https://semver.org/) exige que versões com mudanças significativas devem aumentar o número "major" da versão.
Por exemplo, uma biblioteca que remove uma função publicamente exportada depois da sua versão `3.5.8` deve aumentar a sua versão para `4.0.0` na próxima release.
Além disso, quando a versão `4.0.0` da biblioteca for publicada, o teu pacote de declaração de tipos no Definitely Typed deve também ser atualizado para `4.0.0`, incluindo quaisquer mudanças drásticas para a API da biblioteca.

Muitas bibliotecas têm uma grande base de utilizadores instalados (incluindo mainteners de outros pacotes que usam essa biblioteca como dependência), que não vão migrar imediatamente para a nova versão com mudanças drásticas, porque pode demorar meses até que um maintener tenha tempo para adaptar o código à nova versão.
Entretanto, os utilizadores das versões antigas da biblioteca podem querer continuar a utilizar as declarações de tipo para versões anteriores.

Se pretendes continuar a atualizar uma versão mais antiga de uma declaração de tipos de uma biblioteca, pode criar uma nova subpasta (por exemplo, `/v2/`), nomeá-la de acordo com a versão atual (que em breve será antiga), e copiar os ficheiros da versão atual para essa pasta.

Como o diretório raiz deve conter sempre as declarações de tipo para as últimas versões ("novas"), precisarás de fazer algumas alterações aos ficheiros no subdiretório da versão antiga para garantir que as referências de caminho relativo apontam para o subdiretório, e não para o diretório raiz.

1. Atualize os caminhos relativos no `tsconfig.json`, assim como no `tslint.json`.
2. Adicione regras de mapeamento de caminhos para garantir que os testes estão a ser executados sobre a versão pretendida.

Por exemplo, a biblioteca [`history`](https://github.com/ReactTraining/history/) introduziu mudanças significativas entre a versão `2.x` e `3.x`.
No entanto, como muitos utilizadores ainda estavam a utilizar a antiga versão `2.x`, o mantenedor que queria atualizar as declarações de tipo dessa biblioteca para a versão `3.x` adicionou uma pasta `v2` dentro do repositório "history", contendo as declarações de tipo para a versão anterior.

No momento de escrita, o ficheiro [history v2 `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/history/v2/tsconfig.json) está assim:

```json
{
    "compilerOptions": {
        "baseUrl": "../../",
        "typeRoots": ["../../"],
        "paths": {
            "history": ["history/v2"]
        }
    },
    "files": [
        "index.d.ts",
        "history-tests.ts"
    ]
}
```

Se houver outros packages no Definitely Typed que sejam incompatíveis com a nova versão, será necessário adicionar mapeamentos de caminho para a versão antiga.
Também será necessário fazer isso recursivamente para pacotes dependentes da versão antiga.

Por exemplo, `browser-sync` depende de `micromatch@2`, por isso o [`tsconfig.json` do browser-sync](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/browser-sync/tsconfig.json) tem um mapeamento de caminho para `"micromatch": [ "micromatch/v2" ]`.
Além disso, o `browser-sync-webpack-plugin` (que depende do `browser-sync`) também precisou ter o mesmo mapeamento de caminho adicionado (`"micromatch": [ "micromatch/v2" ]`) no seu `tsconfig.json` até que a sua dependência `browser-sync` fosse atualizada para a versão mais recente.

`/// <reference types=".." />` também não funcionará com mapeamentos de caminho, então as dependências devem usar `import`.

#### Como criar definições para package que podem ser usados globalmente e como um módulo?

O manual do TypeScript contém excelentes [informações gerais sobre como criar definições](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), e também [este exemplo de ficheiro de definição](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html), que mostra como criar uma definição usando a sintaxe de módulo no estilo ES6, ao mesmo tempo que especifica os objetos que são disponibilizados no scope global. Essa técnica é demonstrada de forma prática na [definição da `big.js`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts), que é uma biblioteca que pode ser carregada globalmente via tags de script numa página da web, ou importada via `require` ou `import` no estilo ES6.

Para testar como a sua definição pode ser usada tanto quando referenciada globalmente quanto como um módulo importável, crie uma pasta `test`, e coloque dois ficheiros de teste nela. Nomeie um como `NomeDaSuaBiblioteca-global.test.ts` e o outro como `NomeDaSuaBiblioteca-module.test.ts`. O ficheiro de teste _global_ deve verificar a definição de acordo com a forma como seria usada num script carregado numa página da web, onde a biblioteca está disponível no scope global - nesse caso, não deve especificar uma declaração de importação. O ficheiro de teste _module_ deve verificar a definição de acordo com a forma como seria usada quando importada (incluindo a(s) definição(ões) de `import`). Se especificar uma propriedade `files` no seu ficheiro `tsconfig.json`, certifique-se de incluir ambos os ficheiros de teste. Um [exemplo prático de como fazer isso](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) também está disponível na definição da `big.js`.

Note que não é obrigatório testar completamente a definição em cada ficheiro de teste - é suficiente testar apenas os elementos acessíveis globalmente no ficheiro de teste global e testar a definição no ficheiro de teste do módulo, ou vice-versa.

#### E os pacotes com scope?

Tipos para um package com scope `@foo/bar` devem estar em `types/foo__bar`. Note o underscore duplo.

Quando o `dts-gen` é usado para criar um package com scope, a propriedade `paths` precisa ser manualmente ajustada no ficheiro `tsconfig.json` gerado, para referenciar corretamente o segundo pacote com escopo:

```json
{
    "paths": {
        "@foo/*": ["foo__*"]
    }
}
```

## Licença

Este projeto está licenciado sob a licença MIT.

Os direitos de autor nos ficheiros de definição pertencem a cada contribuidor listado no início de cada ficheiro de definição.
