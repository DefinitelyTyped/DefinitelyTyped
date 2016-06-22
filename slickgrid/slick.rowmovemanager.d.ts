// Type definitions for SlickGrid RowMoveManager Plugin 2.1.0
// Project: https://github.com/mleibman/SlickGrid
// Definitions by: berwyn <https://github.com/berwyn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SlickGrid.d.ts" />

declare namespace Slick {
    export interface SlickGridRowMoveManagerOptions extends PluginOptions {

    }

    export class RowMoveManager<T extends SlickData> extends Plugin<T> {
        constructor(options?: SlickGridRowMoveManagerOptions);
        init(grid: Grid<T>): void;
        destroy(): void;

        onBeforeMoveRows: Event<T>;
        onMoveRows: Event<T>
    }
}
