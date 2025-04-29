export = Link;
declare function Link(
    name: string,
    target: string | ((arg0: any) => any),
    processKey?: number,
    newTab?: boolean,
): void;
declare class Link {
    constructor(
        name: string,
        target: string | ((arg0: any) => any),
        processKey?: number,
        newTab?: boolean,
    );
    private syncCommands_;
    name: string;
    layout: LayoutConfig;
    onClick: LegacyEvent;
    private parameters;
    params: Record<string, string | number | boolean | Date>;
    enabled: boolean;
    parametersStorage_: ParametersStorage;
    private paramsFieldNames_;
    private logger_;
    private changed_;
    private propertiesToAssign_;
    private propertiesToSync_;
    private linkSet;
    private prepared_;
    private resettingProperties_;
    private written_;
    createNewTab: boolean;
    nextInteractionName: string;
    nextProcessKey: number;
    nextProcessId: string;
    validateLastInteraction: boolean;
    parent: Field | Column;
    process: Process;
    autoSanitize: boolean;
    cssClass: string;
    private name_;
    private identifierName;
    private identifierName_;
    label: string;
    private label_;
    hint: string;
    private hint_;
    private enabled_;
    size: string;
    private size_;
    permissionKeyWord: string;
    private permissionKeyWord_;
    srcId: string;
    private srcId_;
    paramsFieldNames: string[];
    private updateParamValue_;
    private addToSync_;
    private config_;
    private forcingChanges_;
    private resetProperties;
    storeParameters(openParameterValues?: any[]): string;
    restoreParameters(storedParametersId: string): void;
    clone(): Link;
    assign(obj: Link): void;
    private prepare;
    getHtml(content: string, parametersValue?: string, cssClass?: string): string;
    write(content: string, parametersValue?: string, cssClass?: string): string;
    private writeToClient;
    updateFieldParams(rowId: number): void;
    private getChanges;
    private updateOpenParameters_;
    private toString;
}
declare namespace Link {
    export { Column, createProcess, Process };
}
import LayoutConfig = require("../process/LayoutConfig.js");
import LegacyEvent = require("@nginstack/engine/lib/event/LegacyEvent.js");
import ParametersStorage = require("./ParametersStorage.js");
import Field = require("@nginstack/engine/lib/classdef/Field.js");
declare let createProcess: any;
type Column = import("../simple-layout/Column.js");
type Process = import("../process/Process.js");
