// Type definitions for non-npm package workgrid-core 1.0
// Project: https://github.com/jguardino-workgrid/workgrid-core
// Definitions by: J Guardino <https://github.com/jguardino-workgrid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

export const workgrid: object;
export function init(
    callback: (err: Error, result: string) => void,
    spaceId: string,
    companyCode: string
): void;
