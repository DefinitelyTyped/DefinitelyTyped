export = Process;
declare function Process(
    key: number,
    id: string,
    responseObject: any,
    sourceClass: number | DBKey,
): void;
declare class Process {
    constructor(key: number, id: string, responseObject: any, sourceClass: number | DBKey);
    environment: Environment;
    private _ctrlChannel;
    cssFiles: any[];
    private grids;
    userKeyToValidatePermissions: number;
    private writtenGridsInCurrentInteraction_;
    private links_;
    private buttons;
    private arButtons;
    private arActivities;
    private activities;
    private _changes;
    private layoutManager;
    private _simpleLayouts;
    private labels;
    private requiredFiles_;
    private reservedWords;
    private _pendingOperations;
    key: number;
    dbkey: DBKey;
    uri: string;
    sourceClass: number | DBKey;
    private version;
    permissionKeyWords: string[];
    id: string;
    response: any;
    menuPath: string;
    private logger_;
    private pairName_;
    private componentFactoryResolver_;
    private scrollX_;
    private scrollY_;
    bodyClassName: string;
    private defaultButton;
    private dsLookup;
    private grLookup;
    private uploadDialog_;
    private fileLoader_;
    private clearHistoryFlag;
    simpleLayoutOutputHandler: any;
    currentInteraction: Interaction;
    lastInteraction: Interaction;
    private canRun;
    canExport: boolean;
    disableSaveInputAsDefault: boolean;
    private inConstructor;
    private historyEnabled;
    private recentlyCreated;
    private buttonsChanged;
    private labelsChanged;
    private syncInteractionName;
    private realTitle;
    private resendUiObjectsChanges;
    name: string;
    pId: string;
    workloadType: string;
    currentTabId: number;
    private isLayout;
    private _priorConnectionParams;
    private haveNextActivity;
    private nextActivityName;
    private nextActivityParameters;
    private nextCreateNewTab;
    private nextProcessKey;
    private nextProcessId;
    private initializingDocument_;
    private progressStarted;
    private lastPercentProgress;
    private lastLabelProgress;
    private lastMaxStep;
    private refreshingGrids_;
    private idsvKey_;
    useLayoutManager: boolean;
    help: Record<any, any> | string;
    private actions;
    getLinks(): Record<string, Link>;
    lookup(field: GridField): void;
    private _prepareLookupGrid;
    write(content: any): void;
    canDoHistory: boolean;
    requires(uri: string): void;
    private writeRequiredFiles;
    grid(name: string, opt_ds?: DataSet, opt_classKey?: number, opt_masterGrid?: Grid): Grid;
    findGrid(name: string): Grid;
    deleteGrid(name: string): boolean;
    link(
        name: string,
        nextInteractionNameOrFunction?: string | ((arg0: any) => any),
        processKey?: number,
        newTab?: boolean,
    ): Link;
    dsvLink(name: string, dsvKey: number, opt_newTab?: boolean): any;
    button(
        name: string,
        target: string | ((arg0: any) => any),
        order?: number,
        processKey?: number,
        newTab?: boolean,
    ): Button;
    hasButton(name: string): boolean;
    action(name: any, target: any, order: any, processKey: any, newTab: any): Button;
    clearButtons(): void;
    clearActions(): void;
    label(name: string, opt_text?: string): import("../label/Label");
    interaction(
        name: string,
        func: (this: Process) => any,
        opt_permKeyWord?: string,
        opt_exitFunc?: (arg0: any) => any,
        ...args: any[]
    ): Interaction;
    activity(
        name: string,
        func: (this: Process) => any,
        opt_permKeyWord?: string,
        opt_exitFunc?: (arg0: any) => any,
        ...args: any[]
    ): Interaction;
    private setNextActivity;
    setNextInteraction(
        activityName: string,
        opt_params?: any[],
        opt_processKey?: number,
        opt_processId?: number,
        opt_newTab?: boolean,
    ): void;
    private clearNextInteractionInfo;
    private handleGridSynchronize;
    private sortButtons;
    private syncButtons;
    private resetUiObjectsProperties;
    private getButtonsChanges;
    private getLinksChanges;
    canWriteScripts: boolean;
    private getLabelChanges;
    private handleGridAction;
    private validateRequiredInputOfLastInteraction;
    private postAllWrittenGridDataSetsInCurrentInteraction_;
    private handleInitialSynchronize;
    private ping;
    private handleExecuteLink;
    private handleExecuteButton;
    private handleIfp;
    private addGridToWriteOnCurrentInteraction;
    private _insensitiveCompare;
    private removeDetailGridsFromWriteOnCurrentInteraction;
    private checkWordAvailability;
    private setParameters;
    private resetNextState;
    private prepare;
    lastRunParameters: any;
    private updateConnectionReferrer;
    private run;
    getSimpleLayout(...args: any[]): SimpleLayout;
    private handleIfpFunctionsLength;
    private handleIfpFunctions;
    private closeLookupGrid;
    private getSelectedKeysOfLookup;
    private setStatusMessage;
    private setCtrlMessage;
    private setEvaluateCode;
    title: string;
    getFileId(filePathOrVfsKey: any, displayFileName: any): string;
    alert(message: string): void;
    showProgress(currentStep: number, maxStep: number, label: string): void;
    private hideProgress;
    prompt(label: string, answers: any[][], options: PromptOptions, ...args: any[]): any;
    authenticateUser(label: string): number | null;
    confirm(msg: string, opt_noAsDefault?: boolean): boolean;
    upload(options?: import("../file-loader/UploadOptions")): Promise;
    download(
        files: string | number | DBKey | Array<string | number | DBKey>,
        options?: DownloadOptions | Record<any, any>,
    ): void;
    status: string;
    clearHistory(): void;
    close(): void;
    closeTab(opt_targetTabId?: number): void;
    private _checkGridsAndConfirmCancel;
    handleHistoryNavigation(args: any): any[];
    private translateButtonList;
    private setButtonsProperty;
    private setVisibleButtonsByButtonsArray;
    visibleButtons: Array<Button | string>;
    visibleActions: Array<Button | string>;
    private setButtonsStateByArray;
    enabledButtons: Array<Button | string>;
    enabledActions: Array<Button | string>;
    private _createButtonAndLinkIt;
    updateTaskCounter(): void;
    hasPermission(permissionKeyWord: string): boolean;
    private _hasPermissionToInteraction;
    private toString;
    private _getChanges;
    private getGridCount;
    private defineGrids;
    private defineAllGrids;
    private _prepareConnection;
    private _unprepareConnection;
    immediateRedirectEnabled: boolean;
    private redirectIfInteractionWasChanged;
    getVisibleGridNames(): string;
    beep(): void;
    loadModule(path: string): void;
    private act_preserveScrollPosition_;
}
declare namespace Process {
    export {
        Button,
        create,
        getProcessTitle,
        getSourceAndInclude,
        Grid,
        GridField,
        Label,
        Link,
        PromptOptions,
        UploadedFile,
    };
}
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");
import Environment = require("../environment/Environment.js");
import Interaction = require("./Interaction.js");
import DataSet = require("@nginstack/engine/lib/dataset/DataSet.js");
import SimpleLayout = require("../simple-layout/SimpleLayout.js");
import Promise = require("../promise/Promise.js");
import DownloadOptions = require("../file-loader/DownloadOptions.js");
declare function getProcessTitle(key: number, processName: string): string;
declare function getSourceAndInclude(key: number): any[];
declare function create(keyOrUrl: any, sourceClassKey: any): Process;
type Button = import("../button/Button");
type Grid = import("../grid/Grid");
type Link = import("../anchor/Link");
type GridField = import("../grid/GridField");
type UploadedFile = import("../file-loader/UploadedFile");
type Label = import("../label/Label.js");
interface PromptOptions {
    defaultIndex?: number;
    cancelReturnValue?: any;
}
