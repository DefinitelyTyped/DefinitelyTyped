import { DavContextBase } from "../DavContextBase";
import { IHierarchyItem } from "../IHierarchyItem";
/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
/**
 * Provides point of extension to PROPFIND, PROPPATCH requests.
 * @remarks If you need to implement your own live property,
 * implement this interface and register it with {@link DavEngine.RegisterPropertyHandler}  method.
 * Engine will call this handler when it needs to read/write the property.
 */
export interface IPropertyHandler {
    /**
     * Gets a value indicating whether the property is readonly and cannot be updated.
     */
    IsReadonly: boolean;
    /**
     * Gets a value indicating whether the property shall be included in 'allprop' response.
     */
    IncludeInAllProp: boolean;
    /**
     * Writes property value to xml writer.
     * @param writer {@link XmlWriter} to which to write property value.
     * @param item Item for which to retrieve property.
     * @param context Context.
     * @remarks Property writer shall retrieve and validate all values first and only then write anything to writer.
     * Otherwise exception may be thrown while retrieving properties and output XML will be broken.
     */
    Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
    /**
     * Updates value of property.
     * @param context Context.
     * @param item Item in which to update property.
     * @param value Xml with property value.
     */
    Update(context: DavContextBase, item: IHierarchyItem, value: Element): void;
    /**
     * Determines whether this property can be set/retrieved form an item.
     * @param item Item to determine whether property applies to it.
     * @returns true if the property applies to the item.
     */
    AppliesTo(item: IHierarchyItem): boolean;
}
