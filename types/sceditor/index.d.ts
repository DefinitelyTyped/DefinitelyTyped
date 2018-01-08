// Type definitions for SCEditor 2.1.2
// Project: https://www.sceditor.com/
// Definitions by: Martin Pfund
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

// Work In Progress, may contains errors

declare namespace sceditor {
	interface SCEditor {
		dom: DOM;

		create(selector: HTMLElement, args?: SCEditorArguments): void;
		instance(selector: HTMLElement): SCEditorInstance;
	}

	interface SCEditorArguments {
		plugins?: string;
		format?: string;
		toolbar?: string;
		locale?: string;
	}

	interface SCEditorInstance {
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
}

declare const sceditor: sceditor.SCEditor;
export = sceditor;