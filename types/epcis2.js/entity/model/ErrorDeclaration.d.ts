export default class ErrorDeclaration extends Entity {
    /**
     * Set the declarationTime property
     * @param {string} time - a string corresponding to the time
     * @return {ErrorDeclaration} - the errorDeclaration instance
     */
    setDeclarationTime(time: string): ErrorDeclaration;
    /**
     * Getter for the declarationTime property
     * @return {string} - the declarationTime
     */
    getDeclarationTime(): string;
    /**
     * Set the reason property
     * @param {string} reason - the reason (e.g 'incorrect_data')
     * @return {ErrorDeclaration} - the errorDeclaration instance
     */
    setReason(reason: string): ErrorDeclaration;
    /**
     * Getter for the reason property
     * @return {string} - the reason
     */
    getReason(): string;
    /**
     * Add the correctiveEventID to the "correctiveEventIDs" field
     * @param {string} correctiveEventID - the correctiveEventID to add
     * (e.g urn:uuid:404d95fc-9457-4a51-bd6a-0bba133845a8)
     * @return {ErrorDeclaration} - the errorDeclaration instance
     */
    addCorrectiveEventID(correctiveEventID: string): ErrorDeclaration;
    /**
     * Add each correctiveEventID to the "correctiveEventIDs" field
     * @param {Array<string>} correctiveEventIDList - the correctiveEventIDs to add
     * (e.g [urn:uuid:404d95fc-9457-4a51-bd6a-0bba133845a8,
     * urn:uuid:404d95fc-9457-4a51-bd6a-0bba133845a7])
     * @return {ErrorDeclaration} - the errorDeclaration instance
     */
    addCorrectiveEventIDList(correctiveEventIDList: Array<string>): ErrorDeclaration;
    /**
     * Clear the correctiveEventID list
     * @return {ErrorDeclaration} - the errorDeclaration instance
     */
    clearCorrectiveEventIDList(): ErrorDeclaration;
    /**
     * Remove a correctiveEventID from the "correctiveEventIDs" field
     * @param {string} correctiveEventID - the correctiveEventID to remove
     * (e.g urn:uuid:404d95fc-9457-4a51-bd6a-0bba133845a8)
     * @return {ErrorDeclaration} - the errorDeclaration instance
     */
    removeCorrectiveEventID(correctiveEventID: string): ErrorDeclaration;
    correctiveEventIDs: any;
    /**
     * Remove each correctiveEventID from the "correctiveEventIDs" field
     * @param {Array<string>} correctiveEventIDList - the correctiveEventIDs to remove
     * (e.g [urn:uuid:404d95fc-9457-4a51-bd6a-0bba133845a8,
     * urn:uuid:404d95fc-9457-4a51-bd6a-0bba133845a7])
     * @return {ErrorDeclaration} - the errorDeclaration instance
     */
    removeCorrectiveEventIDList(correctiveEventIDList: Array<string>): ErrorDeclaration;
    /**
     * Getter for the correctiveEventIDs property
     * @return {Array<string>} - the correctiveEventIDs
     */
    getCorrectiveEventIDs(): Array<string>;
}
import Entity from "../Entity";
