declare module goog {
    function require(name: 'goog.ui.emoji.EmojiPaletteRenderer'): typeof goog.ui.emoji.EmojiPaletteRenderer;
}

declare module goog.ui.emoji {

    /**
     * Renders an emoji palette.
     *
     * @param {?string} defaultImgUrl Url of the img that should be used to fill up
     *     the cells in the emoji table, to prevent jittering. Will be stretched
     *     to the emoji cell size. A good image is a transparent dot.
     * @constructor
     * @extends {goog.ui.PaletteRenderer}
     */
    class EmojiPaletteRenderer extends goog.ui.PaletteRenderer {
        constructor(defaultImgUrl: string);
        
        /** @override */
        static getCssClass(): void;
        
        /**
         * Creates a palette item from the given emoji data.
         *
         * @param {goog.dom.DomHelper} dom DOM helper for constructing DOM elements.
         * @param {string} id Goomoji id for the emoji.
         * @param {goog.ui.emoji.SpriteInfo} spriteInfo Spriting info for the emoji.
         * @param {string} displayUrl URL of the image served for this cell, whether
         *     an individual emoji image or a sprite.
         * @return {!HTMLDivElement} The palette item for this emoji.
         */
        createPaletteItem(dom: goog.dom.DomHelper, id: string, spriteInfo: goog.ui.emoji.SpriteInfo, displayUrl: string): HTMLDivElement;
        
        /**
         * Modifies a palette item containing an animated emoji, in response to the
         * animated emoji being successfully downloaded.
         *
         * @param {Element} item The palette item to update.
         * @param {Image} animatedImg An Image object containing the animated emoji.
         */
        updateAnimatedPaletteItem(item: Element, animatedImg: Image): void;
        
        /**
         * Builds the inner contents of a palette item out of sprite metadata.
         *
         * @param {goog.dom.DomHelper} dom DOM helper for constructing DOM elements.
         * @param {goog.ui.emoji.SpriteInfo} spriteInfo The metadata to create the css
         *     for the sprite.
         * @param {string} displayUrl The URL of the image for this cell.
         * @return {HTMLDivElement} The inner element for a palette item.
         */
        buildElementFromSpriteMetadata(dom: goog.dom.DomHelper, spriteInfo: goog.ui.emoji.SpriteInfo, displayUrl: string): HTMLDivElement;
        
        /**
         * Returns the item corresponding to the given node, or null if the node is
         * neither a palette cell nor part of a palette item.
         * @param {goog.ui.Palette} palette Palette in which to look for the item.
         * @param {Node} node Node to look for.
         * @return {Node} The corresponding palette item (null if not found).
         * @override
         */
        getContainingItem(palette: goog.ui.Palette, node: Node): Node;
    }
}
