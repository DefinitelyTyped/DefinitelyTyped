
[![Made with TypeScript](https://img.shields.io/badge/-Made_with_TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](#)


# Installation

> `npm install --save @types/good-logs`

# Summary

This package contains type definitions for good-logs.

# Details

Files were exported from https://github.com/ballyalley-o/good-logs

<br/>

> [index.d.ts](https://github.com/ballyalley-o/good-logs/blob/main/index.d.ts)

```ts
import { Request, Response, NextFunction } from 'express'

export interface IRequestExtended extends Request {
  body: { [key: string]: string | undefined }
}

export interface IExpressController {
  (req: IRequestExtended, res: Response, next: NextFunction): void
}

declare namespace goodlog {
  /**
   * Custom log
   * @param message
   * @param color
   */
    function custom(color: any, ...message: string[]): void

  /**
   * log message to console
   * @param message - message to log : default
   */
   function log(...message: string[]): void

  /**
   * log message in type info
   * @param message - message to log : type info
   */
   function info(...message: string[]): void

  /**
   * log message in type warn
   * @param message - message to log : type warn
   */
   function warn(...message: string[]): void

  /**
   * log message in type array in a table
   * @param message - message to log : type array/object
   */
   function tbl(...message: any[]): void

  /**
   * log message in type error
   * @param message - message to log : type error
   */
   function error(...message: string[]): void

  /**
   * log message in type debug
   * @param message - message to log : type debug
   */
   function debug(...message: string[]): void

  /**
   *
   * @param port - server port
   * @param apiRoot - api version
   * @param isProd - send the status of the server environment
   * @param isConnected - send the status of the server connection
   * @return void
   */
  //  declare function server(
  //   port: number,
  //   apiRoot: string,
  //   isProd: boolean,
  //   isConnected: boolean
  // ): void
   function server(port: any, apiRoot: string, isProd: boolean, isConnected: boolean): void


  /**
   *
   * @param req - request {IRequestExtended}
   * @param res  - response {Response}
   * @param next  - next {NextFunction}
   * @return void
   */
   function req(req: RequestExtended, res: Response, next: NextFunction): void

  /**
   * Preset log type for connection status update in the console
   * @param db - connection call
   * @param isConnected - send the status of the db connection
   */
   function db(host: any, dbName: any, isConnected: boolean): void
}


declare enum Key {
  // @error keys
  Connected = 'CONNECTED 🟢',
  NotConnected = 'NOT CONNECTED 🔴',
  Environment = ' ENVIRONMENT: ',
  Production = 'production',
  Development = 'development',

  // @logger - req
  ReqMethod = ' Request Method: ',
  ReqURL = ' Request URL: ',
  ReqTime = ' Request Time: ',

  // @logger - server
  ServerPort = ' SERVER PORT: ',
  ServerAPIVersion = ' API VERSION: ',
  ServerStatus = ' SERVER STATUS: ',
}

```
> colors from 'colors'
```ts
/**
 * @module colors
 * @description - imported from the colors module library
 * @see - https://www.npmjs.com/package/colors
 */
declare module 'colors' {
  interface String {
    // text colors
    magenta: string
    black: string
    cyan: string
    yellow: string
    blue: string
    red: string
    green: string
    gray: string
    grey: string
    // bright text colors
    brightRed: string
    brightGreen: string
    brightYellow: string
    brightBlue: string
    brightMagenta: string
    brightCyan: string
    brightWhite: string
    // background colors
    bgCyan: string
    bgRed: string
    bgYellow: string
    bgMagenta: string
    bgBlue: string
    bgGreen: string
    bgWhite: string
    bgBlack: string
    bgGray: string
    bgGrey: string
    // bright background colors
    bgBrightRed: string
    bgBrightGreen: string
    bgBrightYellow: string
    bgBrightBlue: string
    bgBrightMagenta: string
    bgBrightCyan: string
    // styles
    inverse: string
    bold: string
    italic: string
    hidden: string
    strikethrough: string
    underline: string
    dim: string
    reset: string

  }
}

```


# Credits

- Express js
- Colors


<br/>

# License

This project is licensed under the MIT license



These definitions were written by [Bally Lomibao](https://github.com/ballyalley-o).
