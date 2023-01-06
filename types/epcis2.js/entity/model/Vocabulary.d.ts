export default class Vocabulary extends Entity {
    /**
     * Set the type property
     * @param {string} type
     * @return {Vocabulary} - the vocabulary instance
     */
    setType(type: string): Vocabulary;
    /**
     * Getter for the type property
     * @return {string} - the type
     */
    getType(): string;
    /**
     * Add the vocabularyElement to the "vocabularyElementList" field
     * @param {VocabularyElement} vocabularyElement - the vocabularyElement to add
     * @return {Vocabulary} - the vocabulary instance
     */
    addVocabularyElement(vocabularyElement: VocabularyElement): Vocabulary;
    /**
     * Add each vocabularyElement to the "vocabularyElementList" field
     * @param {Array<VocabularyElement>} vocabularyElementList - the vocabularyElements to add
     * @return {Vocabulary} - the vocabulary instance
     */
    addVocabularyElementList(vocabularyElementList: Array<VocabularyElement>): Vocabulary;
    /**
     * Clear the vocabularyElementList list
     * @return {Vocabulary} - the vocabulary instance
     */
    clearVocabularyElementList(): Vocabulary;
    /**
     * Remove a vocabularyElement from the "vocabularyElementList" field
     * @param {VocabularyElement} vocabularyElement - the vocabularyElement to remove
     * @return {Vocabulary} - the vocabulary instance
     */
    removeVocabularyElement(vocabularyElement: VocabularyElement): Vocabulary;
    vocabularyElementList: any;
    /**
     * Remove each vocabularyElement from the "vocabularyElementList" field
     * @param {Array<VocabularyElement>} vocabularyElementList - the vocabularyElement to remove
     * @return {Vocabulary} - the vocabulary instance
     */
    removeVocabularyElementList(vocabularyElementList: Array<VocabularyElement>): Vocabulary;
    /**
     * Getter for the vocabularyElementList property
     * @return {Array<VocabularyElement>} - the vocabularyElementList
     */
    getVocabularyElementList(): Array<VocabularyElement>;
}
import Entity from "../Entity";
import VocabularyElement from "./VocabularyElement";
