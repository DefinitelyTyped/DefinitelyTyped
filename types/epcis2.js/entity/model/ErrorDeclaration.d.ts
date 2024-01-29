export default class ErrorDeclaration extends Entity {
    /**
     * Set the declarationTime property
     * @param time - a string corresponding to the time
     * @return the errorDeclaration instance
     */
    setDeclarationTime(time: string): ErrorDeclaration;
    /**
     * Getter for the declarationTime property
     * @return - the declarationTime
     */
    getDeclarationTime(): string;
    /**
     * Set the reason property
     * @param reason - the reason (e.g 'incorrect_data')
     * @return the errorDeclaration instance
     */
    setReason(reason: string): ErrorDeclaration;
    /**
     * Getter for the reason property
     * @return - the reason
     */
    getReason(): string;
    /**
     * Add the correctiveEventID to the "correctiveEventIDs" field
     * @param correctiveEventID - the correctiveEventID to add
     * (e.g urn:uuid:404d95fc-9457-4a51-bd6a-0bba133845a8)
     * @return the errorDeclaration instance
     */
    addCorrectiveEventID(correctiveEventID: string): ErrorDeclaration;
    /**
     * Add each correctiveEventID to the "correctiveEventIDs" field
     * @param correctiveEventIDList - the correctiveEventIDs to add
     * (e.g [urn:uuid:404d95fc-9457-4a51-bd6a-0bba133845a8,
     * urn:uuid:404d95fc-9457-4a51-bd6a-0bba133845a7])
     * @return the errorDeclaration instance
     */
    addCorrectiveEventIDList(correctiveEventIDList: string[]): ErrorDeclaration;
    /**
     * Clear the correctiveEventID list
     * @return the errorDeclaration instance
     */
    clearCorrectiveEventIDList(): ErrorDeclaration;
    /**
     * Remove a correctiveEventID from the "correctiveEventIDs" field
     * @param correctiveEventID - the correctiveEventID to remove
     * (e.g urn:uuid:404d95fc-9457-4a51-bd6a-0bba133845a8)
     * @return the errorDeclaration instance
     */
    removeCorrectiveEventID(correctiveEventID: string): ErrorDeclaration;
    correctiveEventIDs: any;
    /**
     * Remove each correctiveEventID from the "correctiveEventIDs" field
     * @param correctiveEventIDList - the correctiveEventIDs to remove
     * (e.g [urn:uuid:404d95fc-9457-4a51-bd6a-0bba133845a8,
     * urn:uuid:404d95fc-9457-4a51-bd6a-0bba133845a7])
     * @return the errorDeclaration instance
     */
    removeCorrectiveEventIDList(correctiveEventIDList: string[]): ErrorDeclaration;
    /**
     * Getter for the correctiveEventIDs property
     * @return - the correctiveEventIDs
     */
    getCorrectiveEventIDs(): string[];
}
import Entity from "../Entity";
