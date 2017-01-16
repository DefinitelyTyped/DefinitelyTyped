/**
 * @name Version
 * @description
 * The version of this API
 */
export declare class Version {
    private name;
    private mcVersion;
    /**
     * @description
     * Initializes the Version
     * @param {String} name The name of the Version
     * @param {String} mcVersion The Minecraft Version which is support in this version.
     */
    constructor(name: String, mcVersion: String);
    /**
     * @name Name
     * @description
     * The name of the current version
     */
    readonly Name: String;
    /**
     * @name MCVersion
     * @description
     * The Minecraft Version which is support in this version.
     */
    readonly MCVersion: String;
}
declare var _default: Version;
export default _default;
