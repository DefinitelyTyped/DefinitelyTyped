function test(testContext: webvis.ContextAPI): void {
    const annotationId: number = testContext.createAnnotation({
        anchorPosition: [0, 0, 0],
        content: "test content",
        contentOffset: [0, 1, 0],
        name: "test annotation",
        enabled: true,
        connectedNodeId: 1,
    });

    testContext.changeAnnotation(annotationId, {
        anchorPosition: [0, 1, 0],
        content: "changed content",
        contentOffset: [0, 2, 0],
        name: "changed annotation",
        enabled: false,
        connectedNodeId: 2,
    });

    testContext.removeAnnotation(annotationId);

    testContext.registerListener([webvis.EventType.ANNOTATION_CREATED], (event: webvis.AnnotationCreatedEvent) => {
        console.log("Annotation created", event.annotationID, event.properties);
    });

    testContext.registerListener([webvis.EventType.ANNOTATION_CHANGED], (event: webvis.AnnotationChangedEvent) => {
        console.log("Annotation changed", event.annotationID, event.properties);
    });

    testContext.registerListener([webvis.EventType.ANNOTATION_REMOVED], (event: webvis.AnnotationRemovedEvent) => {
        console.log("Annotation removed", event.annotationID);
    });
}
