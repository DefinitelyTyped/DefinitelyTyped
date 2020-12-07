import { Item, ItemUpdateResult } from "@pnp/sp";
import { ITermData } from "./terms";
export declare function setItemMetaDataField(item: Item, fieldName: string, term: ITermData): Promise<ItemUpdateResult>;
export declare function setItemMetaDataMultiField(item: Item, fieldName: string, ...terms: ITermData[]): Promise<ItemUpdateResult>;
