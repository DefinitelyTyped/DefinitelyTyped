declare namespace OO.ui.mixin {
    /**
     * RequestManager is a mixin that manages the lifecycle of a promise-backed request for a widget,
     * such as the {@link OO.ui.mixin.LookupElement}.
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.RequestManager
     */
    interface RequestManager {
        /**
         * Get request results for the current query.
         *
         * @return Promise object which will be passed response data as the first argument
         *  of the done event. If the request was aborted to make way for a subsequent request, this
         *  promise may not be rejected, depending on what jQuery feels like doing.
         */
        getRequestData(): JQuery.Promise<unknown>;
    }

    namespace RequestManager {
        interface ConfigOptions {
            /**
             * Show pending state while request data is being fetched.
             * Requires widget to have also mixed in {@link OO.ui.mixin.PendingElement}.
             */
            showPendingRequest?: boolean;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): RequestManager;
            prototype: RequestManager;
            static: {};
        }
    }

    const RequestManager: RequestManager.Constructor;
}
