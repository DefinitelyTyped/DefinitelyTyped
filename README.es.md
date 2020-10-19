# Definitely Typed [![Build Status](https://travis-ci.org/DefinitelyTyped/DefinitelyTyped.svg?branch=master)](https://travis-ci.org/DefinitelyTyped/DefinitelyTyped)

> El repositorio de definiciones de TypeScript de alta calidad.

Vea también el sitio web [definitelytyped.org](http://definitelytyped.org), aunque la información en este README está más actualizada.


## ¿Qué son los `declaration files`?

Vea el [Manual de TypeScript](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).


## ¿Cómo los obtengo?

### npm

Este es el método preferido. Solo está disponible para usuarios TypeScript 2.0+. Por ejemplo:

```sh
npm install --save-dev @types/node
```

Los types deberían ser incluidos automáticamente por el compilador.
Vea más en el [manual](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

Para un paquete NPM "foo", estos `typings` estarán en "@types/foo".
Si no puedes encontrar tu paquete, búscalo en [TypeSearch](https://microsoft.github.io/TypeSearch/).

Si aún no puedes encontrarlo, comprueba si el paquete ya [incluye](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) los typings.
Esto es provisto usualmente en el campo `"types"` o `"typings"` en el `package.json`,
o solo busca por cualquier archivo ".d.ts" en el paquete e inclúyelo manualmente con un `/// <reference path="" />`.

#### Versiones más viejas de Typescript (3.1 y anteriores)

Definitely Typed solamente prueba paquetes en versiones de TypeScript que son menores a 2 años.
Actualmente, las versiones 3.2 y posteriores están siendo probadas. Si estas usando TypeScript 2.0 a 3.1, puedes intentar instalando paquetes `@types` &mdash; la mayoría de los paquetes no usan los beneficios de Typescript más nuevos. No hay garantía de que funcionen.
Versiones soportadas:

Versión | Liberado | Fin de soporte
-- | -- | --
2.8 | Marzo 2018 | Marzo 2020
2.9 | Mayo 2018 | Mayo 2020
3.0 | Julio 2018 | Julio 2020
3.1 | Septiembre 2018 | Septiembre 2020
3.2 | Noviembre 2018 | Noviembre 2020
3.3 | Enero 2019 | Enero 2020
3.4 | Marzo 2019 | Marzo 2021
3.5 | Mayo 2019 | Mayo 2021
3.6 | Agosto 2019 | Agosto 2021
3.7 | Noviembre 2019 | Noviembre 2021
3.8 | Febrero 2020 | Febrero 2022
3.9 | Mayo 2020 | Mayo 2022
4.0 | Agosto 2020 | Agosto 2022

Los paquetes `@types` tienen etiquetas para las versiones de Typescript que explícitamente soportan, usualmente puedes obtener versiones más viejas de los paquetes anteriores a 2 años.
Por ejemplo, si ejecutas `npm dist-tags @types/react`, observaras que Typescript 2.5 puede usar types para react@16.0, a su vez, Typescript 2.6 y 2.7 pueden usar types para react@16.4.

|Etiqueta | Versión|
|----|---------|
|latest| 16.9.23|
|ts2.0| 15.0.1|
| ... | ... |
|ts2.5| 16.0.36|
|ts2.6| 16.4.7|
|ts2.7| 16.4.7|
| ... | ... |

#### Typescript 1.*

* Descárguelo manualmente desde la `master` branch de este repositorio
* [Typings](https://github.com/typings/typings)~~ (use las alternativas preferidas, typings es obsoleto)
* ~~[NuGet](http://nuget.org/packages?q=DefinitelyTyped)~~ (use las alternativas preferidas, la publicación DT type de nuget ha sido desactivada)

Tal vez debas añadir manualmente las [referencias](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).


## ¿Cómo puedo contribuir?

See [CONTRIBUTING.es.md](CONTRIBUTING.es.md).

## Licencia

Este proyecto es licenciado bajo la licencia MIT.

Los derechos de autor de cada archivo de definición son respectivos de cada contribuidor listado al comienzo de cada archivo de definición.
