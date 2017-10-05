declare let str: string;
declare let num: number;
declare let bool: boolean;
declare let strs: string[];
declare let obj: object;
declare let objs: object[];
declare let regExp: RegExp;

declare let element: HTMLElement;
declare let elements: HTMLElement[];
declare const div: HTMLDivElement;

declare let grammar: Atom.Grammar;
declare let pos: Atom.Point;
declare let posArr: Atom.Point[];
declare let range: Atom.Range;
declare let ranges: Atom.Range[];
declare let marker: Atom.Marker;
declare let displayMarker: Atom.DisplayMarker;
declare let displayMarkers: Atom.DisplayMarker[];
declare let displayMarkerLayer: Atom.DisplayMarkerLayer;
declare let sub: Atom.Disposable;
declare let dir: Atom.Directory;
declare let dirs: Atom.Directory[];

declare let buffer: Atom.TextBuffer;
declare let cursor: Atom.Cursor;
declare let cursors: Atom.Cursor[];
declare let editor: Atom.TextEditor;
declare let editors: Atom.TextEditor[];
declare let decoration: Atom.Decoration;
declare let decorations: Atom.Decoration[];
declare let notification: Atom.Notification;
declare let notifications: Atom.Notification[];
declare let scopeDescriptor: Atom.ScopeDescriptor;
declare let pack: Atom.Package;
declare let packs: Atom.Package[];
declare let pane: Atom.Pane;
declare let panes: Atom.Pane[];
declare let panel: Atom.Panel;
declare let panels: Atom.Panel[];
declare let project: Atom.Project;
declare let repository: Atom.GitRepository;
declare let repositories: Atom.GitRepository[];
declare let gutter: Atom.Gutter;
declare let gutters: Atom.Gutter[];
declare let historyPaths: Atom.HistoryProject[];
declare let layerDecoration: Atom.LayerDecoration;
declare let selection: Atom.Selection;
declare let selections: Atom.Selection[];
declare let styleManager: Atom.StyleManager;
declare let tooltips: Atom.Tooltip[];
declare let dock: Atom.Dock;
declare let workspaceCenter: Atom.WorkspaceCenter;
declare let paneContainer: Atom.Dock|Atom.WorkspaceCenter;

// Exports Testing ============================================================
import { BufferedNodeProcess, BufferedProcess, GitRepository, Notification,
	TextBuffer, TextEditor, Point, Range, File, Directory, Emitter, Disposable,
	CompositeDisposable, Task, watchPath } from "atom";

const pathWatcher = watchPath("/var/test", {}, (events) => {
	for (const event of events) {
		str = event.path;
		str = event.action;
		if (event.oldPath) str = event.oldPath;
	}
});

// global "atom"
atom.commands;
atom.config;
atom.clipboard;
atom.contextMenu;
atom.menu;
atom.keymaps;
atom.tooltips;
atom.notifications;
atom.project;
atom.grammars;
atom.history;
atom.packages;
atom.themes;
atom.styles;
atom.deserializers;
atom.views;
atom.workspace;
atom.textEditors;
atom.onDidBeep((): void => {});
atom.onWillThrowError((): void => {});
atom.onDidThrowError((): void => {});
atom.whenShellEnvironmentLoaded((): void => {});
atom.inDevMode();
atom.inSafeMode();
atom.inSpecMode();
atom.getVersion();
str = atom.getReleaseChannel();
atom.isReleasedVersion();
atom.getWindowLoadTime();

const loadSettings = atom.getLoadSettings();
const testValue = loadSettings.env["test"];
if (testValue) str = testValue;

atom.open({ devMode: false, newWindow: true, pathsToOpen: ["Test.file"],
	safeMode: false });
atom.close();
atom.getSize();
atom.setSize(42, 42);
atom.getPosition();
atom.setPosition(42, 42);
atom.pickFolder((): void => {});

obj = atom.getCurrentWindow();

atom.center();
atom.focus();
atom.show();
atom.hide();
atom.reload();
atom.restartApplication();
atom.isMaximized();
atom.isFullScreen();
atom.setFullScreen(true);
atom.toggleFullScreen();
atom.beep();
atom.confirm({ buttons: ["Test"], detailedMessage: "Test", message: "Test" });

async function toggleDevTools() {
	await atom.openDevTools();
	await atom.toggleDevTools();
}

atom.executeJavaScriptInDevTools("Test");

// Usage Testing ==============================================================
// Some examples taken from the Atom documentation.
// .commands
sub = atom.commands.add("test", { "execute-command": () => {}});

// .clipboard
str = atom.clipboard.read();

// .contextMenu
sub = atom.contextMenu.add({
	"atom-workspace": [{label: "Help", command: "application:open-documentation"}],
	"atom-text-editor": [{
		label: "History",
		submenu: [
			{ label: "Undo", command: "core:undo" },
			{ label: "Redo", command: "core:redo" },
		],
	}],
});

// .menu
sub = atom.menu.add([{
	label: "Hello",
	submenu : [{ label: "World!", command: "hello:world" }],
}]);

// .keymaps
atom.keymaps.add("Test.Path", {
	selector: {
		a: "execute-something",
	},
});

// .tooltips
sub = atom.tooltips.add(div, { title: "Tooltip Test" });

// .notifications
notification = atom.notifications.addError("Error");

// .project
atom.project.addPath("/var/test");

// .grammars
grammar = atom.grammars.loadGrammarSync("Test.file");

// .history
historyPaths = atom.history.getProjects();

// .packages
sub = atom.packages.onDidActivatePackage((atomPackage) => {
	atomPackage.isCompatible();
});

// .themes
sub = atom.themes.onDidChangeActiveThemes(() => {});

// .styles
sub = atom.styles.onDidAddStyleElement((styleElement) => {});

// .deserializers
const serializer = {
	name: "Test",
	deserialize: () => ({}),
};
atom.deserializers.add(serializer);

// .views
sub = atom.views.addViewProvider(Range, (range): HTMLElement => {
	range.start;
	return div;
});

// .workspace
sub = atom.workspace.observeTextEditors((editor) => {
	sub = editor.onDidStopChanging((event) => {
		for (const change of event.changes) {
			change.newExtent;
		}
	});

	const text: string[] = editor.getBuffer().getLines();
});

// .textEditors
atom.textEditors.add(editor);

// Atom API Testing ===========================================================
//// AtomEnvironment ==========================================================
// Event Subscription
sub = atom.onDidBeep(() => {});
sub = atom.onWillThrowError(event => event.message);
sub = atom.onDidThrowError(event => event.line);
sub = atom.whenShellEnvironmentLoaded(() => {});

// Atom Details
bool = atom.inDevMode();
bool = atom.inSafeMode();
bool = atom.inSpecMode();
str = atom.getVersion();
bool = atom.isReleasedVersion();
num = atom.getWindowLoadTime();
obj = atom.getLoadSettings();

// Managing The Atom Window
declare let dim: { width: number, height: number };
declare let v2: { x: number, y: number };

// atom.open(params);
atom.close();
dim = atom.getSize();
atom.setSize(42, 42);
v2 = atom.getPosition();
atom.setPosition(42, 42);

atom.pickFolder((paths) => {
	if (paths) {
		paths.length;
	}
});

atom.getCurrentWindow();
atom.center();
atom.focus();
atom.show();
atom.hide();
atom.reload();
atom.restartApplication();
bool = atom.isMaximized();
bool = atom.isFullScreen();
atom.setFullScreen(true);
atom.toggleFullScreen();

// Messaging the User
atom.beep();

atom.confirm({ message: "Test" });
atom.confirm({ message: "Test", buttons: [ "a", "b" ], detailedMessage: "Test" });
num = atom.confirm({ message: "Test", detailedMessage: "Test", buttons: {
	Test: () => { atom.beep(); },
}});

// Managing the Dev Tools
async function manageDevTools() {
	await atom.openDevTools();
	await atom.toggleDevTools();
}

atom.executeJavaScriptInDevTools("Test");

//// BufferedNodeProcess ======================================================
const nodeProcess = new BufferedNodeProcess({
	command: "File.path",
});

new BufferedNodeProcess({
	command: "File.path",
	args: [],
	options: {
		cwd: "/var/test",
		detached: true,
	},
	exit: (): void => {},
	stderr: (): void => {},
	stdout: (): void => {},
});

//// BufferedProcess ==========================================================
const process = new BufferedProcess({
	command: "File.path",
});

new BufferedProcess({
	command: "File.path",
	args: [],
	options: {},
	exit: (): void => {},
	stderr: (): void => {},
	stdout: (): void => {},
});

sub = process.onWillThrowError((error) => {
	error.error;
	error.handle();
});

process.kill();

//// Clipboard ================================================================
atom.clipboard.read();
atom.clipboard.write("Test");
const clip = atom.clipboard.readWithMetadata();
str = clip.text;
obj = clip.metadata;

//// Color ====================================================================
declare const color: Atom.Color;
str = color.toHexString();
str = color.toRGBAString();

//// CommandRegistry ==========================================================
atom.commands.add("test", "test:function", (event) => {});
atom.commands.add("test", {
	"test-function": (event) => {},
	"test-function2": (event) => {},
});
atom.commands.add("test", "test:function", {
	didDispatch: (event) => event.stopImmediatePropagation(),
	description: "A Command Test",
	displayName: "Command: Test",
});

const commands = atom.commands.findCommands({ target: element });
atom.commands.dispatch(element, "test:function");
sub = atom.commands.onWillDispatch((event) => { event.stopPropagation(); });
sub = atom.commands.onDidDispatch((event) => { event.cancelable; });

//// CompositeDisposable -- See 'event-kit' testing.
//// Config ===================================================================
atom.config.observe("test", (event) => {});
atom.config.observe("test", { scope: scopeDescriptor }, (value) => {});

atom.config.onDidChange((event) => { event.newValue; });
atom.config.onDidChange("test", (event) => { event.oldValue; });

// Managing Settings
atom.config.get("test");
atom.config.get("test", { scope: scopeDescriptor });
atom.config.get("test", { excludeSources: ["test.source"] });
atom.config.get("test", { sources: ["test.source"] });
atom.config.get("test", { scope: scopeDescriptor, excludeSources: ["a"],
	sources: ["b"] });

atom.config.set("test", 42);
atom.config.set("test", 42, { scopeSelector: "test-selector" });
atom.config.set("test", 42, { source: "test" });
atom.config.set("test", 42, {scopeSelector: "test-selector", source: "test" });

atom.config.unset("test");
atom.config.unset("test", { scopeSelector: "test-selector" });
atom.config.unset("test", { source: "test" });
atom.config.unset("test", { scopeSelector: "test-selector", source: "test" });

const allConfigValues = atom.config.getAll("test");
for (const { scopeDescriptor, value } of allConfigValues) {
	scopeDescriptor.scopes;
}
atom.config.getAll("test", { scope: scopeDescriptor });
atom.config.getAll("test", { excludeSources: ["test"] });
atom.config.getAll("test", { sources: ["test"] });
atom.config.getAll("test", { scope: scopeDescriptor, excludeSources: ["a"],
	sources: ["b"] });

strs = atom.config.getSources();

atom.config.getSchema("test");

str = atom.config.getUserConfigPath();

atom.config.transact(() => {});

//// ContextMenuManager -- See above.
//// Cursor ===================================================================
// Event Subscription
sub = cursor.onDidChangePosition((event) => { event.newBufferPosition; });
sub = cursor.onDidDestroy(() => {});

// Managing Cursor Position
cursor.setScreenPosition(pos);
cursor.setScreenPosition(pos, {});
cursor.setScreenPosition(pos, { autoscroll: true });

pos = cursor.getScreenPosition();

cursor.setBufferPosition(pos);
cursor.setBufferPosition(pos, {});
cursor.setBufferPosition(pos, { autoscroll: true });

pos = cursor.getBufferPosition();
num = cursor.getScreenRow();
num = cursor.getScreenColumn();
num = cursor.getBufferRow();
num = cursor.getBufferColumn();
str = cursor.getCurrentBufferLine();
bool = cursor.isAtBeginningOfLine();
bool = cursor.isAtEndOfLine();

// Cursor Position Details
displayMarker = cursor.getMarker();
bool = cursor.isSurroundedByWhitespace();
bool = cursor.isBetweenWordAndNonWord();

bool = cursor.isInsideWord();
bool = cursor.isInsideWord({});
bool = cursor.isInsideWord({ wordRegex: regExp });

num = cursor.getIndentLevel();
scopeDescriptor = cursor.getScopeDescriptor();
bool = cursor.hasPrecedingCharactersOnLine();
bool = cursor.isLastCursor();

// Moving the Cursor
cursor.moveUp();
cursor.moveUp(42);
cursor.moveUp(42, {});
cursor.moveUp(42, { moveToEndOfSelection: true });

cursor.moveDown();
cursor.moveDown(42);
cursor.moveDown(42, {});
cursor.moveDown(42, { moveToEndOfSelection: true });

cursor.moveLeft();
cursor.moveLeft(42);
cursor.moveLeft(42, {});
cursor.moveLeft(42, { moveToEndOfSelection: true });

cursor.moveRight();
cursor.moveRight(42);
cursor.moveRight(42, {});
cursor.moveRight(42, { moveToEndOfSelection: true });

cursor.moveToTop();
cursor.moveToBottom();
cursor.moveToBeginningOfScreenLine();
cursor.moveToBeginningOfLine();
cursor.moveToFirstCharacterOfLine();
cursor.moveToEndOfScreenLine();
cursor.moveToEndOfLine();
cursor.moveToBeginningOfWord();
cursor.moveToEndOfWord();
cursor.moveToBeginningOfNextWord();
cursor.moveToPreviousWordBoundary();
cursor.moveToNextWordBoundary();
cursor.moveToPreviousSubwordBoundary();
cursor.moveToNextSubwordBoundary();
cursor.skipLeadingWhitespace();
cursor.moveToBeginningOfNextParagraph();
cursor.moveToBeginningOfPreviousParagraph();

// Local Positions and Ranges
pos = cursor.getPreviousWordBoundaryBufferPosition();
pos = cursor.getPreviousWordBoundaryBufferPosition({});
pos = cursor.getPreviousWordBoundaryBufferPosition({ wordRegex: regExp });

cursor.getNextWordBoundaryBufferPosition();
cursor.getNextWordBoundaryBufferPosition({ wordRegex: regExp });

cursor.getBeginningOfCurrentWordBufferPosition();
cursor.getBeginningOfCurrentWordBufferPosition({});
cursor.getBeginningOfCurrentWordBufferPosition({ wordRegex: regExp });
cursor.getBeginningOfCurrentWordBufferPosition({ allowPrevious: true });
cursor.getBeginningOfCurrentWordBufferPosition({ includeNonWordCharacters: true });
cursor.getBeginningOfCurrentWordBufferPosition({ wordRegex: regExp,
	allowPrevious: true, includeNonWordCharacters: true });

cursor.getEndOfCurrentWordBufferPosition();
cursor.getEndOfCurrentWordBufferPosition({});
cursor.getEndOfCurrentWordBufferPosition({ wordRegex: regExp });
cursor.getEndOfCurrentWordBufferPosition({ includeNonWordCharacters: true });
cursor.getEndOfCurrentWordBufferPosition({ wordRegex: regExp, includeNonWordCharacters:
	true });

cursor.getBeginningOfNextWordBufferPosition();
cursor.getBeginningOfNextWordBufferPosition({});
cursor.getBeginningOfNextWordBufferPosition({ wordRegex: regExp });

cursor.getCurrentWordBufferRange();
cursor.getCurrentWordBufferRange({});
cursor.getCurrentWordBufferRange({ wordRegex: regExp });

cursor.getCurrentLineBufferRange();
cursor.getCurrentLineBufferRange({});
cursor.getCurrentLineBufferRange({ includeNewline: true });

range = cursor.getCurrentParagraphBufferRange();
str = cursor.getCurrentWordPrefix();

// Comparing to another cursor
num = cursor.compare(cursor);

// Utilities
cursor.clearSelection();

regExp = cursor.wordRegExp();
regExp = cursor.wordRegExp({});
regExp = cursor.wordRegExp({ includeNonWordCharacters: true });

regExp = cursor.subwordRegExp();
regExp = cursor.subwordRegExp({});
regExp = cursor.subwordRegExp({ backwards: true });

//// Decoration ===============================================================
// Construction and Destruction
decoration.destroy();

// Event Subscription
sub = decoration.onDidChangeProperties(event => { event.oldProperties.gutterName; });
sub = decoration.onDidDestroy(() => {});

// Decoration Details
num = decoration.getId();
displayMarker = decoration.getMarker();

// Properties
const decorationProps = decoration.getProperties();

decoration.setProperties(decorationProps);

//// DeserializerManager ======================================================
class StorableClass {
	name: string;

	constructor() {}
	deserialize() { return {}; }
}

function isStorableClass(o: object): o is StorableClass {
	if (typeof o === "object" && (<StorableClass> o).name &&
		(<StorableClass> o).name === "test") {
		return true;
	} else {
		return false;
	}
}

let serializable = new StorableClass();
atom.deserializers.add(serializable);
const blob = atom.deserializers.deserialize({ name: "test" });
if (blob && isStorableClass(blob)) serializable = blob;

//// Directory -- See 'pathwatcher' testing.
//// DisplayMarker -- See 'text-buffer' testing.
//// DisplayMarkerLayer -- See 'text-buffer' testing.
//// Disposable -- See 'event-kit' testing.
//// Dock =====================================================================
// Methods
dock.activate();
dock.show();
dock.hide();
dock.toggle();
bool = dock.isVisible();

// Event Subscription
sub = dock.observePaneItems(() => {});
sub = dock.onDidChangeActivePaneItem(() => {});
sub = dock.onDidStopChangingActivePaneItem(() => {});
sub = dock.observeActivePaneItem(() => {});
sub = dock.onDidAddPane(event => event.pane.activate());
sub = dock.onWillDestroyPane(event => event.pane);
sub = dock.onDidDestroyPane(event => event.pane);
sub = dock.observePanes(pane => pane.activate());
sub = dock.onDidChangeActivePane(pane => pane.activate());
sub = dock.observeActivePane(pane => pane.activate());
sub = dock.onDidAddPaneItem(event => event.index && event.item && event.pane);
sub = dock.onWillDestroyPaneItem(event => event.index && event.item && event.pane);
sub = dock.onDidDestroyPaneItem(event => event.index && event.item && event.pane);

// Pane Items
objs = dock.getPaneItems();
obj = dock.getActivePaneItem();

// Panes
panes = dock.getPanes();
pane = dock.getActivePane();
bool = dock.activateNextPane();
bool = dock.activatePreviousPane();

//// Emitter -- See 'event-kit' testing.
//// File -- See 'pathwatcher' testing.
//// GitRepository ============================================================
// Construction and Destruction
repository = new GitRepository("Test");
repository = new GitRepository("Test", {});
repository = new GitRepository("Test", { refreshOnWindowFocus: true });
repository = new GitRepository("Test", { config: atom.config });
repository = new GitRepository("Test", { project: atom.project });
repository = new GitRepository("Test", { refreshOnWindowFocus: false, config: atom.config,
	project: atom.project });
repository.destroy();
bool = repository.isDestroyed();

// Event Subscription
sub = repository.onDidDestroy(() => {});
sub = repository.onDidChangeStatus(event => event.path && event.pathStatus);
sub = repository.onDidChangeStatuses(() => {});

// Repository Details
repository.getType();
str = repository.getPath();
str = repository.getWorkingDirectory();
bool = repository.isProjectAtRoot();
str = repository.relativize();
bool = repository.hasBranch("master");

str = repository.getShortHead();
str = repository.getShortHead("test.path");

bool = repository.isSubmodule("test.path");

declare var aheadBehindCount: { ahead: number, behind: number };
aheadBehindCount = repository.getAheadBehindCount("ref");
aheadBehindCount = repository.getAheadBehindCount("ref", "test.path");

aheadBehindCount = repository.getCachedUpstreamAheadBehindCount();
aheadBehindCount = repository.getCachedUpstreamAheadBehindCount("test.path");

str = repository.getConfigValue("username");
str = repository.getConfigValue("username", "test.path");

str = repository.getOriginURL();
str = repository.getOriginURL("test.path");

let upstreamBranch = repository.getUpstreamBranch();
if (upstreamBranch) {
	str = upstreamBranch;
}

upstreamBranch = repository.getUpstreamBranch("test.path");
if (upstreamBranch) {
	str = upstreamBranch;
}

declare var gitReferences: { heads: string[], remotes: string[], tags: string[] };
gitReferences = repository.getReferences();
gitReferences = repository.getReferences("test.path");

str = repository.getReferenceTarget("ref");
str = repository.getReferenceTarget("ref", "test.path");

// Reading Status
bool = repository.isPathModified("file.path");
bool = repository.isPathNew("file.path");
bool = repository.isPathIgnored("file.path");
num = repository.getDirectoryStatus("file.path");
num = repository.getPathStatus("file.path");

const cachedPathStatus = repository.getCachedPathStatus("file.path");
if (cachedPathStatus) {
	num = cachedPathStatus;
}

bool = repository.isStatusModified(42);
bool = repository.isStatusNew(42);

// Retrieving Diffs
declare var diffStats: { added: number, deleted: number };
diffStats = repository.getDiffStats("file.path");

declare var lineDiffs: Array<{ oldStart: number, newStart: number, oldLines: number,
	newLines: number }>;
lineDiffs = repository.getLineDiffs("file.path", "contents");

// Checking Out
bool = repository.checkoutHead("file.path");
bool = repository.checkoutReference("ref", true);

//// Grammar -- See 'first-mate' testing.
//// GrammarRegistry -- See 'first-mate' testing.
//// Gutter ===================================================================
// Gutter Destruction
gutter.destroy();

// Event Subscription
sub = gutter.onDidChangeVisible(gutter => gutter.isVisible());
sub = gutter.onDidDestroy(() => {});

// Visibility
gutter.hide();
gutter.show();
bool = gutter.isVisible();
decoration = gutter.decorateMarker(displayMarker, { type: "line-number" });

//// HistoryManager ===========================================================
historyPaths = atom.history.getProjects();
atom.history.clearProjects();
sub = atom.history.onDidChangeProjects(() => {});

//// KeymapManager -- See 'atom-keymap' testing.
//// LayerDecoration ==========================================================
layerDecoration.destroy();
bool = layerDecoration.isDestroyed();
layerDecoration.getProperties();
declare let decorationLayerProps: Atom.Structures.DecorationLayerProps;
layerDecoration.setProperties(decorationLayerProps);
layerDecoration.setPropertiesForMarker(marker, { type: "line", class: "test-class" });

//// MarkerLayer -- See 'text-buffer' testing.
//// MenuManager ==============================================================
sub = atom.menu.add([
	{
		label: "Hello",
		submenu : [{ label: "World!", command: "hello:world" }],
	},
]);
atom.menu.update();

//// Notification =============================================================
notification = new Notification("fatal", "Test");
notification = new Notification("success", "Test", {});
notification = new Notification("info", "Test", {
	buttons: [
		{ className: "Test", text: "Test", onDidClick: () => {}},
	],
	description: "Test",
	detail: "Test",
	dismissable: false,
	icon: "Test",
});

// Event Subscription
sub = notification.onDidDismiss(notification => notification.dismissed);
sub = notification.onDidDisplay(notification => notification.timestamp);

// Methods
str = notification.getType();
str = notification.getMessage();

// Extended Methods
notification.dismiss();

//// NotificationManager ======================================================
// Events
atom.notifications.onDidAddNotification(notification => notification.dismiss());

// Adding Notifications
atom.notifications.addSuccess("Test");
atom.notifications.addSuccess("Test", {});
atom.notifications.addSuccess("Test", {
	description: "Desc",
	detail: "Details",
	dismissable: true,
	icon: "Icon",
	buttons: [{
		text: "Button",
		onDidClick: () => {},
		className: "test-class",
	}],
});

atom.notifications.addInfo("Test");
atom.notifications.addInfo("Test", {});
atom.notifications.addInfo("Test", { description: "Desc" });

atom.notifications.addWarning("Test");
atom.notifications.addWarning("Test", {});
atom.notifications.addWarning("Test", { description: "Desc" });

atom.notifications.addError("Test");
atom.notifications.addError("Test", {});
atom.notifications.addError("Test", { stack: "Stack" });

atom.notifications.addFatalError("Test");
atom.notifications.addFatalError("Test", {});
atom.notifications.addFatalError("Test", { stack: "Stack" });

// Getting Notifications
notifications = atom.notifications.getNotifications();

//// Package ==================================================================
// Event Subscription
pack.onDidDeactivate(() => {});

// Native Module Compatibility
bool = pack.isCompatible();
declare let exitInfo: Promise<{ code: number, stderr: string, stdout: string }>;
exitInfo = pack.rebuild();

const buildFailureOutput = pack.getBuildFailureOutput();
if (buildFailureOutput) {
	str = buildFailureOutput;
}

//// PackageManager ===========================================================\
// Event Subscription
sub = atom.packages.onDidLoadInitialPackages(() => {});
sub = atom.packages.onDidActivateInitialPackages(() => {});
sub = atom.packages.onDidActivatePackage(pack => pack.name);
sub = atom.packages.onDidDeactivatePackage(pack => pack.path);
sub = atom.packages.onDidLoadPackage(pack => pack.isCompatible());
sub = atom.packages.onDidUnloadPackage(pack => pack.bundledPackage);

// Package system data
str = atom.packages.getApmPath();
strs = atom.packages.getPackageDirPaths();

// General package data
const packagePath = atom.packages.resolvePackagePath("Test");
if (packagePath) {
	str = packagePath;
}

bool = atom.packages.isBundledPackage("Test");

// Enabling and disabling packages
let potentialPack = atom.packages.enablePackage("Test");
if (potentialPack) {
	pack = potentialPack;
}

potentialPack = atom.packages.disablePackage("Test");
if (potentialPack) {
	pack = potentialPack;
}

bool = atom.packages.isPackageDisabled("Test");

// Accessing active packages
packs = atom.packages.getActivePackages();

potentialPack = atom.packages.getActivePackage("Test");
if (potentialPack) {
	pack = potentialPack;
}

bool = atom.packages.isPackageActive("Test");
bool = atom.packages.hasActivatedInitialPackages();

// Accessing loaded packages
packs = atom.packages.getLoadedPackages();

potentialPack = atom.packages.getLoadedPackage("Test");
if (potentialPack) {
	pack = potentialPack;
}

bool = atom.packages.isPackageLoaded("Test");
bool = atom.packages.hasLoadedInitialPackages();

// Accessing available packages
strs = atom.packages.getAvailablePackagePaths();
strs = atom.packages.getAvailablePackageNames();
strs = atom.packages.getAvailablePackageMetadata();

//// Pane =====================================================================
// Event Subscription
sub = pane.onDidChangeFlexScale(scale => num = scale);
sub = pane.observeFlexScale(scale => num = scale);
sub = pane.onDidActivate(() => {});
sub = pane.onWillDestroy(() => {});
sub = pane.onDidDestroy(() => {});
sub = pane.onDidChangeActive(active => bool = active);
sub = pane.observeActive(active => bool = active);
sub = pane.onDidAddItem(event => event.index && event.item);
sub = pane.onDidRemoveItem(event => event.index && event.item);
sub = pane.onWillRemoveItem(event => event.index && event.item);
sub = pane.onDidMoveItem(event => event.item && event.oldIndex && event.newIndex);
sub = pane.observeItems((item) => {});
sub = pane.onDidChangeActiveItem((item) => {});
sub = pane.onChooseNextMRUItem((item) => {});
sub = pane.onChooseLastMRUItem((item) => {});
sub = pane.onDoneChoosingMRUItem(() => {});
sub = pane.observeActiveItem((item) => {});
sub = pane.onWillDestroyItem(event => event.index && event.item);

// Items
objs = pane.getItems();
obj = pane.getActiveItem();

let potentialItem = pane.itemAtIndex(42);
if (potentialItem) {
	obj = potentialItem;
}

pane.activateNextItem();
pane.activatePreviousItem();
pane.moveItemRight();
pane.moveItemLeft();
num = pane.getActiveItemIndex();
pane.activateItemAtIndex(42);

pane.activateItem(element);
pane.activateItem(element, { pending: true });

obj = pane.addItem(element);
obj = pane.addItem(element, {});
obj = pane.addItem(element, { pending: true });
obj = pane.addItem(element, { index: 42 });
obj = pane.addItem(element, { pending: true, index: 42 });

objs = pane.addItems(objs);
objs = pane.addItems(objs, 42);

pane.moveItem(element, 42);
pane.moveItemToPane(element, pane, 42);
pane.destroyActiveItem();

async function destroyAndWait() {
	bool = await pane.destroyItem(element);
	bool = await pane.destroyItem(element, true);
}

pane.destroyItems();
pane.destroyInactiveItems();

async function savePaneItem() {
	await pane.saveActiveItem();
	let actionReturn = await pane.saveActiveItem(() => true);
	if (actionReturn) bool = actionReturn;

	await pane.saveActiveItemAs(() => {});
	actionReturn = await pane.saveActiveItemAs(() => false);

	await pane.saveItem(element, () => {});
	let altActionReturn = await pane.saveItem(element, () => 42);
	if (altActionReturn) num = altActionReturn;

	await pane.saveItemAs(element, () => {});
	altActionReturn = await pane.saveItemAs(element, () => 42);
}

pane.saveItems();

potentialItem = pane.itemForURI("https://test");
if (potentialItem) {
	obj = potentialItem;
}

bool = pane.activateItemForURI("https://test");

// Lifecycle
bool = pane.isActive();
pane.activate();
pane.destroy();
bool = pane.isDestroyed();

// Splitting
pane = pane.splitLeft();
pane = pane.splitLeft({});
pane = pane.splitLeft({ copyActiveItem: true });
pane = pane.splitLeft({ items: elements });
pane = pane.splitLeft({ copyActiveItem: true, items: elements });

pane = pane.splitRight();
pane = pane.splitRight({});
pane = pane.splitRight({ copyActiveItem: true });
pane = pane.splitRight({ items: elements });
pane = pane.splitRight({ copyActiveItem: true, items: elements });

pane = pane.splitUp();
pane = pane.splitUp({});
pane = pane.splitUp({ copyActiveItem: true });
pane = pane.splitUp({ items: elements });
pane = pane.splitUp({ copyActiveItem: true, items: elements });

pane = pane.splitDown();
pane = pane.splitDown({});
pane = pane.splitDown({ copyActiveItem: true });
pane = pane.splitDown({ items: elements });
pane = pane.splitDown({ copyActiveItem: true, items: elements });

//// Panel ====================================================================
// Methods
panel.destroy();

// Event Subscription
sub = panel.onDidChangeVisible(visible => bool = visible);
sub = panel.onDidDestroy(panel => bool = panel.isVisible());

// Panel Details
obj = panel.getItem();
num = panel.getPriority();
bool = panel.isVisible();
panel.hide();
panel.show();

//// PathWatcher ==============================================================
pathWatcher.dispose();
sub = pathWatcher.onDidError((error) => str = error.name);

async function waitForPathWatcher() {
	await pathWatcher.getStartPromise();
}

//// Point -- See 'text-buffer' testing.
//// Project ==================================================================
// Event Subscription
sub = project.onDidChangePaths(paths => paths.length);

sub = project.onDidChangeFiles(events => {
	for (const event of events) {
		str = event.action;
	}
});

sub = project.onDidAddBuffer(buffer => buffer.id);
sub = project.observeBuffers(buffer => buffer.file);

// Accessing the git repository
repositories = project.getRepositories();

async function getDirectoryRepo() {
	const potentialRepo = await project.repositoryForDirectory(dir);
	if (potentialRepo) repository = potentialRepo;
}

// Managing Paths
strs = project.getPaths();
project.setPaths(["a", "b"]);
project.addPath("Test");

async function initWatcher() {
	await project.getWatcherPromise("/var/test");
}

project.removePath("Test");
dirs = project.getDirectories();

const [projectPath, relativePath] = project.relativizePath("Test");
if (projectPath) {
	str = projectPath;
}
str = relativePath;

bool = project.contains("Test");

//// Range -- See 'text-buffer' testing.
//// ScopeDescriptor ==========================================================
strs = scopeDescriptor.getScopesArray();

//// Selection ================================================================
// Event Subscription
sub = selection.onDidChangeRange(event => event.newBufferRange && event.oldBufferRange &&
	event.newScreenRange && event.oldScreenRange && event.selection);
sub = selection.onDidDestroy(() => {});

// Managing the selection range
range = selection.getScreenRange();

selection.setScreenRange(range);
selection.setScreenRange([pos, pos]);
selection.setScreenRange([pos, [0, 0]]);
selection.setScreenRange([[0, 0], pos]);
selection.setScreenRange([[0, 0], [0, 0]]);
selection.setScreenRange([[0, 0], [0, 0]], {});
selection.setScreenRange(range, { autoscroll: true, preserveFolds: false });
selection.setScreenRange([pos, pos], { autoscroll: true });

range = selection.getBufferRange();

selection.setBufferRange(range);
selection.setBufferRange([pos, pos]);
selection.setBufferRange([pos, [0, 0]]);
selection.setBufferRange([[0, 0], pos]);
selection.setBufferRange([[0, 0], [0, 0]]);
selection.setBufferRange([[0, 0], [0, 0]], {});
selection.setBufferRange(range, { autoscroll: true, preserveFolds: false });
selection.setBufferRange([pos, pos], { autoscroll: true });

const [startingRow, endingRow ]: [number, number] = selection.getBufferRowRange();

// Info about the selection
bool = selection.isEmpty();
bool = selection.isReversed();
bool = selection.isSingleScreenLine();
str = selection.getText();
bool = selection.intersectsBufferRange(range); // Not range-compatible.
bool = selection.intersectsWith(selection);

// Modifying the selected range
selection.clear();
selection.clear({});
selection.clear({ autoscroll: false });

selection.selectToScreenPosition(pos);
selection.selectToScreenPosition([0, 0]);

selection.selectToBufferPosition(pos);
selection.selectToBufferPosition([0, 0]);

selection.selectRight();
selection.selectRight(42);

selection.selectLeft();
selection.selectLeft(42);

selection.selectUp();
selection.selectUp(42);

selection.selectDown();
selection.selectDown(42);

selection.selectToTop();
selection.selectToBottom();
selection.selectAll();
selection.selectToBeginningOfLine();
selection.selectToFirstCharacterOfLine();
selection.selectToEndOfLine();
selection.selectToEndOfBufferLine();
selection.selectToBeginningOfWord();
selection.selectToEndOfWord();
selection.selectToBeginningOfNextWord();
selection.selectToPreviousWordBoundary();
selection.selectToNextWordBoundary();
selection.selectToPreviousSubwordBoundary();
selection.selectToNextSubwordBoundary();
selection.selectToBeginningOfNextParagraph();
selection.selectToBeginningOfPreviousParagraph();
selection.selectWord();
selection.expandOverWord();
selection.selectLine(42);
selection.expandOverLine();

// Modifying the selected text
selection.insertText("Replacement");
selection.insertText("Replacement", {});
selection.insertText("Replacement", { select: true });
selection.insertText("Replacement", { autoIndent: true });
selection.insertText("Replacement", { autoIndentNewline: true });
selection.insertText("Replacement", { autoDecreaseIndent: true });
selection.insertText("Replacement", { normalizeLineEndings: true });
selection.insertText("Replacement", { undo: "skip" });
selection.insertText("Replacement", { select: true, autoIndent: true,
	autoIndentNewline: true, autoDecreaseIndent: true, normalizeLineEndings: true,
	undo: "skip" });

selection.backspace();
selection.deleteToPreviousWordBoundary();
selection.deleteToNextWordBoundary();
selection.deleteToBeginningOfWord();
selection.deleteToBeginningOfLine();
selection.delete();
selection.deleteToEndOfLine();
selection.deleteToEndOfWord();
selection.deleteToBeginningOfSubword();
selection.deleteToEndOfSubword();
selection.deleteSelectedText();
selection.deleteLine();
selection.joinLines();
selection.outdentSelectedRows();
selection.autoIndentSelectedRows();
selection.toggleLineComments();
selection.cutToEndOfLine();
selection.cutToEndOfBufferLine();

selection.cut();
selection.cut(true);
selection.cut(true, true);

selection.copy();
selection.copy(true);
selection.copy(true, true);

selection.fold();
selection.indentSelectedRows();

// Managing multiple selections
selection.addSelectionBelow();
selection.addSelectionAbove();

selection.merge(selection);
selection.merge(selection, {});
selection.merge(selection, { preserveFolds: true });
selection.merge(selection, { autoscroll: true });
selection.merge(selection, { preserveFolds: true, autoscroll: true });

// Comparing to other selections
num = selection.compare(selection);

//// StyleManager =============================================================
// Event Subscription
sub = styleManager.observeStyleElements(styleElement => styleElement.context);
sub = styleManager.onDidAddStyleElement(styleElement => styleElement.sourcePath);
sub = styleManager.onDidRemoveStyleElement(styleElement => styleElement.onkeydown);
sub = styleManager.onDidUpdateStyleElement(styleElement => styleElement.sourcePath);

// Reading Style Elements
const styleElements: HTMLStyleElement[] = styleManager.getStyleElements();

// Paths
str = styleManager.getUserStyleSheetPath();

//// Task =====================================================================
let task: Atom.Task = Task.once("File.path", {}, () => {});
task = new Task("File.path");

task.start({}, () => {});
task.send("test-message");
sub = task.on("test-message", () => {});
task.terminate();
task.cancel();

//// TextBuffer -- See 'text-buffer' testing.
//// TextEditor ===============================================================
// Event Subscription
sub = editor.onDidChangeTitle(title => str = title.charAt(0));
sub = editor.onDidChangePath(path => str = path.charAt(0));

sub = editor.onDidChange(changes => {
	for (const change of changes) {
		change.newExtent;
		change.oldExtent;
		change.start;
	}
});

sub = editor.onDidStopChanging(event => {
	for (const change of event.changes) {
		change.newExtent && change.oldExtent && change.newRange && change.oldRange &&
		change.newText && change.oldText && change.start;
	}
});

sub = editor.onDidChangeCursorPosition(event => event.newBufferPosition);
sub = editor.onDidChangeSelectionRange(event => event.selection);
sub = editor.onDidSave(event => event.path);
sub = editor.onDidDestroy(() => {});
sub = editor.observeGutters(gutter => gutter.show());
sub = editor.onDidAddGutter(gutter => gutter.hide());
sub = editor.onDidRemoveGutter(name => name.length);
sub = editor.onDidChangeSoftWrapped(softWrapped => {});
sub = editor.onDidChangeEncoding(encoding => {});
sub = editor.observeGrammar(grammar => grammar.name);
sub = editor.onDidChangeGrammar(grammar => grammar.scopeName);
sub = editor.onDidChangeModified(modified => {});
sub = editor.onDidConflict(() => {});
sub = editor.onWillInsertText(event => event.cancel && event.text);
sub = editor.onDidInsertText(event => event.text);
sub = editor.observeCursors(cursor => cursor.moveToBottom());
sub = editor.onDidAddCursor(cursor => cursor.getMarker());
sub = editor.onDidRemoveCursor(cursor => cursor.compare(cursor));
sub = editor.observeSelections(selection => selection.cutToEndOfBufferLine());
sub = editor.onDidAddSelection(selection => selection.selectWord());
sub = editor.onDidRemoveSelection(selection => selection.toggleLineComments());
sub = editor.observeDecorations(decoration => decoration.getId());
sub = editor.onDidAddDecoration(decoration => decoration.id);
sub = editor.onDidRemoveDecoration(decoration => decoration.getId());
sub = editor.onDidChangePlaceholderText(placeholderText =>
	placeholderText.toLowerCase());
buffer = editor.getBuffer();

// File Details
str = editor.getTitle();
str = editor.getLongTitle();

const filePath = editor.getPath();
if (filePath) {
	str = filePath;
}

bool = editor.isModified();
bool = editor.isEmpty();
str = editor.getEncoding();
editor.setEncoding("utf8");

// File Operations
async function saveEditor() {
	await editor.save();
	await editor.saveAs("test.file");
}

// Reading Text
str = editor.getText();
str = editor.getTextInBufferRange(range);
num = editor.getLineCount();
num = editor.getScreenLineCount();
num = editor.getLastBufferRow();
num = editor.getLastScreenRow();
str = editor.lineTextForBufferRow(42);
str = editor.lineTextForScreenRow(42);
range = editor.getCurrentParagraphBufferRange();

// Mutating Text
editor.setText("Test");

editor.setTextInBufferRange(range, "Test");
editor.setTextInBufferRange([pos, pos], "Test");
editor.setTextInBufferRange([pos, [0, 0]], "Test");
editor.setTextInBufferRange([[0, 0], pos], "Test");
editor.setTextInBufferRange([[0, 0], [0, 0]], "Test");
editor.setTextInBufferRange(range, "Test", {});
editor.setTextInBufferRange([pos, pos], "Test", { normalizeLineEndings: true });
editor.setTextInBufferRange(range, "Test", { normalizeLineEndings: true,
	undo: "skip" });

editor.insertText("Test");
editor.insertText("Test", {});
editor.insertText("Test", { autoDecreaseIndent: true });
editor.insertText("Test", { autoIndent: true });
editor.insertText("Test", { autoIndentNewline: true });
editor.insertText("Test", { normalizeLineEndings: true });
editor.insertText("Test", { select: true });
editor.insertText("Test", { undo: "skip" });
editor.insertText("Text", { autoDecreaseIndent: false, autoIndent: false,
	autoIndentNewline: false, normalizeLineEndings: false, select: false, undo: "skip" });

editor.insertNewline();
editor.delete();
editor.backspace();
editor.mutateSelectedText((selection, index) => { selection.clear(); });
editor.transpose();
editor.upperCase();
editor.lowerCase();
editor.toggleLineCommentsInSelection();
editor.insertNewlineBelow();
editor.insertNewlineAbove();
editor.deleteToBeginningOfWord();
editor.deleteToPreviousWordBoundary();
editor.deleteToNextWordBoundary();
editor.deleteToBeginningOfSubword();
editor.deleteToEndOfSubword();
editor.deleteToBeginningOfLine();
editor.deleteToEndOfLine();
editor.deleteToEndOfWord();
editor.deleteLine();

// History
editor.undo();
editor.redo();

editor.transact(() => {});
editor.transact(42, () => {});

editor.abortTransaction();
num = editor.createCheckpoint();
bool = editor.revertToCheckpoint(42);
bool = editor.groupChangesSinceCheckpoint(42);

// TextEditor Coordinates
pos = editor.screenPositionForBufferPosition(pos);
pos = editor.screenPositionForBufferPosition([0, 0]);
pos = editor.screenPositionForBufferPosition(pos, {});
pos = editor.screenPositionForBufferPosition(pos, { clipDirection: "backward" });
pos = editor.screenPositionForBufferPosition([0, 0], { clipDirection: "forward" });

pos = editor.bufferPositionForScreenPosition(pos);
pos = editor.bufferPositionForScreenPosition([0, 0]);
pos = editor.bufferPositionForScreenPosition(pos, {});
pos = editor.bufferPositionForScreenPosition(pos, { clipDirection: "backward" });
pos = editor.bufferPositionForScreenPosition([0, 0], { clipDirection: "forward" });

range = editor.screenRangeForBufferRange(range);
range = editor.screenRangeForBufferRange([pos, pos]);
range = editor.screenRangeForBufferRange([pos, [0, 0]]);
range = editor.screenRangeForBufferRange([[0, 0], pos]);
range = editor.screenRangeForBufferRange([[0, 0], [0, 0]]);

range = editor.bufferRangeForScreenRange(range);
range = editor.bufferRangeForScreenRange([pos, pos]);
range = editor.bufferRangeForScreenRange([pos, [0, 0]]);
range = editor.bufferRangeForScreenRange([[0, 0], pos]);
range = editor.bufferRangeForScreenRange([[0, 0], [0, 0]]);

pos = editor.clipBufferPosition(pos);
pos = editor.clipBufferPosition([0, 0]);

range = editor.clipBufferRange(range);
range = editor.clipBufferRange([pos, pos]);
range = editor.clipBufferRange([pos, [0, 0]]);
range = editor.clipBufferRange([[0, 0], pos]);
range = editor.clipBufferRange([[0, 0], [0, 0]]);

pos = editor.clipScreenPosition(pos);
pos = editor.clipScreenPosition([0, 0]);
pos = editor.clipScreenPosition(pos, {});
pos = editor.clipScreenPosition(pos, { clipDirection: "closest" });
pos = editor.clipScreenPosition([0, 0], { clipDirection: "closest" });

range = editor.clipScreenRange(range);
range = editor.clipScreenRange([pos, pos]);
range = editor.clipScreenRange([pos, [0, 0]]);
range = editor.clipScreenRange([[0, 0], pos]);
range = editor.clipScreenRange([[0, 0], [0, 0]]);
range = editor.clipScreenRange(range, {});
range = editor.clipScreenRange(range, { clipDirection: "closest" });
range = editor.clipScreenRange([pos, pos], { clipDirection: "closest" });

// Decorations
decoration = editor.decorateMarker(displayMarker, { type: "line" });
decoration = editor.decorateMarker(displayMarker, { type: "line", avoidOverflow: true,
	class: "test-class", gutterName: "gutterName", item: element, onlyEmpty: true,
	onlyHead: true, onlyNonEmpty: true, position: "before" });

layerDecoration = editor.decorateMarkerLayer(displayMarkerLayer, { type: "line-number" });
layerDecoration = editor.decorateMarkerLayer(displayMarkerLayer, { type: "line-number",
	avoidOverflow: false, class: "test-class", item: element, onlyEmpty: false, onlyHead: false,
	onlyNonEmpty: false, position: "after" });

decorations = editor.getDecorations();
decorations = editor.getDecorations({});
decorations = editor.getDecorations({ type: "line-number" });
decorations = editor.getDecorations({ type: "line", avoidOverflow: true,
	class: "test-class", gutterName: "gutterName", item: element, onlyEmpty: true,
	onlyHead: true, onlyNonEmpty: true, position: "before" });

decorations = editor.getLineDecorations();
decorations = editor.getLineDecorations({});
decorations = editor.getLineDecorations({ avoidOverflow: true });
decorations = editor.getLineDecorations({ avoidOverflow: true, class: "test-class",
	item: element, onlyEmpty: true, onlyHead: true, onlyNonEmpty: true,
	position: "before" });

decorations = editor.getLineNumberDecorations();
decorations = editor.getLineNumberDecorations({});
decorations = editor.getLineNumberDecorations({ onlyHead: true });
decorations = editor.getLineNumberDecorations({ avoidOverflow: true,
	class: "test-class", gutterName: "gutterName", item: element, onlyEmpty: true,
	onlyHead: true, onlyNonEmpty: true, position: "before" });

decorations = editor.getHighlightDecorations();
decorations = editor.getHighlightDecorations({});
decorations = editor.getHighlightDecorations({ onlyHead: true });
decorations = editor.getHighlightDecorations({ avoidOverflow: true,
	class: "test-class", item: element, onlyEmpty: true, onlyHead: true, onlyNonEmpty: true,
	position: "before" });

decorations = editor.getOverlayDecorations();
decorations = editor.getOverlayDecorations({});
decorations = editor.getOverlayDecorations({ onlyHead: true });
decorations = editor.getOverlayDecorations({ avoidOverflow: true,
	class: "test-class", item: element, onlyEmpty: true, onlyHead: true, onlyNonEmpty: true,
	position: "before" });

// Markers
displayMarker = editor.markBufferRange(range);
displayMarker = editor.markBufferRange([pos, pos]);
displayMarker = editor.markBufferRange([pos, [0, 0]]);
displayMarker = editor.markBufferRange([[0, 0], pos]);
displayMarker = editor.markBufferRange([[0, 0], [0, 0]]);
displayMarker = editor.markBufferRange(range, {});
displayMarker = editor.markBufferRange(range, { invalidate: "surround" });
displayMarker = editor.markBufferRange(range, { maintainHistory: true });
displayMarker = editor.markBufferRange(range, { reversed: true });
displayMarker = editor.markBufferRange([[0, 0], [0, 0]], { invalidate: "overlap" });
displayMarker = editor.markBufferRange(range, { invalidate: "surround",
	maintainHistory: false, reversed: false });

displayMarker = editor.markBufferPosition(pos);
displayMarker = editor.markBufferPosition([0, 0]);
displayMarker = editor.markBufferPosition(pos, {});
displayMarker = editor.markBufferPosition(pos, { invalidate: "never" });
displayMarker = editor.markBufferPosition([0, 0], { invalidate: "surround" });

displayMarker = editor.markScreenPosition(pos);
displayMarker = editor.markScreenPosition([0, 0]);
displayMarker = editor.markScreenPosition(pos, {});
displayMarker = editor.markScreenPosition(pos, { invalidate: "never" });
displayMarker = editor.markScreenPosition(pos, { clipDirection: "forward" });
displayMarker = editor.markScreenPosition([0, 0], { invalidate: "surround",
	clipDirection: "backward" });

displayMarkers = editor.findMarkers({ startBufferRow: 42 });
displayMarkers = editor.findMarkers({ endBufferRow: 42 });
displayMarkers = editor.findMarkers({ containsBufferRange: range });
displayMarkers = editor.findMarkers({ containsBufferRange: [pos, pos] });
displayMarkers = editor.findMarkers({ containsBufferRange: [pos, [0, 0]] });
displayMarkers = editor.findMarkers({ containsBufferRange: [[0, 0], pos] });
displayMarkers = editor.findMarkers({ containsBufferRange: [[0, 0], [0, 0]] });
displayMarkers = editor.findMarkers({ containsBufferPosition: pos });
displayMarkers = editor.findMarkers({ containsBufferPosition: [42, 42] });
displayMarkers = editor.findMarkers({
	startBufferPosition: pos,
	endBufferPosition: pos,
	startScreenPosition: pos,
	endScreenPosition: pos,
	startsInBufferRange: range,
	endsInBufferRange: range,
	startsInScreenRange: range,
	endsInScreenRange: range,
	startBufferRow: 42,
	endBufferRow: 42,
	startScreenRow: 42,
	endScreenRow: 42,
	intersectsBufferRowRange: [42, 42],
	intersectsScreenRowRange: [42, 42],
	containsBufferRange: range,
	containsBufferPosition: pos,
	containedInBufferRange: range,
	containedInScreenRange: range,
	intersectsBufferRange: range,
	intersectsScreenRange: range,
});

displayMarkerLayer = editor.addMarkerLayer();
displayMarkerLayer = editor.addMarkerLayer({});
displayMarkerLayer = editor.addMarkerLayer({ maintainHistory: true });
displayMarkerLayer = editor.addMarkerLayer({ persistent: true });
displayMarkerLayer = editor.addMarkerLayer({ maintainHistory: true, persistent: true });

const potentialMarkerLayer = editor.getMarkerLayer(42);
if (potentialMarkerLayer) {
	displayMarkerLayer = potentialMarkerLayer;
}

displayMarkerLayer = editor.getDefaultMarkerLayer();
displayMarker = editor.getMarker(42);
displayMarkers = editor.getMarkers();
num = editor.getMarkerCount();

// Cursors
pos = editor.getCursorBufferPosition();
posArr = editor.getCursorBufferPositions();

editor.setCursorBufferPosition(pos);
editor.setCursorBufferPosition(pos, {});
editor.setCursorBufferPosition(pos, { autoscroll: true });
editor.setCursorBufferPosition([0, 0], { autoscroll: true });

let potentialCursor = editor.getCursorAtScreenPosition(pos);
if (potentialCursor) {
	cursor = potentialCursor;
}

potentialCursor = editor.getCursorAtScreenPosition([0, 0]);
if (potentialCursor) {
	cursor = potentialCursor;
}

pos = editor.getCursorScreenPosition();
posArr = editor.getCursorScreenPositions();

editor.setCursorScreenPosition(pos);
editor.setCursorScreenPosition([0, 0]);
editor.setCursorScreenPosition(pos, {});
editor.setCursorBufferPosition(pos, { autoscroll: true });

cursor = editor.addCursorAtBufferPosition(pos);
cursor = editor.addCursorAtBufferPosition([0, 0]);

cursor = editor.addCursorAtScreenPosition(pos);
cursor = editor.addCursorAtScreenPosition([0, 0]);

bool = editor.hasMultipleCursors();

editor.moveUp();
editor.moveUp(42);

editor.moveDown();
editor.moveDown(42);

editor.moveLeft();
editor.moveLeft(42);

editor.moveRight();
editor.moveRight(42);

editor.moveToBeginningOfLine();
editor.moveToBeginningOfScreenLine();
editor.moveToFirstCharacterOfLine();
editor.moveToEndOfLine();
editor.moveToEndOfScreenLine();
editor.moveToBeginningOfWord();
editor.moveToEndOfWord();
editor.moveToTop();
editor.moveToBottom();
editor.moveToBeginningOfNextWord();
editor.moveToPreviousWordBoundary();
editor.moveToNextWordBoundary();
editor.moveToPreviousSubwordBoundary();
editor.moveToNextSubwordBoundary();
editor.moveToBeginningOfNextParagraph();
editor.moveToBeginningOfPreviousParagraph();
cursor = editor.getLastCursor();

str = editor.getWordUnderCursor();
str = editor.getWordUnderCursor({});
str = editor.getWordUnderCursor({ allowPrevious: true });
str = editor.getWordUnderCursor({ includeNonWordCharacters: true });
str = editor.getWordUnderCursor({ wordRegex: /r/ });
str = editor.getWordUnderCursor({ allowPrevious: true, includeNonWordCharacters: true,
	wordRegex: /r/ });

cursors = editor.getCursors();
cursors = editor.getCursorsOrderedByBufferPosition();

// Selections
str = editor.getSelectedText();
range = editor.getSelectedBufferRange();
ranges = editor.getSelectedBufferRanges();

editor.setSelectedBufferRange(range);
editor.setSelectedBufferRange(range, {});
editor.setSelectedBufferRange(range, { preserveFolds: true });
editor.setSelectedBufferRange(range, { reversed: true });
editor.setSelectedBufferRange(range, { preserveFolds: true, reversed: true });
editor.setSelectedBufferRange([pos, pos]);
editor.setSelectedBufferRange([pos, [0, 0]]);
editor.setSelectedBufferRange([[0, 0], pos]);
editor.setSelectedBufferRange([[0, 0], [0, 0]]);

editor.setSelectedBufferRanges(ranges);
editor.setSelectedBufferRanges([[pos, pos]]);
editor.setSelectedBufferRanges([[pos, [0, 0]]]);
editor.setSelectedBufferRanges([[[0, 0], pos]]);
editor.setSelectedBufferRanges([[[0, 0], [0, 0]]]);
editor.setSelectedBufferRanges(ranges, {});
editor.setSelectedBufferRanges([[pos, pos]], {});
editor.setSelectedBufferRanges(ranges, { reversed: true });
editor.setSelectedBufferRanges([[pos, pos]], { preserveFolds: true });
editor.setSelectedBufferRanges([[pos, pos]], { reversed: true, preserveFolds: true });

range = editor.getSelectedScreenRange();
ranges = editor.getSelectedScreenRanges();

editor.setSelectedScreenRange(range);
editor.setSelectedScreenRange([pos, pos]);
editor.setSelectedScreenRange([pos, [0, 0]]);
editor.setSelectedScreenRange([[0, 0], pos]);
editor.setSelectedScreenRange([[0, 0], [0, 0]]);
editor.setSelectedScreenRange(range, {});
editor.setSelectedScreenRange([pos, pos], {});
editor.setSelectedScreenRange(range, { reversed: true });
editor.setSelectedScreenRange([pos, pos], { reversed: true });

editor.setSelectedScreenRanges(ranges);
editor.setSelectedScreenRanges([[pos, pos]]);
editor.setSelectedScreenRanges([[pos, [0, 0]]]);
editor.setSelectedScreenRanges([[[0, 0], pos]]);
editor.setSelectedScreenRanges([[[0, 0], [0, 0]]]);
editor.setSelectedScreenRanges(ranges, {});
editor.setSelectedScreenRanges([[pos, pos]], {});
editor.setSelectedScreenRanges(ranges, { reversed: true });
editor.setSelectedScreenRanges([[pos, pos]], { reversed: true });

selection = editor.addSelectionForBufferRange(range);
selection = editor.addSelectionForBufferRange([pos, pos]);
selection = editor.addSelectionForBufferRange([pos, [0, 0]]);
selection = editor.addSelectionForBufferRange([[0, 0], pos]);
selection = editor.addSelectionForBufferRange([[0, 0], [0, 0]]);
selection = editor.addSelectionForBufferRange(range, {});
selection = editor.addSelectionForBufferRange(range, { preserveFolds: true });
selection = editor.addSelectionForBufferRange(range, { reversed: true });
selection = editor.addSelectionForBufferRange(range, { preserveFolds: false,
	reversed: false });
selection = editor.addSelectionForBufferRange([pos, pos], { preserveFolds: false });

selection = editor.addSelectionForScreenRange(range);
selection = editor.addSelectionForScreenRange([pos, pos]);
selection = editor.addSelectionForScreenRange([pos, [0, 0]]);
selection = editor.addSelectionForScreenRange([[0, 0], pos]);
selection = editor.addSelectionForScreenRange([[0, 0], [0, 0]]);
selection = editor.addSelectionForScreenRange(range, {});
selection = editor.addSelectionForScreenRange(range, { preserveFolds: true });
selection = editor.addSelectionForScreenRange(range, { reversed: true });
selection = editor.addSelectionForScreenRange(range, { preserveFolds: false,
	reversed: false });
selection = editor.addSelectionForScreenRange([pos, pos], { preserveFolds: false });

editor.selectToBufferPosition(pos);
editor.selectToScreenPosition(pos);

editor.selectUp();
editor.selectUp(42);

editor.selectDown();
editor.selectDown(42);

editor.selectLeft();
editor.selectLeft(42);

editor.selectRight();
editor.selectRight(42);

editor.selectToTop();
editor.selectToBottom();
editor.selectAll();
editor.selectToBeginningOfLine();
editor.selectToFirstCharacterOfLine();
editor.selectToEndOfLine();
editor.selectToBeginningOfWord();
editor.selectToEndOfWord();
editor.selectLinesContainingCursors();
editor.selectWordsContainingCursors();
editor.selectToPreviousSubwordBoundary();
editor.selectToNextSubwordBoundary();
editor.selectToPreviousWordBoundary();
editor.selectToNextWordBoundary();
editor.selectToBeginningOfNextWord();
editor.selectToBeginningOfNextParagraph();
editor.selectToBeginningOfPreviousParagraph();

const potentialRange = editor.selectMarker(displayMarker);
if (potentialRange) {
	range = potentialRange;
}

selection = editor.getLastSelection();
selections = editor.getSelections();
selections = editor.getSelectionsOrderedByBufferPosition();
bool = editor.selectionIntersectsBufferRange(range); // not range-compatible

// Searching and Replacing
editor.scan(/r/, params => {
	num = params.match.index;
	str = params.matchText;
	range = params.range;
	params.replace("Test");
	params.stop();
});

editor.scan(/r/, {}, () => {});
editor.scan(/r/, { leadingContextLineCount: 42 }, () => {});
editor.scan(/r/, { trailingContextLineCount: 42 }, () => {});
editor.scan(/r/, { leadingContextLineCount: 42, trailingContextLineCount: 42 },
	() => {});

editor.scanInBufferRange(/r/, range, () => {});
editor.scanInBufferRange(/r/, [pos, pos], () => {});
editor.scanInBufferRange(/r/, [pos, [0, 0]], () => {});
editor.scanInBufferRange(/r/, [[0, 0], pos], () => {});
editor.scanInBufferRange(/r/, [[0, 0], [0, 0]], () => {});
editor.scanInBufferRange(/r/, range, params => {
	num = params.match.index;
	str = params.matchText;
	range = params.range;
	params.replace("Test");
	params.stop();
});

editor.backwardsScanInBufferRange(/r/, range, () => {});
editor.backwardsScanInBufferRange(/r/, [pos, pos], () => {});
editor.backwardsScanInBufferRange(/r/, [pos, [0, 0]], () => {});
editor.backwardsScanInBufferRange(/r/, [[0, 0], pos], () => {});
editor.backwardsScanInBufferRange(/r/, [[0, 0], [0, 0]], () => {});
editor.backwardsScanInBufferRange(/r/, range, params => {
	num = params.match.index;
	str = params.matchText;
	range = params.range;
	params.replace("Test");
	params.stop();
});

// Tab Behavior
bool = editor.getSoftTabs();
editor.setSoftTabs(true);
bool = editor.toggleSoftTabs();
num = editor.getTabLength();
editor.setTabLength(42);

const potentialBool = editor.usesSoftTabs();
if (potentialBool) {
	bool = potentialBool;
}

str = editor.getTabText();

// Soft Wrap Behavior
bool = editor.isSoftWrapped();
editor.setSoftWrapped(true);
bool = editor.toggleSoftWrapped();
num = editor.getSoftWrapColumn();

// Indentation
num = editor.indentationForBufferRow(42);

editor.setIndentationForBufferRow(42, 42);
editor.setIndentationForBufferRow(42, 42, {});
editor.setIndentationForBufferRow(42, 42, { preserveLeadingWhitespace: true });

editor.indentSelectedRows();
editor.outdentSelectedRows();
num = editor.indentLevelForLine("Test");
editor.autoIndentSelectedRows();

// Grammars
grammar = editor.getGrammar();
editor.setGrammar(grammar);

// Managing Syntax Scopes
scopeDescriptor = editor.getRootScopeDescriptor();

scopeDescriptor = editor.scopeDescriptorForBufferPosition(pos);
scopeDescriptor = editor.scopeDescriptorForBufferPosition([0, 0]);

range = editor.bufferRangeForScopeAtCursor("selector");
bool = editor.isBufferRowCommented(42);

// Clipboard Operations
editor.copySelectedText();
editor.cutSelectedText();

editor.pasteText();
editor.pasteText({});
editor.pasteText({ autoIndentNewline: true });
editor.pasteText({ autoIndent: true });
editor.pasteText({ autoDecreaseIndent: true });
editor.pasteText({ normalizeLineEndings: true });
editor.pasteText({ select: true });
editor.pasteText({ undo: "skip" });
editor.pasteText({ autoIndentNewline: true, autoIndent: true, autoDecreaseIndent: true,
	normalizeLineEndings: true, select: true, undo: "skip" });

editor.cutToEndOfLine();
editor.cutToEndOfBufferLine();

// Folds
editor.foldCurrentRow();
editor.unfoldCurrentRow();
editor.foldBufferRow(42);
editor.unfoldBufferRow(42);
editor.foldSelectedLines();
editor.foldAll();
editor.unfoldAll();
editor.foldAllAtIndentLevel(42);
editor.isFoldableAtBufferRow(42);
editor.isFoldableAtScreenRow(42);
editor.toggleFoldAtBufferRow(42);
editor.isFoldedAtCursorRow();
editor.isFoldedAtBufferRow(42);
editor.isFoldedAtScreenRow(42);

// Gutters
editor.addGutter({ name: "Test" });
editor.addGutter({ name: "Test", priority: 42 });
editor.addGutter({ name: "Test", visible: true });
editor.addGutter({ name: "Test", priority: 42, visible: true });

gutters = editor.getGutters();

const potentialGutter = editor.gutterWithName("test-gutter");
if (potentialGutter) {
	gutter = potentialGutter;
}

editor.scrollToCursorPosition();
editor.scrollToCursorPosition({});
editor.scrollToCursorPosition({ center: true });

editor.scrollToBufferPosition(pos);
editor.scrollToBufferPosition([0, 0]);
editor.scrollToBufferPosition(pos, {});
editor.scrollToBufferPosition([0, 0], {});
editor.scrollToBufferPosition(pos, { center: true });
editor.scrollToBufferPosition([0, 0], { center: true });

editor.scrollToScreenPosition(pos);
editor.scrollToScreenPosition([0, 0]);
editor.scrollToScreenPosition(pos, {});
editor.scrollToScreenPosition([0, 0], {});
editor.scrollToScreenPosition(pos, { center: true });
editor.scrollToScreenPosition([0, 0], { center: true });

// TextEditor Rendering
str = editor.getPlaceholderText();
editor.setPlaceholderText("Test");

//// ThemeManager =============================================================
// Event Subscription
sub = atom.themes.onDidChangeActiveThemes(() => {});

// Accessing Loaded Themes
let potentialStrs = atom.themes.getLoadedThemeNames();
if (potentialStrs) {
	strs = potentialStrs;
}

let potentialPacks = atom.themes.getLoadedThemes();
if (potentialPacks) {
	packs = potentialPacks;
}

// Accessing Active Themes
potentialStrs = atom.themes.getActiveThemeNames();
if (potentialStrs) {
	strs = potentialStrs;
}

potentialPacks = atom.themes.getActiveThemes();
if (potentialPacks) {
	packs = potentialPacks;
}

// Managing Enabled Themes
strs = atom.themes.getEnabledThemeNames();

//// TooltipManager ===========================================================
sub = atom.tooltips.add(element, { title: "Test"});
sub = atom.tooltips.add(element, { title: "<p>Test</p>", html: true });
sub = atom.tooltips.add(element, { item: element});
sub = atom.tooltips.add(element, { class: "test-class" });
sub = atom.tooltips.add(element, { placement: "top" });

sub = atom.tooltips.add(element, { placement: () => "left" });

sub = atom.tooltips.add(element, { trigger: "click" });
sub = atom.tooltips.add(element, { delay: { hide: 42, show: 42 }});
sub = atom.tooltips.add(element, { keyBindingCommand: "test-command",
	keyBindingTarget: element });

tooltips = atom.tooltips.findTooltips(element);

//// ViewRegistry =============================================================
atom.views.addViewProvider(Point, (point) => {
	point.column;
	return element;
});

element = atom.views.getView(element);

//// Workspace ================================================================
// Event Subscription
sub = atom.workspace.observeTextEditors(editor => editor.id);
sub = atom.workspace.observePaneItems((item) => {});
sub = atom.workspace.onDidChangeActivePaneItem((item) => {});
sub = atom.workspace.onDidStopChangingActivePaneItem((item) => {});

sub = atom.workspace.onDidChangeActiveTextEditor(editor => {
	if (editor) {
		editor.alive;
	}
});

sub = atom.workspace.observeActivePaneItem((item) => {});

sub = atom.workspace.observeActiveTextEditor(editor => {
	if (editor) {
		editor.id;
	}
});

sub = atom.workspace.onDidOpen(event => event.index && event.item && event.pane &&
	event.uri);
sub = atom.workspace.onDidAddPane(event => event.pane);
sub = atom.workspace.onWillDestroyPane(event => event.pane);
sub = atom.workspace.onDidDestroyPane(event => event.pane);
sub = atom.workspace.observePanes(pane => pane.activate());
sub = atom.workspace.onDidChangeActivePane(pane => pane.activate());
sub = atom.workspace.observeActivePane(pane => pane.activate());
sub = atom.workspace.onDidAddPaneItem(event => event.index && event.item && event.pane);
sub = atom.workspace.onWillDestroyPaneItem(event => event.index && event.item && event.pane);
sub = atom.workspace.onDidDestroyPaneItem(event => event.index && event.item && event.pane);
sub = atom.workspace.onDidAddTextEditor(event => event.index && event.pane &&
	event.textEditor);

// Opening
async function workspaceOpen() {
	obj = await atom.workspace.open();
	obj = await atom.workspace.open("https://test");
	obj = await atom.workspace.open("https://test", { activateItem: true });
	obj = await atom.workspace.open("https://test", { activatePane: true });
	obj = await atom.workspace.open("https://test", { initialColumn: 42 });
	obj = await atom.workspace.open("https://test", { initialLine: 42 });
	obj = await atom.workspace.open("https://test", { location: "right" });
	obj = await atom.workspace.open("https://test", { split: "up" });
	obj = await atom.workspace.open("https://test", { pending: true });
	obj = await atom.workspace.open("https://test", { searchAllPanes: true });
	obj = await atom.workspace.open("https://test", {
		activateItem: true,
		activatePane: true,
		initialColumn: 42,
		initialLine: 42,
		location: "left",
		split: "left",
		pending: true,
		searchAllPanes: true,
	});
}

bool = atom.workspace.hide("https://test");
bool = atom.workspace.hide(element);

async function workspaceToggle() {
	await atom.workspace.toggle("https://test");
	await atom.workspace.toggle(element);
}

obj = atom.workspace.createItemForURI("https://test");

bool = atom.workspace.isTextEditor(obj);

async function workspaceReopen() {
	const result = await atom.workspace.reopenItem();
	if (result) obj = result;
}

atom.workspace.addOpener(() => element);

atom.workspace.buildTextEditor(obj);

// Pane Items
objs = atom.workspace.getPaneItems();
obj = atom.workspace.getActivePaneItem();
editors = atom.workspace.getTextEditors();

let potentialEditor = atom.workspace.getActiveTextEditor();
if (potentialEditor) {
	editor = potentialEditor;
}

// Panes
paneContainer = atom.workspace.getActivePaneContainer();
panes = atom.workspace.getPanes();
pane = atom.workspace.getActivePane();
bool = atom.workspace.activateNextPane();
bool = atom.workspace.activatePreviousPane();

let potentialPaneContainer = atom.workspace.paneContainerForURI("https://test");
if (potentialPaneContainer) {
	paneContainer = potentialPaneContainer;
}

potentialPaneContainer = atom.workspace.paneContainerForItem(element);
if (potentialPaneContainer) {
	paneContainer = potentialPaneContainer;
}

let potentialPane = atom.workspace.paneForURI("https://test");
if (potentialPane) {
	pane = potentialPane;
}

potentialPane = atom.workspace.paneForItem(element);
if (potentialPane) {
	pane = potentialPane;
}

// Pane Locations
workspaceCenter = atom.workspace.getCenter();
dock = atom.workspace.getLeftDock();
dock = atom.workspace.getRightDock();
dock = atom.workspace.getBottomDock();

// Panels
panels = atom.workspace.getBottomPanels();

panel = atom.workspace.addBottomPanel({ item: element });
panel = atom.workspace.addBottomPanel({ item: element, priority: 100, visible: true });

panels = atom.workspace.getLeftPanels();

panel = atom.workspace.addLeftPanel({ item: element });
panel = atom.workspace.addLeftPanel({ item: element, priority: 100, visible: true });

panels = atom.workspace.getRightPanels();

panel = atom.workspace.addRightPanel({ item: element });
panel = atom.workspace.addRightPanel({ item: element, priority: 100, visible: true });

panels = atom.workspace.getTopPanels();

panel = atom.workspace.addTopPanel({ item: element });
panel = atom.workspace.addTopPanel({ item: element, priority: 100, visible: true });

panels = atom.workspace.getHeaderPanels();

panel = atom.workspace.addHeaderPanel({ item: element });
panel = atom.workspace.addHeaderPanel({ item: element, priority: 100, visible: true });

panels = atom.workspace.getFooterPanels();

panel = atom.workspace.addFooterPanel({ item: element });
panel = atom.workspace.addFooterPanel({ item: element, priority: 100, visible: true });

panels = atom.workspace.getModalPanels();

panel = atom.workspace.addModalPanel({ item: element });
panel = atom.workspace.addModalPanel({ item: element, priority: 100, visible: true });

const potentialPanel = atom.workspace.panelForItem(element);
if (potentialPanel) {
	panel = potentialPanel;
}

const scanResults = atom.workspace.scan(/r/, () => {});
scanResults.cancel();

// Searching and Replacing
async function workspaceScan() {
	await scanResults;

	const scanOptions = {
		onPathsSearched: (pathsSearched: number) => {},
		leadingContextLineCount: 5,
		trailingContextLineCount: 5,
		paths: ["a"],
	};
	await atom.workspace.scan(/r/, scanOptions, (results) => {
		str = results.filePath;
		for (const match of results.matches) {
			range = Range.fromObject(match.range);
			strs = match.leadingContextLines;
			strs = match.trailingContextLines;
		}
	});
}

async function workspaceReplace() {
	await atom.workspace.replace(/r/, "Test", ["a"], (options) => {});
}

//// WorkspaceCenter ==========================================================
// Event Subscription
sub = workspaceCenter.observeTextEditors(editor => editor.id);
sub = workspaceCenter.observePaneItems(item => {});
sub = workspaceCenter.onDidChangeActivePaneItem(item => {});
sub = workspaceCenter.onDidStopChangingActivePaneItem(item => {});
sub = workspaceCenter.observeActivePaneItem(item => {});

// Pane Items
objs = workspaceCenter.getPaneItems();
workspaceCenter.getActivePaneItem();
editors = workspaceCenter.getTextEditors();

potentialEditor = workspaceCenter.getActiveTextEditor();
if (potentialEditor) {
	editor = potentialEditor;
}

// Panes
panes = workspaceCenter.getPanes();
pane = workspaceCenter.getActivePane();
workspaceCenter.activateNextPane();
workspaceCenter.activatePreviousPane();
