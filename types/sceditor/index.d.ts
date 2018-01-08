// Type definitions for SCEditor 2.1.2
// Project: https://www.sceditor.com/
// Definitions by: Martin Pfund
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

// Work In Progress, may contains errors

declare var sceditor: ISCEditor;

interface ISCEditor {
	dom: IDOM;
	
	create(selector, args?: ISCEditorArguments): void;
	instance(selector): ISCEditorInstance;
}

interface ISCEditorArguments {
	plugins?: string;
	format?: string;
	toolbar?: string;
	locale?: string;
}

interface ISCEditorInstance {
	// _(...args: string[]): string;
	// addShortcut(shortcut: string, handler);
	// bind(events, func, excludeWysiwyg?, excludeSource?);
	// blur(func?, excludeWysiwyg?, excludeSource?);
	// clearBlockFormatting();
	// closeDropDown();
	// createDropDown();
	// css();
	// currentBlockNode();
	// currentNode();
	// destroy();
	// dimensions();
	// emoticons();
	// execCommand();
	// expandToContent();
	focus(callback?: (event) => void);
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

interface ISCEditorRangeHelper {
	cloneSelected();
	getFirstBlockParent(selector?);
	getMarker(id: string);
	getOuterText(before: boolean, length: number): string;
	insertHTML(startHtml: string, endHtml?: string): void;
}

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
