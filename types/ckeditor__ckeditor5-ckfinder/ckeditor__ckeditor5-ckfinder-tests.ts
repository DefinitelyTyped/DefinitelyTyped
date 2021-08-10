import { CKFinder, CKFinderEditing, CKFinderUI } from "@ckeditor/ckeditor5-ckfinder";
import { Editor, Plugin } from "@ckeditor/ckeditor5-core";
import PluginCollection from "@ckeditor/ckeditor5-core/src/plugincollection";
import CKFinderCommand from "@ckeditor/ckeditor5-ckfinder/src/ckfindercommand";

if (!(CKFinder instanceof Plugin)) {
    throw new Error("CKFinder must be a Plugin instance");
}

class BaseEditor extends Editor {}

const plugincollection = new PluginCollection(new BaseEditor(), [CKFinder]);

class MyEditor extends Editor {
    plugins = plugincollection;
}

const ckfinderui = new CKFinderUI(new MyEditor());
ckfinderui.init();

const ckfinderediting = new CKFinderEditing(new MyEditor());
ckfinderediting.init();
