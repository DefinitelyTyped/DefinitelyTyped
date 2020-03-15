// Type definitions for @tryghost/content-api 1.3
// Project: https://github.com/TryGhost/Ghost-SDK/tree/master/packages/content-api
// Definitions by: Kevin Nguyen <https://github.com/knguyen0125>
//                 Anton Van Eechaute <https://github.com/antonve>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type ArrayOrValue<T> = T | T[];
export type Nullable<T> = T | null;

export interface Pagination {
    page: number;
    limit: number;
    pages: number;
    total: number;
    next: Nullable<number>;
    prev: Nullable<number>;
}

export interface Identification {
    slug: string;
    id: string;
}

export interface Metadata {
    meta_title?: Nullable<string>;
    meta_description?: Nullable<string>;
}

export interface Excerpt {
    excerpt?: string;
    custom_excerpt?: string;
}

export interface CodeInjection {
    codeinjection_head?: Nullable<string>;
    codeinjection_foot?: Nullable<string>;
}

/** Metadata for Facebook */
export interface Facebook {
    og_image?: Nullable<string>;
    og_title?: Nullable<string>;
    og_description?: Nullable<string>;
}

export interface Twitter {
    twitter_image?: Nullable<string>;
    twitter_title?: Nullable<string>;
    twitter_description?: Nullable<string>;
}

export interface SocialMedia extends Facebook, Twitter {}

export interface Setting extends Metadata, CodeInjection, SocialMedia {
    title?: string;
    description?: string;
    logo?: string;
    icon?: string;
    cover_image?: string;
    facebook?: string;
    twitter?: string;
    lang?: string;
    timezone?: string;
    ghost_head?: Nullable<string>;
    ghost_foot?: Nullable<string>;
    navigation?: Array<{
        label: string;
        url: string;
    }>;
    url?: string;
}

export interface Author extends Identification, Metadata {
    name?: string;
    profile_image?: Nullable<string>;
    cover_image?: Nullable<string>;
    bio?: Nullable<string>;
    website?: Nullable<string>;
    location?: Nullable<string>;
    facebook?: Nullable<string>;
    twitter?: Nullable<string>;
    url?: Nullable<string>;
    count?: {
        posts: number;
    };
}

export type TagVisibility = 'public' | 'draft' | 'scheduled';

export interface Tag extends Identification, Metadata {
    name?: string;
    description?: Nullable<string>;
    feature_image?: Nullable<string>;
    visibility?: TagVisibility;
    url?: string;
    count?: {
        posts: number;
    };
}

export interface PostOrPage extends Identification, Excerpt, CodeInjection, Metadata, SocialMedia {
    // Identification
    uuid?: string;
    comment_id?: string;

    // Post or Page
    title?: string;
    html?: string | null;
    plaintext?: Nullable<string>;

    // Image
    feature_image?: string | null;
    featured?: boolean;

    // Dates
    created_at?: string;
    updated_at?: Nullable<string>;
    published_at?: Nullable<string>;

    // Custom Template for posts and pages
    custom_template?: string | null;

    // Post or Page
    page?: boolean;

    // Tags - Only shown when using Include param
    tags?: Tag[];
    primary_tag?: Nullable<Tag>;

    // Authors - Only shown when using Include Param
    authors?: Author[];
    primary_author?: Nullable<Author>;

    url?: string;
    canonical_url?: Nullable<string>;
}

export type GhostData = PostOrPage | Author | Tag | Setting;

export type IncludeParam = 'authors' | 'tags' | 'count.posts';

export type FieldParam = string;

export type FormatParam = 'html' | 'plaintext';

export type FilterParam = string;

export type LimitParam = number | string;

export type PageParam = number;

export type OrderParam = string;

export interface Params {
    include?: ArrayOrValue<IncludeParam>;
    fields?: ArrayOrValue<FieldParam>;
    formats?: ArrayOrValue<FormatParam>;
    filter?: ArrayOrValue<FilterParam>;
    limit?: ArrayOrValue<LimitParam>;
    page?: ArrayOrValue<PageParam>;
    order?: ArrayOrValue<OrderParam>;
}

export interface BrowseFunction<T> {
    (options?: Params, memberToken?: Nullable<string>): Promise<T>;
}

export interface ReadFunction<T> {
    (data: GhostData, options?: Params, memberToken?: Nullable<string>): Promise<T>;
}

export interface PostObject {
    posts: PostOrPage[];
    meta: { pagination: Pagination };
}

export interface AuthorsObject {
    authors: Author[];
    meta: { pagination: Pagination };
}

export interface TagsObject {
    tags: Tag[];
    meta: { pagination: Pagination };
}

export interface PagesObject {
    pages: PostOrPage[];
    meta: { pagination: Pagination };
}

export interface SettingsObject {
    settings: Setting;
    meta: {};
}

export interface GhostError {
    errors: Array<{
        message: string;
        errorType: string;
    }>;
}

export interface GhostContentAPIOptions {
    url: string;
    /**
     * Version of GhostContentAPI
     *
     * Supported Versions: 'v2', 'v3', 'canary'
     */
    version: 'v2' | 'v3' | 'canary';
    key: string;
    /** @deprecated since version v2 */
    host?: string;
    /** @default "ghost" */
    ghostPath?: string;
}

export interface GhostAPI {
    posts: {
        browse: BrowseFunction<PostObject>;
        read: ReadFunction<PostOrPage>;
    };
    authors: {
        browse: BrowseFunction<AuthorsObject>;
        read: ReadFunction<Author>;
    };
    tags: {
        browse: BrowseFunction<TagsObject>;
        read: ReadFunction<Tag>;
    };
    pages: {
        browse: BrowseFunction<PagesObject>;
        read: ReadFunction<PostOrPage>;
    };
    settings: {
        browse: BrowseFunction<SettingsObject>;
    };
}

export default function GhostContentAPI(options: GhostContentAPIOptions): GhostAPI;
