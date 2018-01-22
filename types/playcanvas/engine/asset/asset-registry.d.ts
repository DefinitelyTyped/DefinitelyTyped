declare namespace pc {

    /**
    * @name pc.AssetRegistry
    * @class Container for all assets that are available to this application
    * @description Create an instance of an AssetRegistry.
    * Note: PlayCanvas scripts are provided with an AssetRegistry instance as 'app.assets'.
    * @param {pc.ResourceLoader} loader The ResourceLoader used to load the asset files.
    * @property {String} prefix A URL prefix that will be added to all asset loading requests.
    */
    class AssetRegistry {
        constructor(loader: pc.ResourceLoader)

        /**
        * @function
        * @name pc.AssetRegistry#list
        * @description Create a filtered list of assets from the registry
        * @param {Object} filters Properties to filter on, currently supports: 'preload: true|false'
        * @returns {pc.Asset[]} The filtered list of assets.
        */
        list(filters: {}): pc.Asset[];

        /**
        * @function
        * @name pc.AssetRegistry#add
        * @description Add an asset to the registry
        * @param {pc.Asset} asset The asset to add
        * @example
        * var asset = new pc.Asset("My Asset", "texture", {url: "../path/to/image.jpg"});
        * app.assets.add(asset);
        */
        add(asset: pc.Asset): void;

        /**
        * @function
        * @name pc.AssetRegistry#remove
        * @description Remove an asset from the registry
        * @param {pc.Asset} asset The asset to remove
        * @example
        * var asset = app.assets.get(100);
        * app.assets.remove(asset);
        */
        remove(asset: pc.Asset): void;

        /**
        * @function
        * @name pc.AssetRegistry#get
        * @description Retrieve an asset from the registry by its id field
        * @param {Number} id the id of the asset to get
        * @returns {pc.Asset} The asset
        * @example
        * var asset = app.assets.get(100);
        */
        get(id: number): pc.Asset

        /**
        * @function
        * @name pc.AssetRegistry#getByUrl
        * @description Retrieve an asset from the registry by it's file's URL field
        * @param {String} url The url of the asset to get
        * @returns {pc.Asset} The asset
        * @example
        * var asset = app.assets.getByUrl("../path/to/image.jpg");
        */
        getByUrl(url: string): pc.Asset

        /**
        * @function
        * @name pc.AssetRegistry#load
        * @description Load the asset's file from a remote source. Listen for "load" events on the asset to find out when it is loaded
        * @param {pc.Asset} asset The asset to load
        * @example
        * // load some assets
        * var toload = [app.assets.find("My Asset"), app.assets.find("Another Asset")]
        * var count = 0;
        * for (var i = 0; i < toload.length; i++) {
        *     var asset = toload[i];
        *     asset.ready(function (asset) {
        *         count++;
        *         if (count === toload.length) {
        *             // done
        *         }
        *     });
        *     app.assets.load(asset)
        * }
        */
        load(asset: pc.Asset): void;

        /**
        * @function
        * @name pc.AssetRegistry#loadFromUrl
        * @description Use this to load and create an asset if you don't have assets created. Usually you would only use this
        * if you are not integrated with the PlayCanvas Editor
        * @param {String} url The url to load
        * @param {String} type The type of asset to load
        * @param {Function} callback Function called when asset is loaded, passed (err, asset), where err is null if no errors were encountered
        * @example
        * app.assets.loadFromUrl("../path/to/texture.jpg", "texture", function (err, asset) {
        *     var texture = asset.resource;
        * });
        */
        loadFromUrl(url: string, type: string, callback: (...args: any[]) => {}): void;

        /**
        * @function
        * @name pc.AssetRegistry#findAll
        * @description Return all Assets with the specified name and type found in the registry
        * @param {String} name The name of the Assets to find
        * @param {String} [type] The type of the Assets to find
        * @returns {pc.Asset[]} A list of all Assets found
        * @example
        * var assets = app.assets.findAll("myTextureAsset", "texture");
        * console.log("Found " + assets.length + " assets called " + name);
        */
        findAll(name: string, type?: string): pc.Asset[];

        /**
        * @function
        * @name pc.AssetRegistry#findByTag
        * @description Return all Assets that satisfy the search query.
        * Query can be simply a string, or comma separated strings,
        * to have inclusive results of assets that match at least one query.
        * A query that consists of an array of tags can be used to match assets that have each tag of array
        * @param {String} tag Name of a tag or array of tags
        * @returns {pc.Asset[]} A list of all Assets matched query
        * @example
        * var assets = app.assets.findByTag("level-1");
        * // returns all assets that tagged by `level-1`
        * @example
        * var assets = app.assets.findByTag("level-1", "level-2");
        * // returns all assets that tagged by `level-1` OR `level-2`
        * @example
        * var assets = app.assets.findByTag([ "level-1", "monster" ]);
        * // returns all assets that tagged by `level-1` AND `monster`
        * @example
        * var assets = app.assets.findByTag([ "level-1", "monster" ], [ "level-2", "monster" ]);
        * // returns all assets that tagged by (`level-1` AND `monster`) OR (`level-2` AND `monster`)
        */
        findByTag(tag: string | string[]): pc.Asset[];

        /**
        * @function
        * @name pc.AssetRegistry#filter
        * @description Return all Assets that satisfy filter callback
        * @param {Function} callback The callback function that is used to filter assets, return `true` to include asset to result list
        * @returns {pc.Asset[]} A list of all Assets found
        * @example
        * var assets = app.assets.filter(function(asset) {
        *     return asset.name.indexOf('monster') !== -1;
        * });
        * console.log("Found " + assets.length + " assets, where names contains 'monster'");
        */
        filter(callback: (...args: any[]) => {}): pc.Asset[];

        /**
        * @function
        * @name pc.AssetRegistry#find
        * @description Return the first Asset with the specified name and type found in the registry
        * @param {String} name The name of the Asset to find
        * @param {String} [type] The type of the Asset to find
        * @returns {pc.Asset} A single Asset or null if no Asset is found
        * @example
        * var asset = app.assets.find("myTextureAsset", "texture");
        */
        find(name: string, type?: string): pc.Asset;
    }
}