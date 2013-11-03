declare module L {

    /**
    * A constant that represents the Leaflet version in use.
    */
    export var version: string;

    /**
    * This method restores the L global variale to the original value it had
    * before Leaflet inclusion, and returns the real Leaflet namespace.
    */
    export function noConflict(): typeof L;
}
