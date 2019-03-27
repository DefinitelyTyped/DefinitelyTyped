import { LoadingManager, ShapePath } from "./three-core";

/**
 * A loader for loading a .svg resource.
 * Scalable Vector Graphics is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation.
 * @see ShapePath
 * @source https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/SVGLoader.js
 */
export class SVGLoader {
    /**
     * Creates a new SVGLoader.
     * @param  {LoadingManager} manager The loadingManager for the loader to use. Default is THREE.DefaultLoadingManager.
     */
    constructor(manager : LoadingManager);

    /**
     * Begin loading from url and call onLoad with the response content.
     * @param  {string} url A string containing the path/URL of the .svg file.
     * @param  {Function} onLoad? (optional) A function to be called after loading is successfully completed. The function receives an array of ShapePath as an argument.
     * @param  {Function} onProgress? (optional) A function to be called while the loading is in progress. The argument will be the XMLHttpRequest instance, which contains total and loaded bytes.
     * @param  {Function} onError? (optional) A function to be called if an error occurs during loading. The function receives the error as an argument.
     * @returns null
     */
    load ( url : string, onLoad? : Function, onProgress? : Function, onError? : Function ) : void;

    /**
     * Set the base path for the file.
     * @param  {string} path Base path.
     * @returns SVGLoader
     */
    setPath ( path : string ) : SVGLoader;
}
