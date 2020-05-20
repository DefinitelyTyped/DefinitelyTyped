import { PublicApi } from "./PublicApi";

/**
 * Provides the functionality to handle the `configuration`-event.
 */
export interface ConfigurationHandler {
    /**
     * Handles the `configuration`-event.
     *
     * @param api
     * The configuration-api.
     */
    (api: PublicApi): void;
}
