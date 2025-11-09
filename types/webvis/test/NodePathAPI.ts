function test(testContext: webvis.ContextAPI): void {
    const nodePathHandles: Promise<webvis.NodePathHandle[]> = testContext.createNodePathHandles([1, 23]);

    const nodePathHandleMap: Promise<webvis.NodePathHandleMap> = testContext.requestNodePathHandleMap([], 1);

    const nodePathStrings: Promise<string[]> = testContext.requestNodePathStrings(
        [{ nodeID: 5 }],
        1,
        [
            webvis.NodePathFragmentType.LOCAL_ID,
            webvis.NodePathFragmentType.LEAF_INDEX,
            webvis.NodePathFragmentType.LINK_INDEX,
        ],
    );
}
