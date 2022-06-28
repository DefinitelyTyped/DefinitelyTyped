import { User } from '@ckeditor/ckeditor5-collaboration-core/src/users';
import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';

// tslint:disable-next-line:no-empty-interface
export default interface Revision extends Observable {}

export default class Revision implements Observable {
    get attributes(): Record<string, any>;
    protected set attributes(attrs: Record<string, any>);
    readonly authors: Set<User>;
    get createdAt(): Date;
    protected set createdAt(date: Date);
    readonly creator: User | null;
    readonly diffData: Record<string, unknown>;
    readonly fromVersion: number;
    readonly id: string;
    readonly toVersion: number;

    removeAttribute(name: string): void;
    setAttribute(name: string, value: unknown): void;
    toJSON(): Record<string, string>;
    setName(name: string): void;
}
