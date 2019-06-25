import { IconPreloader } from "./IconPreloader";

/**
 * Provides the functionality to handle the `preloaded`-event.
 */
export interface IconLoadedEventHandler {
    (preloader: IconPreloader): any;
}
