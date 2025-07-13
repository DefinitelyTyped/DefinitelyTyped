export = Button;
declare function Button(
    name: string,
    target: string | ((arg0: any) => any),
    processKey?: number,
    newTab?: boolean,
): void;
declare class Button {
    constructor(
        name: string,
        target: string | ((arg0: any) => any),
        processKey?: number,
        newTab?: boolean,
    );
    private syncCommands_;
    private parameters_;
    name: string;
    onClick: LegacyEvent;
    params: Record<string, string | number | boolean | Date>;
    order: number;
    label: string;
    visible: boolean;
    enabled: boolean;
    timer: ButtonTimer;
    private logger_;
    private resettingProperties_;
    private prepared_;
    private grid;
    private propertiesToAssign_;
    private propertiesToSync_;
    icon: number;
    disabledIcon: number;
    parent: Process | Grid;
    process: Process;
    createNewTab: boolean;
    nextInteractionName: string;
    nextProcessKey: number;
    nextProcessId: string;
    validateLastInteraction: boolean;
    private changed;
    private changed_;
    parameters: Array<Array<string | number | boolean | Date | null>>;
    hint: string;
    private hint_;
    private enabled_;
    permissionKeyWord: string;
    private permissionKeyWord_;
    private visible_;
    accessKey: string;
    private accessKey_;
    private order_;
    private name_;
    private label_;
    timeout: number;
    defaultAction: boolean;
    defaultButton: boolean;
    minSelectedRecords: number;
    private minSelectedRecords_;
    maxSelectedRecords: number;
    private maxSelectedRecords_;
    help: string;
    private help_;
    private getProcessedParameters;
    private addToSync;
    private config;
    private prepare;
    protected forcingChanges_(): boolean;
    private resetProperties;
    clone(): Button;
    assign(obj: Button): void;
    private extractAccessKey_;
    private toString;
    private checkMandatoryVisible_;
    private getMandatoryVisible;
    enable(): void;
    disable(): void;
    hide(): void;
    show(): void;
    private getChanges;
}
declare namespace Button {
    export { createProcess, Grid, Process };
}
import LegacyEvent = require("@nginstack/engine/lib/event/LegacyEvent.js");
import ButtonTimer = require("./ButtonTimer.js");
declare let createProcess: any;
type Process = import("../process/Process.js");
type Grid = import("../grid/Grid.js");
