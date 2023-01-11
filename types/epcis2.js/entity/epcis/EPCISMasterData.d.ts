export default class EPCISMasterData extends Entity {
    /**
     * Add the vocabulary to the "vocabularyList" field
     * @param vocabulary - the vocabulary to add
     * @return the epcis master data instance
     */
    addVocabulary(vocabulary: Vocabulary): EPCISMasterData;
    /**
     * Add each vocabulary to the "vocabularyList" field
     * @param vocabularyList - the vocabularies to add
     * @return the epcis master data instance
     */
    addVocabularyList(vocabularyList: Vocabulary[]): EPCISMasterData;
    /**
     * Clear the vocabularyList list
     * @return the epcis master data instance
     */
    clearVocabularyList(): EPCISMasterData;
    /**
     * Remove a vocabulary from the "vocabularyList" field
     * @param vocabulary - the vocabularyList to remove
     * @return the epcis master data instance
     */
    removeVocabulary(vocabulary: Vocabulary): EPCISMasterData;
    vocabularyList: any;
    /**
     * Remove each vocabulary from the "vocabularyList" field
     * @param vocabularyList - the vocabularies to remove
     * @return the epcis master data instance
     */
    removeVocabularyList(vocabularyList: Vocabulary[]): EPCISMasterData;
    /**
     * Getter for the vocabularyList property
     */
    getVocabularyList(): Vocabulary[];
}
import Entity from "../Entity";
import Vocabulary from "../model/Vocabulary";
