import { Repository } from './repository';
import { CloneOptions } from './clone-options';

export namespace Clone {
    const enum LOCAL {
        AUTO = 0,
        LOCAL = 1,
        NO_LOCAL = 2,
        NO_LINKS = 3,
    }
}

/**
 * Patch repository cloning to automatically coerce objects.
 */
export function Clone(url: string, localPath: string, options?: CloneOptions): Promise<Repository>;
