export namespace Schema {
    type Context = 'edit' | 'embed' | 'view';
    type Contextual<T extends Context, TAdditional = {}, TEditAdditional = {}> = T extends 'edit'
        ? { raw: string; rendered: string } & TAdditional & TEditAdditional
        : { rendered: string } & TAdditional;
    type Decontextualize<T> = {
        [k in keyof T]: T[k] extends Contextual<any> ? string : T[k];
    };

    type OpenOrClosed = 'open' | 'closed';
    type PostFormat =
        | 'aside'
        | 'audio'
        | 'chat'
        | 'gallery'
        | 'image'
        | 'link'
        | 'quote'
        | 'standard'
        | 'status'
        | 'video';
    type PostStatus = 'draft' | 'future' | 'pending' | 'private' | 'publish';
    type TaxonomyKind = 'category' | 'link_category' | 'nav_menu' | 'post_format' | 'post_tag';

    interface BaseResponse {
        _embedded?: Record<string, any[]>;
        _links: Record<
            string,
            Array<{
                href: string;
                [k: string]: any;
            }>
        >;
    }

    interface BasePost<T extends Context> extends BaseResponse {
        author: number;
        categories: number[];
        comment_status: OpenOrClosed;
        content: Contextual<T, { protected: boolean }, { block_version: number }>;
        date: string;
        date_gmt: string;
        excerpt: Contextual<T, { protected: boolean }>;
        featured_media: number;
        format: PostFormat;
        generated_slug: string;
        guid: Contextual<T>;
        id: number;
        link: string;
        meta: any[];
        modified: string;
        modified_gmt: string;
        password: string;
        permalink_template: string;
        ping_status: OpenOrClosed;
        slug: string;
        status: PostStatus;
        sticky: boolean;
        tags: string[];
        template: string;
        title: Contextual<T>;
        type: string;
        [k: string]: unknown;
    }

    interface BasePostRevision<T extends Context> extends BaseResponse {
        author: number;
        content: Contextual<T>;
        date: string;
        date_gmt: string;
        excerpt: Contextual<T>;
        guid: Contextual<T>;
        id: number;
        modified: string;
        modified_gmt: string;
        parent: number;
        slug: string;
        title: Contextual<T>;
    }

    interface BaseCategory extends BaseResponse {
        count: number;
        description: string;
        id: number;
        link: string;
        meta: any[];
        name: string;
        parent: number;
        slug: string;
        taxonomy: TaxonomyKind;
    }

    interface BaseTag extends BaseResponse {
        count: number;
        description: string;
        id: number;
        link: string;
        meta: any[];
        name: string;
        slug: string;
        taxonomy: TaxonomyKind;
    }

    interface BasePage<T extends Context> extends Omit<BasePost<T>, 'categories' | 'format' | 'sticky' | 'tags'> {
        menu_order: number;
        parent: number;
    }

    interface BaseComment<T extends Context> extends BaseResponse {
        author: number;
        author_avatar_urls: Record<number, string>;
        author_email: string;
        author_ip: string;
        author_name: string;
        author_url: string;
        author_user_agent: string;
        content: Contextual<T>;
        date: string;
        date_gmt: string;
        id: number;
        link: string;
        meta: any[];
        parent: number;
        post: number;
        status: 'approved' | 'hold' | 'spam' | 'trash';
        type: string;
    }

    interface BaseTaxonomy<T extends Context> extends BaseResponse {
        capabilities: {
            assign_terms: string;
            delete_terms: string;
            edit_terms: string;
            manage_terms: string;
        };
        description: string;
        hierarchical: boolean;
        labels: {
            add_new_item: string;
            add_or_remove_items: string | null;
            all_items: string;
            back_to_items: string;
            choose_from_most_used: string | null;
            edit_item: string;
            items_list: string;
            items_list_navigation: string;
            menu_name: string;
            most_used: string;
            name: string;
            name_admin_bar: string;
            new_item_name: string;
            no_terms: string;
            not_found: string;
            parent_item: string | null;
            parent_item_colon: string | null;
            popular_items: string | null;
            search_items: string;
            separate_items_with_commas: string | null;
            singular_name: string;
            update_item: string;
            view_item: string;
        };
        name: string;
        rest_base: string;
        show_cloud: boolean;
        slug: string;
        types: string[];
        visibility: {
            public: boolean;
            publicly_queryable: boolean;
            show_admin_column: boolean;
            show_in_nav_menus: boolean;
            show_in_quick_edit: boolean;
            show_ui: boolean;
        };
    }

    interface BaseMedia<T extends Context> extends BaseResponse {
        alt_text: string;
        author: number;
        caption: Contextual<T>;
        comment_status: OpenOrClosed;
        date: string;
        date_gmt: string;
        description: Contextual<T>;
        generated_slug: string;
        guid: Contextual<T>;
        id: number;
        link: string;
        media_type: 'file' | 'image';
        media_details: {
            sizes: Record<
                string,
                {
                    file: string;
                    height: number;
                    mime_type: string;
                    source_url: string;
                    width: number;
                }
            >;
            file?: string;
            height?: number;
            image_meta?: {
                aperture: string;
                camera: string;
                caption: string;
                copyright: string;
                created_timestamp: string;
                credit: string;
                focal_length: string;
                iso: string;
                keywords: string[];
                orientation: string;
                shutter_speed: string;
                title: string;
            };
            width?: number;
        };
        meta: any[];
        mime_type: string;
        modified: string;
        modified_gmt: string;
        permalink_template: string;
        ping_status: OpenOrClosed;
        post: number | null;
        slug: string;
        source_url: string;
        status: PostStatus | 'inherit';
        template: string;
        title: Contextual<T>;
        type: string;
    }

    interface BaseUser<T extends Context> extends BaseResponse {
        avatar_urls: Record<number, string>;
        capabilities: Record<string, boolean>;
        description: string;
        email: string;
        extra_capabilities: Record<string, boolean>;
        first_name: string;
        id: number;
        last_name: string;
        link: string;
        meta: any[];
        name: string;
        nickname: string;
        registered_date: string;
        roles: string[];
        slug: string;
        url: string;
        username: string;
    }

    interface BaseType<T extends Context> extends BaseResponse {
        capabilities: {
            create_posts: string;
            delete_others_posts: string;
            delete_post: string;
            delete_posts: string;
            delete_private_posts: string;
            delete_published_posts: string;
            edit_others_posts: string;
            edit_post: string;
            edit_posts: string;
            edit_private_posts: string;
            edit_published_posts: string;
            publish_posts: string;
            read: string;
            read_post: string;
            read_private_posts: string;
        };
        description: string;
        hierarchical: boolean;
        labels: {
            add_new: string;
            add_new_item: string;
            all_items: string;
            archives: string;
            attributes: string;
            edit_item: string;
            featured_image: string;
            filter_items_list: string;
            insert_into_item: string;
            item_published: string;
            item_published_privately: string;
            item_reverted_to_draft: string;
            item_scheduled: string;
            item_updated: string;
            items_list: string;
            items_list_navigation: string;
            menu_name: string;
            name: string;
            name_admin_bar: string;
            new_item: string;
            not_found: string;
            not_found_in_trash: string;
            parent_item_colon: string;
            remove_featured_image: string;
            search_items: string;
            set_featured_image: string;
            singular_name: string;
            uploaded_to_this_item: string;
            use_featured_image: string;
            view_item: string;
            view_items: string;
        };
        name: string;
        rest_base: string;
        slug: string;
        supports: {
            author?: true;
            comments?: true;
            'custom-fields'?: true;
            editor?: true;
            excerpt?: true;
            'page-attributes'?: true;
            'post-formats'?: true;
            revisions?: true;
            thumbnail?: true;
            title?: true;
            trackbacks?: true;
        };
        taxonomies: TaxonomyKind[];
        viewable: boolean;
    }

    interface BaseStatus extends BaseResponse {
        name: string;
        private: boolean;
        protected: boolean;
        public: boolean;
        queryable: boolean;
        show_in_list: boolean;
        slug: string;
    }

    interface BaseBlock<T extends Context> extends BaseResponse {
        content: {
            protected: boolean;
            raw: string;
        } & (T extends 'edit' ? { block_version: number } : {});
        date: string;
        date_gmt: string;
        guid: Contextual<T>;
        id: number;
        link: string;
        modified: string;
        modified_gmt: string;
        password: string;
        slug: string;
        status: PostStatus;
        template: string;
        title: T extends 'embed' ? [] : { raw: string };
        type: string;
    }

    // prettier-ignore
    type Block<T extends Context = 'view'> =
        T extends 'embed' ? Pick<BaseBlock<T>, EmbedKeys.Block> :
        T extends 'view'  ? Pick<BaseBlock<T>, ViewKeys.Block> :
        BaseBlock<T>;

    // prettier-ignore
    type Category<T extends Context = 'view'> =
        T extends 'embed' ? Pick<BaseCategory, EmbedKeys.Category> :
        T extends 'view'  ? Pick<BaseCategory, ViewKeys.Category> :
        BaseCategory;

    // prettier-ignore
    type Comment<T extends Context = 'view'> =
        T extends 'embed' ? Pick<BaseComment<T>, EmbedKeys.Comment> :
        T extends 'view'  ? Pick<BaseComment<T>, ViewKeys.Comment> :
        BaseComment<T>;

    // prettier-ignore
    type Media<T extends Context = 'view'> =
        T extends 'embed' ? Pick<BaseMedia<T>, EmbedKeys.Media> :
        T extends 'view'  ? Pick<BaseMedia<T>, ViewKeys.Media> :
        BaseMedia<T>;

    // prettier-ignore
    type Page<T extends Context = 'view'> =
        T extends 'embed' ? Pick<BasePage<T>, EmbedKeys.Page> :
        T extends 'view'  ? Pick<BasePage<T>, ViewKeys.Page> :
        BasePage<T>;

    // prettier-ignore
    type Post<T extends Context = 'view'> =
        T extends 'embed' ? Pick<BasePost<T>, EmbedKeys.Post> :
        T extends 'view'  ? Pick<BasePost<T>, ViewKeys.Post> :
        BasePost<T>;

    // prettier-ignore
    type PostOrPage<T extends Context = 'view'> =
        T extends 'embed' ? Pick<BasePost<T>, EmbedKeys.Post> & Partial<Pick<BasePage<T>, EmbedKeys.Page>> :
        T extends 'view'  ? Pick<BasePost<T>, ViewKeys.Post> & Partial<Pick<BasePage<T>, ViewKeys.Page>> :
        BasePost<T> & Partial<BasePage<T>>;

    // prettier-ignore
    type PostRevision<T extends Context = 'view'> =
        T extends 'embed' ? Pick<BasePostRevision<T>, EmbedKeys.PostRevision> :
        T extends 'view'  ? Pick<BasePostRevision<T>, ViewKeys.PostRevision> :
        BasePostRevision<T>;

    interface SearchResult extends BaseResponse {
        id: number;
        subtype: string;
        title: string;
        type: string;
        url: string;
    }

    interface Settings {
        date_format: string;
        default_category: number;
        default_comment_status: OpenOrClosed;
        default_ping_status: OpenOrClosed;
        default_post_format: string;
        description: string;
        email: string;
        language: string;
        posts_per_page: number;
        start_of_week: number;
        time_format: string;
        timezone: string;
        title: string;
        url: string;
        use_smilies: boolean;
    }

    // prettier-ignore
    type Status<T extends Context = 'view'> =
        T extends 'embed' ? Pick<BaseStatus, EmbedKeys.Status> :
        T extends 'view'  ? Pick<BaseStatus, ViewKeys.Status> :
        BaseStatus;

    // prettier-ignore
    type Tag<T extends Context = 'view'> =
        T extends 'embed' ? Pick<BaseTag, EmbedKeys.Tag> :
        BaseTag;

    // prettier-ignore
    type Taxonomy<T extends Context = 'view'> =
        T extends 'embed' ? Pick<BaseTaxonomy<T>, EmbedKeys.Taxonomy> :
        T extends 'view'  ? Pick<BaseTaxonomy<T>, ViewKeys.Taxonomy> :
        BaseTaxonomy<T>;

    interface Theme {
        theme_supports: {
            formats: PostFormat[];
            'post-thumbnails': boolean;
            'responsive-embeds': boolean;
        };
    }

    // prettier-ignore
    type Type<T extends Context = 'view'> =
        T extends 'embed' ? Pick<BaseType<T>, EmbedKeys.Type> :
        T extends 'view'  ? Pick<BaseType<T>, ViewKeys.Type> :
        BaseType<T>;

    // prettier-ignore
    type User<T extends Context = 'view'> =
        T extends 'embed' ? Pick<BaseUser<T>, EmbedKeys.User> :
        T extends 'view'  ? Pick<BaseUser<T>, ViewKeys.User> :
        BaseUser<T>;

    namespace EmbedKeys {
        // prettier-ignore
        type Block =
            | keyof BaseResponse
            | 'date'
            | 'id'
            | 'link'
            | 'slug'
            | 'title'
            | 'type';

        // prettier-ignore
        type Category =
            | keyof BaseResponse
            | 'id'
            | 'link'
            | 'name'
            | 'slug'
            | 'taxonomy';

        type Comment =
            | keyof BaseResponse
            | 'author'
            | 'author_avatar_urls'
            | 'author_name'
            | 'author_url'
            | 'content'
            | 'date'
            | 'id'
            | 'link'
            | 'parent'
            | 'type';

        type Media =
            | keyof BaseResponse
            | 'alt_text'
            | 'author'
            | 'caption'
            | 'date'
            | 'id'
            | 'link'
            | 'media_details'
            | 'media_type'
            | 'mime_type'
            | 'slug'
            | 'source_url'
            | 'title'
            | 'type';

        type Page =
            | keyof BaseResponse
            | 'author'
            | 'date'
            | 'excerpt'
            | 'featured_media'
            | 'id'
            | 'link'
            | 'slug'
            | 'title'
            | 'type';

        type Post =
            | keyof BaseResponse
            | 'author'
            | 'date'
            | 'excerpt'
            | 'featured_media'
            | 'id'
            | 'link'
            | 'slug'
            | 'title'
            | 'type';

        // prettier-ignore
        type PostRevision =
            | keyof BaseResponse
            | 'author'
            | 'date'
            | 'excerpt'
            | 'id'
            | 'parent'
            | 'slug'
            | 'title';

        // prettier-ignore
        type Status =
            | keyof BaseResponse
            | 'name'
            | 'slug';

        // prettier-ignore
        type Tag =
            | keyof BaseResponse
            | 'id'
            | 'link'
            | 'name'
            | 'slug'
            | 'taxonomy';

        // prettier-ignore
        type Taxonomy =
            | keyof BaseResponse
            | 'name'
            | 'rest_base'
            | 'slug';

        // prettier-ignore
        type Type =
            | keyof BaseResponse
            | 'name'
            | 'rest_base'
            | 'slug';

        // prettier-ignore
        type User =
            | keyof BaseResponse
            | 'avatar_urls'
            | 'description'
            | 'id'
            | 'link'
            | 'name'
            | 'slug'
            | 'url';
    }

    namespace ViewKeys {
        type Block =
            | EmbedKeys.Block
            | 'content'
            | 'date_gmt'
            | 'guid'
            | 'modified'
            | 'modified_gmt'
            | 'status'
            | 'template';

        // prettier-ignore
        type Category =
            | EmbedKeys.Category
            | 'count'
            | 'description'
            | 'meta'
            | 'parent';

        // prettier-ignore
        type Comment =
            | EmbedKeys.Comment
            | 'date_gmt'
            | 'meta'
            | 'post'
            | 'status';

        type Media =
            | EmbedKeys.Media
            | 'comment_status'
            | 'date_gmt'
            | 'description'
            | 'guid'
            | 'meta'
            | 'modified'
            | 'modified_gmt'
            | 'ping_status'
            | 'post'
            | 'status'
            | 'template';

        type Page =
            | EmbedKeys.Page
            | 'comment_status'
            | 'content'
            | 'date_gmt'
            | 'guid'
            | 'menu_order'
            | 'meta'
            | 'modified'
            | 'modified_gmt'
            | 'parent'
            | 'ping_status'
            | 'status'
            | 'template';

        type Post =
            | EmbedKeys.Post
            | 'categories'
            | 'comment_status'
            | 'content'
            | 'date_gmt'
            | 'format'
            | 'guid'
            | 'meta'
            | 'modified'
            | 'modified_gmt'
            | 'ping_status'
            | 'status'
            | 'sticky'
            | 'tags'
            | 'template';

        // prettier-ignore
        type PostRevision =
            | EmbedKeys.PostRevision
            | 'content'
            | 'date_gmt'
            | 'guid'
            | 'modified'
            | 'modified_gmt';

        // prettier-ignore
        type Status =
            | EmbedKeys.Status
            | 'public'
            | 'queryable';

        // prettier-ignore
        type Taxonomy =
            | EmbedKeys.Taxonomy
            | 'description'
            | 'hierarchical'
            | 'types';

        // prettier-ignore
        type Type =
            | EmbedKeys.Type
            | 'description'
            | 'hierarchical'
            | 'taxonomies';

        // prettier-ignore
        type User =
            | EmbedKeys.User
            | 'meta';
    }
}
