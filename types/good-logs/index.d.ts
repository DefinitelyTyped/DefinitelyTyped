/**
 * Good Logs
 * Copyright(c) 2024 Bally Lomibao
 * MIT Licensed
 */
import { Request, Response, NextFunction } from 'express'

 export interface RequestExtended extends Request {
  body: { [key: string]: string | undefined }
}

  /**
   * Custom log color to your  message to the console
   * @param message
   * @param color @see - https://www.npmjs.com/package/colors
   */
  export function custom(color: any, ...message: string[]): void

  /**
   * log message to console
   * @param message - message to log : default
   */
  export function log(...message: string[]): void

  /**
   * log message in type info
   * @param message - message to log : type info
   */
  export function info(...message: string[]): void

  /**
   * log message in type warn
   * @param message - message to log : type warn
   */
  export function warn(...message: string[]): void

  /**
   * log message in type array in a table
   * @param message - message to log : type array/object
   */
  export function tbl(...message: any[]): void

  /**
   * log message in type error
   * @param message - message to log : type error
   */
  export function error(...message: string[]): void

  /**
   * log message in type debug
   * @param message - message to log : type debug
   */
  export function debug(...message: string[]): void

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
  export function server(port: any, apiRoot: string, isProd: boolean, isConnected: boolean): void

  /**
   *
   * @param req - request {IRequestExtended}
   * @param res  - response {Response}
   * @param next  - next {NextFunction}
   * @return void
   */
  export function req(req: RequestExtended, res: Response, next: NextFunction): void

  /**
   * Preset log type for connection status update in the console
   * @param db - connection call
   * @param isConnected - send the status of the db connection
   */
  export function db(host: any, dbName: any, isConnected: boolean): void






