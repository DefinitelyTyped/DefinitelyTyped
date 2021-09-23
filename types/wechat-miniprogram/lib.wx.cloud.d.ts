interface IAPIError {
    errMsg: string
}

interface IAPIParam<T = any> {
    config?: ICloudConfig | undefined
    success?: ((res: T) => void) | undefined
    fail?: ((err: IAPIError) => void) | undefined
    complete?: ((val: T | IAPIError) => void) | undefined
}

interface IAPISuccessParam {
    errMsg: string
}

type IAPICompleteParam = IAPISuccessParam | IAPIError

type IAPIFunction<T, P extends IAPIParam<T>> = (param?: P) => Promise<T>

interface IInitCloudConfig {
    env?:
        | string
        | {
              database?: string | undefined
              functions?: string | undefined
              storage?: string | undefined
          } | undefined
    traceUser?: boolean | undefined
}

interface ICloudConfig {
    env?: string | undefined
    traceUser?: boolean | undefined
}

interface IICloudAPI {
    init: (config?: IInitCloudConfig) => void
    [api: string]: AnyFunction | IAPIFunction<any, any>
}

interface ICloudService {
    name: string

    getAPIs: () => { [name: string]: IAPIFunction<any, any> }
}

interface ICloudServices {
    [serviceName: string]: ICloudService
}

interface ICloudMetaData {
    session_id: string
}

declare class InternalSymbol {}

interface AnyObject {
    [x: string]: any
}

type AnyArray = any[]

type AnyFunction = (...args: any[]) => any

/**
 * extend wx with cloud
 */
interface WxCloud {
    init: (config?: ICloudConfig) => void

    callFunction(param: OQ<ICloud.CallFunctionParam>): void
    callFunction(
        param: RQ<ICloud.CallFunctionParam>
    ): Promise<ICloud.CallFunctionResult>

    uploadFile(param: OQ<ICloud.UploadFileParam>): WechatMiniprogram.UploadTask
    uploadFile(
        param: RQ<ICloud.UploadFileParam>
    ): Promise<ICloud.UploadFileResult>

    downloadFile(
        param: OQ<ICloud.DownloadFileParam>
    ): WechatMiniprogram.DownloadTask
    downloadFile(
        param: RQ<ICloud.DownloadFileParam>
    ): Promise<ICloud.DownloadFileResult>

    getTempFileURL(param: OQ<ICloud.GetTempFileURLParam>): void
    getTempFileURL(
        param: RQ<ICloud.GetTempFileURLParam>
    ): Promise<ICloud.GetTempFileURLResult>

    deleteFile(param: OQ<ICloud.DeleteFileParam>): void
    deleteFile(
        param: RQ<ICloud.DeleteFileParam>
    ): Promise<ICloud.DeleteFileResult>

    database: (config?: ICloudConfig) => DB.Database

    CloudID: ICloud.ICloudIDConstructor
    CDN: ICloud.ICDNConstructor
}

declare namespace ICloud {
    interface ICloudAPIParam<T = any> extends IAPIParam<T> {
        config?: ICloudConfig | undefined
    }

    // === API: callFunction ===
    type CallFunctionData = AnyObject

    interface CallFunctionResult extends IAPISuccessParam {
        result: AnyObject | string | undefined
    }

    interface CallFunctionParam extends ICloudAPIParam<CallFunctionResult> {
        name: string
        data?: CallFunctionData | undefined
        slow?: boolean | undefined
    }
    // === end ===

    // === API: uploadFile ===
    interface UploadFileResult extends IAPISuccessParam {
        fileID: string
        statusCode: number
    }

    interface UploadFileParam extends ICloudAPIParam<UploadFileResult> {
        cloudPath: string
        filePath: string
        header?: AnyObject | undefined
    }
    // === end ===

    // === API: downloadFile ===
    interface DownloadFileResult extends IAPISuccessParam {
        tempFilePath: string
        statusCode: number
    }

    interface DownloadFileParam extends ICloudAPIParam<DownloadFileResult> {
        fileID: string
        cloudPath?: string | undefined
    }
    // === end ===

    // === API: getTempFileURL ===
    interface GetTempFileURLResult extends IAPISuccessParam {
        fileList: GetTempFileURLResultItem[]
    }

    interface GetTempFileURLResultItem {
        fileID: string
        tempFileURL: string
        maxAge: number
        status: number
        errMsg: string
    }

    interface GetTempFileURLParam extends ICloudAPIParam<GetTempFileURLResult> {
        fileList: string[]
    }
    // === end ===

    // === API: deleteFile ===
    interface DeleteFileResult extends IAPISuccessParam {
        fileList: DeleteFileResultItem[]
    }

    interface DeleteFileResultItem {
        fileID: string
        status: number
        errMsg: string
    }

    interface DeleteFileParam extends ICloudAPIParam<DeleteFileResult> {
        fileList: string[]
    }
    // === end ===

    // === API: CloudID ===
    abstract class CloudID {
        constructor(cloudID: string)
    }

    interface ICloudIDConstructor {
        new (cloudId: string): CloudID
        (cloudId: string): CloudID
    }
    // === end ===

    // === API: CDN ===
    abstract class CDN {
        target: string | ArrayBuffer | ICDNFilePathSpec
        constructor(target: string | ArrayBuffer | ICDNFilePathSpec)
    }

    interface ICDNFilePathSpec {
        type: 'filePath'
        filePath: string
    }

    interface ICDNConstructor {
        new (options: string | ArrayBuffer | ICDNFilePathSpec): CDN
        (options: string | ArrayBuffer | ICDNFilePathSpec): CDN
    }
    // === end ===
}

// === Database ===
declare namespace DB {
    /**
     * The class of all exposed cloud database instances
     */
    class Database {
        readonly config: ICloudConfig
        readonly command: DatabaseCommand
        readonly Geo: IGeo
        readonly serverDate: () => ServerDate
        readonly RegExp: IRegExpConstructor

        private constructor()

        collection(collectionName: string): CollectionReference
    }

    class CollectionReference extends Query {
        readonly collectionName: string

        private constructor(name: string, database: Database)

        doc(docId: string | number): DocumentReference

        add(options: OQ<IAddDocumentOptions>): void
        add(options: RQ<IAddDocumentOptions>): Promise<IAddResult>
    }

    class DocumentReference {
        private constructor(docId: string | number, database: Database)

        field(object: Record<string, any>): this

        get(options: OQ<IGetDocumentOptions>): void
        get(options?: RQ<IGetDocumentOptions>): Promise<IQuerySingleResult>

        set(options: OQ<ISetSingleDocumentOptions>): void
        set(options?: RQ<ISetSingleDocumentOptions>): Promise<ISetResult>

        update(options: OQ<IUpdateSingleDocumentOptions>): void
        update(
            options?: RQ<IUpdateSingleDocumentOptions>
        ): Promise<IUpdateResult>

        remove(options: OQ<IRemoveSingleDocumentOptions>): void
        remove(
            options?: RQ<IRemoveSingleDocumentOptions>
        ): Promise<IRemoveResult>

        watch(options: IWatchOptions): RealtimeListener
    }

    class RealtimeListener {
        // "And Now His Watch Is Ended"
        close: () => Promise<void>
    }

    class Query {
        where(condition: IQueryCondition): Query

        orderBy(fieldPath: string, order: string): Query

        limit(max: number): Query

        skip(offset: number): Query

        field(object: Record<string, any>): Query

        get(options: OQ<IGetDocumentOptions>): void
        get(options?: RQ<IGetDocumentOptions>): Promise<IQueryResult>

        count(options: OQ<ICountDocumentOptions>): void
        count(options?: RQ<ICountDocumentOptions>): Promise<ICountResult>

        watch(options: IWatchOptions): RealtimeListener
    }

    interface DatabaseCommand {
        eq(val: any): DatabaseQueryCommand
        neq(val: any): DatabaseQueryCommand
        gt(val: any): DatabaseQueryCommand
        gte(val: any): DatabaseQueryCommand
        lt(val: any): DatabaseQueryCommand
        lte(val: any): DatabaseQueryCommand
        in(val: any[]): DatabaseQueryCommand
        nin(val: any[]): DatabaseQueryCommand

        geoNear(options: IGeoNearCommandOptions): DatabaseQueryCommand
        geoWithin(options: IGeoWithinCommandOptions): DatabaseQueryCommand
        geoIntersects(
            options: IGeoIntersectsCommandOptions
        ): DatabaseQueryCommand

        and(
            ...expressions: Array<DatabaseLogicCommand | IQueryCondition>
        ): DatabaseLogicCommand
        or(
            ...expressions: Array<DatabaseLogicCommand | IQueryCondition>
        ): DatabaseLogicCommand
        nor(
            ...expressions: Array<DatabaseLogicCommand | IQueryCondition>
        ): DatabaseLogicCommand
        not(expression: DatabaseLogicCommand): DatabaseLogicCommand

        exists(val: boolean): DatabaseQueryCommand

        mod(divisor: number, remainder: number): DatabaseQueryCommand

        all(val: any[]): DatabaseQueryCommand
        elemMatch(val: any): DatabaseQueryCommand
        size(val: number): DatabaseQueryCommand

        set(val: any): DatabaseUpdateCommand
        remove(): DatabaseUpdateCommand
        inc(val: number): DatabaseUpdateCommand
        mul(val: number): DatabaseUpdateCommand
        min(val: number): DatabaseUpdateCommand
        max(val: number): DatabaseUpdateCommand
        rename(val: string): DatabaseUpdateCommand
        bit(val: number): DatabaseUpdateCommand

        push(...values: any[]): DatabaseUpdateCommand
        pop(): DatabaseUpdateCommand
        shift(): DatabaseUpdateCommand
        unshift(...values: any[]): DatabaseUpdateCommand
        addToSet(val: any): DatabaseUpdateCommand
        pull(val: any): DatabaseUpdateCommand
        pullAll(val: any): DatabaseUpdateCommand

        project: {
            slice(val: number | [number, number]): DatabaseProjectionCommand
        }

        aggregate: {
            __safe_props__?: Set<string> | undefined

            abs(val: any): DatabaseAggregateCommand
            add(val: any): DatabaseAggregateCommand
            addToSet(val: any): DatabaseAggregateCommand
            allElementsTrue(val: any): DatabaseAggregateCommand
            and(val: any): DatabaseAggregateCommand
            anyElementTrue(val: any): DatabaseAggregateCommand
            arrayElemAt(val: any): DatabaseAggregateCommand
            arrayToObject(val: any): DatabaseAggregateCommand
            avg(val: any): DatabaseAggregateCommand
            ceil(val: any): DatabaseAggregateCommand
            cmp(val: any): DatabaseAggregateCommand
            concat(val: any): DatabaseAggregateCommand
            concatArrays(val: any): DatabaseAggregateCommand
            cond(val: any): DatabaseAggregateCommand
            convert(val: any): DatabaseAggregateCommand
            dateFromParts(val: any): DatabaseAggregateCommand
            dateToParts(val: any): DatabaseAggregateCommand
            dateFromString(val: any): DatabaseAggregateCommand
            dateToString(val: any): DatabaseAggregateCommand
            dayOfMonth(val: any): DatabaseAggregateCommand
            dayOfWeek(val: any): DatabaseAggregateCommand
            dayOfYear(val: any): DatabaseAggregateCommand
            divide(val: any): DatabaseAggregateCommand
            eq(val: any): DatabaseAggregateCommand
            exp(val: any): DatabaseAggregateCommand
            filter(val: any): DatabaseAggregateCommand
            first(val: any): DatabaseAggregateCommand
            floor(val: any): DatabaseAggregateCommand
            gt(val: any): DatabaseAggregateCommand
            gte(val: any): DatabaseAggregateCommand
            hour(val: any): DatabaseAggregateCommand
            ifNull(val: any): DatabaseAggregateCommand
            in(val: any): DatabaseAggregateCommand
            indexOfArray(val: any): DatabaseAggregateCommand
            indexOfBytes(val: any): DatabaseAggregateCommand
            indexOfCP(val: any): DatabaseAggregateCommand
            isArray(val: any): DatabaseAggregateCommand
            isoDayOfWeek(val: any): DatabaseAggregateCommand
            isoWeek(val: any): DatabaseAggregateCommand
            isoWeekYear(val: any): DatabaseAggregateCommand
            last(val: any): DatabaseAggregateCommand
            let(val: any): DatabaseAggregateCommand
            literal(val: any): DatabaseAggregateCommand
            ln(val: any): DatabaseAggregateCommand
            log(val: any): DatabaseAggregateCommand
            log10(val: any): DatabaseAggregateCommand
            lt(val: any): DatabaseAggregateCommand
            lte(val: any): DatabaseAggregateCommand
            ltrim(val: any): DatabaseAggregateCommand
            map(val: any): DatabaseAggregateCommand
            max(val: any): DatabaseAggregateCommand
            mergeObjects(val: any): DatabaseAggregateCommand
            meta(val: any): DatabaseAggregateCommand
            min(val: any): DatabaseAggregateCommand
            millisecond(val: any): DatabaseAggregateCommand
            minute(val: any): DatabaseAggregateCommand
            mod(val: any): DatabaseAggregateCommand
            month(val: any): DatabaseAggregateCommand
            multiply(val: any): DatabaseAggregateCommand
            neq(val: any): DatabaseAggregateCommand
            not(val: any): DatabaseAggregateCommand
            objectToArray(val: any): DatabaseAggregateCommand
            or(val: any): DatabaseAggregateCommand
            pow(val: any): DatabaseAggregateCommand
            push(val: any): DatabaseAggregateCommand
            range(val: any): DatabaseAggregateCommand
            reduce(val: any): DatabaseAggregateCommand
            reverseArray(val: any): DatabaseAggregateCommand
            rtrim(val: any): DatabaseAggregateCommand
            second(val: any): DatabaseAggregateCommand
            setDifference(val: any): DatabaseAggregateCommand
            setEquals(val: any): DatabaseAggregateCommand
            setIntersection(val: any): DatabaseAggregateCommand
            setIsSubset(val: any): DatabaseAggregateCommand
            setUnion(val: any): DatabaseAggregateCommand
            size(val: any): DatabaseAggregateCommand
            slice(val: any): DatabaseAggregateCommand
            split(val: any): DatabaseAggregateCommand
            sqrt(val: any): DatabaseAggregateCommand
            stdDevPop(val: any): DatabaseAggregateCommand
            stdDevSamp(val: any): DatabaseAggregateCommand
            strcasecmp(val: any): DatabaseAggregateCommand
            strLenBytes(val: any): DatabaseAggregateCommand
            strLenCP(val: any): DatabaseAggregateCommand
            substr(val: any): DatabaseAggregateCommand
            substrBytes(val: any): DatabaseAggregateCommand
            substrCP(val: any): DatabaseAggregateCommand
            subtract(val: any): DatabaseAggregateCommand
            sum(val: any): DatabaseAggregateCommand
            switch(val: any): DatabaseAggregateCommand
            toBool(val: any): DatabaseAggregateCommand
            toDate(val: any): DatabaseAggregateCommand
            toDecimal(val: any): DatabaseAggregateCommand
            toDouble(val: any): DatabaseAggregateCommand
            toInt(val: any): DatabaseAggregateCommand
            toLong(val: any): DatabaseAggregateCommand
            toObjectId(val: any): DatabaseAggregateCommand
            toString(val: any): DatabaseAggregateCommand
            toLower(val: any): DatabaseAggregateCommand
            toUpper(val: any): DatabaseAggregateCommand
            trim(val: any): DatabaseAggregateCommand
            trunc(val: any): DatabaseAggregateCommand
            type(val: any): DatabaseAggregateCommand
            week(val: any): DatabaseAggregateCommand
            year(val: any): DatabaseAggregateCommand
            zip(val: any): DatabaseAggregateCommand
        }
    }

    class DatabaseAggregateCommand {}

    enum LOGIC_COMMANDS_LITERAL {
        AND = 'and',
        OR = 'or',
        NOT = 'not',
        NOR = 'nor'
    }

    class DatabaseLogicCommand {
        and(...expressions: DatabaseLogicCommand[]): DatabaseLogicCommand
        or(...expressions: DatabaseLogicCommand[]): DatabaseLogicCommand
        nor(...expressions: DatabaseLogicCommand[]): DatabaseLogicCommand
        not(expression: DatabaseLogicCommand): DatabaseLogicCommand
    }

    enum QUERY_COMMANDS_LITERAL {
        // comparison
        EQ = 'eq',
        NEQ = 'neq',
        GT = 'gt',
        GTE = 'gte',
        LT = 'lt',
        LTE = 'lte',
        IN = 'in',
        NIN = 'nin',
        // geo
        GEO_NEAR = 'geoNear',
        GEO_WITHIN = 'geoWithin',
        GEO_INTERSECTS = 'geoIntersects',
        // element
        EXISTS = 'exists',
        // evaluation
        MOD = 'mod',
        // array
        ALL = 'all',
        ELEM_MATCH = 'elemMatch',
        SIZE = 'size'
    }

    class DatabaseQueryCommand extends DatabaseLogicCommand {
        eq(val: any): DatabaseLogicCommand
        neq(val: any): DatabaseLogicCommand
        gt(val: any): DatabaseLogicCommand
        gte(val: any): DatabaseLogicCommand
        lt(val: any): DatabaseLogicCommand
        lte(val: any): DatabaseLogicCommand
        in(val: any[]): DatabaseLogicCommand
        nin(val: any[]): DatabaseLogicCommand

        exists(val: boolean): DatabaseLogicCommand

        mod(divisor: number, remainder: number): DatabaseLogicCommand

        all(val: any[]): DatabaseLogicCommand
        elemMatch(val: any): DatabaseLogicCommand
        size(val: number): DatabaseLogicCommand

        geoNear(options: IGeoNearCommandOptions): DatabaseLogicCommand
        geoWithin(options: IGeoWithinCommandOptions): DatabaseLogicCommand
        geoIntersects(
            options: IGeoIntersectsCommandOptions
        ): DatabaseLogicCommand
    }

    enum PROJECTION_COMMANDS_LITERAL {
        SLICE = 'slice'
    }

    class DatabaseProjectionCommand {}

    enum UPDATE_COMMANDS_LITERAL {
        // field
        SET = 'set',
        REMOVE = 'remove',
        INC = 'inc',
        MUL = 'mul',
        MIN = 'min',
        MAX = 'max',
        RENAME = 'rename',
        // bitwise
        BIT = 'bit',
        // array
        PUSH = 'push',
        POP = 'pop',
        SHIFT = 'shift',
        UNSHIFT = 'unshift',
        ADD_TO_SET = 'addToSet',
        PULL = 'pull',
        PULL_ALL = 'pullAll'
    }

    class DatabaseUpdateCommand {}

    class Batch {}

    /**
     * A contract that all API provider must adhere to
     */
    class APIBaseContract<
        PromiseReturn,
        CallbackReturn,
        Param extends IAPIParam,
        Context = any
    > {
        getContext(param: Param): Context

        /**
         * In case of callback-style invocation, this function will be called
         */
        getCallbackReturn(param: Param, context: Context): CallbackReturn

        getFinalParam<T extends Param>(param: Param, context: Context): T

        run<T extends Param>(param: T): Promise<PromiseReturn>
    }

    interface IGeoPointConstructor {
        new (longitude: number, latitide: number): GeoPoint
        new (geojson: IGeoJSONPoint): GeoPoint
        (longitude: number, latitide: number): GeoPoint
        (geojson: IGeoJSONPoint): GeoPoint
    }

    interface IGeoMultiPointConstructor {
        new (points: GeoPoint[] | IGeoJSONMultiPoint): GeoMultiPoint
        (points: GeoPoint[] | IGeoJSONMultiPoint): GeoMultiPoint
    }

    interface IGeoLineStringConstructor {
        new (points: GeoPoint[] | IGeoJSONLineString): GeoLineString
        (points: GeoPoint[] | IGeoJSONLineString): GeoLineString
    }

    interface IGeoMultiLineStringConstructor {
        new (
            lineStrings: GeoLineString[] | IGeoJSONMultiLineString
        ): GeoMultiLineString
        (
            lineStrings: GeoLineString[] | IGeoJSONMultiLineString
        ): GeoMultiLineString
    }

    interface IGeoPolygonConstructor {
        new (lineStrings: GeoLineString[] | IGeoJSONPolygon): GeoPolygon
        (lineStrings: GeoLineString[] | IGeoJSONPolygon): GeoPolygon
    }

    interface IGeoMultiPolygonConstructor {
        new (polygons: GeoPolygon[] | IGeoJSONMultiPolygon): GeoMultiPolygon
        (polygons: GeoPolygon[] | IGeoJSONMultiPolygon): GeoMultiPolygon
    }

    interface IGeo {
        Point: IGeoPointConstructor
        MultiPoint: IGeoMultiPointConstructor
        LineString: IGeoLineStringConstructor
        MultiLineString: IGeoMultiLineStringConstructor
        Polygon: IGeoPolygonConstructor
        MultiPolygon: IGeoMultiPolygonConstructor
    }

    interface IGeoJSONPoint {
        type: 'Point'
        coordinates: [number, number]
    }

    interface IGeoJSONMultiPoint {
        type: 'MultiPoint'
        coordinates: Array<[number, number]>
    }

    interface IGeoJSONLineString {
        type: 'LineString'
        coordinates: Array<[number, number]>
    }

    interface IGeoJSONMultiLineString {
        type: 'MultiLineString'
        coordinates: Array<Array<[number, number]>>
    }

    interface IGeoJSONPolygon {
        type: 'Polygon'
        coordinates: Array<Array<[number, number]>>
    }

    interface IGeoJSONMultiPolygon {
        type: 'MultiPolygon'
        coordinates: Array<Array<Array<[number, number]>>>
    }

    type IGeoJSONObject =
        | IGeoJSONPoint
        | IGeoJSONMultiPoint
        | IGeoJSONLineString
        | IGeoJSONMultiLineString
        | IGeoJSONPolygon
        | IGeoJSONMultiPolygon

    abstract class GeoPoint {
        longitude: number
        latitude: number

        constructor(longitude: number, latitude: number)

        toJSON(): Record<string, any>
        toString(): string
    }

    abstract class GeoMultiPoint {
        points: GeoPoint[]

        constructor(points: GeoPoint[])

        toJSON(): IGeoJSONMultiPoint
        toString(): string
    }

    abstract class GeoLineString {
        points: GeoPoint[]

        constructor(points: GeoPoint[])

        toJSON(): IGeoJSONLineString
        toString(): string
    }

    abstract class GeoMultiLineString {
        lines: GeoLineString[]

        constructor(lines: GeoLineString[])

        toJSON(): IGeoJSONMultiLineString
        toString(): string
    }

    abstract class GeoPolygon {
        lines: GeoLineString[]

        constructor(lines: GeoLineString[])

        toJSON(): IGeoJSONPolygon
        toString(): string
    }

    abstract class GeoMultiPolygon {
        polygons: GeoPolygon[]

        constructor(polygons: GeoPolygon[])

        toJSON(): IGeoJSONMultiPolygon
        toString(): string
    }

    type GeoInstance =
        | GeoPoint
        | GeoMultiPoint
        | GeoLineString
        | GeoMultiLineString
        | GeoPolygon
        | GeoMultiPolygon

    interface IGeoNearCommandOptions {
        geometry: GeoPoint
        maxDistance?: number | undefined
        minDistance?: number | undefined
    }

    interface IGeoWithinCommandOptions {
        geometry: GeoPolygon | GeoMultiPolygon
    }

    interface IGeoIntersectsCommandOptions {
        geometry:
            | GeoPoint
            | GeoMultiPoint
            | GeoLineString
            | GeoMultiLineString
            | GeoPolygon
            | GeoMultiPolygon
    }

    interface IServerDateOptions {
        offset: number
    }

    abstract class ServerDate {
        readonly options: IServerDateOptions
        constructor(options?: IServerDateOptions)
    }

    interface IRegExpOptions {
        regexp: string
        options?: string | undefined
    }

    interface IRegExpConstructor {
        new (options: IRegExpOptions): RegExp
        (options: IRegExpOptions): RegExp
    }

    abstract class RegExp {
        readonly regexp: string
        readonly options: string
        constructor(options: IRegExpOptions)
    }

    type DocumentId = string | number

    interface IDocumentData {
        _id?: DocumentId | undefined
        [key: string]: any
    }

    type IDBAPIParam = IAPIParam

    interface IAddDocumentOptions extends IDBAPIParam {
        data: IDocumentData
    }

    type IGetDocumentOptions = IDBAPIParam

    type ICountDocumentOptions = IDBAPIParam

    interface IUpdateDocumentOptions extends IDBAPIParam {
        data: IUpdateCondition
    }

    interface IUpdateSingleDocumentOptions extends IDBAPIParam {
        data: IUpdateCondition
    }

    interface ISetDocumentOptions extends IDBAPIParam {
        data: IUpdateCondition
    }

    interface ISetSingleDocumentOptions extends IDBAPIParam {
        data: IUpdateCondition
    }

    interface IRemoveDocumentOptions extends IDBAPIParam {
        query: IQueryCondition
    }

    type IRemoveSingleDocumentOptions = IDBAPIParam

    interface IWatchOptions {
        // server realtime data init & change event
        onChange: (snapshot: ISnapshot) => void
        // error while connecting / listening
        onError: (error: any) => void
    }

    interface ISnapshot {
        id: number
        docChanges: ISingleDBEvent[]
        docs: Record<string, any>
        type?: SnapshotType | undefined
    }

    type SnapshotType = 'init'

    interface ISingleDBEvent {
        id: number
        dataType: DataType
        queueType: QueueType
        docId: string
        doc: Record<string, any>
        updatedFields?: Record<string, any> | undefined
        removedFields?: string[] | undefined
    }

    type DataType = 'init' | 'update' | 'replace' | 'add' | 'remove' | 'limit'

    type QueueType = 'init' | 'enqueue' | 'dequeue' | 'update'

    interface IQueryCondition {
        [key: string]: any
    }

    type IStringQueryCondition = string

    interface IQueryResult extends IAPISuccessParam {
        data: IDocumentData[]
    }

    interface IQuerySingleResult extends IAPISuccessParam {
        data: IDocumentData
    }

    interface IUpdateCondition {
        [key: string]: any
    }

    type IStringUpdateCondition = string

    interface IAddResult extends IAPISuccessParam {
        _id: DocumentId
    }

    interface IUpdateResult extends IAPISuccessParam {
        stats: {
            updated: number
            // created: number,
        }
    }

    interface ISetResult extends IAPISuccessParam {
        _id: DocumentId
        stats: {
            updated: number
            created: number
        }
    }

    interface IRemoveResult extends IAPISuccessParam {
        stats: {
            removed: number
        }
    }

    interface ICountResult extends IAPISuccessParam {
        total: number
    }
}

type Optional<T> = { [K in keyof T]+?: T[K] }

type OQ<
    T extends Optional<
        Record<'complete' | 'success' | 'fail', (...args: any[]) => any>
    >
> =
    | (RQ<T> & Required<Pick<T, 'success'>>)
    | (RQ<T> & Required<Pick<T, 'fail'>>)
    | (RQ<T> & Required<Pick<T, 'complete'>>)
    | (RQ<T> & Required<Pick<T, 'success' | 'fail'>>)
    | (RQ<T> & Required<Pick<T, 'success' | 'complete'>>)
    | (RQ<T> & Required<Pick<T, 'fail' | 'complete'>>)
    | (RQ<T> & Required<Pick<T, 'fail' | 'complete' | 'success'>>)

type RQ<
    T extends Optional<
        Record<'complete' | 'success' | 'fail', (...args: any[]) => any>
    >
> = Pick<T, Exclude<keyof T, 'complete' | 'success' | 'fail'>>
