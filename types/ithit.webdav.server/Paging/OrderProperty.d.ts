/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { PropertyName } from "../PropertyName";
/**Represents property used for sorting in ascending or descending order. */
export declare class OrderProperty {
    /**Property name. */
    Property: PropertyName;
    /**Order direction. */
    Ascending: boolean;
    /**
     * Initializes new instance.
     * @param name Property name.
     * @param ascending Order direction.
     */
    constructor(name: PropertyName, ascending: boolean);
}
