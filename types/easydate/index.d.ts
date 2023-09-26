// Type definitions for easydate 2.2
// Project: https://github.com/roryrjb/easydate
// Definitions by: Satya Rohith <https://github.com/satyarohith>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = easydate;

interface DateConfig {
    setDate?: string | undefined;
    timeZone?: "utc" | "local" | undefined;
    adjust?: boolean | undefined;
}

declare function easydate(pattern: string, config?: DateConfig | string): string;
