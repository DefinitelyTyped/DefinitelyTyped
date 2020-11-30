import { ConversationThread as IConversationThreadType, Post as IPostType, Recipient as IRecipientType, Conversation as IConversationType, User as IUserType } from "@microsoft/microsoft-graph-types";
import { _GraphQueryableCollection, _GraphQueryableInstance } from "../graphqueryable";
import { IUpdateable, IDeleteable, IAddable, IGetById } from "../decorators";
/**
 * Conversation
 */
export declare class _Conversation extends _GraphQueryableInstance<IConversationType> {
    /**
     * Get all the threads in a group conversation.
     */
    get threads(): IThreads;
}
export interface IConversation extends _Conversation, IUpdateable<IConversationType>, IDeleteable {
}
export declare const Conversation: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IConversation;
/**
 * Conversations
 */
export declare class _Conversations extends _GraphQueryableCollection<IConversationType[]> {
}
export interface IConversations extends _Conversations, IGetById<IConversation>, IAddable<IConversationType> {
}
export declare const Conversations: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IConversations;
/**
 * Thread
 */
export declare class _Thread extends _GraphQueryableInstance {
    /**
     * Get all the threads in a group conversation.
     */
    get posts(): IPosts;
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    reply(post: IPostType): Promise<void>;
}
export interface IThread extends _Thread, IDeleteable {
}
export declare const Thread: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IThread;
/**
 * Threads
 */
export declare class _Threads extends _GraphQueryableCollection<IConversationThreadType[]> {
}
export interface IThreads extends _Threads, IGetById<IThread>, IAddable<IConversationThreadType, {
    id: string;
}> {
}
export declare const Threads: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IThreads;
/**
 * Post
 */
export declare class _Post extends _GraphQueryableInstance<IPostType> {
    /**
     * Forward a post to a recipient
     */
    forward(info: IPostForwardInfo): Promise<void>;
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    reply(post: IPostType): Promise<void>;
}
export interface IPost extends _Post, IDeleteable {
}
export declare const Post: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IPost;
/**
 * Posts
 */
export declare class _Posts extends _GraphQueryableCollection<IPostType[]> {
}
export interface IPosts extends _Posts, IGetById<IPost>, IAddable<IPostType> {
}
export declare const Posts: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IPosts;
/**
 * Senders
 */
export declare class _Senders extends _GraphQueryableCollection<IUserType[]> {
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
export interface ISenders extends _Senders {
}
export declare const Senders: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ISenders;
/**
 * Information used to forward a post
 */
export interface IPostForwardInfo {
    comment?: string;
    toRecipients: IRecipientType[];
}
//# sourceMappingURL=types.d.ts.map