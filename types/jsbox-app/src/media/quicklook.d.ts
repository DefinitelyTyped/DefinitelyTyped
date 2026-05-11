// JSBox QuickLook API TypeScript Declaration

declare namespace QuicklookTypes {
    type QuickLookOpenOptions =
        & {
            type?: string; // Please note, we can set type to indicate the file type, it's optional, but it's better to have one.
            handler?: () => void; // Handle dismiss action, optional
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
                list: string[] | NSData[]; // either file or url
            }
        );
}

interface JBQuickLook {
    open(options: QuicklookTypes.QuickLookOpenOptions): void;
}

declare const $quicklook: JBQuickLook;
