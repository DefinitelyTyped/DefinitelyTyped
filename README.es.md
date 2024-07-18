# Definitely Typed [![Build Status](https://travis-ci.org/DefinitelyTyped/DefinitelyTyped.svg?branch=master)](https://travis-ci.org/DefinitelyTyped/DefinitelyTyped)

> El repositorio de definiciones de TypeScript de alta calidad.

_You can also read this README in [English](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md), [한국어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ko.md), [Русский](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md), [简体中文](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.zh-Hans.md), [Português](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.pt.md), [Italiano](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.it.md)
and [日本語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ja.md)!_

Vea también el sitio web [definitelytyped.org](http://definitelytyped.org), aunque la información en este README está más actualizada.

## ¿Qué son los `declaration files`?

Vea el [Manual de TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).

## ¿Cómo los obtengo?

### npm

Este es el método preferido. Solo está disponible para usuarios TypeScript 2.0+. Por ejemplo:

```sh
npm install --save-dev @types/node
```

Los types deberían ser incluidos automáticamente por el compilador.
Vea más en el [manual](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

Para un paquete npm "foo", estos `typings` estarán en "@types/foo".
Si no puedes encontrar tu paquete, búscalo en [TypeSearch](https://microsoft.github.io/TypeSearch/).

Si aún no puedes encontrarlo, comprueba si el paquete ya [incluye](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) los typings.
Esto es provisto usualmente en el campo `"types"` o `"typings"` en el `package.json`,
o solo busca por cualquier archivo ".d.ts" en el paquete e inclúyelo manualmente con un `/// <reference path="" />`.

### Support window

<img src="docs/support-window.svg#gh-light-mode-only" style="width:100%">
<img src="docs/support-window.svg#gh-dark-mode-only" style="width:100%">

<details>
<summary>Versiones más viejas de TypeScript</summary>

Los paquetes `@types` tienen etiquetas para las versiones de Typescript que explícitamente soportan, usualmente puedes obtener versiones más viejas de los paquetes anteriores a 2 años.
Por ejemplo, si ejecutas `npm dist-tags @types/react`, observaras que Typescript 2.5 puede usar types para react@16.0, a su vez, Typescript 2.6 y 2.7 pueden usar types para react@16.4.

| Etiqueta | Versión |
| -------- | ------- |
| latest   | 16.9.23 |
| ts2.0    | 15.0.1  |
| ...      | ...     |
| ts2.5    | 16.0.36 |
| ts2.6    | 16.4.7  |
| ts2.7    | 16.4.7  |
| ...      | ...     |

#### TypeScript 1.*

- Descárguelo manualmente desde la `master` branch de este repositorio
- [Typings](https://github.com/typings/typings)~~ (use las alternativas preferidas, typings es obsoleto)
- ~~[NuGet](https://nuget.org/packages?q=DefinitelyTyped)~~ (use las alternativas preferidas, la publicación DT type de nuget ha sido desactivada)

Tal vez debas añadir manualmente las [referencias](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).

</details>

## ¿Cómo puedo contribuir?

¡Definitely Typed solo trabaja gracias a contribuidores como tú!

### Prueba

Antes de compartir tu mejora con el mundo, úselo usted mismo.

#### Prueba editando un paquete existente

Para agregar nuevas funciones puedes usar el [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html).
También puedes editar directamente los types en `node_modules/@types/foo/index.d.ts`, o copiarlos de ahí y seguir los pasos explicados a continuación.

#### Prueba un nuevo paquete

Añade a tu `tsconfig.json`:

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

(También puedes usar `src/types`.)
Crea un `types/foo/index.d.ts` que contenga declaraciones del módulo "foo".
Ahora deberías poder importar desde `"foo"` a tu código y te enviará a un nuevo tipo de definición.
Entonces compila _y_ ejecuta el código para asegurarte que el tipo de definición en realidad corresponde a lo que suceda en el momento de la ejecución.
Una vez que hayas probado tus definiciones con el código real, haz un [PR](#haz-un-pull-request)
luego sigue las instrucciones para [editar un paquete existente](#editar-un-paquete-existente) o
[crear un nuevo paquete](#crear-un-nuevo-paquete).

### Haz un pull request

Una vez que hayas probado tu paquete, podrás compartirlo en Definitely Typed.

Primero, [bifurca](https://docs.github.com/es/get-started/quickstart/fork-a-repo) este repositorio, instala [node](https://nodejs.org/), y luego ejecuta el comando `npm install`.

#### Editar un paquete existente

- `cd types/<package to edit>`
- Haz cambios. Recuerda [editar las pruebas](#my-package-teststs).
  Si realiza cambios importantes, no olvide [actualizar una versión principal](#quiero-actualizar-un-paquete-a-una-nueva-versión-principal).
- También puede que quieras añadirle la sección "Definitions by" en el encabezado del paquete.
  - Esto hará que seas notificado (a través de tu nombre de usuario en GitHub) cada vez que alguien haga un pull request o issue sobre el paquete.
  - Haz esto añadiendo tu nombre al final de la línea, así como en `// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>`.
  - O si hay más personas, puede ser multiline
  ```typescript
  // Definitions by: Alice <https://github.com/alice>
  //                 Bob <https://github.com/bob>
  //                 Steve <https://github.com/steve>
  //                 John <https://github.com/john>
  ```
- [Ejecuta `npm test <package to test>`](#running-tests).

Cuando hagas un PR para editar un paquete existente, `dt-bot` deberá @-mencionar a los autores previos.
Si no lo hace, puedes hacerlo en el comentario asociado con el PR.

#### Crear un nuevo paquete

Si eres el autor de la librería, o puedes hacer un pull request a la biblioteca, [bundle types](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) en vez de publicarlo en Definitely Typed.

Si estás agregando typings para un paquete npm, crea un directorio con el mismo nombre.
Si el paquete al que le estás agregando typings no es para npm, asegúrate de que el nombre que escojas no genere problemas con el nombre del paquete en npm.
(Puedes usar `npm info <my-package>` para verificar la existencia del paquete `<my-package>`.)

Tu paquete debería tener esta estructura:

| Archivo                                        | Propósito                                                                                                                                   |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `index.d.ts`                                   | Este contiene los typings del paquete.                                                                                                      |
| [`<my-package>-tests.ts`](#my-package-teststs) | Este contiene una muestra del código con el que se realiza la prueba de escritura. Este código _no_ es ejecutable, pero sí es type-checked. |
| [`tsconfig.json`](#tsconfigjson)               | Este permite ejecutar `tsc` dentro del paquete.                                                                                             |

Generalas ejecutando `npm install -g dts-gen` y `dts-gen --dt --name <my-package> --template module`.
Ve todas las opciones en [dts-gen](https://github.com/microsoft/DefinitelyTyped-tools/tree/main/packages/dts-gen).

Los miembros de Definitely Typed frecuentemente monitorean nuevos PRs, pero ten en mente que la cantidad de PRs podrían ralentizar el proceso.

Para un buen paquete de ejemplo, vea [base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js).

#### Remover un paquete

Cuando un paquete [bundles](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) sus propios tipos, estos tipos deberán ser removidos de Definitely Typed para evitar que generen confusión.

Se puede remover ejecutando `pnpm run not-needed -- <typingsPackageName> <asOfVersion> [<libraryName>]`.

- `<typingsPackageName>`: Este es el nombre del directorio que tienes que eliminar.
- `<asOfVersion>`: Un stub será publicado a `@types/<typingsPackageName>` con esta versión. Debería ser más grande que cualquier versión publicada actualmente.
- `<libraryName>`: Un nombre descriptivo de la librería, p.ej. "Angular 2" en vez de "angular2". (Si es omitido, será idéntico a `<typingsPackageName>`.)

Cualquier otro paquete en Definitely Typed que referencie el paquete eliminado deberá ser actualizado para referenciar los tipos bundled. para hacer esto, [añade `package.json`](#packagejson) con `"dependencies": { "<libraryName>": "x.y.z" }`.

Si un paquete nunca estuvo en Definitely Typed, no será necesario añadirlo a `notNeededPackages.json`.

#### Running tests

Realiza una prueba ejecutando `npm test <package to test>` donde `<package to test>` es el nombre de tu paquete.
Este script utiliza [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint).

#### Naming

Si estás agregando typings para un paquete npm, crea un directorio con el mismo nombre.
Si el paquete al que le estás agregando typings no es para npm, asegúrate de que el nombre que escojas no genere problemas con el nombre del paquete en npm.
(Puedes usar `npm info <my-package>` para verificar la existencia del paquete `<my-package>`.)

Si un non-npm package entra en conflicto con un paquete npm existente, intenta añadir `-browser` al final del nombre para obtener `<my-package>-browser`.

#### `<my-package>-tests.ts`

Debería haber un archivo `<my-package>-tests.ts`, el cual es considerado tu archivo de prueba, junto con cualquier archivo `*.ts` que importe.
Si no ves ningún archivo de prueba en la carpeta del módulo, crea un `<my-package>-tests.ts`.
Estos archivos son usados para validar la API exportada desde los archivos `*.d.ts` los cuales son enviados como `@types/<my-package>`.

Los cambios a los archivos `*.d.ts` deberían incluir un cambio correspondiente en un archivo `*.ts` el cual muestre la API siendo usada, para que alguien no rompa accidentalmente el código en el que dependes.
Si no ves ningún archivo de prueba en la carpeta del módulo, crea un `<my-package>-tests.ts`.

Por ejemplo, este cambio a una función en un archivo `.d.ts` añadiendo un nuevo parámetro a una función:

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

Si estás preguntándote por dónde empezar con el código de prueba, los ejemplos en el README del módulo son un buen lugar para comenzar.

Puedes [validar tus cambios](#running-tests) con `npm test <package to test>` desde la raíz de este repositorio, el cual toma en cuenta los archivos cambiados.

Para afirmar que una expresión es de un tipo dado, utiliza `$ExpectType`. Para afirmar que una expresión causa un error de compilación, utiliza `@ts-expect-error`.

```js
// $ExpectType void
f(1);

// @ts-expect-error
f("one");
```

Para más detalles, vea el [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint#write-tests) readme.

#### Linter: `.eslintrc.json`

El archivo de configuración del linter, `tslint.json` debería contener `{ "extends": "@definitelytyped/dtslint/dt.json" }`, y no reglas adicionales.

Si por alguna razón alguna regla necesita ser deshabilitada, [deshabilítala para esa línea específica](https://palantir.github.io/tslint/usage/rule-flags/#comment-flags-in-source-code:~:text=%2F%2F%20tslint%3Adisable%2Dnext%2Dline%3Arule1%20rule2%20rule3...%20%2D%20Disables%20the%20listed%20rules%20for%20the%20next%20line) usando `// tslint:disable-next-line:[ruleName]` — no para todo el paquete, para que la deshabilitación pueda ser revisada. (Hay algunas configuraciones de lint heredadas que tienen contenido adicional, pero esto no debería ocurrir en un nuevo trabajo.)

#### `tsconfig.json`

`tsconfig.json` debería tener `noImplicitAny`, `noImplicitThis`, `strictNullChecks`, y `strictFunctionTypes` configurados a `true`.

También puedes configurar el `tsconfig.json` para añadir nuevos archivos, para agregar un `"target": "es6"` (necesitado por las funciones asíncronas), para agregar a la `"lib"`, o para agregar la opción de compilación `"jsx"`.

#### `package.json`

Normalmente no lo necesitarás. Cuando publicas un paquete normalmente nosotros automáticamente crearemos un `package.json` para eso.
Un `package.json` puede ser incluido por el bien de especificar dependencias. Aquí tienen un [ejemplo](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json).
No aceptamos otros campos, tales como `"description"`, para que sean definidos manualmente.
Además, si necesitas referencia a una versión anterior de typings, debes hacerlo añadiendo `"dependencies": { "@types/<libraryName>": "x.y.z" }` al `package.json`.

#### `OTHER_FILES.txt`

Si un archivo no es probado ni referenciado en `index.d.ts`, añádelo a un archivo llamado `OTHER_FILES.txt`. Este archivo es una lista de otros archivos que necesitan ser incluidos en el paquete de typings, un archivo por línea.

#### Errores comunes

- Primero, sigue el consejo del [manual](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html).
- Formatear: Utiliza 4 espacios.
- `function sum(nums: number[]): number`: Utiliza `ReadonlyArray` si una función no escribe a sus parámetros.
- `interface Foo { new(): Foo; }`:
  Este define el tipo de objeto que esten nuevos. Probablemente quieras `declare class Foo { constructor(); }`.
- `const Class: { new(): IClass; }`:
  Prefiere usar una declaración de clase `class Class { constructor(); }` En vez de una nueva constante.
- `getMeAT<T>(): T`:
  Si un tipo de parámetro no aparece en los tipos de ningún parámetro, no tienes una función genérica, solo tienes un afirmación del tipo disfrazado.
  Prefiera utilizar una afirmación de tipo real, p.ej. `getMeAT() as number`.
  Un ejemplo donde un tipo de parámetro es aceptable: `function id<T>(value: T): T;`.
  Un ejemplo donde no es aceptable: `function parseJson<T>(json: string): T;`.
  Una excepción: `new Map<string, number>()` está bien.
- Utilizando los tipos `Function` y `Object` casi nunca es una buena idea. En 99% de los casos es posible especificar un tipo más específico. Los ejemplos son `(x: number) => number` para [funciones](https://www.typescriptlang.org/docs/handbook/functions.html#function-types) y `{ x: number, y: number }` para objetos. Si no hay certeza en lo absoluto del tipo, [`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) es la opción correcta, no `Object`. Si el único hecho conocido sobre el tipo es que es un objecto, usa el tipo [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type), no `Object` o `{ [key: string]: any }`.
- `var foo: string | any`:
  Cuando es usado `any` en un tipo de unión, el tipo resultante todavía es `any`. Así que mientras la porción `string` de este tipo de anotación puede _verse_ útil, de hecho, no ofrece ningún typechecking adicional más que un simple `any`.
  Dependiendo de la intención, una alternativa aceptable puede ser `any`, `string`, o `string | object`.

### Propietarios de Definiciones

DT tiene el concepto de "Propietarios de Definiciones" que son personas que desean mantener la calidad de los tipos de un módulo en particular.

- Agregarte a la lista hará que recibas notificaciones (a través de tu nombre de usuario de GitHub) cada vez que alguien haga una solicitud de extracción o informe sobre el paquete.
- Tus revisiones de solicitudes de extracción tendrán una mayor importancia para [el bot](https://github.com/microsoft/DefinitelyTyped-tools/tree/main/packages/mergebot) que mantiene este repositorio.
- Los mantenedores de DT confían en los propietarios de las definiciones para asegurar un ecosistema estable, así que por favor, no te agregues ligeramente.

Para agregarte como Propietario de Definiciones:

- Agrega tu nombre al final de la línea, como en `// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>`.
- O si hay más personas, puede ser en varias líneas
  ```typescript
  // Definitions by: Alice <https://github.com/alice>
  //                 Bob <https://github.com/bob>
  //                 Steve <https://github.com/steve>
  //                 John <https://github.com/john>
  ```

Una vez a la semana, los Propietarios de Definiciones se sincronizan con el archivo [.github/CODEOWNERS](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/.github/CODEOWNERS), que es nuestra fuente de verdad.

## FAQ

#### ¿Cuál es exactamente la relación entre este repositorio y los paquetes de `@types` en npm?

La `master` branch es automáticamente publicada en el alcance de los `@types` en npm gracias a los [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher).

#### He enviado un pull request. ¿Cuánto tardará en ser merged?

Esto depende, pero la mayoría de los pull requests serán merged en alrededor de una semana. PRs que hayan sido aprobados por un autor listado en el encabezado de las definiciones usualmente son merged más rápidamente; PRs para nuevas definiciones tomarán más tiempo ya que requieren más revisiones de los mantenedores. Cada PR es revisado por un miembro de TypeScript o Definitely Typed antes de ser merged, por favor sé paciente debido a que factores humanos pueden causar retrasos. Revisa el [New Pull Request Status Board](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/5) para ver el progreso mientras los mantenedores trabajan en los PRs abiertos.

#### Mi PR ha sido merged; ¿cuándo será actualizado el paquete de `@types` npm?

Los paquetes npm deberán ser actualizados en unas cuantas horas. Si ha pasado más de 24 horas, menciona a @RyanCavanaugh y/o a @andy-ms en el PR para investigar.

#### Estoy escribiendo una definición que depende de otra definición. Debería utilizar `<reference types="" />` o una import?

Si el módulo al cual te estás refiriendo es un módulo externo (utiliza `export`), utilice una import.
Si el módulo al cual te refieres es un módulo ambiente (utiliza `declare module`, o simplemente declara las globales), utilice `<reference types="" />`.

#### Algunos paquetes no tienen `tslint.json`, y algunos `tsconfig.json` no contienen `"noImplicitAny": true`, `"noImplicitThis": true`, o `"strictNullChecks": true`.

Entonces están equivocados. Puedes ayudar enviando un pull request para arreglarlos.

#### Puedo pedir una definition?

Aquí están las [definiciones solicitadas actualmente](https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/categories/request-a-new-types-package).

#### ¿Qué pasa con las type definitions para el DOM?

Si las types son parte de los estándares web, estas deberán ser contribuidas a [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator) para que se hagan parte de la librería predeterminada `lib.dom.d.ts`.

#### Un paquete utiliza `export =`, pero prefiero utilizar las import predeterminadas. ¿Puedo cambiar `export =` por `export default`?

Si el import predeterminado trabaja en tu ambiente, considera hacer un cambio en la opción de compilación [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/compiler-options.html) opción compilar.
No cambies la type definition si es preciso.
Para un paquete npm, `export =` es exacto si `node -p 'require("foo")'` es la export, y `export default` es exacto si `node -p 'require("foo").default'` es el export.

#### Quiero usar las características de TypeScript 3.3 o superior.

Entonces deberás añadir un comentario a la última línea de la definición en el encabezado (despues de `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`): `// Minimum TypeScript Version: 3.3`.

#### Quiero añadir un DOM API que no está presente en TypeScript por defecto.

Esto puede pertenecer a [TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme). Vea las guías allí.
Si el estándar sigue siendo un borrador, este pertenece aquí.
Utilice un nombre que empiece con `dom-` e incluya un link al estándar como el "Project" con el link en el encabezado.
Cuando ya no sea un borrador, lo podremos eliminar desde DefinitelyType y hacer obsoleto el paquete `@types` asociado.

#### Quiero actualizar un paquete a una nueva versión principal

Si planeas continuar actualizando la versión anterior del paquete, puedes crear una subcarpeta con la versión actual p.ej. `v2`, y copia los archivos existentes. Si es así, necesitarás:

1. Actualiza las rutas relativas en `tsconfig.json` al igual que `tslint.json`.
2. Añadir reglas de mapeo de rutas para asegurarte de que la prueba se está ejecutando contra la versión prevista.

Por ejemplo [history v2 `tsconfig.json`](https://github.com/%44efinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/history/v2/tsconfig.json) se ve así:

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

Si hay otros paquetes en Definitely Typed que son incompatibles con la nueva versión, necesitarás mapear las rutas a la versión anterior. También deberá hacer esto para los paquetes que dependen de paquetes que dependen de una version anterior.

Por ejemplo, `browser-sync` depende de `micromatch@2`, así que [browser-sync `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/browser-sync/tsconfig.json) tiene una ruta mapeada a "micromatch": `[ "micromatch/v2" ]`;
transitivo así mismo, `browser-sync-webpack-plugin` (que depende de `browser-sync`) también añade una ruta mapeada en su [tsconfig.json](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/browser-sync-webpack-plugin/tsconfig.json).

Además, `/// <reference types=".." />` no trabajará con rutas mapeadas, así que las dependencias deberán utilizar `import`.

#### ¿Cómo escribo definitions para paquetes que pueden ser usados globalmente y como un módulo?

El manual de TypeScript contiene excelente [información general para escribir definiciones](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), además [este archivo de definiciones de ejemplo](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html) el cual muestra como crear una definición utilizando la sintaxis de módulo en ES6, asi como también especificando objetos que son disponibles en el alcance global. Esta técnica es demostrada prácticamente en la [definición para `big.js`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts), el cual es una librería que puede ser cargada globalmente a través de una etiqueta script en una página web, o importada vía require o imports estilo ES6.

Para probar como puede ser usada tu definición cuando se refieren globalmente o como un módulo importado, crea una carpeta `test`, y coloca dos archivos de prueba en él. nombra uno `YourLibraryName-global.test.ts` y el otro `YourLibraryName-module.test.ts`. El archivo de prueba _global_ debe ejercer la definición de acuerdo como va a ser usado en un script cargado en una página web donde la librería estará disponible en el alcance global - en este escenario no debes de especificar la sentencia de import. El archivo _módulo_ de prueba debe de ejercer la definición de acuerdo a como va a ser utilizado cuando sea importado (incluyendo las sentencias `import`). Si especificas una propiedad `files` en tu archivo `tsconfig.json`, asegurate de incluir ambos archivos de prueba. Un [ejemplo práctico de esto](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) es también disponible en la definición de `big.js`.

Por favor tenga en cuenta que no es necesario para ejercer plenamente la definición en cada archivo de prueba - Es suficiente con probar solo los elementos globalmente accesibles en la prueba de archivos globales y ejercer la definición en el módulo del archivo de prueba, o viceversa.

#### ¿Qué pasa con paquetes scoped?

Types para un paquete scoped `@foo/bar` deberán ir en `types/foo__bar`. tenga en cuenta el doble guión bajo.

Cuando `dts-gen` es utilizado como scaffold en un paquete scoped, las propiedades `paths` deberán ser adaptadas manualmente en el paquete generado
`tsconfig.json` para referenciar correctamente el paquete scoped:

```json
{
    "paths": {
        "@foo/*": ["foo__*"]
    }
}
```

#### Debería añadir un namespace que no exporte un módulo que utilice que utilice imports estilo ES6?

Algunos paquetes, como [chai-http](https://github.com/chaijs/chai-http), exportan una función.

importar este módulo con un ES6 style import de forma `import * as foo from "foo";` conduce al error:

> error ts2497: El módulo 'foo' se resuelve en una entidad que no es un módulo y no se puede importar mediante esta construcción

Este error puede ser suprimido al unir la declaración de una función con un namespace vacío del mismo nombre pero esta práctica no es recomendable.
Esto es un citado común [Respuestas de Stack Overflow](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this) con respecto a este asunto.

Es más apropiado importar este módulo utilizando la sintaxis `import foo = require("foo");`, o utilizando una importación predeterminada como `import foo from "foo";` si usas la bandera `--allowSyntheticDefaultImports` si la ejecución de tu módulo soporta un esquema de interoperación para módulos no ECMAScript como tal.

## Licencia

Este proyecto es licenciado bajo la licencia MIT.

Los derechos de autor de cada archivo de definición son respectivos de cada contribuidor listado al comienzo de cada archivo de definición.
