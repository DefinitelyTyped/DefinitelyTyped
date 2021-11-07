import DocumentSelection from "../model/documentselection";
import { Item } from "../model/item";
import Range from "../model/range";
import Selection from "../model/selection";

export default class ModelConsumable {
    add(item: Item | Selection | DocumentSelection | Range, type: string): void;
    consume(item: Item | Selection | DocumentSelection | Range, type: string): boolean;
    revert(item: Item | Selection | DocumentSelection | Range, type: string): null | boolean;
    test(item: Item | Selection | DocumentSelection | Range, type: string): null | boolean;
}
