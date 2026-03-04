export type AssetDestPathResolver = "android" | "generic";

export interface PackagerAsset {
    __packager_asset: boolean;
    fileSystemLocation: string;
    httpServerLocation: string;
    width?: number | null | undefined;
    height?: number | null | undefined;
    scales: number[];
    hash: string;
    name: string;
    type: string;
    resolver?: AssetDestPathResolver | undefined;
}

export function registerAsset(asset: PackagerAsset): number;
export function getAssetByID(assetId: number): PackagerAsset;
