declare namespace pc {

    interface ResourceHandler {
        load: (url: 'string', callback: (...args: any[]) => {}) => {};
        open: (url: 'string', date: any) => {};
    }

    /**
    * @name pc.ResourceLoader
    * @class Load resource data, potentially from remote sources. Caches resource on load to prevent multiple requests
    * Add ResourceHandlers to handle different types of resources
    */
    class ResourceLoader {

        /**
        * @function
        * @name pc.ResourceLoader#addHandler
        * @description Add a handler for a resource type. Handler should support: load(url, callback) and open(url, data).
        * Handlers can optionally support patch(asset, assets) to handle dependencies on other assets
        * @param {String} type The name of the type that the handler will load
        * @param {pc.ResourceHandler} handler An instance of a resource handler supporting load() and open().
        * @example
        * var loader = new ResourceLoader();
        * loader.addHandler("json", new pc.JsonHandler());
        */
        addHandler(type: string, handler: pc.ResourceHandler): void;

        /**
        * @function
        * @name pc.ResourceLoader#load
        * @description Make a request for a resource from a remote URL. Parse the returned data using the handler for the specified type
        * When loaded and parsed use the callback to return an instance of the resource. Handles multiple requests for
        * @param {String} url The URL of the resource to load
        * @param {String} type The type of resource expected
        * @param {Function} callback The callback used when the resource is loaded or an error occurs. Passed (err, resource) where err is null if there are no errors
        * @example
        * app.loader.load("../path/to/texture.png", "texture", function (err, texture) {
        *     // use texture here
        * });
        */
        load(url: string, type: string, callback: (...args: any[]) => {}, asset?: any): void;

        /**
        * @function
        * @name pc.ResourceLoader#open
        * @description Convert raw resource data into a resource instance. e.g. take 3D model format JSON and return a pc.Model.
        */
        open(type: string, data: any): any;

        /**
        * @function
        * @name pc.ResourceLoader#patch
        * @description Perform any operations on a resource, that requires a dependency on it's asset data or any other asset data
        */
        patch(asset: any, assets: any): void;

        /**
        * @function
        * @name pc.ResourceLoader#getFromCache
        * @description Check cache for resource from a URL. If present return the cached value
        */
        getFromCache(url: string, type: string): any;

        /**
        * @function
        * @name  pc.ResourceLoader#destroy
        * @description Destroys resource loader
        */
        destroy(): void;
    }
}
