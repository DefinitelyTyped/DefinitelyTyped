/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { IHierarchyItem } from "../IHierarchyItem";
/**
 * Provides point of extension to OPTIONS request.
 * @remarks If you need to implement your own extension to WebDAV and add token to DAV header in OPTIONS response,
 * implement this interface and register it with {@link DavEngine.RegisterOptionsHandler}  method
 * passing token as first argument to it.
 * When building DAV header engine will call all registered options handlers to determine if this particular
 * options is available for the item.
 */
export interface IOptionsHandler {
    /**
     * The method is called to determine if the option is available for the item and shall be
     * enlisted in DAV header for OPTIONS response.
     * @param item Item for which request is made.
     * @returns true if option token shall be enlisted.
     */
    AppliesTo(item: IHierarchyItem): boolean;
}
