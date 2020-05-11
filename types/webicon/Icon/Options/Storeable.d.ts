import { Downloadable } from "./Downloadable";

/**
 * Represents a storeable object.
 */
export interface Storeable extends Downloadable {
    /**
     * A value indicating whether the source is preloadable.
     */
    preloadable?: boolean;

    /**
     * Resolves the id of the underlying source.
     *
     * @param id
     * The underlying id of the source.
     *
     * @return
     * The resolved id of the source.
     */
    iconIdResolver?(id: string): string;
}
