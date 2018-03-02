## FAQ

#### ¿Cuál es exactamente la relación entre este repositorio y los paquetes de `@types` en NPM?

La `master` branch es automaticamente publicada en el alcance de los  `@types` en NPM gracias a los [types-publisher](https://github.com/Microsoft/types-publisher).

#### He enviado un pull request. ¿Cuánto tardará en ser merged?

Esto depende, pero la mayoría de los pull requests serán merged en alrededor de una semana. PRs que hayan sido aprovados por un autor listado en el encabezado de las definiciones usualmente son merged más rápidamente; PRs para nuevas definiciones tomarán más tiempo ya que requieren más revisiones de los mantenedores. Cada PR es revisado por un miembro de TypeScript o DefinitelyTyped antes de ser merged, por favor se paciente debido a que factores humanos pueden causar retrasos. Revisa el [PR Burndown Board](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/3?card_filter_query=is%3Aopen) para ver el progreso mientras los mantenedores trabajan on los PRs abiertos.

#### Mi PR ha sido merged; ¿cuándo será actualizado el paquete de `@types` NPM?

Los paquetes NPM deberán ser actualizados en unas cuantas horas. Si ha pasado más de 24 horas, menciona a @RyanCavanaugh y/o a @andy-ms en el PR para investigar.

#### Estoy escribiendo una definición que depende de otra definición. Debería utilizar `<reference types="" />` o una import?

Si el modulo al cual te estás refiriendo es un módulo externo (utiliza `export`), utilice una import.
Si el módulo al cual te refieres es un módulo ambiente (utiliza `declare module`, o simplemente declara las globales), utilice `<reference types="" />`.

#### He notado que algunos paquetes aquí tienen `package.json`.

Normalmente no lo necesitaras. Cuando publicas un paquete normalmente nosotros automáticamente crearemos un `package.json` para eso.
Un `package.json` puede ser incluido por el bien de especificar dependencias. Aquí tienen un [ejemplo](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json).
No aceptamos otros campos, tales como `"description"`, para que sean definidos manualmente.
Además, si necesitas referencia a una versión anterior de typings, debes hacerlo añadiendo `"dependencies": { "@types/foo": "x.y.z" }` al package.json.

#### Algunos paquetes no tienen `tslint.json`, y algunos `tsconfig.json` no contienen `"noImplicitAny": true`, `"noImplicitThis": true`, o `"strictNullChecks": true`.

Entonces están equivocados. Puedes ayudar enviando un pull request para arreglarlos.

#### Puedo pedir una definition?

Aquí están las [definiciones solicitadas actualmente](https://github.com/DefinitelyTyped/DefinitelyTyped/labels/Definition%3ARequest).

#### ¿Qué pasa con las type definitions para el DOM?

Si las types son parte de los estándares web, estas deberán ser contribuidas a [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator) para que se hagan parte de la librería predeterminada  `lib.dom.d.ts`.

#### Un paquete utiliza `export =`, pero prefiero utilizar las import predeterminadas. ¿Puedo cambiar `export =` por `export default`?

Si la import predeterminada trabaja en tu ambiente, considera hacer un cambio en la opción de compilación [`--allowSyntheticDefaultImports`](http://www.typescriptlang.org/docs/handbook/compiler-options.html) opción compilar.
No cambies la type definition si es preciso.
Para un paquete NPM, `export =` es exacto si `node -p 'require("foo")'` es la export, y `export default` es exacto si `node -p 'require("foo").default'` es el export.

#### Quiero usar las características de TypeScript 2.1 o superior.

Entonces deberás añadir un comentario a la última línea de la definición en el encabezado (despues de `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`): `// TypeScript Version: 2.1`.

#### Quiero añadir un DOM API que no está presente en TypeScript por defecto.

Esto puede pertenecer a [TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme). Vea las guías allí.
Si el estándar sigue siendo un borrador, este pertenece aquí.
Utilice un nombre que empiece con `dom-` e incluya un link al estándar como el "Project" con el link en el encabezado.
Cuando ya no sea un borrador, lo podremos eliminar desde DefinitelyType y hacer obsoleto el paquete `@types` asociado.

#### Quiero actualizar un paquete a una nueva versión principal

Si planeas continuar actualizando la versión anterior del paquete, puedes crear una subcarpeta con la versión actual p.ej. `v2`, y copia los archivos existentes. Si es así, necesitarás:

1. Actualiza las rutas relativas en `tsconfig.json` al igual que `tslint.json`.
2. Añadir reglas de mapeo de rutas para asegurart de que la prueba se está ejecutando contra la versión prevista.

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

Si hay otros paquetes en DefinitelyTyped que son incompatibles con la nueva versión, necesitaras mapear las rutas a la versión anterior. También deberá hacer esto para los paquetes que dependen de paquetes que dependen de una version anterior.

Por ejemplo, `react-router` depende de `history@2`, así que [react-router `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router/tsconfig.json) tiene una ruta mapeada a "history": `[ "history/v2" ]`;
transitivo así mismo, `react-router-bootstrap` (que depende de `react-router`) también añade una ruta mapeada en su [tsconfig.json](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router-bootstrap/tsconfig.json).

Además, `/// <reference types=".." />` no trabajara con rutas mapeadas, así que las dependencias deberán utilizar `import`.

#### ¿Cómo escribo definitions para paquetes que pueden ser usados globalmente y como un módulo?

El manual de TypeScript contiene excelente [información general para escribir definiciones](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), ademas [este archivo de definiciones de ejemplo](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html)  el cual muestra como crear una definición utilizando la sintaxis de módulo en ES6, asi como también especificando objetos que son disponibles en el alcance global. Esta técnica es demostrada practicamente en la [definición para big.js](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts), el cual es una librería que puede ser cargada globalmente a travéz de una etiqueta script en una página web, o importada via require o imports estilo ES6.

Para probar como puede ser usada tu definición cuando se refieren globalmente o como un módulo importado, crea una carpeta `test`, y coloca dos archivos de prueba en él.  nombra uno `YourLibraryName-global.test.ts` y el otro `YourLibraryName-module.test.ts`.  El archivo de prueba _global_ debe ejercer la definición de acuerdo como va a ser usado en un script cargado en una página web donde la librería estará disponible en el alcance global - en este escenario no debes de especificar la sentencia de import. El archivo _módulo_ de prueba debe de ejercer la definición de acuerdo a como va a ser utilizado cuando sea importado (incluyendo las sentencias `import`). Si especificas un propiedad `files` en tu archivo tsconfig.json, asegurate de incluir ambos archivos de prueba. Un [ejemplo práctico de esto](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) es también disponible en la definición de big.js.

Por favor tenga en cuenta que no es necesario para ejercer plenamente la definición en cada archivo de prueba - Es suficiente con probar solo los elementos globalmente accesibles en la prueba de archivos globales y ejercer la definición en el módulo del archivo de prueba, o viceversa.

#### ¿Qué pasa con paquetes scoped?

Types para un paquete scoped `@foo/bar` deberán ir en `types/foo__bar`. tenga en cuenta el doble guion bajo.

Cuando `dts-gen` es utilizado como scaffold en un paquete scoped, las propiedades `paths` deberán ser adaptadas manualmente en el paquete generado
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

[![Analytics](https://ga-beacon.appspot.com/UA-47495295-4/borisyankov/DefinitelyTyped)](https://github.com/igrigorik/ga-beacon)
