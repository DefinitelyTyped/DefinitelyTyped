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

let comm: Command;

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

const editor = new MyEditor(document.createElement('div'));
const editorState: 'initializing' | 'ready' | 'destroyed' = editor.state;
// $ExpectError
editor.state = editorState;
editor.focus();
editor.destroy().then(() => {});
editor.initPlugins().then(plugins => plugins.map(plugin => plugin.pluginName));

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
    get pluginName() {
        return 'MyPlugin';
    }

    myMethod() {
        return null;
    }
}

const myPlugin = new MyPlugin(editor);
const promise = myPlugin.init?.();
promise != null && promise.then(() => {});
myPlugin.myMethod();
myPlugin.isEnabled = true;
myPlugin.destroy();

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
    execute() {}
}
const command = new Command(new MyEmptyEditor());
command.execute();
command.execute('foo', 'bar', true, false, 50033);
command.execute(4545454, 'refresh', [], []);
command.execute({}, { foo: 5 });

const ed: Editor = command.editor;

const bool: boolean = command.isEnabled;

comm = new Command(editor);

command.destroy();

command.execute();

command.refresh();

command.value = 'foo';
delete command.value;

command.isEnabled = false;
command.isEnabled = true;
// $ExpectError
delete command.isEnabled;

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
const CPlugin = new ContextPlugin(context) && new ContextPlugin(editor);
const afterInitPromise = CPlugin.afterInit?.();
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
const MC = new MultiCommand(editor);
MC.registerChildCommand(comm);

/* EditorUI */
new EditorUI(editor).componentFactory.editor === editor;
new EditorUI(editor).componentFactory.add('', locale => new View(locale));
