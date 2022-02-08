import DocumentFragment from "../documentfragment";
import { Item } from "../item";
import Model from "../model";
import Range from "../range";
import { Selectable } from "../selection";

export default function insertContent(
    model: Model,
    content: DocumentFragment | Item,
    selectable?: Selectable,
    placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
): Range;
