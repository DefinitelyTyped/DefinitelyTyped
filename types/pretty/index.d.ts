interface PrettyOptions {
    ocd: boolean;
}

declare function pretty(str: string, options?: PrettyOptions): string;

export = pretty;
