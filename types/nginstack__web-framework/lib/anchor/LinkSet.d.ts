export = LinkSet;
declare function LinkSet(attachedTo: ViewDefField | Column, process: Process): void;
declare class LinkSet {
    constructor(attachedTo: ViewDefField | Column, process: Process);
    process: import("../process/Process.js");
    private attachedTo_;
    links: Array<import("./Link.js")>;
    private propertiesToAssign_;
    private pairName_;
    size: number;
    at(position: number): Link;
    alwaysShowMenu: boolean;
    private addLink_;
    private createItem_;
    private act_showMenu_;
    isAttachedTo(value: any): boolean;
    add(value: Link | Link[]): void;
    clear(): void;
    storeParameters(openParameterValues?: any[]): Record<string, string>;
    private clone;
    private assign;
    getFieldLinkSetData(bookmark: any): FieldLinkSetData;
    formatHtml(
        content: string,
        openParameterValues?: any[],
        options?: {
            cssClass?: string;
            cssStyle?: Record<string, string>;
            key?: number;
            storedParametersIds?: Record<string, string>;
        },
    ): string;
    private getHtml;
    private getImgHtml;
}
declare namespace LinkSet {
    export { Column, FieldLinkSetData, Link, LinkSetConfig, LinkSetItem, Process, ViewDefField };
}
type Column = import("../simple-layout/Column.js");
type Process = import("../process/Process.js");
type Link = import("./Link.js");
type ViewDefField = import("../classdef/ViewDefField.js");
interface LinkSetItem {
    name: string;
    caption: string;
    rowId: number;
}
interface LinkSetConfig {
    bookmark: number;
    storedParametersIds: string;
    hint?: string;
}
interface FieldLinkSetData {
    componentId: string;
    config: LinkSetConfig;
}
