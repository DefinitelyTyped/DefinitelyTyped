import {
    attachToForm,
    Command,
    Context,
    ContextPlugin,
    DataApiMixin,
    Editor,
    EditorUI,
    MultiCommand,
    PendingActions,
    Plugin,
} from '@ckeditor/ckeditor5-core';
import CommandCollection from '@ckeditor/ckeditor5-core/src/commandcollection';
import { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import ParagraphCommand from '@ckeditor/ckeditor5-paragraph/src/paragraphcommand';
import View from '@ckeditor/ckeditor5-ui/src/view';
import { Emitter } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

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

class MyUIEditor extends Editor implements EditorWithUI {
    source: string | HTMLElement;
    constructor(source: string | HTMLElement) {
        super();
        this.source = source;
    }
    ui: EditorUI;
    static create(source: string | HTMLElement): Promise<MyEditor> {
        return new Promise(resolve => {
            const editor = new MyEditor(source);
            resolve(editor);
        });
    }
}

const PluginArray: Array<typeof Plugin | typeof ContextPlugin | string> = MyEditor.builtinPlugins;
PluginArray.forEach(plugin => typeof plugin !== 'string' && plugin.pluginName);

const editor = new MyEditor(document.createElement('div'));
const editorState: 'initializing' | 'ready' | 'destroyed' = editor.state;
// @ts-expect-error
editor.state = editorState;
editor.focus();
editor.destroy().then(() => {});
editor.initPlugins().then(plugins => plugins.map(plugin => plugin.pluginName));

MyEditor.defaultConfig = {
    placeholder: 'foo',
};
// @ts-expect-error
MyEditor.defaultConfig = 4;
// @ts-expect-error
MyEditor.defaultConfig = { foo: 5 };

/**
 * Plugin
 */

class MyPlugin extends Plugin {
    get pluginName() {
        return 'MyPlugin';
    }

    myMethod() {
        return null;
    }
}

const myPlugin = new MyPlugin(editor);
myPlugin.on('foo', (ev, ...args) => {
    // $ExpectType EventInfo<MyPlugin, "foo">
    ev;
    // $ExpectType any[]
    args;
});
const promise = myPlugin.init?.();
promise != null && promise.then(() => {});
myPlugin.myMethod();
myPlugin.isEnabled = true;
myPlugin.destroy();
// $ExpectType Editor | EditorWithUI
myPlugin.editor;
const myUIEditor = new MyPlugin(new MyUIEditor('')).editor;
if ('ui' in myUIEditor) {
    myUIEditor.ui; // $ExpectType EditorUI
}

/**
 * PluginCollection
 */
editor.plugins.get(MyPlugin).myMethod();
(editor.plugins.get('MyPlugin') as MyPlugin).myMethod();
// $ExpectType boolean
editor.plugins.has('foo');
// $ExpectType boolean
editor.plugins.has(MyPlugin);
// @ts-expect-error
editor.plugins.has(class Foo {});

// @ts-expect-error
editor.plugins.get(class Foo {});
editor.plugins.get(class Foo extends Plugin {});

class MyEmptyEditor extends Editor {
    static builtinPlugins = [MyPlugin];
}

/**
 * Command
 */

class MyCommand extends Command {
    get value(): boolean {
        return this.value;
    }
    protected set value(val: boolean) {
        this.value = val;
    }
    refresh() {
        this.value = false;
        this.isEnabled = true;
    }
}

const command = new MyCommand(editor);

command.on('execute', (ev, ...args) => {
    // $ExpectType EventInfo<MyCommand, "execute">
    ev;
    // $ExpectType any[]
    args;
});

// $ExpectType boolean
command.value;
// @ts-expect-error
command.value = false;
// @ts-expect-error
delete command.value;
// @ts-expect-error
delete command.isEnabled;

// $ExpectType boolean
command.affectsData;

command.execute();
command.execute('foo', 'bar', true, false, 50033);
command.execute(4545454, 'refresh', [], []);
command.execute({}, { foo: 5 });

// $ExpectType Editor
command.editor;

// $ExpectType boolean
command.isEnabled;

// @ts-expect-error
command.isEnabled = false;

command.destroy();

command.refresh();

/**
 * Context
 */

const context = new Context();
const contextWithConfig = new Context({ foo: 'foo' });
context.destroy().then(() => {});
contextWithConfig.initPlugins().then(plugins => plugins.map(plugin => plugin.pluginName));

/**
 * ContextPlugin
 */
class CPlugin extends ContextPlugin {}
// @ts-expect-error
class CPlugin2 extends ContextPlugin {
    static requires: [MyPlugin];
}
// $ExpectType true
CPlugin.isContextPlugin;
const afterInitPromise = new CPlugin(context).afterInit?.();
if (afterInitPromise != null) {
    afterInitPromise.then(() => {});
}

class MyCPlugin extends ContextPlugin {
    get pluginName() {
        return 'MyCPlugin';
    }

    builtinPlugins: [MyPlugin];
    myCMethod() {
        return null;
    }
}

editor.plugins.get(MyCPlugin).myCMethod();
(editor.plugins.get('MyCPlugin') as MyCPlugin).myCMethod();

context.plugins.get(MyCPlugin).myCMethod();
(context.plugins.get('MyCPlugin') as MyCPlugin).myCMethod();

editor.plugins.get(MyCPlugin).on('foo', (ev, ...args) => {
    // $ExpectType EventInfo<MyCPlugin, "foo">
    ev;
    // $ExpectType any[]
    args;
});

/**
 * DataApiMixin
 */

DataApiMixin.setData('foo');
// @ts-expect-error
DataApiMixin.getData('foo');
DataApiMixin.getData({ rootName: 'foo' });
DataApiMixin.getData({ rootName: 'foo', trim: 'none' });

/**
 * attachToForm
 */
// @ts-expect-error
attachToForm();
attachToForm(editor);

/**
 * MultiCommand
 */
const MC = new MultiCommand(editor);
MC.registerChildCommand(command);

/* EditorUI */
new EditorUI(editor).componentFactory.editor === editor;
new EditorUI(editor).componentFactory.add('', locale => new View(locale));
new EditorUI(editor).set('foo', true);
// $ExpectType { top: number; right: number; bottom: number; left: number; }
new EditorUI(editor).viewportOffset;
new EditorUI(editor).on('foo', (ev, ...args) => {
    // $ExpectType EventInfo<EditorUI, "foo">
    ev;
    // $ExpectType any[]
    args;
});

new EditorUI(editor).set('foo');

/** Pending Actions */
// $ExpectType boolean
new PendingActions(context).hasAny;
// @ts-expect-error
new PendingActions(context).hasAny = true;
new PendingActions(context).remove(new PendingActions(context).add(''));

// $ExpectType PendingActions
new MyEditor('').plugins.get('PendingActions');
// $ExpectType PendingActions
new MyEditor('').plugins.get(PendingActions);

/*
 * CommandCollection
 */

const cc = new CommandCollection();
cc.add('paragraph', new ParagraphCommand(editor));
// $ExpectType ParagraphCommand | undefined
cc.get('paragraph');
// $ExpectType void
cc.execute('paragraph');
cc.execute('paragraph', { selection: new Selection() });
// @ts-expect-error
cc.execute('paragraph', { selection: true });
// @ts-expect-error
cc.execute('paragraph', null);
// $ExpectType string[]
Array.from(cc.names());
// $ExpectType Command[]
Array.from(cc.commands());
// $ExpectType [string, Command][]
Array.from(cc);
