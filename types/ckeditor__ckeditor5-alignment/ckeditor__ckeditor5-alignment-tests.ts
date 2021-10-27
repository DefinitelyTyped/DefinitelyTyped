import { Alignment, AlignmentEditing, AlignmentUI } from "@ckeditor/ckeditor5-alignment";
import AlignmentCommand from "@ckeditor/ckeditor5-alignment/src/alignmentcommand";
import * as utils from "@ckeditor/ckeditor5-alignment/src/utils";
import { Editor } from "@ckeditor/ckeditor5-core";
import { Locale } from "@ckeditor/ckeditor5-utils";

class MyEditor extends Editor {}
const editor = new MyEditor();

new Alignment(new MyEditor());
Alignment.requires.map(Plugin => {
    new Plugin(new MyEditor());
    if (Plugin.pluginName === "AlignmentUI" || Plugin.pluginName === "AlignmentEditing") {
    }
});
Alignment.requires.length === 2;

// $ExpectType boolean
utils.isDefault("left", new Locale());
// $ExpectType boolean
utils.isSupported("left");
utils.supportedOptions.length === 4;
const normalizedOptions = utils.normalizeAlignmentOptions(["foo"]);
if (typeof normalizedOptions !== "string") {
    normalizedOptions[0].name.startsWith("");
}

// $ExpectError
utils.normalizeAlignmentOptions([{ name: "foo", className: "bar" }]);
utils.normalizeAlignmentOptions([{ name: "left", className: "bar" }]);

const command = new AlignmentCommand(new MyEditor());
// $ExpectError
command.execute("foo");
command.execute();

// $ExpectType Alignment
editor.plugins.get('Alignment');

// $ExpectType AlignmentEditing
editor.plugins.get('AlignmentEditing');

// $ExpectType AlignmentUI
editor.plugins.get('AlignmentUI');

// $ExpectType AlignmentCommand | undefined
editor.commands.get('AlignmentCommand');
