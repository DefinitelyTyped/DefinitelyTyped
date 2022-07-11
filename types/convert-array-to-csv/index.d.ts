// Type definitions for convert-array-to-csv 2.0
// Project: https://github.com/aichbauer/node-convert-array-to-csv
// Definitions by: Qiming-Liu <https://github.com/Qiming-Liu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function convertArrayToCSV(
    data: object[],
    options?: {
        header?: string[];
        separator?: string;
    },
): string;
