// Type definitions for node-zendesk 2.0
// Project: https://github.com/blakmatrix/node-zendesk
// Definitions by: jgeth <https://github.com/jgeth>
//                 dannyhostetler <https://github.com/dannyhostetler>
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
    groups: Groups.Methods;
    helpers: unknown;
    imports: unknown;
    installations: unknown;
    jobstatuses: JobStatuses.Methods;
    locales: unknown;
    macros: Macros.Methods;
    oauthtokens: unknown;
    organizationfields: unknown;
    organizationmemberships: unknown;
    organizations: Organizations.Methods;
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
    ticketfields: Tickets.Fields.Methods;
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
    oauth?: boolean | undefined;
    debug?: boolean | undefined;
    disableGlobalState?: boolean | undefined;
    asUser?: string | undefined;
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
                token?: string | undefined;
            },
            cb: ZendeskCallback<unknown, UploadResponseModel>,
        ): void;
        upload(
            file: PathLike,
            fileOptions: {
                filename: string;
                token?: string | undefined;
            },
        ): Promise<UploadResponseModel>;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/attachments#json-format}
     */
    interface Attachment extends PersistableModel {
        readonly content_type?: string | undefined;
        readonly content_url?: string | undefined;
        readonly deleted?: boolean | undefined;
        readonly file_name?: string | undefined;
        readonly inline?: boolean | undefined;
        readonly mapped_content_url?: string | undefined;
        readonly size?: number | undefined;
        readonly url?: string | undefined;
    }

    interface Model extends Attachment {
        thumbnails?: ReadonlyArray<Attachment> | undefined;
    }

    interface ShowResponseModel {
        attachment: Attachment;
    }

    interface UploadResponseModel {
        upload: {
            attachment?: Attachment | undefined;
            attachments?: Attachment[] | undefined;
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
        readonly url?: string | null | undefined;
        readonly total?: number | undefined;
        readonly progress?: number | undefined;
        readonly status?: Status | undefined;
        readonly message?: string | null | undefined;
        readonly results?: ReadonlyArray<Result> | undefined;
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
                scoped_body?: unknown | undefined;
                public?: boolean | undefined;
            };
        };
    }
}

/**
 * @see {@link https://developer.zendesk.com/rest_api/docs/support/organizations|Zendesk Organizations}
 */
export namespace Organizations {
    interface Methods {
        /** Listing Organizations */
        list(cb: ZendeskCallback<unknown, unknown>): ListPayload;
        list(): Promise<ListPayload>;

        /** Showing Organizations */
        show(organizationId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        show(organizationId: ZendeskID): Promise<ResponsePayload>;

        /** Creating Organizations */
        create(organization: CreatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        create(organization: CreatePayload): Promise<ResponsePayload>;
        createMany(organizations: CreateManyPayload, cb: ZendeskCallback<unknown, unknown>): JobStatuses.ResponsePayload;
        createMany(organizations: CreateManyPayload): Promise<JobStatuses.ResponsePayload>;

        /** Updating Organizations */
        update(organizationId: ZendeskID, organization: UpdatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
        update(organizationId: ZendeskID, organization: UpdatePayload): Promise<ResponsePayload>;
        updateMany(organizations: UpdateManyPayload, cb: ZendeskCallback<unknown, unknown>): JobStatuses.ResponsePayload;
        updateMany(organizations: UpdateManyPayload): Promise<JobStatuses.ResponsePayload>;

        /** Deleting Organizations */
        delete(organizationId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): unknown;
        delete(organizationId: ZendeskID): Promise<unknown>;

        /** Searching Organizations */
        search(params: unknown, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        search(params: unknown): Promise<ListPayload>;
        autocomplete(params: unknown, cb: ZendeskCallback<unknown, unknown>): ListPayload;
        autocomplete(params: unknown): Promise<ListPayload>;
    }

    interface ResponseModel extends AuditableModel {
        readonly url?: string | undefined;
        external_id?: string | null | undefined;
        name: string;
        domain_names?: ReadonlyArray<string> | undefined;
        details?: string | null | undefined;
        notes?: string | null | undefined;
        group_id?: number | null | undefined;
        shared_tickets?: boolean | undefined;
        shared_comments?: boolean | undefined;
        tags?: ReadonlyArray<string> | undefined;
        organization_fields?: object | null | undefined;
    }

    interface CreateModel {
        name: string;
    }

    interface UpdateModel {
        notes: string;
    }

    interface UpdateManyModel extends UpdateModel {
        id: ZendeskID;
    }

    interface ResponsePayload {
        readonly organization: ResponseModel;
    }

    interface ListPayload extends PaginablePayload {
        readonly organizations: ReadonlyArray<ResponseModel>;
    }

    interface CreatePayload {
        readonly organization: CreateModel;
    }

    interface CreateManyPayload {
        readonly organizations: ReadonlyArray<CreateModel>;
    }

    interface UpdatePayload {
        readonly organization: UpdateModel;
    }

    interface UpdateManyPayload {
        readonly organizations: ReadonlyArray<UpdateManyModel>;
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
        requester?: RequesterAnonymous | undefined; // Required for anonymous requests
        subject: string;
        comment: Comments.CreateModel;
        priority?: Tickets.Priority | null | undefined; // Anonymous requests can set priority, Authenticated requests cannot
        type?: Tickets.TicketType | null | undefined; // Anonymous requests can set type, Authenticated requests cannot
        custom_fields?: Tickets.Field[] | null | undefined;
        fields?: Tickets.Field[] | null | undefined;
        due_at?: string | null | undefined; // Anonymous requests can set due date as long as type == task. Authenticated requests cannot
        ticket_form_id?: number | null | undefined;
        recipient?: string | null | undefined;
        collaborators?: ZendeskID[] | string[] | Collaborator[] | undefined;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/requests#update-request|Zendesk Requests Update}
     */
    interface UpdateModel {
        comment?: Comments.CreateModel | undefined;
        solved?: boolean | undefined;
        additional_collaborators?: ZendeskID[] | string[] | Collaborator[] | undefined;
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
        readonly group_id?: ZendeskID | null | undefined;
        readonly collaborator_ids: ZendeskID[];
        readonly email_cc_ids: ZendeskID[];
        readonly via: Tickets.Via;
        readonly is_public: boolean;
        readonly due_at: string | null;
        readonly can_be_solved_by_me?: boolean | undefined;
        readonly solved?: boolean | undefined;
        readonly ticket_form_id?: number | null | undefined;
        readonly recipient: string | null;
        readonly followup_source_id: string | null;
    }

    interface RequesterAnonymous {
        name: string;
        email?: string | undefined;
        locale_id?: ZendeskID | undefined;
    }

    interface Collaborator {
        name?: string | undefined;
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
            url?: string | undefined;
            request_id?: number | undefined;
            body?: string | undefined;
            html_body?: string | undefined;
            public?: boolean | undefined;
            author_id?: ZendeskID | undefined;
            uploads?: ReadonlyArray<string> | undefined;
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
            readonly via?: Tickets.Via | undefined;
            readonly metadata?: Tickets.Comments.Metadata | undefined;
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
        external_id?: string | null | undefined;
        type?: TicketType | null | undefined;
        subject?: string | null | undefined;
        raw_subject?: string | null | undefined;
        priority?: Priority | null | undefined;
        status?: Status | null | undefined;
        recipient?: string | null | undefined;
        requester_id?: ZendeskID | undefined;
        requester?: Requests.RequesterAnonymous | undefined;
        submitter_id?: ZendeskID | null | undefined;
        assignee_id?: ZendeskID | null | undefined;
        organization_id?: number | null | undefined;
        group_id?: number | null | undefined;
        collaborator_ids?: ReadonlyArray<number> | null | undefined;
        collaborators?: ReadonlyArray<any> | null | undefined;
        follower_ids?: ReadonlyArray<number> | null | undefined;
        email_cc_ids?: ReadonlyArray<number> | null | undefined;
        forum_topic_id?: number | null | undefined;
        problem_id?: number | null | undefined;
        due_at?: string | null | undefined;
        tags?: ReadonlyArray<string> | null | undefined;
        custom_fields?: Field[] | null | undefined;
        fields?: Field[] | null | undefined;
        via_followup_source_id?: number | null | undefined;
        macro_ids?: ReadonlyArray<number> | null | undefined;
        ticket_form_id?: number | null | undefined;
        brand_id?: number | null | undefined;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/tickets#update-ticket|Zendesk Tickets Update}
     */
    interface UpdateModel {
        subject?: string | null | undefined;
        comment?: Requests.Comments.CreateModel | undefined;
        requester_id?: ZendeskID | undefined;
        assignee_id?: ZendeskID | null | undefined;
        assignee_email?: string | null | undefined;
        group_id?: number | null | undefined;
        organization_id?: number | null | undefined;
        collaborator_ids?: ReadonlyArray<number> | null | undefined;
        additional_collaborators?: ReadonlyArray<any> | null | undefined;
        followers?: ReadonlyArray<Follower> | null | undefined;
        email_ccs?: ReadonlyArray<EmailCC> | null | undefined;
        type?: TicketType | null | undefined;
        priority?: Priority | null | undefined;
        status?: Status | null | undefined;
        tags?: ReadonlyArray<string> | null | undefined;
        external_id?: string | null | undefined;
        problem_id?: number | null | undefined;
        due_at?: string | null | undefined;
        custom_fields?: Field[] | null | undefined;
        updated_stamp?: string | null | undefined;
        safe_update?: boolean | undefined;
        sharing_agreement_ids?: ReadonlyArray<number> | null | undefined;
        macro_ids?: ReadonlyArray<number> | null | undefined;
        attribute_value_ids?: ReadonlyArray<number> | null | undefined;
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
        readonly ticket_form_id?: number | null | undefined; // Enterprise version only
        readonly brand_id?: number | null | undefined; // Enterprise version only
        readonly allow_channelback: boolean;
        readonly allow_attachments: boolean;
        readonly is_public: boolean;
        readonly comment_count?: number | undefined;
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
        user_id?: ZendeskID | undefined;
        user_email?: string | undefined;
        action: string;
    }

    interface Field {
        id: number;
        value: any;
    }

    interface Follower {
        user_id?: ZendeskID | undefined;
        user_email?: string | undefined;
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
        readonly target_comment?: string | null | undefined;
        readonly source_comment?: string | null | undefined;
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
            readonly via?: Via | undefined;
            readonly metadata?: Metadata | undefined;
        }

        interface Metadata {
            flags?: ReadonlyArray<number> | undefined;
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
            readonly ticket_id?: ZendeskID | undefined;
            readonly url?: string | undefined;
            readonly group_stations?: number | undefined;
            readonly assignee_stations?: number | undefined;
            readonly reopens?: number | undefined;
            readonly replies?: number | undefined;
            readonly assignee_updated_at?: string | null | undefined;
            readonly requester_updated_at?: string | null | undefined;
            readonly initially_assigned_at?: string | null | undefined;
            readonly assigned_at?: string | null | undefined;
            readonly solved_at?: string | null | undefined;
            readonly latest_comment_added_at?: string | null | undefined;
            readonly first_resolution_time_in_minutes?: MinutesObject | undefined;
            readonly reply_time_in_minutes?: MinutesObject | undefined;
            readonly full_resolution_time_in_minutes?: MinutesObject | undefined;
            readonly agent_wait_time_in_minutes?: MinutesObject | undefined;
            readonly requester_wait_time_in_minutes?: MinutesObject | undefined;
        }

        interface ResponsePayload {
            readonly ticket_metric: ResponseModel;
        }

        interface ListPayload {
            readonly ticket_metrics: ReadonlyArray<ResponseModel>;
        }
    }

    namespace Fields {
        interface Methods {
            list(cb: ZendeskCallback<unknown, unknown>): unknown;
            list(): Promise<unknown>;
            show(fieldId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): unknown;
            show(fieldId: ZendeskID): Promise<unknown>;
            create(field: CreateTicketField, cb: ZendeskCallback<unknown, unknown>): unknown;
            create(field: CreateTicketField): Promise<unknown>;
            create(field: CreateTicketField, cb: ZendeskCallback<unknown, unknown>): unknown;
            update(fieldId: ZendeskID, field: unknown, cb: ZendeskCallback<unknown, unknown>): unknown;
            update(fieldId: ZendeskID, field: unknown): Promise<unknown>;
            delete(fieldId: ZendeskID, cb: ZendeskCallback<unknown, unknown>): unknown;
            delete(fieldId: ZendeskID): Promise<unknown>;
        }

        /**
         * Represents 'ticket_fields'
         */
        interface TicketField {
            readonly type: string | undefined;
            readonly title: string | undefined;
            id?: number | undefined;
            active?: true;
            agent_description?: string | undefined;
            collapsed_for_agents?: boolean | undefined;
            created_at?: Date | undefined;
            description?: string | undefined;
            editable_in_portal?: boolean | undefined;
            position?: number | undefined;
            raw_description?: string | undefined;
            raw_title?: string | undefined;
            raw_title_in_portal?: string | undefined;
            regexp_for_validation?: string | undefined;
            removable?: boolean | undefined;
            required?: boolean | undefined;
            required_in_portal?: boolean | undefined;
            tag?: string | undefined;
            title_in_portal?: string | undefined;
            updated_at?: Date | undefined;
            visible_in_portal?: boolean | undefined;
            url?: string | undefined;
        }
        interface CreateTicketField extends TicketField {
            key: string;
        }
        interface CustomFieldOptions {
            [key: string]: unknown;
        }
    }
}

/**
 * @see {@link https://developer.zendesk.com/rest_api/docs/support/groups|Zendesk Groups}
 */
export namespace Groups {
    interface Methods {
        /** Listing Groups */
        list(): Promise<ListPayload>;
        list(cb: ZendeskCallback<unknown, unknown>): ListPayload;

        /** Viewing Groups */
        assignable(): Promise<ListPayload>;
        assignable(cb: ZendeskCallback<unknown, unknown>): ListPayload;
        show(groupId: GroupID): Promise<ListPayload>;
        show(groupId: GroupID, cb: ZendeskCallback<unknown, unknown>): ListPayload;

        /** Creating Groups */
        create(group: CreatePayload): Promise<ResponsePayload>;
        create(group: CreatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;

        /** Updating Groups */
        update(groupID: GroupID, group: UpdatePayload): Promise<ResponsePayload>;
        update(groupID: GroupID, group: UpdatePayload, cb: ZendeskCallback<unknown, unknown>): ResponsePayload;

        /** Deleting Groups */
        delete(groupID: GroupID): Promise<unknown>;
        delete(groupID: GroupID, cb: ZendeskCallback<unknown, unknown>): unknown;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/groups#create-group|Zendesk Groups Create}
     */
    interface CreateModel {
        name: string | null | undefined;
        default?: boolean;
        description?: string | null | undefined;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/groups#update-group|Zendesk Groups Update}
     */
    interface UpdateModel {
        name?: string;
        description?: string | null | undefined;
    }

    /**
     * @see {@link https://developer.zendesk.com/rest_api/docs/support/groups/#json-format|Zendesk Groups JSON Format}
     */
    interface ResponseModel extends AuditableModel {
        readonly default: boolean;
        readonly deleted: boolean;
        readonly description: string;
        readonly name: string | null;
        readonly url: string | null;
    }

    interface CreatePayload {
        readonly group: CreateModel;
    }

    interface UpdatePayload {
        readonly group: UpdateModel;
    }

    interface ResponsePayload {
        readonly group: ResponseModel;
    }

    interface ListPayload extends PaginablePayload {
        readonly groups: ReadonlyArray<ResponseModel>;
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
        email?: string | null | undefined;
        alias?: string | null | undefined;
        custom_role_id?: number | null | undefined;
        details?: string | null | undefined;
        external_id?: string | null | undefined;
        locale_id?: number | null | undefined;
        moderator?: boolean | null | undefined;
        notes?: string | null | undefined;
        only_private_comments?: boolean | null | undefined;
        organization_id?: number | null | undefined;
        default_group_id?: number | null | undefined;
        phone?: string | null | undefined;
        photo?: Attachments.Model | null | undefined;
        restricted_agent?: boolean | null | undefined;
        role?: Role | null | undefined;
        signature?: string | null | undefined;
        suspended?: boolean | null | undefined;
        tags?: ReadonlyArray<unknown> | null | undefined;
        ticket_restriction?: TicketRestriction | null | undefined;
        time_zone?: string | null | undefined;
        user_fields?: object | null | undefined;
        verified?: boolean | null | undefined;
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
        name?: string | undefined;
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
        readonly tags?: ReadonlyArray<unknown> | null | undefined;
        readonly ticket_restriction: TicketRestriction | null;
        readonly time_zone: string | null;
        readonly two_factor_auth_enabled: boolean;
        readonly url: string;
        readonly user_fields?: object | null | undefined;
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
            verified?: boolean | undefined;
            primary?: boolean | undefined;
        }

        interface UpdateModel {
            value?: string | undefined;
            verified?: boolean | undefined;
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
            readonly id?: number | undefined;
            readonly url?: string | undefined;
            readonly type?: UserFieldType | undefined;
            key?: string | undefined;
            title: string;
            raw_title?: string | undefined;
            description?: string | undefined;
            raw_description?: string | undefined;
            position?: number | undefined;
            active?: boolean | undefined;
            readonly system?: boolean | undefined;
            regexp_for_validation?: string | undefined;
            created_at?: Date | undefined;
            updated_at?: Date | undefined;
            tag?: string | undefined;
            custom_field_options?: CustomFieldOptions[] | undefined;
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
    next_page: string | null;
    previous_page: string | null;
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

export type GroupID = number;
