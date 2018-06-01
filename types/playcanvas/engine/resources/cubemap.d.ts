declare namespace pc {
    class CubemapHandler {
        load(url: string, callback: Function): void;
        open(url: string, data: any): any;
        patch(asset: pc.Asset, assets: pc.AssetRegistry): void;
    }
}
