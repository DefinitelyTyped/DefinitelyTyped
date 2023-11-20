/// <reference types="node" />

import { Company, CompanyIdentifier, List as CompanyList } from "./Company";
import { Event, List as EventList, ListParam as EventListParam } from "./Event";
import { IntercomError } from "./IntercomError";
import { Lead, LeadIdentifier, LeadIdIdentifier, List as LeadList } from "./Lead";
import { CreateMessage, Message } from "./Message";
import { Scroll } from "./Scroll";
import { List as TagList, Tag, TagIdentifier, TagOper } from "./Tag";
import {
    CreateUpdateUser,
    List as UserList,
    User,
    UserEmailIdentifier,
    UserIdentifier,
    UserIdIdentifier,
} from "./User";
import { Visitor, VisitorIdentifier } from "./Visitor";

import { IncomingMessage } from "http";
import request = require("request");

export { IntercomError };

export interface IdentityVerificationOptions {
    secretKey: string;
    identifier: string;
}

export const IdentityVerification: {
    userHash(opts: IdentityVerificationOptions): string;
};

export class Client {
    constructor(auth: { token: string } | { appId: string; appApiKey: string });
    constructor(username: string, password: string);

    users: Users;
    companies: Companies;
    tags: Tags;
    events: Events;
    contacts: Leads;
    leads: Leads;
    visitors: Visitors;
    messages: Messages;

    /**
     * client library also supports passing in `request` options
     * Note that certain request options (such as `json`, and certain `headers` names cannot be overridden).
     */
    useRequestOpts(options?: request.CoreOptions): this;
    usePromises(): this;
}

export class ApiResponse<T> extends IncomingMessage {
    body: T;
}

export type callback<T> = ((d: T) => void) | ((err: IntercomError, d: T) => void);

interface BulkOperation {
    create?: any;
    delete?: any;
}

export class Users {
    create(user: Partial<CreateUpdateUser>): Promise<ApiResponse<User>>;
    create(user: Partial<CreateUpdateUser>, cb: callback<ApiResponse<User>>): void;

    update(user: UserIdentifier & Partial<CreateUpdateUser>): Promise<ApiResponse<User>>;
    update(user: UserIdentifier & Partial<CreateUpdateUser>, cb: callback<ApiResponse<User>>): void;

    find(identifier: UserIdIdentifier): Promise<ApiResponse<User>>;
    find(identifier: UserIdIdentifier, cb: callback<ApiResponse<User>>): void;
    find(identifier: UserEmailIdentifier): Promise<ApiResponse<UserList>>;
    find(identifier: UserEmailIdentifier, cb: callback<ApiResponse<UserList>>): void;
    find(identifier: UserIdentifier): Promise<ApiResponse<User | UserList>>;
    find(identifier: UserIdentifier, cb: callback<ApiResponse<User | UserList>>): void;

    list(): Promise<ApiResponse<UserList>>;
    list(cb: callback<ApiResponse<UserList>>): void;

    listBy(params: { tag_id?: string | undefined; segment_id?: string | undefined }): Promise<ApiResponse<UserList>>;
    listBy(
        params: { tag_id?: string | undefined; segment_id?: string | undefined },
        cb: callback<ApiResponse<UserList>>,
    ): void;

    scroll: Scroll<User>;

    archive(identifier: UserIdentifier): Promise<ApiResponse<User>>;
    archive(identifier: UserIdentifier, cb: callback<ApiResponse<User>>): void;

    bulk(operations: Array<BulkOperation>): Promise<ApiResponse<any>>;
    bulk(operations: Array<BulkOperation>, cb: callback<ApiResponse<any>>): void;

    requestPermanentDeletion(id: string): Promise<{ id: number }>;
    requestPermanentDeletion(id: string, cb: callback<{ id: number }>): void;

    requestPermanentDeletionByParams(identifier: UserIdentifier): Promise<{ id: number }>;
    requestPermanentDeletionByParams(identifier: UserIdentifier, cb: callback<{ id: number }>): void;
}

export class Leads {
    create(lead: Partial<Lead>): Promise<ApiResponse<Lead>>;
    create(lead: Partial<Lead>, cb: callback<ApiResponse<Lead>>): void;

    update(lead: UserIdentifier & Partial<Lead>): Promise<ApiResponse<Lead>>;
    update(lead: UserIdentifier & Partial<Lead>, cb: callback<ApiResponse<Lead>>): void;

    list(): Promise<ApiResponse<LeadList>>;
    list(cb: callback<ApiResponse<LeadList>>): void;

    listBy(
        params: { email?: string | undefined; tag_id?: string | undefined; segment_id?: string | undefined },
    ): Promise<ApiResponse<LeadList>>;
    listBy(
        params: { email?: string | undefined; tag_id?: string | undefined; segment_id?: string | undefined },
        cb: callback<ApiResponse<LeadList>>,
    ): void;

    find(identifier: LeadIdentifier): Promise<ApiResponse<Lead>>;
    find(identifier: LeadIdentifier, cb: callback<ApiResponse<Lead>>): void;

    delete(identifier: LeadIdIdentifier): Promise<ApiResponse<Lead>>;
    delete(identifier: LeadIdIdentifier, cb: callback<ApiResponse<Lead>>): void;

    convert(params: { contact: LeadIdentifier; user: UserIdentifier }): Promise<ApiResponse<Lead>>;
    convert(params: { contact: LeadIdentifier; user: UserIdentifier }, cb: callback<ApiResponse<Lead>>): void;
}

export class Visitors {
    update(visitor: VisitorIdentifier & Partial<Visitor>): Promise<ApiResponse<Visitor>>;
    update(visitor: VisitorIdentifier & Partial<Visitor>, cb: callback<ApiResponse<Visitor>>): void;

    find(identifier: VisitorIdentifier): Promise<ApiResponse<Visitor>>;
    find(identifier: VisitorIdentifier, cb: callback<ApiResponse<Visitor>>): void;

    delete(id: string): Promise<ApiResponse<Visitor>>;
    delete(id: string, cb: callback<ApiResponse<Visitor>>): void;

    convert(params: { identifier: VisitorIdentifier; type: "lead" }): Promise<ApiResponse<Lead>>;
    convert(params: { identifier: VisitorIdentifier; type: "user"; user: UserIdentifier }): Promise<ApiResponse<User>>;

    convert(
        params: {
            identifier: VisitorIdentifier;
            type: "lead";
        },
        cb: callback<ApiResponse<Lead>>,
    ): void;
    convert(
        params: {
            identifier: VisitorIdentifier;
            type: "user";
            user: UserIdentifier;
        },
        cb: callback<ApiResponse<User>>,
    ): void;
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

    listBy(params: { tag_id?: string | undefined; segment_id?: string | undefined }): Promise<ApiResponse<CompanyList>>;
    listBy(
        params: { tag_id?: string | undefined; segment_id?: string | undefined },
        cb: callback<ApiResponse<CompanyList>>,
    ): void;

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

    bulk(operations: Array<BulkOperation>): Promise<ApiResponse<any>>;
    bulk(operations: Array<BulkOperation>, cb: callback<ApiResponse<any>>): void;
}

export class Messages {
    create(message: Partial<CreateMessage>): Promise<ApiResponse<Message>>;
    create(message: Partial<CreateMessage>, cb: callback<ApiResponse<Message>>): void;
}
