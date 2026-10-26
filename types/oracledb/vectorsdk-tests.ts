import * as oracledb from "oracledb";
import * as vectorSdk from "oracledb/plugins/vectorsdk";
import vectorSdkCommonJs = require("oracledb/plugins/vectorsdk");
import { OracleVecDB } from "oracledb/plugins/vectorsdk/index.js";

const expectType = <T>(value: T): T => value;

export async function testVectorSdkConfiguration() {
    const connection = await oracledb.getConnection();
    const pool = await oracledb.createPool({});
    const options: vectorSdk.OracleVecDBOptions = {
        dbSource: connection,
        tableName: { schema: "HR", name: "DOCUMENT_VECTORS" },
        vector: {
            dimensions: 384,
            column: { name: "DOC_EMBEDDING", annotation: "Document embedding" },
            storageFormat: "FLOAT32",
            storageType: "DENSE",
        },
        columns: {
            rowid: "ROW_ID",
            id: "DOCUMENT_ID",
            content: { annotation: "Source document text" },
            metadata: { name: "DOCUMENT_METADATA" },
        },
        description: "Document embeddings",
        modelParams: { provider: "database", model: "DOC_EMBED_MODEL" },
        vectorDistanceType: "COSINE",
        quoteIdentifiers: true,
    };
    expectType<OracleVecDB>(new vectorSdk.OracleVecDB(options));
    expectType<OracleVecDB>(new vectorSdkCommonJs.OracleVecDB({ ...options, dbSource: pool }));
    new OracleVecDB({ ...options, dbSource: async () => connection });
    new OracleVecDB({ ...options, dbSource: async () => pool });
    new OracleVecDB({ ...options, dbSource: () => connection });
    new OracleVecDB({ ...options, vector: { dimensions: 8, storageFormat: "BINARY" } });
    new OracleVecDB({ ...options, vector: { dimensions: 8, storageFormat: "BINARY", storageType: "DENSE" } });
    new OracleVecDB({ ...options, vector: { dimensions: 384, storageType: "SPARSE" } });
    new OracleVecDB({ ...options, vector: { dimensions: 384, storageFormat: "*", storageType: "SPARSE" } });

    // @ts-expect-error A database source is required.
    new OracleVecDB({ tableName: "DOCUMENTS", vector: { dimensions: 3 } });
    // @ts-expect-error Connection attributes are not a database source.
    new OracleVecDB({ ...options, dbSource: { user: "hr", password: "password" } });
    // @ts-expect-error The provider must return a connection or pool.
    new OracleVecDB({ ...options, dbSource: async () => "connection" });
    // @ts-expect-error Dimensions are required.
    new OracleVecDB({ ...options, vector: { storageFormat: "FLOAT32" } });
    // @ts-expect-error Unsupported vector element format.
    new OracleVecDB({ ...options, vector: { dimensions: 3, storageFormat: "FLOAT16" } });
    // @ts-expect-error Unsupported distance metric.
    new OracleVecDB({ ...options, vectorDistanceType: "L1" });
    // @ts-expect-error BINARY vectors cannot use SPARSE storage.
    new OracleVecDB({ ...options, vector: { dimensions: 8, storageFormat: "BINARY", storageType: "SPARSE" } });
}

export async function testVectorSdkDocuments() {
    const connection = await oracledb.getConnection();
    const store = new OracleVecDB({
        dbSource: connection,
        tableName: "DOCUMENTS",
        vector: { dimensions: 3 },
        modelParams: { provider: "database", model: "EMBED_MODEL" },
    });
    const documents = [{ content: "Document text", metadata: { category: "database", year: 2026 } }];
    expectType<string>(await store.createVectorTable());
    expectType<string[]>(await store.addVectors([[1, 0, 0]], documents, { autoCommit: true }));
    expectType<string[]>(
        await store.addVectors([new Float64Array([1, 0, 0])], documents, {
            ids: ["document-1"],
            upsert: true,
            autoCommit: true,
        }),
    );
    await store.addVectors([new Float32Array([1, 0, 0])], documents, { autoCommit: true });
    await store.addVectors([new Int8Array([1, 0, 0])], documents, { autoCommit: true });
    expectType<string[]>(await store.addDocuments(documents, { autoCommit: true }));
    expectType<vectorSdk.Vector[]>(await store.generateEmbeddings(["Document text"]));
    expectType<number>(
        await store.insertWithEmbeddings({
            sourceTable: { schema: "HR", name: "SOURCE_DOCUMENTS" },
            idColumn: "DOCUMENT_ID",
            contentColumn: "DOCUMENT_TEXT",
            metadataColumn: "DOCUMENT_METADATA",
            quoteSource: true,
            autoCommit: false,
        }),
    );
    expectType<vectorSdk.DeleteResult | undefined>(await store.delete({ ids: ["document-1"], autoCommit: true }));
    await store.delete({ deleteAll: true });
    await store.delete({});
    expectType<Promise<void>>(store.dropTable());
    expectType<Promise<void>>(store.dropTable(true));

    // @ts-expect-error Documents require a metadata object.
    await store.addDocuments([{ content: "Document text" }], { autoCommit: true });
    // @ts-expect-error A document must be an object with content and metadata.
    await store.addVectors([[1, 0, 0]], ["Document text"], { autoCommit: true });
    // @ts-expect-error autoCommit must be explicitly true.
    await store.addVectors([[1, 0, 0]], documents);
    // @ts-expect-error autoCommit must be explicitly true.
    await store.addDocuments(documents, {});
    // @ts-expect-error autoCommit false is rejected by the SDK.
    await store.addDocuments(documents, { autoCommit: false });
    // @ts-expect-error Uint32Array is not a supported vector input.
    await store.addVectors([new Uint32Array([1, 0, 0])], documents, { autoCommit: true });
    // @ts-expect-error Vectors must contain numbers.
    await store.addVectors([["1", "0", "0"]], documents, { autoCommit: true });
    // @ts-expect-error The source ID column is required.
    await store.insertWithEmbeddings({ sourceTable: "SOURCE_DOCUMENTS", contentColumn: "DOCUMENT_TEXT" });
}

export async function testVectorSdkSparseAndBinaryVectors() {
    const connection = await oracledb.getConnection();
    const documents = [{ content: "Document text", metadata: {} }];
    const sparseStore = new OracleVecDB({
        dbSource: connection,
        tableName: "SPARSE_DOCUMENTS",
        vector: { dimensions: 3, storageType: "SPARSE" },
    });
    const sparse = new oracledb.SparseVector<Float32Array>({
        numDimensions: 3,
        indices: [0],
        values: new Float32Array([1]),
    });
    await sparseStore.addVectors([sparse], documents, { autoCommit: true });
    const unsignedSparse = new oracledb.SparseVector<Uint8Array>({
        numDimensions: 3,
        indices: [0],
        values: new Uint8Array([1]),
    });
    await sparseStore.addVectors([unsignedSparse], documents, { autoCommit: true });
    await sparseStore.search({ queryBy: { vector: unsignedSparse } });
    await sparseStore.addVectors([[1, 0, 0]], documents, { autoCommit: true });
    await sparseStore.search({ queryBy: { vector: sparse } });

    const binaryStore = new OracleVecDB({
        dbSource: connection,
        tableName: "BINARY_DOCUMENTS",
        vector: { dimensions: 8, storageFormat: "BINARY" },
        vectorDistanceType: "JACCARD",
    });
    await binaryStore.addVectors([new Uint8Array([128])], documents, { autoCommit: true });
    await binaryStore.search({ queryBy: { vector: [1, 0, 0, 0, 0, 0, 0, 0] } });
}

export async function testVectorSdkSearch() {
    const connection = await oracledb.getConnection();
    const store = new OracleVecDB({
        dbSource: connection,
        tableName: "DOCUMENTS",
        vector: { dimensions: 3 },
        modelParams: { provider: "database", model: "EMBED_MODEL" },
    });
    const results = await store.search({
        queryBy: { vector: [1, 0, 0] },
        topK: 5,
        accuracy: 95,
        includeVector: true,
        filter: {
            $and: [
                { category: "database", active: true, optional: null, tags: ["a", "b"] },
                { $or: [{ year: { $gte: 2020, $lte: 2026 } }, { title: { $like: "Oracle%" } }] },
                { year: { $between: [2020, 2026], $gt: 2019, $lt: 2027 } },
                { category: { $eq: "database", $ne: "other", $in: ["database"], $nin: ["other"], $exists: true } },
                { "author.name": { $between: ["A", "Z"] } },
            ],
        },
    });
    expectType<vectorSdk.SearchResult[]>(results);
    expectType<string | null>(results[0].id);
    expectType<string | null>(results[0].content);
    expectType<Record<string, unknown> | null>(results[0].metadata);
    expectType<number | null>(results[0].distance);
    expectType<vectorSdk.Vector | null | undefined>(results[0].vector);
    expectType<vectorSdk.SearchResult[]>(await store.search({ queryBy: { text: "Oracle vector search" } }));

    // @ts-expect-error Supply exactly one query representation.
    await store.search({ queryBy: { vector: [1, 0, 0], text: "Document text" } });
    // @ts-expect-error A query representation is required.
    await store.search({ queryBy: {} });
    // @ts-expect-error $exists requires a boolean.
    await store.search({ queryBy: { text: "Document text" }, filter: { category: { $exists: "yes" } } });
    // @ts-expect-error Ordered comparisons do not accept booleans.
    await store.search({ queryBy: { text: "Document text" }, filter: { year: { $gt: true } } });
    // @ts-expect-error $between bounds must have the same type.
    await store.search({ queryBy: { text: "Document text" }, filter: { year: { $between: [2020, "2026"] } } });
    // @ts-expect-error Unsupported comparison operator.
    await store.search({ queryBy: { text: "Document text" }, filter: { category: { $regex: "Oracle" } } });
    // @ts-expect-error $and requires an array of filter objects.
    await store.search({ queryBy: { vector: [1, 0, 0] }, filter: { $and: "invalid" } });
    // @ts-expect-error Logical filter children must be filter objects, not strings.
    await store.search({ queryBy: { vector: [1, 0, 0] }, filter: { $or: ["invalid"] } });
    // @ts-expect-error Logical filter children must be filter objects, not numbers.
    await store.search({ queryBy: { vector: [1, 0, 0] }, filter: { $and: [1, 2] } });
    await store.search({
        queryBy: { vector: [1, 0, 0] },
        // @ts-expect-error A logical filter node cannot contain both $and and $or.
        filter: { $and: [{ category: "a" }], $or: [{ category: "b" }] },
    });
}

export async function testVectorSdkIndexes() {
    const connection = await oracledb.getConnection();
    const store = new OracleVecDB({ dbSource: connection, tableName: "DOCUMENTS", vector: { dimensions: 3 } });
    expectType<Promise<void>>(store.createVectorIndex({
        indexName: "DOC_HNSW_INDEX",
        parameters: { neighbors: 16, efConstruction: 200 },
        type: "HNSW",
        accuracy: 90,
        parallel: 2,
        partitioningScheme: "GLOBAL",
        includeColumns: ["external_id"],
    }));
    await store.createVectorIndex({ indexName: "DOC_IVF_INDEX", type: "IVF", parameters: { partitions: 16 } });
    expectType<Record<string, unknown>>(await vectorSdk.getIndexBuildStatus(connection, "DOCUMENTS"));

    // @ts-expect-error Index parameters are required.
    await store.createVectorIndex({ indexName: "DOC_INDEX" });
    // @ts-expect-error Only HNSW and IVF index types are supported.
    await store.createVectorIndex({ indexName: "DOC_INDEX", parameters: {}, type: "BTREE" });
    // @ts-expect-error The status helper accepts a string table name.
    await vectorSdk.getIndexBuildStatus(connection, { schema: "HR", name: "DOCUMENTS" });
}

export async function testVectorSdkModels() {
    const connection = await oracledb.getConnection();
    expectType<Promise<void>>(vectorSdk.loadModel(connection, {
        dirName: "MODEL_DIR",
        modelFile: "embedding.onnx",
        modelName: "EMBED_MODEL",
        modelMetadata: { function: "embedding", embeddingOutput: "embedding" },
    }));
    const description = await vectorSdk.describeModel(connection, "EMBED_MODEL");
    expectType<vectorSdk.ModelDescription>(description);
    expectType<string>(description.model_name);
    expectType<string | null>(description.attributes[0].vector_info);
    const models = await vectorSdk.listModels(connection);
    expectType<vectorSdk.ModelDescription[]>(models.models);
    expectType<Promise<void>>(vectorSdk.dropModel(connection, "EMBED_MODEL"));
    expectType<Promise<void>>(vectorSdk.dropModel(connection, "EMBED_MODEL", true));

    // @ts-expect-error A model file is required.
    await vectorSdk.loadModel(connection, { dirName: "MODEL_DIR", modelName: "EMBED_MODEL" });
    // @ts-expect-error force must be a boolean.
    await vectorSdk.dropModel(connection, "EMBED_MODEL", "true");
    // @ts-expect-error Model helpers require a connection, not a pool.
    await vectorSdk.listModels(await oracledb.createPool({}));
}
