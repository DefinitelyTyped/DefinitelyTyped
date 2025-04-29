export = Column;
declare function Column(simpleLayout: SimpleLayout, name: string, options?: any): void;
declare class Column {
    constructor(simpleLayout: SimpleLayout, name: string, options?: any);
    simpleLayout: SimpleLayout;
    name: string;
    onTotal: LegacyEvent;
    label: string;
    negativeInRed: boolean;
    lookupType: number;
    cssStyle: Record<string, string>;
    labelCssStyle: Record<string, string>;
    columnGroupHeaderCssStyle: Record<string, string>;
    tagAttributes: Record<string, string>;
    links: LinkSet;
    type: string | null;
    private hasType;
    lastContent: string | number | Date;
    private group;
    private accumulator;
    private accumulatorCount;
    private colspan_;
    private _writingTotal;
    private showTotalGroupIndicator_;
    private gSeq;
    private gIndex;
    visible: boolean;
    private remainContent;
    private remainHeaderContent;
    mergeDuplicatedValues: boolean;
    private mergeRecordCount_;
    private bufferStartIndexToMerge_;
    private lastValue_;
    private lastGroups_;
    private gId;
    link: Link;
    writeLinkPerRecord: boolean;
    column: number;
    displayFormat:
        | DateFormat
        | LatitudeFormat
        | LongitudeFormat
        | AngleFormat
        | string
        | number
        | null;
    breakLine: boolean;
    wordWrap: boolean;
    width: number | string | null;
    height: number | string | null;
    zoomMaxWidth: number;
    private zoomMaxWidth_;
    zoomMaxHeight: number;
    private zoomMaxHeight_;
    zoomOnHover: boolean;
    verticalAlign: string;
    textAlign: string;
    labelTextAlign: string;
    private labelTextAlign_;
    totalContent: string;
    totalLabel: string;
    hint: string;
    showGlobalActions: boolean;
    cssClass: string;
    css: string;
    labelCssClass: string;
    columnGroupHeaderCssClass: string;
    columnGroupHeaderClass: string;
    decimalPrecision: number;
    private numberFormatter_;
    classKey: number;
    showTotalLabel: boolean;
    showTotal: boolean;
    columnGroup: import("./ColumnGroup");
    checkIfMerge(values: { content: string | number | Date; groups: string }): boolean;
    private getAccumulatorLength;
    private resizeAccumulators;
    private createAccumulators;
    getAccumulator(index: number): any;
    private resetAccumulator;
    private getContentToWrite_;
    private hasGlobalActions_;
    private hasLinks_;
    canHaveGlobalActions(): boolean;
    getGlobalActionClassKey(opt_key?: number): number;
    getGlobalActionRegisterKey(opt_key?: number): number | null;
    private definedCssClasses_;
    private getCSSClasses_;
    private accumulate;
    private write;
    private writeTotal;
}
declare namespace Column {
    export {
        AngleFormat,
        ColumnWriteOptions,
        DateFormat,
        LatitudeFormat,
        Link,
        LongitudeFormat,
        TextAligns,
        VerticalAligns,
    };
}
import SimpleLayout = require("./SimpleLayout.js");
import LegacyEvent = require("@nginstack/engine/lib/event/LegacyEvent.js");
import LinkSet = require("../anchor/LinkSet.js");
declare namespace VerticalAligns {
    let TOP: string;
    let MIDDLE: string;
    let BOTTOM: string;
    let BASELINE: string;
}
type VerticalAligns = string;
declare namespace TextAligns {
    let LEFT: string;
    let RIGHT: string;
    let CENTER: string;
    let JUSTIFY: string;
    let INHERIT: string;
}
type TextAligns = string;
type LatitudeFormat = typeof import("@nginstack/engine/lib/geo/LatitudeFormat");
type LongitudeFormat = typeof import("@nginstack/engine/lib/geo/LongitudeFormat");
type AngleFormat = typeof import("@nginstack/engine/lib/geo/AngleFormat");
type DateFormat = typeof DateFormat;
type Link = import("../anchor/Link");
interface ColumnWriteOptions {
    linkParameters?: any[];
    storedParametersIds?: Record<string, string>;
    contentToAccumulate?: number;
    showTopLine?: boolean;
    showBottomLine?: boolean;
    renderContentAsHtml?: boolean;
    accumulate?: boolean;
    cssClass?: string;
    cssStyle?: Record<string, string>;
    tagAttributes?: Record<string, string>;
    totalContentWeight?: number;
    key?: number;
    beforeHtml?: string;
}
import DateFormat = require("@nginstack/engine/lib/date/DateFormat.js");
