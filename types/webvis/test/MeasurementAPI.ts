function test(testContext: webvis.ContextAPI): void {
    const measurementTargetPoint: webvis.MeasurementTarget<webvis.MeasurementTargetClass.POINT> = {
        class: webvis.MeasurementTargetClass.POINT,
        value: [0, 0, 0],
    };

    const measurementTargetPlane: webvis.MeasurementTarget<webvis.MeasurementTargetClass.PLANE> = {
        class: webvis.MeasurementTargetClass.PLANE,
        value: [0, 0, 0, 0.5],
    };

    const measurementTargetLine: webvis.MeasurementTarget<webvis.MeasurementTargetClass.LINE> = {
        class: webvis.MeasurementTargetClass.LINE,
        value: [0, 0, 0, 0, 0, 1],
    };

    const measurementTargetNode: webvis.MeasurementTarget<webvis.MeasurementTargetClass.NODE> = {
        class: webvis.MeasurementTargetClass.NODE,
        value: [3],
    };

    const measurementTargetTopology: webvis.MeasurementTarget<webvis.MeasurementTargetClass.TOPOLOGY> = {
        class: webvis.MeasurementTargetClass.TOPOLOGY,
        value: {
            shapeInstanceID: 1,
            entityID: 1,
            entityType: webvis.EntityType.EDGE,
        },
    };

    const measurementTargetLineSegment: webvis.MeasurementTarget<webvis.MeasurementTargetClass.LINE_SEGMENT> = {
        class: webvis.MeasurementTargetClass.LINE_SEGMENT,
        value: [[0, 0, 0], [0, 0, 1]],
    };

    const measurementTargetCurve: webvis.MeasurementTarget<webvis.MeasurementTargetClass.CURVE> = {
        class: webvis.MeasurementTargetClass.CURVE,
        value: [[[0, 0, 0], [0, 0, 1]], [[0, 0, 1], [0, 0, 2]]],
    };

    const singleMeasurementId: number = testContext.createMeasurement(
        webvis.MeasurementType.SINGLE,
        [measurementTargetTopology],
        {
            anchorPosition: [0, 0, 0],
            contentOffset: [0, 0, 1],
            enabled: true,
            name: "Measurement Single",
        },
    );

    const multiMeasurementId: number = testContext.createMeasurement(
        webvis.MeasurementType.MULTIPLE,
        [measurementTargetPlane, measurementTargetTopology],
        {
            anchorPosition: [0, 0, 0],
            contentOffset: [0, 0, 1],
            enabled: true,
            name: "Measurement Double",
        },
    );

    const arcMeasurementId: number = testContext.createMeasurement(
        webvis.MeasurementType.ARC,
        [measurementTargetPoint, measurementTargetPoint, measurementTargetPoint],
        {
            anchorPosition: [0, 0, 0],
            contentOffset: [0, 0, 1],
            enabled: true,
            name: "Measurement Arc",
        },
    );

    const thicknessMeasurementId: number = testContext.createMeasurement(
        webvis.MeasurementType.THICKNESS,
        [measurementTargetPoint, measurementTargetTopology],
        {
            anchorPosition: [0, 0, 0],
            contentOffset: [0, 0, 1],
            enabled: true,
            name: "Measurement Thickness",
        },
    );

    const changedProps: webvis.MeasurementProperties = testContext.changeMeasurement(singleMeasurementId, {
        enabled: false,
        name: "Measurement Single Changed",
        anchorPosition: [0, 1, 0],
        contentOffset: [0, 1, 0],
    });

    const props: Promise<webvis.MeasurementProperties> = testContext.requestMeasurementData(multiMeasurementId);

    const measurements: number[] = testContext.getMeasurements();

    const removeState: webvis.RemoveState = testContext.removeMeasurement(arcMeasurementId);
    const removeStateSafe: webvis.RemoveState = testContext.removeMeasurement(arcMeasurementId, true);

    const measureBetweenResult: Promise<webvis.BetweenMeasurementResult> = testContext.measureBetween(
        measurementTargetPoint,
        measurementTargetLineSegment,
    );

    const measureNormalResult: Promise<webvis.NormalMeasurementResult> = testContext.measureNormal(
        measurementTargetTopology,
        measurementTargetPoint,
    );

    const measureTangentResult: Promise<webvis.TangentMeasurementResult> = testContext.measureTangent(
        measurementTargetTopology,
        measurementTargetPoint,
    );

    const measureThicknessResult: Promise<webvis.ThicknessMeasurementResult> = testContext.measureThickness(
        measurementTargetTopology,
        measurementTargetPoint,
    );

    const measurePointsByDistanceResult: Promise<webvis.DistanceConstraintMatch[]> = testContext
        .measurePointsByDistance(
            measurementTargetCurve,
            [measurementTargetTopology],
            0.3,
        );

    testContext.registerListener([webvis.EventType.MEASUREMENT_CREATED], (event: webvis.MeasurementCreatedEvent) => {
        console.log("Measurement created", event.measurementID, event.properties);
    });

    testContext.registerListener([webvis.EventType.MEASUREMENT_CHANGED], (event: webvis.MeasurementChangedEvent) => {
        console.log("Measurement changed", event.measurementID, event.properties);
    });

    testContext.registerListener([webvis.EventType.MEASUREMENT_REMOVED], (event: webvis.MeasurementRemovedEvent) => {
        console.log("Measurement removed", event.measurementID);
    });
}
