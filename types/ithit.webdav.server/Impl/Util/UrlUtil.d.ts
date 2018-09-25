import { DavContextBase } from "../../DavContextBase";
import { DavRequest } from "../../Extensibility/DavRequest";
import { IHierarchyItem } from "../../IHierarchyItem";
import { IItemCollection } from "../../IItemCollection";
export declare class UrlUtil {
    static GetParentItemByUrl(context: DavContextBase, url: string): Promise<IItemCollection>;
    static GetItemNameByUrl(context: DavContextBase, url: string): string;
    static GetPathByUrl(context: DavContextBase, url: string): string;
    static GetItemByUrl(context: DavContextBase, url: string): Promise<IHierarchyItem>;
    static CreateUrl(request: DavRequest, href: string, fullUri: boolean): string;
    static WriteHref(w: any, request: DavRequest, itemPath: string, fullUri: boolean): void;
    static removeQueryAndLastSlash(url: string): string;
    static GetRequestHost(request: DavRequest): string;
}
