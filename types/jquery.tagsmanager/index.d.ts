/// <reference types="jquery"/>

interface ITagsManagerOptions {
    prefilled?: any;
    CapitalizeFirstLetter?: boolean | undefined;
    preventSubmitOnEnter?: boolean | undefined;
    isClearInputOnEsc?: boolean | undefined;
    typeahead?: boolean | undefined;
    typeaheadAjaxSource?: string | undefined;
    typeaheadAjaxPolling?: boolean | undefined;
    typeaheadDelegate?: Function | undefined;
    typeaheadOverrides?: ITypeaheadOverrides | undefined;
    typeaheadSource?: any;
    AjaxPush?: string | undefined; // url
    delimeters?: number[] | undefined;
    backspace?: number[] | undefined;
    maxTags?: number | undefined;
    blinkBGColor_1?: string | undefined;
    blinkBGColor_2?: string | undefined;
    hiddenTagListName?: string | undefined;
    hiddenTagListId?: string | undefined;
    deleteTagsOnBackspace?: boolean | undefined;
    tagsContainer?: HTMLElement | undefined;
    tagCloseIcon?: string | undefined;
    tagClass?: string | undefined;
    validator?: Function | undefined;
}

interface ITypeaheadOverrides {
    instanceSelectHandler?: Function | undefined;
    selectedClass?: string | undefined;
    select?: Function | undefined;
}

interface ITagsManager {
    tagManagerOptions: ITagsManagerOptions;
    obj: JQuery;
    objName: string;
    queuedTag: string;
    delimeters: number[];
    backspace: number[];
    tagToManipulate: string;

    initialize(context: JQuery, options?: ITagsManagerOptions, tagToManipulate?: string): void;
    setupTypeahead(): void;
    onTypeaheadAjaxSuccess(data: any, isSetTypeaheadSource: boolean, process?: Function): void;
    ajaxPolling(query: string, process: Function): void;
    setTypeaheadSource(source: any): void;
    trimTag(tag: string): string;
    popTag(): void;
    empty(): void;
    refreshHiddenTagList(): void;
    spliceTag(tagId: number, eventData: any): void;
    pushTag(tag: string, objToPush: any, isValid: boolean): void;

    setOptions(options: ITagsManagerOptions): void;
    setContext(context: JQuery, tagToManipulate?: string): void;
    processCommand(context: JQuery, command: string, tagToManipulate?: string): JQuery;
    processTags(command?: string, context?: JQuery, tagToManipulate?: string): JQuery;
}

interface JQuery {
    tagsManager(options?: ITagsManagerOptions): JQuery;
    tagsManager(command: string, tagToManipulate?: string): JQuery;
}
