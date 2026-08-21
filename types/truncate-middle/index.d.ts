declare function truncateMiddle(
    text: string | null,
    frontLength?: number,
    backLength?: number,
    ellipsis?: string,
): string;

export = truncateMiddle;
