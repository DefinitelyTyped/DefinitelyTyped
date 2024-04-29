declare namespace jsf {
    namespace ajax {
        interface RequestData {
            status: string;
            description: string;
        }

        interface RequestOptions {
            /**
             * space seperated list of client identifiers
             */
            execute?: String | undefined;

            /**
             * space seperated list of client identifiers
             */
            render?: String | undefined;

            /**
             * function to callback for event
             * @param callback the callback function
             */
            onevent?(callback: (data: RequestData) => void): void;

            /**
             * function to callback for error
             * @param callback the callback function
             */
            onerror?(callback: (data: RequestData) => void): void;

            /**
             * object containing parameters to include in the request
             */
            params?: any;

            /**
             * client behavior event name from the request parameter
             */
            "javax.faces.behavior.event"?: any;
        }

        /**
         * Register a callback for event handling.
         * @param callback a reference to a function to call on an event
         */
        function addOnEvent(callback: (data: RequestData) => void): void;

        /**
         * Register a callback for error handling.
         * @param callback a reference to a function to call on an error
         */
        function addOnError(callback: (data: RequestData) => void): void;

        /**
         * Send an asynchronous Ajax request to the server.
         * @param source The DOM element that triggered this Ajax request, or an id string of the element to use as the triggering element.
         * @param event The DOM event that triggered this Ajax request. The event argument is optional.
         * @param options The set of available options that can be sent as request parameters to control client and/or server side request processing.
         */
        function request(source: any, event?: String, options?: RequestOptions): void;

        /**
         * Receive an Ajax response from the server.
         * @param request The XMLHttpRequest instance that contains the status code and response message from the server.
         * @param context An object containing the request context, including the following properties: the source element, per call onerror callback function, and per call onevent callback function.
         * @throws EmptyResponse error if request contains no data
         */
        function response(request: any, context: any): void;
    }
}
