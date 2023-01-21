export default class Vocabulary extends Entity {
    /**
     * Set the type property
     * @param  type
     * @return the vocabulary instance
     */
    setType(type: string): Vocabulary;
    /**
     * Getter for the type property
     * @return  - the type
     */
    getType(): string;
    /**
     * Add the vocabularyElement to the "vocabularyElementList" field
     * @param vocabularyElement - the vocabularyElement to add
     * @return the vocabulary instance
     */
    addVocabularyElement(vocabularyElement: VocabularyElement): Vocabulary;
    /**
     * Add each vocabularyElement to the "vocabularyElementList" field
     * @param vocabularyElementList - the vocabularyElements to add
     * @return the vocabulary instance
     */
    addVocabularyElementList(vocabularyElementList: VocabularyElement[]): Vocabulary;
    /**
     * Clear the vocabularyElementList list
     * @return the vocabulary instance
     */
    clearVocabularyElementList(): Vocabulary;
    /**
     * Remove a vocabularyElement from the "vocabularyElementList" field
     * @param vocabularyElement - the vocabularyElement to remove
     * @return the vocabulary instance
     */
    removeVocabularyElement(vocabularyElement: VocabularyElement): Vocabulary;
    vocabularyElementList: any;
    /**
     * Remove each vocabularyElement from the "vocabularyElementList" field
     * @param vocabularyElementList - the vocabularyElement to remove
     * @return the vocabulary instance
     */
    removeVocabularyElementList(vocabularyElementList: VocabularyElement[]): Vocabulary;
    /**
     * Getter for the vocabularyElementList property
     * @return - the vocabularyElementList
     */
    getVocabularyElementList(): VocabularyElement[];
}
import Entity from "../Entity";
import VocabularyElement from "./VocabularyElement";
