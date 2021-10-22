import { Editor } from "@ckeditor/ckeditor5-core";
import Autoformat from "./autoformat";

export default function blockAutoformatEditing(
    editor: Editor,
    plugin: Autoformat,
    pattern: RegExp,
    callbackOrCommand: string | ((arg: ReturnType<RegExp["exec"]>) => void),
): void;
