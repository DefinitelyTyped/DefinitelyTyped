import { Repository } from './repository';
import { Time } from './time';

export class Signature {
    static default(repo: Repository): Signature;
    static create(name: string, email: string, time: number, offset: number): Signature;
    static now(name: string, email: string): Signature;
    static fromBuffer(buf: string): Promise<Signature>;

    dup(): Promise<Signature>;

    free(): void;
    toString(): string;
    name(): string;
    email(): string;
    when(): Time;
}
