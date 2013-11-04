declare module L {

    export interface PanOptions {

        /**
          * If true, panning will always be animated if possible. If false, it will not
          * animate panning, either resetting the map view if panning more than a screen
          * away, or just setting a new offset for the map pane (except for `panBy` 
          * which always does the latter).
          */
        animate?: boolean;

        /**
          * Duration of animated panning.
          * 
          * Default value: 0.25.
          */
        duration?: number;

        /**
          * The curvature factor of panning animation easing (third parameter of the Cubic
          * Bezier curve). 1.0 means linear animation, the less the more bowed the curve.
          *
          * Default value: 0.25.
          */
        easeLinearity?: number;

        /**
          * If true, panning won't fire movestart event on start (used internally for panning inertia).
          * 
          * Default value: false.
          */
        noMoveStart?: boolean;
    }
}
