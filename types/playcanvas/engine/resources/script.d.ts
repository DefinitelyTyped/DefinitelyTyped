declare namespace pc {

    /**
     * @name pc.ScriptHandler
     * @class ResourceHandler for loading JavaScript files dynamically
     * Two types of JavaScript files can be loaded, PlayCanvas scripts which contain calls to {@link pc.createScript},
     * or regular JavaScript files, such as third-party libraries.
     * @param {pc.Application} app The running {pc.Application}
     */
    class ScriptHandler {
        static _push(Type: ScriptType): void;

        constructor(app: pc.Application)
        load(url: string, callback: Function): void;
        open(url: string, data: any): any;
        patch(asset: pc.Asset, assets: pc.AssetRegistry): void;
    }
}
