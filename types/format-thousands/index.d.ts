export = formatThousands;

declare function formatThousands(
    number?: number | string,
    option?: string | { separator?: string; formatFourDigits?: boolean },
): string;
