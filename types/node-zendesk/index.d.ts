// Type definitions for node-zendesk 1.4
// Project: https://github.com/blakmatrix/node-zendesk
// Definitions by: jgeth <https://github.com/jgeth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node"/>

import { PathLike } from 'fs';

export type ZendeskCallback<TResponse, TResult> = (
    error: Error | undefined,
    response: TResponse,
    result: TResult
) => void;

export interface Client {
    attachments: Attachments.Methods;
    macros: Macros.Methods;
    requests: Requests.Methods;
    tickets: Tickets.Methods;
    useridentities: Users.Identities.Methods;
    users: Users.Methods;
}

export interface ClientOptions {
    username: string;
    token: string;
    remoteUri: string;
    oauth?: boolean;
    debug?: boolean;
    disableGlobalState?: boolean;
    asUser?: string;
}

export function createClient(config: ClientOptions): Client;

export namespace Attachments {
    interface Methods {
        request(httpMethod: string, fields: unknown, config: unknown, cb: ZendeskCallback<unknown, unknown>): unknown;

        upload(
            file: PathLike,
            fileOptions: {
                filename: string;
                token?: string;
            },
            cb: ZendeskCallback<unknown, unknown>
        ): void;
    }

    interface Photo extends PersistableModel {
        url: string;
        file_name: string;
        content_url: string;
        content_type: string;
        size: number;
        width: number;
        height: number;
        inline: boolean;
    }

    interface Model extends Photo {
        thumbnails: ReadonlyArray<Photo>;
    }
}

/**
 * @see {@link https://developer.zendesk.com/rest_api/docs/support/macros|Zendesk Macros}
 */
export namespace Macros {
    interface Methods {
        applyTicket(
            ticketId: ZendeskID,
            macroId: number,
            cb: ZendeskCallback<unknown, unknown>
        ): ApplyTicketResponsePayload;
    }

    interface ApplyTicketResponsePayload {
        result: {
            ticket: Tickets.CreateModel;
            comment: {
                body: string;
                html_body: string;
                scoped_body?: unknown;
                public?: boolean;
            };
        };
    }
}

/**
 * @see {@link https://developer.zendesk.com/rest_api/docs/support/organizations|Zendesk Organizations}
 */
export namespace Organizations {
    interface Model extends AuditableModel {
        readonly url?: string;
        external_id?: string | null;
        name: string;
        domain_names?: ReadonlyArray<string>;
        details?: string | null;
        notes?: string | null;
        group_id?: number | null;
        shared_tickets?: boolean;
        shared_comments?: boolean;
        tags?: ReadonlyArray<string>;
        organization_fields?: object | null;
    }
}

/**
 * @see {@link https://developer.zendesk.com/rest_api/docs/support/requests|Zendesk Requests}
 */
export namespace Requests {
    interface Methods {
        create(request: CreatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        getRequest(requestId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        listComments(requestId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): Comments.ListPayload;
        requestAll(httpMethod: string, fields: unknown, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        update(requestId: ZendeskID, request: UpdatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/requests#create-request|Zendesk Requests Create}
     */
    interface CreateModel {
        requester?: RequesterAnonymous; // Required for anonymous requests
        subject: string;
        comment: Comments.CreateModel;
        priority?: Tickets.Priority | null; // Anonymous requests can set priority, Authenticated requests cannot
        type?: Tickets.Type | null; // Anonymous requests can set type, Authenticated requests cannot
        custom_fields?: Tickets.Field[] | null;
        fields?: Tickets.Field[] | null;
        due_at?: string | null; // Anonymous requests can set due date as long as type == task. Authenticated requests cannot
        ticket_form_id?: number | null;
        recipient?: string | null;
        collaborators?: ZendeskID[] | string[] | Collaborator[];
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/requests#update-request|Zendesk Requests Update}
     */
    interface UpdateModel {
        comment?: Comments.CreateModel;
        solved?: boolean;
        additional_collaborators?: ZendeskID[] | string[] | Collaborator[];
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/requests#json-format|Zendesk Requests JSON Format}
     */
    interface ResponseModel extends AuditableModel {
        readonly url: string;
        readonly subject: string;
        readonly description: string;
        readonly status: Tickets.Status;
        readonly priority: Tickets.Priority | null;
        readonly type: Tickets.Type | null;
        readonly custom_fields: Tickets.Field[] | null;
        readonly fields: Tickets.Field[] | null;
        readonly organization_id: ZendeskID | null;
        readonly requester_id: ZendeskID;
        readonly assignee_id: ZendeskID | null;
        readonly group_id?: ZendeskID | null;
        readonly collaborator_ids: ZendeskID[];
        readonly email_cc_ids: ZendeskID[];
        readonly via: Tickets.Via;
        readonly is_public: boolean;
        readonly due_at: string | null;
        readonly can_be_solved_by_me?: boolean;
        readonly solved?: boolean;
        readonly ticket_form_id?: number | null;
        readonly recipient: string | null;
        readonly followup_source_id: string | null;
    }

    interface RequesterAnonymous {
        name: string;
        email?: string;
        locale_id?: ZendeskID;
    }

    interface Collaborator {
        name?: string;
        email: string;
    }

    interface CreatePayload {
        readonly request: CreateModel;
    }

    interface UpdatePayload {
        readonly request: UpdateModel;
    }

    interface ResponsePayload {
        readonly request: ResponseModel;
    }

    interface ListPayload extends PaginablePayload {
        readonly requests: ReadonlyArray<ResponseModel>;
    }

    namespace Comments {
        interface CreateModel {
            url?: string;
            request_id?: number;
            body?: string;
            html_body?: string;
            public?: boolean;
            author_id?: ZendeskID;
            uploads?: ReadonlyArray<string>;
        }

        // TODO: support VoiceComment model @jgeth 2019-01-22
        interface ResponseModel extends TemporalModel {
            readonly url: string;
            readonly type: Type;
            readonly request_id: number;
            readonly body: string;
            readonly html_body: string;
            readonly plain_body: string;
            readonly public: boolean;
            readonly author_id: ZendeskID;
            readonly attachments: ReadonlyArray<Attachments.Model>;
            readonly via?: Tickets.Via;
            readonly metadata?: Tickets.Comments.Metadata;
        }

        enum Type {
            Comment = 'Comment',
            VoiceComment = 'VoiceComment',
        }

        namespace CommentsUsers {
            interface ResponseModel extends PersistableModel {
                readonly name: string;
                readonly photo: Attachments.Model | null;
                readonly agent: boolean;
                readonly organization_id: number | null;
            }
        }

        interface ListPayload extends PaginablePayload {
            comments: ReadonlyArray<ResponseModel>;
            users: ReadonlyArray<CommentsUsers.ResponseModel>;
            organizations: ReadonlyArray<Tickets.Comments.Organizations.ResponseModel>;
        }
    }
}

/**
 * @see {@link https://developer.zendesk.com/rest_api/docs/support/tickets|Zendesk Tickets}
 */
export namespace Tickets {
    interface Methods {
        create(ticket: CreatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        update(ticketId: ZendeskID, ticket: UpdatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/tickets#create-ticket|Zendesk Tickets Create}
     */
    interface CreateModel {
        comment: Requests.Comments.CreateModel;
        external_id?: string | null;
        type?: Type | null;
        subject?: string | null;
        raw_subject?: string | null;
        priority?: Priority | null;
        status?: Status | null;
        recipient?: string | null;
        requester_id?: ZendeskID;
        submitter_id?: ZendeskID | null;
        assignee_id?: ZendeskID | null;
        organization_id?: number | null;
        group_id?: number | null;
        collaborator_ids?: ReadonlyArray<number> | null;
        collaborators?: ReadonlyArray<any> | null;
        follower_ids?: ReadonlyArray<number> | null;
        email_cc_ids?: ReadonlyArray<number> | null;
        forum_topic_id?: number | null;
        problem_id?: number | null;
        due_at?: string | null;
        tags?: ReadonlyArray<string> | null;
        custom_fields?: Field[] | null;
        fields?: Field[] | null;
        via_followup_source_id?: number | null;
        macro_ids?: ReadonlyArray<number> | null;
        ticket_form_id?: number | null;
        brand_id?: number | null;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/tickets#update-ticket|Zendesk Tickets Update}
     */
    interface UpdateModel {
        subject?: string | null;
        comment?: Requests.Comments.CreateModel;
        requester_id?: ZendeskID;
        assignee_id?: ZendeskID | null;
        assignee_email?: string | null;
        group_id?: number | null;
        organization_id?: number | null;
        collaborator_ids?: ReadonlyArray<number> | null;
        additional_collaborators?: ReadonlyArray<any> | null;
        followers?: ReadonlyArray<Follower> | null;
        email_ccs?: ReadonlyArray<EmailCC> | null;
        type?: Type | null;
        priority?: Priority | null;
        status?: Status | null;
        tags?: ReadonlyArray<string> | null;
        external_id?: string | null;
        problem_id?: number | null;
        due_at?: string | null;
        custom_fields?: Field[] | null;
        updated_stamp?: string | null;
        safe_update?: boolean;
        sharing_agreement_ids?: ReadonlyArray<number> | null;
        macro_ids?: ReadonlyArray<number> | null;
        attribute_value_ids?: ReadonlyArray<number> | null;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/tickets#json-format|Zendesk Tickets JSON Format}
     */
    interface ResponseModel extends AuditableModel {
        readonly url: string;
        readonly external_id: string | null;
        readonly type: Type | null;
        readonly subject: string | null;
        readonly raw_subject: string | null;
        readonly description: string;
        readonly priority: Priority | null;
        readonly status: Status;
        readonly recipient: string | null;
        readonly requester_id: ZendeskID;
        readonly submitter_id: ZendeskID;
        readonly assignee_id: ZendeskID | null;
        readonly organization_id: number;
        readonly group_id: number | null;
        readonly collaborator_ids: ReadonlyArray<number>;
        readonly follower_ids: ReadonlyArray<number>;
        readonly email_cc_ids: ReadonlyArray<number>;
        readonly forum_topic_id: number | null;
        readonly problem_id: number | null;
        readonly has_incidents: boolean;
        readonly due_at: string | null;
        readonly tags: ReadonlyArray<string>;
        readonly via: Via;
        readonly custom_fields: Field[];
        readonly fields: Field[];
        readonly satisfaction_rating: object | string | null;
        readonly sharing_agreement_ids: ReadonlyArray<number>;
        readonly followup_ids: ReadonlyArray<number>;
        readonly ticket_form_id?: number | null; // Enterprise version only
        readonly brand_id?: number | null; // Enterprise version only
        readonly allow_channelback: boolean;
        readonly allow_attachments: boolean;
        readonly is_public: boolean;
        readonly comment_count?: number;
    }

    interface Audit {
        readonly id: ZendeskID;
        readonly ticket_id: ZendeskID;
        readonly metadata: unknown | null;
        readonly via: Via | null;
        readonly created_at: string;
        readonly author_id: ZendeskID;
        readonly events: ReadonlyArray<unknown> | null;
    }

    interface EmailCC {
        user_id?: ZendeskID;
        user_email?: string;
        action: string;
    }

    interface Field {
        id: number;
        value: any;
    }

    interface Follower {
        user_id?: ZendeskID;
        user_email?: string;
        action: string;
    }

    enum Priority {
        Urgent = 'urgent',
        High = 'high',
        Normal = 'normal',
        Low = 'low',
    }

    enum Status {
        New = 'new',
        Open = 'open',
        Pending = 'pending',
        Hold = 'hold',
        Solved = 'solved',
        Closed = 'closed',
    }

    enum Type {
        Problem = 'problem',
        Incident = 'incident',
        Question = 'question',
        Task = 'task',
    }

    interface Via {
        channel: ViaChannel;
        source: ViaSource;
    }

    enum ViaChannel {
        Web = 'web',
        Mobile = 'mobile',
        Rule = 'rule',
        System = 'system',
    }

    interface ViaSource {
        to: object;
        from: object;
        rel: string | null;
    }

    interface CreatePayload {
        readonly ticket: CreateModel;
    }

    interface UpdatePayload {
        readonly ticket: UpdateModel;
    }

    interface ResponsePayload {
        readonly ticket: ResponseModel;
        readonly audit: Audit;
    }

    namespace Comments {
        interface ResponseModel extends Requests.Comments.ResponseModel {
            readonly via?: Via;
            readonly metadata?: Metadata;
        }

        interface Metadata {
            flags?: ReadonlyArray<number>;
            flag_options: unknown;
        }

        interface ListPayload extends PaginablePayload {
            comments: ReadonlyArray<ResponseModel>;
            users: ReadonlyArray<CommentsUsers.ResponseModel>;
            organizations: ReadonlyArray<Organizations.ResponseModel>;
        }

        namespace CommentsUsers {
            interface ResponseModel extends Requests.Comments.CommentsUsers.ResponseModel {
                readonly role: Users.Role;
            }
        }

        namespace Organizations {
            interface ResponseModel extends PersistableModel {
                readonly name: string;
            }
        }
    }
}

/**
 * @see {@link https://developer.zendesk.com/rest_api/docs/support/users|Zendesk Users}
 */
export namespace Users {
    interface Methods {
        createOrUpdate(user: CreatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/users#create-user|Zendesk Users Create}
     */
    interface CreateModel {
        email?: string | null;
        name: string;
        alias?: string | null;
        custom_role_id?: number | null;
        details?: string | null;
        external_id?: string | null;
        locale_id?: number | null;
        moderator?: boolean | null;
        notes?: string | null;
        only_private_comments?: boolean | null;
        organization_id?: number | null;
        default_group_id?: number | null;
        phone?: string | null;
        photo?: Attachments.Model | null;
        restricted_agent?: boolean | null;
        role?: Role | null;
        signature?: string | null;
        suspended?: boolean | null;
        tags?: ReadonlyArray<unknown> | null;
        ticket_restriction?: TicketRestriction | null;
        time_zone?: string | null;
        user_fields?: object | null;
        verified?: boolean | null;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/users#json-format-for-agent-or-admin-requests|Zendesk Users JSON Format}
     */
    interface ResponseModel extends AuditableModel {
        readonly email: string | null;
        readonly name: string;
        readonly active: boolean;
        readonly alias: string | null;
        readonly chat_only: boolean;
        readonly custom_role_id: number | null;
        readonly role_type: RoleType;
        readonly details: string | null;
        readonly external_id: string | null;
        readonly last_login_at: string | null;
        readonly locale: string | null;
        readonly locale_id: number | null;
        readonly moderator: boolean;
        readonly notes: string | null;
        readonly only_private_comments: boolean;
        readonly organization_id: number | null;
        readonly default_group_id: number | null;
        readonly phone: string | null;
        readonly shared_phone_number: boolean | null;
        readonly photo: Attachments.Model | null;
        readonly restricted_agent: boolean;
        readonly role: Role;
        readonly shared: boolean;
        readonly shared_agent: boolean;
        readonly signature: string | null;
        readonly suspended: boolean;
        readonly tags?: ReadonlyArray<unknown> | null;
        readonly ticket_restriction: TicketRestriction | null;
        readonly time_zone: string | null;
        readonly two_factor_auth_enabled: boolean;
        readonly url: string;
        readonly user_fields?: object | null;
        readonly verified: boolean;
        readonly report_csv: boolean;
    }

    interface CreatePayload {
        user: CreateModel;
    }

    interface ResponsePayload {
        user: ResponseModel;
    }

    enum Role {
        Admin = 'admin',
        Agent = 'agent',
        EndUser = 'end-user',
    }

    // Defines an agent type
    enum RoleType {
        Custom = 0,
        Light = 1,
        Chat = 2,
    }

    enum TicketRestriction {
        Assigned = 'assigned',
        Groups = 'groups',
        Organization = 'organization',
        Requested = 'requested',
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/user_identities|Zendesk User Identities}
     */
    namespace Identities {
        interface Methods {
            create(userID: ZendeskID, userIDentity: UpdateModel, cb: ZendeskCallback<unknown, unknown>): ResponseModel;
            list(userID: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ReadonlyArray<ResponseModel>;
            makePrimary(
                userID: ZendeskID,
                userIDentityID: ZendeskID,
                cb: ZendeskCallback<unknown, unknown>
            ): ReadonlyArray<ResponseModel>;
            update(
                userID: ZendeskID,
                userIDentityID: ZendeskID,
                userIDentity: UpdateModel,
                cb: ZendeskCallback<unknown, unknown>
            ): ResponseModel;
        }

        interface ResponseModel extends AuditableModel {
            readonly url: string;
            readonly user_id: ZendeskID;
            readonly type: Type;
            readonly value: string;
            readonly verified: boolean;
            readonly primary: boolean;
            readonly undeliverable_count: number;
            readonly deliverable_state: DeliverableState;
        }

        interface CreateModel {
            type: Type;
            value: string;
            verified?: boolean;
            primary?: boolean;
        }

        interface UpdateModel {
            value?: string;
            verified?: boolean;
        }

        enum Type {
            AgentForwarding = 'agent_forwarding',
            Email = 'email',
            Facebook = 'facebook',
            Google = 'google',
            PhoneNumber = 'phone_number',
            SDK = 'sdk',
        }

        enum DeliverableState {
            Deliverable = 'deliverable',
            Undeliverable = 'undeliverable',
        }
    }
}

export interface PaginablePayload {
    next_page: number | null;
    previous_page: number | null;
    count: number;
}

export interface PersistableModel {
    readonly id: ZendeskID;
}

export interface TemporalModel extends PersistableModel {
    readonly created_at: string;
}

export interface AuditableModel extends TemporalModel {
    readonly updated_at: string | null;
}

export type ZendeskID = number;
