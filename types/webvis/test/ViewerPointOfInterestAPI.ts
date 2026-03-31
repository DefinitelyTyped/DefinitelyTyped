function test(testContext: webvis.ContextAPI, testViewer: webvis.ViewerAPI): void {
    const points: webvis.PointOfInterest[] = [
        {
            id: 2,
            label: "Test point 1",
            position: [0, 0, 0],
        },
        {
            id: 1,
            label: "Test point 2",
            position: [1, 1, 1],
        },
    ];

    const defaultPOIStyleId: number = testViewer.createPOIStyle();
    const customPOIStyleId: number = testViewer.createPOIStyle({
        color: [1, 0, 0, 0.7],
        size: 15,
        sprite: null,
        name: "Test Style",
    });

    const changePOIStyleResult: webvis.POIStyleProperties = testViewer.changePOIStyle(1, {
        color: [0, 1, 0, 0.7],
        size: 20,
        sprite: null,
        name: "Changed Test Style",
    });

    testViewer.removePOIStyle(1);

    const getPOIStyleDataResult: webvis.POIStyleProperties | undefined = testViewer.getPOIStyleData(1);

    const getPOIStylesResult: number[] = testViewer.getPOIStyles();

    const defaultPOISetId: number = testViewer.createPOISet();
    const customPOISetId: number = testViewer.createPOISet({
        enabled: true,
        styleVisible: 0,
        styleOccluded: 1,
        styleHovered: 2,
        useWorldUnits: false,
        points: points,
        labelColor: [1, 0, 0],
        labelOutlineColor: [0, 0, 0],
        name: "Test Label",
    });

    const changePOISetResult: webvis.POISetProperties = testViewer.changePOISet(0, {
        enabled: false,
        styleVisible: 2,
        styleOccluded: 1,
        styleHovered: 0,
        useWorldUnits: true,
        points: points,
        labelColor: [1, 1, 0],
        labelOutlineColor: [1, 0, 1],
        name: "Changed test Label",
    });

    testViewer.removePOISet(3);

    const getPOISetDataResult: webvis.POISetProperties | undefined = testViewer.getPOISetData(2);

    const getPOISetsResult: number[] = testViewer.getPOISets();

    const addPointsToSetResult: number[] = testViewer.addPointsToSet(3, points);

    testViewer.removePointsFromSet(customPOISetId, [2]);

    testViewer.changePointsInSet(1, [1, 2], points);

    testContext.registerListener([webvis.EventType.VIEWER_POI_CLICKED], (event: webvis.ViewerPOIClickedEvent) => {
        console.log("POISet clicked", event.viewerId, event.poiSetId, event.poiId, event.originalEvent);
    });

    testContext.registerListener(
        [webvis.EventType.VIEWER_POI_POINTER_ENTER],
        (event: webvis.ViewerPOIPointerEnterEvent) => {
            console.log("POISet enter", event.viewerId, event.poiSetId, event.poiId, event.originalEvent);
        },
    );

    testContext.registerListener(
        [webvis.EventType.VIEWER_POI_POINTER_OUT],
        (event: webvis.ViewerPOIPointerOutEvent) => {
            console.log("POISet out", event.viewerId, event.poiSetId, event.poiId, event.originalEvent);
        },
    );

    testContext.registerListener(
        [webvis.EventType.VIEWER_POI_SET_CHANGED],
        (event: webvis.ViewerPOISetChangedEvent) => {
            console.log("POISet changed", event.viewerId, event.poiSetId, event.properties);
        },
    );

    testContext.registerListener(
        [webvis.EventType.VIEWER_POI_SET_CREATED],
        (event: webvis.ViewerPOISetCreatedEvent) => {
            console.log("POISet created", event.viewerId, event.poiSetId, event.properties);
        },
    );

    testContext.registerListener(
        [webvis.EventType.VIEWER_POI_SET_REMOVED],
        (event: webvis.ViewerPOISetRemovedEvent) => {
            console.log("POISet removed", event.viewerId, event.poiSetId);
        },
    );

    testContext.registerListener(
        [webvis.EventType.VIEWER_POI_SET_POINTS_ADDED],
        (event: webvis.ViewerPOISetPointsAddedEvent) => {
            console.log("Points added", event.viewerId, event.poiSetId, event.poiIds, event.properties);
        },
    );

    testContext.registerListener(
        [webvis.EventType.VIEWER_POI_SET_POINTS_CHANGED],
        (event: webvis.ViewerPOISetPointsChangedEvent) => {
            console.log("Points changed", event.viewerId, event.poiSetId, event.poiIds);
        },
    );

    testContext.registerListener(
        [webvis.EventType.VIEWER_POI_SET_POINTS_REMOVED],
        (event: webvis.ViewerPOISetPointsRemovedEvent) => {
            console.log("Points removed", event.viewerId, event.poiSetId, event.poiIds);
        },
    );

    testContext.registerListener(
        [webvis.EventType.VIEWER_POI_STYLE_CHANGED],
        (event: webvis.ViewerPOIStyleChangedEvent) => {
            console.log("POIStyle changed", event.viewerId, event.poiStyleId, event.poiStyleProperties);
        },
    );

    testContext.registerListener(
        [webvis.EventType.VIEWER_POI_STYLE_CREATED],
        (event: webvis.ViewerPOIStyleCreatedEvent) => {
            console.log("POIStyle created", event.viewerId, event.poiStyleId, event.poiStyleProperties);
        },
    );

    testContext.registerListener(
        [webvis.EventType.VIEWER_POI_STYLE_REMOVED],
        (event: webvis.ViewerPOIStyleRemovedEvent) => {
            console.log("POIStyle removed", event.viewerId, event.poiStyleId);
        },
    );
}
