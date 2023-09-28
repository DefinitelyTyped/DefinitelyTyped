export = RoutesValidator;
declare function RoutesValidator(): void;
declare class RoutesValidator {
    private loadController_;
    private validateAction_;
    private validateParams_;
    private validateRoutes_;
    validateFile(path: string | number): {
        quantity: number;
        errors: Error[];
    };
    validateDirectory(
        directoryKey: number,
        opt_product: number
    ): {
        quantity: number;
        errors: Error[];
    };
}
