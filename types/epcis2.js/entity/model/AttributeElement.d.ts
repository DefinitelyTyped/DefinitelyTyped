export default class AttributeElement extends Entity {
    /**
     * Set the id property
     * @param id
     * @return the attributeElement instance
     */
    setId(id: string): AttributeElement;
    /**
     * Getter for the id property
     * @return - the id
     */
    getId(): string;
    /**
     * Set the attribute property
     * @param attribute
     * @return the attributeElement instance
     */
    setAttribute(attribute: string): AttributeElement;
    /**
     * Getter for the attribute property
     * @return - the attribute
     */
    getAttribute(): string;
}
import Entity from "../Entity";
