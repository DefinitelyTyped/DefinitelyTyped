export default class QuantityElement extends Entity {
    addExtension: () => never;
    removeExtension: () => never;
    /**
     * Set the epcClass property
     * @param {string} epcClass
     * @return {QuantityElement} - the quantityElement instance
     */
    setEpcClass(epcClass: string): QuantityElement;
    /**
     * Getter for the epcClass property
     * @return {string} - the epcClass
     */
    getEpcClass(): string;
    /**
     * Set the uom property
     * @param {string} uom (pattern: "^[A-Z0-9]{2,3}$")
     * @return {QuantityElement} - the quantityElement instance
     */
    setUom(uom: string): QuantityElement;
    /**
     * Getter for the uom property
     * @return {string} - the uom
     */
    getUom(): string;
    /**
     * Set the quantity property
     * @param {number} quantity (pattern: "^[A-Z0-9]{2,3}$")
     * @return {QuantityElement} - the quantityElement instance
     */
    setQuantity(quantity: number): QuantityElement;
    /**
     * Getter for the quantity property
     * @return {number} - the quantity
     */
    getQuantity(): number;
}
import Entity from "../Entity";
