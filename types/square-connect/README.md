# Type definitions for square-connect

This is an unofficial package of type definitions for [square-connect][1] which is _mostly_ generated automatically by [swagger-codegen][2]. 
In case you are facing some issues - feel free to contribute or open an issue.

# Installation

`npm i @types/square-connect`
> make sure that `square-connect` package is installed too

# @todo

* Declare `ApiClient` properly 
* Declare methods definition for missing classes (ex: `export class SomeApi {}`)
* Change `any`s in methods definitions (ex: `doSomething(...args: Array<any>)`) regarding the [docs][5]

# Contribution

* Clone the [DefinitelyTyped][3] project
    * or update if you already have it (`git fetch upstream && git reset --hard upstream/master`)
* Add your changes and commit them (in case of error in [api.json][4] too, let the Square team know about it)
* Test your changes:
    * `npm run lint square-connect`
    * `npm run test`

[1]: https://docs.connect.squareup.com
[2]: https://github.com/swagger-api/swagger-codegen
[3]: https://github.com/DefinitelyTyped/DefinitelyTyped
[4]: https://github.com/square/connect-api-specification/blob/master/api.json
[5]: https://github.com/square/connect-nodejs-sdk#documentation-for-api-endpoints
