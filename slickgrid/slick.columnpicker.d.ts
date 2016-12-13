// Type definitions for SlickGrid ColumnPicker Control 2.1.0
// Project: https://github.com/mleibman/SlickGrid
// Definitions by: berwyn <https://github.com/berwyn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Slick {
    export namespace Controls {
        export interface SlickColumnPickerOptions {
            fadeSpeed?: number;
        }

        export class ColumnPicker<T extends Slick.SlickData> {
            constructor(columns: Slick.Column<T>[], grid: Slick.Grid<T>, options: SlickColumnPickerOptions);
            getAllColumns(): Slick.Column<T>[];
            destroy(): void;
        }
    }
}
