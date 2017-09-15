// Type definitions for OLE Automation - stdole 2.0
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace stdole {
    type IPictureDisp = StdPicture;

    type OLE_COLOR = number;

    type OLE_XPOS_CONTAINER = number;

    type OLE_YPOS_CONTAINER = number;

    const enum LoadPictureConstants {
        Color = 4,
        Default = 0,
        Monochrome = 1,
        VgaColor = 2,
    }

    const enum OLE_TRISTATE {
        Checked = 1,
        Gray = 2,
        Unchecked = 0,
    }

    interface DISPPARAMS {
        readonly cArgs: number;
        readonly cNamedArgs: number;
        readonly rgdispidNamedArgs: number;
        readonly rgvarg: any;
    }

    interface EXCEPINFO {
        readonly bstrDescription: string;
        readonly bstrHelpFile: string;
        readonly bstrSource: string;
        readonly dwHelpContext: number;
        readonly pfnDeferredFillIn: undefined;
        readonly pvReserved: undefined;
        readonly scode: any;
        readonly wCode: number;
        readonly wReserved: number;
    }

    interface GUID {
        readonly Data1: number;
        readonly Data2: number;
        readonly Data3: number;
        readonly Data4: SafeArray<number>;
    }

    class StdFont {
        private 'stdole.StdFont_typekey': StdFont;
        private constructor();
        public readonly Bold: boolean;
        public readonly Charset: number;
        public readonly Italic: boolean;
        public readonly Name: string;
        public readonly Size: number;
        public readonly Strikethrough: boolean;
        public readonly Underline: boolean;
        public readonly Weight: number;
    }

    class StdPicture {
        private 'stdole.StdPicture_typekey': StdPicture;
        private constructor();
        public readonly Handle: number;
        public readonly Height: number;
        public readonly hPal: number;
        public Render(hdc: number, x: number, y: number, cx: number, cy: number, xSrc: number, ySrc: number, cxSrc: number, cySrc: number, prcWBounds: undefined): void;
        public readonly Type: number;
        public readonly Width: number;
    }
}

interface ActiveXObject {
    on(obj: stdole.StdFont, event: 'FontChanged', argNames: ['PropertyName'], handler: (this: stdole.StdFont, parameter: {readonly PropertyName: string}) => void): void;
    new<K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
}

interface ActiveXObjectNameMap {
    StdFont: stdole.StdFont;
    StdPicture: stdole.StdPicture;
}

interface SafeArray<T = any> {
    _brand: SafeArray<T>;
}
