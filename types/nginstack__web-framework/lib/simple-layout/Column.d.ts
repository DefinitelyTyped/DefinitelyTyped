export = Column;
declare function Column(simpleLayout: SimpleLayout, name: string, options?: any): void;
declare class Column {
    constructor(simpleLayout: SimpleLayout, name: string, options?: any);
    simpleLayout: SimpleLayout;
    name: string;
    label: string;
    negativeInRed: boolean;
    onTotal: LegacyEvent;
    lookupType: number;
    type: string | null;
    private hasType;
    private _defineLinks;
    links: AnchorCollection;
    lastContent: string | number | Date;
    private group;
    private accumulator;
    private accumulatorCount;
    private colspan;
    private _writingTotal;
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
    checkIfMerge(values: { content: string | number | Date; groups: string }): boolean;
    private gId;
    link: Link;
    writeLinkPerRecord: boolean;
    labelCssClass: string;
    columnGroupHeaderClass: string;
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
    zoomMaxWidth: number | string;
    zoomMaxHeight: number | string;
    zoomOnHover: boolean;
    verticalAlign: string;
    textAlign: string;
    totalContent: string;
    totalLabel: string;
    hint: string;
    cssClass: string;
    showGlobalActions: boolean;
    css: string;
    decimalPrecision: number;
    private numberFormatter_;
    classKey: number;
    showTotalLabel: boolean;
    showTotal: boolean;
    private cssExtractor_;
    setCssExtractor(value: CssExtractor): void;
    columnGroup: import('./ColumnGroup');
    private getHtmlForLinks_;
    private getAccumulatorLength;
    private resizeAccumulators;
    private createAccumulators;
    getAccumulator(index: number): any;
    private resetAccumulator;
    private getContentToWrite_;
    private hasGlobalActions_;
    private hasLinks_;
    private canHaveGlobalActions;
    getGlobalActionClassKey(opt_key?: number): number;
    getGlobalActionRegisterKey(opt_key?: number): number | null;
    private definedCssClasses_;
    private getCSSClassesFromType_;
    private getCSSClasses_;
    private getCssClassAttribute_;
    private _getLinkParameters;
    private accumulate;
    private write;
    private writeTotal;
}
declare namespace Column {
    export {
        VerticalAligns,
        TextAligns,
        LatitudeFormat,
        LongitudeFormat,
        AngleFormat,
        DateFormat,
        Link,
    };
}
import SimpleLayout = require('./SimpleLayout.js');
import LegacyEvent = require('@nginstack/engine/lib/event/LegacyEvent.js');
import AnchorCollection = require('../anchor/AnchorCollection.js');
type Link = import('../anchor/Link');
import DateFormat = require('@nginstack/engine/lib/date/DateFormat.js');
type LatitudeFormat = typeof import('@nginstack/engine/lib/geo/LatitudeFormat');
type LongitudeFormat = typeof import('@nginstack/engine/lib/geo/LongitudeFormat');
type AngleFormat = typeof import('@nginstack/engine/lib/geo/AngleFormat');
import CssExtractor = require('../css/CssExtractor.js');
declare namespace VerticalAligns {
    const TOP: string;
    const MIDDLE: string;
    const BOTTOM: string;
    const BASELINE: string;
}
type VerticalAligns = string;
declare namespace TextAligns {
    const LEFT: string;
    const RIGHT: string;
    const CENTER: string;
    const JUSTIFY: string;
    const INHERIT: string;
}
type TextAligns = string;
type DateFormat = typeof DateFormat;
