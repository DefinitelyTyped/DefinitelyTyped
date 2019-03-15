import { computed } from '@ember/object';

/**
 * A computed property transforms an objects function into a property.
 * By default the function backing the computed property will only be called once and the result
 * will be cached. You can specify various properties that your computed property is dependent on.
 * This will force the cached result to be recomputed if the dependencies are modified.
 */
export default class ComputedProperty<Get, Set = Get> {
    // Necessary in order to avoid losing type information
    //    see: https://github.com/typed-ember/ember-cli-typescript/issues/246#issuecomment-414812013
    private ______getType: Get;
    private ______setType: Set;
    /**
     * Call on a computed property to set it into non-cached mode. When in this
     * mode the computed property will not automatically cache the return value.
     */
    volatile(): this;
    /**
     * Call on a computed property to set it into read-only mode. When in this
     * mode the computed property will throw an error when set.
     */
    readOnly(): this;
    /**
     * Sets the dependent keys on this computed property. Pass any number of
     * arguments containing key paths that this computed property depends on.
     */
    property(...path: string[]): this;
    /**
     * In some cases, you may want to annotate computed properties with additional
     * metadata about how they function or what values they operate on. For example,
     * computed property functions may close over variables that are then no longer
     * available for introspection.
     */
    meta(meta: {}): this;
    meta(): {};
}

export const alias: typeof computed.alias;
export const and: typeof computed.and;
export const bool: typeof computed.bool;
export const collect: typeof computed.collect;
export const deprecatingAlias: typeof computed.deprecatingAlias;
export const empty: typeof computed.empty;
export const equal: typeof computed.equal;
/**
 * Expands `pattern`, invoking `callback` for each expansion.
 */
export function expandProperties(
    pattern: string,
    callback: (expanded: string) => void
): void;
export const filter: typeof computed.filter;
export const filterBy: typeof computed.filterBy;
export const gt: typeof computed.gt;
export const gte: typeof computed.gte;
export const intersect: typeof computed.intersect;
export const lt: typeof computed.lt;
export const lte: typeof computed.lte;
export const map: typeof computed.map;
export const mapBy: typeof computed.mapBy;
export const match: typeof computed.match;
export const max: typeof computed.max;
export const min: typeof computed.min;
export const none: typeof computed.none;
export const not: typeof computed.not;
export const notEmpty: typeof computed.notEmpty;
export const oneWay: typeof computed.oneWay;
export const or: typeof computed.or;
export const readOnly: typeof computed.readOnly;
export const reads: typeof computed.reads;
export const setDiff: typeof computed.setDiff;
export const sort: typeof computed.sort;
export const sum: typeof computed.sum;
export const union: typeof computed.union;
export const uniq: typeof computed.uniq;
export const uniqBy: typeof computed.uniqBy;
