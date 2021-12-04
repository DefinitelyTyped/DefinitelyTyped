import { AssetDataWithoutFiles, AssetData } from 'metro';

export const assetDataWithoutFiles: AssetDataWithoutFiles = {
    __packager_asset: true,
    fileSystemLocation: 'path',
    hash: 'abc123',
    height: 100,
    httpServerLocation: 'url',
    name: 'name',
    scales: [1, 2, 3],
    type: 'type',
    width: 75,
};

export const assetData: AssetData = {
    ...assetDataWithoutFiles,
    files: ['f1', 'f2'],
};
