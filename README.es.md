# Definitely Typed [![Build Status](https://travis-ci.org/DefinitelyTyped/DefinitelyTyped.svg?branch=master)](https://travis-ci.org/DefinitelyTyped/DefinitelyTyped)

> El repositorio de definiciones de TypeScript de alta calidad.

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

#### Versiones más viejas de TypeScript (3.6 y anteriores)

Definitely Typed solamente prueba paquetes en versiones de TypeScript que son menores a 2 años.
Actualmente, las versiones 3.7 y posteriores están siendo probadas. Si estas usando TypeScript 2.0 a 3.6, puedes intentar instalando paquetes `@types` &mdash; la mayoría de los paquetes no usan los beneficios de Typescript más nuevos. No hay garantía de que funcionen.
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
4.1 | Noviembre 2020  | Noviembre 2022
4.2 | Febrero 2021  | Febrero 2023
4.3 | Mayo 2021 | Mayo 2023
4.4 | Agosto 2021 | Agosto 2023

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

#### TypeScript 1.*

* Descárguelo manualmente desde la `master` branch de este repositorio
* [Typings](https://github.com/typings/typings)~~ (use las alternativas preferidas, typings es obsoleto)
* ~~[NuGet](https://nuget.org/packages?q=DefinitelyTyped)~~ (use las alternativas preferidas, la publicación DT type de nuget ha sido desactivada)

Tal vez debas añadir manualmente las [referencias](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).


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
Ahora deberías poder importar desde `"foo"` a tu código y te enviara a un nuevo tipo de definición.
Entonces compila *y* ejecuta el código para asegurarte que el tipo de definición en realidad corresponde a lo que suceda en el momento de la ejecución.
Una vez que hayas probado tus definiciones con el código real, haz un [PR](#haz-un-pull-request)
luego sigue las instrucciones para [editar un paquete existente](#editar-un-paquete-existente) o
[crear un nuevo paquete](#crear-un-nuevo-paquete).


### Haz un pull request

Una vez que hayas probado tu paquete, podrás compartirlo en Definitely Typed.

Primero, haz un [fork](https://guides.github.com/activities/forking/) en este repositorio, instala [node](https://nodejs.org/), y luego ejecuta la `npm install`.


#### Editar un paquete existente

* `cd types/<package to edit>`
* Haz cambios. Recuerda [editar las pruebas](#my-package-teststs).
  Si realiza cambios importantes, no olvide [actualizar una versión principal](#quiero-actualizar-un-paquete-a-una-nueva-versión-principal).
* También puede que quieras añadirle la sección "Definitions by" en el encabezado del paquete.
  - Esto hará que seas notificado (a través de tu nombre de usuario en GitHub) cada vez que alguien haga un pull request o issue sobre el paquete.
  - Haz esto añadiendo tu nombre al final de la línea, así como en `// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>`.
  - O si hay más personas, puede ser multiline
  ```typescript
  // Definitions by: Alice <https://github.com/alice>
  //                 Bob <https://github.com/bob>
  //                 Steve <https://github.com/steve>
  //                 John <https://github.com/john>
  ```
* [Ejecuta `npm test <package to test>`](#running-tests).

Cuando hagas un PR para editar un paquete existente, `dt-bot` deberá @-mencionar a los autores previos.
Si no lo hace, puedes hacerlo en el comentario asociado con el PR.


#### Crear un nuevo paquete

Si eres el autor de la librería, o puedes hacer un pull request a la biblioteca, [bundle types](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) en vez de publicarlo en Definitely Typed.

Si estás agregando typings para un paquete npm, crea un directorio con el mismo nombre.
Si el paquete al que le estás agregando typings no es para npm, asegúrate de que el nombre que escojas no genere problemas con el nombre del paquete en npm.
(Puedes usar `npm info <my-package>` para verificar la existencia del paquete `<my-package>`.)

Tu paquete debería tener esta estructura:

| Archivo | Propósito |
| --- | --- |
| `index.d.ts` | Este contiene los typings del paquete. |
| [`<my-package>-tests.ts`](#my-package-teststs) | Este contiene una muestra del código con el que se realiza la prueba de escritura. Este código *no* es ejecutable, pero sí es type-checked. |
| [`tsconfig.json`](#tsconfigjson) | Este permite ejecutar `tsc` dentro del paquete. |
| [`tslint.json`](#linter-tslintjson) | Permite linting. |

Generalas ejecutando `npm install -g dts-gen` y `dts-gen --dt --name <my-package> --template module`.
Ve todas las opciones en [dts-gen](https://github.com/Microsoft/dts-gen).

Los miembros de Definitely Typed frecuentemente monitorean nuevos PRs, pero ten en mente que la cantidad de PRs podrían ralentizar el proceso.

Para un buen paquete de ejemplo, vea [base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js).

#### Remover un paquete

Cuando un paquete [bundles](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) sus propios tipos, estos tipos deberán ser removidos de Definitely Typed para evitar que generen confusión.

Se puede remover ejecutando `npm run not-needed -- <typingsPackageName> <asOfVersion> [<libraryName>]`.
- `<typingsPackageName>`: Este es el nombre del directorio que tienes que eliminar.
- `<asOfVersion>`: Un stub será publicado a `@types/<typingsPackageName>` con esta versión. Debería ser más grande que cualquier versión publicada actualmente.
- `<libraryName>`: Un nombre descriptivo de la librería, p.ej. "Angular 2" en vez de "angular2". (Si es omitido, será idéntico a `<typingsPackageName>`.)

Cualquier otro paquete en Definitely Typed que referencie el paquete eliminado deberá ser actualizado para referenciar los tipos bundled. para hacer esto, [añade `package.json`](#packagejson) con `"dependencies": { "<libraryName>": "x.y.z" }`.

Si un paquete nunca estuvo en Definitely Typed, no será necesario añadirlo a `notNeededPackages.json`.

#### Running tests

Realiza una prueba ejecutando `npm test <package to test>` donde `<package to test>` es el nombre de tu paquete.
Este script utiliza [dtslint](https://github.com/Microsoft/dtslint).

#### Naming

Si estás agregando typings para un paquete npm, crea un directorio con el mismo nombre.
Si el paquete al que le estás agregando typings no es para npm, asegúrate de que el nombre que escojas no genere problemas con el nombre del paquete en npm.
(Puedes usar `npm info <my-package>` para verificar la existencia del paquete `<my-package>`.)

If a non-npm package conflicts with an existing npm package try adding -browser to the end of the name to get `<my-package>-browser`.

#### `<my-package>-tests.ts`

There should be a `<my-package>-tests.ts` file, which is considered your test file, along with any `*.ts` files it imports.
If you don't see any test files in the module's folder, create a `<my-package>-tests.ts`.
These files are used to validate the API exported from the `*.d.ts` files which are shipped as `@types/<my-package>`.

Changes to the `*.d.ts` files should include a corresponding `*.ts` file change which shows the API being used, so that someone doesn't accidentally break code you depend on.
If you don't see any test files in the module's folder, create a `<my-package>-tests.ts`

For example, this change to a function in a `.d.ts` file adding a new param to a function:

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
+ // $ExpectError
+ const resultWithOptions = twoslash("//", {  })
```

If you're wondering where to start with test code, the examples in the README of the module are a great place to start.

You can [validate your changes](#running-tests) with `npm test <package to test>` from the root of this repo, which takes changed files into account.

Para afirmar que una expresión es de un tipo dado, utilice `$ExpectType`. Para afirmar que una expresión causa un error de compilación, utilice `$ExpectError`.

```js
// $ExpectType void
f(1);

// $ExpectError
f("one");
```

Para más detalles, vea el [dtslint](https://github.com/Microsoft/dtslint#write-tests) readme.

#### Linter: `tslint.json`

The linter configuration file, `tslint.json` should contain `{ "extends": "dtslint/dt.json" }`, and no additional rules.

If for some reason some rule needs to be disabled, [disable it for that specific line](https://palantir.github.io/tslint/usage/rule-flags/#comment-flags-in-source-code:~:text=%2F%2F%20tslint%3Adisable%2Dnext%2Dline%3Arule1%20rule2%20rule3...%20%2D%20Disables%20the%20listed%20rules%20for%20the%20next%20line) using `// tslint:disable-next-line:[ruleName]` — not for the whole package, so that disabling can be reviewed. (There are some legacy lint configs that have additional contents, but these should not happen in new work.)

#### `tsconfig.json`

`tsconfig.json` should have `noImplicitAny`, `noImplicitThis`, `strictNullChecks`, and `strictFunctionTypes` set to `true`.

También puedes configurar el `tsconfig.json` para añadir nuevos archivos, para agregar un `"target": "es6"` (necesitado por las funciones asíncronas), para agregar a la `"lib"`, o para agregar la opción de compilación `"jsx"`.

#### `package.json`

Normalmente no lo necesitarás. Cuando publicas un paquete normalmente nosotros automáticamente crearemos un `package.json` para eso.
Un `package.json` puede ser incluido por el bien de especificar dependencias. Aquí tienen un [ejemplo](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json).
No aceptamos otros campos, tales como `"description"`, para que sean definidos manualmente.
Además, si necesitas referencia a una versión anterior de typings, debes hacerlo añadiendo `"dependencies": { "@types/<libraryName>": "x.y.z" }` al `package.json`.

#### `OTHER_FILES.txt`

If a file is neither tested nor referenced in `index.d.ts`, add it to a file named `OTHER_FILES.txt`. This file is a list of other files that need to be included in the typings package, one file per line.

#### Errores comunes

* Primero, sigue el consejo del [manual](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html).
* Formatear: Utiliza 4 espacios.
* `function sum(nums: number[]): number`: Utiliza `ReadonlyArray` si una función no escribe a sus parámetros.
* `interface Foo { new(): Foo; }`:
  Este define el tipo de objeto que esten nuevos. Probablemente quieras `declare class Foo { constructor(); }`.
* `const Class: { new(): IClass; }`:
  Prefiere usar una declaración de clase `class Class { constructor(); }` En vez de una nueva constante.
* `getMeAT<T>(): T`:
  Si un tipo de parámetro no aparece en los tipos de ningún parámetro, no tienes una función genérica, solo tienes un afirmación del tipo disfrazado.
  Prefiera utilizar una afirmación de tipo real, p.ej. `getMeAT() as number`.
  Un ejemplo donde un tipo de parámetro es aceptable: `function id<T>(value: T): T;`.
  Un ejemplo donde no es aceptable: `function parseJson<T>(json: string): T;`.
  Una excepción: `new Map<string, number>()` está bien.
* Utilizando los tipos `Function` y `Object` casi nunca es una buena idea. En 99% de los casos es posible especificar un tipo más específico. Los ejemplos son `(x: number) => number` para [funciones](https://www.typescriptlang.org/docs/handbook/functions.html#function-types) y `{ x: number, y: number }` para objetos. Si no hay certeza en lo absoluto del tipo, [`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) es la opción correcta, no `Object`. Si el único hecho conocido sobre el tipo es que es un objecto, usa el tipo [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type), no `Object` o `{ [key: string]: any }`.
* `var foo: string | any`:
  Cuando es usado `any` en un tipo de unión, el tipo resultante todavía es `any`. Así que mientras la porción `string` de este tipo de anotación puede _verse_ útil, de hecho, no ofrece ningún typechecking adicional más que un simple `any`.
  Dependiendo de la intención, una alternativa aceptable puede ser `any`, `string`, o `string | object`.

### Definition owners

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

## FAQ

#### ¿Cuál es exactamente la relación entre este repositorio y los paquetes de `@types` en npm?

La `master` branch es automáticamente publicada en el alcance de los  `@types` en npm gracias a los [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher).

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

Aquí están las [definiciones solicitadas actualmente](https://github.com/DefinitelyTyped/DefinitelyTyped/labels/Definition%3ARequest).

#### ¿Qué pasa con las type definitions para el DOM?

Si las types son parte de los estándares web, estas deberán ser contribuidas a [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator) para que se hagan parte de la librería predeterminada  `lib.dom.d.ts`.

#### Un paquete utiliza `export =`, pero prefiero utilizar las import predeterminadas. ¿Puedo cambiar `export =` por `export default`?

Si la import predeterminada trabaja en tu ambiente, considera hacer un cambio en la opción de compilación [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/compiler-options.html) opción compilar.
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

Por ejemplo [history v2 `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/history/v2/tsconfig.json) se ve así:

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

Si hay otros paquetes en Definitely Typed que son incompatibles con la nueva versión, necesitarás mapear las rutas a la versión anterior. También deberá hacer esto para los paquetes que dependen de paquetes que dependen de una version anterior.

Por ejemplo, `react-router` depende de `history@2`, así que [react-router `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router/tsconfig.json) tiene una ruta mapeada a "history": `[ "history/v2" ]`;
transitivo así mismo, `react-router-bootstrap` (que depende de `react-router`) también añade una ruta mapeada en su [tsconfig.json](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router-bootstrap/tsconfig.json).

Además, `/// <reference types=".." />` no trabajará con rutas mapeadas, así que las dependencias deberán utilizar `import`.

#### ¿Cómo escribo definitions para paquetes que pueden ser usados globalmente y como un módulo?

El manual de TypeScript contiene excelente [información general para escribir definiciones](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), además [este archivo de definiciones de ejemplo](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html)  el cual muestra como crear una definición utilizando la sintaxis de módulo en ES6, asi como también especificando objetos que son disponibles en el alcance global. Esta técnica es demostrada prácticamente en la [definición para `big.js`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts), el cual es una librería que puede ser cargada globalmente a través de una etiqueta script en una página web, o importada vía require o imports estilo ES6.

Para probar como puede ser usada tu definición cuando se refieren globalmente o como un módulo importado, crea una carpeta `test`, y coloca dos archivos de prueba en él.  nombra uno `YourLibraryName-global.test.ts` y el otro `YourLibraryName-module.test.ts`.  El archivo de prueba _global_ debe ejercer la definición de acuerdo como va a ser usado en un script cargado en una página web donde la librería estará disponible en el alcance global - en este escenario no debes de especificar la sentencia de import. El archivo _módulo_ de prueba debe de ejercer la definición de acuerdo a como va a ser utilizado cuando sea importado (incluyendo las sentencias `import`). Si especificas una propiedad `files` en tu archivo `tsconfig.json`, asegurate de incluir ambos archivos de prueba. Un [ejemplo práctico de esto](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) es también disponible en la definición de `big.js`.

Por favor tenga en cuenta que no es necesario para ejercer plenamente la definición en cada archivo de prueba - Es suficiente con probar solo los elementos globalmente accesibles en la prueba de archivos globales y ejercer la definición en el módulo del archivo de prueba, o viceversa.

#### ¿Qué pasa con paquetes scoped?

Types para un paquete scoped `@foo/bar` deberán ir en `types/foo__bar`. tenga en cuenta el doble guión bajo.

Cuando `dts-gen` es utilizado como scaffold en un paquete scoped, las propiedades `paths` deberán ser adaptadas manualmente en el paquete generado
`tsconfig.json` para referenciar correctamente el paquete scoped:

```json
{
    "paths":{
      "@foo/*": ["foo__*"]
    }
}
```

#### El historial de archivos en GitHub parece incompleto.

GitHub no le hace [support](https://stackoverflow.com/questions/5646174/how-to-make-github-follow-directory-history-after-renames) historial de archivos para archivos renombrados. Utilice [`git log --follow`](https://www.git-scm.com/docs/git-log) en su lugar.

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
