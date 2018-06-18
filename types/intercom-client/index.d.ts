// Type definitions for intercom-client 2.9
// Project: https://github.com/intercom/intercom-node
// Definitions by: Jinesh Shah <https://github.com/jineshshah36>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {List as UserList, User, UserIdentifier} from './User';
import {Scroll} from './Scroll';

export interface IdentityVerificationOptions {
    secretKey: string;
    identifier: string;
}

export const IdentityVerification: {
    userHash(opts: IdentityVerificationOptions): string;
};


export declare class Client {
    constructor(auth: { token: string });
    constructor(username: string, password: string);
    constructor(auth: { appId: string, appApiKey: string });
    
    users: Users;
}


interface Company {
    readonly "id": string
}


declare class Users {
    create(user: Partial<User>): Promise<User>

    update(user: UserIdentifier & Partial<User> ): Promise<User>

    find(identifier: UserIdentifier): Promise<User>

    list(): Promise<UserList>

    listBy(params: {tag_id: string, segment_id: string}): Promise<UserList>

    scroll: Scroll<User>

    archive(): Promise<User>

    requestPermanentDeletion(): Promise<{id: number}>
}