declare namespace google.maps {
    /**
     * A service for obtaining the highest zoom level at which satellite imagery is available for a given location.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/max-zoom#MaxZoomService Maps JavaScript API}
     */
    class MaxZoomService {
        /**
         * Returns the maximum zoom level for which detailed imagery is available at a particular {@link LatLng} for the
         * {@link MapTypeId.SATELLITE satellite} map type. As this request is asynchronous, you must pass a `callback`
         * function which will be executed upon completion of the request, being passed a {@link MaxZoomResult}.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/max-zoom#MaxZoomService.getMaxZoomAtLatLng Maps JavaScript API}
         */
        getMaxZoomAtLatLng(latlng: LatLng | LatLngLiteral, callback: (result: MaxZoomResult) => void): void;
    }

    /**
     * @see {@link MaxZoomResult}
     * @see {@link MaxZoomResultOk}
     */
    interface MaxZoomResultError {
        /**
         * Status of the request.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/max-zoom#MaxZoomResult.status Maps JavaScript API}
         * @see {@link MaxZoomResultOk#status}
         */
        status: MaxZoomStatus.ERROR;
    }

    /**
     * @see {@link MaxZoomResult}
     * @see {@link MaxZoomResultError}
     */
    interface MaxZoomResultOk {
        /**
         * Status of the request.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/max-zoom#MaxZoomResult.status Maps JavaScript API}
         * @see {@link MaxZoomResultError#status}
         */
        status: MaxZoomStatus.OK;

        /**
         * The maximum zoom level found at the given {@link LatLng}.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/max-zoom#MaxZoomResult.zoom Maps JavaScript API}
         */
        zoom: number;
    }

    /**
     * A MaxZoom result in JSON format retrieved from the {@link MaxZoomService}.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/max-zoom#MaxZoomResult Maps JavaScript API}
     */
    type MaxZoomResult = MaxZoomResultError | MaxZoomResultOk;

    /**
     * The status returned by the {@link MaxZoomService} on the completion of a call to
     * {@link MaxZoomService#getMaxZoomAtLatLng getMaxZoomAtLatLng()}. Specify these by value, or by using the
     * constant's name. For example, `'OK'` or {@link MaxZoomStatus.OK}.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/max-zoom#MaxZoomStatus Maps JavaScript API}
     */
    enum MaxZoomStatus {
        /**
         * There was a problem contacting the Google servers.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/max-zoom#MaxZoomStatus.ERROR Maps JavaScript API}
         */
        ERROR = 'ERROR',

        /**
         * The response contains a valid {@link MaxZoomResult}.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/max-zoom#MaxZoomStatus.OK Maps JavaScript API}
         */
        OK = 'OK',
    }
}
