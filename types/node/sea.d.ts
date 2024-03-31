declare module "node:sea" {
    type AssetKey = string

    function isSea(): boolean

    function getAsset(key: AssetKey): ArrayBuffer

    function getAsset(key: AssetKey, encoding: string): string

    function getAssetAsBlob(key: AssetKey, options?: { type: string }): Blob

    function getRawAsset(key: AssetKey): string | ArrayBuffer
}
