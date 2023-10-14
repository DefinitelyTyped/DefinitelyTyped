export default class QuantityElement extends Entity {
    addExtension: () => never;
    removeExtension: () => never;
    /**
     * Set the epcClass property
     */
    setEpcClass(epcClass: string): QuantityElement;
    /**
     * Getter for the epcClass property
     */
    getEpcClass(): string;
    /**
     * Set the uom property
     * @param uom (pattern: "^[A-Z0-9]{2,3}$")
     */
    setUom(uom: string): QuantityElement;
    /**
     * Getter for the uom property
     */
    getUom(): string;
    /**
     * Set the quantity property
     * @param quantity (pattern: "^[A-Z0-9]{2,3}$")
     */
    setQuantity(quantity: number): QuantityElement;
    /**
     * Getter for the quantity property
     */
    getQuantity(): number;
}
import Entity from "../Entity";
