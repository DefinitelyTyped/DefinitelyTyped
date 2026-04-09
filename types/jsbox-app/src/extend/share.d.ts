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
    sheet(options: ShareTypes.ShareSheetOptions | NSData[] | UIImage[] | string[] | NSData | UIImage | string): void;
    // Although the sheet method can accept a mixed-type array, it has no practical effect.
    // So there is no corresponding type support.
    wechat(content: NSData | UIImage | string): void;
    qq(content: NSData | UIImage | string): void;
    universal(content: NSData | UIImage): void; // do not support string
}

declare const $share: JBShare;
