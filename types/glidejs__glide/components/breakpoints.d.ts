import { GlideOptions } from '../index';

export interface Breakpoints {
    /**
     * Matches settings for currectly matching media breakpoint.
     */
    match(points: Record<string, Partial<GlideOptions>>): Partial<GlideOptions>;
}
