declare namespace ansiHTML {
    interface Colors {
        reset: string | readonly string[];
        black: string;
        red: string;
        green: string;
        yellow: string;
        blue: string;
        magenta: string;
        cyan: string;
        lightgrey: string;
        darkgrey: string;
    }

    interface Tags {
        open: { [key: number]: string };
        close: { [key: number]: string };
    }

    interface AnsiHTML {
        (text: string): string;
        setColors(colors: Partial<Colors>): void;
        reset(): void;
        tags: Tags;
    }
}

declare const ansiHTML: ansiHTML.AnsiHTML;
export = ansiHTML;
