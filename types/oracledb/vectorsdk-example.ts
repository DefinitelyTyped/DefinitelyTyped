import * as oracledb from "oracledb";
import { OracleVecDB } from "oracledb/plugins/vectorsdk";

// Requires Oracle Database 23.4 or later and privileges to create a table.
// The connection and its lifecycle belong to the application.
export async function vectorSdkExample() {
    const connection = await oracledb.getConnection({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        connectString: process.env.DB_CONNECTION_STRING,
    });

    try {
        const vectorStore = new OracleVecDB({
            dbSource: connection,
            tableName: `VSDK_EXAMPLE_${Date.now()}`,
            vector: { dimensions: 3, storageFormat: "FLOAT32" },
            vectorDistanceType: "COSINE",
        });

        await vectorStore.createVectorTable();
        try {
            const ids = await vectorStore.addVectors(
                [new Float32Array([1, 0, 0]), new Float32Array([0, 1, 0])],
                [
                    { content: "Oracle Database supports vector search.", metadata: { category: "database" } },
                    { content: "Embeddings represent documents as vectors.", metadata: { category: "vectors" } },
                ],
                { autoCommit: true },
            );

            const results = await vectorStore.search({
                queryBy: { vector: new Float32Array([1, 0, 0]) },
                topK: 2,
                filter: { category: { $in: ["database", "vectors"] } },
                includeVector: true,
            });

            for (const result of results) {
                console.log(result.id, result.content, result.distance, result.metadata, result.vector);
            }

            await vectorStore.delete({ ids, autoCommit: true });
        } finally {
            await vectorStore.dropTable(true);
        }
    } finally {
        await connection.close();
    }
}

if (require.main === module) {
    vectorSdkExample().catch(error => {
        console.error(error);
        process.exitCode = 1;
    });
}
