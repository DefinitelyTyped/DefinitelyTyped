# Types for @sap/approuter

For full help, please consult the README file in @sap/approuter (the source npm package) or
https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/LATEST/en-US/050d87a61faa4fb88f687abd7bdf16ce.html


## Limitations

These types (and their tests) are mostly extracted from the above-mentioned README file and `doc/extending.md`
in @sap/approuter (the source npm package). If some types are incorrect or missing, please open up an issue at
https://github.com/DefinitelyTyped/DefinitelyTyped, or, even better, add them by yourself via a Pull Request.


### Command Parser

Adding custom commands with commander.js is currently not supported.
The latest version of commander.js is typed but approuter is using an older version.


### Middlewares

There is a set of basic middlewares in the `lib/middleware` folder. The middlewares are currently not completely typed.
Feel free to provide the types if you need them.


### Express

Approuter uses express internally. The types (e.g. request, response) are currently based on the http package.
If there are features which requires express types, this could be changed in the future.
