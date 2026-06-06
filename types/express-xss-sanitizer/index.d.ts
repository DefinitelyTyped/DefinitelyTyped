interface XssSanitizerOptions {
    allowedTags?: string[];
    allowedAttributes?: Record<string, string[]>;
    allowedKeys?: string[];
}

declare function xss(options?: XssSanitizerOptions): (req: any, res: any, next: any) => void;
declare function sanitize<T = unknown>(data: T, options?: XssSanitizerOptions): T;

export { sanitize, xss, type XssSanitizerOptions };
