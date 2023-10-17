type Align = "left" | "center" | "right";

interface AnsiAlign {
    (text: string, opts?: { align?: Align; split?: string; pad?: string }): string;
    (text: ReadonlyArray<string>, opts?: { align?: Align; pad?: string }): string[];
    center(text: string): string;
    center(text: ReadonlyArray<string>): string[];
    right(text: string): string;
    right(text: ReadonlyArray<string>): string[];
    left(text: string): string;
    left(text: ReadonlyArray<string>): string[];
}

declare const ansiAlign: AnsiAlign;

export = ansiAlign;
