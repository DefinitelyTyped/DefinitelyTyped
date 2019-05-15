import { Repository } from './repository';
import { CloneOptions } from './clone-options';

export namespace Clone {
    const enum LOCAL {
        AUTO = 0,
        LOCAL = 1,
        NO_LOCAL = 2,
        NO_LINKS = 3
    }
}

export class Clone {
    /**
     * Patch repository cloning to automatically coerce objects.
     */
    static clone(url: string, localPath: string, options?: CloneOptions): Promise<Repository>;

    static initOptions(opts: CloneOptions, version: number): number;
}
