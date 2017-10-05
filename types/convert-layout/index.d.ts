// Type definitions for convert-layout 0.5
// Project: https://github.com/ai/convert-layout#readme
// Definitions by: Mikhail Aksenov <https://github.com/xeningem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
export const layouts: { [id: string]: layout };

export interface layout {
    toEn(s: string): string;
    fromEn(s: string): string;
}
