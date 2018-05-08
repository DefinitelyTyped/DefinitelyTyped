// Type definitions for react-dnd-test-backend 2.5
// Project: https://github.com/react-dnd/react-dnd#readme
// Definitions by: Gustavo Henke <https://github.com/gustavohenke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as ReactDnd from "react-dnd";

export default class TestBackend implements ReactDnd.Backend {
    simulateBeginDrag(sourceIds: ReactDnd.Identifier[], options?: {}): void;
    simulatePublishDragSource(): void;
    simulateHover(targetIds: ReactDnd.Identifier[], options?: {}): void;
    simulateDrop(): void;
    simulateEndDrag(): void;
}
