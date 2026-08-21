function test(testContext: webvis.ContextAPI): void {
    const nodeId: number = testContext.add({
        dataURI: "https://example.com/data",
        parentId: 0,
        label: "Test Node",
        initialProperties: {
            [webvis.Property.ENABLED]: true,
            [webvis.Property.RENDER_MODE]: webvis.RenderMode.FacesTopology,
        },
    });

    const customNodeId: number = testContext.addCustomNode(
        "custom-test-node",
        { customData: "example" },
        webvis.AttachmentType.JSON,
    );

    const removeState: Promise<webvis.RemoveState> = testContext.remove(2);
    const removeStateSafe: Promise<webvis.RemoveState> = testContext.remove(2, true);

    const setBooleanPropPromise: Promise<void> = testContext.setProperty(1, webvis.Property.ENABLED, true);
    const setStringPropPromise: Promise<void> = testContext.setProperty(1, webvis.Property.LABEL, "test label");
    const setMatPropPromise: Promise<void> = testContext.setProperty(1, webvis.Property.LOCAL_TRANSFORM, [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        2,
        0,
        1,
    ]);
    const setEnumPropPromise: Promise<void> = testContext.setProperty(
        [1, 3],
        webvis.Property.RENDER_MODE,
        webvis.RenderMode.FacesTopology,
    );

    const getBooleanPropPromise: Promise<boolean> = testContext.getProperty(1, webvis.Property.GHOSTED);
    const getStringPropPromise: Promise<string> = testContext.getProperty(1, webvis.Property.LABEL);
    const getArrayPropPromise: Promise<number[]> = testContext.getProperty(1, webvis.Property.CHILDREN);
    const getEnumPropPromise: Promise<webvis.RenderMode> = testContext.getProperty(1, webvis.Property.RENDER_MODE);

    const getPropertiesPromise: Promise<webvis.PropertyType<webvis.Property>[]> = testContext.getProperties(1, [
        webvis.Property.ENABLED,
        webvis.Property.LABEL,
        webvis.Property.LOCAL_TRANSFORM,
    ]);

    const fullSceneVolume: Promise<webvis.BoxVolume> = testContext.requestFullSceneVolume();

    const factiveSceneVolume: Promise<webvis.BoxVolume> = testContext.requestActiveSceneVolume();

    const resetPropPromise: Promise<void> = testContext.resetProperty(1, webvis.Property.APPEARANCE_URI);
    const resetPropRecursivePromise: Promise<void> = testContext.resetProperty(
        1,
        webvis.Property.LOCAL_TRANSFORM,
        true,
    );

    const resetPropsPromise: Promise<void> = testContext.resetProperties(1, [
        webvis.Property.RENDER_MODE,
        webvis.Property.ENABLED,
    ]);
    const resetPropsRecursivePromise: Promise<void> = testContext.resetProperties(1, [
        webvis.Property.LOCAL_TRANSFORM,
        webvis.Property.ENABLED,
    ], true);

    const statistics: Promise<any> = testContext.getStatistics(webvis.NodeType.AUX, 1);
    const statisticsRecursive: Promise<any> = testContext.getStatistics(webvis.NodeType.AUX, 1, true);

    const metadata: Promise<{ [key: string]: string }> = testContext.getMetadata(5);

    testContext.registerCustomProperty("testCustomProp", "custom String");
    testContext.registerCustomProperty("testCustomEnableLikeProp", false, true);

    const rootIds: Promise<number[]> = testContext.requestRootNodeIds(1);
    const recursiveRootIds: Promise<number[]> = testContext.requestRootNodeIds(1, true);

    const auxRootIds: Promise<number[]> = testContext.requestAuxRootNodeIds(1);

    const l3dInfo: Promise<any> = testContext.requestL3DInformation(1);

    const customNodes: number[] = testContext.collectRuntimeNodesOfType(webvis.NodeType.CUSTOM);
    const customSubNodes: number[] = testContext.collectRuntimeNodesOfType(webvis.NodeType.CUSTOM, "custom-test-node");

    testContext.setParent(5, 2);

    const isNodeDeletable: boolean = testContext.isNodeDeletable(7);

    const isNodeType: boolean = testContext.isNodeType(2, webvis.NodeType.DIMENSION);

    testContext.invertEnabledStates();

    const nodesInBoxVolume: Promise<number[]> = testContext.requestNodeIdsByBoxVolume(
        testContext.createBoxVolume([0, 0, 0], [1, 1, 1]),
        true,
        false,
        true,
        1,
    );

    const enabledAuxNodes: Promise<number[]> = testContext.getEnabledAuxNodes(1);

    const rootIdByNodeId: number | undefined = testContext.getRootNodeId(7);
    const rootIdByNodeIncludeTarget: number | undefined = testContext.getRootNodeId(7, true);
    const rootIdByTopology: number | undefined = testContext.getRootNodeId({
        shapeInstanceID: 1,
        entityID: 1,
        entityType: webvis.EntityType.EDGE,
    });

    testContext.registerListener([webvis.EventType.NODE_ADDED], (event: webvis.NodeAddedEvent) => {
        console.log(
            "Node added",
            event.targetNodeID,
            event.parentNodeID,
            event.nodeType,
            event.dataUri,
            event.targetNodeDepth,
            event.label,
            event.properties,
            event.usage,
            event.subType,
            event.contentType,
        );
    });

    testContext.registerListener([webvis.EventType.NODE_CHANGED], (event: webvis.NodeChangedEvent) => {
        console.log(
            "Node changed",
            event.targetNodeID,
            event.sourceNodeID,
            event.newValue,
            event.oldValue,
            event.changeList,
        );
    });

    testContext.registerListener([webvis.EventType.NODE_ERROR], (event: webvis.NodeErrorEvent) => {
        console.log("Node error", event.targetNodeId, event.state);
    });

    testContext.registerListener([webvis.EventType.NODE_REMOVED], (event: webvis.NodeRemovedEvent) => {
        console.log("Node error", event.targetNodeID, event.parentNodeID);
    });

    testContext.registerListener(
        [webvis.EventType.CUSTOM_PROPERTY_REGISTERED],
        (event: webvis.CustomPropertyRegisteredEvent) => {
            console.log("Custom Prop registered", event.customPropName, event.defaultValue, event.recursive);
        },
    );

    testContext.registerListener(
        [webvis.EventType.ACTIVE_SCENE_VOLUME_CHANGED],
        (event: webvis.ActiveSceneVolumeChangedEvent) => {
            console.log("Active volume changed", event.volume);
        },
    );
}
