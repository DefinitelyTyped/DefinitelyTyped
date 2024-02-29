interface DetectOptions {
    nocase?: boolean;
}

declare function detect(filepath: string, options?: DetectOptions): string;

export = detect;
