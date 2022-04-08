import {
    Plugin,
    Editor,
    Command,
    Context,
    ContextPlugin,
    DataApiMixin,
    attachToForm,
    MultiCommand,
} from "@ckeditor/ckeditor5-core";

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

const PluginArray: Array<typeof Plugin> = MyEditor.builtinPlugins;
PluginArray.forEach(plugin => plugin.pluginName);

const editor = new MyEditor(document.createElement("div"));
const editorState: "initializing" | "ready" | "destroyed" = editor.state;
// $ExpectError
editor.state = null;
editor.focus();
editor.destroy().then(() => {});
editor.initPlugins().then(plugins => plugins.map(plugin => plugin.pluginName));

MyEditor.defaultConfig = {
    foo: {
        a: 1,
        b: 2,
    },
};
// $ExpectError
MyEditor.defaultConfig = "foo";

/**
 * Plugin
 */

class MyPlugin extends Plugin {
    myMethod() {
        return null;
    }
}

const myPlugin = new MyPlugin(editor);
const promise = myPlugin.init?.();
promise != null && promise.then(() => {});
myPlugin.myMethod();

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

const ed: Editor = command.editor;

const bool: Boolean = command.isEnabled;

comm = new Command(editor);

command.destroy();

command.execute();

command.refresh();

/**
 * Context
 */

const context = new Context();
const contextWithConfig = new Context({ foo: "foo" });
context.destroy().then(() => {});
contextWithConfig.initPlugins().then(plugins => plugins.map(plugin => plugin.pluginName));

/**
 * ContextPlugin
 */
const CPlugin = new ContextPlugin(context) && new ContextPlugin(editor);
CPlugin.afterInit?.()?.then(() => {});

class MyCPlugin extends ContextPlugin {
    builtinPlugins: [MyPlugin];
}

/**
 * DataApiMixin
 */

DataApiMixin.setData("foo");
// $ExpectError
DataApiMixin.getData("foo");
DataApiMixin.getData({ rootName: "foo" });
DataApiMixin.getData({ rootName: "foo", trim: "none" });

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
