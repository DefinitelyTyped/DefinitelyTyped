function test(testContext: webvis.ContextAPI): void {
    const selection: Promise<number[]> = testContext.getSelection();

    const selectedLeafs: number[] = testContext.getSelectedLeafNodes();

    const selectedNodes: number[] = testContext.getSelectedNodes();

    const clearSelectionResult: Promise<webvis.ChangeSelectionResult> = testContext.clearSelection(false);

    const invertSelectionResult: Promise<webvis.ChangeSelectionResult> = testContext.invertSelection(false);

    const addSelectionResult: Promise<webvis.ChangeSelectionResult> = testContext.addToSelection([1, 3, 5], false);

    const removeSelectionResult: Promise<webvis.ChangeSelectionResult> = testContext.removeFromSelection(
        [1, 3, 5],
        false,
    );

    const isSelected: Promise<boolean> = testContext.isSelected(1);

    const setSelectionResult: Promise<webvis.ChangeSelectionResult> = testContext.setSelection([1, 3, 5], false);

    testContext.registerListener([webvis.EventType.SELECTION_CHANGED], (event: webvis.SelectionChangedEvent) => {
        console.log(
            "Selection changed",
            event.targetNodeID,
            event.oldSelectionCount,
            event.newSelectionCount,
            event.selectedNodes,
        );
    });
}
