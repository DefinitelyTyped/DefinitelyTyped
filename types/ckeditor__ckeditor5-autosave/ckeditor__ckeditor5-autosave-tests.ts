import Autosave from "@ckeditor/ckeditor5-autosave";
import { AutosaveAdapter, AutosaveConfig } from "@ckeditor/ckeditor5-autosave/src/autosave";
import { Editor } from "@ckeditor/ckeditor5-core";

class MyEditor extends Editor {}
const plugin = new Autosave.Autosave(new MyEditor());
plugin.once("click", () => {});
const isContext: boolean = Autosave.Autosave.isContextPlugin;
const state: "synchronized" | "waiting" | "saving" = plugin.state;
plugin.adapter.save(new MyEditor());

const adapter: AutosaveAdapter = {
    save(editor: Editor) {
        return Promise.resolve(editor);
    },
};

let config: AutosaveConfig = {
    save(editor: Editor) {
        return Promise.reject(editor);
    },
};
config = {
    waitingTime: 0,
};
config = {
    save(editor: Editor) {
        return Promise.reject(editor);
    },
    waitingTime: 0,
};
