// Type definitions for react-native-safari-view 2.0
// Project: https://github.com/naoufal/react-native-safari-view
// Definitions by: Michael Randolph <https://github.com/mrand01>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { EmitterSubscription } from 'react-native';

export interface SafariViewOptions {
    /**
     * A String containing the url you want to load in the Safari View
     *
     */
    url: string;

    /**
     * A Boolean indicating to use Safari's Reader Mode if available
     *
     */
    readerMode?: boolean;

    /**
     * A String containing a hex or rgba color to use for the browser controls
     *
     */
    tintColor?: string;

    /**
     * A String containing a hex or rgba color to use for the background of the browser controls (only available on iOS 10 and higher)
     *
     */
    barTintColor?: string;

    /**
     * A Boolean indicating to open the Safari View from the bottom
     *
     */
    fromBottom?: boolean;
}

declare namespace SafariView {
    /**
     * Displays a Safari View with the provided URL
     *
     */
    function show(options: SafariViewOptions): Promise<boolean>;

    /**
     * Dismisses the currently active Safari View
     */
    function dismiss(): void;

    /**
     * Checks if Safari View is available on the device
     */
    function isAvailable(): Promise<boolean>;

    function addEventListener(event: string, listener: () => void): EmitterSubscription;

    function removeEventListener(event: string, listener: () => void): void;
}
export default SafariView;
