declare function cspHashGenerator(
    inlineScriptOrStyle: string,
    options?: {
        algorithm: string;
    },
): string;
export = cspHashGenerator;
