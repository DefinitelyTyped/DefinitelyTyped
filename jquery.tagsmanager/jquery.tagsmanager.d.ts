// Type definitions for jQuery Tags Manager
// Project: http://welldonethings.com/tags/manager
// Definitions by: https://github.com/vbortone
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface ITagsManagerOptions {
    prefilled?: any;
    CapitalizeFirstLetter?: bool;
    preventSubmitOnEnter?: bool;
    isClearInputOnEsc?: bool;
    typeahead?: bool;
    typeaheadAjaxSource?: string;
    typeaheadAjaxPolling?: bool;
    typeaheadDelegate?: Function;
    typeaheadOverrides?: ITypeaheadOverrides;
    typeaheadSource?: any;
    AjaxPush?: string; //url
    delimeters?: number[];
    backspace?: number[];
    maxTags?: number;
    blinkBGColor_1?: string;
    blinkBGColor_2?: string;
    hiddenTagListName?: string;
    hiddenTagListId?: string;
    deleteTagsOnBackspace?: bool;
    tagsContainer?: HTMLElement;
    tagCloseIcon?: string;
    tagClass?: string;
    validator?: Function;
}

interface ITypeaheadOverrides {
    instanceSelectHandler?: Function;
    selectedClass?: string;
    select?: Function;
}

interface ITagsManager {
    tagManagerOptions: ITagsManagerOptions;
    obj: JQuery;
    objName: string;
    queuedTag: string;
    delimeters: number[];
    backspace: number[];
    tagToManipulate: string;

    initialize(context: JQuery,
               options?: ITagsManagerOptions,
               tagToManipulate?: string): void;
    setupTypeahead(): void;
    onTypeaheadAjaxSuccess(data: any, isSetTypeaheadSource: bool, process?: Function): void;
    ajaxPolling(query: string, process: Function): void;
    setTypeaheadSource(source: any): void;
    trimTag(tag: string): string;
    popTag(): void;
    empty(): void;
    refreshHiddenTagList(): void;
    spliceTag(tagId: number, eventData: any): void;
    pushTag(tag: string, objToPush: any, isValid: bool): void;

    setOptions(options: ITagsManagerOptions): void;
    setContext(context: JQuery, tagToManipulate?: string): void;
    processCommand(context: JQuery, command: string, tagToManipulate?: string): JQuery;
    processTags(command?: string, context?: JQuery, tagToManipulate?: string): JQuery;
}

interface JQuery {
	tagsManager(options?: ITagsManagerOptions): JQuery;
	tagsManager(command: string, tagToManipulate?: string): JQuery;
}
