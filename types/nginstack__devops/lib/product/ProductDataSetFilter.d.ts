export = ProductDataSetFilter;
declare function ProductDataSetFilter(
    products: number[],
    database: import("@nginstack/engine/lib/database/Database"),
): void;
declare class ProductDataSetFilter {
    constructor(products: number[], database: import("@nginstack/engine/lib/database/Database"));
    private products_;
    private keys_;
    private ranges_;
    private logger_;
    private mountKeysAndRanges_;
    private getProductInfo_;
    getProductFromKey(key: number): number | null;
    getProductNameFromKey(key: number): string;
    testKey(key: number): boolean;
    filterRecords(
        ds: import("@nginstack/engine/lib/dataset/DataSet"),
        options?: {
            mimeTypes?: number[];
            validKeys?: number[];
        },
    ): import("@nginstack/engine/lib/dataset/DataSet");
    purgeRecords(
        ds: import("@nginstack/engine/lib/dataset/DataSet"),
    ): import("@nginstack/engine/lib/dataset/DataSet");
}
declare namespace ProductDataSetFilter {
    export { ProductInfo };
}
interface ProductInfo {
    key: number;
    name: string;
}
