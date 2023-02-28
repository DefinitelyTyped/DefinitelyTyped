// Type definitions for format-thousands 2.0
// Project: https://github.com/VovanR/format-thousands
// Definitions by: Jerry Wang <https://github.com/c1495616js>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = formatThousands;

declare function formatThousands(number?: number | string, option?: string | { separator?: string; formatFourDigits?: boolean }): string;
