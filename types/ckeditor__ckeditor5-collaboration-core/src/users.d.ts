import Operation from '@ckeditor/ckeditor5-engine/src/model/operation/operation';
import { Collection } from '@ckeditor/ckeditor5-utils';

export interface UserData {
    id: string;
    color: Record<string, unknown>;
    name?: string | undefined;
    avatar?: string | undefined;
}

export class User {
    avatar: string;
    color: Record<string, unknown>;
    id: string;
    initials: string;
    isAnonymous: boolean;
    name: string;

    constructor(data?: UserData);
}

export class Users {
    me: User | null;
    readonly users: Collection<User>;

    constructor();
    addUser(userData: UserData): User;
    defineMe(userId: string): void;
    getOperationAuthor(operation: Operation): User;
    getUser(id: string): User;
    useAnonymousUser(): void;
}
