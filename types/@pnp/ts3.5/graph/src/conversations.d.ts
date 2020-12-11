import { GraphQueryable, GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { TypedHash } from "@pnp/common";
import { Attachments } from "./attachments";
import { ConversationThread as IConversationThread, Post as IPost, Recipient as IRecipient, Conversation as IConversation, User as IUser } from "@microsoft/microsoft-graph-types";
/**
 * Information used to forward a post
 */
export interface PostForwardInfo {
    comment?: string;
    toRecipients: IRecipient[];
}
export declare class Conversations extends GraphQueryableCollection<IConversation[]> {
    /**
     * Create a new conversation by including a thread and a post.
     *
     * @param properties Properties used to create the new conversation
     */
    add(properties: TypedHash<any>): Promise<any>;
    /**
     * Gets a conversation from this collection by id
     *
     * @param id Group member's id
     */
    getById(id: string): Conversation;
}
export declare class Threads extends GraphQueryableCollection<IConversationThread[]> {
    /**
     * Gets a thread from this collection by id
     *
     * @param id Group member's id
     */
    getById(id: string): Thread;
    /**
     * Adds a new thread to this collection
     *
     * @param properties properties used to create the new thread
     * @returns Id of the new thread
     */
    add(properties: IConversationThread): Promise<{
        id: string;
    }>;
}
export declare class Posts extends GraphQueryableCollection<IPost[]> {
    /**
     * Gets a thread from this collection by id
     *
     * @param id Group member's id
     */
    getById(id: string): Post;
    /**
     * Adds a new thread to this collection
     *
     * @param properties properties used to create the new thread
     * @returns Id of the new thread
     */
    add(properties: IPost): Promise<{
        id: string;
    }>;
}
export declare class Conversation extends GraphQueryableInstance<IConversation> {
    /**
     * Get all the threads in a group conversation.
     */
    readonly threads: Threads;
    /**
     * Updates this conversation
     */
    update(properties: TypedHash<any>): Promise<void>;
    /**
     * Deletes this member from the group
     */
    delete(): Promise<void>;
}
export declare class Thread extends GraphQueryableInstance {
    /**
     * Get all the threads in a group conversation.
     */
    readonly posts: Posts;
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    reply(post: IPost): Promise<void>;
    /**
     * Deletes this member from the group
     */
    delete(): Promise<void>;
}
export declare class Post extends GraphQueryableInstance<IPost> {
    readonly attachments: Attachments;
    /**
     * Deletes this post
     */
    delete(): Promise<void>;
    /**
     * Forward a post to a recipient
     */
    forward(info: PostForwardInfo): Promise<void>;
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    reply(post: IPost): Promise<void>;
}
export declare class Senders extends GraphQueryableCollection<IUser[]> {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    /**
     * Add a new user or group to this senders collection
     * @param id The full @odata.id value to add (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    add(id: string): Promise<any>;
    /**
     * Removes the entity from the collection
     *
     * @param id The full @odata.id value to remove (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    remove(id: string): Promise<void>;
}
