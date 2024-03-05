/**
 * Good Logs
 * Copyright(c) 2024 Bally Lomibao
 * MIT Licensed
 */
import { Request, Response, NextFunction } from 'express'

 interface IRequestExtended extends Request {
  body: { [key: string]: string | undefined }
}

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
   function req(req: IRequestExtended, res: Response, next: NextFunction): void

  /**
   * Preset log type for connection status update in the console
   * @param db - connection call
   * @param isConnected - send the status of the db connection
   */
  function db(host: any, dbName: any, isConnected: boolean): void
}

export = goodlog



