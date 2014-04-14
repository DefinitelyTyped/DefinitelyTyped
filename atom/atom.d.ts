// Type definitions for Atom
// Project: https://atom.io/
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../q/Q.d.ts" />
/// <reference path="../space-pen/space-pen.d.ts" />
/// <reference path="../emissary/emissary.d.ts" />

// Policy: this definition file only declare element related to `atom`.
// if js file include to another npm package (e.g. "space-pen", "mixto" and "emissary").
// you should create a separate file.

// NOTE Document? You should use DevTools hehe...

interface Window {
	atom: AtomCore.IAtom;
	measure(description:string, fn:Function):any; // return fn result
	profile(description:string, fn:Function):any; // return fn result
}

declare module AtomCore {

// https://atom.io/docs/v0.84.0/advanced/view-system
	interface IWorkspaceView {
		prependToBottom:any;
		prependToTop:any;
		prependToLeft:any;
		prependToRight:any;
		appendToBottom:any;
		appendToTop:any;
		appendToLeft:any;
		appendToRight:any;

		command: Function;
	}

	interface IPanes {
		// TBD
	}

	interface TreeView {
		// TBD
	}

	interface ICommandPanel {
		// TBD
	}

	interface ITextBuffer {
		// TBD
	}

	interface IDisplayBuffer {
		buffer: ITextBuffer;
		// TBD
	}

	interface ICursor {
		// TBD
	}

	interface ILanguageMode {
		// TBD
	}

	interface ISelection {
		// TBD
	}

	interface ISubscription {
		// TBD
	}

	interface IEditor {
		// Serializable.includeInto(Editor);
		// Delegator.includeInto(Editor);

		deserializing:boolean;
		callDisplayBufferCreatedHook:boolean;
		registerEditor:boolean;
		buffer:ITextBuffer;
		languageMode: ILanguageMode;
		cursors:ICursor[];
		selections: ISelection[];
		suppressSelectionMerging:boolean;
		softTabs: boolean;
		displayBuffer: IDisplayBuffer;

		id:number;
		behaviors:any;
		declaredPropertyValues: any;
		eventHandlersByEventName: any;
		eventHandlersByNamespace: any;
		lastOpened: number;
		subscriptionCounts: any;
		subscriptionsByObject: any; /* WeakMap */
		subscriptions: ISubscription[];

		serializeParams():{id:number; softTabs:boolean; scrollTop:number; scrollLeft:number; displayBuffer:any;};
		deserializeParams(params:any):any;
		subscribeToBuffer():void;
		subscribeToDisplayBuffer():void;
		getViewClass():any; // return type are EditorView
		destroyed():void;
		copy():IEditor;
		getTitle():string;
		getLongTitle():string;
		setVisible(visible:boolean):void;
		setScrollTop(scrollTop:any):void;
		getScrollTop():any;
		setScrollLeft(scrollLeft:any):void;
		getScrollLeft():any;
		setEditorWidthInChars(editorWidthInChars:any):void;
		getSoftWrapColumn():any;
		getSoftTabs():boolean;
		setSoftTabs(softTabs:boolean):void;
		getSoftWrap():any;
		setSoftWrap(softWrap:any):void;
		getTabText():any;
		getTabLength():any;
		setTabLength(tabLength:any):void;
		clipBufferPosition(bufferPosition:any):void;
		clipBufferRange(range:any):void;
		indentationForBufferRow(bufferRow:any):void;
		setIndentationForBufferRow(bufferRow:any, newLevel:any, _arg:any):void;
		indentLevelForLine(line:any):number;
		buildIndentString(number:any):any;
		save():void;
		saveAs(filePath:any):void;
		getPath():any;
		getText():any;
		setText(text:any):void;
		getTextInRange(range:any):any;
		getLineCount():any;
		getBuffer():any;
		getUri():any;
		isBufferRowBlank(bufferRow:any):void;
		isBufferRowCommented(bufferRow:any):void;
		nextNonBlankBufferRow(bufferRow:any):void;
		getEofBufferPosition():any;
		getLastBufferRow():any;
		bufferRangeForBufferRow(row:any, options:any):any;
		lineForBufferRow(row:any):any;
		lineLengthForBufferRow(row:any):any;
		scan():any;
		scanInBufferRange():any;
		backwardsScanInBufferRange():any;
		isModified():any;
		shouldPromptToSave():any;
		screenPositionForBufferPosition(bufferPosition:any, options:any):any;
		bufferPositionForScreenPosition(screenPosition:any, options:any):any;
		screenRangeForBufferRange(bufferRange:any):any;
		bufferRangeForScreenRange(screenRange:any):any;
		clipScreenPosition(screenPosition:any, options:any):any;
		lineForScreenRow(row:any):any;
		linesForScreenRows(start:any, end:any):any;
		getScreenLineCount():any;
		getMaxScreenLineLength():any;
		getLastScreenRow():any;
		bufferRowsForScreenRows(startRow:any, endRow:any):any;
		bufferRowForScreenRow(row:any):any;
		scopesForBufferPosition(bufferPosition:any):any;
		bufferRangeForScopeAtCursor(selector:any):any;
		tokenForBufferPosition(bufferPosition:any):any;
		getCursorScopes():any;
		insertText(text:any, options:any):any;
		insertNewline():any;
		insertNewlineBelow():any;
		insertNewlineAbove():any;
		indent(options?:any):any;
		backspace():any;
		backspaceToBeginningOfWord():any;
		backspaceToBeginningOfLine():any;
		delete():any;
		deleteToEndOfWord():any;
		deleteLine():any;
		indentSelectedRows():any;
		outdentSelectedRows():any;
		toggleLineCommentsInSelection():any;
		autoIndentSelectedRows():any;
		normalizeTabsInBufferRange(bufferRange:any):any;
		cutToEndOfLine():any;
		cutSelectedText():any;
		copySelectedText():any;
		pasteText(options?:any):any;
		undo():any;
		redo():any;
		foldCurrentRow():any;
		unfoldCurrentRow():any;
		foldSelectedLines():any;
		foldAll():any;
		unfoldAll():any;
		foldAllAtIndentLevel(level:any):any;
		foldBufferRow(bufferRow:any):any;
		unfoldBufferRow(bufferRow:any):any;
		isFoldableAtBufferRow(bufferRow:any):any;
		createFold(startRow:any, endRow:any):any;
		destroyFoldWithId(id:any):any;
		destroyFoldsIntersectingBufferRange(bufferRange:any):any;
		toggleFoldAtBufferRow(bufferRow:any):any;
		isFoldedAtCursorRow():any;
		isFoldedAtBufferRow(bufferRow:any):any;
		isFoldedAtScreenRow(screenRow:any):any;
		largestFoldContainingBufferRow(bufferRow:any):any;
		largestFoldStartingAtScreenRow(screenRow:any):any;
		outermostFoldsInBufferRowRange(startRow:any, endRow:any):any;
		moveLineUp():any;
		moveLineDown():any;
		duplicateLines():any;
		duplicateLine():any;
		mutateSelectedText(fn:Function):any;
		replaceSelectedText(options:any, fn:Function):any;
		getMarker(id:any):any;
		getMarkers():any;
		findMarkers(properties:any):any;
		markScreenRange():any;
		markBufferRange():any;
		markScreenPosition():any;
		markBufferPosition():any;
		destroyMarker():any;
		getMarkerCount():any;
		hasMultipleCursors():any;
		getCursors():any;
		getCursor():any;
		addCursorAtScreenPosition(screenPosition:any):any;
		addCursorAtBufferPosition(bufferPosition:any):any;
		addCursor(marker:any):any;
		removeCursor(cursor:any):any;
		addSelection(marker:any, options:any):any;
		addSelectionForBufferRange(bufferRange:any, options:any):any;
		setSelectedBufferRange(bufferRange:any, options:any):any;
		setSelectedBufferRanges(bufferRanges:any, options:any):any;
		removeSelection(selection:any):any;
		clearSelections():any;
		consolidateSelections():any;
		getSelections():any;
		getSelection(index:any):any;
		getLastSelection():any;
		getSelectionsOrderedByBufferPosition():any;
		getLastSelectionInBuffer():any;
		selectionIntersectsBufferRange(bufferRange:any):any;
		setCursorScreenPosition(position:any, options:any):any;
		getCursorScreenPosition():any;
		getCursorScreenRow():any;
		setCursorBufferPosition(position:any, options:any):any;
		getCursorBufferPosition():any;
		getSelectedScreenRange():any;
		getSelectedBufferRange():any;
		getSelectedBufferRanges():any;
		getSelectedText():any;
		getTextInBufferRange(range:any):any;
		setTextInBufferRange(range:any, text:any):any;
		getCurrentParagraphBufferRange():any;
		getWordUnderCursor(options:any):any;
		moveCursorUp(lineCount:any):any;
		moveCursorDown(lineCount:any):any;
		moveCursorLeft():any;
		moveCursorRight():any;
		moveCursorToTop():any;
		moveCursorToBottom():any;
		moveCursorToBeginningOfScreenLine():any;
		moveCursorToBeginningOfLine():any;
		moveCursorToFirstCharacterOfLine():any;
		moveCursorToEndOfScreenLine():any;
		moveCursorToEndOfLine():any;
		moveCursorToBeginningOfWord():any;
		moveCursorToEndOfWord():any;
		moveCursorToBeginningOfNextWord():any;
		moveCursorToPreviousWordBoundary():any;
		moveCursorToNextWordBoundary():any;
		moveCursors(fn:Function):any;
		selectToScreenPosition(position:any):any;
		selectRight():any;
		selectLeft():any;
		selectUp(rowCount:any):any;
		selectDown(rowCount:any):any;
		selectToTop():any;
		selectAll():any;
		selectToBottom():any;
		selectToBeginningOfLine():any;
		selectToFirstCharacterOfLine():any;
		selectToEndOfLine():any;
		selectToPreviousWordBoundary():any;
		selectToNextWordBoundary():any;
		selectLine():any;
		addSelectionBelow():any;
		addSelectionAbove():any;
		splitSelectionsIntoLines():any;
		transpose():any;
		upperCase():any;
		lowerCase():any;
		joinLines():any;
		selectToBeginningOfWord():any;
		selectToEndOfWord():any;
		selectToBeginningOfNextWord():any;
		selectWord():any;
		selectMarker(marker:any):any;
		mergeCursors():any;
		expandSelectionsForward():any;
		expandSelectionsBackward(fn:Function):any;
		finalizeSelections():any;
		mergeIntersectingSelections():any;
		preserveCursorPositionOnBufferReload():any;
		getGrammar(): IGrammar;
		setGrammar(grammer:IGrammar):void;
		reloadGrammar():any;
		shouldAutoIndent():any;
		transact(fn:Function):any;
		beginTransaction():any;
		commitTransaction():any;
		abortTransaction():any;
		inspect():any;
		logScreenLines(start:any, end:any):any;
		handleGrammarChange():any;
		handleMarkerCreated(marker:any):any;
		getSelectionMarkerAttributes():any;
		joinLine():any;
	}

	interface IGrammar {
		scopeName: string;
		// TBD
	}

	interface IPane /* extends Theorist.Model */ {
		items:any[];
		activeItem:any;

		serializeParams():any;
		deserializeParams(params:any):any;
		getViewClass():any; // return type are PaneView
		isActive():boolean;
		focus():void;
		blur():void;
		activate():void;
		getPanes():IPane[];
		getItems():any[];
		getActiveItem():any;
		getActiveEditor():any;
		itemAtIndex(index:number):any;
		activateNextItem():any;
		activatePreviousItem():any;
		getActiveItemIndex():number;
		activateItemAtIndex(index:number):any;
		activateItem(item:any):any;
		addItem(item:any, index:number):any;
		addItems(items:any[], index:number):any[];
		removeItem(item:any, destroying:any):void;
		moveItem(item:any, newIndex:number):void;
		moveItemToPane(item:any, pane:IPane, index:number):void;
		destroyActiveItem():boolean; // always return false
		destroyItem(item:any):boolean;
		destroyItems():any[];
		destroyInactiveItems():any[];
		destroy():void;
		destroyed():any[];
		promptToSaveItem(item:any):boolean;
		saveActiveItem():void;
		saveActiveItemAs():void;
		saveItem(item:any, nextAction:Function):void;
		saveItemAs(item:any, nextAction:Function):void;
		saveItems():any[];
		itemForUri(uri:any):any;
		activateItemForUri(uri:any):any;
		copyActiveItem():void;
		splitLeft(params:any):IPane;
		splitRight(params:any):IPane;
		splitUp(params:any):IPane;
		splitDown(params:any):IPane;
		split(orientation:string, side:string, params:any):IPane;
		findLeftmostSibling():IPane;
		findOrCreateRightmostSibling():IPane;
	}

// https://atom.io/docs/v0.84.0/advanced/serialization
	interface ISerializationStatic<T> {
		deserialize(data:ISerializationInfo):T;
		new (data:T): ISerialization;
	}

	interface ISerialization {
		serialize():ISerializationInfo;
	}

	interface ISerializationInfo {
		deserializer: string;
	}

	interface IBrowserWindow {
		getPosition():number[];
		getSize():number[];
	}

	interface IAtomWindowDimentions {
		x:number;
		y:number;
		width:number;
		height:number;
	}

	interface IProject {
		// TBD
	}

	interface IWorkspaceStatic {
		new():IWorkspace;
	}

	interface IWorkspace {
		deserializeParams(params:any):any;
		serializeParams():{paneContainer:any;fullScreen:boolean;};
		eachEditor(callback:Function):void;
		getEditors():IEditor[];
		open(uri:string, options:any):Q.Promise<View>;
		openLicense():void;
		openSync(uri:string, options:any):any;
		openUriInPane(uri:string, pane:any, options:any):Q.Promise<View>;
		reopenItemSync():any;
		registerOpener(opener:(urlToOpen:string)=>any):void;
		unregisterOpener(opener:Function):void;
		getOpeners():any;
		getActivePane(): IPane;
		getPanes():any;
		saveAll():void;
		activateNextPane():any;
		activatePreviousPane():any;
		paneForUri: (uri:string) => IPane;
		saveActivePaneItem():any;
		saveActivePaneItemAs():any;
		destroyActivePaneItem():any;
		destroyActivePane():any;
		getActiveEditor():IEditor;
		increaseFontSize():void;
		decreaseFontSize():void;
		resetFontSize():void;
		itemOpened(item:any):void;
		onPaneItemDestroyed(item:any):void;
		destroyed():void;
	}

	interface IAtomSettings {
		appVersion: string;
		bootstrapScript: string;
		devMode: boolean;
		initialPath: string;
		pathToOpen: string;
		resourcePath: string;
		shellLoadTime: number;
		windowState:string;
	}

	interface IAtomState {
		mode:string;
		packageStates:any;
		project:any;
		syntax:any;
		version:number;
		windowDimensions:any;
		workspace:any;
	}

	interface IDeserializerManager {
		deserializers:Function;
		add:Function;
		remove:Function;
		deserialize:Function;
		get:Function;
	}

	interface IConfig {
		get(keyPath:string):any;
		// TBD
	}

	interface IKeymapManager {
		defaultTarget:HTMLElement;
		// TBD
	}

	interface IPackageManager extends Emissary.IEmitter {
		packageDirPaths:string[];
		loadedPackages:any;
		activePackages:any;
		packageStates:any;
		packageActivators:any[];

		getApmPath():string;
		getPackageDirPaths():string;
		getPackageState(name:string):any;
		setPackageState(name:string, state:any):void;
		enablePackage(name:string):any;
		disablePackage(name:string):any;
		activate():void;
		registerPackageActivator(activator:any, types:any):void;
		activatePackages(packages:any):void;
		activatePackage(name:string):void;
		deactivatePackages():void;
		deactivatePackage(name:string):void;
		getActivePackages():any;
		getActivePackage(name:string):any;
		isPackageActive(name:string):boolean;
		unobserveDisabledPackages():void;
		observeDisabledPackages():void;
		loadPackages():void;
		loadPackage(nameOrPath:string):void;
		unloadPackages():void;
		unloadPackage(name:string):void;
		getLoadedPackage(name:string):any;
		isPackageLoaded(name:string):boolean;
		getLoadedPackages():any;
		getLoadedPackagesForTypes(types:any):any[];
		resolvePackagePath(name:string):string;
		isPackageDisabled(name:string):boolean;
		hasAtomEngine(packagePath:string):boolean;
		isBundledPackage(name:string):boolean;
		getPackageDependencies():any;
		getAvailablePackagePaths():any[];
		getAvailablePackageNames():any[];
		getAvailablePackageMetadata():any[];
	}

	interface IThemeManager {
		// TBD
	}

	interface IContextMenuManager {
		// TBD
	}

	interface IMenuManager {
		// TBD
	}

	interface IClipboard {
		// TBD
	}

	interface ISyntax {
		// TBD
	}

	interface IWindowEventHandler {
		// TBD
	}

	interface IAtomStatic extends ISerializationStatic<IAtom> {
		version: number;
		loadSettings: IAtomSettings;
		loadOrCreate(mode:string):IAtom;
		loadState(mode:any):void;
		getStatePath(mode:any):string;
		getConfigDirPath():string;
		getStorageDirPath():string;
		getLoadSettings():IAtomSettings;
		getCurrentWindow():IBrowserWindow;
		getVersion():string;
		isReleasedVersion():boolean;

		new(state:IAtomState):IAtom;
	}

	interface IAtom {
		constructor:IAtomStatic;

		state:IAtomState;
		mode:string;
		deserializers:IDeserializerManager;
		config: IConfig;
		keymaps: IKeymapManager;
		keymap: IKeymapManager;
		packages: IPackageManager;
		themes: IThemeManager;
		contextManu: IContextMenuManager;
		menu: IMenuManager;
		clipboard:IClipboard;
		syntax:ISyntax;
		windowEventHandler: IWindowEventHandler;

		// really exists? start
		subscribe:Function;
		unsubscribe:Function;
		loadTime:number;
		workspaceViewParentSelector:string;

		project: IProject;
		workspaceView: IWorkspaceView;
		workspace: IWorkspace;
		// really exists? end

		initialize:Function;
		// registerRepresentationClass:Function;
		// registerRepresentationClasses:Function;
		setBodyPlatformClass:Function;
		getCurrentWindow():IBrowserWindow;
		getWindowDimensions:Function;
		setWindowDimensions:Function;
		restoreWindowDimensions:Function;
		storeWindowDimensions:Function;
		getLoadSettings:Function;
		deserializeProject: Function;
		deserializeWorkspaceView:Function;
		deserializePackageStates:Function;
		deserializeEditorWindow:Function;
		startEditorWindow:Function;
		unloadEditorWindow:Function;
		loadThemes:Function;
		watchThemes:Function;
		open:Function;
		confirm:Function;
		showSaveDialog:Function;
		showSaveDialogSync:Function;
		openDevTools:Function;
		toggleDevTools:Function;
		executeJavaScriptInDevTools:Function;
		reload:Function;
		focus:Function;
		show:Function;
		hide:Function;
		setSize:Function;
		setPosition:Function;
		center:Function;
		displayWindow:Function;
		close:Function;
		exit:Function;
		inDevMode:Function;
		inSpecMode:Function;
		toggleFullScreen:Function;
		setFullScreen:Function;
		isFullScreen:Function;
		getVersion:Function;
		isReleasedVersion:Function;
		getGitHubAuthTokenName:Function;
		setGitHubAuthToken:Function;
		getGitHubAuthToken:Function;
		getConfigDirPath:Function;
		saveSync:Function;
		getWindowLoadTime():number;
		crashMainProcess:Function;
		crashRenderProcess:Function;
		beep:Function;
		getUserInitScriptPath:Function;
		requireUserInitScript:Function;
		requireWithGlobals:Function;
	}

	interface IBufferedNodeProcessStatic {
		new (arg:any):IBufferedNodeProcess;
	}

	interface IBufferedNodeProcess extends IBufferedProcess {
	}

	interface IBufferedProcessStatic {
		new (arg:any):IBufferedProcess;
	}

	interface IBufferedProcess {
		process:Function;
		killed:boolean;

		bufferStream:Function;
		kill:Function;
	}

	interface IGitStatic {
		new(path:any, options:any):IGit;
	}

	interface IGit {
	}

	interface IPointStatic {
		new(row:any, column:any):IPoint;
	}

	interface IPoint {
		// TBD
	}

	interface IRangeStatic {
		new(pointA:IPoint, pointB:IPoint):IRange;
	}

	interface IRange {
		// TBD
	}

	interface ITaskStatic {
		new(taskPath:any):ITask;
	}

	interface ITask {
		// TBD
	}
}

declare var atom:AtomCore.IAtom;

declare module "atom" {
	import spacePen = require("space-pen");

	var $:typeof spacePen.$;
	var $$$:typeof spacePen.$$$;

	var BufferedNodeProcess:AtomCore.IBufferedNodeProcessStatic;
	var BufferedProcess:AtomCore.IBufferedProcessStatic;
	var EditorView:any;
	var Git:AtomCore.IGitStatic;
	var Point:AtomCore.IPointStatic;
	var Range:AtomCore.IRangeStatic;

	class View extends spacePen.View implements Emissary.ISubscriber {
		// Subscriber.includeInto(spacePen.View);

		// inherit from Subscriber
		subscribeWith(eventEmitter:any, methodName:string, args:any):any;

		addSubscription(subscription:any):any;

		subscribe(eventEmitterOrSubscription:any, ...args:any[]):any;

		subscribeToCommand(eventEmitter:any, ...args:any[]):any;

		unsubscribe(object?:any):any;
	}

	class ScrollView extends View {
		// TBD
	}

	var SelectListView:any;
	var Task:AtomCore.ITaskStatic;
	var Workspace:AtomCore.IWorkspaceStatic;
	var WorkspaceView:any; // WorkspaceView extends View
}
