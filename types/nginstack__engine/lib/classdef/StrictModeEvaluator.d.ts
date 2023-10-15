export = StrictModeEvaluator;
declare function StrictModeEvaluator(...args: any[]): void;
declare class StrictModeEvaluator {
    constructor(...args: any[]);
    private protected_;
    private preserved_;
    private enableLevel_;
    private pauseLevel_;
    enabled: boolean;
    private preserve_;
    private restore_;
    private protectProperty_;
    private restoreProperty_;
    private protect_;
    private unprotect_;
    enable(): void;
    disable(): void;
    pause(): void;
    resume(): void;
}
declare namespace StrictModeEvaluator {
    export { ProtectedObject };
}
interface ProtectedObject {
    id: string;
    object: any;
    properties: string[];
    methods: any;
    events: string[];
}
