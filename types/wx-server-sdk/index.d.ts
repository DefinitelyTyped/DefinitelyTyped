// Type definitions for wx-server-sdk 0.8
// Project: https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-server-api/
// Definitions by: WangWei <https://github.com/vonweb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
/// <reference types="node" />
import * as fs from "fs";

declare function init(options?: InitOptions): void;
declare function updateConfig(options: InitOptions): void;
interface InitOptions {
    env: string
        | {
                database: string;
                storage: string;
                functions: string;
            };
}

declare function getWXContext(): {
    OPENID: string;
    APPID: string;
    UNIONID: string;
    ENV: string;
    SOURCE: "wx_devtools" | "wx_client" | "wx_http" | "wx_unknown" | "其他";
};

// 存储 API
declare function uploadFile(options: {
    cloudPath: string;
    fileContent: Buffer | fs.ReadStream;
}): Promise<UploadFileSuccess>;
interface UploadFileSuccess {
    fileID: string;
    statusCode: number;
}

declare function downloadFile(options: {
    fileID: string;
}): Promise<DownloadFileSuccess>;
interface DownloadFileSuccess {
    fileContent: Buffer;
    statusCode: number;
}

declare function getTempFileURL(options: {
    fileList: string[];
}): Promise<TetTempFileURLSuccess>;
interface TetTempFileURLSuccess {
    fileList: Array<{
        fileID: string;
        tempFileURL: string;
        status: number;
        errMsg: string;
    }>;
}

declare function deleteFile(options: {
    fileList: string[];
}): Promise<DeleteFileSuccess>;
interface DeleteFileSuccess {
    fileList: Array<{
        fileID: string;
        status: number;
        errMsg: string;
    }>;
}

// 云函数
declare function callFunction(options: {
    name: string;
    data: object;
}): Promise<CallFunctionSuccess>;
interface CallFunctionSuccess {
    errMsg: string;
    result: string;
    requestID: string;
}

// 云函数
declare function getVoIPSign(
    options: GetVoIPSignOptions
): Promise<GetVoIPSignSuccess>;
interface GetVoIPSignOptions {
    groupId: string;
    nonce: string;
    timestamp: number;
}
interface GetVoIPSignSuccess {
    signature: string;
}

// 数据库 API
declare function database(options?: DatabaseOptions): Database;
interface DatabaseOptions {
    env?: string;
}
interface Database {
    command: Command;
    serverDate(options?: object): ServerDate;
    Geo: Geo;
    createCollection: Promise<CreateCollectionSuccess>;
    collection(name: string): Collection;
    RegExp(options: RegExpOptions): DBRegExp;
}
type DBRegExp = RegExp;
type ServerDate = Date;
interface RegExpOptions {
    regexp: string; // 正则表达式，字符串形式
    options: "i" | "m" | "s"; // flags，包括 i, m, s 但前端不做强限制
}
interface Query {
    get(): Promise<GetCollectionResult>;
    update(options: CommonOption): Promise<UpateCollectionResult>;
    remove(): Promise<RemoveCollectionResult>;
    count(): Promise<CountCollectionResult>;
    orderBy(fieldName: string, order: "asc" | "desc"): Collection | Query;
    limit(max: number): Collection | Query;
    skip(offset: number): Collection | Query;
    field(definition: object): Collection | Query | Document;
}
interface Collection extends Query {
    doc(id: string | number): Document;
    add(options: CommonOption): Promise<AddCollectionResult>;
    where(rule: object): Query;

    aggregate(): Aggregate;
}
interface CommonOption<T = any> {
    data: T;
}
interface GetCollectionResult {
    data: any[];
}
interface AddCollectionResult {
    _id: string | number;
}
interface UpateCollectionResult {
    stats: {
        updated: number;
    };
}
interface RemoveCollectionResult {
    stats: {
        removed: number;
    };
}
interface CountCollectionResult {
    stats: {
        total: number;
    };
}
interface Document {
    get(): Promise<{ data: any }>;
    update(options: CommonOption): Promise<{ stats: { updated: 0 | 1 } }>;
    set(
        options: CommonOption
    ): Promise<{
        _id: string | number;
        stats: { updated: 0 | 1; created: 0 | 1 };
    }>;
    remove(): Promise<{ stats: { removed: 0 | 1 } }>;
}
// collection(name: string): Collection
interface Command {
    eq(value: any): Command;
    neq(value: any): Command;
    lt(value: number): Command;
    lte(value: number): Command;
    gt(value: number): Command;
    gte(value: number): Command;
    in(values: any[]): Command;
    nin(values: any[]): Command;
    and(command: Command): Command;
    and(...commands: Command[]): Command;
    or(command: Command | CrosFieldCommand[]): Command;
    or(...commands: Command[]): Command;
    set(value: any): Command;
    remove(): Command;
    inc(value: number): Command;
    mul(value: number): Command;
    push(values: any[]): Command;
    pop(): Command;
    shift(): Command;
    unshift(values: any[]): Command;

    geoNear(options: GeoNearOptions): Command;
    geoWithin(options: GeoWithinOptions): Command;
    geoIntersects(options: GeoIntersectsOptions): Command;

    // aggregate: AggregationOperators
    aggregate: any;
}
interface CrosFieldCommand {
    [filed: string]: Command | boolean;
}
interface GeoNearOptions {
    geometry: Point; // 点的地理位置
    maxDistance?: number; // 选填，最大距离，单位为米
    minDistance?: number; // 选填，最小距离，单位为米
}
interface GeoWithinOptions {
    geometry: Polygon | MultiPolygon;
}
interface GeoIntersectsOptions {
    geometry:
        | Point
        | LineString
        | MultiPoint
        | MultiLineString
        | Polygon
        | MultiPolygon; // 地理位置
}

interface Geo {
    Point: Point;
    LineString: LineString;
    Polygon: Polygon;
}
interface Point {
    (longitude: number, latitude: number): Point;
}
type PointCoordinates = [number, number];
interface Point {
    type: "Point";
    coordinates: PointCoordinates;
}
interface LineString {
    (points: Point[]): LineString;
}

interface LineString {
    type: "LineString";
    coordinates: PointCoordinates[];
}
interface Polygon {
    (lineStrings: LineString[]): Polygon;
}
interface Polygon {
    type: "Polygon";
    coordinates: PointCoordinates[][];
}
interface MultiPoint {
    (points: Point[]): MultiPoint;
}
interface MultiPoint {
    type: "MultiPoint";
    coordinates: PointCoordinates[];
}
interface MultiLineString {
    (polygons: LineString[]): MultiLineString;
}
interface MultiLineString {
    type: "MultiLineString";
    coordinates: PointCoordinates[][];
}
interface MultiPolygon {
    (polygons: Polygon[]): MultiPolygon;
}
interface MultiPolygon {
    type: "MultiPolygon";
    coordinates: PointCoordinates[][][];
}

// interface GeoJSON<T> {
//     type: T;
//     coordinates: [];
// }

interface CreateCollectionSuccess {
    errMsg: string;
}

interface Aggregate {
    addFields(fieldObj: { [fieldName: string]: any }): Aggregate;
    bucket(bucketObj: {
        groupBy: any;
        boundaries: any[];
        default?: any;
        output?: object;
    }): Aggregate;
    bucketAuto(bucketObj: {
        groupBy: any;
        buckets: number;
        granularity?: any;
        output?: object;
    }): Aggregate;
    count(expr: string): any;
    geoNear(geoNearObj: {
        near: Point;
        spherical: true;
        limit?: number;
        maxDistance?: number;
        minDistance?: number;
        query?: object;
        distanceMultiplier?: number;
        distanceField: string;
        includeLocs?: string;
        key?: string;
    }): Aggregate;
    group(groupObj: { _id: any; [fieldName: string]: any }): Aggregate;
    limit(limitRecords: number): any;
    match(matchObj: { [fieldName: string]: any }): Aggregate;
    project(projectObj: { [fieldName: string]: any }): Aggregate;
    replaceRoot(replaceRootObj: { newRoot: any }): Aggregate;
    sample(replaceRootObj: { size: number }): Aggregate;
    skip(skipNum: number): any;
    sort(replaceRootObj: { [fieldName: string]: 1 | -1 }): Aggregate;
    sortByCount(fieldName: string): Aggregate;
    unwind(unwindObj: {
        path: string;
        includeArrayIndex?: string;
        preserveNullAndEmptyArrays?: boolean;
    }): Aggregate;
    end(): void;
}
// type
interface AggregationOperators {
    abs(operand: number): number;
    add(...operand: any[]): any;
    addToSet(expression: string): any;
    allElementsTrue(expression: [string]): boolean;
    and(expression: boolean[]): boolean;
    lt(expression: string, value: number): boolean;
    lte(expression: string, value: number): boolean;
    anyElementTrue(expression: [string]): boolean;
    arrayElemAt(expression: [string, number]): any;
    arrayToObject(expression: string): object;
    // arrayToObject(expression: [string, any][]): object
    // arrayToObject(expression: {k: string; v: any}[]): object
    avg(expression: string): number;
}

export {
    init,
    updateConfig,
    getWXContext,
    uploadFile,
    downloadFile,
    getTempFileURL,
    deleteFile,
    callFunction,
    getVoIPSign,
    database,
};
// export = cloud;
// export as namespace cloud;
