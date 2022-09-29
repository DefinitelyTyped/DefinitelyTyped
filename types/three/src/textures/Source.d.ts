/**
 * Represents the data source of a texture.
 */
export class Source {
    /**
     * @param [data] The data definition of a texture. default is **null**.
     */
    constructor(data: any);

    /**
     * The actual data of a texture. The type of this property depends on the texture that uses this instance.
     */
    data: any;

    /**
     * Set this to **true** to trigger a data upload to the GPU next time the source is used.
     */
    set needsUpdate(value: boolean);

    /**
     * [UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier) of this object instance.
     * This gets automatically assigned, so this shouldn't be edited.
     */
    uuid: string;

    /**
     * This starts at **0** and counts how many times [property:Boolean needsUpdate] is set to **true**.
     */
    version: number;

    /**
     * Convert the data source to three.js [JSON Object/Scene format](https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4).
     *
     * @param [meta] optional object containing metadata.
     */
    toJSON(meta: any): any;

    readonly isTexture: true;
}
