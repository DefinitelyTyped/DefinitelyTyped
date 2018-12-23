// Type definitions for parse-columns 1.3
// Project: https://github.com/sindresorhus/parse-columns
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = parseColumns;

declare function parseColumns(
    input: string,
    options?: parseColumns.BaseOptions
): Array<{ [key: string]: string }>;
declare function parseColumns<T>(
    input: string,
    options: parseColumns.Options<T>
): Array<{ [key: string]: T }>;

declare namespace parseColumns {
    interface BaseOptions {
        separator?: string;
        headers?: ReadonlyArray<string>;
    }

    interface Options<T> extends BaseOptions {
        transform: (element: string, header: string, columnIndex: number, rowIndex: number) => T;
    }
}
