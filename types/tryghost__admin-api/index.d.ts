/// <reference types="node" />
type ArrayOrValue<T> = T | T[];
type Nullable<T> = T | null;

// ==============================================
// Interfaces to extend the GhostAdminAPI types
// - Pagination
// - Identification
// - Metadata
// - Excerpt
// - CodeInjection
// - SocialMedia (Facebook, Twitter)
// - Settings
// - Email
// ==============================================

interface Pagination {
    page: number;
    limit: number;
    pages: number;
    total: number;
    next: Nullable<number>;
    prev: Nullable<number>;
}

interface Identification {
    slug: string;
    id: string;
}

interface Dates {
    created_at?: string | undefined;
    updated_at?: Nullable<string> | undefined;
}

interface Metadata {
    meta_title?: Nullable<string> | undefined;
    meta_description?: Nullable<string> | undefined;
}

interface Excerpt {
    excerpt?: string | undefined;
    custom_excerpt?: string | undefined;
}

interface CodeInjection {
    codeinjection_head?: Nullable<string> | undefined;
    codeinjection_foot?: Nullable<string> | undefined;
}

/** Metadata for Facebook */
interface Facebook {
    og_image?: Nullable<string> | undefined;
    og_title?: Nullable<string> | undefined;
    og_description?: Nullable<string> | undefined;
}

/** Metadata for Twitter */
interface Twitter {
    twitter_image?: Nullable<string> | undefined;
    twitter_title?: Nullable<string> | undefined;
    twitter_description?: Nullable<string> | undefined;
}

interface SocialMedia extends Facebook, Twitter {}

interface Email extends Dates {
    id: string | undefined;
    uuid?: string | undefined;
    status?: string | undefined;
    recipient_filter?: string | undefined;
    error?: string | null | undefined;
    error_data?: string | undefined;
    email_count?: number | undefined;
    delivered_count?: number | undefined;
    opened_count?: number | undefined;
    failed_count?: number | undefined;
    subject?: string | undefined;
    from?: string | undefined;
    reply_to?: string | undefined;
    html?: string | undefined;
    plaintext?: string | undefined;
    track_opens: boolean;
    submitted_at?: Nullable<string> | undefined;
}

// =================
// Ghost Data Types:
// - Role
// - Author
// - Tag
// - Post
// - Page
// =================

// =================
// Author & Role
// =================
interface Role extends Dates {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
}

interface AuthorPostRequest {
    id?: string | undefined;
    name?: string | undefined;
}

interface AuthorRequest extends Partial<Identification>, Metadata, Dates {
    name?: string | undefined;
    profile_image?: Nullable<string> | undefined;
    cover_image?: Nullable<string> | undefined;
    bio?: Nullable<string> | undefined;
    website?: Nullable<string> | undefined;
    location?: Nullable<string> | undefined;
    facebook?: Nullable<string> | undefined;
    twitter?: Nullable<string> | undefined;
    url?: Nullable<string> | undefined;
    email?: Nullable<string> | undefined;
    last_seen?: Nullable<string> | undefined;
    tour?: Nullable<string> | undefined;
    status?: string | undefined;
    accessibility?: Nullable<string> | undefined;
    roles?: Nullable<Role[]> | undefined;
}

interface AuthorResponse extends Identification, Metadata, Dates {
    name?: string | undefined;
    profile_image?: Nullable<string> | undefined;
    cover_image?: Nullable<string> | undefined;
    bio?: Nullable<string> | undefined;
    website?: Nullable<string> | undefined;
    location?: Nullable<string> | undefined;
    facebook?: Nullable<string> | undefined;
    twitter?: Nullable<string> | undefined;
    url?: Nullable<string> | undefined;
    email?: Nullable<string> | undefined;
    last_seen?: Nullable<string> | undefined;
    tour?: Nullable<string> | undefined;
    status?: string | undefined;
    accessibility?: Nullable<string> | undefined;
    roles?: Nullable<Role[]> | undefined;
}

// =================
// Tag
// =================

type TagVisibility = "public" | "internal";

interface TagPostRequest {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
}

interface TagRequest extends Partial<Identification>, Metadata, SocialMedia, CodeInjection {
    name?: string | undefined;
    description?: Nullable<string> | undefined;
    feature_image?: Nullable<string> | undefined;
    canonical_url?: Nullable<string> | undefined;
    accent_color?: Nullable<string> | undefined;
    visibility?: TagVisibility | undefined;
    url?: string | undefined;
    parent?: string | undefined;
}

interface TagResponse extends Identification, Metadata, SocialMedia, CodeInjection, Dates {
    name?: string | undefined;
    description?: Nullable<string> | undefined;
    feature_image?: Nullable<string> | undefined;
    canonical_url?: Nullable<string> | undefined;
    accent_color?: Nullable<string> | undefined;
    visibility?: TagVisibility | undefined;
    url?: string | undefined;
    parent?: string | undefined;
}

// =================
// Webhook
// =================

type WebhookEvents =
    | "site.changed"
    | "post.added"
    | "post.deleted"
    | "post.edited"
    | "post.published"
    | "post.published.edited"
    | "post.unpublished"
    | "post.scheduled"
    | "post.unscheduled"
    | "post.rescheduled"
    | "page.added"
    | "page.deleted"
    | "page.edited"
    | "page.published"
    | "page.published.edited"
    | "page.unpublished"
    | "page.scheduled"
    | "page.unscheduled"
    | "page.rescheduled"
    | "tag.added"
    | "tag.edited"
    | "tag.deleted"
    | "post.tag.attached"
    | "post.tag.detached"
    | "page.tag.attached"
    | "page.tag.detached"
    | "member.added"
    | "member.edited"
    | "member.deleted";

interface WebhookRequest extends Dates {
    event: WebhookEvents;
    target_url: string;
    name?: string | undefined;
    api_version?: string | undefined;
    secret?: string | undefined;
    integration_id?: string | undefined;
}

type WebhookEditRequest = Partial<WebhookRequest>;

interface WebhookResponse extends WebhookRequest {
    id?: string | undefined;
    status?: string | undefined;
    last_triggered_at?: Nullable<string> | undefined;
    last_triggered_status?: Nullable<string> | undefined;
    last_triggered_error?: Nullable<string> | undefined;
}

// =================
// Newsletter
// =================

interface NewsletterMember {
    id?: string | undefined;
}

interface NewsletterRequest extends Partial<Identification> {
    name?: string | undefined;
    description?: Nullable<string> | undefined;
    sender_name?: string | undefined;
    sender_email?: Nullable<string> | undefined;
    sender_reply_to?: string | undefined;
    visibility?: string | undefined;
    subscribe_on_signup?: boolean | undefined;
    sort_order?: number | undefined;
    header_image?: Nullable<string> | undefined;
    show_header_icon?: boolean | undefined;
    show_header_title?: boolean | undefined;
    title_font_category?: string | undefined;
    title_alignment?: string | undefined;
    show_feature_image?: boolean | undefined;
    body_font_category?: string | undefined;
    footer_content?: Nullable<string> | undefined;
    show_badge?: boolean | undefined;
    show_header_name?: boolean | undefined;
}
interface NewsletterResponse extends Identification, Dates {
    uuid?: string | undefined;
    name?: string | undefined;
    description?: Nullable<string> | undefined;
    sender_name?: string | undefined;
    sender_email?: Nullable<string> | undefined;
    sender_reply_to?: string | undefined;
    status?: string | undefined;
    visibility?: string | undefined;
    subscribe_on_signup?: boolean | undefined;
    sort_order?: number | undefined;
    header_image?: Nullable<string> | undefined;
    show_header_icon?: boolean | undefined;
    show_header_title?: boolean | undefined;
    title_font_category?: string | undefined;
    title_alignment?: string | undefined;
    show_feature_image?: boolean | undefined;
    body_font_category?: string | undefined;
    footer_content?: Nullable<string> | undefined;
    show_badge?: boolean | undefined;
    show_header_name?: boolean | undefined;
}

// ======================
// Member & Subscription
// ======================

interface Subscription {
    id?: string | undefined;
    customer?: {
        id?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    };
    status?: string | undefined;
    start_date?: string | undefined;
    default_payment_card_last4?: string | undefined;
    cancel_at_period_end?: boolean | undefined;
    cancellation_reason?: string | null | undefined;
    current_period_end?: string | undefined;
    price?: {
        id?: string | undefined;
        price_id?: string | undefined;
        nickname?: string | undefined;
        amount?: number | undefined;
        interval?: string | undefined;
        type?: string | undefined;
        currency?: string | undefined;
    };
    tier?: any;
    offer?: any;
}

interface MemberLabel extends Dates {
    id?: string | undefined;
    name?: string | undefined;
    slug?: string | undefined;
}

interface MemberRequest {
    email: string | undefined;
    name?: string | undefined;
    note?: Nullable<string> | undefined;
    labels?: MemberLabel[] | undefined;
    newsletters?: NewsletterMember[] | undefined;
}

interface MemberResponse extends Dates {
    id?: string | undefined;
    uuid?: string | undefined;
    email?: string | undefined;
    name?: string | undefined;
    note?: Nullable<string> | undefined;
    geolocation?: Nullable<string> | undefined;
    labels?: MemberLabel[] | undefined;
    subscriptions?: Subscription[] | undefined;
    avatar_image?: Nullable<string> | undefined;
    email_count?: number | undefined;
    email_opened_count?: number | undefined;
    email_open_rate?: Nullable<number> | undefined;
    last_seen_at?: Nullable<string> | undefined;
    status?: string | undefined;
    newsletters?: NewsletterMember[] | undefined;
}

// =================
// User
// =================

interface UserRequest {
    name?: string | undefined;
    email?: string | undefined;
    profile_image?: Nullable<string> | undefined;
    cover_image?: Nullable<string> | undefined;
    bio?: Nullable<string> | undefined;
    website?: Nullable<string> | undefined;
    location?: Nullable<string> | undefined;
    facebook?: Nullable<string> | undefined;
    twitter?: Nullable<string> | undefined;
    accessibility?: Nullable<string> | undefined;
    tour?: Nullable<string> | undefined;
    comment_notifications?: boolean | undefined;
    free_member_signup_notification?: boolean | undefined;
    paid_subscription_started_notification?: boolean | undefined;
    paid_subscription_canceled_notification?: boolean | undefined;
    mention_notifications?: boolean | undefined;
    milestone_notifications?: boolean | undefined;
    roles?: Nullable<Role[]> | undefined;
}

interface UserResponse extends Metadata, Dates {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    profile_image?: Nullable<string> | undefined;
    cover_image?: Nullable<string> | undefined;
    bio?: Nullable<string> | undefined;
    website?: Nullable<string> | undefined;
    location?: Nullable<string> | undefined;
    facebook?: Nullable<string> | undefined;
    twitter?: Nullable<string> | undefined;
    accessibility?: Nullable<string> | undefined;
    status?: string | undefined;
    tour?: Nullable<string> | undefined;
    comment_notifications?: boolean | undefined;
    free_member_signup_notification?: boolean | undefined;
    paid_subscription_started_notification?: boolean | undefined;
    paid_subscription_canceled_notification?: boolean | undefined;
    mention_notifications?: boolean | undefined;
    milestone_notifications?: boolean | undefined;
    permissions?: any[] | undefined;
    roles?: Nullable<Role[]> | undefined;
    count?: {
        posts?: number | undefined;
    };
    url?: string | undefined;
}

// =================
// Post & Page
// =================

type PostStatus = "draft" | "published" | "scheduled" | "archived" | "deleted";
type PostVisibility = "public" | "members" | "paid";

interface PostOrPageRequest extends Partial<Identification>, Excerpt, CodeInjection, Metadata, SocialMedia {
    /* Title is required */
    title: string;

    // Identification
    featured?: boolean | undefined;

    // Post or Page
    html?: Nullable<string> | undefined;
    lexical?: object | string | undefined;

    // Image
    feature_image?: Nullable<string> | undefined;
    feature_image_alt?: Nullable<string> | undefined;
    feature_image_caption?: Nullable<string> | undefined;

    // Custom Template for posts and pages
    custom_template?: Nullable<string> | undefined;

    // Tags
    tags?: (TagPostRequest | string)[] | undefined;

    // Authors
    authors?: (AuthorPostRequest | string)[] | undefined;

    // Email
    email?: Nullable<Email> | undefined;
    email_only?: Nullable<boolean> | undefined;

    // URLs
    url?: string | undefined;
    canonical_url?: Nullable<string> | undefined;
}

interface PostOrPageResponse extends Identification, Excerpt, CodeInjection, Metadata, SocialMedia, Dates {
    // Identification
    uuid?: string | undefined;
    comment_id?: string | undefined;
    featured?: boolean | undefined;

    // Post or Page
    title?: string | undefined;
    html?: Nullable<string> | undefined;
    lexical?: object | string | undefined;

    // Access
    status?: PostStatus | undefined;
    visibility?: PostVisibility | undefined;

    // Image
    feature_image?: Nullable<string> | undefined;
    feature_image_alt?: Nullable<string> | undefined;
    feature_image_caption?: Nullable<string> | undefined;

    // Dates
    published_at?: Nullable<string> | undefined;

    // Custom Template for posts and pages
    custom_template?: Nullable<string> | undefined;

    // Tags - Only shown when using Include param
    tags?: TagResponse[] | undefined;
    primary_tag?: Nullable<TagResponse> | undefined;

    // Authors - Only shown when using Include Param
    authors?: AuthorResponse[] | undefined;
    primary_author?: Nullable<AuthorResponse> | undefined;

    // Newsletter - Only shown when using Include param
    newsletter?: Nullable<NewsletterResponse> | undefined;

    // Email
    email?: Nullable<Email> | undefined;
    email_only?: Nullable<boolean> | undefined;

    // URLs
    url?: string | undefined;
    canonical_url?: Nullable<string> | undefined;
}

// =================
// Config & Site
// =================

interface ConfigResponse {
    title?: string | undefined;
    description?: string | undefined;
    logo?: string | undefined;
    icon?: string | undefined;
}

interface SiteResponse {
    title?: string | undefined;
    description?: string | undefined;
    logo?: string | undefined;
    url?: string | undefined;
    version?: string | undefined;
}

// =================
// Query Params
// =================

type IncludeParam = string;

type FormatParam = "html" | "plaintext";

type FilterParam = string;

type LimitParam = number | string;

type PageParam = number;

type OrderParam = string;

interface Params {
    include?: ArrayOrValue<IncludeParam> | undefined;
    formats?: ArrayOrValue<FormatParam> | undefined;
    filter?: ArrayOrValue<FilterParam> | undefined;
    limit?: ArrayOrValue<LimitParam> | undefined;
    page?: ArrayOrValue<PageParam> | undefined;
    order?: ArrayOrValue<OrderParam> | undefined;
}

// =================
// Functions
// =================

interface BrowseFunction<T> {
    (options?: Params): Promise<T>;
}

interface ReadFunction<T> {
    (
        data:
            | { id: string; slug?: never; email?: any }
            | { id?: any; slug: string; email?: any }
            | { id?: any; slug?: any; email: string },
        options?: Params,
    ): Promise<T>;
}

interface SiteReadFunction<T> {
    (): Promise<T>;
}

interface AddFunction<T, U = undefined> {
    (data: { [key: string]: string } & (U extends undefined ? { [key: string]: string } : U)): Promise<T>;
}
interface EditFunction<T, U = undefined> {
    (data: { id: string } & (U extends undefined ? { [key: string]: string } : U)): Promise<T>;
}
interface DeleteFunction {
    (data: { id: string } | { email: string }): Promise<void>;
}

interface UploadFunction<T = {}> {
    (data: FormData | ({ file: any; [key: string]: string } & T)): Promise<any>;
}

interface ActivateFunction {
    (name: string): Promise<any>;
}

interface BrowseResults<T> extends Array<T> {
    meta: { pagination: Pagination };
}

// =================
// Interfaces
// =================

type PostsOrPages = BrowseResults<PostOrPageResponse>;

type Members = BrowseResults<MemberResponse>;

type Users = BrowseResults<UserResponse>;

type Tags = BrowseResults<TagResponse>;

type Newsletters = BrowseResults<NewsletterResponse>;

// =================
// SDK options
// =================

interface MakeRequestOptions {
    url: string;
    method: string;
    data?: object;
    params?: object;
    headers?: object;
}

interface GenerateTokenOptions {
    /**
     * API key to sign JWT with
     */
    key: string;
    /**
     * Token audience
     */
    audience: string;
}

interface GhostAdminAPIOptions {
    url: string;
    /**
     * Version of GhostAdminAPI
     * - A version string in in 'v{major}.{minor}' format.
     * - A boolean value identifying presence of Accept-Version header
     * Should be in 'v{major}.{minor}' format. Default is 'v5.0'
     *
     *  * Deprecated options: 'v1', 'v2', 'v3', 'v4', 'v5', 'canary'
     */
    version: string;
    /**
     * Flag controlling if the 'User-Agent' header should be sent with a request
     * @default true
     */
    userAgent?: string | boolean;
    key: string;
    /** @deprecated since version v2 */
    host?: string | undefined;
    /** @default "ghost" */
    ghostPath?: string | undefined;
    makeRequest?: (options: MakeRequestOptions) => Promise<any>;
    generateToken?: (options: GenerateTokenOptions) => string | undefined;
}

// =================
// SDK
// =================

interface GhostAPI {
    posts: {
        /* Must include either data.id or data.slug or data.email */
        read: ReadFunction<PostOrPageResponse>;
        browse: BrowseFunction<PostsOrPages>;
        add: AddFunction<PostOrPageResponse, PostOrPageRequest>;
        edit: EditFunction<PostOrPageResponse, PostOrPageRequest>;
        delete: DeleteFunction;
    };
    pages: {
        /* Must include either data.id or data.slug or data.email */
        read: ReadFunction<PostOrPageResponse>;
        browse: BrowseFunction<PostsOrPages>;
        add: AddFunction<PostOrPageResponse, PostOrPageRequest>;
        edit: EditFunction<PostOrPageResponse, PostOrPageRequest>;
        delete: DeleteFunction;
    };
    tags: {
        /* Must include either data.id or data.slug or data.email */
        read: ReadFunction<TagResponse>;
        browse: BrowseFunction<Tags>;
        edit: EditFunction<TagResponse, TagRequest>;
        add: AddFunction<TagResponse, TagRequest>;
        delete: DeleteFunction;
    };
    webhooks: {
        edit: EditFunction<WebhookResponse, WebhookEditRequest>;
        add: AddFunction<WebhookResponse, WebhookRequest>;
        delete: DeleteFunction;
    };
    members: {
        /* Must include either data.id or data.slug or data.email */
        read: ReadFunction<MemberResponse>;
        browse: BrowseFunction<Members>;
        add: AddFunction<MemberResponse, MemberRequest>;
        edit: EditFunction<MemberResponse, MemberRequest>;
        delete: DeleteFunction;
    };
    users: {
        /* Must include either data.id or data.slug or data.email */
        read: ReadFunction<UserResponse>;
        browse: BrowseFunction<Users>;
        edit: EditFunction<UserResponse, UserRequest>;
        delete: DeleteFunction;
        // Adding a user is not available in Ghost Admin API Client
        // See more: https://ghost.org/docs/admin-api/#endpoints
        // add: AddFunction<UserResponse, UserRequest>
    };
    newsletters: {
        /* Must include either data.id or data.slug or data.email */
        read: ReadFunction<NewsletterResponse>;
        browse: BrowseFunction<Newsletters>;
        edit: EditFunction<NewsletterResponse, NewsletterRequest>;
        add: AddFunction<NewsletterResponse, NewsletterRequest>;
        delete: DeleteFunction;
    };
    images: {
        upload: UploadFunction;
    };
    subscribers: {};
    media: {
        upload: UploadFunction<{ purpose?: string; thumbnail?: string }>;
    };
    files: {
        upload: UploadFunction<{ ref?: string }>;
    };
    config: {
        /* Not documented in Ghost Admin API, but present on the admin-api library */
        read: ReadFunction<any>;
    };
    site: {
        read: SiteReadFunction<SiteResponse>;
    };
    themes: {
        upload: UploadFunction;
        activate: ActivateFunction;
    };
}

declare var GhostAdminAPI: {
    (options: GhostAdminAPIOptions): GhostAPI;
    new(options: GhostAdminAPIOptions): GhostAPI;
};

export = GhostAdminAPI;
