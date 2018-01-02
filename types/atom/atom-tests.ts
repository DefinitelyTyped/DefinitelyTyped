import * as Atom from "atom";

declare let str: string;
declare let num: number;
declare let nums: number[];
declare let bool: boolean;
declare let strs: string[];
declare let obj: object;
declare let objs: object[];
declare let regExp: RegExp;

declare let element: HTMLElement;
declare let elements: HTMLElement[];
declare const div: HTMLDivElement;
declare const event: KeyboardEvent;
declare const mouseEvent: MouseEvent;

declare let buffer: Atom.TextBuffer;
declare const color: Atom.Color;
declare let cursor: Atom.Cursor;
declare let cursors: Atom.Cursor[];
declare let decoration: Atom.Decoration;
declare let decorations: Atom.Decoration[];
declare let decorationLayerProps: Atom.DecorationLayerOptions;
declare let dir: Atom.Directory;
declare let dirs: Atom.Directory[];
declare let displayMarker: Atom.DisplayMarker;
declare let displayMarkers: Atom.DisplayMarker[];
declare let displayMarkerLayer: Atom.DisplayMarkerLayer;
declare let dock: Atom.Dock;
declare let editor: Atom.TextEditor;
declare let editors: Atom.TextEditor[];
declare let emitter: Atom.Emitter;
declare let file: Atom.File;
declare let fileOrDir: Atom.File | Atom.Directory;
declare let grammar: Atom.Grammar;
declare let grammars: Atom.Grammar[];
declare let gutter: Atom.Gutter;
declare let gutters: Atom.Gutter[];
declare let historyPaths: Atom.ProjectHistory[];
declare let layerDecoration: Atom.LayerDecoration;
declare let marker: Atom.Marker;
declare let markers: Atom.Marker[];
declare let markerLayer: Atom.MarkerLayer;
declare let notification: Atom.Notification;
declare let notifications: Atom.Notification[];
declare let pack: Atom.Package;
declare let packs: Atom.Package[];
declare let pane: Atom.Pane;
declare let panes: Atom.Pane[];
declare let paneContainer: Atom.Dock|Atom.WorkspaceCenter;
declare let panel: Atom.Panel;
declare let panels: Atom.Panel[];
declare let pos: Atom.Point;
declare let posArr: Atom.Point[];
declare let project: Atom.Project;
declare let range: Atom.Range;
declare let ranges: Atom.Range[];
declare let registry: Atom.GrammarRegistry;
declare let repository: Atom.GitRepository;
declare let repositories: Atom.GitRepository[];
declare let scopeDescriptor: Atom.ScopeDescriptor;
declare let selection: Atom.Selection;
declare let selections: Atom.Selection[];
declare let styleManager: Atom.StyleManager;
declare let subscription: Atom.Disposable;
declare let subscriptions: Atom.CompositeDisposable;
declare let tooltips: Atom.Tooltip[];
declare let workspaceCenter: Atom.WorkspaceCenter;
declare let pixelPos: Atom.PixelPosition;
declare let textEditorElement: Atom.TextEditorElement;
declare let textEditorComponent: Atom.TextEditorComponent;

// AtomEnvironment ============================================================
function testAtomEnvironment() {
    // Properties
    subscription = atom.commands.add("test", { "execute-command": () => {}});

    str = atom.clipboard.read();

    subscription = atom.contextMenu.add({
        "atom-workspace": [{label: "Help", command: "application:open-documentation"}],
        "atom-text-editor": [{
            label: "History",
            submenu: [
                { label: "Undo", command: "core:undo" },
                { label: "Redo", command: "core:redo" },
            ],
        }],
    });

    subscription = atom.menu.add([{
        label: "Hello",
        submenu : [{ label: "World!", command: "hello:world" }],
    }]);

    atom.keymaps.add("Test.Path", {
        selector: {
            a: "execute-something",
        },
    });

    subscription = atom.tooltips.add(div, { title: "Tooltip Test" });

    notification = atom.notifications.addError("Error");

    atom.project.addPath("/var/test");

    grammar = atom.grammars.loadGrammarSync("Test.file");

    historyPaths = atom.history.getProjects();

    subscription = atom.packages.onDidActivatePackage((atomPackage) => {
        atomPackage.isCompatible();
    });

    subscription = atom.themes.onDidChangeActiveThemes(() => {});

    subscription = atom.styles.onDidAddStyleElement((styleElement) => {});

    const serializer = {
        name: "Test",
        deserialize: () => ({}),
    };
    atom.deserializers.add(serializer);

    subscription = atom.views.addViewProvider(Atom.Range, (range): HTMLElement => {
        range.start;
        return div;
    });

    subscription = atom.workspace.observeTextEditors((editor) => {
        subscription = editor.onDidStopChanging((event) => {
            for (const change of event.changes) {
                change.newExtent;
            }
        });

        const text: string[] = editor.getBuffer().getLines();
    });

    atom.textEditors.add(editor);

    // Event Subscription
    subscription = atom.onDidBeep(() => {});
    subscription = atom.onWillThrowError(event => event.message);
    subscription = atom.onDidThrowError(event => event.line);
    subscription = atom.whenShellEnvironmentLoaded(() => {});

    // Atom Details
    bool = atom.inDevMode();
    bool = atom.inSafeMode();
    bool = atom.inSpecMode();
    str = atom.getVersion();
    bool = atom.isReleasedVersion();
    num = atom.getWindowLoadTime();
    obj = atom.getLoadSettings();

    // Managing The Atom Window
    let dim: { width: number, height: number };
    let v2: { x: number, y: number };

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

    const path: string = atom.getConfigDirPath();
}

// BufferedNodeProcess ========================================================
function testBufferedNodeProcess() {
    const nodeProcess = new Atom.BufferedNodeProcess({
        command: "File.path",
    });

    new Atom.BufferedNodeProcess({
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
}

// BufferedProcess ============================================================
function testBufferedProcess() {
    const process = new Atom.BufferedProcess({
        command: "File.path",
    });

    new Atom.BufferedProcess({
        command: "File.path",
        args: [],
        options: {},
        exit: (): void => {},
        stderr: (): void => {},
        stdout: (): void => {},
    });

    subscription = process.onWillThrowError((error) => {
        error.error;
        error.handle();
    });

    process.kill();
}

// Clipboard ==================================================================
function testClipboard() {
    atom.clipboard.read();
    atom.clipboard.write("Test");
    const clip = atom.clipboard.readWithMetadata();
    str = clip.text;
    obj = clip.metadata;
}

// Color ======================================================================
function testColor() {
    str = color.toHexString();
    str = color.toRGBAString();
}

// CommandRegistry ============================================================
function testCommandRegistry() {
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
    atom.commands.add("atom-text-editor", {
        "test-function": (event) => event.currentTarget.getModel(),
        "test-function2": (event) => event.currentTarget.getComponent(),
    });
    atom.commands.add("atom-workspace", {
        "test-command": {
            didDispatch: (event) => {},
            hiddenInCommandPalette: true
        }
    });

    const commands = atom.commands.findCommands({ target: element });
    atom.commands.dispatch(element, "test:function");
    subscription = atom.commands.onWillDispatch((event) => { event.stopPropagation(); });
    subscription = atom.commands.onDidDispatch((event) => { event.cancelable; });
}

// CompositeDisposable ========================================================
function testCompositeDisposable() {
    // Construction and Lifecycle
    subscriptions = new Atom.CompositeDisposable();
    new Atom.CompositeDisposable(subscription);
    new Atom.CompositeDisposable(subscription, subscription);
    new Atom.CompositeDisposable({ dispose() {} });

    subscriptions.dispose();

    // Managing Disposables
    subscriptions.add(subscription);
    subscriptions.add(
        subscription,
        { dispose() {} }
    );

    subscriptions.remove(subscription);
    subscriptions.remove({ dispose() {} });

    subscriptions.delete(subscription);
    subscriptions.delete({ dispose() {} });

    subscriptions.clear();
}

// Config =====================================================================
function testConfig() {
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
}

// Cursor =====================================================================
function testCursor() {
    // Event Subscription
    subscription = cursor.onDidChangePosition((event) => { event.newBufferPosition; });
    subscription = cursor.onDidDestroy(() => {});

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
}

// TestRunner =================================================================
function testTestRunner() {
    const testRunner: Atom.TestRunner = (params) => {
        const delegate = params.buildDefaultApplicationDelegate();
        const environment = params.buildAtomEnvironment({
            applicationDelegate: delegate,
            configDirPath: "/var/test",
            document,
            enablePersistence: false,
            window,
        });
        const { width, height } = environment.getSize();
        return Promise.resolve(width + height);
    };
}

// Decoration =================================================================
function testDecoration() {
    // Construction and Destruction
    decoration.destroy();

    // Event Subscription
    subscription = decoration.onDidChangeProperties(event => { event.oldProperties.gutterName; });
    subscription = decoration.onDidDestroy(() => {});

    // Decoration Details
    num = decoration.getId();
    displayMarker = decoration.getMarker();
    bool = decoration.isType("line-number");
    bool = decoration.isType(["line-number", "line"]);

    // Properties
    const decorationProps = decoration.getProperties();

    decoration.setProperties(decorationProps);
}

// DeserializerManager ========================================================
function testDesializerManager() {
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
}

// Directory ==================================================================
function testDirectory() {
    // Construction
    dir = new Atom.Directory("Test.file");
    new Atom.Directory("Test.file", true);

    async function createDirectory() {
        bool = await dir.create();
        bool = await dir.create(0o0777);
    }

    // Event Subscription
    subscription = dir.onDidChange(() => {});

    // Directory Metadata
    bool = dir.isFile();
    bool = dir.isDirectory();
    bool = dir.isSymbolicLink();

    async function directoryExists() {
        bool = await dir.exists();
    }

    bool = dir.existsSync();
    bool = dir.isRoot();

    // Managing Paths
    str = dir.getPath();
    str = dir.getRealPathSync();
    str = dir.getBaseName();
    dir.relativize("Test.file") ;

    // Traversing
    dir = dir.getParent();
    file = dir.getFile("Test.file");
    dir = dir.getSubdirectory("Test");
    dir.getEntriesSync();
    dir.getEntries((error, entries) => {});
    bool = dir.contains("Test.file");
}

// DisplayMarker ==============================================================
function testDisplayMarker() {
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
    subscription = displayMarker.onDidChange((event) => { event.hasTail; });
    subscription = displayMarker.onDidDestroy(() => {});

    // TextEditorMarker Details
    bool = displayMarker.isValid();
    bool = displayMarker.isDestroyed();
    bool = displayMarker.isReversed();
    bool = displayMarker.isExclusive();
    str = displayMarker.getInvalidationStrategy();
    obj = displayMarker.getProperties();
    displayMarker.setProperties(obj);

    bool = displayMarker.matchesProperties({
        startBufferPosition: pos,
        endBufferPosition: pos,
        startScreenPosition: pos,
        endScreenPosition: pos,
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
        containsBufferPosition: pos,
        containedInBufferRange: range,
        containedInScreenRange: range,
        intersectsBufferRange: range,
        intersectsScreenRange: range,
    });
    bool = displayMarker.matchesProperties({
        intersectsBufferRange: [pos, pos],
    });
    bool = displayMarker.matchesProperties({
        intersectsBufferRange: [pos, [0, 0]],
    });
    bool = displayMarker.matchesProperties({
        intersectsBufferRange: [[0, 0], pos],
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
    displayMarker.setBufferRange([pos, pos]);
    displayMarker.setBufferRange([pos, [0, 0]]);
    displayMarker.setBufferRange([[0, 0], pos]);
    displayMarker.setBufferRange([[0, 0], [0, 0]]);
    displayMarker.setBufferRange(range, { reversed: true });

    displayMarker.setScreenRange(range);
    displayMarker.setScreenRange([pos, pos]);
    displayMarker.setScreenRange([pos, [0, 0]]);
    displayMarker.setScreenRange([[0, 0], pos]);
    displayMarker.setScreenRange([[0, 0], [0, 0]]);
    displayMarker.setScreenRange(range, { reversed: false });

    pos = displayMarker.getStartScreenPosition();
    pos = displayMarker.getStartScreenPosition({ clipDirection: "backward" });

    pos = displayMarker.getEndScreenPosition();
    pos = displayMarker.getEndScreenPosition({ clipDirection: "forward" });

    // Extended Methods
    pos = displayMarker.getHeadBufferPosition();
    displayMarker.setHeadBufferPosition(pos);

    displayMarker.getHeadScreenPosition();
    displayMarker.getHeadScreenPosition({ clipDirection: "closest" });

    displayMarker.setHeadScreenPosition(pos);
    displayMarker.setHeadScreenPosition([0, 0]);
    displayMarker.setHeadScreenPosition(pos, { clipDirection: "backward" });

    pos = displayMarker.getTailBufferPosition();

    displayMarker.setTailBufferPosition(pos);
    displayMarker.setTailBufferPosition([0, 0]);

    pos = displayMarker.getTailScreenPosition();
    pos = displayMarker.getTailScreenPosition({ clipDirection: "forward" });

    displayMarker.setTailScreenPosition(pos);
    displayMarker.setTailScreenPosition([0, 0]);
    displayMarker.setTailScreenPosition(pos, { clipDirection: "closest" });

    pos = displayMarker.getStartBufferPosition();
    pos = displayMarker.getEndBufferPosition();
    bool = displayMarker.hasTail();
    displayMarker.plantTail();
    displayMarker.clearTail();
}

// DisplayMarkerLayer =========================================================
function testDisplayMarkerLayer() {
    // Lifecycle
    displayMarkerLayer.destroy();
    displayMarkerLayer.clear();
    bool = displayMarkerLayer.isDestroyed();

    // Event Subscription
    subscription = displayMarkerLayer.onDidDestroy(() => {});
    subscription = displayMarkerLayer.onDidUpdate(() => {});
    subscription = displayMarkerLayer.onDidCreateMarker((marker) => { marker.isReversed(); });

    // Marker creation
    displayMarker = displayMarkerLayer.markScreenRange(range);
    displayMarker = displayMarkerLayer.markScreenRange(range, {});
    displayMarker = displayMarkerLayer.markScreenRange(range, { clipDirection: "forward" });
    displayMarker = displayMarkerLayer.markScreenRange(range, { exclusive: true });
    displayMarker = displayMarkerLayer.markScreenRange(range, { invalidate: "never" });
    displayMarker = displayMarkerLayer.markScreenRange(range, { reversed: true });
    displayMarker = displayMarkerLayer.markScreenRange(range, { clipDirection: "backward",
        exclusive: false, invalidate: "overlap", reversed: false });
    displayMarker = displayMarkerLayer.markScreenRange([pos, pos]);
    displayMarker = displayMarkerLayer.markScreenRange([pos, [0, 0]]);
    displayMarker = displayMarkerLayer.markScreenRange([[0, 0], pos]);
    displayMarker = displayMarkerLayer.markScreenRange([[0, 0], [0, 0]]);
    displayMarker = displayMarkerLayer.markScreenRange([[0, 0], pos], { reversed: true });

    displayMarker = displayMarkerLayer.markScreenPosition(pos);
    displayMarker = displayMarkerLayer.markScreenPosition(pos, {});
    displayMarker = displayMarkerLayer.markScreenPosition(pos, { clipDirection: "forward" });
    displayMarker = displayMarkerLayer.markScreenPosition(pos, { exclusive: true });
    displayMarker = displayMarkerLayer.markScreenPosition(pos, { invalidate: "never" });
    displayMarker = displayMarkerLayer.markScreenPosition(pos, { clipDirection: "backward",
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
    displayMarker = displayMarkerLayer.markBufferRange([pos, pos]);
    displayMarker = displayMarkerLayer.markBufferRange([pos, [0, 0]]);
    displayMarker = displayMarkerLayer.markBufferRange([[0, 0], pos]);
    displayMarker = displayMarkerLayer.markBufferRange([[0, 0], [0, 0]]);
    displayMarker = displayMarkerLayer.markBufferRange([[0, 0], pos], { reversed: true });

    displayMarker = displayMarkerLayer.markBufferPosition(pos);
    displayMarker = displayMarkerLayer.markBufferPosition(pos, {});
    displayMarker = displayMarkerLayer.markBufferPosition(pos, { exclusive: true });
    displayMarker = displayMarkerLayer.markBufferPosition(pos, { invalidate: "never" });
    displayMarker = displayMarkerLayer.markBufferPosition(pos, { exclusive: false,
        invalidate: "overlap" });
    displayMarker = displayMarkerLayer.markBufferPosition([0, 0]);
    displayMarker = displayMarkerLayer.markBufferPosition([0, 0], { exclusive: false });

    // Querying
    displayMarker = displayMarkerLayer.getMarker(42);
    displayMarkers = displayMarkerLayer.getMarkers();
    num = displayMarkerLayer.getMarkerCount();

    displayMarkers = displayMarkerLayer.findMarkers({
        startBufferPosition: pos,
        endBufferPosition: pos,
        startScreenPosition: pos,
        endScreenPosition: pos,
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
        containsBufferPosition: pos,
        containedInBufferRange: range,
        containedInScreenRange: range,
        intersectsBufferRange: range,
        intersectsScreenRange: range,
    });
    displayMarkers = displayMarkerLayer.findMarkers({
        intersectsScreenRange: [pos, pos],
    });
    displayMarkers = displayMarkerLayer.findMarkers({
        intersectsScreenRange: [pos, [0, 0]],
    });
    displayMarkers = displayMarkerLayer.findMarkers({
        intersectsScreenRange: [[0, 0], pos],
    });
    displayMarkers = displayMarkerLayer.findMarkers({
        intersectsScreenRange: [[0, 0], [0, 0]],
    });
}

// Disposable =================================================================
function testDisposable() {
    if (subscription.disposalAction) subscription.disposalAction();
    subscription.dispose();
}

// Dock =======================================================================
function testDock() {
    // Methods
    dock.activate();
    dock.show();
    dock.hide();
    dock.toggle();
    bool = dock.isVisible();

    // Event Subscription
    subscription = dock.observePaneItems(() => {});
    subscription = dock.onDidChangeActivePaneItem(() => {});
    subscription = dock.onDidStopChangingActivePaneItem(() => {});
    subscription = dock.observeActivePaneItem(() => {});
    subscription = dock.onDidAddPane(event => event.pane.activate());
    subscription = dock.onWillDestroyPane(event => event.pane);
    subscription = dock.onDidDestroyPane(event => event.pane);
    subscription = dock.observePanes(pane => pane.activate());
    subscription = dock.onDidChangeActivePane(pane => pane.activate());
    subscription = dock.observeActivePane(pane => pane.activate());
    subscription = dock.onDidAddPaneItem(event => event.index && event.item && event.pane);
    subscription = dock.onWillDestroyPaneItem(event => {
        event.index && event.item && event.pane;
    });
    subscription = dock.onDidDestroyPaneItem(event => {
        event.index && event.item && event.pane;
    });

    // Pane Items
    objs = dock.getPaneItems();
    obj = dock.getActivePaneItem();

    // Panes
    panes = dock.getPanes();
    pane = dock.getActivePane();
    bool = dock.activateNextPane();
    bool = dock.activatePreviousPane();
}

// Emitter ====================================================================
interface TestEmissions {
    "test-event": string;
}

function testEmitter() {
    emitter = new Atom.Emitter();
    emitter.clear();
    emitter.dispose();

    // Event Subscription
    subscription = emitter.on("test-event", value => {});
    emitter.once("test-event", value => {});
    subscription = emitter.preempt("test-event", value => {});

    // Event Emission
    emitter.emit("test-event");
    emitter.emit("test-event", 42);

    // Optional Value Emitter
    const optEmitter = new Atom.Emitter<{ "test-event": string }>();
    optEmitter.emit("test-event");
    optEmitter.emit("test-event", "test");
    optEmitter.on("test-event", value => {
        str = value ? value : "";
    });

    // Required Value Emitter
    const reqEmitter = new Atom.Emitter<{}, TestEmissions>();
    reqEmitter.on("test-event", value => {
        str = value;
    });
    reqEmitter.emit("test-event", "test");

    // Mixed Value Emitter
    const mixedEmitter = new Atom.Emitter<{ "t1": "test" }, { "t2": "test" }>();
    mixedEmitter.emit("t1");
    mixedEmitter.emit("t1", "test");
    mixedEmitter.emit("t2", "test");
}

// File =======================================================================
function testFile() {
    // Construction
    file = new Atom.File("Test.file");
    new Atom.File("Test.file", false);

    async function fileCreation() {
        bool = await file.create();
    }

    // Event Subscription
    subscription = file.onDidChange(() => {});
    subscription = file.onDidRename(() => {});
    subscription = file.onDidDelete(() => {});
    subscription = file.onWillThrowWatchError(() => {});

    // File Metadata
    bool = file.isFile();
    bool = file.isDirectory();
    bool = file.isSymbolicLink();

    async function fileExists() {
        bool = await file.exists();
    }

    bool = file.existsSync();

    async function getFileDigest() {
        str = await file.getDigest();
    }

    str = file.getDigestSync();
    file.setEncoding("utf8");
    str = file.getEncoding();

    // Managing Paths
    str = file.getPath();
    str = file.getRealPathSync();

    async function getFileRealPath() {
        str = await file.getRealPath();
    }

    str = file.getBaseName();

    // Traversing
    dir = file.getParent();

    // Reading and Writing
    async function readFile() {
        str = await file.read();
    }

    const stream = file.createReadStream();
    stream.close();

    async function writeFile() {
        await file.write("Test");
    }

    file.createWriteStream();
    file.writeSync("Test");
}

// File/Directory Type Guarding ===============================================
function testFileDirectoryTypeGuarding() {
    if (fileOrDir.isFile()) {
      file = fileOrDir;
    }
    if (fileOrDir.isDirectory()) {
      dir = fileOrDir;
    }
}

// GitRepository ==============================================================
function testGitRepository() {
    // Construction and Destruction
    repository = new Atom.GitRepository("Test");
    repository = new Atom.GitRepository("Test", {});
    repository = new Atom.GitRepository("Test", { refreshOnWindowFocus: true });
    repository = new Atom.GitRepository("Test", { config: atom.config });
    repository = new Atom.GitRepository("Test", { project: atom.project });
    repository = new Atom.GitRepository("Test", { refreshOnWindowFocus: false, config: atom.config,
        project: atom.project });
    repository.destroy();
    bool = repository.isDestroyed();

    // Event Subscription
    subscription = repository.onDidDestroy(() => {});
    subscription = repository.onDidChangeStatus(event => event.path && event.pathStatus);
    subscription = repository.onDidChangeStatuses(() => {});

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

    let aheadBehindCount: { ahead: number, behind: number };
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

    let gitReferences: { heads: string[], remotes: string[], tags: string[] };
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
    let diffStats: { added: number, deleted: number };
    diffStats = repository.getDiffStats("file.path");

    let lineDiffs: Array<{ oldStart: number, newStart: number, oldLines: number,
        newLines: number }>;
    lineDiffs = repository.getLineDiffs("file.path", "contents");

    // Checking Out
    bool = repository.checkoutHead("file.path");
    bool = repository.checkoutReference("ref", true);
}

// Grammar ====================================================================
function testGrammar() {
    subscription = grammar.onDidUpdate(() => {});

    const tokenizeLinesResult = grammar.tokenizeLines("Test String");
    for (const tokenizedLine of tokenizeLinesResult) {
        for (const token of tokenizedLine) {
            token.scopes;
            token.value;
        }
    }

    grammar.tokenizeLine("Test String");
    const tokenizeLineResult = grammar.tokenizeLine("Test String", null, false);
    tokenizeLineResult.line;
    tokenizeLineResult.tags;
    tokenizeLineResult.tokens;
    grammar.tokenizeLine("Test String", tokenizeLineResult.ruleStack);
    grammar.tokenizeLine("Test String", tokenizeLineResult.ruleStack, false);

    let str: string;
    str = grammar.name;
    str = grammar.scopeName;
}

// GrammarRegistry ============================================================
function testGrammarRegistry() {
    // Event Subscription
    subscription = registry.onDidAddGrammar(grammar => grammar.name);
    subscription = registry.onDidUpdateGrammar(grammar => grammar.name);
    subscription = registry.onDidRemoveGrammar(grammar => grammar.name);

    // Managing Grammars
    grammars = registry.getGrammars();

    let potentialGrammar = registry.grammarForScopeName("scope.test");
    if (potentialGrammar) grammar = potentialGrammar;

    subscription = registry.addGrammar(grammar);

    potentialGrammar = registry.removeGrammarForScopeName("scope.test");

    grammar = registry.readGrammarSync("/test/path");

    registry.readGrammar("/test/path", (error, grammar) => {
        if (grammar) {
            grammar.name;
        } else {
            if (error) error.name;
        }
    });

    grammar = registry.loadGrammarSync("/test/path");

    registry.loadGrammar("/test/path", (error, grammar) => {
        if (grammar) {
            grammar.name;
        } else {
            if (error) error.name;
        }
    });
}

// Gutter =====================================================================
function testGutter() {
    // Gutter Destruction
    gutter.destroy();

    // Event Subscription
    subscription = gutter.onDidChangeVisible(gutter => gutter.isVisible());
    subscription = gutter.onDidDestroy(() => {});

    // Visibility
    gutter.hide();
    gutter.show();
    bool = gutter.isVisible();
    decoration = gutter.decorateMarker(displayMarker, { type: "line-number" });
}

// HistoryManager =============================================================
function testHistoryManager() {
    historyPaths = atom.history.getProjects();
    atom.history.clearProjects();
    subscription = atom.history.onDidChangeProjects(() => {});
}

// KeymapManager ==============================================================
function testKeymapManager() {
    const manager = atom.keymaps;
    manager.clear();
    manager.destroy();

    // Event Subscription
    subscription = manager.onDidMatchBinding((event): void => { event.keystrokes; });
    subscription = manager.onDidPartiallyMatchBindings((event): void => {
        event.partiallyMatchedBindings; });
    subscription = manager.onDidFailToMatchBinding((event): void => { event.keystrokes; });
    subscription = manager.onDidFailToReadFile((event): void => { event.stack; });

    // Adding and Removing Bindings
    subscription = manager.add("a", {}, 0);

    // Accessing Bindings
    let bindings: Atom.KeyBinding[] = manager.getKeyBindings();
    bindings = manager.findKeyBindings();
    bindings = manager.findKeyBindings({ command: "a" });
    bindings = manager.findKeyBindings({ keystrokes: "a" });
    bindings = manager.findKeyBindings({ target: element });
    bindings = manager.findKeyBindings({ command: "a", keystrokes: "b"});
    bindings = manager.findKeyBindings({ command: "a", keystrokes: "b", target: element });

    // Managing Keymap Files
    manager.loadKeymap("Test.file");
    manager.loadKeymap("Test.file", { watch: true });
    manager.loadKeymap("Test.file", { watch: true, priority: 0});

    // Managing Keyboard Events
    manager.handleKeyboardEvent(event);
    manager.keystrokeForKeyboardEvent(event);

    subscription = manager.addKeystrokeResolver((event): string => {
        event.layoutName;
        return "Test";
    });

    const num: number = manager.getPartialMatchTimeout();
}

// LayerDecoration ============================================================
function testLayerDecoration() {
    layerDecoration.destroy();
    bool = layerDecoration.isDestroyed();
    layerDecoration.getProperties();
    layerDecoration.setProperties(decorationLayerProps);
    layerDecoration.setPropertiesForMarker(marker, { type: "line", class: "test-class" });
}

// Marker =====================================================================
function testMarker() {
    // Properties
    num = marker.id;

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
    subscription = marker.onDidDestroy(() => {});

    subscription = marker.onDidChange(event => {
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
    pos = marker.getHeadPosition();
    pos = marker.getTailPosition();
    pos = marker.getStartPosition();
    pos = marker.getEndPosition();
    bool = marker.isReversed();
    bool = marker.hasTail();
    bool = marker.isValid();
    bool = marker.isDestroyed();
    bool = marker.isExclusive();
    str = marker.getInvalidationStrategy();

    // Mutating Markers
    bool = marker.setRange(range);
    bool = marker.setRange([pos, pos]);
    bool = marker.setRange([pos, [0, 0]]);
    bool = marker.setRange([[0, 0], pos]);
    bool = marker.setRange([[0, 0], [0, 0]]);
    bool = marker.setRange([pos, pos], { exclusive: false });
    bool = marker.setRange(range, { exclusive: true, reversed: false });

    bool = marker.setHeadPosition(pos);
    bool = marker.setHeadPosition([0, 0]);

    bool = marker.setTailPosition(pos);
    bool = marker.setTailPosition([0, 0]);

    bool = marker.clearTail();
    bool = marker.plantTail();

    // Comparison
    bool = marker.isEqual(marker);
    num = marker.compare(marker);
}

// MarkerLayer ================================================================
function testMarkerLayer() {
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
        startPosition: pos,
        endPosition: pos,
        startsInRange: range,
        endsInRange: range,
        containsPoint: pos,
        containsRange: range,
        startRow: num,
        endRow: num,
        intersectsRow: num,
    });
    markers = markerLayer.findMarkers({ containsRange: [pos, pos] });
    markers = markerLayer.findMarkers({ containsRange: [pos, [0, 0]] });
    markers = markerLayer.findMarkers({ containsRange: [[0, 0], pos] });
    markers = markerLayer.findMarkers({ containsRange: [[0, 0], [0, 0]] });

    // Marker creation
    marker = markerLayer.markRange(range);
    marker = markerLayer.markRange([pos, pos]);
    marker = markerLayer.markRange([pos, [0, 0]]);
    marker = markerLayer.markRange([[0, 0], pos]);
    marker = markerLayer.markRange([[0, 0], [0, 0]]);
    marker = markerLayer.markRange(range, { exclusive: true });
    marker = markerLayer.markRange([pos, pos], { invalidate: "never" });
    marker = markerLayer.markRange(range, {
        exclusive: false, invalidate: "surround", reversed: false,
    });

    marker = markerLayer.markPosition(pos);
    marker = markerLayer.markPosition([0, 0]);
    marker = markerLayer.markPosition(pos, { exclusive: false });
    marker = markerLayer.markPosition([0, 0], { invalidate: "inside" });
    marker = markerLayer.markPosition(pos, { exclusive: true, invalidate: "surround" });

    // Event subscription
    subscription = markerLayer.onDidUpdate(() => {});
    subscription = markerLayer.onDidCreateMarker(marker => marker.id);
    subscription = markerLayer.onDidDestroy(() => {});
}

// MenuManager ================================================================
function testMenuManager() {
    subscription = atom.menu.add([
        {
            label: "Hello",
            submenu : [{ label: "World!", command: "hello:world" }],
        },
    ]);
    atom.menu.update();
}

// Notification ===============================================================
function testNotification() {
    notification = new Atom.Notification("fatal", "Test");
    notification = new Atom.Notification("success", "Test", {});
    notification = new Atom.Notification("info", "Test", {
        buttons: [
            { className: "Test", text: "Test", onDidClick: () => {}},
        ],
        description: "Test",
        detail: "Test",
        dismissable: false,
        icon: "Test",
    });

    // Event Subscription
    subscription = notification.onDidDismiss(notification => notification.getType());
    subscription = notification.onDidDisplay(notification => notification.getMessage());

    // Methods
    str = notification.getType();
    str = notification.getMessage();

    // Extended Methods
    notification.dismiss();
}

// NotificationManager ========================================================
function testNotificationManager() {
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
}

// Package ====================================================================
function testPackage() {
    // Event Subscription
    pack.onDidDeactivate(() => {});

    // Native Module Compatibility
    bool = pack.isCompatible();

    let exitInfo: Promise<{ code: number, stderr: string, stdout: string }>;
    exitInfo = pack.rebuild();

    const buildFailureOutput = pack.getBuildFailureOutput();
    if (buildFailureOutput) {
        str = buildFailureOutput;
    }
}

// PackageManager ===========================================================\==
function testPackageManager() {
    // Event Subscription
    subscription = atom.packages.onDidLoadInitialPackages(() => {});
    subscription = atom.packages.onDidActivateInitialPackages(() => {});
    subscription = atom.packages.onDidActivatePackage(pack => pack.name);
    subscription = atom.packages.onDidDeactivatePackage(pack => pack.path);
    subscription = atom.packages.onDidLoadPackage(pack => pack.isCompatible());
    subscription = atom.packages.onDidUnloadPackage(pack => pack.name);
    subscription = atom.packages.onDidTriggerActivationHook(
      'language-javascript:grammar-used', () => {}
    );

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
}

// Pane =======================================================================
function testPane() {
    // Event Subscription
    subscription = pane.onDidChangeFlexScale(scale => num = scale);
    subscription = pane.observeFlexScale(scale => num = scale);
    subscription = pane.onDidActivate(() => {});
    subscription = pane.onWillDestroy(() => {});
    subscription = pane.onDidDestroy(() => {});
    subscription = pane.onDidChangeActive(active => bool = active);
    subscription = pane.observeActive(active => bool = active);
    subscription = pane.onDidAddItem(event => event.index && event.item);
    subscription = pane.onDidRemoveItem(event => event.index && event.item);
    subscription = pane.onWillRemoveItem(event => event.index && event.item);
    subscription = pane.onDidMoveItem(event => event.item && event.oldIndex && event.newIndex);
    subscription = pane.observeItems((item) => {});
    subscription = pane.onDidChangeActiveItem((item) => {});
    subscription = pane.onChooseNextMRUItem((item) => {});
    subscription = pane.onChooseLastMRUItem((item) => {});
    subscription = pane.onDoneChoosingMRUItem(() => {});
    subscription = pane.observeActiveItem((item) => {});
    subscription = pane.onWillDestroyItem(event => event.index && event.item);

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
}

// Panel ======================================================================
function testPanel() {
    // Methods
    panel.destroy();

    // Event Subscription
    subscription = panel.onDidChangeVisible(visible => bool = visible);
    subscription = panel.onDidDestroy(panel => bool = panel.isVisible());

    // Panel Details
    obj = panel.getItem();
    num = panel.getPriority();
    bool = panel.isVisible();
    panel.hide();
    panel.show();
}

// PathWatcher ================================================================
async function testPathWatcher() {
    const pathWatcher = await pathWatcherPromise;
    pathWatcher.dispose();
    subscription = pathWatcher.onDidError((error) => str = error.name);

    async function waitForPathWatcher() {
        await pathWatcher.getStartPromise();
    }
}

// Point ======================================================================
function testPoint() {
    let point = new Atom.Point(42, 42);
    new Atom.Point();
    new Atom.Point(42);

    // Properties
    num = point.row;
    num = point.column;

    // Construction
    point = Atom.Point.fromObject({ row: 42, column: 42 }, true);
    point = point.copy();
    point = point.negate();

    // Comparison
    point = Atom.Point.min(point, point);
    Atom.Point.min([0, 0], [0, 0]);
    Atom.Point.min(point, [0, 0]);
    Atom.Point.min([0, 0], point);

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
    const frozenPoint: Readonly<Atom.Point> = point.freeze();

    point = point.translate(point);
    point.translate([0, 0]);

    point = point.traverse(point);
    point.traverse([0, 0]);

    // Conversion
    point.toArray();
    point.serialize();
    str = point.toString();
}

// Project ====================================================================
function testProject() {
    // Event Subscription
    subscription = project.onDidChangePaths(paths => paths.length);

    subscription = project.onDidChangeFiles(events => {
        for (const event of events) {
            str = event.action;
        }
    });

    subscription = project.onDidAddBuffer(buffer => buffer.id);
    subscription = project.observeBuffers(buffer => buffer.getUri());

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
}

// Range ======================================================================
function testRange() {
    let range = new Atom.Range(pos, pos);
    new Atom.Range([0, 0], [0, 0]);
    new Atom.Range(pos, [0, 0]);
    new Atom.Range([0, 0], pos);

    // Properties
    range.start;
    range.end;

    // Construction
    range = Atom.Range.fromObject({ start: pos, end: pos}, true);
    Atom.Range.fromObject([pos, pos]);
    Atom.Range.fromObject([[0, 0], [0, 0]]);
    Atom.Range.fromObject([pos, [0, 0]]);
    Atom.Range.fromObject([[0, 0], pos]);

    range = range.copy();
    range = range.negate();

    // Serialization and Deserialization
    range = Atom.Range.deserialize({});
    range.serialize();

    // TextBuffer.Range Details
    bool = range.isEmpty();
    bool = range.isSingleLine();
    num = range.getRowCount();
    nums = range.getRows();

    // Operations
    const frozenRange: Readonly<Atom.Range> = range.freeze();
    range = range.union(range);

    range = range.translate(pos);
    range.translate([0, 0]);
    range.translate(pos, pos);
    range.translate([0, 0], pos);
    range.translate(pos, [0, 0]);
    range.translate([0, 0], [0, 0]);

    range = range.traverse(pos);
    range.traverse([0, 0]);

    // Comparison
    num = range.compare(range);
    range.compare([pos, pos]);
    range.compare([pos, [0, 0]]);
    range.compare([[0, 0], pos]);
    range.compare([[0, 0], [0, 0]]);

    bool = range.isEqual(range);
    range.isEqual([pos, pos]);
    range.isEqual([pos, [0, 0]]);
    range.isEqual([[0, 0], pos]);
    range.isEqual([[0, 0], [0, 0]]);

    bool = range.coversSameRows(range);

    bool = range.intersectsWith(range);
    range.intersectsWith(range, true);

    bool = range.containsRange(range);
    range.containsRange([pos, pos]);
    range.containsRange([pos, [0, 0]]);
    range.containsRange([[0, 0], pos]);
    range.containsRange([[0, 0], [0, 0]]);
    range.containsRange(range, true);
    range.containsRange([pos, pos], false);
    range.containsRange([pos, [0, 0]], false);
    range.containsRange([[0, 0], pos], false);
    range.containsRange([[0, 0], [0, 0]], false);

    bool = range.containsPoint(pos);
    range.containsPoint([0, 0]);
    range.containsPoint(pos, true);
    range.containsPoint([0, 0], false);

    bool = range.intersectsRow(42);
    bool = range.intersectsRowRange(42, 42);

    // Conversion
    str = range.toString();
}

// ScopeDescriptor ============================================================
strs = scopeDescriptor.getScopesArray();

// Selection ==================================================================
function testSelection() {
    // Event Subscription
    subscription = selection.onDidChangeRange(event => event.newBufferRange &&
        event.oldBufferRange && event.newScreenRange && event.oldScreenRange &&
        event.selection);
    subscription = selection.onDidDestroy(() => {});

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
        undo: "skip", preserveTrailingLineIndentation: false });

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
}

// StyleManager ===============================================================
function testStyleManager() {
    // Event Subscription
    subscription = styleManager.observeStyleElements(styleElement => styleElement.context);
    subscription = styleManager.onDidAddStyleElement(styleElement => styleElement.sourcePath);
    subscription = styleManager.onDidRemoveStyleElement(styleElement => styleElement.onkeydown);
    subscription = styleManager.onDidUpdateStyleElement(styleElement => styleElement.sourcePath);

    // Reading Style Elements
    const styleElements: HTMLStyleElement[] = styleManager.getStyleElements();

    // Paths
    str = styleManager.getUserStyleSheetPath();
}

// Task =======================================================================
function testTask() {
    let task: Atom.Task = Atom.Task.once("File.path", {}, () => {});
    task = new Atom.Task("File.path");

    task.start({}, () => {});
    task.send("test-message");
    subscription = task.on("test-message", () => {});
    task.terminate();
    task.cancel();
}

// TextBuffer =================================================================
function testTextBuffer() {
    const shouldDestroyOnFileDelete = () => false;

    buffer = new Atom.TextBuffer("test");
    new Atom.TextBuffer();
    new Atom.TextBuffer({ text: "Test" });
    new Atom.TextBuffer({ shouldDestroyOnFileDelete });
    new Atom.TextBuffer({ text: "Test", shouldDestroyOnFileDelete });

    async function bufferLoadFile() {
        buffer = await Atom.TextBuffer.load("Test.file");
        buffer = await Atom.TextBuffer.load("Test.file", { encoding: "utf8" });
        buffer = await Atom.TextBuffer.load("Test.file", { shouldDestroyOnFileDelete });
        buffer = await Atom.TextBuffer.load("Test.file", { encoding: "utf8",
            shouldDestroyOnFileDelete });
    }

    buffer = Atom.TextBuffer.loadSync("Test.file");
    Atom.TextBuffer.loadSync("Test.file", { encoding: "utf8" });
    Atom.TextBuffer.loadSync("Test.file", { shouldDestroyOnFileDelete });
    Atom.TextBuffer.loadSync("Test.file", { encoding: "uft8", shouldDestroyOnFileDelete });

    async function deserializeBuffer() {
        buffer = await Atom.TextBuffer.deserialize({});
    }

    // Event Subscription
    subscription = buffer.onWillChange(() => void {});

    subscription = buffer.onDidChange((event): void => {
        range = event.newRange;
        for (const change of event.changes) {
            range = change.newRange;
        }
    });

    subscription = buffer.onDidChangeText(() => void {});

    subscription = buffer.onDidStopChanging((event): void => {
        for (const change of event.changes) {
        change.newExtent;
        }
    });

    subscription = buffer.onDidConflict(() => void {});
    subscription = buffer.onDidChangeModified(() => void {});
    subscription = buffer.onDidUpdateMarkers(() => void {});
    subscription = buffer.onDidCreateMarker(() => void {});

    subscription = buffer.onDidChangePath((path): void => {
        str = path;
    });

    subscription = buffer.onDidChangeEncoding(() => void {});

    subscription = buffer.onWillSave(() => void {});
    subscription = buffer.onWillSave(() => Promise.resolve());

    subscription = buffer.onDidSave(() => void {});
    subscription = buffer.onDidDelete(() => void {});
    subscription = buffer.onWillReload(() => void {});
    subscription = buffer.onDidReload(() => void {});
    subscription = buffer.onDidDestroy(() => void {});
    subscription = buffer.onWillThrowWatchError(() => void {});

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
    str = buffer.getTextInRange([pos, pos]);
    str = buffer.getTextInRange([[0, 0], [0, 0]]);
    str = buffer.getTextInRange([pos, [0, 0]]);
    str = buffer.getTextInRange([[0, 0], pos]);

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
    range = buffer.setTextInRange([pos, pos], "Test");
    range = buffer.setTextInRange([[0, 0], [0, 0]], "Test");
    range = buffer.setTextInRange([pos, [0, 0]], "Test");
    range = buffer.setTextInRange([[0, 0], pos], "Test");
    range = buffer.setTextInRange(range, "Test", { normalizeLineEndings: true });
    range = buffer.setTextInRange(range, "Test", { undo: "skip" });
    range = buffer.setTextInRange(range, "Test", { normalizeLineEndings: true, undo: "skip" });
    range = buffer.setTextInRange([[0, 0], [0, 0]], "Test", { undo: "skip" });

    range = buffer.insert(pos, "Test");
    buffer.insert([0, 0], "Test");
    buffer.insert(pos, "Test", { normalizeLineEndings: true });
    buffer.insert(pos, "Test", { undo: "skip" });
    buffer.insert(pos, "Test", { normalizeLineEndings: true, undo: "skip" });
    buffer.insert([0, 0], "Test", { undo: "skip" });

    range = buffer.append("Test");
    buffer.append("Test", { normalizeLineEndings: true });
    buffer.append("Test", { undo: "skip" });
    buffer.append("Test", { normalizeLineEndings: true, undo: "skip" });

    range = buffer.delete(range);
    buffer.delete([pos, pos]);
    buffer.delete([[0, 0], [0, 0]]);
    buffer.delete([pos, [0, 0]]);
    buffer.delete([[0, 0], pos]);

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
    buffer.markRange([pos, pos]);
    buffer.markRange([[0, 0], [0, 0]]);
    buffer.markRange([pos, [0, 0]]);
    buffer.markRange([[0, 0], pos]);
    buffer.markRange(range, { exclusive: true});
    buffer.markRange(range, { invalidate: "surround" });
    buffer.markRange(range, { reversed: true });
    buffer.markRange(range, { exclusive: true, invalidate: "surround", reversed: true });
    buffer.markRange([pos, pos], { exclusive: true });

    marker = buffer.markPosition(pos);
    buffer.markPosition([0, 0]);
    buffer.markPosition(pos, { exclusive: true });
    buffer.markPosition(pos, { invalidate: "never" });
    buffer.markPosition(pos, { exclusive: true, invalidate: "surround" });
    buffer.markPosition([0, 0], { exclusive: true });

    markers = buffer.getMarkers();
    marker = buffer.getMarker(42);

    markers = buffer.findMarkers({
        startPosition: pos,
        endPosition: pos,
        startsInRange: range,
        endsInRange: range,
        containsPoint: pos,
        containsRange: range,
        startRow: num,
        endRow: num,
        intersectsRow: num,
    });
    markers = buffer.findMarkers({ startsInRange: [pos, pos] });
    markers = buffer.findMarkers({ startsInRange: [pos, [0, 0]] });
    markers = buffer.findMarkers({ startsInRange: [[0, 0], pos] });
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
    buffer.scanInRange(/r^Test/, [pos, pos], (): void => {});
    buffer.scanInRange(/r^Test/, [[0, 0], [0, 0]], (): void => {});
    buffer.scanInRange(/r^Test/, [pos, [0, 0]], (): void => {});
    buffer.scanInRange(/r^Test/, [[0, 0], pos], (): void => {});
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
    buffer.backwardsScanInRange(/r^Test/, [pos, pos], (): void => {});
    buffer.backwardsScanInRange(/r^Test/, [[0, 0], [0, 0]], (): void => {});
    buffer.backwardsScanInRange(/r^Test/, [pos, [0, 0]], (): void => {});
    buffer.backwardsScanInRange(/r^Test/, [[0, 0], pos], (): void => {});
    buffer.backwardsScanInRange(/r^Test/, [[0, 0], [0, 0]], { trailingContextLineCount: 42 },
        (): void => {});

    num = buffer.replace(/r^Test/, "Test");

    // Buffer TextBuffer.Range Details
    range = buffer.getRange();
    num = buffer.getLineCount();
    num = buffer.getLastRow();
    pos = buffer.getFirstPosition();
    pos = buffer.getEndPosition();
    num = buffer.getMaxCharacterIndex();
    range = buffer.rangeForRow(42, true);
    num = buffer.characterIndexForPosition(pos);
    pos = buffer.positionForCharacterIndex(42);

    range = buffer.clipRange(range);
    range = buffer.clipRange([pos, pos]);
    range = buffer.clipRange([pos, [0, 0]]);
    range = buffer.clipRange([[0, 0], pos]);
    range = buffer.clipRange([[0, 0], [0, 0]]);

    pos = buffer.clipPosition(pos);
    pos = buffer.clipPosition([0, 0]);

    // Buffer Operations
    async function saveBuffer() {
        await buffer.save();
        await buffer.saveAs("Test.file");
    }

    buffer.reload();
}

// TextEditor =================================================================
function testTextEditor() {
    // Event Subscription
    subscription = editor.onDidChangeTitle(title => str = title.charAt(0));
    subscription = editor.onDidChangePath(path => str = path.charAt(0));

    subscription = editor.onDidChange(changes => {
        for (const change of changes) {
            change.newExtent;
            change.oldExtent;
            change.start;
        }
    });

    subscription = editor.onDidStopChanging(event => {
        for (const change of event.changes) {
            change.newExtent && change.oldExtent && change.newRange && change.oldRange &&
            change.newText && change.oldText && change.start;
        }
    });

    subscription = editor.onDidChangeCursorPosition(event => event.newBufferPosition);
    subscription = editor.onDidChangeSelectionRange(event => event.selection);
    subscription = editor.onDidSave(event => event.path);
    subscription = editor.onDidDestroy(() => {});
    subscription = editor.observeGutters(gutter => gutter.show());
    subscription = editor.onDidAddGutter(gutter => gutter.hide());
    subscription = editor.onDidRemoveGutter(name => name.length);
    subscription = editor.onDidChangeSoftWrapped(softWrapped => {});
    subscription = editor.onDidChangeEncoding(encoding => {});
    subscription = editor.observeGrammar(grammar => grammar.name);
    subscription = editor.onDidChangeGrammar(grammar => grammar.name);
    subscription = editor.onDidChangeModified(modified => {});
    subscription = editor.onDidConflict(() => {});
    subscription = editor.onWillInsertText(event => event.cancel && event.text);
    subscription = editor.onDidInsertText(event => event.text);
    subscription = editor.observeCursors(cursor => cursor.moveToBottom());
    subscription = editor.onDidAddCursor(cursor => cursor.getMarker());
    subscription = editor.onDidRemoveCursor(cursor => cursor.compare(cursor));
    subscription = editor.observeSelections(selection => selection.cutToEndOfBufferLine());
    subscription = editor.onDidAddSelection(selection => selection.selectWord());
    subscription = editor.onDidRemoveSelection(selection => selection.toggleLineComments());
    subscription = editor.observeDecorations(decoration => decoration.getId());
    subscription = editor.onDidAddDecoration(decoration => decoration.id);
    subscription = editor.onDidRemoveDecoration(decoration => decoration.getId());
    subscription = editor.onDidChangePlaceholderText(placeholderText =>
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

    range = editor.setTextInBufferRange(range, "Test");
    range = editor.setTextInBufferRange([pos, pos], "Test");
    range = editor.setTextInBufferRange([pos, [0, 0]], "Test");
    range = editor.setTextInBufferRange([[0, 0], pos], "Test");
    range = editor.setTextInBufferRange([[0, 0], [0, 0]], "Test");
    range = editor.setTextInBufferRange(range, "Test", {});
    range = editor.setTextInBufferRange([pos, pos], "Test", { normalizeLineEndings: true });
    range = editor.setTextInBufferRange(range, "Test", { normalizeLineEndings: true,
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
        autoIndentNewline: false, normalizeLineEndings: false, select: false,
        undo: "skip", preserveTrailingLineIndentation: true });

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

    range = editor.bufferRangeForScopeAtPosition('source.js', [0, 0]);
    range = editor.bufferRangeForScopeAtPosition('source.js', {row: 10, column: 11});
    range = editor.bufferRangeForScopeAtPosition('source.js', pos);

    let token: {value: string, scopes: string[]};
    token = editor.tokenForBufferPosition([5, 6]);
    token = editor.tokenForBufferPosition({row: 0, column: 1});
    token = editor.tokenForBufferPosition(pos);
}

// ThemeManager ===============================================================
function testThemeManager() {
    // Event Subscription
    subscription = atom.themes.onDidChangeActiveThemes(() => {});

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
}

// TooltipManager =============================================================
function testTooltipManager() {
    subscription = atom.tooltips.add(element, { title: "Test"});
    subscription = atom.tooltips.add(element, { title: "<p>Test</p>", html: true });
    subscription = atom.tooltips.add(element, { item: element});
    subscription = atom.tooltips.add(element, { class: "test-class" });
    subscription = atom.tooltips.add(element, { placement: "top" });

    subscription = atom.tooltips.add(element, { placement: () => "auto left" });

    subscription = atom.tooltips.add(element, { trigger: "click" });
    subscription = atom.tooltips.add(element, { delay: { hide: 42, show: 42 }});
    subscription = atom.tooltips.add(element, { keyBindingCommand: "test-command",
        keyBindingTarget: element });

    tooltips = atom.tooltips.findTooltips(element);
}

// ViewRegistry ===============================================================
function testViewRegistry() {
    atom.views.addViewProvider(Atom.Point, (point) => {
        point.column;
        return element;
    });

    element = atom.views.getView(element);
    textEditorElement = atom.views.getView(editor);
}

// Workspace ==================================================================
function testWorkspace() {
    // Event Subscription
    subscription = atom.workspace.observeTextEditors(editor => editor.id);
    subscription = atom.workspace.observePaneItems((item) => {});
    subscription = atom.workspace.onDidChangeActivePaneItem((item) => {});
    subscription = atom.workspace.onDidStopChangingActivePaneItem((item) => {});

    subscription = atom.workspace.onDidChangeActiveTextEditor(editor => {
        if (editor) {
            editor.id;
        }
    });

    subscription = atom.workspace.observeActivePaneItem((item) => {});

    subscription = atom.workspace.observeActiveTextEditor(editor => {
        if (editor) {
            editor.id;
        }
    });

    subscription = atom.workspace.onDidOpen(event => event.index && event.item &&
        event.pane && event.uri);
    subscription = atom.workspace.onDidAddPane(event => event.pane);
    subscription = atom.workspace.onWillDestroyPane(event => event.pane);
    subscription = atom.workspace.onDidDestroyPane(event => event.pane);
    subscription = atom.workspace.observePanes(pane => pane.activate());
    subscription = atom.workspace.onDidChangeActivePane(pane => pane.activate());
    subscription = atom.workspace.observeActivePane(pane => pane.activate());
    subscription = atom.workspace.onDidAddPaneItem(event => event.index && event.item &&
        event.pane);
    subscription = atom.workspace.onWillDestroyPaneItem(event => {
        event.index && event.item && event.pane;
    });
    subscription = atom.workspace.onDidDestroyPaneItem(event => event.index &&
        event.item && event.pane);
    subscription = atom.workspace.onDidAddTextEditor(event => event.index && event.pane &&
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

    atom.workspace.addOpener((uri) => {
        if (uri === "test://") {
            return {
                getTitle: () => "Test Title",
            };
        }
    });

    atom.workspace.buildTextEditor(obj);

    // Pane Items
    objs = atom.workspace.getPaneItems();
    obj = atom.workspace.getActivePaneItem();
    editors = atom.workspace.getTextEditors();

    const potentialEditor = atom.workspace.getActiveTextEditor();
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
                range = Atom.Range.fromObject(match.range);
                strs = match.leadingContextLines;
                strs = match.trailingContextLines;
            }
        });
    }

    async function workspaceReplace() {
        await atom.workspace.replace(/r/, "Test", ["a"], (options) => {});
    }
}

// WorkspaceCenter ============================================================
function testWorkspaceCenter() {
    // Event Subscription
    subscription = workspaceCenter.observeTextEditors(editor => editor.id);
    subscription = workspaceCenter.observePaneItems(item => {});
    subscription = workspaceCenter.onDidChangeActivePaneItem(item => {});
    subscription = workspaceCenter.onDidStopChangingActivePaneItem(item => {});
    subscription = workspaceCenter.observeActivePaneItem(item => {});

    // Pane Items
    objs = workspaceCenter.getPaneItems();
    workspaceCenter.getActivePaneItem();
    editors = workspaceCenter.getTextEditors();

    const potentialEditor = workspaceCenter.getActiveTextEditor();
    if (potentialEditor) {
        editor = potentialEditor;
    }

    // Panes
    panes = workspaceCenter.getPanes();
    pane = workspaceCenter.getActivePane();
    workspaceCenter.activateNextPane();
    workspaceCenter.activatePreviousPane();
}

// watchPath ==================================================================
const pathWatcherPromise = Atom.watchPath("/var/test", {}, (events) => {
    for (const event of events) {
        str = event.path;
        str = event.action;
        if (event.oldPath) str = event.oldPath;
    }
});

// TextEditorElement ==========================================================
function testTextEditorElement() {
  textEditorComponent = textEditorElement.getComponent();
  editor = textEditorElement.getModel();

  textEditorElement.getNextUpdatePromise().then(() => {});
  let num: number = textEditorElement.getBaseCharacterWidth();

  textEditorElement.scrollToTop();
  textEditorElement.scrollToBottom();
  textEditorElement.setScrollTop(num);
  num = textEditorElement.getScrollTop();
  textEditorElement.setScrollLeft(num);
  num = textEditorElement.getScrollLeft();
  num = textEditorElement.getScrollHeight();

  pixelPos = textEditorElement.pixelPositionForBufferPosition(pos);
  pixelPos = textEditorElement.pixelPositionForScreenPosition({row: 1, column: 2});
  pixelPos = textEditorElement.pixelPositionForScreenPosition(pos);

  subscription = textEditorElement.onDidChangeScrollTop((scrollTop: number) => {});
  subscription = textEditorElement.onDidChangeScrollLeft((scrollLeft: number) => {});
  subscription = textEditorElement.onDidAttach(() => {});
  subscription = textEditorElement.onDidDetach(() => {});

  textEditorElement = document.createElement('atom-text-editor');
}

// TextEditorComponent ========================================================
function testTextEditorComponent() {
  pixelPos = textEditorComponent.pixelPositionForMouseEvent(mouseEvent);
  pixelPos = textEditorComponent.pixelPositionForScreenPosition(pos);
  pos = textEditorComponent.screenPositionForMouseEvent(mouseEvent);
  pos = textEditorComponent.screenPositionForPixelPosition(pixelPos);
}
