/**
 * Represents the data {@link Source} of a texture.
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/Source | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Source.js | Source}
 */
export class Source {
    /**
     * Create a new instance of {@link Source}
     * @param data The data definition of a texture. Default `null`
     */
    constructor(data: any);

    /**
     * Flag to check if a given object is of type {@link Source}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isSource: true;

    readonly id: number;

    /**
     * The actual data of a texture.
     * @remarks The type of this property depends on the texture that uses this instance.
     */
    data: any;

    /**
     * This property is only relevant when {@link .needsUpdate} is set to `true` and provides more control on how
     * texture data should be processed.
     * When `dataReady` is set to `false`, the engine performs the memory allocation (if necessary) but does not
     * transfer the data into the GPU memory.
     * @default true
     */
    dataReady: boolean;

    /**
     * When the property is set to `true`, the engine allocates the memory for the texture (if necessary) and triggers
     * the actual texture upload to the GPU next time the source is used.
     */
    set needsUpdate(value: boolean);

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * This starts at `0` and counts how many times {@link needsUpdate | .needsUpdate} is set to `true`.
     * @remarks Expects a `Integer`
     * @defaultValue `0`
     */
    version: number;

    /**
     * Convert the data {@link Source} to three.js {@link https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4 | JSON Object/Scene format}.
     * @param meta Optional object containing metadata.
     */
    toJSON(meta?: string | {}): {};
}
