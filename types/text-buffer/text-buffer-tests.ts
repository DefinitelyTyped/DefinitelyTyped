import TextBuffer = require("text-buffer");

let bool: boolean;
let num: number;
let numArr: number[];
let str: string;
let strArr: string[];
let buffer: TextBuffer.TextBuffer;
let sub: EventKit.Disposable;
let marker: TextBuffer.Marker;
let markerArr: TextBuffer.Marker[];
let markerLayer: TextBuffer.MarkerLayer;

// TextBuffer.Point ======================================================================
let point = new TextBuffer.Point(42, 42);
new TextBuffer.Point();
new TextBuffer.Point(42);

// Properties
num = point.row;
num = point.column;

// Construction
point = TextBuffer.Point.fromObject({ row: 42, column: 42 }, true);
point = point.copy();
point = point.negate();

// Comparison
point = TextBuffer.Point.min(point, point);
TextBuffer.Point.min([0, 0], [0, 0]);
TextBuffer.Point.min(point, [0, 0]);
TextBuffer.Point.min([0, 0], point);

num = point.compare(point);
point.compare([0, 0]);

bool = point.isEqual(point);
point.isEqual([0, 0]);

bool = point.isLessThan(point);
point.isLessThan([0, 0]);

bool = point.isLessThanOrEqual(point);
point.isLessThanOrEqual([0, 0]);

bool = point.isGreaterThan(point);
point.isGreaterThan([0, 0]);

bool = point.isGreaterThanOrEqual(point);
point.isGreaterThanOrEqual([0, 0]);

// Operations
const frozenPoint: Readonly<TextBuffer.Point> = point.freeze();

point = point.translate(point);
point.translate([0, 0]);

point = point.traverse(point);
point.traverse([0, 0]);

// Conversion
point.toArray();
point.serialize();
str = point.toString();

// TextBuffer.Range ======================================================================
let range = new TextBuffer.Range(point, point);
new TextBuffer.Range([0, 0], [0, 0]);
new TextBuffer.Range(point, [0, 0]);
new TextBuffer.Range([0, 0], point);

// Properties
range.start;
range.end;

// Construction
range = TextBuffer.Range.fromObject({ start: point, end: point}, true);
TextBuffer.Range.fromObject([point, point]);
TextBuffer.Range.fromObject([[0, 0], [0, 0]]);
TextBuffer.Range.fromObject([point, [0, 0]]);
TextBuffer.Range.fromObject([[0, 0], point]);

range = range.copy();
range = range.negate();

// Serialization and Deserialization
range = TextBuffer.Range.deserialize({});
range.serialize();

// TextBuffer.Range Details
bool = range.isEmpty();
bool = range.isSingleLine();
num = range.getRowCount();
numArr = range.getRows();

// Operations
const frozenRange: Readonly<TextBuffer.Range> = range.freeze();
range = range.union(range);

range = range.translate(point);
range.translate([0, 0]);
range.translate(point, point);
range.translate([0, 0], point);
range.translate(point, [0, 0]);
range.translate([0, 0], [0, 0]);

range = range.traverse(point);
range.traverse([0, 0]);

// Comparison
num = range.compare(range);
range.compare([point, point]);
range.compare([point, [0, 0]]);
range.compare([[0, 0], point]);
range.compare([[0, 0], [0, 0]]);

bool = range.isEqual(range);
range.isEqual([point, point]);
range.isEqual([point, [0, 0]]);
range.isEqual([[0, 0], point]);
range.isEqual([[0, 0], [0, 0]]);

bool = range.coversSameRows(range);

bool = range.intersectsWith(range);
range.intersectsWith(range, true);

bool = range.containsRange(range);
range.containsRange([point, point]);
range.containsRange([point, [0, 0]]);
range.containsRange([[0, 0], point]);
range.containsRange([[0, 0], [0, 0]]);
range.containsRange(range, true);
range.containsRange([point, point], false);
range.containsRange([point, [0, 0]], false);
range.containsRange([[0, 0], point], false);
range.containsRange([[0, 0], [0, 0]], false);

bool = range.containsPoint(point);
range.containsPoint([0, 0]);
range.containsPoint(point, true);
range.containsPoint([0, 0], false);

bool = range.intersectsRow(42);
bool = range.intersectsRowRange(42, 42);

// Conversion
str = range.toString();

// TextBuffer =================================================================
const shouldDestroyOnFileDelete = () => false;

buffer = new TextBuffer("test");
new TextBuffer();
new TextBuffer({ text: "Test" });
new TextBuffer({ shouldDestroyOnFileDelete });
new TextBuffer({ text: "Test", shouldDestroyOnFileDelete });

let tbPromise: Promise<TextBuffer.TextBuffer> = TextBuffer.load("Test.file");
TextBuffer.load("Test.file", { encoding: "utf8" });
TextBuffer.load("Test.file", { shouldDestroyOnFileDelete });
TextBuffer.load("Test.file", { encoding: "utf8", shouldDestroyOnFileDelete });

buffer = TextBuffer.loadSync("Test.file");
TextBuffer.loadSync("Test.file", { encoding: "utf8" });
TextBuffer.loadSync("Test.file", { shouldDestroyOnFileDelete });
TextBuffer.loadSync("Test.file", { encoding: "uft8", shouldDestroyOnFileDelete });

tbPromise = TextBuffer.deserialize({});

// Event Subscription
sub = buffer.onWillChange(() => void {});
sub = buffer.onDidChange(() => void {});
sub = buffer.onDidChangeText(() => void {});

sub = buffer.onDidStopChanging((event): void => {
	for (const change of event.changes) {
		change.newExtent;
	}
});

sub = buffer.onDidConflict(() => void {});
sub = buffer.onDidChangeModified(() => void {});
sub = buffer.onDidUpdateMarkers(() => void {});
sub = buffer.onDidCreateMarker(() => void {});

sub = buffer.onDidChangePath((path): void => {
	str = path;
});

sub = buffer.onDidChangeEncoding(() => void {});
sub = buffer.onWillSave(() => void {});
sub = buffer.onDidSave(() => void {});
sub = buffer.onDidDelete(() => void {});
sub = buffer.onWillReload(() => void {});
sub = buffer.onDidReload(() => void {});
sub = buffer.onDidDestroy(() => void {});
sub = buffer.onWillThrowWatchError(() => void {});

const stoppedChangingDelay = buffer.getStoppedChangingDelay();

// File Details
bool = buffer.isModified();
bool = buffer.isInConflict();
str = buffer.getPath();
buffer.setPath("Test.file");
buffer.setEncoding("utf8");
str = buffer.getEncoding();
str = buffer.getUri();

// Reading Text
bool = buffer.isEmpty();
str = buffer.getText();

str = buffer.getTextInRange(range);
str = buffer.getTextInRange([point, point]);
str = buffer.getTextInRange([[0, 0], [0, 0]]);
str = buffer.getTextInRange([point, [0, 0]]);
str = buffer.getTextInRange([[0, 0], point]);

strArr = buffer.getLines();
str = buffer.getLastLine();
str = buffer.lineForRow(42);
str = buffer.lineEndingForRow(42);
num = buffer.lineLengthForRow(42);
bool = buffer.isRowBlank(42);
num = buffer.previousNonBlankRow(42);
num = buffer.nextNonBlankRow(42);

// Mutating Text
range = buffer.setText("Test");
buffer.setTextViaDiff("Test");

range = buffer.setTextInRange(range, "Test");
range = buffer.setTextInRange([point, point], "Test");
range = buffer.setTextInRange([[0, 0], [0, 0]], "Test");
range = buffer.setTextInRange([point, [0, 0]], "Test");
range = buffer.setTextInRange([[0, 0], point], "Test");
range = buffer.setTextInRange(range, "Test", { normalizeLineEndings: true });
range = buffer.setTextInRange(range, "Test", { undo: "skip" });
range = buffer.setTextInRange(range, "Test", { normalizeLineEndings: true, undo: "skip" });
range = buffer.setTextInRange([[0, 0], [0, 0]], "Test", { undo: "skip" });

range = buffer.insert(point, "Test");
buffer.insert([0, 0], "Test");
buffer.insert(point, "Test", { normalizeLineEndings: true });
buffer.insert(point, "Test", { undo: "skip" });
buffer.insert(point, "Test", { normalizeLineEndings: true, undo: "skip" });
buffer.insert([0, 0], "Test", { undo: "skip" });

range = buffer.append("Test");
buffer.append("Test", { normalizeLineEndings: true });
buffer.append("Test", { undo: "skip" });
buffer.append("Test", { normalizeLineEndings: true, undo: "skip" });

range = buffer.delete(range);
buffer.delete([point, point]);
buffer.delete([[0, 0], [0, 0]]);
buffer.delete([point, [0, 0]]);
buffer.delete([[0, 0], point]);

range = buffer.deleteRow(42);
range = buffer.deleteRows(42, 42);

// Markers
markerLayer = buffer.addMarkerLayer();
buffer.addMarkerLayer({ maintainHistory: true });
buffer.addMarkerLayer({ persistent: true });
buffer.addMarkerLayer({ maintainHistory: true, persistent: true });

markerLayer = buffer.getMarkerLayer("Test");
markerLayer = buffer.getDefaultMarkerLayer();

marker = buffer.markRange(range);
buffer.markRange([point, point]);
buffer.markRange([[0, 0], [0, 0]]);
buffer.markRange([point, [0, 0]]);
buffer.markRange([[0, 0], point]);
buffer.markRange(range, { exclusive: true});
buffer.markRange(range, { invalidate: "surround" });
buffer.markRange(range, { reversed: true });
buffer.markRange(range, { exclusive: true, invalidate: "surround", reversed: true });
buffer.markRange([point, point], { exclusive: true });

marker = buffer.markPosition(point);
buffer.markPosition([0, 0]);
buffer.markPosition(point, { exclusive: true });
buffer.markPosition(point, { invalidate: "never" });
buffer.markPosition(point, { exclusive: true, invalidate: "surround" });
buffer.markPosition([0, 0], { exclusive: true });

markerArr = buffer.getMarkers();
marker = buffer.getMarker(42);
markerArr = buffer.findMarkers({ containsPoint: point });
num = buffer.getMarkerCount();

// History
bool = buffer.undo();
bool = buffer.redo();

num = buffer.transact<number>(500, (): number => {
	return 42;
});

buffer.clearUndoStack();
num = buffer.createCheckpoint();
bool = buffer.revertToCheckpoint(42);
bool = buffer.groupChangesSinceCheckpoint(42);
buffer.getChangesSinceCheckpoint(42);

// Search And Replace
buffer.scan(/r^Test/, (): void => {});
buffer.scan(/r^Test/, { leadingContextLineCount: 42 }, (): void => {});
buffer.scan(/r^Test/, { trailingContextLineCount: 42 }, (): void => {});
buffer.scan(/r^Test/, { leadingContextLineCount: 42, trailingContextLineCount: 42 },
	(): void => {});
buffer.scan(/r^Test/, (match, matchText, range, stop, replace, leadingContextLines,
	trailingContextLines): void => {});
buffer.scan(/r^Test/, { leadingContextLineCount: 42 }, (match, matchText, range,
	stop, replace, leadingContextLines, trailingContextLines): void => {});

buffer.backwardsScan(/r^Test/, (): void => {});
buffer.backwardsScan(/r^Test/, { leadingContextLineCount: 42 }, (): void => {});
buffer.backwardsScan(/r^Test/, { trailingContextLineCount: 42 }, (): void => {});
buffer.backwardsScan(/r^Test/, { leadingContextLineCount: 42, trailingContextLineCount: 42 },
	(): void => {});
buffer.backwardsScan(/r^Test/, (match, matchText, range, stop, replace, leadingContextLines,
	trailingContextLines): void => {});
buffer.backwardsScan(/r^Test/, { leadingContextLineCount: 42 }, (match, matchText, range,
	stop, replace, leadingContextLines, trailingContextLines): void => {});

buffer.scanInRange(/r^Test/, range, (): void => {});
buffer.scanInRange(/r^Test/, range, { leadingContextLineCount: 42 }, (): void => {});
buffer.scanInRange(/r^Test/, range, { trailingContextLineCount: 42 }, (): void => {});
buffer.scanInRange(/r^Test/, range, { leadingContextLineCount: 42, trailingContextLineCount: 42 },
	(): void => {});
buffer.scanInRange(/r^Test/, range, (match, matchText, range, stop, replace, leadingContextLines,
	trailingContextLines): void => {});
buffer.scanInRange(/r^Test/, range, { leadingContextLineCount: 42 }, (match, matchText, range,
	stop, replace, leadingContextLines, trailingContextLines): void => {});
buffer.scanInRange(/r^Test/, [point, point], (): void => {});
buffer.scanInRange(/r^Test/, [[0, 0], [0, 0]], (): void => {});
buffer.scanInRange(/r^Test/, [point, [0, 0]], (): void => {});
buffer.scanInRange(/r^Test/, [[0, 0], point], (): void => {});
buffer.scanInRange(/r^Test/, [[0, 0], [0, 0]], { trailingContextLineCount: 42 },
	(): void => {});

buffer.backwardsScanInRange(/r^Test/, range, (): void => {});
buffer.backwardsScanInRange(/r^Test/, range, { leadingContextLineCount: 42 }, (): void => {});
buffer.backwardsScanInRange(/r^Test/, range, { trailingContextLineCount: 42 }, (): void => {});
buffer.backwardsScanInRange(/r^Test/, range, { leadingContextLineCount: 42,
	trailingContextLineCount: 42 }, (): void => {});
buffer.backwardsScanInRange(/r^Test/, range, (match, matchText, range, stop, replace,
	leadingContextLines, trailingContextLines): void => {});
buffer.backwardsScanInRange(/r^Test/, range, { leadingContextLineCount: 42 }, (match,
	matchText, range, stop, replace, leadingContextLines, trailingContextLines):
	void => {});
buffer.backwardsScanInRange(/r^Test/, [point, point], (): void => {});
buffer.backwardsScanInRange(/r^Test/, [[0, 0], [0, 0]], (): void => {});
buffer.backwardsScanInRange(/r^Test/, [point, [0, 0]], (): void => {});
buffer.backwardsScanInRange(/r^Test/, [[0, 0], point], (): void => {});
buffer.backwardsScanInRange(/r^Test/, [[0, 0], [0, 0]], { trailingContextLineCount: 42 },
	(): void => {});

num = buffer.replace(/r^Test/, "Test");

// Buffer TextBuffer.Range Details
range = buffer.getRange();
num = buffer.getLineCount();
num = buffer.getLastRow();
point = buffer.getFirstPosition();
point = buffer.getEndPosition();
num = buffer.getMaxCharacterIndex();
range = buffer.rangeForRow(42, true);
num = buffer.characterIndexForPosition(point);
point = buffer.positionForCharacterIndex(42);
range = buffer.clipRange(range);
point = buffer.clipPosition(point);

// Buffer Operations
buffer.save().then(() => {});
buffer.saveAs("Test.file").then(() => {});
buffer.reload();
