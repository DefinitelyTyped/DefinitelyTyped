# Typings for client-side usage of Google Apps Script

These typings are for the client-side (i.e. in the browser) API of Google Apps Script. Use them in combination with the [server side typings](https://www.npmjs.com/package/@types/google-apps-script).

# Usage

You can just `npm install` the package and do nothing more.

By default, any `google.script.run.myFunction()` function calls will work with any parameters. If you want the typings to be more specific, you can narrow them down by creating a declaration file in your project, which is as follows:

```ts
declare namespace google.script {
    interface PublicEndpoints {
        doGet(): GoogleAppsScript.HTML.HtmlOutput; // You probably use this special function as well
        myFunction(param1: string, param2: boolean): number; // Here you can specify any of your functions
    }
}
```
