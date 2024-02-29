export default class VocabularyElement extends Entity {
    /**
     * Set the id property
     * @param id
     * @return the vocabularyElement instance
     */
    setId(id: string): VocabularyElement;
    /**
     * Getter for the id property
     * @return the id
     */
    getId(): string;
    /**
     * Add the attribute to the "attributeList" field
     * @param attribute
     * @return the vocabularyElement instance
     */
    addAttribute(attribute: AttributeElement): VocabularyElement;
    /**
     * Add each attribute to the "attributes" field
     * @param attributeList - the attributes to add
     * @return the vocabularyElement instance
     */
    addAttributeList(attributeList: AttributeElement[]): VocabularyElement;
    /**
     * Clear the attribute list
     * @return the vocabularyElement instance
     */
    clearAttributeList(): VocabularyElement;
    /**
     * Remove an attribute from the "attributes" field
     * @param attribute - the attribute to remove
     * @return the vocabularyElement instance
     */
    removeAttribute(attribute: AttributeElement): VocabularyElement;
    attributes: any;
    /**
     * Remove each attribute from the "attributes" field
     * @param attributeList - the attributes to remove
     * @return the vocabularyElement instance
     */
    removeAttributeList(attributeList: AttributeElement[]): VocabularyElement;
    /**
     * Getter for the attributes property
     * @return the attributes
     */
    getAttributes(): AttributeElement[];
    /**
     * Add the child to the "children" field
     * @param child
     * @return the vocabularyElement instance
     */
    addChild(child: string): VocabularyElement;
    /**
     * Add each attribute to the "children" field
     * @param childList - the children to add
     * @return the vocabularyElement instance
     */
    addChildList(childList: string[]): VocabularyElement;
    /**
     * Clear the child list
     * @return the vocabularyElement instance
     */
    clearChildren(): VocabularyElement;
    /**
     * Remove a child from the "children" field
     * @param child - the child to remove
     * @return the vocabularyElement instance
     */
    removeChild(child: string): VocabularyElement;
    children: any;
    /**
     * Remove each child from the "children" field
     * @param childList - the children to remove
     * @return the vocabularyElement instance
     */
    removeChildList(childList: string[]): VocabularyElement;
    /**
     * Getter for the children property
     * @return the children
     */
    getChildren(): string[];
}
import Entity from "../Entity";
import AttributeElement from "./AttributeElement";
