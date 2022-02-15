import { ApplyOptions } from './apply-options';
import { Diff } from './diff';
import { Index } from './index_';
import { Repository } from './repository';
import { Tree } from './tree';

export namespace Apply {
    const enum FLAGS {
        CHECK = 1,
    }

    const enum LOCATION {
        WORKDIR = 0,
        INDEX = 1,
        BOTH = 2,
    }
}

export class Apply {
    static apply(repo: Repository, diff: Diff, location: Apply.LOCATION, options: ApplyOptions): Promise<number>;
    static toTree(repo: Repository, preimage: Tree, diff: Diff, options: ApplyOptions): Promise<Index>;
}
