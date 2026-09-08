// JSBox Share API TypeScript Declaration

declare namespace ShareTypes {
    interface ShareItem {
        name?: string;
        data: NSData;
    }

    type ShareSheetItems = ShareItem[] | NSData[] | UIImage[] | string[];
    type ShareSheetItem = ShareItem | NSData | UIImage | string;

    type ShareSheetOptions =
        | {
            items: ShareSheetItems;
            item?: never;
            handler: (success: boolean) => void; // Required
        }
        | {
            item: ShareSheetItem;
            items?: never;
            handler: (success: boolean) => void; // Required
        };
}

interface JBShare {
    /** Mixed-type array does not work in fact, so there is no corresponding type support.*/
    sheet(options: ShareTypes.ShareSheetOptions | NSData[] | UIImage[] | string[] | NSData | UIImage | string): void;
    wechat(content: NSData | UIImage | string): void;
    qq(content: NSData | UIImage | string): void;
    /** Note: do not support string */
    universal(content: NSData | UIImage): void;
}

declare const $share: JBShare;
