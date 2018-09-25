import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
import { IItemCollection } from "../IItemCollection";
import { PropertyName } from "../PropertyName";
import { OrderProperty } from "./OrderProperty";
import { PageResult } from "./PageResult";
/**
 * Represents folder item that supports paging and sorting.
 * @remarks  When this interface is added on a folder item the server reports paging support in responses to OPTIONS request, adding a 'paging' token to a DAV header.@remarks
 */
export interface IPaging extends IItemCollection {
    /**
     * Gets specified number of children of this folder starting from a specified item in a specified order.
     * @param propNames List of properties requested by the client. Can be used as a hint about properties requested by the client to optimize requests to the back-end storage.
     * @param offset The number of items to skip before returning the remaining items. Start listing from from next item.
     * @param nResults The number of items to return.
     * @param orderProps List of order properties requested by the client.
     * @returns  @see PageResult .
     * <include file='Comments\Generated.xml' path='doc/example[@name="IPagingAsync.GetPageAsync"]/*' />
     */
    GetPage(propNames: IList<PropertyName>, offset: number, nResults: number, orderProps: IList<OrderProperty>): PageResult;
}
