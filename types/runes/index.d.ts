declare function runes(text: string): string[];
declare namespace runes {
    function substr(text: string, start: number, width?: number): string;
}

export = runes;
