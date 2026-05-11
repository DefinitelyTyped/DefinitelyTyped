function test(testContext: webvis.ContextAPI): void {
    const isPartOfVariant: Promise<boolean> = testContext.isNodePartOfEnabledVariant(8);

    const variants: Promise<webvis.VariantProperties[]> = testContext.requestVariants(1);

    testContext.setVariantEnabled(1, true);

    testContext.registerListener([webvis.EventType.VARIANT_CHANGED], (event: webvis.VariantChangedEvent) => {
        console.log("Variant changed", event.variant, event.enabled);
    });
}
