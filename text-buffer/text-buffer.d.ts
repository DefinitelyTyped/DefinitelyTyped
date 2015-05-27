// Type definitions for text-buffer
// Project: https://github.com/atom/text-buffer
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../atom/atom.d.ts" />
/// <reference path="../emissary/emissary.d.ts" />
/// <reference path="../q/Q.d.ts" />


declare module TextBuffer {

	interface IPointStatic {
		new (row?:number, column?:number):IPoint;

		fromObject(point:IPoint, copy?:boolean):IPoint;
		fromObject(object:number[]):IPoint;
		fromObject(object:{row:number; column:number;}):IPoint;

		min(point1:IPoint, point2:IPoint):IPoint;
		min(point1:number[], point2:IPoint):IPoint;
		min(point1:{row:number; column:number;}, point2:IPoint):IPoint;

		min(point1:IPoint, point2:number[]):IPoint;
		min(point1:number[], point2:number[]):IPoint;
		min(point1:{row:number; column:number;}, point2:number[]):IPoint;

		min(point1:IPoint, point2:{row:number; column:number;}):IPoint;
		min(point1:number[], point2:{row:number; column:number;}):IPoint;
		min(point1:{row:number; column:number;}, point2:{row:number; column:number;}):IPoint;
	}

	interface IPoint {
		constructor: IPointStatic;

		row:number;
		column:number;

		copy():IPoint;
		freeze():IPoint;

		translate(delta:IPoint):IPoint;
		translate(delta:number[]):IPoint;
		translate(delta:{row:number; column:number;}):IPoint;

		add(other:IPoint):IPoint;
		add(other:number[]):IPoint;
		add(other:{row:number; column:number;}):IPoint;

		splitAt(column:number):IPoint[];
		compare(other:IPoint):number;
		isEqual(other:IPoint):boolean;
		isLessThan(other:IPoint):boolean;
		isLessThanOrEqual(other:IPoint):boolean;
		isGreaterThan(other:IPoint):boolean;
		isGreaterThanOrEqual(other:IPoint):boolean;
		toArray():number[];
		serialize():number[];
	}

	interface IRangeStatic {
		deserialize(array:IPoint[]):IRange;

		fromObject(object:IPoint[]):IRange;

		fromObject(object:IRange, copy?:boolean):IRange;

		fromObject(object:{start: IPoint; end: IPoint}):IRange;
		fromObject(object:{start: number[]; end: IPoint}):IRange;
		fromObject(object:{start: {row:number; column:number;}; end: IPoint}):IRange;

		fromObject(object:{start: IPoint; end: number[]}):IRange;
		fromObject(object:{start: number[]; end: number[]}):IRange;
		fromObject(object:{start: {row:number; column:number;}; end: number[]}):IRange;

		fromObject(object:{start: IPoint; end: {row:number; column:number;}}):IRange;
		fromObject(object:{start: number[]; end: {row:number; column:number;}}):IRange;
		fromObject(object:{start: {row:number; column:number;}; end: {row:number; column:number;}}):IRange;

		fromText(point:IPoint, text:string):IRange;
		fromText(point:number[], text:string):IRange;
		fromText(point:{row:number; column:number;}, text:string):IRange;
		fromText(text:string):IRange;

		fromPointWithDelta(startPoint:IPoint, rowDelta:number, columnDelta:number):IRange;
		fromPointWithDelta(startPoint:number[], rowDelta:number, columnDelta:number):IRange;
		fromPointWithDelta(startPoint:{row:number; column:number;}, rowDelta:number, columnDelta:number):IRange;

		new(point1:IPoint, point2:IPoint):IRange;
		new(point1:number[], point2:IPoint):IRange;
		new(point1:{row:number; column:number;}, point2:IPoint):IRange;

		new(point1:IPoint, point2:number[]):IRange;
		new(point1:number[], point2:number[]):IRange;
		new(point1:{row:number; column:number;}, point2:number[]):IRange;

		new(point1:IPoint, point2:{row:number; column:number;}):IRange;
		new(point1:number[], point2:{row:number; column:number;}):IRange;
		new(point1:{row:number; column:number;}, point2:{row:number; column:number;}):IRange;
	}

	interface IRange {
		constructor:IRangeStatic;

		start: IPoint;
		end: IPoint;

		serialize():number[][];
		copy():IRange;
		freeze():IRange;
		isEqual(other:IRange):boolean;
		isEqual(other:IPoint[]):boolean;

		compare(object:IPoint[]):number;

		compare(object:{start: IPoint; end: IPoint}):number;
		compare(object:{start: number[]; end: IPoint}):number;
		compare(object:{start: {row:number; column:number;}; end: IPoint}):number;

		compare(object:{start: IPoint; end: number[]}):number;
		compare(object:{start: number[]; end: number[]}):number;
		compare(object:{start: {row:number; column:number;}; end: number[]}):number;

		compare(object:{start: IPoint; end: {row:number; column:number;}}):number;
		compare(object:{start: number[]; end: {row:number; column:number;}}):number;
		compare(object:{start: {row:number; column:number;}; end: {row:number; column:number;}}):number;

		isSingleLine():boolean;
		coversSameRows(other:IRange):boolean;

		add(object:IPoint[]):IRange;

		add(object:{start: IPoint; end: IPoint}):IRange;
		add(object:{start: number[]; end: IPoint}):IRange;
		add(object:{start: {row:number; column:number;}; end: IPoint}):IRange;

		add(object:{start: IPoint; end: number[]}):IRange;
		add(object:{start: number[]; end: number[]}):IRange;
		add(object:{start: {row:number; column:number;}; end: number[]}):IRange;

		add(object:{start: IPoint; end: {row:number; column:number;}}):IRange;
		add(object:{start: number[]; end: {row:number; column:number;}}):IRange;
		add(object:{start: {row:number; column:number;}; end: {row:number; column:number;}}):IRange;

		translate(startPoint:IPoint, endPoint:IPoint):IRange;
		translate(startPoint:IPoint):IRange;

		intersectsWith(otherRange:IRange):boolean;
		containsRange(otherRange:IRange, exclusive:boolean):boolean;

		containsPoint(point:IPoint, exclusive:boolean):boolean;
		containsPoint(point:number[], exclusive:boolean):boolean;
		containsPoint(point:{row:number; column:number;}, exclusive:boolean):boolean;

		intersectsRow(row:number):boolean;
		intersectsRowRange(startRow:number, endRow:number):boolean;
		union(otherRange:IRange):IRange;
		isEmpty():boolean;
		toDelta():IPoint;
		getRowCount():number;
		getRows():number[];
	}

	interface IHistory {
		// TBD
	}

	interface IMarkerManager {
		// TBD
	}

	interface IMarker {
		// TBD
	}

	interface IBufferPatch {
		// TBD
	}

	interface ITextBufferStatic {
		Point: IPointStatic;
		Range: IRangeStatic;
		newlineRegex:any;

		new (text:string): ITextBuffer;
		new (params:any): ITextBuffer;
	}

	interface ITextBuffer extends Emissary.IEmitter, Emissary.ISubscriber {
		// Delegator.includeInto(TextBuffer);
		// Serializable.includeInto(TextBuffer);

		cachedText:string;
		stoppedChangingDelay:number;
		stoppedChangingTimeout:any;
		cachedDiskContents:string;
		conflict:boolean;
		file:any; // pathwatcher.IFile
		refcount:number;

		lines:string[];
		lineEndings:string[];
		offsetIndex:any; // span-skip-list.SpanSkipList
		history:IHistory;
		markers:IMarkerManager;
		loaded:boolean;
		digestWhenLastPersisted:string;
		modifiedWhenLastPersisted:boolean;
		useSerializedText:boolean;

		deserializeParams(params:any):any;
		serializeParams():any;

		getText():string;
		getLines():string;
		isEmpty():boolean;
		getLineCount():number;
		getLastRow():number;
		lineForRow(row:number):string;
		getLastLine():string;
		lineEndingForRow(row:number):string;
		lineLengthForRow(row:number):number;
		setText(text:string):IRange;
		setTextViaDiff(text:any):any[];
		setTextInRange(range:IRange, text:string, normalizeLineEndings?:boolean):IRange;
		insert(position:IPoint, text:string, normalizeLineEndings?:boolean):IRange;
		append(text:string, normalizeLineEndings?:boolean):IRange;
		delete(range:IRange):IRange;
		deleteRow(row:number):IRange;
		deleteRows(startRow:number, endRow:number):IRange;
		buildPatch(oldRange:IRange, newText:string, normalizeLineEndings?:boolean):IBufferPatch;
		applyPatch(patch:IBufferPatch):any;
		getTextInRange(range:IRange):string;
		clipRange(range:IRange):IRange;
		clipPosition(position:IPoint):IPoint;
		getFirstPosition():IPoint;
		getEndPosition():IPoint;
		getRange():IRange;
		rangeForRow(row:number, includeNewline?:boolean):IRange;
		characterIndexForPosition(position:IPoint):number;
		positionForCharacterIndex(offset:number):IPoint;
		getMaxCharacterIndex():number;
		loadSync():ITextBuffer;
		load():Q.IPromise<ITextBuffer>;
		finishLoading():ITextBuffer;
		handleTextChange(event:any):any;
		destroy():any;
		isAlive():boolean;
		isDestroyed():boolean;
		isRetained():boolean;
		retain():ITextBuffer;
		release():ITextBuffer;
		subscribeToFile():any;
		hasMultipleEditors():boolean;
		reload():any;
		updateCachedDiskContentsSync():string;
		updateCachedDiskContents():Q.IPromise<string>;
		getBaseName():string;
		getPath():string;
		getUri():string;
		setPath(filePath:string):any;
		save():void;
		saveAs(filePath:string):any;
		isModified():boolean;
		isInConflict():boolean;
		destroyMarker(id:any):any;
		matchesInCharacterRange(regex:any, startIndex:any, endIndex:any):any[];
		scan(regex:any, iterator:any):any;
		backwardsScan(regex:any, iterator:any):any;
		replace(regex:any, replacementText:any):any;
		scanInRange(regex:any, range:any, iterator:any, reverse:any):any;
		backwardsScanInRange(regex:any, range:any, iterator:any):any;
		isRowBlank(row:number):boolean;
		previousNonBlankRow(startRow:number):number;
		nextNonBlankRow(startRow:number):number;
		usesSoftTabs():boolean;
		cancelStoppedChangingTimeout():any;
		scheduleModifiedEvents():any;
		emitModifiedStatusChanged(modifiedStatus:any):any;
		logLines(start:number, end:number):void;

		// delegate to history property
		undo():any;
		redo():any;
		transact(fn:Function):any;
		beginTransaction():any;
		commitTransaction():any;
		abortTransaction():any;
		clearUndoStack():any;

		// delegate to markers property
		markRange(range:any, properties:any):any;
		markPosition(range:any, properties:any):any;
		getMarker(id:number):IMarker;
		getMarkers():IMarker[];
		getMarkerCount():number;
	}
}

declare module "text-buffer" {
	var _: TextBuffer.ITextBufferStatic;
	export = _;
}