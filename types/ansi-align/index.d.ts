type Align = "left" | "center" | "right";

interface AnsiAlign {
    (text: string, opts?: { align?: Align; split?: string; pad?: string }): string;
    (text: readonly string[], opts?: { align?: Align; pad?: string }): string[];
    center(text: string): string;
    center(text: readonly string[]): string[];
    right(text: string): string;
    right(text: readonly string[]): string[];
    left(text: string): string;
    left(text: readonly string[]): string[];
}

declare const ansiAlign: AnsiAlign;

export = ansiAlign;
