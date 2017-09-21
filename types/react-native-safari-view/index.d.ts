// Type definitions for react-native-safari-view 2.0.0
// Project: https://github.com/naoufal/react-native-safari-view
// Definitions by: Michael Randolph <https://github.com/mrand01/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EmitterSubscription } from 'react-native';

export interface ISafariViewOptions {
    /**
     * A String containing the url you want to load in the Safari View
     * 
     * @type {string}
     * @memberof ISafariViewOptions
     */
    url: string;

    /**
     * A Boolean indicating to use Safari's Reader Mode if available
     * 
     * @type {boolean}
     * @memberof ISafariViewOptions
     */
    readerMode?: boolean;

    /**
     * A String containing a hex or rgba color to use for the browser controls
     * 
     * @type {string}
     * @memberof ISafariViewOptions
     */
    tintColor?: string;

    /**
     * A String containing a hex or rgba color to use for the background of the browser controls (only available on iOS 10 and higher)
     * 
     * @type {string}
     * @memberof ISafariViewOptions
     */
    barTintColor?: string;

    /**
     * A Boolean indicating to open the Safari View from the bottom
     * 
     * @type {boolean}
     * @memberof ISafariViewOptions
     */
    fromBottom?: boolean;
}

export default class SafariView {
    /**
     * Displays a Safari View with the provided URL
     * 
     * @param {ISafariViewOptions} options 
     */
    public static show(options: ISafariViewOptions): Promise<boolean>;

    /**
     * Dismisses the currently active Safari View
     */
    public static dismiss(): void;

    /**
     * Checks if Safari View is available on the device
     */
    public static isAvailable(): Promise<boolean>;

    /**
     * @param {string} event
     * @param {function} listener
     */
    public static addEventListener(event: string, listener: () => void): EmitterSubscription;

    /**
     * @param {string} event
     * @param {function} listener
     */
    public static removeEventListener(event: string, listener: () => void): void;
}
