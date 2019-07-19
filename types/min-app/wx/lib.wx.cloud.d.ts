/*! *****************************************************************************
Copyright (c) 2018 Tencent, Inc. All rights reserved. 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
***************************************************************************** */

/////////////////////
///// WX Cloud Apis
/////////////////////

/**
 * Common interfaces and types
 */

interface IAPIError {
  errMsg: string,
}

interface IAPIParam<T = any> {
  config?: ICloudConfig,
  success?: (res: T) => void,
  fail?: (err: IAPIError) => void,
  complete?: (val: T | IAPIError) => void,
}

interface IAPISuccessParam {
  errMsg: string,
}

type IAPICompleteParam = IAPISuccessParam | IAPIError

type IAPIFunction<T, P extends IAPIParam<T>> = (param: P) => Promise<T> | any

interface IInitCloudConfig {
  env?: string | {
    database?: string,
    functions?: string,
    storage?: string,
  },
  traceUser?: boolean,
}

interface ICloudConfig {
  env?: string,
  traceUser?: boolean,
}

interface IICloudAPI {
  init: (config?: IInitCloudConfig) => void,
  [api: string]: AnyFunction | IAPIFunction<any, any>,
}

interface ICloudService {
  name: string,

  getAPIs: () => { [name: string]: IAPIFunction<any, any> },
}

interface ICloudServices {
  [serviceName: string]: ICloudService
}

interface ICloudMetaData {
  session_id: string,
}

declare class InternalSymbol {

}

type AnyObject = {
  [x: string]: any
}

type AnyArray = any[]

type AnyFunction = (...args: any[]) => any

/**
 * original wx
 */

declare namespace WXNS {

  interface AnyObject {
    [key: string]: any
  }

  interface IAPIParam<T> {
    success?: (res: T) => void,
    fail?: (err: IAPIError) => void,
    complete?: (val: T | IAPIError) => void,
  }

  interface CommonAPIResult {
    errMsg: string,
  }

  interface IAPIError {
    errMsg: string,
  }

  interface IProgressUpdateEvent {
    progress: number,
    totalBytesWritten: number,
    totalBytesExpectedToWrite: number,
  }

  interface operateWXData {
    (param: any): void
  }

  interface uploadFile {
    /**
     * upload file
     * @param param 
     */
    (param: IUploadFileParam): IUploadFileTask
  }

  interface IUploadFileParam extends IAPIParam<IUploadFileSuccessResult> {
    url: string,
    filePath: string,
    name: string,
    header?: AnyObject,
  }

  interface IUploadFileSuccessResult extends CommonAPIResult {
    data: string,
    statusCode: number,
  }

  interface IUploadFileTask {
    onProgressUpdate: (fn: (event: IProgressUpdateEvent) => void) => void,
    abort: AnyFunction,
  }

  interface downloadFile {
    /**
     * download file
     * @param param 
     */
    (param: IDownloadFileParam): IDownloadFileTask
  }

  interface IDownloadFileParam extends IAPIParam<IDownloadFileSuccessResult> {
    url: string,
    header?: AnyObject,
  }

  interface IDownloadFileSuccessResult extends CommonAPIResult {
    tempFilePath: string,
    statusCode: number,
  }

  interface IDownloadFileTask {
    onProgressUpdate: (fn: (event: IProgressUpdateEvent) => void) => void,
    abort: AnyFunction,
  }

  interface request {
    (param: IRequestParam): IRequestTask
  }

  interface IRequestParam extends IAPIParam<IRequestSuccessResult> {
    url: string,
    data?: AnyObject | string | ArrayBuffer,
    header?: AnyObject,
    method?: string,
    dataType?: string,
    responseType?: string,
  }

  interface IRequestSuccessResult {
    data: AnyObject | string | ArrayBuffer,
    statusCode: number,
    header: AnyObject,
  }

  interface IRequestTask {
    abort: () => void
  }

  interface getFileInfo {
    (param: IGetFileInfoParam): void
  }

  interface IGetFileInfoParam extends IAPIParam<IGetFileInfoSuccessResult> {
    filePath: string,
    digestAlgorithm?: string,
  }

  interface IGetFileInfoSuccessResult {
    size: number,
    digest: string,
  }

}

declare namespace wx {
  interface WX {
    cloud: {
      init: (config?: ICloudConfig) => void,

      // callFunction: (param: ICloud.CallFunctionParam) => Promise<ICloud.CallFunctionResult> | void,

      // uploadFile: (param: ICloud.UploadFileParam) => Promise<ICloud.UploadFileResult> | WXNS.IUploadFileTask,
      // downloadFile: (param: ICloud.DownloadFileParam) => Promise<ICloud.DownloadFileResult> | WXNS.IDownloadFileTask,
      // getTempFileURL: (param: ICloud.GetTempFileURLParam) => Promise<ICloud.GetTempFileURLResult> | void,
      // deleteFile: (param: ICloud.DeleteFileParam) => Promise<ICloud.DeleteFileResult> | void,

      callFunction(param: OQ<ICloud.CallFunctionParam>): void
      callFunction(param: RQ<ICloud.CallFunctionParam>): Promise<ICloud.CallFunctionResult>

      uploadFile(param: OQ<ICloud.UploadFileParam>): WXNS.IUploadFileTask
      uploadFile(param: RQ<ICloud.UploadFileParam>): Promise<ICloud.UploadFileResult>

      downloadFile(param: OQ<ICloud.DownloadFileParam>): WXNS.IDownloadFileTask
      downloadFile(param: RQ<ICloud.DownloadFileParam>): Promise<ICloud.DownloadFileResult>

      getTempFileURL(param: OQ<ICloud.GetTempFileURLParam>): void,
      getTempFileURL(param: RQ<ICloud.GetTempFileURLParam>): Promise<ICloud.GetTempFileURLResult>

      deleteFile(param: OQ<ICloud.DeleteFileParam>): void,
      deleteFile(param: RQ<ICloud.DeleteFileParam>): Promise<ICloud.DeleteFileResult>

      database: (config?: ICloudConfig) => DB.Database,
    }
  }
}

declare namespace ICloud {

  interface ICloudAPIParam<T = any> extends IAPIParam<T> {
    config?: ICloudConfig
  }

  // === API: callFunction ===
  export type CallFunctionData = AnyObject

  export interface CallFunctionResult extends IAPISuccessParam {
    result: AnyObject | string | undefined,
  }

  export interface CallFunctionParam extends ICloudAPIParam<CallFunctionResult> {
    name: string,
    data?: CallFunctionData,
    slow?: boolean,
  }
  // === end ===

  // === API: uploadFile ===
  export interface UploadFileResult extends IAPISuccessParam {
    fileID: string,
    statusCode: number,
  }

  export interface UploadFileParam extends ICloudAPIParam<UploadFileResult> {
    cloudPath: string,
    filePath: string,
    header?: AnyObject,
  }
  // === end ===

  // === API: downloadFile ===
  export interface DownloadFileResult extends IAPISuccessParam {
    tempFilePath: string,
    statusCode: number,
  }

  export interface DownloadFileParam extends ICloudAPIParam<DownloadFileResult> {
    fileID: string,
    cloudPath?: string,
  }
  // === end ===

  // === API: getTempFileURL ===
  export interface GetTempFileURLResult extends IAPISuccessParam {
    fileList: GetTempFileURLResultItem[],
  }

  export interface GetTempFileURLResultItem {
    fileID: string,
    tempFileURL: string,
    maxAge: number,
    status: number,
    errMsg: string,
  }

  export interface GetTempFileURLParam extends ICloudAPIParam<GetTempFileURLResult> {
    fileList: string[],
  }
  // === end ===

  // === API: deleteFile ===
  interface DeleteFileResult extends IAPISuccessParam {
    fileList: DeleteFileResultItem[],
  }

  interface DeleteFileResultItem {
    fileID: string,
    status: number,
    errMsg: string,
  }

  interface DeleteFileParam extends ICloudAPIParam<DeleteFileResult> {
    fileList: string[],
  }
  // === end ===

}

// === Database ===
declare namespace DB {
  /**
   * The class of all exposed cloud database instances
   */
  export class Database {

    public readonly config: ICloudConfig
    public readonly command: DatabaseCommand
    public readonly Geo: Geo
    public readonly serverDate: () => ServerDate

    private constructor();

    collection(collectionName: string): CollectionReference

  }

  export class CollectionReference extends Query {

    public readonly collectionName: string
    public readonly database: Database

    private constructor(name: string, database: Database)

    doc(docId: string | number): DocumentReference

    // add(options: IAddDocumentOptions): Promise<IAddResult> | void

    add(options: OQ<IAddDocumentOptions>): void
    add(options: RQ<IAddDocumentOptions>): Promise<IAddResult>

  }

  export class DocumentReference {

    private constructor(docId: string | number, database: Database)

    field(object: object): this

    // get(options?: IGetDocumentOptions): Promise<IQuerySingleResult> | void

    // set(options?: ISetSingleDocumentOptions): Promise<ISetResult> | void

    // update(options?: IUpdateSingleDocumentOptions): Promise<IUpdateResult> | void

    // remove(options?: IRemoveSingleDocumentOptions): Promise<IRemoveResult> | void

    // get(options?: IGetDocumentOptions): Promise<IQuerySingleResult> | void
    get(): Promise<IQuerySingleResult>
    get(options: OQ<IGetDocumentOptions>): void
    get(options: RQ<IGetDocumentOptions>): Promise<IQuerySingleResult>

    // set(options?: ISetSingleDocumentOptions): Promise<ISetResult> | void
    set(): Promise<ISetResult>
    set(options: OQ<ISetSingleDocumentOptions>): void
    set(options: RQ<ISetSingleDocumentOptions>): Promise<ISetResult>

    // update(options?: IUpdateSingleDocumentOptions): Promise<IUpdateResult> | void
    update(): Promise<IUpdateResult>
    update(options: OQ<IUpdateSingleDocumentOptions>): void
    update(options: RQ<IUpdateSingleDocumentOptions>): Promise<IUpdateResult>

    // remove(options?: IRemoveSingleDocumentOptions): Promise<IRemoveResult> | void
    remove(): Promise<IRemoveResult>
    remove(options: OQ<IRemoveSingleDocumentOptions>): void
    remove(options: RQ<IRemoveSingleDocumentOptions>): Promise<IRemoveResult>

  }

  export class Query {

    where(condition: IQueryCondition): Query

    orderBy(fieldPath: string, order: string): Query

    limit(max: number): Query

    skip(offset: number): Query

    field(object: object): Query

    // get(options?: IGetDocumentOptions): Promise<IQueryResult> | void

    // // update(options?: IUpdateDocumentOptions): Promise<IUpdateResult> | void

    // // remove(options?: IRemoveDocumentOptions): Promise<IRemoveResult> | void

    // count(options?: ICountDocumentOptions): Promise<ICountResult> | void

    // get(options?: IGetDocumentOptions): Promise<IQueryResult> | void
    get(): Promise<IQueryResult>
    get(options: OQ<IGetDocumentOptions>): void
    get(options: RQ<IGetDocumentOptions>): Promise<IQueryResult>

    // update(options?: IUpdateDocumentOptions): Promise<IUpdateResult> | void

    // remove(options?: IRemoveDocumentOptions): Promise<IRemoveResult> | void

    // count(options?: ICountDocumentOptions): Promise<ICountResult> | void
    count(): Promise<ICountResult>
    count(options: OQ<ICountDocumentOptions>): void
    count(options: RQ<ICountDocumentOptions>): Promise<ICountResult>

  }

  export interface DatabaseCommand {

    eq(val: any): DatabaseQueryCommand
    neq(val: any): DatabaseQueryCommand
    gt(val: any): DatabaseQueryCommand
    gte(val: any): DatabaseQueryCommand
    lt(val: any): DatabaseQueryCommand
    lte(val: any): DatabaseQueryCommand
    in(val: any[]): DatabaseQueryCommand
    nin(val: any[]): DatabaseQueryCommand

    and(...expressions: (DatabaseLogicCommand | IQueryCondition)[]): DatabaseLogicCommand
    or(...expressions: (DatabaseLogicCommand | IQueryCondition)[]): DatabaseLogicCommand

    set(val: any): DatabaseUpdateCommand
    remove(): DatabaseUpdateCommand
    inc(val: number): DatabaseUpdateCommand
    mul(val: number): DatabaseUpdateCommand

    push(...values: any[]): DatabaseUpdateCommand
    pop(): DatabaseUpdateCommand
    shift(): DatabaseUpdateCommand
    unshift(...values: any[]): DatabaseUpdateCommand

  }

  export enum LOGIC_COMMANDS_LITERAL {
    AND = 'and',
    OR = 'or',
    NOT = 'not',
    NOR = 'nor',
  }

  export class DatabaseLogicCommand {

    public fieldName: string | InternalSymbol
    public operator: LOGIC_COMMANDS_LITERAL | string
    public operands: any[]

    _setFieldName(fieldName: string): DatabaseLogicCommand

    and(...expressions: (DatabaseLogicCommand | IQueryCondition)[]): DatabaseLogicCommand
    or(...expressions: (DatabaseLogicCommand | IQueryCondition)[]): DatabaseLogicCommand

  }

  export enum QUERY_COMMANDS_LITERAL {
    EQ = 'eq',
    NEQ = 'neq',
    GT = 'gt',
    GTE = 'gte',
    LT = 'lt',
    LTE = 'lte',
    IN = 'in',
    NIN = 'nin',
  }

  export class DatabaseQueryCommand extends DatabaseLogicCommand {

    public operator: QUERY_COMMANDS_LITERAL | string

    _setFieldName(fieldName: string): DatabaseQueryCommand

    eq(val: any): DatabaseLogicCommand
    neq(val: any): DatabaseLogicCommand
    gt(val: any): DatabaseLogicCommand
    gte(val: any): DatabaseLogicCommand
    lt(val: any): DatabaseLogicCommand
    lte(val: any): DatabaseLogicCommand
    in(val: any[]): DatabaseLogicCommand
    nin(val: any[]): DatabaseLogicCommand

  }

  export enum UPDATE_COMMANDS_LITERAL {
    SET = 'set',
    REMOVE = 'remove',
    INC = 'inc',
    MUL = 'mul',
    PUSH = 'push',
    POP = 'pop',
    SHIFT = 'shift',
    UNSHIFT = 'unshift',
  }

  export class DatabaseUpdateCommand {

    public fieldName: string | InternalSymbol
    public operator: UPDATE_COMMANDS_LITERAL
    public operands: any[]

    constructor(operator: UPDATE_COMMANDS_LITERAL, operands: any[], fieldName?: string | InternalSymbol)

    _setFieldName(fieldName: string): DatabaseUpdateCommand
  }

  export class Batch {

  }

  /**
   * A contract that all API provider must adhere to
   */
  export class APIBaseContract<PROMISE_RETURN, CALLBACK_RETURN, PARAM extends IAPIParam, CONTEXT = any> {

    getContext(param: PARAM): CONTEXT

    /**
     * In case of callback-style invocation, this function will be called
     */
    getCallbackReturn(param: PARAM, context: CONTEXT): CALLBACK_RETURN

    getFinalParam<T extends PARAM>(param: PARAM, context: CONTEXT): T

    run<T extends PARAM>(param: T): Promise<PROMISE_RETURN>

  }

  export interface GeoPointConstructor {
    new (longitude: number, latitide: number): GeoPoint
  }

  export interface Geo {
    Point: {
      new (longitude: number, latitide: number): GeoPoint
      (longitude: number, latitide: number): GeoPoint
    }
  }

  export abstract class GeoPoint {
    public longitude: number
    public latitude: number

    constructor(longitude: number, latitude: number)

    toJSON(): object
    toString(): string
  }

  export interface IServerDateOptions {
    offset: number,
  }

  export abstract class ServerDate {
    public readonly options: IServerDateOptions
    constructor(options?: IServerDateOptions)
  }

  export type DocumentId = string | number

  export interface IDocumentData {
    _id?: DocumentId,
    [key: string]: any,
  }

  export interface IDBAPIParam extends IAPIParam {

  }

  export interface IAddDocumentOptions extends IDBAPIParam {
    data: IDocumentData,
  }

  export interface IGetDocumentOptions extends IDBAPIParam {

  }

  export interface ICountDocumentOptions extends IDBAPIParam {

  }

  export interface IUpdateDocumentOptions extends IDBAPIParam {
    data: IUpdateCondition,
  }

  export interface IUpdateSingleDocumentOptions extends IDBAPIParam {
    data: IUpdateCondition,
  }

  export interface ISetDocumentOptions extends IDBAPIParam {
    data: IUpdateCondition,
  }

  export interface ISetSingleDocumentOptions extends IDBAPIParam {
    data: IUpdateCondition,
  }

  export interface IRemoveDocumentOptions extends IDBAPIParam {
    query: IQueryCondition,
  }

  export interface IRemoveSingleDocumentOptions extends IDBAPIParam {

  }

  export interface IQueryCondition {
    [key: string]: any,
  }

  export type IStringQueryCondition = string

  export interface IQueryResult extends IAPISuccessParam {
    data: IDocumentData[],
  }

  export interface IQuerySingleResult extends IAPISuccessParam {
    data: IDocumentData,
  }

  export interface IUpdateCondition {
    [key: string]: any,
  }

  export type IStringUpdateCondition = string

  export interface ISetCondition {

  }

  export interface IAddResult extends IAPISuccessParam {
    _id: DocumentId,
  }

  export interface IUpdateResult extends IAPISuccessParam {
    stats: {
      updated: number,
      // created: number,
    }
  }

  export interface ISetResult extends IAPISuccessParam {
    _id: DocumentId,
    stats: {
      updated: number,
      created: number,
    }
  }

  export interface IRemoveResult extends IAPISuccessParam {
    stats: {
      removed: number,
    }
  }

  export interface ICountResult extends IAPISuccessParam {
    total: number
  }
  
}

/**
 * Utils
 */

type OQ<T extends Optional<Record<'complete' | 'success' | 'fail', (...args: any[]) => any>>> =
  (RQ<T> & Required<Pick<T, 'success'>>) |
  (RQ<T> & Required<Pick<T, 'fail'>>) |
  (RQ<T> & Required<Pick<T, 'complete'>>) |
  (RQ<T> & Required<Pick<T, 'success' | 'fail'>>) |
  (RQ<T> & Required<Pick<T, 'success' | 'complete'>>) |
  (RQ<T> & Required<Pick<T, 'fail' | 'complete'>>) |
  (RQ<T> & Required<Pick<T, 'fail' | 'complete' | 'success'>>)

type RQ<T extends Optional<Record<'complete' | 'success' | 'fail', (...args: any[]) => any>>> = Pick<T, Exclude<keyof T, 'complete' | 'success' | 'fail'>>

