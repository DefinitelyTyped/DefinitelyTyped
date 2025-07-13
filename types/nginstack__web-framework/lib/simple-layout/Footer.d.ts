export = Footer;
declare function Footer(): void;
declare class Footer {
    showPath: boolean;
    image: number | null;
    complement: string;
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
        options?: {
            colspan?: number;
            mailObject?: Email;
            path?: string;
            showTopLine?: boolean;
        },
    ): void;
}
declare namespace Footer {
    export { Email, SimpleLayout, Visualization };
}
type Email = import("@nginstack/engine/lib/email/Email");
type SimpleLayout = import("./SimpleLayout");
type Visualization = import("../dsv/Visualization");
