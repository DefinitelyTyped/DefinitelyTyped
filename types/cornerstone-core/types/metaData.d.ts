export type Provider = (type: string, imageId: string) => any;
/**
 * Adds a metadata provider with the specified priority
 * @param provider Metadata provider function
 * @param [priority=0] - 0 is default/normal, > 0 is high, < 0 is low
 *
 */
export function addProvider(provider: Provider, priority?: number): void;
/**
 * Removes the specified provider
 *
 * @param provider Metadata provider function
 *
 */
export function removeProvider(provider: Provider): void;
/**
 * Gets metadata from the registered metadata providers.  Will call each one from highest priority to lowest
 * until one responds
 *
 * @param type The type of metadata requested from the metadata store
 * @param imageId The Cornerstone Image Object's imageId
 *
 * @returns The metadata retrieved from the metadata store
 */
export function get(type: string, imageId: string): any;
