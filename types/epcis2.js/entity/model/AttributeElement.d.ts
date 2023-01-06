export default class AttributeElement extends Entity {
    /**
     * Set the id property
     * @param {string} id
     * @return {AttributeElement} - the attributeElement instance
     */
    setId(id: string): AttributeElement;
    /**
     * Getter for the id property
     * @return {string} - the id
     */
    getId(): string;
    /**
     * Set the attribute property
     * @param {string} attribute
     * @return {AttributeElement} - the attributeElement instance
     */
    setAttribute(attribute: string): AttributeElement;
    /**
     * Getter for the attribute property
     * @return {string} - the attribute
     */
    getAttribute(): string;
}
import Entity from "../Entity";
