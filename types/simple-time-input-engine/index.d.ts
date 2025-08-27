export function formatTimeForDisplay({ time, clockMode }: { time: string; clockMode: number }): string;

export function parseInputChange({
    newValue,
    previousTime,
    clockMode,
}: {
    newValue: string;
    previousTime: string;
    clockMode: number;
}): { time: string; valid: boolean };
