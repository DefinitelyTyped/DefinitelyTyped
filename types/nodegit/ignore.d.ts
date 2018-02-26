import { Repository } from './repository';

export class Ignore {
    static addRule(repo: Repository, rules: string): number;
    static clearInternalRules(repo: Repository): number;
    static pathIsIgnored(repo: Repository, path: string): Promise<number>;
}
