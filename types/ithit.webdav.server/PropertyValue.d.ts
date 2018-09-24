import { PropertyName } from "./PropertyName";
/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
/**
 * Describes one property associated with hierarchy item object.
 */
export declare class PropertyValue {
    /**
     * Name of the property
     */
    private _QualifiedName;
    /**
     * The value of the property
     */
    private _Value;
    /**
     * Initializes new instance.
     * @param name Property name.
     * @param value Property value.
     */
    constructor(name?: PropertyName, value?: string);
    Value: String;
    QualifiedName: PropertyName;
}
