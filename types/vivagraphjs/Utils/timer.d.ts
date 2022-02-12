/**
 * Timer that fires callback with given interval (in ms) until
 * callback returns true;
 */
declare function _exports(callback: any): {
    /**
     * Stops execution of the callback
     */
    stop: () => void;
    restart: () => void;
};
export = _exports;
