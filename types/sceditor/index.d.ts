// Type definitions for SCEditor 2.1.2
// Project: https://www.sceditor.com/
// Definitions by: Martin Pfund
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

// Work In Progress, may contains errors

// declare module sceditor {
declare module app.common.sceditor {
    interface ISCEditor {
        dom: IDOM;
        command: ICommand;

        create(selector: HTMLElement, args?: ISCEditorOptions): void;
        instance(selector: HTMLElement): ISCEditorInstance;
    }

    interface ICommand {
        set(command: string, options: ICommandOptions): void;
    }

    interface ICommandOptions {
        exec?: (caller: HTMLElement) => void;
        tooltip?: string;
    }

    interface ISCEditorOptions {
        plugins?: string;
        format?: string;
        toolbar?: string;
        locale?: string;
    }

    interface ISCEditorInstance {
        // _(...args: string[]): string;
        // addShortcut(shortcut: string, handler);
        // bind(events: string, callback: (e) => void, excludeWysiwyg?, excludeSource?): void;
        // blur(func?, excludeWysiwyg?, excludeSource?);
        // clearBlockFormatting();
        closeDropDown(focus?: boolean): void;
        // createDropDown(mItem, name: string, content, unselectable?: boolean): void;
        // css();
        // currentBlockNode();
        // currentNode();
        // destroy();
        // dimensions();
        // emoticons();
        execCommand(command: string, param?: string): void;
        // expandToContent();
        focus(callback?: (event: Event) => void): void;
        // getBody();
        // getRangeHelper(): ISCEditorRangeHelper;
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

    // interface ISCEditorRangeHelper {
    // 	cloneSelected();
    // 	getFirstBlockParent(selector?);
    // 	getMarker(id: string);
    // 	getOuterText(before: boolean, length: number): string;
    // 	insertHTML(startHtml: string, endHtml?: string): void;
    // }

    interface IDOM {
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
}

declare const sceditor: app.common.sceditor.ISCEditor;
export = sceditor;
