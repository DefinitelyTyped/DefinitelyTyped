// Type definitions for non-npm package w3c-web-hid 1.0
// Project: https://wicg.github.io/webhid
// Definitions by: Kouhei Kiyama <https://github.com/kkiyama117>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

/*~ https://wicg.github.io/webhid/#enumeration */
interface HIDDeviceFilter {
    vendorId?: number;
    productId?: number;
    usagePage?: number;
    usage?: number;
}

/*~ https://wicg.github.io/webhid/#enumeration */
interface HIDDeviceRequestOptions {
    filters: HIDDeviceFilter[];
}

/*~ https://wicg.github.io/webhid/#enumeration */
declare class HID extends EventTarget {
    onconnect: ((this: this, ev: Event) => any) | null;
    ondisconnect: ((this: this, ev: Event) => any) | null;

    getDevices(): Promise<HIDDevice[]>;

    requestDevice(options?: HIDDeviceRequestOptions): Promise<HIDDevice[]>;

    addEventListener(
        type: 'connect' | 'disconnect',
        listener: (this: this, ev: HIDConnectionEvent) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject | null,
        options?: boolean | AddEventListenerOptions,
    ): void;

    removeEventListener(
        type: 'connect' | 'disconnect',
        callback: (this: this, ev: HIDConnectionEvent) => any,
        useCapture?: boolean,
    ): void;
    removeEventListener(
        type: string,
        callback: EventListenerOrEventListenerObject | null,
        options?: EventListenerOptions | boolean,
    ): void;
}

/*~ https://wicg.github.io/webhid/#enumeration */
interface Navigator {
    readonly hid: HID;
}

/*~ https://wicg.github.io/webhid/#events */
interface HIDConnectionEventInit {
    device: HIDDevice;
}

/*~ https://wicg.github.io/webhid/#events */
declare class HIDConnectionEvent extends Event {
    constructor(type: string, eventInitDict: HIDConnectionEventInit);

    readonly device: HIDDevice;
    readonly reportId: number;
    readonly data: DataView;
}

/*~ https://wicg.github.io/webhid/#events */
interface HIDInputReportEventInit extends EventInit {
    device: HIDDevice;
    reportId: number;
    data: DataView;
}

/*~ https://wicg.github.io/webhid/#events */
declare class HIDInputReportEvent extends Event {
    constructor(type: string, eventInitDict: HIDInputReportEventInit);

    readonly device: HIDDevice;
    readonly reportId: number;
    readonly data: DataView;
}

/*~ https://wicg.github.io/webhid/#report-descriptor */
type HIDUnitSystem =
    | 'none'
    | 'si-linear'
    | 'si-rotation'
    | 'english-linear'
    | 'english-rotation'
    | 'vendor-defined'
    | 'reserved';

/*~ https://wicg.github.io/webhid/#report-descriptor */
interface HIDReportItem {
    isAbsolute?: boolean;
    isArray?: boolean;
    isBufferedBytes?: boolean;
    isConstant?: boolean;
    isLinear?: boolean;
    isRange?: boolean;
    isVolatile?: boolean;
    hasNull?: boolean;
    hasPreferredState?: boolean;
    wrap?: boolean;
    usages?: number[];
    usageMinimum?: number;
    usageMaximum?: number;
    reportSize?: number;
    reportCount?: number;
    unitExponent?: number;
    unitSystem?: HIDUnitSystem;
    unitFactorLengthExponent?: number;
    unitFactorMassExponent?: number;
    unitFactorTimeExponent?: number;
    unitFactorTemperatureExponent?: number;
    unitFactorCurrentExponent?: number;
    unitFactorLuminousIntensityExponent?: number;
    logicalMinimum?: number;
    logicalMaximum?: number;
    physicalMinimum?: number;
    physicalMaximum?: number;
    strings?: string[];
}

/*~ https://wicg.github.io/webhid/#report-descriptor */
interface HIDReportInfo {
    reportId?: number;
    items?: HIDReportItem[];
}

/*~ https://wicg.github.io/webhid/#report-descriptor */
interface HIDCollectionInfo {
    usagePage?: number;
    usage?: number;
    type?: number;
    children?: HIDCollectionInfo[];
    inputReports?: HIDReportInfo[];
    outputReports?: HIDReportInfo[];
    featureReports?: HIDReportInfo[];
}

/*~ https://wicg.github.io/webhid/#device-usage */
declare class HIDDevice extends EventTarget {
    oninputreport: ((this: this, ev: HIDInputReportEvent) => any) | null;
    readonly opened?: boolean;
    readonly vendorId?: number;
    readonly productId?: number;
    readonly productName?: string;
    readonly collections?: HIDCollectionInfo[];

    open(): Promise<void>;

    close(): Promise<void>;

    sendReport(reportId: number, data: BufferSource): Promise<void>;

    sendFeatureReport(reportId: number, data: BufferSource): Promise<void>;

    receiveFeatureReport(reportId: number): Promise<DataView>;

    addEventListener(type: 'inputreport', listener: (this: this, ev: HIDInputReportEvent) => any): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject | null,
        options?: boolean | AddEventListenerOptions,
    ): void;

    removeEventListener(type: 'inputreport', callback: (this: this, ev: HIDInputReportEvent) => any): void;
    removeEventListener(
        type: string,
        callback: EventListenerOrEventListenerObject | null,
        options?: EventListenerOptions | boolean,
    ): void;
}
