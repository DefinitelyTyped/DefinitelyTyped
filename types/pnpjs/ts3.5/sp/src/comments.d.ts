import { SharePointQueryableCollection, SharePointQueryableInstance } from "./sharepointqueryable";
export interface CommentAuthorData {
    email: string;
    id: number;
    isActive: boolean;
    isExternal: boolean;
    jobTitle: string | null;
    loginName: string;
    name: string;
    principalType: number;
    userId: any | null;
}
export interface CommentData {
    author: CommentAuthorData;
    createdDate: string;
    id: string;
    isLikedByUser: boolean;
    isReply: boolean;
    itemId: number;
    likeCount: number;
    listId: string;
    mentions: any | null;
    parentId: string;
    replyCount: number;
    text: string;
}
export interface Identity {
    loginName: string;
    email: string;
    name: string;
}
export interface CommentInfo {
    text: string;
    mentions?: Identity[];
}
/**
 * Represents a Collection of comments
 */
export declare class Comments extends SharePointQueryableCollection<CommentData[]> {
    /**
     * Adds a new comment to this collection
     *
     * @param info Comment information to add
     */
    add(info: string | CommentInfo): Promise<Comment & CommentData>;
    /**
     * Gets a comment by id
     *
     * @param id Id of the comment to load
     */
    getById(id: string | number): Comment;
    /**
     * Deletes all the comments in this collection
     */
    clear(): Promise<boolean>;
}
/**
 * Represents a comment
 */
export declare class Comment extends SharePointQueryableInstance {
    readonly replies: Replies;
    /**
     * Likes the comment as the current user
     */
    like(): Promise<void>;
    /**
     * Unlikes the comment as the current user
     */
    unlike(): Promise<void>;
    /**
     * Deletes this comment
     */
    delete(): Promise<void>;
}
/**
 * Represents a Collection of comments
 */
export declare class Replies extends SharePointQueryableCollection<CommentData[]> {
    /**
     * Adds a new reply to this collection
     *
     * @param info Comment information to add
     */
    add(info: string | CommentInfo): Promise<Comment & CommentData>;
}
