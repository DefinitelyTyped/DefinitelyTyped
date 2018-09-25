/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { DavContextBase } from "../../DavContextBase";
import { DavStatus } from "../../DavStatus";
import { IHierarchyItem } from "../../IHierarchyItem";
export declare class HeaderUtil {
    static WriteEtag(context: DavContextBase, item: IHierarchyItem): void;
    static WriteLastModified(context: DavContextBase, item: IHierarchyItem): void;
    static trimChar(str: string, charToRemove: string): string;
    static IfNoneMatches(item: IHierarchyItem, ifNotMatch: string): boolean;
    static IfMatches(item: IHierarchyItem, ifMatch: string): boolean;
    static IfHeader(item: IHierarchyItem, ifMatch: string): boolean;
    static ProcessIfHeaders(context: DavContextBase, item: IHierarchyItem, ifNoneMatchStatus: DavStatus): boolean;
}
