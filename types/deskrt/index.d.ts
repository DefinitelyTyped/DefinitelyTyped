declare namespace DeskRT {
    class Core {
        static version: string;
        private static _pre;
        private static _end;
        private static _frame;
        private static _main;
        private static _logo;
        private static _theme;
        private static _asideWidth;
        static __frameVm: any;
        static __popDiv: HTMLDivElement;
        static __vuex: any;
        static let: any;
        static __scriptElement: HTMLScriptElement;
        static __pages: any;
        static init(opt: any): void;
        static open(path: string): void;
        static go(path: string): void;
        static openUrl(url: string): void;
        private static _LIBS;
        static libs(paths: string[], cb: () => any): void;
        private static _libsLoad(index, paths, cb, head);
        static setTheme(theme: string): void;
        static setAsideWidth(width: string): void;
        static arrayUnique(arr: any[]): any[];
        static purifyText(text: string): string;
        static html2escape(html: string): string;
        static clone(obj: any): any;
    }
    class Http {
        static get(url: string, success: (o: any) => any): void;
        static post(url: string, data: any, success: (o: any) => any): void;
    }
    class Mask {
        static show(): void;
        static hide(): void;
    }
    class Controls {
        static init(): void;
    }
}
