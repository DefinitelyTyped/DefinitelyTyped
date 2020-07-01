import { Repository } from './repository';

export class Refdb {
    static open(repo: Repository): Promise<Refdb>;

    compress(): number;

    free(): void;
}
