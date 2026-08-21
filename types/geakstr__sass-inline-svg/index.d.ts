declare function inliner(
    svgPath: string,
    options?: {
        encodingFormat?: "base64" | "uri";
        optimize?: boolean;
    },
): (path: string, selectors: string) => string;

export = inliner;
