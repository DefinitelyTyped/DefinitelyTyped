import { IComments, ILikeData, ILikedByInformation } from "./types";
declare module "../items/types" {
    interface _Item {
        readonly comments: IComments;
        getLikedBy(): Promise<ILikeData[]>;
        like(): Promise<void>;
        unlike(): Promise<void>;
        getLikedByInformation(): Promise<ILikedByInformation>;
    }
    interface IItem {
        readonly comments: IComments;
        /**
         * Gets the collection of people who have liked this item
         */
        getLikedBy(): Promise<ILikeData[]>;
        /**
         * Likes this item as the current user
         */
        like(): Promise<void>;
        /**
         * Unlikes this item as the current user
         */
        unlike(): Promise<void>;
        /**
         * Get the like by information for a modern site page
         */
        getLikedByInformation(): Promise<ILikedByInformation>;
    }
}
//# sourceMappingURL=item.d.ts.map