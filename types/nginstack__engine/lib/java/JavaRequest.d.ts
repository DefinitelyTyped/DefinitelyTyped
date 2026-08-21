export = JavaRequest;
declare function JavaRequest(): void;
declare class JavaRequest {
    getParameter(indexOrName: number | string): string;
    getParameterName(index: number): string;
    parameterCount: number;
}
