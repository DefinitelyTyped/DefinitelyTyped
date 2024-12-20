declare class NCD {
    static inspection: {
        test(codes: string, rules?: string[]): boolean | NCD.CodeInspectionResult[];
        rules: {
            NoContextSpecifiedInSelector(codes: string, excludes: string[], report: NCD.CodeInspectionResult[]): void;
            UseTheComponentsValMethod(codes: string, excludes: string[], report: NCD.CodeInspectionResult[]): void;
        };
        report: {
            console(data: NCD.CodeInspectionResult[], url: string): false | undefined;
        };
    };

    static addSourceURL(codes: string, sourceURL: string): string;
}
