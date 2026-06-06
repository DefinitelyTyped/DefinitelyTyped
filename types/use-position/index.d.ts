/**
 * The PositionOptions interface describes an object containing option properties to pass as a
 * parameter of Geolocation.getCurrentPosition() and Geolocation.watchPosition() used inside [[usePosition]] React custom hook
 */
export interface PositionOptions {
    /**
     * Setting this to true will ask the browser to get the position with the best accuracy possible.
     * Enabling this feature could consume a lot of battery in handled devices.
     *
     * @default false
     */
    enableHighAccuracy: boolean;
    /**
     * The amount of time before the error callback is invoked, if 0 it will never invoke.
     *
     * @default 0
     */
    timeout: number;
    /**
     * The maximum cached position age.
     *
     * @default Infinity
     */
    maximumAge: number;
}

/**
 *  React hook usePosition() for fetching and following a browser geolocation.
 *
 * @param watch  Indicates if the position should continuosly being updated or not after the first call.
 * @param settings  Settings to be forwarded to the navigator.geolocation browser object.
 */
export function usePosition(watch: boolean, settings?: PositionOptions): {
    latitude: number | undefined;
    longitude: number | undefined;
    timestamp: number | undefined;
    accuracy: number | undefined;
    speed: number | undefined;
    heading: number | undefined;
    error: string | undefined;
};
