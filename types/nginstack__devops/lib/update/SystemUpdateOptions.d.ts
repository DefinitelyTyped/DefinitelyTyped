export = SystemUpdateOptions;
declare function SystemUpdateOptions(): void;
declare class SystemUpdateOptions {
    updateType: number;
    products: Array<number | import("@nginstack/engine/lib/dbkey/DBKey")>;
    allowExclusiveProducts: boolean;
    disableEngineUpdate: boolean;
    preserveUnlicensedProducts: boolean;
    ignoreSystemRequirements: boolean;
    getProductDataSetFilter(): ProductDataSetFilter;
    private productDataSetFilter_;
}
declare namespace SystemUpdateOptions {
    export { DBKey };
}
import ProductDataSetFilter = require("../product/ProductDataSetFilter.js");
type DBKey = import("@nginstack/engine/lib/dbkey/DBKey");
