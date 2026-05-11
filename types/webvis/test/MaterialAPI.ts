function test(testContext: webvis.ContextAPI): void {
    const materialId: number = testContext.createMaterial({
        baseColor: [1, 0, 1],
        emissiveColor: [0, 1, 0],
        metallic: 0.5,
        roughness: 0.5,
        opacity: 0.5,
        name: "test material",
    });

    testContext.changeMaterial(materialId, {
        baseColor: [1, 0, 0],
        emissiveColor: [0, 0, 0],
        metallic: 0.2,
        roughness: 0.7,
        opacity: 0.0,
        name: "changed material",
    });

    testContext.removeMaterial(materialId);

    testContext.registerListener([webvis.EventType.MATERIAL_CREATED], (event: webvis.MaterialCreatedEvent) => {
        console.log("Material created", event.materialId, event.properties);
    });

    testContext.registerListener([webvis.EventType.MATERIAL_CHANGED], (event: webvis.MaterialChangedEvent) => {
        console.log("Material changed", event.materialId, event.properties);
    });

    testContext.registerListener([webvis.EventType.MATERIAL_REMOVED], (event: webvis.MaterialRemovedEvent) => {
        console.log("Material removed", event.materialId);
    });
}
