import { Repository } from './repository';
import { Oid } from './oid';
import { Object } from './object';
import { Signature } from './signature';
import { Strarray } from './str-array';

export class Tag {
    static annotationCreate(repo: Repository, tag_name: string, target: Object, tagger: Signature, message: string): Promise<Oid>;
    static create(repo: Repository, tag_name: string, target: Object, tagger: Signature, message: string, force: number): Promise<Oid>;
    static createLightweight(repo: Repository, tag_name: string, target: Object, force: number): Promise<Oid>;
    static delete(repo: Repository, tag_name: string): Promise<number>;
    static list(repo: Repository): Promise<any[]>;
    static listMatch(tag_names: Strarray, pattern: string, repo: Repository): number;
    static lookup(repo: Repository, id: string | Oid | Tag): Promise<Tag>;
    static lookupPrefix(repo: Repository, id: Oid, len: number): Promise<Tag>;

    free(): void;
    id(): Oid;
    message(): string;
    name(): string;
    owner(): Repository;
    peel(tag_target_out: Object): number;
    tagger(): Signature;
    target(): Object;
    targetId(): Oid;
    targetType(): number;
}
