import {
    Plugin,
    Editor,
    Command,
    Context,
    ContextPlugin,
    DataApiMixin,
    attachToForm,
    MultiCommand,
    EditorUI,
} from '@ckeditor/ckeditor5-core';
import View from '@ckeditor/ckeditor5-ui/src/view';
import PluginCollection from '@ckeditor/ckeditor5-core/src/plugincollection';
import CommandCollection from '@ckeditor/ckeditor5-core/src/commandcollection';
import PendingActions from '@ckeditor/ckeditor5-core/src/pendingactions';

/**
 * Editor
 */
class MyEditor extends Editor {
    source: string | HTMLElement;
    constructor(source: string | HTMLElement) {
        super();
        this.source = source;
    }
    static create(source: string | HTMLElement): Promise<MyEditor> {
        return new Promise(resolve => {
            const editor = new MyEditor(source);
            resolve(editor);
        });
    }
}

const PluginArray: Array<typeof Plugin | typeof ContextPlugin | string> = MyEditor.builtinPlugins;
PluginArray.forEach(plugin => typeof plugin !== 'string' && plugin.pluginName);

let editor: Editor = new MyEditor(document.createElement('div'));
const editorState: 'initializing' | 'ready' | 'destroyed' = editor.state;
// $ExpectError
editor.state = editorState;
editor.focus();
editor.destroy().then(() => {});
editor.initPlugins().then(loaded => {
    loaded.forEach(Plugin => {
        class Foo extends Plugin {}
        new Foo(editor);
    });
});

MyEditor.defaultConfig = {
    placeholder: 'foo',
};
// $ExpectError
MyEditor.defaultConfig = 4;
// $ExpectError
MyEditor.defaultConfig = { foo: 5 };

/**
 * Plugin
 */

class MyPlugin extends Plugin {
    readonly pluginName: 'MyPlugin';

    myMethod() {
        return null;
    }
}

const myPlugin = new MyPlugin(editor);
const promise = myPlugin.init?.();
promise != null && promise.then(() => {});
myPlugin.myMethod();
myPlugin.isEnabled = true;

/**
 * PluginCollection
 */
editor.plugins.get(MyPlugin).myMethod();
(editor.plugins.get('MyPlugin') as MyPlugin).myMethod();
// $ExpectType boolean
editor.plugins.has('foo');
// $ExpectType boolean
editor.plugins.has(MyPlugin);
// $ExpectError
editor.plugins.has(class Foo {});

// $ExpectError
editor.plugins.get(class Foo {});
editor.plugins.get(class Foo extends Plugin {});

class MyEmptyEditor extends Editor {
    static builtinPlugins = [MyPlugin];
}

/**
 * Command
 */
class SomeCommand extends Command {
    execute(
        a?: string | number | Record<string, unknown>,
        b?: string | Record<string, unknown>,
        c?: boolean | unknown[],
        d?: boolean | unknown[],
        e?: number,
    ): void {
        console.log(a, b, c, d, e);
    }
}
const command = new SomeCommand(editor);
command.execute();
command.execute('foo', 'bar', true, false, 50033);
command.execute(4545454, 'refresh', [], []);
command.execute({}, { foo: 5 });

editor = command.editor;

const bool: boolean = command.isEnabled;

command.destroy();

command.execute();

command.refresh();

command.value = 'foo';
delete command.value;

command.isEnabled = false;
command.isEnabled = true;
command.on('foo', () => {});
command.on('execute', () => {}, { priority: 'highest' });
command.forceDisabled('foo');
command.clearForceDisabled('foo');
// $ExpectError
delete command.isEnabled;

/**
 * Context
 */

const context = new Context();
const contextWithConfig = new Context({ foo: 'foo' });
context.destroy().then(() => {});
contextWithConfig.initPlugins().then(loaded => {
    loaded.forEach(Plugin => {
        class Foo extends Plugin {}
        new Foo(editor);
    });
});

/**
 * ContextPlugin
 */
class MyCPlugin extends ContextPlugin {
    readonly pluginName: 'MyCPlugin';
    builtinPlugins: [MyPlugin];
    myCMethod() {
        return null;
    }
}

const cPlugin = new MyCPlugin(context) && new MyCPlugin(editor);
const afterInitPromise = cPlugin.afterInit?.();
if (afterInitPromise != null) {
    afterInitPromise.then(() => {});
}

editor.plugins.get(MyCPlugin).myCMethod();
(editor.plugins.get('MyCPlugin') as MyCPlugin).myCMethod();

context.plugins.get(MyCPlugin).myCMethod();
(context.plugins.get('MyCPlugin') as MyCPlugin).myCMethod();

const pContext = cPlugin.context;
if (pContext instanceof Editor) {
    pContext.initPlugins();
}

cPlugin.destroy();

/**
 * DataApiMixin
 */

DataApiMixin.setData('foo');
// $ExpectError
DataApiMixin.getData('foo');
DataApiMixin.getData({ rootName: 'foo' });
DataApiMixin.getData({ rootName: 'foo', trim: 'none' });

/**
 * attachToForm
 */
// $ExpectError
attachToForm();
attachToForm(editor);

/**
 * MultiCommand
 */
const multiCommand = new MultiCommand(editor);
multiCommand.registerChildCommand(command);
multiCommand.destroy();
// $ExpectType boolean
multiCommand.isEnabled;
multiCommand.isEnabled = bool;
const mcresult = multiCommand.execute();
if (Array.isArray(mcresult)) {
    mcresult.forEach(v => v);
}

/* EditorUI */
new EditorUI(editor).componentFactory.editor === editor;
new EditorUI(editor).componentFactory.add('', locale => new View(locale));

/* PluginCollection */
const plugins = new PluginCollection(
    editor,
    [MyPlugin, MyCPlugin],
    [
        [MyPlugin, new MyPlugin(editor)],
        [MyCPlugin, new MyCPlugin(editor)],
    ],
);
new PluginCollection(editor, [], [[MyPlugin, new MyPlugin(editor)]]);
new PluginCollection(editor, []);
plugins.init([]).then(loaded =>
    loaded.forEach(Plugin => {
        if (Plugin instanceof MyPlugin) {
            Plugin.myMethod() === null;
        }
    }),
);
plugins.init([MyPlugin, MyCPlugin, 'foo'], [MyCPlugin]);
plugins.init([MyPlugin, MyCPlugin, 'foo'], [MyCPlugin], [myPlugin]);
const cplugin = plugins.get(MyCPlugin);
cplugin.myCMethod() === null;
const plugin = plugins.get(MyPlugin);
plugin.myMethod() === null;
const unknownPlugin = plugins.get('');
if (unknownPlugin instanceof MyPlugin) {
    unknownPlugin.myMethod() === null;
}

// $ExpectType boolean
plugins.has('foo');
// $ExpectType boolean
plugins.has(MyPlugin);
// $ExpectType boolean
plugins.has(MyCPlugin);

// $ExpectError
plugins.destroy().then(value => value === '');
plugins.destroy().then(value => value === undefined);

/*
 * CommandCollection
 */
class TheCommand extends Command {
    execute() {}
}
const collection = new CommandCollection();
const theCommand = new TheCommand(editor);
collection.add('foo', theCommand);
// $ExpectType Command | undefined
collection.get('foo');
const result = collection.execute('foo', 1, 2);
if (Array.isArray(result)) {
    result.forEach(v => v);
}
collection.execute('foo');
// $ExpectType string[]
Array.from(collection.names());
// $ExpectType Command[]
Array.from(collection.commands());

/*
 * PendingActions
 */
PendingActions.pluginName === 'PendingActions';
PendingActions.isContextPlugin === true;
const pendingActions = new PendingActions(editor);
// $ExpectType boolean
pendingActions.hasAny;
pendingActions.hasAny = true;
const action = pendingActions.add('action');
action.message === 'action';
action.message = 'foo';
// $ExpectError
pendingActions.add({});
pendingActions.remove(action);
// $ExpectType (Observable & { message: string; }) | null
pendingActions.first;
// $ExpectType (Observable & { message: string; })[]
Array.from(pendingActions);
Array.from(pendingActions)[0].message === '';
