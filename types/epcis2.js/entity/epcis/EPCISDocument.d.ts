export default class EPCISDocument extends Entity {
    type: string;

    /**
     * Set the type property
     * @param {string} type
     * @return {EPCISDocument} - the epcisDocument instance
     */
    setType(type: string): EPCISDocument;

    /**
     * Getter for the type property
     * @return {string} - the type property
     */
    getType(): string;

    /**
     * Set the context property, and add the default context if it is not provided
     * @param {string|Object|Array<string>|Array<Object>} context
     * @return {EPCISDocument} - the epcisDocument instance
     */
    setContext(context: any): EPCISDocument;

    '@context': any;

    /**
     * Getter for the context property
     * @return {string|Object|Array<string>|Array<Object>} - the context
     */
    getContext(): any;

    /**
     * Set the schemaVersion property
     * @param {string} schemaVersion
     * @return {EPCISDocument} - the epcisDocument instance
     */
    setSchemaVersion(schemaVersion: string): EPCISDocument;

    /**
     * Getter for the schemaVersion property
     * @return {string} - the schemaVersion
     */
    getSchemaVersion(): string;

    /**
     * Set the creationDate property
     * @param {string} creationDate
     * @return {EPCISDocument} - the epcisDocument instance
     */
    setCreationDate(creationDate: string): EPCISDocument;

    /**
     * Getter for the creationDate property
     * @return {string} - the creationDate
     */
    getCreationDate(): string;

    /**
     * Set the epcisHeader property
     * @param {EPCISHeader} epcisHeader
     * @return {EPCISDocument} - the epcisDocument instance
     */
    setEPCISHeader(epcisHeader: EPCISHeader): EPCISDocument;

    /**
     * Getter for the epcisHeader property
     * @return {EPCISHeader} - the epcisHeader
     */
    getEPCISHeader(): EPCISHeader;

    /**
     * Add the event to the "eventList" field
     * @param {Event} event - the event to add
     * @return {EPCISDocument} - the epcisDocument instance
     */
    addEvent(event: Event): EPCISDocument;

    /**
     * Add each event to the "eventList" field
     * @param {Array<Event>} eventList - the events to add
     * @return {EPCISDocument} - the epcisDocument instance
     */
    addEventList(eventList: Array<Event>): EPCISDocument;

    /**
     * Clear the vocabularyList list
     * @return {EPCISDocument} - the epcisDocument instance
     */
    clearEventList(): EPCISDocument;

    /**
     * Remove the event from the "eventList" field
     * @param {Event} event - the events to remove
     * @return {EPCISDocument} - the epcisDocument instance
     */
    removeEvent(event: Event): EPCISDocument;

    eventList: any;

    /**
     * Remove each event from the "eventList" field
     * @param {Array<Event>} eventList - the events to remove
     * @return {EPCISDocument} - the epcisDocument instance
     */
    removeEventList(eventList: Array<Event>): EPCISDocument;

    /**
     * Getter for the eventList property
     * @return {Array<Event>} - the eventList
     */
    getEventList(): Array<Event>;

    /**
     * Set the instanceIdentifier property
     * @param {string} instanceIdentifier
     * @return {EPCISDocument} - the epcisDocument instance
     */
    setInstanceIdentifier(instanceIdentifier: string): EPCISDocument;

    /**
     * Getter for the instanceIdentifier property
     * @return {string} - the instanceIdentifier
     */
    getInstanceIdentifier(): string;

    /**
     * Set the sender property
     * @param {string} sender
     * @return {EPCISDocument} - the epcisDocument instance
     */
    setSender(sender: string): EPCISDocument;

    /**
     * Getter for the sender property
     * @return {string} - the sender
     */
    getSender(): string;

    /**
     * Set the receiver property
     * @param {string} receiver
     * @return {EPCISDocument} - the epcisDocument instance
     */
    setReceiver(receiver: string): EPCISDocument;

    /**
     * Getter for the receiver property
     * @return {string} - the receiver
     */
    getReceiver(): string;

    /**
     * Set the id property
     * @param {string} id
     * @return {EPCISDocument} - the epcisDocument instance
     */
    setId(id: string): EPCISDocument;

    /**
     * Getter for the id property
     * @return {string} - the id
     */
    getId(): string;

    /**
     * Check if the EPCISDocument respects the rules of the standard defined in
     * src/schema/EPCISDocument.schema.json
     * @return {boolean} - true if the EPCIS document is valid
     */
    isValid(): boolean;
}
import Entity from "../Entity";
import EPCISHeader from "./EPCISHeader";
import Event from "../events/Event";
