// Type definitions for format-thousands 2.0
// Project: https://github.com/VovanR/format-thousands
// Definitions by: Jerry Wang <https://github.com/c1495616js>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = format_thousands;

declare function format_thousands(number?: number | string, option?: string | { separator?: string; formatFourDigits?: boolean }): string;
