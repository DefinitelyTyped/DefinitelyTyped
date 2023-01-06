export default class VocabularyElement extends Entity {
    /**
     * Set the id property
     * @param {string} id
     * @return {VocabularyElement} - the vocabularyElement instance
     */
    setId(id: string): VocabularyElement;
    /**
     * Getter for the id property
     * @return {string} - the id
     */
    getId(): string;
    /**
     * Add the attribute to the "attributeList" field
     * @param {AttributeElement} attribute
     * @return {VocabularyElement} - the vocabularyElement instance
     */
    addAttribute(attribute: AttributeElement): VocabularyElement;
    /**
     * Add each attribute to the "attributes" field
     * @param {Array<AttributeElement>} attributeList - the attributes to add
     * @return {VocabularyElement} - the vocabularyElement instance
     */
    addAttributeList(attributeList: Array<AttributeElement>): VocabularyElement;
    /**
     * Clear the attribute list
     * @return {VocabularyElement} - the vocabularyElement instance
     */
    clearAttributeList(): VocabularyElement;
    /**
     * Remove an attribute from the "attributes" field
     * @param {AttributeElement} attribute - the attribute to remove
     * @return {VocabularyElement} - the vocabularyElement instance
     */
    removeAttribute(attribute: AttributeElement): VocabularyElement;
    attributes: any;
    /**
     * Remove each attribute from the "attributes" field
     * @param {Array<AttributeElement>} attributeList - the attributes to remove
     * @return {VocabularyElement} - the vocabularyElement instance
     */
    removeAttributeList(attributeList: Array<AttributeElement>): VocabularyElement;
    /**
     * Getter for the attributes property
     * @return {Array<AttributeElement>} - the attributes
     */
    getAttributes(): Array<AttributeElement>;
    /**
     * Add the child to the "children" field
     * @param {string} child
     * @return {VocabularyElement} - the vocabularyElement instance
     */
    addChild(child: string): VocabularyElement;
    /**
     * Add each attribute to the "children" field
     * @param {Array<string>} childList - the children to add
     * @return {VocabularyElement} - the vocabularyElement instance
     */
    addChildList(childList: Array<string>): VocabularyElement;
    /**
     * Clear the child list
     * @return {VocabularyElement} - the vocabularyElement instance
     */
    clearChildren(): VocabularyElement;
    /**
     * Remove a child from the "children" field
     * @param {string} child - the child to remove
     * @return {VocabularyElement} - the vocabularyElement instance
     */
    removeChild(child: string): VocabularyElement;
    children: any;
    /**
     * Remove each child from the "children" field
     * @param {Array<string>} childList - the children to remove
     * @return {VocabularyElement} - the vocabularyElement instance
     */
    removeChildList(childList: Array<string>): VocabularyElement;
    /**
     * Getter for the children property
     * @return {Array<string>} - the children
     */
    getChildren(): Array<string>;
}
import Entity from "../Entity";
import AttributeElement from "./AttributeElement";
