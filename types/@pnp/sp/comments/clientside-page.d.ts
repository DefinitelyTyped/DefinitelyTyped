import { ICommentInfo, IComment, ILikedByInformation } from "./types";
import { IItemUpdateResult } from "../items";
declare module "../clientside-pages/types" {
    interface _ClientsidePage {
        addComment(info: string | ICommentInfo): Promise<IComment & ICommentInfo>;
        getCommentById(id: string | number): Promise<IComment & ICommentInfo>;
        clearComments(): Promise<boolean>;
        getComments(): Promise<ICommentInfo[]>;
        like(): Promise<void>;
        unlike(): Promise<void>;
        getLikedByInformation(): Promise<ILikedByInformation>;
        enableComments(): Promise<IItemUpdateResult>;
        disableComments(): Promise<IItemUpdateResult>;
        setCommentsOn(on: boolean): Promise<IItemUpdateResult>;
    }
    interface IClientsidePage {
        /**
         * Adds a comment to this page
         *
         * @param info The comment information
         */
        addComment(info: string | ICommentInfo): Promise<IComment & ICommentInfo>;
        /**
         *
         * @param id gets a comment by id
         */
        getCommentById(id: string | number): Promise<IComment & ICommentInfo>;
        /**
         * Deletes all comments for this page
         */
        clearComments(): Promise<boolean>;
        /**
         * Gets all the comments for this page
         */
        getComments(): Promise<ICommentInfo[]>;
        /**
         * Like this page
         */
        like(): Promise<void>;
        /**
         * Unlike this page
         */
        unlike(): Promise<void>;
        /**
         * gets list of who likes the page, current user's status, a few other details
         */
        getLikedByInformation(): Promise<ILikedByInformation>;
        /**
         * Enables comments for this page
         */
        enableComments(): Promise<IItemUpdateResult>;
        /**
         * Disables comments for this page
         */
        disableComments(): Promise<IItemUpdateResult>;
    }
}
//# sourceMappingURL=clientside-page.d.ts.map