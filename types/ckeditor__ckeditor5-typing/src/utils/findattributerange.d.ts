import { Model, Range } from "@ckeditor/ckeditor5-engine";
import Position from "@ckeditor/ckeditor5-engine/src/model/position";

export default function findAttributeRange(
    position: Position,
    attributeName: string,
    value: string,
    model: Model,
): Range;
