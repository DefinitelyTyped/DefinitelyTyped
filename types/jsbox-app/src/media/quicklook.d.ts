// JSBox QuickLook API TypeScript Declaration

declare namespace QuicklookTypes {
    type QuickLookOpenOptions =
        & {
            /** the file type */
            type?: string;
            /** Handle dismiss action */
            handler?: () => void;
        }
        & (
            | {
                url: string;
            }
            | {
                data: NSData;
            }
            | {
                image: UIImage;
            }
            | {
                text: string;
            }
            | {
                json: string;
            }
            | {
                html: string;
            }
            | {
                /** they should be same type, either file or url */
                list: string[] | NSData[];
            }
        );
}

interface JBQuickLook {
    open(options: QuicklookTypes.QuickLookOpenOptions): void;
}

declare const $quicklook: JBQuickLook;
