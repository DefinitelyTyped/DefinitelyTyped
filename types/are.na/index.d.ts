/**
 * Timestamp in ISO 8601 format, eg. "2020-06-20T15:59:04.796Z"
 */
type Timestamp = string;

/**
 * Parameter type for API functions
 */
interface Params {
    [key: string]: any;
}

/**
 * Parameter type for API functions with pagination support
 */
interface PaginationParams extends Params {
    page: number;
    per: number;
}

/**
 * Custom request handler function
 */
interface CustomRequestHandler {
    /**
     * Request method (GET, POST, etc.)
     */
    method: string;
    url: string;
    data?: any;
    options?: Params | undefined;
}

/**
 * Arena class, organized hierarchically as nested objects
 */
declare class Arena {
    /**
     * Arena class, organized hierarchically as nested objects
     *
     * ```js
     * // Request for a channel with slug of "arena-influences"
     * const arena = new Arena();
     * arena.channel("arena-influences").get()
     * ```
     * @param accessToken - Your are.na API access token
     * @param baseURL - Base URL to make requests on (default: https://api.are.na/v2/)
     * @param authToken - Optional auth token request header
     * @param requestHandler - Custom request handler
     */
    constructor(config?: {
        accessToken?: string | undefined;
        baseURL?: string | undefined;
        authToken?: string | undefined;
        requestHandler?: CustomRequestHandler | undefined;
    });

    /**
     * Base object for Group related API requests
     *
     * ```js
     * // Basic usage
     * arena.group("are-na-team").get()
     * ```
     *
     * @param indentifier - Group slug such as "are-na-team"
     * @param params - Additional parameters
     */
    group(
        indentifier: string,
        params?: Params,
    ): {
        /**
         * Get the group as an Object.
         */
        get(params?: PaginationParams): Promise<Arena.Group>;
        /**
         * Get a group's channels, as an array. Supports pagination.
         */
        channels(params?: PaginationParams): Promise<Arena.Channel[]>;
    };

    /**
     * Base object for channel related API requests
     *
     * ```js
     * // Basic usage
     * arena.channel("arena-influences").get()
     * ```
     *
     * @param indentifier - Channel slug or id, such as "arena-influences" or 275
     * @param params - Additional parameters
     */
    channel(
        indentifier: string | number,
        params?: Params,
    ): {
        /**
         * Get the channel as an Object. Gets a list of public channels if slug/id not specified. Supports pagination.
         */
        get(params?: PaginationParams): Promise<Arena.Channel>;
        /**
         * Limited view of the channel
         */
        thumb(params?: Params): Promise<Arena.Channel>;
        /**
         * Get all of the connections of the channel (channels where this channel is connected). Supports pagination.
         */
        connections(params?: PaginationParams): Promise<any>;
        /**
         * Get all of the channels connected to blocks in the channel. Supports pagination.
         */
        channels(params?: PaginationParams): Promise<Arena.Channel[]>;
        /**
         * Get the channel's contents only, as an array. Supports pagination.
         */
        contents(params?: PaginationParams): Promise<Arena.Block[]>;
        /**
         * Get the channel's collaborators. Supports pagination.
         */
        collaborators(params?: PaginationParams): Promise<Arena.User[]>;
        /**
         * Creates a new channel. Called as or channel().create(title, status). Title is required, status is optional.
         */
        create(title: string, status: Arena.ChannelStatus): Promise<void>;
        /**
         * Creates a new channel. Called as channel(title).create(status). Title is required, status is optional.
         */
        create(status: Arena.ChannelStatus): Promise<void>;
        /**
         * Delete the channel. Can be called as channel(slug).delete() or channel().delete(slug).
         */
        delete(slug: string): Promise<void>;
        /**
         * Update the channel's attributes. params should be an object and can include title and/or status.
         * Currently it appears that the are.na API requires both values.
         * If title is not set, an error will occur.
         * If status is not set, it will default to "public".
         */
        update(
            params: { title?: string | undefined; status?: Arena.ChannelStatus | undefined },
        ): Promise<Arena.Channel>;
        /**
         * Add collaborators to a channel. Pass userIds as an Array or multiple arguments.
         */
        addCollaborators(userIDs: string[]): Promise<Arena.User[]>;
        addCollaborators(...userIDs: string[]): Promise<Arena.User[]>;
        /**
         * Remove collaborators from a channel. Accepts userIds in the same format as addCollaborators.
         */
        deleteCollaborators(userIDs: string[]): Promise<Arena.User[]>;
        /**
         * Create a block and add it to the channel. Specify textual content or a source link.
         */
        createBlock(content: any): Promise<Arena.Block>;
        /**
         * Remove a block from the channel
         */
        deleteBlock(blockID: string): Promise<void>;
    };

    /**
     * Base object for block related API requests
     *
     * ```js
     * // Basic usage
     * arena.block(3088).get()
     * ```
     *
     * @param id - Block id, such as 3088
     * @param params - Additional parameters
     */
    block(
        id: string | number,
        params?: Params,
    ): {
        /**
         * Get the block specified by id
         */
        get(params?: Params): Promise<Arena.Block>;
        /**
         * Get a list of the channels a block belongs to
         */
        channels(params?: Params): Promise<Arena.Channel[]>;
        /**
         * Create a block and add it to the channel.
         * Specify textual content or a source link.
         */
        create(channelSlug: string, content: any): Promise<Arena.Channel>;
        /**
         * Update a block. Pass an object with one or more of content,
         * title or description fields to update those fields.
         */
        update(params: { content?: any; title?: string | undefined; description?: string | undefined }): Promise<void>;
    };

    /**
     * Base object for user related API requests
     *
     * ```js
     * // Basic usage
     * arena.user(16).get()
     * ```
     *
     * @param id - User id, such as 16
     * @param params - Additional parameters
     */
    user(
        id: string | number,
        params?: Params,
    ): {
        /**
         * Get a user specified by id
         */
        get(params?: Params): Promise<Arena.User>;
        /**
         * Get a user's channels, as an array. Supports pagination.
         */
        channels(params?: PaginationParams): Promise<Arena.Channel[]>;
        /**
         * Get a list of users and/or blocks the user is following. Supports pagination.
         */
        following(params?: PaginationParams): Promise<Array<Arena.Block | Arena.User>>;
        /**
         * Get a list of the user's followers. Supports pagination.
         */
        followers(params?: PaginationParams): Promise<Arena.User[]>;
    };

    /**
     * Base object for user related API requests
     *
     * ```js
     * // Basic usage
     * arena.search("fruit").channels()
     * ```
     *
     * @param query - Search term, such as "fruit"
     * @param params - Additional parameters
     */
    search(
        query: string,
        params?: Params,
    ): {
        /**
         * Search for channels, blocks, and users matching query.
         */
        all(
            params?: Params,
        ): Promise<{
            channels?: Arena.Channel[] | undefined;
            blocks?: Arena.Block[] | undefined;
            users?: Arena.User[] | undefined;
        }>;
        /**
         * Search for users.
         */
        users(params: Params): Promise<Arena.User[]>;
        /**
         * Search for channels.
         */
        channels(params: Params): Promise<Arena.Channel[]>;
        /**
         * Search for blocks.
         */
        blocks(params: Params): Promise<Arena.Block[]>;
    };
}

/**
 * Types for the Are.na API responses
 */
declare namespace Arena {
    /**
     * The type of block.
     */
    type BlockType = "Image" | "Text" | "Link" | "Media" | "Attachment";

    /**
     * Either "default" (a standard channel) or "profile" the default channel of a user
     */
    type ChannelKind = "default" | "profile";

    /**
     * Can be "private" (only open for reading and adding to the channel by channel author and collaborators),
     * "closed" (open for reading by everyone, only channel author and collaborators can add) or "public"
     * (everyone can read and add to the channel)
     */
    type ChannelStatus = "private" | "closed" | "open";

    /**
     * Representation of a block's source
     */
    interface Source {
        provider?: { name?: string | undefined; url?: string | undefined } | undefined;
        title?: string | undefined;
        url?: string | undefined;
    }

    /**
     * Representation of a channel the block appears in
     */
    interface Connection extends Partial<Channel> {
        id?: number | undefined;
        title?: string | undefined;
        added_to_at?: Timestamp | undefined;
        updated_at?: Timestamp | undefined;
    }

    interface Image {
        /**
         * Name of the file as it appears on the Arena filesystem
         */
        filename: string;
        /**
         * MIME type of the image (e.g. 'image/png')
         */
        content_type: string;
        /**
         * Timestamp of the last time the file was updated
         */
        updated_at: Timestamp;
        /**
         * Only contains url which is a URL of the thumbnail sized image (200x200)
         */
        thumb: { url: string };
        /**
         * Only contains url which is a URL of the display sized image
         * (same aspect ratio as original image but with a maximim width
         * of 600px or a maximum height of 600px, whichever comes first)
         */
        display: { url: string };
        /**
         * Contains url which is a URL of the original image as well file_size
         * (an integer representation in bytes) and file_size_display
         * (a nicer string representation of the file_size)
         */
        original: { url: string; file_size: number; file_size_display: string };
    }

    /**
     * Groups allow multiple people to collaborate, access, and upload shared blocks and channels.
     * Groups have their own group profile pages and are public by default.
     */
    interface Group {
        /**
         * The internal ID of the group
         */
        id: number;
        /**
         * The title of the group
         */
        title: string | null;
        /**
         * The description of the group
         */
        description: string | null;
        /**
         * Timestamp when the group was created
         */
        created_at: Timestamp;
        /**
         * Timestamp when the group was last updated
         */
        updated_at: Timestamp;
        /**
         * Will always be "Group"
         */
        class: string;
        /**
         * More information on the group admin
         */
        user: User;
        /**
         * More information on the group members
         */
        users: User[];
        /**
         * UserIds of the group members
         */
        member_ids: number[];
        accessible_by_ids: number[];
    }

    /**
     * Blocks are modular and reusable pieces of data or content. A block has primary user
     * (indicated by user_id) and can only be edited by the user who created it.
     * However, any block can be reused in multiple channels (this is called a connection).
     * The channels a block appears in across Arena are listed in the blocks' connections attribute.
     */
    interface Block {
        /**
         * The internal ID of the block
         */
        id: number;
        /**
         * The title of the block
         */
        title: string | null;
        /**
         * Timestamp when the block was last updated
         */
        updated_at: Timestamp;
        /**
         * Timestamp when the block was created
         */
        created_at: Timestamp;
        /**
         * Represents the state of the blocks processing lifecycle.
         * (this will most often "Available" but can also be "Failure", "Processed", "Processing")
         */
        state: string;
        /**
         * The number of comments on a block
         */
        comment_count: number;
        /**
         * If the title is present on the block, this will be identical to the title.
         * Otherwise it will be a truncated string of the *description* or *content*.
         * If neither of those are present, it will be "Untitled"
         */
        generated_title: string;
        /**
         * The type of block. Can be "Image", "Text", "Link", "Media", or "Attachment"
         */
        class: BlockType;
        /**
         * This will always be "Block"
         */
        base_class: string;
        /**
         * If the block is of class "Text", this will be the text content as markdown
         */
        content: string | null;
        /**
         * If the block is of class "Text", this will be the text content as HTML
         */
        content_html: string | null;
        /**
         * This is used for captioning any type of block. Returns markdown.
         */
        description: string | null;
        /**
         * This is used for captioning any type of block. Returns HTML
         */
        description_html: string | null;
        /**
         * If the Block is saved from somewhere on the web,
         * this returns a User representation of the source
         */
        source: Source | null;
        /**
         * If the Block is of class "Image" or "Link",
         * this will be a User representation of the various sizes of images that Arena provides
         * (in the case of a "Link" it will be a screenshot of the website).
         */
        image: Image | null;
        /**
         * More information on the channel author
         */
        user: User;
        /**
         * An array of User representations of each of the channels the block appears in
         */
        connections?: Connection[] | undefined;
    }

    /**
     * Block of type "Text"
     */
    interface TextBlock extends Block {
        class: "Text";
        content: string;
        content_html: string;
        image: null;
    }

    /**
     * Block of type "Image"
     */
    interface ImageBlock extends Block {
        class: "Image";
        content: null;
        content_html: null;
        image: Image;
    }

    /**
     * Block of type "Link"
     */
    interface LinkBlock extends Block {
        class: "Link";
        content: null;
        content_html: null;
        image: Image;
    }

    /**
     * Block of type "Media"
     */
    interface MediaBlock extends Block {
        class: "Media";
        content: null;
        content_html: null;
        image: null;
    }

    /**
     * Block of type "Attachment"
     */
    interface AttachmentBlock extends Block {
        class: "Attachment";
        content: null;
        content_html: null;
        image: null;
    }

    /**
     * Channels are organizational structures for content. This means blocks but also sometimes other channels.
     * Channels have a primary user (indicated by the user_id) but can also have collaborators (an array of users).
     * Channels can be public (anyone can view and add),
     * closed (only the channel's author and collaborators can add but everyone can view)
     * and private (only the channels authors and collaborators can view and add).
     */
    interface Channel {
        /**
         * The internal ID of the channel
         */
        id: number;
        /**
         * The title of the channel
         */
        title: string;
        /**
         * Date when the channel was created
         */
        created_at: Timestamp;
        /**
         * Date when the channel was last updated
         */
        updated_at: Timestamp;
        /**
         * If channel is visible to all members of arena or not
         */
        published: boolean;
        /**
         * If channel is open to other members of arena for adding blocks
         */
        open: boolean;
        /**
         * If the channel has collaborators or not
         */
        collaboration: boolean;
        /**
         * The slug of the channel used in the url (e.g. http:re.na/arena-influences)
         */
        slug: string;
        /**
         * The number of items in a channel (blocks and other channels)
         */
        length: number;
        /**
         * Can be either "default" (a standard channel) or "profile" the default channel of a user
         */
        kind: ChannelKind;
        /**
         * Can be "private" (only open for reading and adding to the channel by channel author and collaborators),
         * "closed" (open for reading by everyone, only channel author and collaborators can add)
         * or "public" (everyone can read and add to the channel)
         */
        status: ChannelStatus;
        /**
         * Internal ID of the channel author
         */
        user_id: number;
        /**
         * Will always be "Channel"
         */
        class: string;
        /**
         * Will always be "Channel"
         */
        base_class: string;
        /**
         * More information on the channel author.
         */
        user: User;
        /**
         * If pagination is used, how many total pages there are in your request
         */
        total_pages: number;
        /**
         * If pagination is used, page requested
         */
        current_page: number;
        /**
         * If pagination is used, items per page requested
         */
        per: number;
        /**
         * Number of followers the channel has
         */
        follower_count: number;
        /**
         * Array of blocks and other channels in the channel.
         * Note: If the request is authenticated, this will include any private channels included in the requested
         * channel that you have access to. If not, only public channels included in the requested channel will be shown.
         */
        contents: Block[] | null;
        /**
         * Collaborators on the channel
         */
        collaborators: User[] | null;
    }

    /**
     * Users are representations of any account on Arena.
     * Users can have channels, followers, blocks and they can also follow both channels and users.
     */
    interface User {
        /**
         * The internal ID of the user
         */
        id: number;
        /**
         * The slug of the user. This is used for the user's default profile channel
         */
        slug: string;
        /**
         * The first name of the user
         */
        first_name: string;
        /**
         * The last name of the user
         */
        last_name: string;
        /**
         * The full name of the user
         */
        full_name: string;
        /**
         * The gravatar URL to the user's avatar
         */
        avatar: string;
        /**
         * The number of channels the user owns or is a collaborator on
         */
        channel_count: number;
        /**
         * The number of channels and users a user is following
         */
        following_count: number;
        /**
         * The internal ID of the user's profile channel
         */
        profile_id: number;
        /**
         * The number of users following the user
         */
        follower_count: string;
        /**
         * Currently this will be equivalent to "full_name"
         */
        username?: string | undefined;
        /**
         * Will always be "User"
         */
        class?: string | undefined;
        /**
         * The initials of a user. Derived from the user's first and last name
         */
        initials?: string | undefined;
    }

    interface Search {
        /**
         * A string representation of your search query
         */
        term: string;
        /**
         * An array of the users that match your search query
         */
        users: User[];
        /**
         * An array of the channels that match your search query
         */
        channels: Channel[];
        /**
         * An array of the blocks that match your search query
         */
        blocks: Block[];
        /**
         * If pagination is used, how many total pages there are in your request
         */
        total_pages: number;
        /**
         * If pagination is used, page requested
         */
        current_page: number;
        /**
         * If pagination is used, items per page requested
         */
        per: number;
    }
}

export = Arena;
