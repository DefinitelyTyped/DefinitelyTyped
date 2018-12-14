import * as utils from "ckeditor__ckeditor5-utils";
import * as core from "ckeditor__ckeditor5-core";
import * as engine from "ckeditor__ckeditor5-engine";

declare let bool: boolean;
declare let command: core.Command;
declare let commandCollection: core.CommandCollection;
declare let commands: core.Command[];
declare let componentFactory: core.ComponentFactory;
declare let config: utils.Config;
declare let conversion: engine.conversion.Conversion;
declare let dataController: engine.controller.DataController;
declare let editingController: engine.controller.EditingController;
declare let editingKeystrokeHandler: core.EditingKeystrokeHandler;
declare let editor: core.editor.Editor;
declare let focusTracker: utils.FocusTracker;
declare let htmlElement: HTMLElement;
declare let keystrokes: core.EditingKeystrokeHandler;
declare let locale: utils.Locale;
declare let model: engine.model.Model;
declare let num: number;
declare let pendingActions: core.PendingActions;
declare let plugin: core.Plugin;
declare let pluginCollection: core.PluginCollection<any>;
declare let pluginCollectionStr: core.PluginCollection<core.Plugin<string>>;
declare let pluginStr: core.Plugin<string>;
declare let myPlugin: MyPlugin;
declare let myPluginMaybe: MyPlugin | undefined;
declare let myPlugins: MyPlugin[];
declare let str: string;
declare let strOrUndef: string | undefined;
declare let strs: string[];
declare let ui: core.editor.EditorUI;
declare let undef: undefined;
declare let view: core.EditorUIView;

class MyPlugin extends core.Plugin {
    constructor(editor: core.editor.Editor) {
        super(editor);
    }

    static get pluginName() {
        return "A";
    }

    myMethod() {
        return "this is MyPlugin method";
    }
}

class SomeCommand extends core.Command {
    execute() {}
}

// core/editor/utils/dataapimixin =============================================

class DataApiEditor extends core.editor.Editor implements core.editor.utils.DataApi {
    // mixin by DataApiMixin
    getData: () => string;
    setData: (data: string) => void;
}
utils.mix(DataApiEditor, core.editor.utils.DataApiMixin);
const dataApiEditor = new DataApiEditor();

dataApiEditor.setData("foo");
str = dataApiEditor.getData();

// core/editor/utils/elementapimixin ==========================================

class ElementApiEditor extends core.editor.Editor implements core.editor.utils.ElementApi {
    // mixin by ElementApiMixin
    readonly sourceElement: HTMLElement;
    updateSourceElement: () => void;
}
utils.mix(ElementApiEditor, core.editor.utils.ElementApiMixin);
const elementApiEditor = new ElementApiEditor();

htmlElement = elementApiEditor.sourceElement;
elementApiEditor.updateSourceElement();

// core/editor/utils/attachtoform =============================================

// $ExpectError
core.editor.utils.attachToForm(editor);
core.editor.utils.attachToForm(elementApiEditor);

// core/editor/editor =========================================================

commandCollection = editor.commands;
config = editor.config;
editingController = editor.editing;
conversion = editor.conversion;
dataController = editor.data;
editor.isReadOnly = bool;
editingKeystrokeHandler = editor.keystrokes;
locale = editor.locale;
model = editor.model;
pluginCollection = editor.plugins;

if (editor.state === "initializing") {
    console.log("new Editor()");
} else if (editor.state === "ready") {
    console.log("Editor.create()");
} else if (editor.state === "destroyed") {
    console.log("editor.destroy");
} else {
    const n: never = editor.state;
}

editor.state = "ready";

core.editor.Editor.builtinPlugins = [plugin, pluginStr, plugin];
const plugins: Array<core.Plugin<any>> = core.editor.Editor.builtinPlugins;

core.editor.Editor.defaultConfig = {
    foo: {
        a: 1,
        b: 2
    }
};

editor = new core.editor.Editor();
editor = new core.editor.Editor({language: "pl"});

editor.destroy();
editor.destroy().then(() => {
    console.log(`${editor.state} == destroyed`);
});

editor.execute("someCommand");
editor.execute("someCommand2", "arg1", 2);

editor.initPlugins();
editor.initPlugins().then(() => {
    console.log(`init ${Array.from(editor.plugins).length} plugins`);
});

locale.t = editor.t;
str = editor.t("Label");
str = editor.t('Created file "%0" in %1ms.', ["fileName", "100"]);

// core/editor/editorui =======================================================

componentFactory = ui.componentFactory;
editor = ui.editor;
focusTracker = ui.focusTracker;
view = ui.view;

ui = new core.editor.EditorUI(editor, view);
ui.destroy();
ui.update();

// core/editor/editorwithui ===================================================

declare let ewui: core.editor.EditorWithUI;
htmlElement = ewui.element!;
ui = ewui.ui;

// core/command ===============================================================

editor = command.editor;

bool = command.isEnabled;

undef = command.value;
strOrUndef = new core.Command<string>(editor).value;

command = new core.Command(editor);

command.destroy();

command.execute();

command.refresh();

// core/commandcollection =====================================================

commandCollection = new core.CommandCollection();

const collectionsPairs = Array.from(commandCollection);
const collectionsPair = collectionsPairs[0];
str = collectionsPair[0];
command = collectionsPair[1];

commandCollection.add("foo", new SomeCommand(editor));

command = commandCollection.commands().next().value;
commands = Array.from(commandCollection.commands());

commandCollection.destroy();

commandCollection.execute("foo");
commandCollection.execute("bar", 1, "param");

command = commandCollection.get("foo");

str = commandCollection.names().next().value;
strs = Array.from(commandCollection.names());

// core/editingkeystrokehandler ===============================================

keystrokes = new core.EditingKeystrokeHandler(editor);

editor = keystrokes.editor;

keystrokes.press({keyCode: 123});

keystrokes.set("Ctrl+A", "foo");
keystrokes.set(["shift", "33"], "foo");
keystrokes.set(["ctrl", "A"], "foo", {priority: 10});
keystrokes.set(["ctrl", "A"], "foo", {priority: "high"});
keystrokes.set(["ctrl", "A"], () => console.log("key"));
keystrokes.set(["ctrl", "A"], (keyEvtData, cancel) => {
    console.log(keyEvtData.keyCode);
    cancel();
});

// core/pendingactions ========================================================

pendingActions = new core.PendingActions(editor);

str = core.PendingActions.pluginName;

const firstAction = pendingActions.first;

bool = pendingActions.hasAny;

strs = Array.from(pendingActions, action => action.message);

const action1 = pendingActions.add("Action 1");

pendingActions.remove(action1);

firstAction!.fire("I'm an Observable with a message");
str = firstAction!.message;
str = action1.message;

// core/plugin ================================================================

class MyPluginMini extends core.Plugin {
    constructor(editor: core.editor.Editor) {
        super(editor);
    }
}

class MyPluginAll extends core.Plugin<string> {
    constructor(editor: core.editor.Editor) {
        super(editor);
    }

    static get pluginName() {
        return "All";
    }

    static get requires() {
        return [MyPlugin, MyPluginMini];
    }

    afterInit() {return Math.random() ? null : Promise.resolve("resolved"); }
    destroy() {return Math.random() ? null : Promise.resolve("destroy"); }
    init() {return Math.random() ? null : Promise.resolve("init"); }
}

plugin = new MyPlugin(editor);
plugin = new MyPluginMini(editor);
pluginStr = new MyPluginAll(editor);

const Plugin: MyPlugin = new MyPlugin(editor);
const pluginMini: MyPluginMini = new MyPluginMini(editor);
const pluginAll: MyPluginAll = new MyPluginAll(editor);

editor = myPlugin.editor;

str = MyPluginAll.pluginName;
strOrUndef = MyPluginMini.pluginName; // Todo: should be undefined.

plugin = new MyPluginAll.requires[0](editor);

const fs: Function[] = MyPluginAll.requires;
const fsOrUndef = MyPluginMini.requires; // Todo: should be undefined.

// $ExpectError
pluginMini.afterInit();
pluginAll.afterInit();

// $ExpectError
pluginMini.destroy();
pluginAll.destroy();

// $ExpectError
pluginMini.init();
pluginAll.init();

// core/plugincollection ======================================================

pluginCollectionStr = new core.PluginCollection(editor, [MyPluginAll]);
// $ExpectError
pluginCollectionStr = new core.PluginCollection(editor, [MyPlugin]);

const aColl = new core.PluginCollection<MyPluginAll | MyPluginMini>(editor, [MyPluginAll, MyPluginMini]);

const myColl = new core.PluginCollection(editor, [MyPlugin]);

const myCollArray = Array.from(myColl);
myPlugins = myCollArray.map(entry => entry[1]);
myPlugin = new (myCollArray[0][0])(editor);

myColl.destroy()
    .then(destroyedPlugins => {
        num = destroyedPlugins.length;
        const plugin = destroyedPlugins[0];
        editor = plugin.editor;
        plugin.init!();
        plugin.destroy();
        str = plugin.myMethod();
    });

myPluginMaybe = myColl.get("A");
myPluginMaybe = myColl.get(MyPlugin);

myColl.load([MyPlugin, "A"])
    .then((loadedPlugins) => {
        const plugin = loadedPlugins[0];
        editor = plugin.editor;
        str = plugin.myMethod();
    });

myColl.load([MyPlugin, "A"], [MyPlugin, "A"]);
