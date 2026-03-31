import {
    getAndroidResourceFolderName,
    getAndroidResourceIdentifier,
    getBasePath,
} from "@react-native/assets-registry/path-support";
import {
    AssetDestPathResolver,
    getAssetByID,
    PackagerAsset,
    registerAsset,
} from "@react-native/assets-registry/registry";

const asset: PackagerAsset = {
    __packager_asset: true,
    fileSystemLocation: "/assets",
    httpServerLocation: "/assets",
    width: 100,
    height: 100,
    scales: [1, 1.5, 2, 3, 4],
    hash: "abc123",
    name: "logo",
    type: "png",
};

const assetWithResolver: PackagerAsset = {
    __packager_asset: true,
    fileSystemLocation: "/assets",
    httpServerLocation: "/assets",
    scales: [1],
    hash: "def456",
    name: "icon",
    type: "png",
    resolver: "android",
};

const assetWithNullDimensions: PackagerAsset = {
    __packager_asset: true,
    fileSystemLocation: "/assets",
    httpServerLocation: "/assets",
    width: null,
    height: null,
    scales: [1],
    hash: "ghi789",
    name: "placeholder",
    type: "png",
};

// exactOptionalPropertyTypes: explicit undefined is valid
const assetWithUndefinedDimensions: PackagerAsset = {
    __packager_asset: true,
    fileSystemLocation: "/assets",
    httpServerLocation: "/assets",
    width: undefined,
    height: undefined,
    scales: [1],
    hash: "jkl012",
    name: "empty",
    type: "png",
    resolver: undefined,
};

const resolver: AssetDestPathResolver = "generic";

const id: number = registerAsset(asset);
const retrieved: PackagerAsset = getAssetByID(id);

const folder: string = getAndroidResourceFolderName(asset, 2);
const identifier: string = getAndroidResourceIdentifier(asset);
const basePath: string = getBasePath(asset);
