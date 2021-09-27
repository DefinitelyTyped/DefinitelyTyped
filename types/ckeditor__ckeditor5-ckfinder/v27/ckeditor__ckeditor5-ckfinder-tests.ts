import CKFinder from "@ckeditor/ckeditor5-ckfinder";
import { Editor, Plugin } from "@ckeditor/ckeditor5-core";
import PluginCollection from "@ckeditor/ckeditor5-core/src/plugincollection";
import CKFinderCommand from "@ckeditor/ckeditor5-ckfinder/src/ckfindercommand";

if (!(CKFinder instanceof Plugin)) {
    throw new Error("CKFinder must be a Plugin instance");
}

class BaseEditor extends Editor {}

const plugincollection = new PluginCollection(new BaseEditor(), [CKFinder.CKFinder]);

class MyEditor extends Editor {
    plugins = plugincollection;
}

const editor = new MyEditor();

const ckfinderui = new CKFinder.CKFinderUI(new MyEditor());
ckfinderui.init();

const ckfinderediting = new CKFinder.CKFinderEditing(new MyEditor());
ckfinderediting.init();

// $ExpectType CKFinder
editor.plugins.get('CKFinder');

// $ExpectType CKFinderEditing
editor.plugins.get('CKFinderEditing');

// $ExpectType CKFinderUI
editor.plugins.get('CKFinderUI');

new CKFinderCommand(new BaseEditor()).execute();

// $ExpectType CKFinderCommand | undefined
editor.commands.get('CKFinderCommand');
