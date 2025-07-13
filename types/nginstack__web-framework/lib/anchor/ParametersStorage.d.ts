export = ParametersStorage;
declare function ParametersStorage(): void;
declare class ParametersStorage {
    private file_;
    private key_;
    private write_;
    private read_;
    store(parameters: Record<string, any>): string;
    restore(id: any): Record<string, any>;
}
