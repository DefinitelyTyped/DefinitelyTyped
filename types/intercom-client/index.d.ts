// Type definitions for intercom-client 2.9
// Project: https://github.com/intercom/intercom-node
// Definitions by: Jinesh Shah <https://github.com/jineshshah36>, Josef Hornych <https://github.com/peping>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
/// <reference types="node" />

import { List as UserList, User, UserIdentifier } from './User';
import { CompanyIdentifier, List as CompanyList, Company } from './Company';
import { TagIdentifier, List as TagList, Tag, TagOper } from './Tag';
import { List as EventList, Event, ListParam as EventListParam } from './Event';
import { Scroll } from './Scroll';
import { IntercomError } from './IntercomError';

import { IncomingMessage } from 'http';

export { IntercomError };

export interface IdentityVerificationOptions {
    secretKey: string;
    identifier: string;
}

export const IdentityVerification: {
    userHash(opts: IdentityVerificationOptions): string;
};

export class Client {
    constructor(auth: { token: string } | { appId: string, appApiKey: string });
    constructor(username: string, password: string);

    users: Users;
    companies: Companies;
    tags: Tags;
    events: Events;
}

export class ApiResponse<T> extends IncomingMessage {
  body: T;
}

export type callback<T> = ((d: T) => void) | ((err: IntercomError, d: T) => void);

export class Users {
    create(user: Partial<User>): Promise<ApiResponse<User>>;
    create(user: Partial<User>, cb: callback<ApiResponse<User>>): void;

    update(user: UserIdentifier & Partial<User>): Promise<ApiResponse<User>>;
    update(user: UserIdentifier & Partial<User>, cb: callback<ApiResponse<User>>): void;

    find(identifier: UserIdentifier): Promise<ApiResponse<User>>;
    find(identifier: UserIdentifier, cb: callback<ApiResponse<User>>): void;

    list(): Promise<ApiResponse<User>>;
    list(cb: callback<ApiResponse<User>>): void;

    listBy(params: {tag_id?: string, segment_id?: string}): Promise<ApiResponse<UserList>>;
    listBy(params: {tag_id?: string, segment_id?: string}, cb: callback<ApiResponse<UserList>>): void;

    scroll: Scroll<User>;

    archive(): Promise<User>;

    requestPermanentDeletion(): Promise<{id: number}>;
}

export class Companies {
    create(company: CompanyIdentifier & Partial<Company>): Promise<ApiResponse<Company>>;
    create(company: CompanyIdentifier & Partial<Company>, cb: callback<ApiResponse<Company>>): void;

    update(company: CompanyIdentifier & Partial<Company>): Promise<ApiResponse<Company>>;
    update(company: CompanyIdentifier & Partial<Company>, cb: callback<ApiResponse<Company>>): void;

    find(identifier: CompanyIdentifier): Promise<ApiResponse<Company>>;
    find(identifier: CompanyIdentifier, cb: callback<ApiResponse<Company>>): void;

    list(): Promise<ApiResponse<CompanyList>>;
    list(cb: callback<ApiResponse<CompanyList>>): void;

    listBy(params: {tag_id?: string, segment_id?: string}): Promise<ApiResponse<CompanyList>>;
    listBy(params: {tag_id?: string, segment_id?: string}, cb: callback<ApiResponse<CompanyList>>): void;

    scroll: Scroll<Company>;

    archive(): Promise<Company>;
}

export class Tags {
  create(tag: Partial<Tag>): Promise<ApiResponse<Tag>>;
  create(tag: Partial<Tag>, cb: callback<ApiResponse<Tag>>): void;

  tag(tagOper: TagOper): Promise<ApiResponse<Tag>>;
  tag(tagOper: TagOper, cb: callback<ApiResponse<Tag>>): void;

  untag(tagOper: TagOper): Promise<ApiResponse<Tag>>;
  untag(tagOper: TagOper, cb: callback<ApiResponse<Tag>>): void;

  delete(tag: TagIdentifier): Promise<IncomingMessage>;
  delete(tag: TagIdentifier, cb: callback<IncomingMessage>): void;

  list(): Promise<ApiResponse<TagList>>;
  list(cb: callback<ApiResponse<TagList>>): void;
}

export class Events {
    create(event: Partial<Event>): Promise<IncomingMessage>;
    create(event: Partial<Event>, cb: callback<IncomingMessage>): void;

    listBy(params: EventListParam): Promise<ApiResponse<CompanyList>>;
    listBy(params: EventListParam, cb: callback<ApiResponse<CompanyList>>): void;
}
