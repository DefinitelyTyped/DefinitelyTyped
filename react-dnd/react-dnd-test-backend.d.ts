// Type definitions for React DnD HTML 5 Backend v2.0.0
// Project: https://github.com/gaearon/react-dnd
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='./react-dnd.d.ts' />

declare module "react-dnd-test-backend" {
    class TestBackend {
        setup(): void;
        teardown(): void;
        connectDragSource(): void;
        connectDropTarget(): void;
        simulateBeginDrag(sourceIds: __ReactDnd.Identifier[], options?: {}): void;
        simulatePublishDragSource(): void;
        simulateHover(targetIds: __ReactDnd.Identifier[], options?: {}): void;
        simulateDrop(): void;
        simulateEndDrag(): void;
    }

    export { TestBackend as default };
}
