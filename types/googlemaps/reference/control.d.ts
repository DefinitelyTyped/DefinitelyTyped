declare namespace google.maps {
    /** Options for the rendering of the fullscreen control. */
    interface FullscreenControlOptions {
        /**
         * Position id. Used to specify the position of the control on the map.
         * The default position is RIGHT_TOP.
         */
        position?: ControlPosition;
    }

    /** Options for the rendering of the map type control. */
    interface MapTypeControlOptions {
        /** IDs of map types to show in the control. */
        mapTypeIds?: Array<MapTypeId | string>;

        /**
         * Position id. Used to specify the position of the control on the map.
         * The default position is TOP_RIGHT.
         */
        position?: ControlPosition;

        /** Style id. Used to select what style of map type control to display. */
        style?: MapTypeControlStyle;
    }

    enum MapTypeControlStyle {
        DEFAULT = 0,
        HORIZONTAL_BAR = 1,
        DROPDOWN_MENU = 2,
        INSET = 3,
        INSET_LARGE = 4,
    }

    interface MotionTrackingControlOptions {
        position?: ControlPosition;
    }

    /** Options for the rendering of the pan control. */
    interface PanControlOptions {
        /**
         * Position id. Used to specify the position of the control on the map.
         * The default position is TOP_LEFT.
         */
        position?: ControlPosition;
    }

    /** Options for the rendering of the rotate control. */
    interface RotateControlOptions {
        /**
         * Position id. Used to specify the position of the control on the map.
         * The default position is TOP_LEFT.
         */
        position?: ControlPosition;
    }

    /** Options for the rendering of the scale control. */
    interface ScaleControlOptions {
        /** Style id. Used to select what style of scale control to display. */
        style?: ScaleControlStyle;
    }

    enum ScaleControlStyle {
        DEFAULT = 0,
    }

    /** Options for the rendering of the Street View pegman control on the map. */
    interface StreetViewControlOptions {
        /**
         * Position id. Used to specify the position of the control on the map. The
         * default position is embedded within the navigation (zoom and pan)
         * controls. If this position is empty or the same as that specified in the
         * zoomControlOptions or panControlOptions, the Street View control will be
         * displayed as part of the navigation controls. Otherwise, it will be
         * displayed separately.
         */
        position?: ControlPosition;
    }

    // TODO find source documentation
    enum ZoomControlStyle {
        DEFAULT = 0,
        SMALL = 1,
        LARGE = 2,
    }

    /** Options for the rendering of the zoom control. */
    interface ZoomControlOptions {
        /**
         * Position id. Used to specify the position of the control on the map.
         * The default position is TOP_LEFT.
         */
        position?: ControlPosition;

        style?: ZoomControlStyle;
    }

    /**
     * Identifiers used to specify the placement of controls on the map. Controls
     * are positioned relative to other controls in the same layout position.
     * Controls that are added first are positioned closer to the edge of the map.
     */
    enum ControlPosition {
        /** Elements are positioned in the center of the bottom row. */
        BOTTOM_CENTER = 11,
        /**
         * Elements are positioned in the bottom left and flow towards the middle.
         * Elements are positioned to the right of the Google logo.
         */
        BOTTOM_LEFT = 10,
        /**
         * Elements are positioned in the bottom right and flow towards the middle.
         * Elements are positioned to the left of the copyrights.
         */
        BOTTOM_RIGHT = 12,
        /**
         * Elements are positioned on the left, above bottom-left elements, and flow
         * upwards.
         */
        LEFT_BOTTOM = 6,
        /** Elements are positioned in the center of the left side. */
        LEFT_CENTER = 4,
        /**
         * Elements are positioned on the left, below top-left elements, and flow
         * downwards.
         */
        LEFT_TOP = 5,
        /**
         * Elements are positioned on the right, above bottom-right elements, and
         * flow upwards.
         */
        RIGHT_BOTTOM = 9,
        /** Elements are positioned in the center of the right side. */
        RIGHT_CENTER = 8,
        /** Elements are positioned on the right, below top-right elements, and flow downwards. */
        RIGHT_TOP = 7,
        /** Elements are positioned in the center of the top row. */
        TOP_CENTER = 2,
        /** Elements are positioned in the top right and flow towards the middle. */
        TOP_LEFT = 1,
        /** Elements are positioned in the top right and flow towards the middle. */
        TOP_RIGHT = 3,
    }
}
