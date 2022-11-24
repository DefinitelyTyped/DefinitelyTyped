export = SimpleLayout;
declare function SimpleLayout(responseObject: any, skinScriptKeyOrUrl: number | string): void;
declare class SimpleLayout {
    constructor(responseObject: any, skinScriptKeyOrUrl: number | string);
    responseObject: any;
    private _groupsToResultSet;
    private arRowData;
    private arData;
    private buffer_;
    private arGroups;
    private arColumns;
    private currentGroupCountBeforeDynamicFields_;
    private columnsWithMerge_;
    private arAccumulators;
    private columnsTotalByGroupId;
    recordColors: any[];
    groupColors: any[];
    private currentGroupCount;
    groups: StringList;
    columns: StringList;
    onCss: Event;
    header: Header;
    onHeader: Event;
    footer: Footer;
    onFooter: Event;
    process: any;
    private cssExtractor_;
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
    private showLineTop;
    private showLineBottom;
    private collapsed;
    private collapsedRows;
    private currentNodeId;
    private currentParentNodeId;
    showTreeRoot: boolean;
    resultSet: DataSet;
    dataExporter: any;
    treeExpansionLevel: number;
    private treeColumnIndex_;
    treeRecordCount: number;
    treeStarted: boolean;
    buttonWidth: number;
    footerImage: number | null;
    logoInteq: number;
    private currentGroupId;
    private currentGroupIndex;
    private withTotal;
    private totalLabel;
    private totalWasWritten_;
    private started;
    private textPrinterDriver;
    private layoutTxtGrid;
    variableGrid: Grid;
    filters: Array<{
        label: string;
        group: string;
        value: any;
    }>;
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
    autoSanitize: boolean;
    private autoSanitize_;
    private cssContentForMail_;
    private isTreeLayout;
    writingMail: boolean;
    private getMailObject;
    private nextColumnWithTotalContent;
    private startOrEndGroup;
    private endRecord;
    private _formatCustomColumnPaddingCss;
    private _formatCustomFontSizeCss;
    mustIncludeCssFiles: boolean;
    private defaultOnCss;
    private setColumnHeader;
    private writeColumnsHeader;
    private internalNewRecord;
    newTreeRecord(treeNodeId: number, parentTreeNodeId: number, opt_collapsed?: boolean): void;
    newRecord(
        opt_checkGroup?: any[],
        opt_groupTotalLabel?: any[],
        opt_showLineTop?: boolean,
        opt_showLineBottom?: boolean,
        opt_treeNodeId?: number,
        opt_parentTreeNodeId?: number,
        opt_patterns?: string[]
    ): boolean | void;
    private start;
    private mailMessage_;
    private _layoutId;
    private MAX_FILTER_VALUE_;
    private formatFiltersToHeader_;
    private defaultOnHeader;
    path: string;
    private defaultOnFooter;
    private _prepareImgTagsToSendMail;
    write(content: string, opt_newLine?: boolean): void;
    private setupLayoutTxt;
    private _prepareExport;
    private _addGroupField;
    private _fillResultSet;
    reset(resetColumnsAndGroups: boolean): void;
    group(name: string, link: Link, displayFormat: string): any;
    column(name: string, options?: any): Column;
    private newLine;
    lineCount: any;
    private clearColumnsAccumulatorsAndLastContent;
    private unloadBuffer;
    private prepareWriteFromBuffer;
    private mustHaveBuffer_;
    private resizeGroups;
    private treeBegin;
    private treeNewRecord;
    private internalWriteColumn;
    private treeWriteColumn;
    private treeWriteLink;
    private getCurrentColumnToWrite_;
    private mergeDuplicated_;
    writeColumn(
        content: string | number | Date,
        opt_options?: {
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
        opt_linkParameters?: any[],
        opt_contentToAccumulate?: number,
        opt_css?: string,
        opt_showLineTop?: boolean,
        opt_showLineBottom?: boolean,
        opt_convertToHtmlString?: boolean
    ): void;
    writeImage(uri: number | string, opt_options?: number | Record<any, any>): void;
    formatImageTag(
        uri: number | string,
        opt_options?: {
            style?: string;
            id?: string;
            cssClass?: string;
        }
    ): string;
    breakPage(): void;
    private treeWriteRow;
    private treeEnd;
    end(totalLabel?: any, messageWhenEmpty?: any, resetColumns?: any): void;
    close(): void;
    private accumulator;
    private resetTreeInfo;
    private formatClassAttr_;
    stats(): SimpleLayoutStats;
}
declare namespace SimpleLayout {
    export { LAYOUT_COUNT, columnsTotalByGroupId, defaults, Event, Grid, SimpleLayoutStats };
}
import StringList = require('@nginstack/engine/lib/string/StringList.js');
type Event = import('@nginstack/engine/lib/event/Event');
import Header = require('./Header.js');
import Footer = require('./Footer.js');
import DataSet = require('@nginstack/engine/lib/dataset/DataSet.js');
type Grid = import('../grid/Grid');
import Link = require('../anchor/Link.js');
import Column = require('./Column.js');
interface SimpleLayoutStats {
    bufferLength: any;
}
declare var LAYOUT_COUNT: number;
declare var columnsTotalByGroupId: any;
declare var defaults: {};
