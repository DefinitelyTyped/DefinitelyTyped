interface GlideServletResponse {
    setContentType(type: string): void;
    setHeader(name: string, value: string): void;
    setStatus(value: number): void;
}
