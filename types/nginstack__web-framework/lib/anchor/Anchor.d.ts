export = Anchor;
declare function Anchor(
    name: any,
    nextInteractionNameOrFunction: any,
    nextProcessKey: any,
    createNewTab: any
): void;
declare class Anchor {
    constructor(
        name: any,
        nextInteractionNameOrFunction: any,
        nextProcessKey: any,
        createNewTab: any
    );
    private _changedProperties;
    name: string;
    onClick: LegacyEvent;
    private parameters_;
    params: {};
    private logger_;
    private collection;
    private index;
    parent: any;
    process: Process;
    config(nextInteractionNameOrFunction: any, nextProcessKey: any, createNewTab: any): void;
    createNewTab: boolean;
    nextInteractionName: string;
    nextProcessKey: number;
    private identifierName;
    private changed;
    private getParameters;
    private getProcessedParameters;
    label: string;
    hint: string;
    private last_parameters;
    private hasOnClickEvent;
    private accessible;
    enabled: boolean;
    permissionKeyWord: string;
    nextProcessId: string;
    validateLastInteraction: boolean;
    protected setChangedProperty(id: string, syncValue: any): void;
    private prepared;
    private _prepare;
    private getChanges;
    private _clearChangedProperties;
    private resettingProperties_;
    protected forcingChanges_(): boolean;
    private resetProperties;
    private setPropertiesDefaultValues;
    private convertParametersToParams;
    protected getParamsInfo(parametersValues: any): any[];
    clone(): Anchor;
    assign(obj: Anchor): void;
    private toString;
    private getParametersNames;
    protected propertiesToSync_: string[];
}
declare namespace Anchor {
    export { createProcess, Process };
}
import LegacyEvent = require('@nginstack/engine/lib/event/LegacyEvent.js');
type Process = import('../process/Process');
declare var createProcess: any;
