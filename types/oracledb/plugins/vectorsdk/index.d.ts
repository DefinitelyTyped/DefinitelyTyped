import { Connection, Pool, SparseVector } from "../..";

export type DenseVector = Float32Array | Float64Array | Int8Array | Uint8Array;
export type Vector = DenseVector | SparseVector<Float32Array | Float64Array | Int8Array>;
export type VectorInput = ReadonlyArray<number> | Vector;
export type TableName = string | { schema: string; name: string };
export type ColumnDefinition = string | { name?: string | undefined; annotation?: string | undefined };
export type DatabaseSource = Connection | Pool | (() => Connection | Pool | Promise<Connection | Pool>);
export type VectorDistanceType =
    | "COSINE"
    | "EUCLIDEAN"
    | "EUCLIDEAN_SQUARED"
    | "L2_SQUARED"
    | "MANHATTAN"
    | "DOT"
    | "HAMMING"
    | "JACCARD";

export type VectorDefinition =
    & {
        /** Positive dimension count; a multiple of eight for BINARY vectors. */
        dimensions: number;
        /** Vector column name and optional comment. Defaults to `embedding`. */
        column?: ColumnDefinition | undefined;
    }
    & (
        | {
            /** Defaults to `FLOAT32`. Values for `*` columns are converted to `FLOAT64`. */
            storageFormat?: "FLOAT32" | "FLOAT64" | "INT8" | "*" | undefined;
            /** Defaults to `DENSE`. */
            storageType?: "DENSE" | "SPARSE" | undefined;
        }
        | {
            storageFormat: "BINARY";
            /** BINARY vectors support only `DENSE` storage. */
            storageType?: "DENSE" | undefined;
        }
    );

export interface ColumnDefinitions {
    /** Internal primary key column. Defaults to `id`. */
    rowid?: ColumnDefinition | undefined;
    /** External document ID column. Defaults to `external_id`. */
    id?: ColumnDefinition | undefined;
    /** Document text column. Defaults to `text`. */
    content?: ColumnDefinition | undefined;
    /** Document metadata column. Defaults to `metadata`. */
    metadata?: ColumnDefinition | undefined;
}

export interface OracleVecDBOptions {
    /** Application-managed connection, pool, or provider invoked once per operation. */
    dbSource: DatabaseSource;
    tableName: TableName;
    vector: VectorDefinition;
    columns?: ColumnDefinitions | undefined;
    /** Non-empty comment for the table created by the SDK. */
    description?: string | undefined;
    /** Database or remote provider parameters passed to Oracle Database when generating embeddings. */
    modelParams?: Record<string, unknown> | undefined;
    /** Defaults to `COSINE`, or `HAMMING` for BINARY vectors. `JACCARD` requires BINARY vectors. */
    vectorDistanceType?: VectorDistanceType | undefined;
    /** Quote configured identifiers, preserving their case. Defaults to false. */
    quoteIdentifiers?: boolean | undefined;
}

export interface Document {
    content: string;
    metadata: Record<string, unknown>;
}

export interface AddOptions {
    /** External document IDs, in input order. UUIDs are generated when omitted. */
    ids?: ReadonlyArray<string> | undefined;
    /** Update rows with matching IDs. Defaults to false. */
    upsert?: boolean | undefined;
    /** Must be true; omitted or false values are rejected before executing SQL. */
    autoCommit: true;
}

export interface InsertWithEmbeddingsOptions {
    sourceTable: TableName;
    idColumn: string;
    contentColumn: string;
    metadataColumn?: string | undefined;
    /** Quote source identifiers. Defaults to false. */
    quoteSource?: boolean | undefined;
    autoCommit?: boolean | undefined;
}

export type FilterScalar = string | number | boolean | null;

export interface FilterComparisonOperators {
    $between?: readonly [number, number] | readonly [string, string] | undefined;
    $eq?: FilterScalar | undefined;
    $exists?: boolean | undefined;
    $gt?: string | number | undefined;
    $gte?: string | number | undefined;
    $in?: ReadonlyArray<FilterScalar> | undefined;
    $like?: string | undefined;
    $lt?: string | number | undefined;
    $lte?: string | number | undefined;
    $ne?: FilterScalar | undefined;
    $nin?: ReadonlyArray<FilterScalar> | undefined;
}

/** One or more comparison operators for a metadata field. */
export type FilterComparison = {
    [K in keyof FilterComparisonOperators]-?: Required<Pick<FilterComparisonOperators, K>> & FilterComparisonOperators;
}[keyof FilterComparisonOperators];

/** Field comparisons or a logical node containing exactly one of `$and` and `$or`. */
export type MetadataFilter =
    | ({ [field: string]: FilterScalar | ReadonlyArray<FilterScalar> | FilterComparison } & {
        $and?: never;
        $or?: never;
    })
    | { $and: ReadonlyArray<MetadataFilter>; $or?: never }
    | { $or: ReadonlyArray<MetadataFilter>; $and?: never };

export interface SearchOptions {
    /** Supply exactly one query representation. Text searches require `modelParams`. */
    queryBy: { vector: VectorInput; text?: never } | { text: string; vector?: never };
    /** Positive maximum result count. Defaults to 5. */
    topK?: number | undefined;
    /** Target accuracy from 1 through 100. */
    accuracy?: number | undefined;
    filter?: MetadataFilter | undefined;
    /** Include the stored embedding in each result. Defaults to false. */
    includeVector?: boolean | undefined;
}

export interface SearchResult {
    id: string | null;
    content: string | null;
    /** May be null, for example when `insertWithEmbeddings()` omits `metadataColumn`. */
    metadata: Record<string, unknown> | null;
    distance: number | null;
    vector?: Vector | string | null | undefined;
}

export interface CreateVectorIndexOptions {
    indexName: string;
    /** HNSW or IVF parameters, such as `neighbors`, `efConstruction`, or `partitions`. */
    parameters: Record<string, unknown>;
    /** Defaults to `HNSW`. */
    type?: "HNSW" | "IVF" | undefined;
    /** Defaults to `GLOBAL`. */
    partitioningScheme?: string | undefined;
    /** Target accuracy from 1 through 100. Defaults to 90. */
    accuracy?: number | undefined;
    /** Positive parallel creation degree. Defaults to 1. */
    parallel?: number | undefined;
    includeColumns?: ReadonlyArray<string> | undefined;
}

export interface DeleteOptions {
    /** External document IDs to delete. A non-empty array cannot be combined with `deleteAll: true`. */
    ids?: ReadonlyArray<string> | undefined;
    /** Truncate the table. This implicitly commits and cannot be rolled back. */
    deleteAll?: boolean | undefined;
    autoCommit?: boolean | undefined;
}

export interface DeleteResult {
    message: string;
}

/**
 * Vector store for Oracle AI Vector Search. Requires Oracle Database 23.4 or later.
 *
 * @see https://node-oracledb.readthedocs.io/en/latest/user_guide/extensions.html#vectorsdkplugin
 * @since 26.0
 */
export class OracleVecDB {
    /** Configure the vector store without creating database objects. */
    constructor(options: OracleVecDBOptions);
    /** Create the vector table if it does not exist and return its SQL identifier. */
    createVectorTable(): Promise<string>;
    /** Drop the table if it exists. `purge` defaults to false. */
    dropTable(purge?: boolean): Promise<void>;
    /** Create an HNSW or IVF vector index. */
    createVectorIndex(options: CreateVectorIndexOptions): Promise<void>;
    /** Generate embeddings from a source table and return the inserted row count. Requires `modelParams`. */
    insertWithEmbeddings(options: InsertWithEmbeddingsOptions): Promise<number>;
    /** Store vectors and documents, returning supplied or generated IDs in input order. */
    addVectors(
        vectors: ReadonlyArray<VectorInput>,
        documents: ReadonlyArray<Document>,
        options: AddOptions,
    ): Promise<string[]>;
    /** Generate and store document embeddings, returning IDs in input order. Requires `modelParams`. */
    addDocuments(documents: ReadonlyArray<Document>, options: AddOptions): Promise<string[]>;
    /** Return matching documents in ascending distance order. */
    search(options: SearchOptions): Promise<SearchResult[]>;
    /** Generate one embedding per input string, preserving input order. Requires `modelParams`. */
    generateEmbeddings(texts: ReadonlyArray<string>): Promise<Vector[]>;
    /** Delete by ID or truncate the table. Returns undefined when neither action is requested. */
    delete(options: DeleteOptions): Promise<DeleteResult | undefined>;
}

export interface LoadModelOptions {
    /** Oracle directory object for the server directory containing the ONNX file. */
    dirName: string;
    modelFile: string;
    modelName: string;
    modelMetadata?: Record<string, unknown> | undefined;
}

export interface ModelAttribute {
    name: string;
    value: string;
    data_type: string;
    data_length: number;
    vector_info: string | null;
}

export interface ModelDescription {
    model_name: string;
    algorithm: string;
    mining_function: string;
    creation_date: string;
    attributes: ModelAttribute[];
}

export interface ModelList {
    models: ModelDescription[];
}

/** Load an ONNX embedding model into Oracle Database. */
export function loadModel(connection: Connection, options: LoadModelOptions): Promise<void>;
/** Drop an embedding model. `force` defaults to false. */
export function dropModel(connection: Connection, modelName: string, force?: boolean): Promise<void>;
/** Return model metadata. Requires Oracle Database 26.2 or later. */
export function describeModel(connection: Connection, modelName: string): Promise<ModelDescription>;
/** Return models in the current schema. Requires Oracle Database 26.2 or later. */
export function listModels(connection: Connection): Promise<ModelList>;
/** Return index build status information for a table. Requires Oracle Database 26.2 or later. */
export function getIndexBuildStatus(connection: Connection, tableName: string): Promise<Record<string, unknown>>;
