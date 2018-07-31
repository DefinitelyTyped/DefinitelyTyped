declare namespace pc {
    class AnimationHandler {
        load(url: string, callback: Function): void;
        open(url: string, data: any): any;
        patch(asset: pc.Asset, assets: pc.AssetRegistry): void;
    }
}
