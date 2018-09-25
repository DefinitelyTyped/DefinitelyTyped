/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { DavContextBase } from "../../DavContextBase";
import { IHierarchyItem } from "../../IHierarchyItem";
import { MultistatusResponseWriter } from "../Util/MultistatusResponseWriter";
import { BaseDavHandler } from "./BaseDAVHandler";
export declare class PropfindDavHandler extends BaseDavHandler {
    private static emptyPropList;
    private static WriteElement;
    private static WritePropertyNames;
    appliesTo(item: IHierarchyItem): boolean;
    processRequest(context: DavContextBase, item: IHierarchyItem): void;
    GeneratePropfindResponse(msWriter: MultistatusResponseWriter, item: IHierarchyItem, context: DavContextBase): Promise<void>;
    private isIPaging;
    private WriteElementRecursive;
}
