declare module "node:sea" {
    type AssetKey = string;
    export function isSea(): boolean;
    export function getAsset(key: AssetKey): ArrayBuffer;
    export function getAsset(key: AssetKey, encoding: string): string;
    export function getAssetAsBlob(key: AssetKey, options?: {
        type: string;
    }): Blob;
    export function getRawAsset(key: AssetKey): string | ArrayBuffer;
}
