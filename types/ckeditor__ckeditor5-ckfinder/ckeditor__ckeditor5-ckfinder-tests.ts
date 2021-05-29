import Finder from "@ckeditor/ckeditor5-ckfinder";
import { Editor, Plugin } from "@ckeditor/ckeditor5-core";
import PluginCollection from "@ckeditor/ckeditor5-core/src/plugincollection";

if (!(Finder.CKFinder instanceof Plugin)) {
    throw new Error("CKFinder must be a Plugin instance");
}

class BaseEditor extends Editor {}

const plugincollection = new PluginCollection(new BaseEditor(), [Finder.CKFinder]);

class MyEditor extends Editor {
    plugins = plugincollection;
}

const ckfinderui = new Finder.CKFinderUI(new MyEditor());
ckfinderui.init();

const ckfinderediting = new Finder.CKFinderEditing(new MyEditor());
ckfinderediting.init();
