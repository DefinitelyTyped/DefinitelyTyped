import {
    downloadSchema,
    generate,
    introspectSchema,
    printSchema
} from "apollo-codegen";

async function main() {
    await downloadSchema(
        "http://example.com/graphql",
        "schema.json",
        {},
        false,
        "POST"
    );

    generate(["input.ts"], "schema.json", "types.ts", "", "typescript", "gql", "", {
        passthroughCustomScalars: false,
        customScalarsPrefix: "S",
        addTypename: false,
        namespace: "",
        operationIdsPath: null,
        generateOperationIds: false,
        mergeInFieldsFromFragmentSpreads: false
    });

    await introspectSchema("schema.json", "schema.gql");

    await printSchema("schema.in", "schema.out");
}
