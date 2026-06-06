declare var swfobject: swfobject.SwfObject;

declare namespace swfobject {
    export interface SwfObject {
        ua: {
            w3: boolean;
            pv: number[];
            wk: any; // number or boolean
            ie: boolean;
            win: boolean;
            mac: boolean;
        };

        registerObject(
            objectIdStr: string,
            swfVersionStr: string,
            xiSwfUrlStr?: string,
            callbackFn?: (callbackObj: ICallbackObj) => void,
        ): void;

        getObjectById(
            objectIdStr: string,
        ): HTMLElement;

        embedSWF(
            swfUrlStr: string,
            replaceElemIdStr: string,
            widthStr: string,
            heightStr: string,
            swfVersionStr: string,
            xiSwfUrlStr?: string,
            flashvarsObj?: Object,
            parObj?: Object,
            attObj?: Object,
            callbackFn?: (callbackObj: ICallbackObj) => void,
        ): void;

        switchOffAutoHideShow(): void;

        getFlashPlayerVersion(): IFlashPlayerVersion;

        hasFlashPlayerVersion(
            rv: string,
        ): boolean;

        createSWF(
            attObj: ISwfObjectAttribute,
            parObj: ISwfObjectParameter,
            replaceElemIdStr: string,
        ): HTMLElement;

        showExpressInstall(
            att: ISwfObjectAttribute,
            par: ISwfObjectParameter,
            replaceElemIdStr: string,
            callbackFn?: (callbackObj: ICallbackObj) => void,
        ): void;

        removeSWF(
            objElemIdStr: string,
        ): void;

        createCSS(
            selStr: string,
            declStr: string,
            mediaStr?: string,
            newStyleBoolean?: boolean,
        ): void;

        addDomLoadEvent(
            fn: () => void,
        ): void;

        addLoadEvent(
            fn: (event?: Event) => void,
        ): void;

        getQueryParamValue(
            param?: string,
        ): string;
    }

    export interface IFlashPlayerVersion {
        major: number;
        minor: number;
        release: number;
    }

    export interface ISwfObjectAttribute {
        id?: string | undefined;
        width?: string | undefined;
        height?: string | undefined;
    }

    export interface ISwfObjectParameter {
        flashvars?: string | undefined;
    }

    export interface ICallbackObj {
        success: boolean;
        id: string;
        ref?: HTMLElement | undefined;
    }
}
