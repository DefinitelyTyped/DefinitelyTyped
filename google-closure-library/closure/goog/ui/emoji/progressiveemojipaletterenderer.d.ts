declare module goog {
    function require(name: 'goog.ui.emoji.ProgressiveEmojiPaletteRenderer'): typeof goog.ui.emoji.ProgressiveEmojiPaletteRenderer;
}

declare module goog.ui.emoji {

    /**
     * Progressively renders an emoji palette. The progressive renderer tries to
     * use img tags instead of background-image for sprited emoji, since most
     * browsers render img tags progressively (i.e., as the data comes in), while
     * only very new browsers render background-image progressively.
     *
     * @param {string} defaultImgUrl Url of the img that should be used to fill up
     *     the cells in the emoji table, to prevent jittering. Will be stretched
     *     to the emoji cell size. A good image is a transparent dot.
     * @constructor
     * @extends {goog.ui.emoji.EmojiPaletteRenderer}
     * @final
     */
    class ProgressiveEmojiPaletteRenderer extends goog.ui.emoji.EmojiPaletteRenderer {
        constructor(defaultImgUrl: string);
    }
}
