import { Options } from '../index';

export interface Breakpoints {
    /**
     * Matches settings for currectly matching media breakpoint.
     */
    match(points: Record<string, Partial<Options>>): Partial<Options>;
}
