declare namespace pc {

    function getMaterialParamType(name: string): string;

    class MaterialHandler {
        load(url: string, callback: Function): void;
        open(url: string, data: any): void;
        patch(asset: pc.Asset, assets: pc.AssetRegistry): void;
    }
}
