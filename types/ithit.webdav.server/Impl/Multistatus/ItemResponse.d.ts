/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
import { DavStatus } from "../../DavStatus";
import { ResponseBase } from "./ResponseBase";
/**
 * Status for an items to be included into multistatus response.
 */
export declare class ItemResponse extends ResponseBase {
    private readonly code;
    private readonly hrefs;
    /**
     * Initializes a new instance.
     * @param itemPath Path of the item in the hierarchy tree.
     * @param status WebDAV response for the item.
     * @param href href to be included in the response.
     * @param responseDescription description of the response.
     */
    constructor(itemPath: string, code: DavStatus, href: string, responseDescription: string);
    /**
     * Hrefs included in the response.
     * @return path of the item.
     */
    readonly Hrefs: IList<string>;
    /**
     * Gets the response for the item.
     * @return response for the item
     */
    readonly Code: DavStatus;
}
