export = webglAtlas;
/**
 * My naive implementation of textures atlas. It allows clients to load
 * multiple images into atlas and get canvas representing all of them.
 *
 * @param tilesPerTexture - indicates how many images can be loaded to one
 *          texture of the atlas. If number of loaded images exceeds this
 *          parameter a new canvas will be created.
 */
declare function webglAtlas(tilesPerTexture: any): {
    /**
     * indicates whether atlas has changed texture in it. If true then
     * some of the textures has isDirty flag set as well.
     */
    isDirty: boolean;
    /**
     * Clears any signs of atlas changes.
     */
    clearDirty: () => void;
    /**
     * Removes given url from collection of tiles in the atlas.
     */
    remove: (imgUrl: any) => boolean;
    /**
     * Gets all textures in the atlas.
     */
    getTextures: () => any[];
    /**
     * Gets coordinates of the given image in the atlas. Coordinates is an object:
     * {offset : int } - where offset is an absolute position of the image in the
     * atlas.
     *
     * Absolute means it can be larger than tilesPerTexture parameter, and in that
     * case clients should get next texture in getTextures() collection.
     */
    getCoordinates: (imgUrl: any) => any;
    /**
     * Asynchronously Loads the image to the atlas. Cross-domain security
     * limitation applies.
     */
    load: (imgUrl: any, callback: any) => void;
};
