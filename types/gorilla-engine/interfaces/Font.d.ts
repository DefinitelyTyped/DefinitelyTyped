declare namespace GorillaEngine.UI {
    interface Font {
        /**
         * Specifies the font family to be used for text rendering (e.g., "Arial", "Helvetica Neue", "Roboto").
         * The system will attempt to use this font, falling back to a default if it's unavailable.
         */
        font: string;
        /**
         * Defines the size of the font in a numeric unit, typically pixels (px) or points (pt).
         * Larger values result in larger text.
         */
        fontSize: number;
        /**
         * Adjusts the spacing between individual characters (kerning) in the text.
         * Positive values increase the space, while negative values decrease it, allowing for fine-tuned text appearance.
         */
        fontKerning: number;
        /**
         * Sets the color of the text. This can be a named color (e.g., "red") or a hexadecimal value (e.g., "FF0000"). To specify an RGBA color set the hex alpha as a prefix (e.g., "80FF0000").
         */
        textColor: string;
        /**
         * Controls the alignment of the text within its bounding box.
         * This can include horizontal (left, center, right) and vertical (top, center, bottom) alignments.
         */
        textAlign:
            | "centered left"
            | "centered right"
            | "left"
            | "right"
            | "center"
            | "top left"
            | "top right"
            | "top center"
            | "bottom left"
            | "bottom right"
            | "bottom center";
    }
}
