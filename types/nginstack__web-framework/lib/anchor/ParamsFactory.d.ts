export = ParamsFactory;
declare function ParamsFactory(): void;
declare namespace ParamsFactory {
    function createParams(names: any, values: any): any;
    function updateParams(params: any, names: any, values: any): void;
}
