// Type definitions for node-zendesk 2.0
// Project: https://github.com/blakmatrix/node-zendesk
// Definitions by: jgeth <https://github.com/jgeth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

/// <reference types="node"/>

import { PathLike } from "fs";

export type ZendeskCallback<TResponse, TResult> = (
    error: Error | undefined,
    response: TResponse,
    result: TResult,
) => void;

export interface Client {
    accountsettings: unknown;
    activitystream: unknown;
    attachments: Attachments.Methods;
    brand: unknown;
    categories: unknown;
    customagentroles: unknown;
    dynamiccontent: unknown;
    forums: unknown;
    forumsubscriptions: unknown;
    groupmemberships: unknown;
    groups: unknown;
    helpers: unknown;
    imports: unknown;
    installations: unknown;
    jobstatuses: JobStatuses.Methods;
    locales: unknown;
    macros: Macros.Methods;
    oauthtokens: unknown;
    organizationfields: unknown;
    organizationmemberships: unknown;
    organizations: unknown;
    policies: unknown;
    requests: Requests.Methods;
    satisfactionratings: unknown;
    search: unknown;
    sessions: unknown;
    sharingagreement: unknown;
    suspendedtickets: unknown;
    tags: unknown;
    targets: unknown;
    ticketaudits: unknown;
    ticketevents: unknown;
    ticketexport: unknown;
    ticketfields: unknown;
    ticketforms: unknown;
    ticketimport: unknown;
    ticketmetrics: unknown;
    tickets: Tickets.Methods;
    topiccomments: unknown;
    topics: unknown;
    topicsubscriptions: unknown;
    topicvotes: unknown;
    triggers: unknown;
    userfields: Users.Fields.Methods;
    useridentities: Users.Identities.Methods;
    users: Users.Methods;
    views: unknown;
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
        request(httpMethod: string, fields: unknown, config: unknown): Promise<unknown>;

        show(attachmentId: number, cb: ZendeskCallback<unknown, ShowResponseModel>): unknown;
        show(attachmentId: number): Promise<ShowResponseModel>;

        upload(
            file: PathLike,
            fileOptions: {
                filename: string;
                token?: string;
            },
            cb: ZendeskCallback<unknown, UploadResponseModel>,
        ): void;
        upload(
            file: PathLike,
            fileOptions: {
                filename: string;
                token?: string;
            },
        ): Promise<UploadResponseModel>;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/attachments#json-format}
     */
    interface Attachment extends PersistableModel {
        readonly content_type?: string;
        readonly content_url?: string;
        readonly deleted?: boolean;
        readonly file_name?: string;
        readonly inline?: boolean;
        readonly mapped_content_url?: string;
        readonly size?: number;
        readonly url?: string;
    }

    interface Model extends Attachment {
        thumbnails?: ReadonlyArray<Attachment>;
    }

    interface ShowResponseModel {
        attachment: Attachment;
    }

    interface UploadResponseModel {
        upload: {
            attachment?: Attachment;
            attachments?: Attachment[];
            token: string;
        };
    }
}

/**
 * @see {@link https://developer.zendesk.com/rest_api/docs/support/job_statuses|Zendesk Job Statuses}
 */
export namespace JobStatuses {
    interface Methods {
        show(jobStatusId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        show(jobStatusId: ZendeskID): Promise<ResponsePayload>;
        watch(
            jobStatusId: ZendeskID,
            interval: number,
            maxAttempts: number,
            cb: ZendeskCallback<unknown, unknown>,
        ): unknown;
        watch(jobStatusId: ZendeskID, interval: number, maxAttempts: number): Promise<unknown>;
    }

    type Status = "queued" | "working" | "failed" | "completed" | "killed";

    interface Result extends PersistableModel {
        readonly action: string;
        readonly success: boolean;
        readonly status: string;
    }

    interface ResponseModel extends PersistableModel {
        readonly url?: string | null;
        readonly total?: number;
        readonly progress?: number;
        readonly status?: Status;
        readonly message?: string | null;
        readonly results?: ReadonlyArray<Result>;
    }

    interface ResponsePayload {
        readonly job_status: ResponseModel;
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
            cb: ZendeskCallback<unknown, unknown>,
        ): ApplyTicketResponsePayload;
        applyTicket(ticketId: ZendeskID, macroId: number): Promise<ApplyTicketResponsePayload>;
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
        /** Listing Requests */
        list(cb: ZendeskCallback<unknown, unknown>): ListPayload;
        list(): Promise<ListPayload>;
        listOpen(cb: ZendeskCallback<unknown, unknown>): ListPayload;
        listOpen(): Promise<ListPayload>;
        listSolved(cb: ZendeskCallback<unknown, unknown>): ListPayload;
        listSolved(): Promise<ListPayload>;
        listCCD(organizationId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        listCCD(organizationId: ZendeskID): Promise<ListPayload>;
        listByUser(userId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        listByUser(userId: ZendeskID): Promise<ListPayload>;
        listByOrganization(organizationId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        listByOrganization(organizationId: ZendeskID): Promise<ListPayload>;

        /** Viewing Requests */
        getRequest(requestId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        getRequest(requestId: ZendeskID): Promise<ResponsePayload>;

        /** Creating Requests */
        create(request: CreatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        create(request: CreatePayload): Promise<ResponsePayload>;

        /** Updating Requests */
        update(requestId: ZendeskID, request: UpdatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        update(requestId: ZendeskID, request: UpdatePayload): Promise<ResponsePayload>;

        /** Listing Comments */
        listComments(requestId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): Comments.ListPayload;
        listComments(requestId: ZendeskID): Promise<Comments.ListPayload>;

        /** Get Comment */
        getComment(
            requestId: ZendeskID,
            commentId: ZendeskID,
            cb: ZendeskCallback<unknown, unknown>,
        ): Comments.ResponsePayload;
        getComment(requestId: ZendeskID, commentId: ZendeskID): Promise<Comments.ResponsePayload>;

        /** Inherited */
        requestAll(httpMethod: string, fields: unknown, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        requestAll(httpMethod: string, fields: unknown): Promise<ListPayload>;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/requests#create-request|Zendesk Requests Create}
     */
    interface CreateModel {
        requester?: RequesterAnonymous; // Required for anonymous requests
        subject: string;
        comment: Comments.CreateModel;
        priority?: Tickets.Priority | null; // Anonymous requests can set priority, Authenticated requests cannot
        type?: Tickets.TicketType | null; // Anonymous requests can set type, Authenticated requests cannot
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
        readonly type: Tickets.TicketType | null;
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

        interface ResponseModel extends TemporalModel {
            readonly url: string;
            readonly type: RequestType;
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

        type RequestType = "Comment" | "VoiceComment";

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

        interface ResponsePayload {
            readonly comment: ResponseModel;
        }
    }
}

/**
 * @see {@link https://developer.zendesk.com/rest_api/docs/support/tickets|Zendesk Tickets}
 */
export namespace Tickets {
    interface Methods {
        /** Listing Tickets */
        list(cb: ZendeskCallback<unknown, unknown>): ListPayload;
        list(): Promise<ListPayload>;
        listAssigned(userId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        listAssigned(userId: ZendeskID): Promise<ListPayload>;
        listByOrganization(organizationId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        listByOrganization(organizationId: ZendeskID): Promise<ListPayload>;
        listByUserRequested(userId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        listByUserRequested(userId: ZendeskID): Promise<ListPayload>;
        listByUserCCD(userId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        listByUserCCD(userId: ZendeskID): Promise<ListPayload>;
        listWithFilter(type: string, value: unknown, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        listWithFilter(type: string, value: unknown): Promise<ListPayload>;
        listRecent(cb: ZendeskCallback<unknown, unknown>): ListPayload;
        listRecent(): Promise<ListPayload>;
        listCollaborators(ticketId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): Users.ListPayload;
        listCollaborators(ticketId: ZendeskID): Promise<Users.ListPayload>;
        listIncidents(ticketId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        listIncidents(ticketId: ZendeskID): Promise<ListPayload>;
        listMetrics(ticketId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): Metrics.ResponsePayload;
        listMetrics(ticketId: ZendeskID): Promise<Metrics.ResponsePayload>;

        /** Viewing Tickets */
        show(ticketId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        show(ticketId: ZendeskID): Promise<ResponsePayload>;
        showMany(ticketIds: ReadonlyArray<ZendeskID>, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        showMany(ticketIds: ReadonlyArray<ZendeskID>): Promise<ListPayload>;

        /** Creating Tickets */
        create(ticket: CreatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        create(ticket: CreatePayload): Promise<ResponsePayload>;
        createMany(tickets: CreateManyPayload, cb: ZendeskCallback<unknown, unknown>): JobStatuses.ResponsePayload;
        createMany(tickets: CreateManyPayload): Promise<JobStatuses.ResponsePayload>;

        /** Updating Tickets */
        update(ticketId: ZendeskID, ticket: UpdatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        update(ticketId: ZendeskID, ticket: UpdatePayload): Promise<ResponsePayload>;
        updateMany(tickets: UpdateManyPayload, cb: ZendeskCallback<unknown, unknown>): JobStatuses.ResponsePayload;
        updateMany(tickets: UpdateManyPayload): Promise<JobStatuses.ResponsePayload>;

        /** Deleting Tickets */
        delete(ticketId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): unknown;
        delete(ticketId: ZendeskID): Promise<unknown>;
        deleteMany(ticketIds: ReadonlyArray<ZendeskID>, cb: ZendeskCallback<unknown, unknown>): unknown;
        deleteMany(ticketIds: ReadonlyArray<ZendeskID>): Promise<unknown>;

        /** Merging Tickets */
        merge(
            ticketId: ZendeskID,
            mergingTickets: MergePayload,
            cb: ZendeskCallback<unknown, unknown>,
        ): JobStatuses.ResponsePayload;
        merge(ticketId: ZendeskID, mergingTickets: MergePayload): Promise<JobStatuses.ResponsePayload>;

        /** Ticket Exports */
        export(startTime: number, cb: ZendeskCallback<unknown, unknown>): unknown;
        export(startTime: number): Promise<unknown>;
        exportSample(startTime: number, options: unknown): unknown;
        incremental(startTime: number, cb: ZendeskCallback<unknown, unknown>): unknown;
        incremental(startTime: number): Promise<unknown>;
        incrementalInclude(startTime: number, include: unknown, cb: ZendeskCallback<unknown, unknown>): unknown;
        incrementalInclude(startTime: number, include: unknown): Promise<unknown>;
        incrementalSample(startTime: number, cb: ZendeskCallback<unknown, unknown>): unknown;
        incrementalSample(startTime: number): Promise<unknown>;

        /** Listing Comments */
        getComments(requestId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): Comments.ListPayload;
        getComments(requestId: ZendeskID): Promise<Comments.ListPayload>;

        /** Listing Audits */
        exportAudit(ticketId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): AuditsListPayload;
        exportAudit(ticketId: ZendeskID): Promise<AuditsListPayload>;

        /** Adding Tags */
        addTags(ticketId: ZendeskID, tags: ReadonlyArray<string>, cb: ZendeskCallback<unknown, unknown>): TagsPayload;
        addTags(ticketId: ZendeskID, tags: ReadonlyArray<string>): Promise<TagsPayload>;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/tickets#create-ticket|Zendesk Tickets Create}
     */
    interface CreateModel {
        comment: Requests.Comments.CreateModel;
        external_id?: string | null;
        type?: TicketType | null;
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
        type?: TicketType | null;
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
        readonly type: TicketType | null;
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

    type Priority = "urgent" | "high" | "normal" | "low";

    type Status = "new" | "open" | "pending" | "hold" | "solved" | "closed";

    type TicketType = "problem" | "incident" | "question" | "task";

    interface Via {
        channel: ViaChannel;
        source: ViaSource;
    }

    type ViaChannel = "api" | "web" | "mobile" | "rule" | "system";

    interface ViaSource {
        to: object;
        from: object;
        rel: string | null;
    }

    interface CreatePayload {
        readonly ticket: CreateModel;
    }

    interface CreateManyPayload {
        readonly tickets: ReadonlyArray<CreateModel>;
    }

    interface UpdatePayload {
        readonly ticket: UpdateModel;
    }

    interface UpdateManyPayload {
        readonly tickets: ReadonlyArray<UpdateModel>;
    }

    interface MergePayload {
        readonly ids: ReadonlyArray<ZendeskID>;
        readonly target_comment?: string | null;
        readonly source_comment?: string | null;
    }

    interface AuditsListPayload extends PaginablePayload {
        readonly audits: ReadonlyArray<Audit>;
    }

    interface TagsPayload {
        readonly tags: ReadonlyArray<string>;
    }

    interface ResponsePayload {
        readonly ticket: ResponseModel;
        readonly audit: Audit;
    }

    interface ListPayload extends PaginablePayload {
        readonly tickets: ReadonlyArray<ResponseModel>;
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

    namespace Metrics {
        interface MinutesObject {
            calendar: number;
            business: number;
        }

        interface ResponseModel extends AuditableModel {
            readonly ticket_id?: ZendeskID;
            readonly url?: string;
            readonly group_stations?: number;
            readonly assignee_stations?: number;
            readonly reopens?: number;
            readonly replies?: number;
            readonly assignee_updated_at?: string | null;
            readonly requester_updated_at?: string | null;
            readonly initially_assigned_at?: string | null;
            readonly assigned_at?: string | null;
            readonly solved_at?: string | null;
            readonly latest_comment_added_at?: string | null;
            readonly first_resolution_time_in_minutes?: MinutesObject;
            readonly reply_time_in_minutes?: MinutesObject;
            readonly full_resolution_time_in_minutes?: MinutesObject;
            readonly agent_wait_time_in_minutes?: MinutesObject;
            readonly requester_wait_time_in_minutes?: MinutesObject;
        }

        interface ResponsePayload {
            readonly ticket_metric: ResponseModel;
        }

        interface ListPayload {
            readonly ticket_metrics: ReadonlyArray<ResponseModel>;
        }
    }
}

/**
 * @see {@link https://developer.zendesk.com/rest_api/docs/support/users|Zendesk Users}
 */
export namespace Users {
    interface Methods {
        /** User Auth */
        auth(cb: ZendeskCallback<unknown, unknown>): unknown;
        auth(): Promise<unknown>;

        /** Listing Users */
        list(cb: ZendeskCallback<unknown, unknown>): ListPayload;
        list(): Promise<ListPayload>;
        listByGroup(groupId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        listByGroup(groupId: ZendeskID): Promise<ListPayload>;
        listByOrganization(organizationId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        listByOrganization(organizationId: ZendeskID): Promise<ListPayload>;

        /** Showing Users */
        show(userId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        show(userId: ZendeskID): Promise<ResponsePayload>;
        showMany(userIds: ReadonlyArray<ZendeskID>, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        showMany(userIds: ReadonlyArray<ZendeskID>): Promise<ListPayload>;

        /** Creating Users */
        create(user: CreatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        create(user: CreatePayload): Promise<ResponsePayload>;
        createMany(users: CreateManyPayload, cb: ZendeskCallback<unknown, unknown>): JobStatuses.ResponsePayload;
        createMany(users: CreateManyPayload): Promise<JobStatuses.ResponsePayload>;
        createOrUpdate(user: CreatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        createOrUpdate(user: CreatePayload): Promise<ResponsePayload>;
        createOrUpdateMany(
            users: CreateManyPayload,
            cb: ZendeskCallback<unknown, unknown>,
        ): JobStatuses.ResponsePayload;
        createOrUpdateMany(users: CreateManyPayload): Promise<JobStatuses.ResponsePayload>;

        /** Updating Users */
        update(userId: ZendeskID, user: UpdatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        update(userId: ZendeskID, user: UpdatePayload): Promise<ResponsePayload>;
        updateMany(
            userIds: UpdateIdPayload,
            users: UpdateManyPayload,
            cb: ZendeskCallback<unknown, unknown>,
        ): JobStatuses.ResponsePayload;
        updateMany(userIds: UpdateIdPayload, users: UpdateManyPayload): Promise<JobStatuses.ResponsePayload>;

        /** Suspending Users */
        suspend(userId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        suspend(userId: ZendeskID): Promise<ResponsePayload>;
        unsuspend(userId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        unsuspend(userId: ZendeskID): Promise<ResponsePayload>;

        /** Deleting Users */
        delete(userId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): unknown;
        delete(userId: ZendeskID): Promise<unknown>;

        /** Searching Users */
        search(params: unknown, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        search(params: unknown): Promise<ListPayload>;

        /** Getting own User */
        me(cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        me(): Promise<ResponsePayload>;

        /** Merging Users */
        merge(userId: ZendeskID, targetUserId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        merge(userId: ZendeskID, targetUserId: ZendeskID): Promise<ResponsePayload>;

        /** Changing User Password */
        password(
            userId: ZendeskID,
            oldPassword: string,
            newPassword: string,
            cb: ZendeskCallback<unknown, unknown>,
        ): unknown;
        password(userId: ZendeskID, oldPassword: string, newPassword: string): Promise<unknown>;

        /** Users Export */
        incrementalInclude(startTime: number, include: unknown, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        incrementalInclude(startTime: number, include: unknown): Promise<ListPayload>;
        incremental(startTime: number, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        incremental(startTime: number): Promise<ListPayload>;
        incrementalSample(startTime: number, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        incrementalSample(startTime: number): Promise<ListPayload>;
    }

    interface BaseModel {
        email?: string | null;
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
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/users#create-user|Zendesk Users Create}
     */
    interface CreateModel extends BaseModel {
        name: string;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/users#update-user|Zendesk Users Update}
     */
    interface UpdateModel extends BaseModel {
        name?: string;
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

    type UpdateIdPayload =
        | string
        | ReadonlyArray<ZendeskID>
        | { ids: ReadonlyArray<ZendeskID> }
        | { external_ids: ReadonlyArray<ZendeskID> };

    interface CreatePayload {
        user: CreateModel;
    }

    interface CreateManyPayload {
        users: ReadonlyArray<CreateModel>;
    }

    interface UpdatePayload {
        user: UpdateModel;
    }

    interface UpdateManyPayload {
        users: ReadonlyArray<UpdateModel>;
    }

    interface ResponsePayload {
        user: ResponseModel;
    }

    interface ListPayload extends PaginablePayload {
        users: ReadonlyArray<ResponseModel>;
    }

    type Role = "admin" | "agent" | "end-user";

    /**
     * Defines an agent type
     * 0 - Custom
     * 1 - Light
     * 2 - Chat
     */
    type RoleType = 0 | 1 | 2;

    type TicketRestriction = "assigned" | "groups" | "organization" | "requested";

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/user_identities|Zendesk User Identities}
     */
    namespace Identities {
        interface Methods {
            /** Listing Identities */
            list(userId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ListPayload;
            list(userId: ZendeskID): Promise<ListPayload>;

            /** Viewing Identities */
            show(userId: ZendeskID, identityId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
            show(userId: ZendeskID, identityId: ZendeskID): Promise<ResponsePayload>;

            /** Creating Identities */
            create(userId: ZendeskID, identity: CreatePayload, cb: ZendeskCallback<unknown, unknown>): ResponseModel;
            create(userId: ZendeskID, identity: CreatePayload): Promise<ResponseModel>;

            /** Updating Identities */
            update(
                userId: ZendeskID,
                identityId: ZendeskID,
                identity: UpdatePayload,
                cb: ZendeskCallback<unknown, unknown>,
            ): ResponsePayload;
            update(userId: ZendeskID, identityId: ZendeskID, identity: UpdatePayload): Promise<ResponsePayload>;
            makePrimary(userId: ZendeskID, identityId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ListPayload;
            makePrimary(userId: ZendeskID, identityId: ZendeskID): Promise<ListPayload>;
            verify(userId: ZendeskID, identityId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
            verify(userId: ZendeskID, identityId: ZendeskID): Promise<ResponsePayload>;
            requestVerification(
                userId: ZendeskID,
                identityId: ZendeskID,
                cb: ZendeskCallback<unknown, unknown>,
            ): unknown;
            requestVerification(userId: ZendeskID, identityId: ZendeskID): Promise<unknown>;

            /** Deleting Identities */
            delete(userId: ZendeskID, identityId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): unknown;
            delete(userId: ZendeskID, identityId: ZendeskID): Promise<unknown>;
        }

        interface CreateModel {
            type: IdentityType;
            value: string;
            verified?: boolean;
            primary?: boolean;
        }

        interface UpdateModel {
            value?: string;
            verified?: boolean;
        }

        interface ResponseModel extends AuditableModel {
            readonly url: string;
            readonly user_id: ZendeskID;
            readonly type: IdentityType;
            readonly value: string;
            readonly verified: boolean;
            readonly primary: boolean;
            readonly undeliverable_count: number;
            readonly deliverable_state: DeliverableState;
        }

        interface CreatePayload {
            readonly identity: CreateModel;
        }

        interface UpdatePayload {
            readonly identity: UpdateModel;
        }

        interface ListPayload extends PaginablePayload {
            readonly identities: ReadonlyArray<ResponseModel>;
        }

        interface ResponsePayload {
            readonly identity: ResponseModel;
        }

        type IdentityType = "agent_forwarding" | "email" | "facebook" | "google" | "phone_number" | "sdk";

        type DeliverableState = "deliverable" | "undeliverable";
    }

    namespace Fields {
        interface Methods {
            list(cb: ZendeskCallback<unknown, unknown>): unknown;
            list(): Promise<unknown>;
            show(fieldId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): unknown;
            show(fieldId: ZendeskID): Promise<unknown>;
            create(field: CreateUserField, cb: ZendeskCallback<unknown, unknown>): unknown;
            create(field: CreateUserField): Promise<unknown>;
            create(field: CreateUserField, cb: ZendeskCallback<unknown, unknown>): unknown;
            update(fieldId: ZendeskID, field: unknown, cb: ZendeskCallback<unknown, unknown>): unknown;
            update(fieldId: ZendeskID, field: unknown): Promise<unknown>;
            delete(fieldId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): unknown;
            delete(fieldId: ZendeskID): Promise<unknown>;
        }
        /**
         * Types of custom fields that can be created
         * @default 'text'
         */
        type UserFieldType = "text" | "textarea" | "checkbox" | "date" | "integer" | "decimal" | "regexp" | "tagger";

        /**
         * Represents 'user_field'
         */
        interface UserField {
            readonly id?: number;
            readonly url?: string;
            readonly type?: UserFieldType;
            key?: string;
            title: string;
            raw_title?: string;
            description?: string;
            raw_description?: string;
            position?: number;
            active?: boolean;
            readonly system?: boolean;
            regexp_for_validation?: string;
            created_at?: Date;
            updated_at?: Date;
            tag?: string;
            custom_field_options?: CustomFieldOptions[];
        }
        interface CreateUserField extends UserField {
            key: string;
        }
        interface CustomFieldOptions {
            [key: string]: unknown;
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
