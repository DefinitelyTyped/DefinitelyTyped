import { Model, Range } from "@ckeditor/ckeditor5-engine";

export default function getLastTextLine(range: Range, model: Model): LastTextLineData;

export interface LastTextLineData {
    range: Range;
    text: string;
}
