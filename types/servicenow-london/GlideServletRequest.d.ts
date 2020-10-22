interface GlideServletRequest {
    getContentType(): string;
    getHeader(name: string): string;
    getHeaderNames(): string;
    getHeaders(name: string): string;
    getParameter(name: string): string;
    getParameterNames(): string;
    getQueryString(): string;
    writeOutput(mimeType: string, output: string): void;
    toString(): string;
}
