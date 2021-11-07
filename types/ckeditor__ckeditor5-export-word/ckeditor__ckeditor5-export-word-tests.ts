import { Editor } from "@ckeditor/ckeditor5-core";
import { ExportWord } from "@ckeditor/ckeditor5-export-word";
import { ExportWordConfig } from "@ckeditor/ckeditor5-export-word/src/exportword";
import ExportWordCommand from "@ckeditor/ckeditor5-export-word/src/exportwordcommand";

class MyEditor extends Editor {}

// $ExpectType false
ExportWord.isContextPlugin;
// $ExpectType ExportWord
new ExportWord(new MyEditor());

let config: ExportWordConfig = {};
config = {
    converterOptions: {},
};
config = {
    converterOptions: {
        margin_top: 0,
        margin_bottom: "15cm",
        margin_right: "1cm",
        margin_left: 0,
        format: "A6",
        auto_pagination: true,
    },
};
config = {
    converterUrl: "",
    fileName: "",
    stylesheets: [""],
    tokenUrl: false,
};

config = {
    tokenUrl() {
        return Promise.resolve("");
    },
};
config = {
    tokenUrl: "",
};

new ExportWordCommand(new MyEditor()).execute();

// $ExpectType ExportWord
new MyEditor().plugins.get('ExportWord');

// $ExpectType ExportWordCommand | undefined
new MyEditor().commands.get('ExportWordCommand');
