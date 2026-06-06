declare namespace GorillaEngine.UI {
    interface Background {
        /**
         * Specifies the URL or base64 encoded string of an image to be used as the background.
         * This property takes precedence over `backgroundColor` if both are provided.
         */
        backgroundImage: string;

        /**
         * Defines the solid color to be used for the background.
         * This color will be visible if `backgroundImage` is not set or if the image has transparent areas.
         */
        backgroundColor: string;

        /**
         * Sets the radius for the corners of the component, creating rounded edges.
         */
        cornerRadius: number;

        /**
         * Defines the properties of the border surrounding the component.
         */
        border: {
            /**
             * The thickness of the border in pixels.
             */
            width?: number;
            /**
             * The color of the border when the component is not in focus.
             */
            color?: string;
            /**
             * The color of the border when the component is in focus (e.g. on hover).
             */
            focusColor?: string;
        };
    }
}
