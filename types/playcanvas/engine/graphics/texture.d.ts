declare namespace pc {

    /**
     * @name pc.Texture
     * @class A texture is a container for texel data that can be utilized in a fragment shader.
     * Typically, the texel data represents an image that is mapped over geometry.
     * @description Creates a new texture.
     * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this texture.
     * @param {Object} options Object for passing optional arguments.
     * @param {Number} options.width The width of the texture in pixels. Defaults to 4.
     * @param {Number} options.height The height of the texture in pixels. Defaults to 4.
     * @param {Number} options.depth The number of depth slices in a 3D texture (WebGL2 only). Defaults to 1 (single 2D image).
     * @param {Number} options.format The pixel format of the texture. Can be:
     * <ul>
     *     <li>{@link pc.PIXELFORMAT_A8}</li>
     *     <li>{@link pc.PIXELFORMAT_L8}</li>
     *     <li>{@link pc.PIXELFORMAT_L8_A8}</li>
     *     <li>{@link pc.PIXELFORMAT_R5_G6_B5}</li>
     *     <li>{@link pc.PIXELFORMAT_R5_G5_B5_A1}</li>
     *     <li>{@link pc.PIXELFORMAT_R4_G4_B4_A4}</li>
     *     <li>{@link pc.PIXELFORMAT_R8_G8_B8}</li>
     *     <li>{@link pc.PIXELFORMAT_R8_G8_B8_A8}</li>
     *     <li>{@link pc.PIXELFORMAT_DXT1}</li>
     *     <li>{@link pc.PIXELFORMAT_DXT3}</li>
     *     <li>{@link pc.PIXELFORMAT_DXT5}</li>
     *     <li>{@link pc.PIXELFORMAT_RGB16F}</li>
     *     <li>{@link pc.PIXELFORMAT_RGBA16F}</li>
     *     <li>{@link pc.PIXELFORMAT_RGB32F}</li>
     *     <li>{@link pc.PIXELFORMAT_RGBA32F}</li>
     *     <li>{@link pc.PIXELFORMAT_ETC1}</li>
     *     <li>{@link pc.PIXELFORMAT_PVRTC_2BPP_RGB_1}</li>
     *     <li>{@link pc.PIXELFORMAT_PVRTC_2BPP_RGBA_1}</li>
     *     <li>{@link pc.PIXELFORMAT_PVRTC_4BPP_RGB_1}</li>
     *     <li>{@link pc.PIXELFORMAT_PVRTC_4BPP_RGBA_1}</li>
     *     <li>{@link pc.PIXELFORMAT_111110F}</li>
     * </ul>
     * Defaults to pc.PIXELFORMAT_R8_G8_B8_A8.
     * @param {Number} options.minFilter The minification filter type to use. Defaults to {@link pc.FILTER_LINEAR_MIPMAP_LINEAR}
     * @param {Number} options.magFilter The magnification filter type to use. Defaults to {@link pc.FILTER_LINEAR}
     * @param {Number} options.anisotropy The level of anisotropic filtering to use. Defaults to 1
     * @param {Number} options.addressU The repeat mode to use in the U direction. Defaults to {@link pc.ADDRESS_REPEAT}
     * @param {Number} options.addressV The repeat mode to use in the V direction. Defaults to {@link pc.ADDRESS_REPEAT}
     * @param {Boolean} options.mipmaps When enabled try to generate or use mipmaps for this texture. Default is true
     * @param {Boolean} options.cubemap Specifies whether the texture is to be a cubemap. Defaults to false.
     * @param {Boolean} options.volume Specifies whether the texture is to be a 3D volume (WebGL2 only). Defaults to false.
     * @param {Boolean} options.rgbm Specifies whether the texture contains RGBM-encoded HDR data. Defaults to false.
     * @param {Boolean} options.fixCubemapSeams Specifies whether this cubemap texture requires special
     * seam fixing shader code to look right. Defaults to false.
     * @param {Boolean} options.flipY Specifies whether the texture should be flipped in the Y-direction. Only affects textures
     * with a source that is an image, canvas or video element. Does not affect cubemaps, compressed textures or textures set from raw
     * pixel data. Defaults to true.
     * @param {Boolean} options.compareOnRead When enabled, and if texture format is pc.PIXELFORMAT_DEPTH or pc.PIXELFORMAT_DEPTHSTENCIL,
     * hardware PCF is enabled for this texture, and you can get filtered results of comparison using texture() in your shader (WebGL2 only).
     * Defaults to false.
     * @param {Number} options.compareFunc Comparison function when compareOnRead is enabled (WebGL2 only). Defaults to pc.FUNC_LESS.
     * Possible values:
     * <ul>
     *     <li>pc.FUNC_LESS</li>
     *     <li>pc.FUNC_LESSEQUAL</li>
     *     <li>pc.FUNC_GREATER</li>
     *     <li>pc.FUNC_GREATEREQUAL</li>
     *     <li>pc.FUNC_EQUAL</li>
     *     <li>pc.FUNC_NOTEQUAL</li>
     * </ul>
     * @example
     * // Create a 8x8x24-bit texture
     * var texture = new pc.Texture(graphicsDevice, {
     *     width: 8,
     *     height: 8,
     *     format: pc.PIXELFORMAT_R8_G8_B8
     * });
     *
     * // Fill the texture with a gradient
     * var pixels = texture.lock();
     * var count = 0;
     * for (var i = 0; i < 8; i++) {
     *     for (var j = 0; j < 8; j++) {
     *         pixels[count++] = i * 32;
     *         pixels[count++] = j * 32;
     *         pixels[count++] = 255;
     *     }
     * }
     * texture.unlock();
     * @property {String} name The name of the texture. Defaults to null.
     * @author Will Eastcott
     */
    class Texture {
        constructor(graphicsDevice: pc.GraphicsDevice, options: {
            width: number,
            height: number,
            depth: number,
            format: number,
            minFilter: number,
            magFilter: number,
            anisotropy: number,
            addressU: number,
            addressV: number,
            mipmaps: boolean,
            cubemap: boolean,
            volume: boolean,
            rgbm: boolean,
            fixCubemapSeams: boolean,
            flipY: boolean,
            compareOnRead: boolean,
            compareFunc: boolean
        })

        name: string;

        /**
         * @name pc.Texture#minFilter
         * @type Number
         * @description The minification filter to be applied to the texture. Can be:
         * <ul>
         *     <li>{@link pc.FILTER_NEAREST}</li>
         *     <li>{@link pc.FILTER_LINEAR}</li>
         *     <li>{@link pc.FILTER_NEAREST_MIPMAP_NEAREST}</li>
         *     <li>{@link pc.FILTER_NEAREST_MIPMAP_LINEAR}</li>
         *     <li>{@link pc.FILTER_LINEAR_MIPMAP_NEAREST}</li>
         *     <li>{@link pc.FILTER_LINEAR_MIPMAP_LINEAR}</li>
         * </ul>
         */
        minFilter: number;

        /**
         * @name pc.Texture#magFilter
         * @type Number
         * @description The magnification filter to be applied to the texture. Can be:
         * <ul>
         *     <li>{@link pc.FILTER_NEAREST}</li>
         *     <li>{@link pc.FILTER_LINEAR}</li>
         * </ul>
         */
        magFilter: number;

        /**
         * @name pc.Texture#addressU
         * @type Number
         * @description The addressing mode to be applied to the texture horizontally. Can be:
         * <ul>
         *     <li>{@link pc.ADDRESS_REPEAT}</li>
         *     <li>{@link pc.ADDRESS_CLAMP_TO_EDGE}</li>
         *     <li>{@link pc.ADDRESS_MIRRORED_REPEAT}</li>
         * </ul>
         */
        addressU: number;

        /**
         * @name pc.Texture#addressV
         * @type Number
         * @description The addressing mode to be applied to the texture vertically. Can be:
         * <ul>
         *     <li>{@link pc.ADDRESS_REPEAT}</li>
         *     <li>{@link pc.ADDRESS_CLAMP_TO_EDGE}</li>
         *     <li>{@link pc.ADDRESS_MIRRORED_REPEAT}</li>
         * </ul>
         */
        addressV: number;

        /**
         * @name pc.Texture#addressW
         * @type Number
         * @description The addressing mode to be applied to the 3D texture depth (WebGL2 only). Can be:
         * <ul>
         *     <li>{@link pc.ADDRESS_REPEAT}</li>
         *     <li>{@link pc.ADDRESS_CLAMP_TO_EDGE}</li>
         *     <li>{@link pc.ADDRESS_MIRRORED_REPEAT}</li>
         * </ul>
         */
        addressW: number;

        /**
         * @name pc.Texture#compareOnRead
         * @type Boolean
         * @description When enabled, and if texture format is pc.PIXELFORMAT_DEPTH or pc.PIXELFORMAT_DEPTHSTENCIL,
         * hardware PCF is enabled for this texture, and you can get filtered results of comparison using texture() in your shader (WebGL2 only).
         */
        compareOnRead: boolean;

        /**
         * @name pc.Texture#compareFunc
         * @type Number
         * @description Comparison function when compareOnRead is enabled (WebGL2 only).
         * Possible values:
         * <ul>
         *     <li>pc.FUNC_LESS</li>
         *     <li>pc.FUNC_LESSEQUAL</li>
         *     <li>pc.FUNC_GREATER</li>
         *     <li>pc.FUNC_GREATEREQUAL</li>
         *     <li>pc.FUNC_EQUAL</li>
         *     <li>pc.FUNC_NOTEQUAL</li>
         * </ul>
         */
        compareFunc: number;

        /**
         * @private
         * @deprecated
         * @name pc.Texture#autoMipmap
         * @type Boolean
         * @description Toggles automatic mipmap generation. Can't be used on non power of two textures.
         */
        private autoMipmap: boolean;

        /**
         * @name pc.Texture#mipmaps
         * @type Boolean
         * @description Defines if texture should generate/upload mipmaps if possible.
         */
        mipmaps: boolean;

        /**
         * @name pc.Texture#anisotropy
         * @type Number
         * @description Integer value specifying the level of anisotropic to apply to the texture
         * ranging from 1 (no anisotropic filtering) to the {@link pc.GraphicsDevice} property maxAnisotropy.
         */
        anisotropy: number;

        /**
         * @readonly
         * @name pc.Texture#width
         * @type Number
         * @description The width of the texture in pixels.
         */
        readonly width: number;

        /**
         * @readonly
         * @name pc.Texture#height
         * @type Number
         * @description The height of the texture in pixels.
         */
        readonly height: number;

        /**
         * @readonly
         * @name pc.Texture#depth
         * @type Number
         * @description The number of depth slices in a 3D texture (WebGL2 only).
         */
        readonly depth: number;

        /**
         * @readonly
         * @name pc.Texture#format
         * @type Number
         * @description The pixel format of the texture. Can be:
         * <ul>
         *     <li>{@link pc.PIXELFORMAT_A8}</li>
         *     <li>{@link pc.PIXELFORMAT_L8}</li>
         *     <li>{@link pc.PIXELFORMAT_L8_A8}</li>
         *     <li>{@link pc.PIXELFORMAT_R5_G6_B5}</li>
         *     <li>{@link pc.PIXELFORMAT_R5_G5_B5_A1}</li>
         *     <li>{@link pc.PIXELFORMAT_R4_G4_B4_A4}</li>
         *     <li>{@link pc.PIXELFORMAT_R8_G8_B8}</li>
         *     <li>{@link pc.PIXELFORMAT_R8_G8_B8_A8}</li>
         *     <li>{@link pc.PIXELFORMAT_DXT1}</li>
         *     <li>{@link pc.PIXELFORMAT_DXT3}</li>
         *     <li>{@link pc.PIXELFORMAT_DXT5}</li>
         *     <li>{@link pc.PIXELFORMAT_RGB16F}</li>
         *     <li>{@link pc.PIXELFORMAT_RGBA16F}</li>
         *     <li>{@link pc.PIXELFORMAT_RGB32F}</li>
         *     <li>{@link pc.PIXELFORMAT_RGBA32F}</li>
         *     <li>{@link pc.PIXELFORMAT_ETC1}</li>
         *     <li>{@link pc.PIXELFORMAT_PVRTC_2BPP_RGB_1}</li>
         *     <li>{@link pc.PIXELFORMAT_PVRTC_2BPP_RGBA_1}</li>
         *     <li>{@link pc.PIXELFORMAT_PVRTC_4BPP_RGB_1}</li>
         *     <li>{@link pc.PIXELFORMAT_PVRTC_4BPP_RGBA_1}</li>
         *     <li>{@link pc.PIXELFORMAT_111110F}</li>
         * </ul>
         */
        readonly format: number;

        /**
         * @readonly
         * @name pc.Texture#cubemap
         * @type Boolean
         * @description Returns true if this texture is a cube map and false otherwise.
         */
        readonly cubemap: boolean;

        /**
         * @readonly
         * @name pc.Texture#volume
         * @type Boolean
         * @description Returns true if this texture is a 3D volume and false otherwise.
         */
        readonly volume: boolean;

        /**
         * @name pc.Texture#flipY
         * @type Boolean
         * @description Specifies whether the texture should be flipped in the Y-direction. Only affects textures
         * with a source that is an image, canvas or video element. Does not affect cubemaps, compressed textures
         * or textures set from raw pixel data. Defaults to true.
         */
        flipY: boolean;

        /**
         * @private
         * @function
         * @name pc.Texture#bind
         * @description Activates the specified texture on the current texture unit.
         */
        private bind(): void;

        /**
         * @function
         * @name pc.Texture#destroy
         * @description Forcibly free up the underlying WebGL resource owned by the texture.
         */
        destroy(): void;

        /**
         * @function
         * @name pc.Texture#lock
         * @description Locks a miplevel of the texture, returning a typed array to be filled with pixel data.
         * @param {Object} options Optional options object. Valid properties are as follows:
         * @param {Number} options.level The mip level to lock with 0 being the top level. Defaults to 0.
         * @param {Number} options.face If the texture is a cubemap, this is the index of the face to lock.
         */
        lock(options: { level: number, face: number }): Uint8Array | Uint16Array | Float32Array;

        /**
         * @private
         * @function
         * @name pc.Texture#recover
         * @description Restores the texture in the event of the underlying WebGL context being lost and then
         * restored.
         */
        private recover(): void;

        /**
         * @function
         * @name pc.Texture#setSource
         * @description Set the pixel data of the texture from a canvas, image, video DOM element. If the
         * texture is a cubemap, the supplied source must be an array of 6 canvases, images or videos.
         * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement|Array} source A canvas, image or video element,
         * or an array of 6 canvas, image or video elements.
         */
        setSource(
            source: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement |
                Array<HTMLCanvasElement | HTMLImageElement | HTMLVideoElement>
        ): void;

        /**
         * @function
         * @name pc.Texture#getSource
         * @description Get the pixel data of the texture. If this is a cubemap then an array of 6 images will be returned otherwise
         * a single image.
         * @return {HTMLImageElement} The source image of this texture.
         */
        getSource(): HTMLImageElement

        /**
         * @function
         * @name pc.Texture#unlock
         * @description Unlocks the currently locked mip level and uploads it to VRAM.
         */
        unlock(): void;

        /**
         * @function
         * @name pc.Texture#upload
         * @description Forces a reupload of the textures pixel data to graphics memory. Ordinarily, this function
         * is called by internally by {@link pc.Texture#setSource} and {@link pc.Texture#unlock}. However, it still needs to
         * be called explicitly in the case where an HTMLVideoElement is set as the source of the texture.  Normally,
         * this is done once every frame before video textured geometry is rendered.
         */
        upload(): void;
    }
}
