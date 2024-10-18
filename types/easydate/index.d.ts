export = easydate;

interface DateConfig {
    setDate?: string | undefined;
    timeZone?: "utc" | "local" | undefined;
    adjust?: boolean | undefined;
}

declare function easydate(pattern: string, config?: DateConfig | string): string;
