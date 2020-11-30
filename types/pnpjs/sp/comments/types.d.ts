import { _SharePointQueryableInstance, _SharePointQueryableCollection } from "../sharepointqueryable";
export declare class _Comments extends _SharePointQueryableCollection<ICommentInfo[]> {
    /**
     * Adds a new comment to this collection
     *
     * @param info Comment information to add
     */
    add(info: string | ICommentInfo): Promise<IComment & ICommentInfo>;
    /**
     * Gets a comment by id
     *
     * @param id Id of the comment to load
     */
    getById(id: string | number): IComment;
    /**
     * Deletes all the comments in this collection
     */
    clear(): Promise<boolean>;
}
export interface IComments extends _Comments {
}
export declare const Comments: import("../sharepointqueryable").ISPInvokableFactory<IComments>;
export declare class _Comment extends _SharePointQueryableInstance<ICommentInfo> {
    /**
     * A comment's replies
     */
    get replies(): IReplies;
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
export interface IComment extends _Comment {
}
export declare const Comment: import("../sharepointqueryable").ISPInvokableFactory<IComment>;
export declare class _Replies extends _SharePointQueryableCollection<ICommentInfo[]> {
    /**
     * Adds a new reply to this collection
     *
     * @param info Comment information to add
     */
    add(info: string | ICommentInfo): Promise<IComment & ICommentInfo>;
}
export interface IReplies extends _Replies {
}
export declare const Replies: import("../sharepointqueryable").ISPInvokableFactory<IReplies>;
/**
 * Defines the information for a comment author
 */
export interface ICommentAuthorData {
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
/**
 * Defines the information for a comment
 */
export interface ICommentInfo {
    author: ICommentAuthorData;
    createdDate: string;
    id: string;
    isLikedByUser: boolean;
    isReply: boolean;
    itemId: number;
    likeCount: number;
    listId: string;
    mentions: {
        loginName: string;
        email: string;
        name: string;
    } | null;
    parentId: string;
    replyCount: number;
    text: string;
}
export interface ILikeData {
    name: string;
    loginName: string;
    id: number;
    email: string;
    creationDate: string;
}
export interface ILikedByInformation {
    likedBy: {
        creationDate: string;
        email: string;
        id: number;
        loginName: string;
        name: string;
    }[];
    isLikedByUser: boolean;
    likeCount: number;
}
//# sourceMappingURL=types.d.ts.map