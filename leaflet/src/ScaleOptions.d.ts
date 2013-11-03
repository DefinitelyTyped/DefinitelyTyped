declare module L {

    export interface ScaleOptions {

        /**
          * The position of the control (one of the map corners). See control positions.
          * Default value: 'bottomleft'.
          */
        position?: string;
    
        /**
          * Maximum width of the control in pixels. The width is set dynamically to show
          * round values (e.g. 100, 200, 500).
          * Default value: 100.
          */
        maxWidth?: number;
    
        /**
          * Whether to show the metric scale line (m/km).
          * Default value: true.
          */
        metric?: boolean;
    
        /**
          * Whether to show the imperial scale line (mi/ft).
          * Default value: true.
          */
        imperial?: boolean;
    
        /**
          * If true, the control is updated on moveend, otherwise it's always up-to-date
          * (updated on move).
          * Default value: false.
          */
        updateWhenIdle?: boolean;
    }
}
