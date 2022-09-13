export = Process;
declare function Process(
    key: number,
    id: string,
    responseObject: any,
    sourceClass: number | DBKey
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
    layoutManager: LayoutManager;
    private _simpleLayouts;
    private labels;
    private requiredFiles_;
    private reservedWords;
    private _pendingOperations;
    key: number;
    dbkey: DBKey;
    uri: string;
    sourceClass: DBKey;
    version: number;
    permissionKeyWords: any[];
    id: string;
    response: any;
    private pairName_;
    private componentFactoryResolver_;
    private scrollX_;
    private scrollY_;
    bodyClassName: string;
    private dsLookup;
    private uploadDialog_;
    private fileLoader_;
    private clearHistoryFlag;
    getLinks(): Record<string, Link>;
    simpleLayoutOutputHandler: any;
    currentInteraction: Interaction;
    lastInteraction: Interaction;
    private canRun;
    canExport: boolean;
    disableSaveInputAsDefault: boolean;
    private inConstructor;
    private historyEnabled;
    private recentlyCreated;
    private alreadyFocusOnGrid;
    private hasFieldToFocus;
    private anchorsChanged;
    private labelsChanged;
    private syncInteractionName;
    private realTitle;
    gridToFocus: Grid;
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
    private idsvKey;
    useLayoutManager: boolean;
    help: Record<any, any> | string;
    private letFetchProcessInfo;
    lookup(field: GridField): void;
    private _prepareLookupGrid;
    write(content: any): void;
    requires(uri: string): void;
    private writeRequiredFiles;
    grid(name: string, opt_ds?: DataSet, opt_classKey?: number, opt_masterGrid?: Grid): Grid;
    deleteGrid(name: string): boolean;
    link(
        name: string,
        nextInteractionNameOrFunction?: string | ((arg0: any) => any),
        processKey?: number,
        newTab?: boolean
    ): Link;
    dsvLink(name: string, dsvKey: number, opt_newTab?: boolean): any;
    button(
        name: string,
        target: string | ((arg0: any) => any),
        order?: number,
        processKey?: number,
        newTab?: boolean
    ): Button;
    hasButton(name: string): boolean;
    action(
        name: any,
        target: any,
        order: any,
        processKey: any,
        newTab: any
    ): import('../button/Button');
    clearButtons(): void;
    clearActions(): void;
    label(name: string, opt_text?: string): import('../label/Label');
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
        opt_newTab?: boolean
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
    private interactionWasWritten_;
    private ping;
    private handleExecuteAnchor;
    private handleGetLinkFieldNameParamsAndGo;
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
    getSimpleLayout(skinScriptKeyOrUrl: any): SimpleLayout;
    layoutResponseObject: File | Spool;
    private handleIfpFunctionsLength;
    private handleIfpFunctions;
    private closeLookupGrid;
    private getSelectedKeysOfLookup;
    private setStatusMessage;
    private setCtrlMessage;
    private setEvaluateCode;
    title: string;
    getFileId(filePathOrVfsKey: any, displayFileName: any): string;
    alert(message: string, title: any): any;
    showProgress(currentStep: number, maxStep: number, label: string): void;
    private hideProgress;
    prompt(
        label: string,
        answers: any[][],
        opt_verticalAlign?: number,
        opt_defaultOptionIndex?: number,
        opt_escapeIndex?: number
    ): any;
    authenticateUser(label: string): number | null;
    confirm(msg: string, opt_noAsDefault?: boolean): boolean;
    upload(options?: import('../file-loader/UploadOptions')): any;
    download(
        files: string | number | DBKey | Array<string | number | DBKey>,
        options?: DownloadOptions | Record<any, any>
    ): void;
    status: string;
    clearHistory(): void;
    close(): void;
    closeTab(opt_targetTabId?: number): void;
    private _checkGridsAndConfirmCancel;
    private _declareDefaultButtons;
    private _backButton;
    private _forwardButton;
    private translateButtonList;
    private setButtonsProperty;
    private setVisibleButtonsByButtonsArray;
    visibleButtons: Array<Button | string>;
    visibleActions: Array<Button | string>;
    private setButtonsStateByArray;
    enabledButtons: Array<Button | string>;
    enabledActions: any;
    private _createButtonAndLinkIt;
    private updateTaskCounter;
    hasPermission(permissionKeyWord: string): boolean;
    private _hasPermissionToInteraction;
    private toString;
    private _getChanges;
    private getGridCount;
    private defineGrids;
    private defineAllGrids;
    private _prepareConnection;
    private _unprepareConnection;
    private getChildrenJustToGroup;
    immediateRedirectEnabled: boolean;
    private redirectIfInteractionWasChanged;
    private logger_;
    beep(): void;
    private actions;
    private act_preserveScrollPosition_;
    private act_showHelp_;
}
declare namespace Process {
    export {
        getProcessTitle,
        getSourceAndInclude,
        create,
        Button,
        Grid,
        Link,
        GridField,
        UploadedFile,
    };
}
import DBKey = require('@nginstack/engine/lib/dbkey/DBKey.js');
import Environment = require('../environment/Environment.js');
import LayoutManager = require('./LayoutManager.js');
type Link = import('../anchor/Link');
import Interaction = require('./Interaction.js');
type Grid = import('../grid/Grid');
type GridField = import('../grid/GridField');
import DataSet = require('@nginstack/engine/lib/dataset/DataSet.js');
type Button = import('../button/Button');
import SimpleLayout = require('../simple-layout/SimpleLayout.js');
import File = require('@nginstack/engine/lib/io/File.js');
import Spool = require('@nginstack/engine/lib/print/Spool.js');
import DownloadOptions = require('../file-loader/DownloadOptions.js');
declare function getProcessTitle(key: number, processName: string): string;
declare function getSourceAndInclude(key: number): any[];
declare function create(keyOrUrl: any, sourceClassKey: any): Process;
type UploadedFile = import('../file-loader/UploadedFile');
