# Definitely Typed

> O repositório para definições de tipo do TypeScript de *alta qualidade*.

Veja também o site [definitelytyped.org](http://definitelytyped.org), embora as informações neste README sejam mais atualizadas.

*Link para o [manual do Admin](./docs/admin.md)*

## Status atual

Essa seção acompanha a saúde do respositório e o processo de publicação.
Ela pode servir de ajuda para contribuidores que estejam passado por problemas com suas PRs e pacotes.

* Build mais recente com [tipagem checada/analisada pelo linter](https://github.com/Microsoft/dtslint) de forma limpa: [![Build Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.DefinitelyTyped?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=1&branchName=master)
* Todos os pacotes tem seus tipos checados/são analisadas pelo linter no typescript@next: [![Build status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/Nightly%20dtslint)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=8)
* Todos os pacotes estão sendo [publicados no NPM](https://github.com/microsoft/types-publisher) em menos de uma hora: [![Publish Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
* [typescript-bot](https://github.com/typescript-bot) esteve ativo no Definitely Typed [![Activity Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)
* [Atualizações do status da infraestrutura](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/44317) atual

Se algo aqui parece estar errado, ou se algum dos itens acima está falhando, por favor fale sobre este problema no [canal do Definitely Typed no Discord](https://discord.gg/typescript).

## O que são arquivos de declaração?

Veja o [manual do TypeScript](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).

## Como eu consigo eles?

### NPM

Esse é o método aconselhável:

```sh
npm install --save-dev @types/node
```

Os tipos então devem ser automaticamente incluidos pelo compilador.
Talvez você precise adicionar a referência `types` se não estiver usando módulos:

```ts
/// <reference types="node" />
```

Veja mais no [manual](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

Para um pacote "foo" do NPM, suas tipagens serão "@types/foo".
Se você não conseguir achar o pacote desejado, procure no [TypeSearch](https://microsoft.github.io/TypeSearch/).

Se você mesmo assim não consegue achar o pacote, verifique se ele [inclui](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) seus próprios tipos.
Isso normalmente é informado nos campos `"types"` ou `"typings"` no `package.json`,
ou apenas procure por qualquer arquivo ".d.ts" no pacote e manualmente inclua-os com `/// <reference path="" />`.

#### Versões antigas do TypeScript (3.1 e anteriores)

O Definitely Typed testa apenas pacotes em versões do TypeScript que tenham sido lançadas a menos de 2 anos.
Atualmente, as versões 3.2 e acima são testadas.
Se você está usando as versões 2.0 a 3.1 do TypeScript, você ainda pode tentar instalar os pacotes `@types` &mdash; a maioria dos pacotes não usam as novas funcionalidades chiques do TypeScript.
Mas não tem nenhuma garantia de que elas funcionarão.
Esta é a tabela de duração de suporte das versões.

Versão | Lançada em | Término do suporte
-- | -- | --
2.8 | Março 2018 | Março 2020
2.9 | Maio 2018 | Maio 2020
3.0 | Julho 2018 | Julho 2020
3.1 | Setembro 2018 | Setembro 2020
3.2 | Novembro 2018 | Novembro 2020
3.3 | Janeiro 2019 | Janeiro 2021
3.4 | Março 2019 | Março 2021
3.5 | Maio 2019 | Maio 2021
3.6 | Agosto 2019 | Agosto 2021
3.7 | Novembro 2019 | Novembro 2021
3.8 | Fevereiro 2020 | Fevereiro 2022
3.9 | Maio 2020 | Maio 2022
4.0 | Agosto 2020 | Agosto 2022

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
* ~~[NuGet](http://nuget.org/packages?q=DefinitelyTyped)~~ (use alternativas aconselhadas. A publicação de tipos do NuGet DT foi desligada)

Talvez você precise adicionar [referências](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) manuais.

## Como eu posso contribuir?

See [CONTRIBUTING.pt.md](CONTRIBUTING.pt.md).

## Licença

Esse projeto é licenciado sob a licença MIT.

Copyrights nos arquivos de definição são respectivos de cada contribuidor listado no começo de cada arquivo de definição.
