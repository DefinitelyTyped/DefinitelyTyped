import { Object3D } from "../core/Object3D.js";
import { Skeleton } from "../objects/Skeleton.js";

export interface ParseTrackNameResults {
    nodeName: string;
    objectName: string;
    objectIndex: string;
    propertyName: string;
    propertyIndex: string;
}

/**
 * This holds a reference to a real property in the scene graph; used internally.
 */
export class PropertyBinding {
    /**
     * Factory method for creating a property binding from the given parameters.
     *
     * @static
     * @param {Object} root - The root node.
     * @param {string} path - The path.
     * @param {?Object} [parsedPath] - The parsed path.
     * @return {PropertyBinding|Composite} The created property binding or composite.
     */
    static create(root: object, path: string, parsedPath?: object | null): PropertyBinding | Composite;
    /**
     * Replaces spaces with underscores and removes unsupported characters from
     * node names, to ensure compatibility with parseTrackName().
     *
     * @param {string} name - Node name to be sanitized.
     * @return {string} The sanitized node name.
     */
    static sanitizeNodeName(name: string): string;
    /**
     * Parses the given track name (an object path to an animated property) and
     * returns an object with information about the path. Matches strings in the following forms:
     *
     * - nodeName.property
     * - nodeName.property[accessor]
     * - nodeName.material.property[accessor]
     * - uuid.property[accessor]
     * - uuid.objectName[objectIndex].propertyName[propertyIndex]
     * - parentName/nodeName.property
     * - parentName/parentName/nodeName.property[index]
     * - .bone[Armature.DEF_cog].position
     * - scene:helium_balloon_model:helium_balloon_model.position
     *
     * @static
     * @param {string} trackName - The track name to parse.
     * @return {Object} The parsed track name as an object.
     */
    static parseTrackName(trackName: string): ParseTrackNameResults;
    /**
     * Searches for a node in the hierarchy of the given root object by the given
     * node name.
     *
     * @static
     * @param {Object} root - The root object.
     * @param {string|number} nodeName - The name of the node.
     * @return {?Object} The found node. Returns `null` if no object was found.
     */
    static findNode(root: object, nodeName: string | number): object | null;
    /**
     * Constructs a new property binding.
     *
     * @param {Object} rootNode - The root node.
     * @param {string} path - The path.
     * @param {?Object} [parsedPath] - The parsed path.
     */
    constructor(rootNode: Object3D | Skeleton, path: string, parsedPath?: object | null);
    /**
     * The object path to the animated property.
     */
    path: string;
    /**
     * An object holding information about the path.
     */
    parsedPath: object;
    /**
     * The object owns the animated property.
     */
    node: object | null;
    /**
     * The root node.
     */
    rootNode: Object3D | Skeleton;
    /**
     * Creates a getter / setter pair for the property tracked by this binding.
     */
    bind(): void;
    /**
     * Unbinds the property.
     */
    unbind(): void;
}
export namespace PropertyBinding {
    export { Composite };
}
declare class Composite {
}
export {};
