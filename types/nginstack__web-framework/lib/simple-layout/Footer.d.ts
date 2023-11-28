export = Footer;
declare function Footer(): void;
declare class Footer {
    image: number | null;
    showPath: boolean;
    complement: string;
    private cssExtractor_;
    mustIncludeCssFiles: boolean;
    visible: boolean;
    autoSanitize: boolean;
    writePlain(
        outputObj: {
            write: (arg0: string, arg1: boolean) => any;
        },
        options: {
            path: string;
            leftMargin: number;
            calculatedWidth: number;
        },
    ): void;
    writeHtml(
        sender: Visualization | SimpleLayout,
        outputObj: {
            write: (arg0: string) => any;
        },
        opt_options?: {
            colspan?: number;
            css?: string;
            mailObject?: Email;
            path?: string;
        },
    ): void;
}
declare namespace Footer {
    export { Email, SimpleLayout, Visualization };
}
type Email = import("@nginstack/engine/lib/email/Email");
type SimpleLayout = import("./SimpleLayout");
type Visualization = import("../dsv/Visualization");
