import { AnnotatedCommit } from './annotated-commit';
import { Repository } from './repository';
import { Object } from './object';
import { Strarray } from './str-array';
import { CheckoutOptions } from './checkout-options';

export namespace Reset {
    enum TYPE {
        SOFT = 1,
        MIXED = 2,
        HARD = 3
    }
}

export class Reset {
    static reset(repo: Repository, target: Object, reset_type: number, checkout_opts: CheckoutOptions): Promise<number>;
    static default(repo: Repository, target: Object, pathspecs: Strarray): Promise<number>;
    static fromAnnotated(repo: Repository, commit: AnnotatedCommit, reset_type: number, checkout_opts: CheckoutOptions): number;
}
