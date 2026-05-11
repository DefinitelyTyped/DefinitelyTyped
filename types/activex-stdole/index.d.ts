/// <reference types="activex-interop" />

declare namespace stdole {
    type IFontDisp = StdFont;

    type IPictureDisp = StdPicture;

    type OLE_COLOR = number;

    type OLE_XPOS_CONTAINER = number;

    type OLE_XPOS_PIXELS = number;

    type OLE_YPOS_CONTAINER = number;

    type OLE_YPOS_PIXELS = number;

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
        private "stdole.StdFont_typekey": StdFont;
        private constructor();
        readonly Bold: boolean;
        readonly Charset: number;
        readonly Italic: boolean;
        readonly Name: string;
        readonly Size: number;
        readonly Strikethrough: boolean;
        readonly Underline: boolean;
        readonly Weight: number;
    }

    class StdPicture {
        private "stdole.StdPicture_typekey": StdPicture;
        private constructor();
        readonly Handle: number;
        readonly Height: number;
        readonly hPal: number;
        Render(
            hdc: number,
            x: number,
            y: number,
            cx: number,
            cy: number,
            xSrc: number,
            ySrc: number,
            cxSrc: number,
            cySrc: number,
            prcWBounds: undefined,
        ): void;
        readonly Type: number;
        readonly Width: number;
    }
}

interface ActiveXObject {
    on(
        obj: stdole.StdFont,
        event: "FontChanged",
        argNames: ["PropertyName"],
        handler: (this: stdole.StdFont, parameter: { readonly PropertyName: string }) => void,
    ): void;
}

interface ActiveXObjectNameMap {
    StdFont: stdole.StdFont;
    StdPicture: stdole.StdPicture;
}
