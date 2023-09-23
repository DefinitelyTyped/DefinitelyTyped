export namespace fieldToFunctions {
    const epcList: string[];
    const quantityList: string[];
    const action: string[];
    const bizStep: string[];
    const disposition: string[];
    const persistentDisposition: string[];
    const readPoint: string[];
    const bizLocation: string[];
    const ilmd: string[];
    const parentID: string[];
    const bizTransactionList: string[];
    const sourceList: string[];
    const destinationList: string[];
    const sensorElementList: string[];
    const childEPCs: string[];
    const childQuantityList: string[];
}

export default class Event extends Entity {
    /** ************     COMMON TO ALL EVENTS    ********************** */
    /**
     * Set the context property
     * @param context
     * @return the event instance
     */
    setContext(context: any): Event;
    "@context": any;
    /**
     * Getter for the context property
     */
    getContext(): any;
    /**
     * Getter for the type property
     * @return the event type
     */
    getType(): string;
    /**
     * Set the eventID property
     * @return the event instance
     */
    setEventID(id: string): Event;
    eventID: string;
    /**
     * Getter for the eventID property
     * @return the eventID
     */
    getEventID(): string;
    /**
     * Generate an event ID and set the eventID property
     * This method needs to be called once all your field are set since the hash id is generated
     * according to all your fields
     *
     * @param context - the list of context (e.g {
     *    "example": "http://ns.example.com/epcis/",
     *    "example2": "http://ns.example2.com/epcis/",
     * })
     * This param needs to contain all the contexts that are used in the event otherwise this function
     * will throw an error (if throwError is set to true)
     * @param throwError - if set to true, it will throw an error if the event misses some
     * fields for example. Otherwise, it won't throw an error and it will still return the
     * generated id
     * @return the event instance
     */
    generateHashID(context: {}, throwError?: boolean): Event;
    /**
     * Set the eventTime property
     * @param time - a string corresponding to the time
     *      If a timezone offset is provided in the string (e.g '2005-04-03T20:33:31.116-06:00')
     *      and overrideTimeZoneOffset is set to true, the timeZoneOffset field will be set with
     *      the extracted offset (here: '-06:00')
     * @param [overrideTimeZoneOffset = true] - if set to true, the eventTimeZoneOffset
     * field will be overridden with the offset of the given time. Otherwise, it doesn't update it.
     * @return the event instance
     */
    setEventTime(time: string, overrideTimeZoneOffset?: boolean): Event;
    eventTime: string;
    /**
     * Getter for the eventTime property
     * @return the eventTime
     */
    getEventTime(): string;
    /**
     * @param offset - the time zone offset
     * (e.g "+02:30" or "-06:00" if it is a string)
     * (e.g -6 or 2.5 if it is a number)
     * @return the event instance
     */
    setEventTimeZoneOffset(offset: number | string): Event;
    eventTimeZoneOffset: string;
    /**
     * Getter for the eventTimeZoneOffset property
     * @return the eventTimeZoneOffset
     */
    getEventTimeZoneOffset(): string;
    /**
     * Set the recordTime property
     * @param time - a string corresponding to the time
     * @return the event instance
     */
    setRecordTime(time: string): Event;
    /**
     * Getter for the recordTime property
     * @return the recordTime
     */
    getRecordTime(): string;
    /**
     * Set the errorDeclaration property
     * @return the event instance
     */
    setErrorDeclaration(errorDeclaration: ErrorDeclaration): Event;
    /**
     * Getter for the errorDeclaration property
     */
    getErrorDeclaration(): ErrorDeclaration;
    /**
     * set the certificationInfo property
     * @param certificationInfo
     * @return the event instance
     */
    setCertificationInfo(certificationInfo: string | string[]): Event;
    /**
     * Getter for the certificationInfo property
     * @return the certificationInfo
     */
    getCertificationInfo(): string | string[];
    /** ************     NOT COMMON TO ALL EVENTS    ********************** */
    /**
     * Add the epc to the "epcList" field
     * @param epc - the epc to add (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return the event instance
     */
    addEPC(epc: string): Event;
    /**
     * Add each epc to the "epcList" field
     * @param epcList - the epcs to add
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return the event instance
     */
    addEPCList(epcList: string[]): Event;
    /**
     * Clear the epc list
     * @return the event instance
     */
    clearEPCList(): Event;
    /**
     * Remove an epc from the "epcList" field
     * @param epc - the epc to remove (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return the event instance
     */
    removeEPC(epc: string): Event;
    epcList: any;
    /**
     * Remove each epc from the "epcList" field
     * @param epcList - the epcs to remove
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return the event instance
     */
    removeEPCList(epcList: string[]): Event;
    /**
     * Getter for the epcList property
     * @return - the epcList
     */
    getEPCList(): string[];
    /**
     * Add the quantity to the "quantityList" field
     * @param quantity - the quantity to add
     * @return the event instance
     */
    addQuantity(quantity: QuantityElement): Event;
    /**
     * Add each quantity to the "quantityList" field
     * @param quantityList - the quantities to add
     * @return the event instance
     */
    addQuantityList(quantityList: QuantityElement[]): Event;
    /**
     * Clear the quantity list
     * @return the event instance
     */
    clearQuantityList(): Event;
    /**
     * Remove a quantity from the "quantityList" field
     * @param quantity - the quantity to remove
     * @return the event instance
     */
    removeQuantity(quantity: QuantityElement): Event;
    quantityList: any;
    /**
     * Remove each quantity from the "quantityList" field
     * @param quantityList - the quantities to remove
     * @return the event instance
     */
    removeQuantityList(quantityList: QuantityElement[]): Event;
    /**
     * Getter for the quantityList property
     */
    getQuantityList(): QuantityElement[];
    /**
     * Set the action property
     * @param action - string from {"OBSERVE", "ADD", "DELETE"}
     * @return the event instance
     */
    setAction(action: string): Event;
    /**
     * Getter for the action property
     * @return the action
     */
    getAction(): string;
    /**
     * Set the bizStep property
     * @param bizStep - e.g bizsteps.accepting
     * @return the event instance
     */
    setBizStep(bizStep: string): Event;
    /**
     * Getter for the bizStep property
     * @return the bizStep
     */
    getBizStep(): string;
    /**
     * Set the disposition property
     * @param disposition - e.g dispositions.in_transit
     * @return the event instance
     */
    setDisposition(disposition: string): Event;
    /**
     * Getter for the disposition property
     * @return the disposition
     */
    getDisposition(): string;
    /**
     * Set the persistentDisposition property
     * @param persistentDisposition
     * @return the event instance
     */
    setPersistentDisposition(persistentDisposition: PersistentDisposition): Event;
    /**
     * Getter for the persistentDisposition property
     * @return - the persistentDisposition
     */
    getPersistentDisposition(): PersistentDisposition;
    /**
     * Set the readPoint property
     * @param readPoint id or readPoint instance
     * @return the event instance
     */
    setReadPoint(readPoint: string | ReadPoint): Event;
    readPoint: ReadPoint;
    /**
     * Getter for the readPoint property
     */
    getReadPoint(): ReadPoint;
    /**
     * Set the bizLocation property
     * @param bizLocation instance or bizLocation id
     * @return the event instance
     */
    setBizLocation(bizLocation: string | BizLocation): Event;
    bizLocation: BizLocation;
    /**
     * Getter for the bizLocation property
     * @return the bizLocation
     */
    getBizLocation(): BizLocation;
    /**
     * Add the bizTransaction to the "bizTransactionList" field
     * @param bizTransaction - the bizTransaction to add
     * @return the event instance
     */
    addBizTransaction(bizTransaction: BizTransactionElement): Event;
    /**
     * Add each bizTransaction to the "bizTransactionList" field
     * @param bizTransactionList - the bizTransactions to add
     * @return the event instance
     */
    addBizTransactionList(bizTransactionList: BizTransactionElement[]): Event;
    /**
     * Clear the bizTransaction list
     * @return the event instance
     */
    clearBizTransactionList(): Event;
    /**
     * Remove a bizTransaction from the "bizTransactionList" field
     * @param bizTransaction - the bizTransaction to remove
     * @return the event instance
     */
    removeBizTransaction(bizTransaction: BizTransactionElement): Event;
    bizTransactionList: any;
    /**
     * Remove each bizTransaction from the "bizTransactionList" field
     * @param bizTransactionList - the bizTransactions to remove
     * @return the event instance
     */
    removeBizTransactionList(bizTransactionList: BizTransactionElement[]): Event;
    /**
     * Getter for the bizTransactionList property
     * @return the bizTransactionList
     */
    getBizTransactionList(): BizTransactionElement[];
    /**
     * Add the source to the "sourceList" field
     * @param source - the source to add
     * @return the event instance
     */
    addSource(source: SourceElement): Event;
    /**
     * Add each sourceElement to the "sourceList" field
     * @param sourceList - the sourceElements to add
     * @return the event instance
     */
    addSourceList(sourceList: SourceElement[]): Event;
    /**
     * Clear the source list
     * @return the event instance
     */
    clearSourceList(): Event;
    /**
     * Remove a source from the "sourceList" field
     * @param source - the source to remove
     * @return the event instance
     */
    removeSource(source: SourceElement): Event;
    sourceList: any;
    /**
     * Remove each source from the "sourceList" field
     * @param sourceList - the sources to remove
     * @return the event instance
     */
    removeSourceList(sourceList: SourceElement[]): Event;
    /**
     * Getter for the sourceList property
     * @return - the sourceList
     */
    getSourceList(): SourceElement[];
    /**
     * Add the destination to the "destinationList" field
     * @param destination - the destination to add
     * @return the event instance
     */
    addDestination(destination: DestinationElement): Event;
    /**
     * Add each destinationElement to the "destinationList" field
     * @param destinationList - the destinationElements to add
     * @return the event instance
     */
    addDestinationList(destinationList: DestinationElement[]): Event;
    /**
     * Clear the destination list
     * @return the event instance
     */
    clearDestinationList(): Event;
    /**
     * Remove a destination from the "destinationList" field
     * @param destination - the destination to remove
     * @return the event instance
     */
    removeDestination(destination: DestinationElement): Event;
    destinationList: any;
    /**
     * Remove each destination from the "destinationList" field
     * @param destinationList - the destinations to remove
     * @return the event instance
     */
    removeDestinationList(destinationList: DestinationElement[]): Event;
    /**
     * Getter for the destinationList property
     * @return - the destinationList
     */
    getDestinationList(): DestinationElement[];
    /**
     * Add the sensorElement to the "sensorElementList" field
     * @param sensorElement - the sensorElement to add
     * @return the event instance
     */
    addSensorElement(sensorElement: SensorElement): Event;
    /**
     * Add each sensorElementElement to the "sensorElementList" field
     * @param sensorElementList - the sensorElementElements to add
     * @return the event instance
     */
    addSensorElementList(sensorElementList: SensorElement[]): Event;
    /**
     * Clear the sensorElement list
     * @return the event instance
     */
    clearSensorElementList(): Event;
    /**
     * Remove a sensorElement from the "sensorElementList" field
     * @param sensorElement - the sensorElement to remove
     * @return the event instance
     */
    removeSensorElement(sensorElement: SensorElement): Event;
    sensorElementList: any;
    /**
     * Remove each sensorElement from the "sensorElementList" field
     * @param sensorElementList - the sensorElements to remove
     * @return the event instance
     */
    removeSensorElementList(sensorElementList: SensorElement[]): Event;
    /**
     * Getter for the sensorElementList property
     * @return SensorElement[]- the sensorElementList
     */
    getSensorElementList(): SensorElement[];
    /**
     * Set the ilmd property
     * @param ilmd object
     * @return the event instance
     */
    setIlmd(ilmd: Ilmd): Event;
    /**
     * Getter for the ilmd property
     * @return - the ilmd
     */
    getIlmd(): Ilmd;
    /**
     * Set the parentID property
     * @return the event instance
     */
    setParentId(parentID: string): Event;
    parentID: string;
    /**
     * Getter for the parentID property
     * @return the parentID
     */
    getParentId(): string;
    /**
     * Add the epc to the "childEPCs" field
     * @param epc - the epc to add (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return the event instance
     */
    addChildEPC(epc: string): Event;
    /**
     * Add each epc to the "childEPCs" field
     * @param epcList - the epcs to add
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return the event instance
     */
    addChildEPCList(epcList: string[]): Event;
    /**
     * Clear the childEPCs
     * @return the event instance
     */
    clearChildEPCList(): Event;
    /**
     * Remove an epc from the "childEPCs" field
     * @param epc - the epc to remove (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return the event instance
     */
    removeChildEPC(epc: string): Event;
    childEPCs: any;
    /**
     * Remove each epc from the "childEPCs" field
     * @param epcList - the epcs to remove
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return the event instance
     */
    removeChildEPCList(epcList: string[]): Event;
    /**
     * Getter for the childEPCs property
     * @return - the childEpcList
     */
    getChildEPCList(): string[];
    /**
     * Add the quantity to the "childQuantityList" field
     * @param quantity - the quantity to add
     * @return the event instance
     */
    addChildQuantity(quantity: QuantityElement): Event;
    /**
     * Add each quantity to the "childQuantityList" field
     * @param quantityList - the quantities to add
     * @return the event instance
     */
    addChildQuantityList(quantityList: QuantityElement[]): Event;
    /**
     * Clear the childQuantityList
     * @return the event instance
     */
    clearChildQuantityList(): Event;
    /**
     * Remove a quantity from the "childQuantityList" field
     * @param quantity - the quantity to remove
     * @return the event instance
     */
    removeChildQuantity(quantity: QuantityElement): Event;
    childQuantityList: any;
    /**
     * Remove each quantity from the "childQuantityList" field
     * @param quantityList - the quantities to remove
     * @return the event instance
     */
    removeChildQuantityList(quantityList: QuantityElement[]): Event;
    /**
     * Getter for the childQuantityList property
     * @return the quantityList
     */
    getChildQuantityList(): QuantityElement[];
    /**
     * Check if the EPCIS Event respects the rules of the standard defined in
     * src/schema/${EventType}.schema.json
     * @return - true if the Event is valid
     */
    isValid(): boolean;
}
import Entity from "../Entity";
import BizLocation from "../model/BizLocation";
import BizTransactionElement from "../model/BizTransactionElement";
import DestinationElement from "../model/DestinationElement";
import ErrorDeclaration from "../model/ErrorDeclaration";
import Ilmd from "../model/Ilmd";
import PersistentDisposition from "../model/PersistentDisposition";
import QuantityElement from "../model/QuantityElement";
import ReadPoint from "../model/ReadPoint";
import SensorElement from "../model/sensor/SensorElement";
import SourceElement from "../model/SourceElement";
