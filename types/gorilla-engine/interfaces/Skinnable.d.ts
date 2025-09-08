declare namespace GorillaEngine.UI {
    interface Skinnable {
        /**
         * Defines properties for a filmstrip-based animation or visual sequence.
         */
        filmstrip: {
            /**
             * The file path to the filmstrip image, which contains a series of animation frames.
             */
            path: string;
            /**
             * The total number of individual frames contained within the filmstrip image.
             */
            count: number;
            /**
             * Optional. Specifies the direction in which frames are arranged within the filmstrip (e.g., "horizontal", "vertical").
             * If omitted, a default or inferred direction may be used.
             */
            direction?: string;
        };
        /**
         * Reference to a LottieAnimation instance
         * that this control is linked to.
         */
        animation: LottieAnimation;
    }
}
