function test(testContext: webvis.ContextAPI): void {
    const result: Promise<webvis.QueryResult> = testContext.query({
        select: ["nodeId"],
        conditions: [
            { nodeType: "structure" },
            { metadata: "structMetaData.Name", equals: "test" },
        ],
        linkDepth: 1,
    });

    const result2: Promise<webvis.QueryResult> = testContext.query({
        select: ["nodeId"],
        conditions: [
            { nodeType: "structure" },
            { property: "enabled", equals: true },
        ],
        linkDepth: 1,
    });
}
