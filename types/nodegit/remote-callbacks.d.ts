export class RemoteCallbacks {
    /**
     *
     *
     * @type {number}
     * @memberof RemoteCallbacks
     */
    version?: number;
    /**
     *
     *
     * @type {Function}
     * @memberof RemoteCallbacks
     */
    credentials?: Function;
    /**
     *
     *
     * @type {Function}
     * @memberof RemoteCallbacks
     */
    certificateCheck?: Function;
    /**
     *
     *
     * @type {Function}
     * @memberof RemoteCallbacks
     */
    transferProgress?: Function;
    /**
     *
     *
     * @type {Function}
     * @memberof RemoteCallbacks
     */
    transport?: Function;
    /**
     *
     *
     * @type {undefined}
     * @memberof RemoteCallbacks
     */
    payload?: undefined;
}
