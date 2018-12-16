declare namespace pc {

    /**
    * @name pc.Font
    * @class Represents the resource of a font asset.
    * @param {pc.Texture} texture The font texture
    * @param {Object} data The font data
    * @property {Number} intensity The font intensity
    */
    class Font {
        constructor(texture: pc.Texture, data: {})

        intensity: number;
    }
}