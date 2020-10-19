# Definitely Typed

> Репозиторий для _высококачественных_ определений типов TypeScript.

Также посетите веб-сайт [definitelytyped.org](https://definitelytyped.org), хотя информация в этом README более свежая.

_Вы также можете прочитать этот README на [английском](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md), [испанском](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md), [корейском](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ko.md) и [китайском](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.cn.md)._

## Текущее состояние

Этот раздел отслеживает состояние репозитория и процесс публикации.
Это может быть полезно для участников, испытывающих любые проблемы с PR'ами и пакетами.

-   Самая последняя сборка [прошла проверку-типов/линтинг](https://github.com/Microsoft/dtslint) полностью: [![Статус сборки](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.DefinitelyTyped?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=1&branchName=master)
-   Все пакеты проходят проверку-типов/линтинг полностью на `typescript@next`: [![Build status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/Nightly%20dtslint)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=8)
-   Все пакеты [публикуются на npm](https://github.com/Microsoft/types-publisher) в течении часа: [![Статус публикации](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
-   [typescript-bot](https://github.com/typescript-bot) проявляет активность на Definitely Typed [![Статус активности](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)

Если что-то здесь кажется неправильным или что-либо из вышеперечисленного не работает, пожалуйста, поднимите проблему на [канале DefiniteTyped Discord](https://discord.gg/typescript).

## Что такое файлы декларации (файлы описания/объявления типов)?

Смотрите [руководство по TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).

## Как их получить?

### npm

Это предпочтительный метод. Например:

```sh
npm install --save-dev @types/node
```

Компилятор должен автоматически подключить типы.
Вам может понадобиться добавить связь `types`, если вы не используете модули:

```ts
/// <reference types="node" />
```

Подробнее смотрите в [справочнике](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

Для NPM пакета `foo`, описания будут находиться в `@types/foo`.
Если вы не можете найти необходимый вам пакет, ищите его в [TypeSearch](https://microsoft.github.io/TypeSearch/).

Если вы все еще не можете найти его, проверьте [включает](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) ли пакет собственную типизацию.
Обычно это отражается в поле `"types"` или `"typings"` файла `package.json`, или просто ищите любые файлы «.d.ts» в пакете и вручную включайте их с помощью `/// <reference path="" />`.

#### Typescript 3.1 и старее

Начиная с ноября 2019 года, Definitely Typed тестирует пакеты только на версиях Typescript, которым меньше двух лет.
Если вы используете Typescript от 2.0 до 3.1, вы все равно можете попробовать установить пакеты `@types` - большинство пакетов не используют новые функции Typescript.
Но нет гарантии, что они будут работать.

График обновлений:

Версия | Релиз | Окончание поддержки
-- | -- | --
2.8 | Март 2018 | Март 2020
2.9 | Май 2018 | Май 2020
3.0 | Июль 2018 | Июль 2020
3.1 | Сентябрь 2018 | Сентябрь 2020
3.2 | Ноябрь 2018 | Ноябрь 2020
3.3 | Январь 2019 | Январь 2021
3.4 | Март 2019 | Март 2021
3.5 | Май 2019 | Май 2021
3.6 | Август 2019 | Август 2021
3.7 | Ноябрь 2019 | Ноябрь 2021
3.8 | Февраль 2020 | Февраль 2022
3.9 | Май 2020 | Май 2022
4.0 | Август 2020 | Август 2022


Пакеты, которые существовали до ноября 2019 года, могут иметь более старые версии, которые явно помечены как совместимые с более старыми версиями Typescript; используйте тег "ts2.6" для Typescript 2.6, например.

Например, если вы запустите `npm dist-tags @types/react`, вы увидите следующую таблицу, которая показывает, что у react@16.4 есть типы для Typescript 2.6:

| Tag      | Version   |
| -------- | --------- |
| `latest` | `16.9.11` |
| `ts2.0`  | `15.0.1`  |
| …        | …         |
| `ts2.6`  | `16.4.7`  |
| …        | …         |

### Typescript 1.8 и старше

-   [Typings](https://github.com/typings/typings)
-   ~~[NuGet](https://nuget.org/packages?q=DefinitelyTyped)~~ (используйте предпочтительные альтернативы, публикация типа nuget DT отключена)
-   Вручную загрузите из ветки `master` этого репозитория

Возможно, вам придется добавить ручные [ссылки (references)](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).

## Как я могу внести свой вклад?

See [CONTRIBUTING.ru.md](CONTRIBUTING.ru.md).

## Лицензия

Этот проект лицензирован по лицензии MIT.

Авторские права на файлы определений принадлежат каждому участнику, указанному в начале каждого файла определения.
