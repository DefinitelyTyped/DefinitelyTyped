import { Loader } from "./three-core";

export class CTMLoader extends Loader {
    constructor();

    /**
     * load multiple CTM parts defined in JSON.
     * @param url(required)
     * @param callback(required)
     * @param parameters
     */
    loadParts(url: string, callback: () => any, parameters?: any): any;

    /**
     * Load CTMLoader compressed models
     * @param url(required)
     * @param callback(required)
     * @param parameters
     */
    load(url: string, callback: (geo: any) => any, parameters?: any): any;

    /**
     * create buffergeometry by ctm file.
     * @param file(required)
     * @param callback(required)
     */
    createModel(file: string, callback: () => any): any;
}
