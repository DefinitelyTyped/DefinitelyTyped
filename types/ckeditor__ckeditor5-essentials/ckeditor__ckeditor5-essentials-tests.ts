import { Editor, Plugin } from "@ckeditor/ckeditor5-core";
import { Essentials } from "@ckeditor/ckeditor5-essentials";

class MyEditor extends Editor {}

const bool: boolean = Essentials.isContextPlugin;
const name: "Essentials" = Essentials.pluginName;
let constructor: typeof Plugin = Essentials;
constructor = Essentials.requires[5];
const plugin: Plugin = new Essentials(new MyEditor());
