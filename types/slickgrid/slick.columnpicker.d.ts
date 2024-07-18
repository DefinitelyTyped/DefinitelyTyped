declare namespace Slick {
    export namespace Controls {
        export interface SlickColumnPickerOptions {
            fadeSpeed?: number | undefined;
        }

        export class ColumnPicker<T extends Slick.SlickData> {
            constructor(columns: Array<Slick.Column<T>>, grid: Slick.Grid<T>, options: SlickColumnPickerOptions);
            getAllColumns(): Array<Slick.Column<T>>;
            destroy(): void;
        }
    }
}
