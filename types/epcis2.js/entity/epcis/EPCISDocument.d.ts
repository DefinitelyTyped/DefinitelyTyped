export default class EPCISDocument extends Entity {
    type: string;

    /**
     * Set the type property
     * @return the epcisDocument instance
     */
    setType(type: string): EPCISDocument;

    /**
     * Getter for the type property
     * @return the type property
     */
    getType(): string;

    /**
     * Set the context property, and add the default context if it is not provided
     * @return the epcisDocument instance
     */
    setContext(context: any): EPCISDocument;

    "@context": any;

    /**
     * Getter for the context property
     */
    getContext(): any;

    /**
     * Set the schemaVersion property
     * @return the epcisDocument instance
     */
    setSchemaVersion(schemaVersion: string): EPCISDocument;

    /**
     * Getter for the schemaVersion property
     */
    getSchemaVersion(): string;

    /**
     * Set the creationDate property
     * @return the epcisDocument instance
     */
    setCreationDate(creationDate: string): EPCISDocument;

    /**
     * Getter for the creationDate property
     */
    getCreationDate(): string;

    /**
     * Set the epcisHeader property
     * @param epcisHeader
     * @return the epcisDocument instance
     */
    setEPCISHeader(epcisHeader: EPCISHeader): EPCISDocument;

    /**
     * Getter for the epcisHeader property
     * @return the epcisHeader
     */
    getEPCISHeader(): EPCISHeader;

    /**
     * Add the event to the "eventList" field
     * @param event - the event to add
     * @return the epcisDocument instance
     */
    addEvent(event: Event): EPCISDocument;

    /**
     * Add each event to the "eventList" field
     * @param eventList - the events to add
     * @return the epcisDocument instance
     */
    addEventList(eventList: Event[]): EPCISDocument;

    /**
     * Clear the vocabularyList list
     * @return the epcisDocument instance
     */
    clearEventList(): EPCISDocument;

    /**
     * Remove the event from the "eventList" field
     * @param event - the events to remove
     * @return the epcisDocument instance
     */
    removeEvent(event: Event): EPCISDocument;

    eventList: any;

    /**
     * Remove each event from the "eventList" field
     * @param eventList - the events to remove
     * @return the epcisDocument instance
     */
    removeEventList(eventList: Event[]): EPCISDocument;

    /**
     * Getter for the eventList property
     * @return the eventList
     */
    getEventList(): Event[];

    /**
     * Set the instanceIdentifier property
     * @return the epcisDocument instance
     */
    setInstanceIdentifier(instanceIdentifier: string): EPCISDocument;

    /**
     * Getter for the instanceIdentifier property
     * @return the instanceIdentifier
     */
    getInstanceIdentifier(): string;

    /**
     * Set the sender property
     * @return the epcisDocument instance
     */
    setSender(sender: string): EPCISDocument;

    /**
     * Getter for the sender property
     */
    getSender(): string;

    /**
     * Set the receiver property
     * @return the epcisDocument instance
     */
    setReceiver(receiver: string): EPCISDocument;

    /**
     * Getter for the receiver property
     */
    getReceiver(): string;

    /**
     * Set the id property
     * @return the epcisDocument instance
     */
    setId(id: string): EPCISDocument;

    /**
     * Getter for the id property
     */
    getId(): string;

    /**
     * Check if the EPCISDocument respects the rules of the standard defined in
     * src/schema/EPCISDocument.schema.json
     * @return true if the EPCIS document is valid
     */
    isValid(): boolean;
}
import Entity from "../Entity";
import Event from "../events/Event";
import EPCISHeader from "./EPCISHeader";
