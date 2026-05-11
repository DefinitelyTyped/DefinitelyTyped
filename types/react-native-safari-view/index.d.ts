import { EmitterSubscription } from "react-native";

export interface SafariViewOptions {
    /**
     * A String containing the url you want to load in the Safari View
     */
    url: string;

    /**
     * A Boolean indicating to use Safari's Reader Mode if available
     */
    readerMode?: boolean | undefined;

    /**
     * A String containing a hex or rgba color to use for the browser controls
     */
    tintColor?: string | undefined;

    /**
     * A String containing a hex or rgba color to use for the background of the browser controls (only available on iOS 10 and higher)
     */
    barTintColor?: string | undefined;

    /**
     * A Boolean indicating to open the Safari View from the bottom
     */
    fromBottom?: boolean | undefined;
}

declare namespace SafariView {
    /**
     * Displays a Safari View with the provided URL
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
