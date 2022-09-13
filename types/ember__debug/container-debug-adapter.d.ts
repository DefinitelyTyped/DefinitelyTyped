import Resolver from 'ember-resolver';

/**
 * The ContainerDebugAdapter helps the container and resolver interface
 * with tools that debug Ember such as the Ember Inspector for Chrome and Firefox.
 */
export default class ContainerDebugAdapter extends Object {
    resolver: Resolver;
    canCatalogEntriesByType(type: string): boolean;
    catalogEntriesByType(type: string): string[];
}
