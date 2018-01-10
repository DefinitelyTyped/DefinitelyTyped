import { Disposable } from "event-kit";
import TextBuffer = require("text-buffer");

declare let obj: object;
declare let bool: boolean;
declare let num: number;
declare let nums: number[];
declare let str: string;
declare let strs: string[];

declare let buffer: TextBuffer.TextBuffer;
declare let displayMarker: TextBuffer.DisplayMarker;
declare let displayMarkers: TextBuffer.DisplayMarker[];
declare let displayMarkerLayer: TextBuffer.DisplayMarkerLayer;
declare let marker: TextBuffer.Marker;
declare let markers: TextBuffer.Marker[];
declare let markerLayer: TextBuffer.MarkerLayer;
declare let sub: Disposable;

// Point ======================================================================
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

// Range ======================================================================
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
nums = range.getRows();

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

async function bufferLoadFile() {
    buffer = await TextBuffer.load("Test.file");
    buffer = await TextBuffer.load("Test.file", { encoding: "utf8" });
    buffer = await TextBuffer.load("Test.file", { shouldDestroyOnFileDelete });
    buffer = await TextBuffer.load("Test.file", { encoding: "utf8", shouldDestroyOnFileDelete });
}

buffer = TextBuffer.loadSync("Test.file");
TextBuffer.loadSync("Test.file", { encoding: "utf8" });
TextBuffer.loadSync("Test.file", { shouldDestroyOnFileDelete });
TextBuffer.loadSync("Test.file", { encoding: "uft8", shouldDestroyOnFileDelete });

async function deserializeBuffer() {
    buffer = await TextBuffer.deserialize({});
}

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
sub = buffer.onWillSave(() => Promise.resolve());

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

const path = buffer.getPath();
if (path) {
    str = path.substr(0, 42);
}

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

strs = buffer.getLines();
str = buffer.getLastLine();

const rowText = buffer.lineForRow(42);
if (rowText) {
    str = rowText;
}

const lineEnding = buffer.lineEndingForRow(42);
if (lineEnding) {
    str = lineEnding;
}

num = buffer.lineLengthForRow(42);
bool = buffer.isRowBlank(42);

const prevRow = buffer.previousNonBlankRow(42);
if (prevRow) {
    num = prevRow;
}

const nextRow = buffer.nextNonBlankRow(42);
if (nextRow) {
    num = nextRow;
}

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

const testMarkerLayer = buffer.getMarkerLayer("Test");
if (testMarkerLayer) {
    markerLayer = testMarkerLayer;
}

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

markers = buffer.getMarkers();
marker = buffer.getMarker(42);

markers = buffer.findMarkers({
    startPosition: point,
    endPosition: point,
    startsInRange: range,
    endsInRange: range,
    containsPoint: point,
    containsRange: range,
    startRow: num,
    endRow: num,
    intersectsRow: num,
});
markers = buffer.findMarkers({ startsInRange: [point, point] });
markers = buffer.findMarkers({ startsInRange: [point, [0, 0]] });
markers = buffer.findMarkers({ startsInRange: [[0, 0], point] });
markers = buffer.findMarkers({ startsInRange: [[0, 0], [0, 0]] });

num = buffer.getMarkerCount();

// History
bool = buffer.undo();
bool = buffer.redo();

num = buffer.transact<number>(500, (): number => 42);

buffer.clearUndoStack();
num = buffer.createCheckpoint();
bool = buffer.revertToCheckpoint(42);
bool = buffer.groupChangesSinceCheckpoint(42);
buffer.getChangesSinceCheckpoint(42);

// Search And Replace
buffer.scan(/r^Test/, (): void => {});
buffer.scan(/r^Test/, (params) => {
    num = params.match.index;
    str = params.matchText;
    range = params.range;
    params.replace("Test");
    params.stop();
});
buffer.scan(/r^Test/, {
    leadingContextLineCount: 5,
    trailingContextLineCount: 5,
}, (params) => {
    strs = params.leadingContextLines;
    strs = params.trailingContextLines;
});

buffer.backwardsScan(/r^Test/, (): void => {});
buffer.backwardsScan(/r^Test/, (params) => {
    num = params.match.index;
    str = params.matchText;
    range = params.range;
    params.replace("Test");
    params.stop();
});
buffer.backwardsScan(/r^Test/, {
    leadingContextLineCount: 5,
    trailingContextLineCount: 5,
}, (params) => {
    strs = params.leadingContextLines;
    strs = params.trailingContextLines;
});

buffer.scanInRange(/r^Test/, range, (): void => {});
buffer.scanInRange(/r^Test/, range, (params) => {
    num = params.match.index;
    str = params.matchText;
    range = params.range;
    params.replace("Test");
    params.stop();
});
buffer.scanInRange(/r^Test/, range, {
    leadingContextLineCount: 5,
    trailingContextLineCount: 5,
}, (params) => {
    strs = params.leadingContextLines;
    strs = params.trailingContextLines;
});
buffer.scanInRange(/r^Test/, [point, point], (): void => {});
buffer.scanInRange(/r^Test/, [[0, 0], [0, 0]], (): void => {});
buffer.scanInRange(/r^Test/, [point, [0, 0]], (): void => {});
buffer.scanInRange(/r^Test/, [[0, 0], point], (): void => {});
buffer.scanInRange(/r^Test/, [[0, 0], [0, 0]], { trailingContextLineCount: 42 },
    (): void => {});

buffer.backwardsScanInRange(/r^Test/, range, (): void => {});
buffer.backwardsScanInRange(/r^Test/, range, (params) => {
    num = params.match.index;
    str = params.matchText;
    range = params.range;
    params.replace("Test");
    params.stop();
});
buffer.backwardsScanInRange(/r^Test/, range, {
    leadingContextLineCount: 5,
    trailingContextLineCount: 5,
}, (params) => {
    strs = params.leadingContextLines;
    strs = params.trailingContextLines;
});
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
range = buffer.clipRange([point, point]);
range = buffer.clipRange([point, [0, 0]]);
range = buffer.clipRange([[0, 0], point]);
range = buffer.clipRange([[0, 0], [0, 0]]);

point = buffer.clipPosition(point);
point = buffer.clipPosition([0, 0]);

// Buffer Operations
async function saveBuffer() {
    await buffer.save();
    await buffer.saveAs("Test.file");
}

buffer.reload();

// Marker =====================================================================
// Properties
num = marker.id;
bool = marker.tailed;
bool = marker.reversed;
bool = marker.valid;
str = marker.invalidate;

// Lifecycle
marker = marker.copy({
    tailed: true,
    reversed: true,
    invalidate: "surround",
    exclusive: false,
    properties: { custom: "prop" },
});

marker.destroy();

// Event Subscription
sub = marker.onDidDestroy(() => {});

sub = marker.onDidChange(event => {
    event.oldHeadPosition;
    event.newHeadPosition;
    event.oldTailPosition;
    event.newTailPosition;
    event.wasValid;
    event.isValid;
    event.hadTail;
    event.hasTail;
    event.oldProperties;
    event.newProperties;
    event.textChanged;
});

// Marker Details
range = marker.getRange();
point = marker.getHeadPosition();
point = marker.getTailPosition();
point = marker.getStartPosition();
point = marker.getEndPosition();
bool = marker.isReversed();
bool = marker.hasTail();
bool = marker.isValid();
bool = marker.isDestroyed();
bool = marker.isExclusive();
str = marker.getInvalidationStrategy();

// Mutating Markers
bool = marker.setRange(range);
bool = marker.setRange([point, point]);
bool = marker.setRange([point, [0, 0]]);
bool = marker.setRange([[0, 0], point]);
bool = marker.setRange([[0, 0], [0, 0]]);
bool = marker.setRange([point, point], { exclusive: false });
bool = marker.setRange(range, { exclusive: true, reversed: false });

bool = marker.setHeadPosition(point);
bool = marker.setHeadPosition([0, 0]);

bool = marker.setTailPosition(point);
bool = marker.setTailPosition([0, 0]);

bool = marker.clearTail();
bool = marker.plantTail();

// Comparison
bool = marker.isEqual(marker);
num = marker.compare(marker);

// MarkerLayer ================================================================
// Lifecycle
markerLayer = markerLayer.copy();
bool = markerLayer.destroy();
markerLayer.clear();
bool = markerLayer.isDestroyed();

// Querying
const potentialMarker = markerLayer.getMarker(42);
if (potentialMarker) marker = potentialMarker;

markers = markerLayer.getMarkers();
num = markerLayer.getMarkerCount();

markers = markerLayer.findMarkers({
    startPosition: point,
    endPosition: point,
    startsInRange: range,
    endsInRange: range,
    containsPoint: point,
    containsRange: range,
    startRow: num,
    endRow: num,
    intersectsRow: num,
});
markers = markerLayer.findMarkers({ containsRange: [point, point] });
markers = markerLayer.findMarkers({ containsRange: [point, [0, 0]] });
markers = markerLayer.findMarkers({ containsRange: [[0, 0], point] });
markers = markerLayer.findMarkers({ containsRange: [[0, 0], [0, 0]] });

// Marker creation
marker = markerLayer.markRange(range);
marker = markerLayer.markRange([point, point]);
marker = markerLayer.markRange([point, [0, 0]]);
marker = markerLayer.markRange([[0, 0], point]);
marker = markerLayer.markRange([[0, 0], [0, 0]]);
marker = markerLayer.markRange(range, { exclusive: true });
marker = markerLayer.markRange([point, point], { invalidate: "never" });
marker = markerLayer.markRange(range, {
    exclusive: false, invalidate: "surround", reversed: false,
});

marker = markerLayer.markPosition(point);
marker = markerLayer.markPosition([0, 0]);
marker = markerLayer.markPosition(point, { exclusive: false });
marker = markerLayer.markPosition([0, 0], { invalidate: "inside" });
marker = markerLayer.markPosition(point, { exclusive: true, invalidate: "surround" });

// Event subscription
sub = markerLayer.onDidUpdate(() => {});
sub = markerLayer.onDidCreateMarker(marker => marker.id);
sub = markerLayer.onDidDestroy(() => {});

// DisplayMarker ==============================================================
// Construction and Destruction
displayMarker.destroy();

displayMarker = displayMarker.copy();
displayMarker = displayMarker.copy({});
displayMarker = displayMarker.copy({
    tailed: true,
    reversed: false,
    invalidate: "never",
    exclusive: false,
    properties: { deprecated: "property" },
});

// Event Subscription
sub = displayMarker.onDidChange((event) => { event.hasTail; });
sub = displayMarker.onDidDestroy(() => {});

// TextEditorMarker Details
bool = displayMarker.isValid();
bool = displayMarker.isDestroyed();
bool = displayMarker.isReversed();
bool = displayMarker.isExclusive();
str = displayMarker.getInvalidationStrategy();
obj = displayMarker.getProperties();
displayMarker.setProperties(obj);

bool = displayMarker.matchesProperties({
    startBufferPosition: point,
    endBufferPosition: point,
    startScreenPosition: point,
    endScreenPosition: point,
    startsInBufferRange: range,
    endsInBufferRange: range,
    startsInScreenRange: range,
    endsInScreenRange: range,
    startBufferRow: num,
    endBufferRow: num,
    startScreenRow: num,
    endScreenRow: num,
    intersectsBufferRowRange: [num, num],
    intersectsScreenRowRange: [num, num],
    containsBufferRange: range,
    containsBufferPosition: point,
    containedInBufferRange: range,
    containedInScreenRange: range,
    intersectsBufferRange: range,
    intersectsScreenRange: range,
});
bool = displayMarker.matchesProperties({
    intersectsBufferRange: [point, point],
});
bool = displayMarker.matchesProperties({
    intersectsBufferRange: [point, [0, 0]],
});
bool = displayMarker.matchesProperties({
    intersectsBufferRange: [[0, 0], point],
});
bool = displayMarker.matchesProperties({
    intersectsBufferRange: [[0, 0], [0, 0]],
});

// Comparing to other markers
num = displayMarker.compare(displayMarker);
bool = displayMarker.isEqual(displayMarker);

// Managing the marker's range
range = displayMarker.getBufferRange();
range = displayMarker.getScreenRange();

displayMarker.setBufferRange(range);
displayMarker.setBufferRange([point, point]);
displayMarker.setBufferRange([point, [0, 0]]);
displayMarker.setBufferRange([[0, 0], point]);
displayMarker.setBufferRange([[0, 0], [0, 0]]);
displayMarker.setBufferRange(range, { reversed: true });

displayMarker.setScreenRange(range);
displayMarker.setScreenRange([point, point]);
displayMarker.setScreenRange([point, [0, 0]]);
displayMarker.setScreenRange([[0, 0], point]);
displayMarker.setScreenRange([[0, 0], [0, 0]]);
displayMarker.setScreenRange(range, { reversed: false });

point = displayMarker.getStartScreenPosition();
point = displayMarker.getStartScreenPosition({ clipDirection: "backward" });

point = displayMarker.getEndScreenPosition();
point = displayMarker.getEndScreenPosition({ clipDirection: "forward" });

// Extended Methods
point = displayMarker.getHeadBufferPosition();
displayMarker.setHeadBufferPosition(point);

displayMarker.getHeadScreenPosition();
displayMarker.getHeadScreenPosition({ clipDirection: "closest" });

displayMarker.setHeadScreenPosition(point);
displayMarker.setHeadScreenPosition([0, 0]);
displayMarker.setHeadScreenPosition(point, { clipDirection: "backward" });

point = displayMarker.getTailBufferPosition();

displayMarker.setTailBufferPosition(point);
displayMarker.setTailBufferPosition([0, 0]);

point = displayMarker.getTailScreenPosition();
point = displayMarker.getTailScreenPosition({ clipDirection: "forward" });

displayMarker.setTailScreenPosition(point);
displayMarker.setTailScreenPosition([0, 0]);
displayMarker.setTailScreenPosition(point, { clipDirection: "closest" });

point = displayMarker.getStartBufferPosition();
point = displayMarker.getEndBufferPosition();
bool = displayMarker.hasTail();
displayMarker.plantTail();
displayMarker.clearTail();

// DisplayMarkerLayer =========================================================
// Lifecycle
displayMarkerLayer.destroy();
displayMarkerLayer.clear();
bool = displayMarkerLayer.isDestroyed();

// Event Subscription
sub = displayMarkerLayer.onDidDestroy(() => {});
sub = displayMarkerLayer.onDidUpdate(() => {});
sub = displayMarkerLayer.onDidCreateMarker((marker) => { marker.isReversed(); });

// Marker creation
displayMarker = displayMarkerLayer.markScreenRange(range);
displayMarker = displayMarkerLayer.markScreenRange(range, {});
displayMarker = displayMarkerLayer.markScreenRange(range, { clipDirection: "forward" });
displayMarker = displayMarkerLayer.markScreenRange(range, { exclusive: true });
displayMarker = displayMarkerLayer.markScreenRange(range, { invalidate: "never" });
displayMarker = displayMarkerLayer.markScreenRange(range, { reversed: true });
displayMarker = displayMarkerLayer.markScreenRange(range, { clipDirection: "backward",
    exclusive: false, invalidate: "overlap", reversed: false });
displayMarker = displayMarkerLayer.markScreenRange([point, point]);
displayMarker = displayMarkerLayer.markScreenRange([point, [0, 0]]);
displayMarker = displayMarkerLayer.markScreenRange([[0, 0], point]);
displayMarker = displayMarkerLayer.markScreenRange([[0, 0], [0, 0]]);
displayMarker = displayMarkerLayer.markScreenRange([[0, 0], point], { reversed: true });

displayMarker = displayMarkerLayer.markScreenPosition(point);
displayMarker = displayMarkerLayer.markScreenPosition(point, {});
displayMarker = displayMarkerLayer.markScreenPosition(point, { clipDirection: "forward" });
displayMarker = displayMarkerLayer.markScreenPosition(point, { exclusive: true });
displayMarker = displayMarkerLayer.markScreenPosition(point, { invalidate: "never" });
displayMarker = displayMarkerLayer.markScreenPosition(point, { clipDirection: "backward",
    exclusive: false, invalidate: "overlap" });
displayMarker = displayMarkerLayer.markScreenPosition([0, 0]);
displayMarker = displayMarkerLayer.markScreenPosition([0, 0], { exclusive: false });

displayMarker = displayMarkerLayer.markBufferRange(range);
displayMarker = displayMarkerLayer.markBufferRange(range, {});
displayMarker = displayMarkerLayer.markBufferRange(range, { invalidate: "inside" });
displayMarker = displayMarkerLayer.markBufferRange(range, { exclusive: true });
displayMarker = displayMarkerLayer.markBufferRange(range, { reversed: true });
displayMarker = displayMarkerLayer.markBufferRange(range, { exclusive: false,
    invalidate: "overlap", reversed: false });
displayMarker = displayMarkerLayer.markBufferRange([point, point]);
displayMarker = displayMarkerLayer.markBufferRange([point, [0, 0]]);
displayMarker = displayMarkerLayer.markBufferRange([[0, 0], point]);
displayMarker = displayMarkerLayer.markBufferRange([[0, 0], [0, 0]]);
displayMarker = displayMarkerLayer.markBufferRange([[0, 0], point], { reversed: true });

displayMarker = displayMarkerLayer.markBufferPosition(point);
displayMarker = displayMarkerLayer.markBufferPosition(point, {});
displayMarker = displayMarkerLayer.markBufferPosition(point, { exclusive: true });
displayMarker = displayMarkerLayer.markBufferPosition(point, { invalidate: "never" });
displayMarker = displayMarkerLayer.markBufferPosition(point, { exclusive: false,
    invalidate: "overlap" });
displayMarker = displayMarkerLayer.markBufferPosition([0, 0]);
displayMarker = displayMarkerLayer.markBufferPosition([0, 0], { exclusive: false });

// Querying
displayMarker = displayMarkerLayer.getMarker(42);
displayMarkers = displayMarkerLayer.getMarkers();
num = displayMarkerLayer.getMarkerCount();

displayMarkers = displayMarkerLayer.findMarkers({
    startBufferPosition: point,
    endBufferPosition: point,
    startScreenPosition: point,
    endScreenPosition: point,
    startsInBufferRange: range,
    endsInBufferRange: range,
    startsInScreenRange: range,
    endsInScreenRange: range,
    startBufferRow: num,
    endBufferRow: num,
    startScreenRow: num,
    endScreenRow: num,
    intersectsBufferRowRange: [num, num],
    intersectsScreenRowRange: [num, num],
    containsBufferRange: range,
    containsBufferPosition: point,
    containedInBufferRange: range,
    containedInScreenRange: range,
    intersectsBufferRange: range,
    intersectsScreenRange: range,
});
displayMarkers = displayMarkerLayer.findMarkers({
    intersectsScreenRange: [point, point],
});
displayMarkers = displayMarkerLayer.findMarkers({
    intersectsScreenRange: [point, [0, 0]],
});
displayMarkers = displayMarkerLayer.findMarkers({
    intersectsScreenRange: [[0, 0], point],
});
displayMarkers = displayMarkerLayer.findMarkers({
    intersectsScreenRange: [[0, 0], [0, 0]],
});
