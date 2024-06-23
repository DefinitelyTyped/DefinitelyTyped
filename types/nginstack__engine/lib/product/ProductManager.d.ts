export = ProductManager;
declare function ProductManager(): void;
declare class ProductManager {
    createProduct(productInfo: any, userId: string, password: string): string;
    enableDevelopment(productStream: string, password: string): void;
    getChangeableProducts(userKey: number): any[];
    setChangeableProducts(userKey: number, products: any[], passwords: any[]): void;
    authenticatePassword(product: number, password: string): boolean;
    changePassword(product: number, currentPassword: string, newPassword: string): void;
    getProductFromKey(key: number): number | null;
    getProductNameFromKey(key: number): string;
    userCanChangeRecord(recordKey: number | DBKey, userKey: number | DBKey): boolean;
}
declare namespace ProductManager {
    export { getInstance, DBKey };
}
declare function getInstance(): ProductManager;
type DBKey = import('../dbkey/DBKey');
