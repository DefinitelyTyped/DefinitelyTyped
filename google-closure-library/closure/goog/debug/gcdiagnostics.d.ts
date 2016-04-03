declare module goog.debug {

    /**
     * Class used for singleton goog.debug.GcDiagnostics.  Used to hook into
     * the L2 ActiveX controller to profile garbage collection information in IE.
     * Can be used in combination with tracers (goog.debug.Trace), to provide object
     * allocation counts from within the tracers or used alone by invoking start and
     * stop.
     *
     * See http://go/l2binary for the install.
     * TODO(user): Move the L2 installer somewhere more general.
     * @constructor
     * @private
     */
    interface GcDiagnostics_ {
        
        /**
         * Install the GcDiagnostics tool.
         */
        install(): void;
        
        /**
         * Starts recording garbage collection information.  If a trace is already in
         * progress, it is ended.
         */
        start(): void;
        
        /**
         * Stops recording garbage collection information.  Logs details on the garbage
         * collections that occurred between start and stop.  If tracers are in use,
         * adds comments where each GC occurs.
         */
        stop(): void;
    }

    /**
     * Singleton GcDiagnostics object
     * @type {goog.debug.GcDiagnostics_}
     */
    var GcDiagnostics: goog.debug.GcDiagnostics_;
}
