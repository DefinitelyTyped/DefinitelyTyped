export = SimpleLayout;
declare function SimpleLayout(responseObject: any, ...args: any[]): void;
declare class SimpleLayout {
    constructor(responseObject: any, ...args: any[]);
    responseObject: any;
    private _groupsToResultSet;
    private treeRows_;
    private buffer_;
    private arGroups;
    private arColumns;
    private currentGroupCountBeforeDynamicFields_;
    private columnsWithMerge_;
    private arAccumulators;
    private columnsTotalByGroupId;
    recordColors: string[];
    groupColors: any[];
    private currentGroupCount;
    layout: LayoutConfig;
    groups: StringList;
    columns: StringList;
    onCss: import("@nginstack/engine/lib/event/Event");
    header: Header;
    onHeader: import("@nginstack/engine/lib/event/Event");
    footer: Footer;
    onFooter: import("@nginstack/engine/lib/event/Event");
    private logger_;
    process: Process | Email;
    private lastColumnsBuffer;
    private buffering;
    private lastGroupLength_;
    private unloadingBuffer;
    private colsAuto;
    private hasRemainContent;
    private currentPage;
    private startPage;
    private endPage;
    private emptyDataSet;
    private firstRecord;
    private recordCount;
    private countSeqColumn;
    private calculatedWidth;
    private layoutTxtWidth;
    private topMargin;
    private bottomMargin;
    private leftMargin;
    private rightMargin;
    private firstLineToFooter;
    private height;
    private indexColumn;
    private initializationChars;
    private lineBlack;
    private showTopLine;
    private showBottomLine;
    showTreeRoot: boolean;
    resultSet: DataSet;
    dataExporter: any;
    treeExpansionLevel: number;
    stickColumnLabels: boolean;
    private mailMessage_;
    private showFooterTopLine_;
    footerImage: number | null;
    logoInteq: number;
    private currentGroupId;
    private currentGroupIndex;
    private withTotal;
    private totalLabel;
    private totalWasWritten_;
    private started;
    private textPrinterDriver;
    ignoreTxtPrinterInitializationChars: boolean;
    private layoutTxtGrid;
    variableGrid: Grid;
    filters: FilterDef[];
    title: string;
    baseFontSize: string;
    printFontSize: string;
    columnPadding: string;
    negativeInRed: boolean;
    showUserAndDataBaseName: boolean;
    showVariables: boolean;
    showOnlyFilledVariables: boolean;
    filtersDisplay: {
        FILLED: string;
        ALL: string;
        NONE: string;
    };
    showDateTime: boolean;
    showEnterpriseName: boolean;
    showHeader: boolean;
    showFooter: boolean;
    groupExpansionLevel: number;
    headerComplement: string | null;
    footerComplement: string | null;
    enterpriseLogo: number;
    showPath: boolean;
    showHeaderAlwaysOnTop: boolean;
    width: string;
    private availableWidth;
    enterpriseName: any;
    private columnSpansAndBreakLinesWereDefined_;
    includeCss: boolean;
    mustIncludeCssFiles: boolean;
    staticMode: boolean;
    private staticMode_;
    autoSanitize: boolean;
    private autoSanitize_;
    private isTreeLayout;
    writingEmail: boolean;
    private getEmailObject;
    private nextColumnWithTotalContent;
    private getRowCssConfig_;
    private getGroupCssConfig_;
    private defineColumnSpansAndBreakLines_;
    private startOrEndGroup;
    private endRecord;
    private _formatCustomColumnPaddingCss;
    private _formatCustomFontSizeCss;
    private setColumnHeader;
    private writeColumnsHeader;
    private internalNewRecord;
    newTreeRecord(
        nodeId: number | string,
        parentNodeId: number | string,
        collapsed?: boolean,
    ): void;
    newRecord(
        checkGroup?: any[],
        groupTotalLabel?: any[],
        showTopLine?: boolean,
        showBottomLine?: boolean,
        treeNodeId?: number | string,
        parentTreeNodeId?: number | string,
        patterns?: string[],
    ): boolean;
    private start;
    private MAX_FILTER_VALUE_;
    private formatFiltersToHeader_;
    private defaultOnHeader;
    path: string;
    private path_;
    private defaultOnFooter;
    write(content: string, newLine?: boolean): void;
    private setupLayoutTxt;
    private _prepareExport;
    private _addGroupField;
    private _fillResultSet;
    reset(resetColumnsAndGroups: boolean): void;
    private resetTreeInfo;
    group(name: string, link: Link, displayFormat: string): Column;
    column(name: string, options?: any): Column;
    private newLine;
    lineCount: any;
    private clearColumnsAccumulatorsAndLastContent;
    private unloadBuffer;
    private writeBufferedRow_;
    private writeBufferedGroup_;
    private mustHaveBuffer_;
    private resizeGroups;
    private internalWriteColumn;
    private treeWriteColumn;
    private getCurrentColumnToWrite_;
    private mergeDuplicated_;
    writeColumn(
        content: string | number | Date,
        options?: {
            contentToAccumulate?: number;
            cssClass?: string | string[];
            cssStyle?: Record<string, string>;
            tagAttributes?: Record<string, string>;
            showTopLine?: boolean;
            showBottomLine?: boolean;
            renderContentAsHtml?: boolean;
            totalContentWeight?: number;
            key?: number;
        },
        ...args: any[]
    ): void;
    writeLink(
        content: string | number | Date,
        linkParameters?: any[],
        contentToAccumulate?: number,
        css?: string,
        showTopLine?: boolean,
        showBottomLine?: boolean,
        convertToHtmlString?: boolean,
    ): void;
    writeImage(uri: number | string, options?: number | Record<any, any>): void;
    formatImageTag(
        uri: number | string,
        options?: {
            style?: string;
            id?: string;
            cssClass?: string;
        },
    ): string;
    writeIcon(icon: string, options?: number | Record<any, any>): void;
    formatIconTag(icon: string): string;
    private formatToggle_;
    breakPage(): void;
    private writeTreeRow_;
    private writeTreeRows_;
    end(totalLabel?: any, messageWhenEmpty?: any, resetColumns?: any): void;
    close(): void;
    private accumulator;
    stats(): SimpleLayoutStats;
}
declare namespace SimpleLayout {
    export {
        columnsTotalByGroupId,
        ColumnWriteOptions,
        defaults,
        Event,
        FilterDef,
        formatCssStyle,
        Grid,
        Process,
        SimpleLayoutStats,
        TreeRow,
        TreeRowColumn,
    };
}
import LayoutConfig = require("../process/LayoutConfig.js");
import StringList = require("@nginstack/engine/lib/string/StringList.js");
import Header = require("./Header.js");
import Footer = require("./Footer.js");
import Email = require("@nginstack/engine/lib/email/Email.js");
import DataSet = require("@nginstack/engine/lib/dataset/DataSet.js");
import Link = require("../anchor/Link.js");
import Column = require("./Column.js");
declare let columnsTotalByGroupId: any;
declare let defaults: {};
declare function formatCssStyle(options?: {
    theme?: number | DBKey;
    colorScheme?: number | DBKey;
    userKey?: number | DBKey;
    media?: string;
}): string;
type Event = import("@nginstack/engine/lib/event/Event");
type Grid = import("../grid/Grid");
type Process = import("../process/Process.js");
type ColumnWriteOptions = import("./Column.js").ColumnWriteOptions;
interface FilterDef {
    label: string;
    group: string;
    value: any;
}
interface TreeRowColumn {
    content: any;
    writeOptions: ColumnWriteOptions[];
}
interface TreeRow {
    rowId: string;
    parentId: string;
    collapsed: boolean | null;
    columns: TreeRowColumn[];
    visible: boolean;
    level: number;
    useDarkStripe: boolean;
    children: TreeRow[];
    nextChildIdx: number;
}
interface SimpleLayoutStats {
    bufferLength: any;
}
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");
