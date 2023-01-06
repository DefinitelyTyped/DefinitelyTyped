export default class EPCISMasterData extends Entity {
    /**
     * Add the vocabulary to the "vocabularyList" field
     * @param {Vocabulary} vocabulary - the vocabulary to add
     * @return {EPCISMasterData} - the epcis master data instance
     */
    addVocabulary(vocabulary: Vocabulary): EPCISMasterData;
    /**
     * Add each vocabulary to the "vocabularyList" field
     * @param {Array<Vocabulary>} vocabularyList - the vocabularies to add
     * @return {EPCISMasterData} - the epcis master data instance
     */
    addVocabularyList(vocabularyList: Array<Vocabulary>): EPCISMasterData;
    /**
     * Clear the vocabularyList list
     * @return {EPCISMasterData} - the epcis master data instance
     */
    clearVocabularyList(): EPCISMasterData;
    /**
     * Remove a vocabulary from the "vocabularyList" field
     * @param {Vocabulary} vocabulary - the vocabularyList to remove
     * @return {EPCISMasterData} - the epcis master data instance
     */
    removeVocabulary(vocabulary: Vocabulary): EPCISMasterData;
    vocabularyList: any;
    /**
     * Remove each vocabulary from the "vocabularyList" field
     * @param {Array<Vocabulary>} vocabularyList - the vocabularies to remove
     * @return {EPCISMasterData} - the epcis master data instance
     */
    removeVocabularyList(vocabularyList: Array<Vocabulary>): EPCISMasterData;
    /**
     * Getter for the vocabularyList property
     * @return {Array<Vocabulary>} - the vocabularyList
     */
    getVocabularyList(): Array<Vocabulary>;
}
import Entity from "../Entity";
import Vocabulary from "../model/Vocabulary";
