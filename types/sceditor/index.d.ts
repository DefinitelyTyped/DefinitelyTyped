// Type definitions for sceditor 2.1
// Project: https://www.sceditor.com/
// Definitions by: Martin Pfund <https://github.com/mnp-mid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

// Work In Progress, may contain errors


interface SCEditor {
    dom: DOM;
    command: Command;
    plugins: any;

    create(selector: HTMLElement, args?: SCEditorOptions): void;
    instance(selector: HTMLElement): SCEditorInstance;
}

interface Command {
    set(command: string, options: CommandOptions): void;
}

interface CommandOptions {
    exec?: (caller: HTMLElement) => void;
    tooltip?: string;
}

interface SCEditorOptions {
    plugins?: string[]|string;
    format?: string;
    toolbar?: string;
    locale?: string;
    height?: string;
    width?: string;
    style?: string;
    emoticonsEnabled?: boolean;
}

interface SCEditorInstance {
    // _(...args: string[]): string;
    // addShortcut(shortcut: string, handler);
    bind(events: string, callback: (event: any) => void, excludeWysiwyg?: any, excludeSource?: any): void;
    blur(func?: (event: any) => void, excludeWysiwyg?: any, excludeSource?: any): void;
    // clearBlockFormatting();
    closeDropDown(focus?: boolean): void;
    createDropDown(mItem: any, name: string, content: any, unselectable?: boolean): void;
    css(value?: string): any;
    // currentBlockNode();
    // currentNode();
    // destroy();
    // dimensions();
    // emoticons();
    execCommand(command: string, param?: string): void;
    // expandToContent();
    focus(callback?: (event: Event) => void): void;
    getBody(): HTMLElement;
    getRangeHelper(): SCEditorRangeHelper;
    // getSourceEditorValue();
    // getWysiwygEditorValue();
    // height();
    // ie;
    // inSourceMode();
    // insert();
    // insertText();
    // isWysiwygSupported;
    // keyDown();
    // keyPress();
    // keyUp();
    // maximize();
    // nodeChanged();
    // readOnly()
    // removeShortcut();
    // rtl();
    // selectionChanged();
    // setSourceEditorValue();
    // setWysiwygEditorValue();
    // sourceEditorInsertText();
    // sourceMode();
    // toggleSourceMode();
    // unbind();
    // updateOriginal();
    val(value?: string, filter?: boolean): string;
    width(value?: number|string): any;
    // wysiwygEditorInsertHtml();
    // wysiwygEditorInsertText();
}

interface SCEditorRangeHelper {
    cloneSelected(): any;
    getFirstBlockParent(selector?: any): any;
    getMarker(id: string): any;
    getOuterText(before: boolean, length: number): string;
    insertHTML(startHtml: string, endHtml?: string): void;
    selectRange(range: Range): void;
}

interface DOM {
    blockLevelList: string;
    // copyCSS(from, to);
    // extractContents(start, end): boolean;
    // findCommonAncestor(nodeA, nodeB);
    // fixNesting(node);
    // hasStyling(): boolean;
    // isInline();
    // rTraverse();
    // traverse();
}

export const sceditor: SCEditor;
