import * as p from "@react-native/assets/path-support";
import * as r from "@react-native/assets/registry";

const asset: r.PackagerAsset = {
    __packager_asset: true,
    fileSystemLocation: "N/A",
    httpServerLocation: "N/A",
    width: 100,
    height: 100,
    scales: [1, 1.5, 2, 3, 4],
    hash: "N/A",
    name: "N/A",
    type: "N/A",
};

function main(): void {
    const id: number = r.registerAsset(asset);
    const a: r.PackagerAsset = r.getAssetByID(id);
    const b: string = p.getAndroidResourceFolderName(asset, 1.5);
    const c: string = p.getAndroidResourceIdentifier(asset);
    const d: string = p.getBasePath(asset);
}
