export interface MaterialXLogCode {
    label: string;
    severity: "error" | "warning";
}

export const MaterialXLogCodes: {
    UNSUPPORTED_NODE: MaterialXLogCode;
    IGNORED_SURFACE_INPUT: MaterialXLogCode;
    MISSING_REFERENCE: MaterialXLogCode;
    MISSING_MATERIAL: MaterialXLogCode;
    INVALID_VALUE: MaterialXLogCode;
    UNKNOWN_INPUT: MaterialXLogCode;
    INVALID_OUTPUT_CONNECTION: MaterialXLogCode;
    TYPE_MISMATCH: MaterialXLogCode;
};

export interface MaterialXLogEntry {
    code: string;
    severity: "error" | "warning";
    message: string;
    nodeName?: string;
}

export class MaterialXLog {
    constructor();

    entries: MaterialXLogEntry[];

    readonly errors: MaterialXLogEntry[];
    readonly warnings: MaterialXLogEntry[];

    add(code: MaterialXLogCode, message: string, nodeName?: string | null): void;
}
