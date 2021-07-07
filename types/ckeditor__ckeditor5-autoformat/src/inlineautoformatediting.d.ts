import { Editor } from "@ckeditor/ckeditor5-core";
import { DowncastWriter } from "@ckeditor/ckeditor5-engine";
import Autoformat from "./autoformat";

export default function inlineAutoformatEditing(
    editor: Editor,
    plugin: Autoformat,
    testRegexpOrCallback:
        | RegExp
        | ((
              text: string,
          ) => {
              remove: number[][];
              format: number[][];
          }),
    formatCallback: (writer: DowncastWriter, rangestoformat: unknown[]) => void | boolean,
): void;
