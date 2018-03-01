## FAQ

####¿Cuál es exactamente la relación entre este repositorio y los paquetes de `@types` en NPM?

La `master` branch es automáticamentes publicada en el alcande de los  `@types` en NPM gracias a los [types-publisher](https://github.com/Microsoft/types-publisher).

#### He enviado un pull request. ¿Cuánto tardará en ser merged?

Esto depende, pero la mayoría de los pull requests serán merged en alrededor de una semana. PRs que hayan sido autor aproved enumerado en el encabezado de las definiciones usualmente son merged más rapidamente; PRs para nuevas difiniciones tomarán más tiempo ya que requieren mas revisones de los mantenedores. Cada PR es revisado por un miembro de TypeScript o DefinitelyTyped antes de ser merged, so please be patient as human factors may cause delays. Check the [PR Burndown Board](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/3?card_filter_query=is%3Aopen) to see progress as maintainers work through the open PRs.

#### Mi PR ha sido merged; ¿cuándo sera actualizado el paquete de `@types` NPM?

Los paquetes NPM deberán ser actualizados en unas cuantas horas. si ha pasado mas de 24 horas, menciona a @RyanCavanaugh y/o a @andy-ms en el PR para investigar.

#### Estoy escribiendo una definición que depende de otra definición. Debería utilizar `<reference types="" />` o una import?

Si el modulo al cual te estás refiriendo es un modulo externo (utilice `export`), utilice una import.
Si el módulo al cual te refieres es un módulo ambiente (uses `declare module`, o simplemente aclare las globales), utilice `<reference types="" />`.

#### He notado que algunos paquetes aquí tienen `package.json`.

Normalmente no lo necesitaras. Cuando publicas un paquete normalmente nosotros automáticamente crearemos un `package.json` para eso.
Un `package.json` puede ser incluido por el bien de especificar dependencias Aqui tienen un [ejemplo](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json).
No aceptamos otros campos, tales como `"description"`, para que sean definidos manualmente.
Además, si necesitas referencia a una versión anterior de typings, debes hacerlo añadiendo `"dependencies": { "@types/foo": "x.y.z" }` Al package.json.

#### Algunos paquetes no tienen `tslint.json`, y algunos `tsconfig.json` están desaparecidos `"noImplicitAny": true`, `"noImplicitThis": true`, o `"strictNullChecks": true`.

Entonces están equivocados. Puedes ayudar pidiendo un pull request para arreglarlos.

#### Puedo pedir una definition?

Aquí están las [definiciones solicitadas actualmente](https://github.com/DefinitelyTyped/DefinitelyTyped/labels/Definition%3ARequest).

#### ¿Qué pasa con las type definitions para el DOM?

Si las types son parte de los estándares web, estas deberán ser contribuidas a [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator) so that they can become part of the default `lib.dom.d.ts`.

#### Un paquete utiliza `export =`, pero prefiero utilizar las import predeterminadas. ¿Puedo cambiar `export =` por `export default`?

Si la import predeterminada trabaja en tu ambiente, considera hacer un cambio en la [`--allowSyntheticDefaultImports`](http://www.typescriptlang.org/docs/handbook/compiler-options.html) opción compilar.
No cambies la type definition si es preciso.
Para un paquete NPM, `export =` es exacto si `node -p 'require("foo")'` es la export, y `export default` es exacto si `node -p 'require("foo").default'` es el export.

#### Quiero usar las características de TypeScript 2.1 o superior.

Entonces deberás añadir un comentario a la última línea de la definición en el encabezado (after `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`): `// TypeScript Version: 2.1`.

#### Quiero añadir un DOM API que no está presente en TypeScript por defecto.

Esto puede pertenecer a [TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme). vea las guías allí.
Si el estándar sigue siendo un borrador, este pertenece aquí.
Utilice un nombre que empiece con `dom-` e incluya un link al estándar como el "Project" con el link en el encabezado.
Cuando se gradua el modo borrador, Lo podremos eliminar desde DefinitelyTyped y desaprobar el paquete asociado `@types`.

#### Quiero actualizar un paquete a una nueva versión principal

Si intentas continuar actualizando la versión anterior del paquete, puedes crear una subcarpeta con la versión actual p.ej. `v2`, y copia los archivos existentes. Si es así, necesitarás:

1. Actualiza los relative paths en `tsconfig.json` al igual que `tslint.json`.
2. Añade las reglas path mapping para asegurarte de que la prueba se está ejecutando contra la versión prevista.

Por ejemplo [history v2 `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/history/v2/tsconfig.json) looks like:

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

Si hay otros paquetes en DefinitelyTyped que son incompatibles con la nueva versión, necesitarás agregar path mappings a la versión anterior. También deberá hacer esto para los paquetes que dependen de los paquetes según la versión anterior.

Por ejemplo, `react-router` depende de `history@2`, así que [react-router `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router/tsconfig.json) tiene un path mapping en "history": [ "history/v2" ]`;
transitivo `react-router-bootstrap` (que depende de `react-router`) también añade un path mapping en su [tsconfig.json](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router-bootstrap/tsconfig.json).

Ademas, `/// <reference types=".." />` no trabajara con path mapping, así que las dependencias deberán utilizar `import`.

#### ¿Cómo escribo definitions para paquetes que pueden ser usados globalmente y como un módulo?

El manual de TypeScript contiene excelente [información general para escribir definiciones](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), and also [this example definition file](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html) which shows how to create a definition using ES6-style module syntax, while also specifying objects made available to the global scope.  This technique is demonstrated practically in the [definition for big.js](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts), which is a library that can be loaded globally via script tag on a web page, or imported via require or ES6-style imports.

Para probar como puede ser usada tu definición cuando se refieren globalmente o como un módulo importado, crea una carpeta `test`, y coloca dos archivos de prueba en el.  Name one `YourLibraryName-global.test.ts` and the other `YourLibraryName-module.test.ts`.  The *global* test file should exercise the definition according to how it would be used in a script loaded on a web page where the library is available on the global scope - in this scenario you should not specify an import statement.  The *module* test file should exercise the definition according to how it would be used when imported (including the `import` statement(s)).  If you specify a `files` property in your `tsconfig.json` file, be sure to include both test files.  A [practical example of this](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) is also available on the big.js definition.

Porfavor tenga en cuenta que no es necesario para ejercer plenamente la definición en cada archivo de prueba - Es suficiente con probar solo los elementos globalmente accesibles en la prueba de archivos globar y ejercer la definición en el módulo del archivo de prueba, o viceversa.

#### ¿Qué pasa con paquetes scoped?

Types para un paquete scoped `@foo/bar` deberán ir en `types/foo__bar`. tenga en cuenta el doble guión bajo.

Cuando `dts-gen` es utilizado como scaffold en un paquete scoped, las propiedades `paths` deberan ser adaptadas manualmente en el paquete generado
`tsconfig.json` para referenciar correctamente el paquete scoped:

```json
{
    "paths":{
      "@foo/bar": ["foo__bar"]
    }
}
```


#### El historial de archivos en GitHub parece incompleto.

GitHub no le hace [support](http://stackoverflow.com/questions/5646174/how-to-make-github-follow-directory-history-after-renames) historial de archivos para archivos renombrados. Utilice [`git log --follow`](https://www.git-scm.com/docs/git-log) en su lugar.

#### Debería añadir un espacio de nombres vacío que no exporte un módulo que utilice ES6 style imports?

Algunos paquetes, como [chai-http](https://github.com/chaijs/chai-http), exportan una función.

importar este módulo con un ES6 style import de forma `import * como foo de "foo";` conduce al error:

> error TS2497: El módulo 'foo' resuelve a una entidad non-module y no puede ser importado utilizando esta construcción

Este error puede ser suprimido merging la declaración de función con un espacios de nombres vacíos de el mismo nombre, pero esta práctica no es recomendable.
Esto es un citado común [Respuestas de Stack Overflow](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this) con respecto a este asunto.

Es más apropiado importar este módulo utilizando la sintaxis `import foo = require("foo");`, o utilizando una importación predeterminada como `import foo from "foo";` if using the `--allowSyntheticDefaultImports` flag if your module runtime supports an interop scheme for non-ECMAScript modules as such.

## Licencia

Este proyecto es licenciado bajo la licencia MIT.

Los derechos de autor definidos en los archivos son respectivos de cada contribuidor enumerado al comienzo de cada archivo de definición.

[![Analytics](https://ga-beacon.appspot.com/UA-47495295-4/borisyankov/DefinitelyTyped)](https://github.com/igrigorik/ga-beacon)
