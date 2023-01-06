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
/**
 * Abstract class Event
 *
 * @class Event
 */
export default class Event extends Entity {
    /** ************     COMMON TO ALL EVENTS    ********************** */
    /**
     * Set the context property
     * @param {string|Object|Array<string>|Array<Object>} context
     * @return {Event} - the event instance
     */
    setContext(context: any): Event;
    '@context': any;
    /**
     * Getter for the context property
     * @return {string|Object|Array<string>|Array<Object>} - the context
     */
    getContext(): any;
    /**
     * Getter for the type property
     * @return {string} - the event type
     */
    getType(): string;
    /**
     * Set the eventID property
     * @param {string} id
     * @return {Event} - the event instance
     */
    setEventID(id: string): Event;
    eventID: string;
    /**
     * Getter for the eventID property
     * @return {string} - the eventID
     */
    getEventID(): string;
    /**
     * Generate an event ID and set the eventID property
     * This method needs to be called once all your field are set since the hash id is generated
     * according to all your fields
     *
     * @param {{}} context - the list of context (e.g {
     *    "example": "http://ns.example.com/epcis/",
     *    "example2": "http://ns.example2.com/epcis/",
     * })
     * This param needs to contain all the contexts that are used in the event otherwise this function
     * will throw an error (if throwError is set to true)
     * @param {boolean} throwError - if set to true, it will throw an error if the event misses some
     * fields for example. Otherwise, it won't throw an error and it will still return the
     * generated id
     * @return {Event} - the event instance
     */
    generateHashID(context: {}, throwError?: boolean): Event;
    /**
     * Set the eventTime property
     * @param {string} time - a string corresponding to the time
     *      If a timezone offset is provided in the string (e.g '2005-04-03T20:33:31.116-06:00')
     *      and overrideTimeZoneOffset is set to true, the timeZoneOffset field will be set with
     *      the extracted offset (here: '-06:00')
     * @param {boolean} [overrideTimeZoneOffset = true] - if set to true, the eventTimeZoneOffset
     * field will be overridden with the offset of the given time. Otherwise, it doesn't update it.
     * @return {Event} - the event instance
     */
    setEventTime(time: string, overrideTimeZoneOffset?: boolean): Event;
    eventTime: string;
    /**
     * Getter for the eventTime property
     * @return {string} - the eventTime
     */
    getEventTime(): string;
    /**
     * @param {number|string} offset - the time zone offset
     * (e.g "+02:30" or "-06:00" if it is a string)
     * (e.g -6 or 2.5 if it is a number)
     * @return {Event} - the event instance
     */
    setEventTimeZoneOffset(offset: number | string): Event;
    eventTimeZoneOffset: string;
    /**
     * Getter for the eventTimeZoneOffset property
     * @return {string} - the eventTimeZoneOffset
     */
    getEventTimeZoneOffset(): string;
    /**
     * Set the recordTime property
     * @param {string} time - a string corresponding to the time
     * @return {Event} - the event instance
     */
    setRecordTime(time: string): Event;
    /**
     * Getter for the recordTime property
     * @return {string} - the recordTime
     */
    getRecordTime(): string;
    /**
     * Set the errorDeclaration property
     * @param {ErrorDeclaration} errorDeclaration
     * @return {Event} - the event instance
     */
    setErrorDeclaration(errorDeclaration: ErrorDeclaration): Event;
    /**
     * Getter for the errorDeclaration property
     * @return {ErrorDeclaration} - the errorDeclaration
     */
    getErrorDeclaration(): ErrorDeclaration;
    /**
     * set the certificationInfo property
     * @param {string|Array<string>} certificationInfo
     * @return {Event} - the event instance
     */
    setCertificationInfo(certificationInfo: string | Array<string>): Event;
    /**
     * Getter for the certificationInfo property
     * @return {string|Array<string>} - the certificationInfo
     */
    getCertificationInfo(): string | Array<string>;
    /** ************     NOT COMMON TO ALL EVENTS    ********************** */
    /**
     * Add the epc to the "epcList" field
     * @param {string} epc - the epc to add (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return {Event} - the event instance
     */
    addEPC(epc: string): Event;
    /**
     * Add each epc to the "epcList" field
     * @param {Array<string>} epcList - the epcs to add
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return {Event} - the event instance
     */
    addEPCList(epcList: Array<string>): Event;
    /**
     * Clear the epc list
     * @return {Event} - the event instance
     */
    clearEPCList(): Event;
    /**
     * Remove an epc from the "epcList" field
     * @param {string} epc - the epc to remove (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return {Event} - the event instance
     */
    removeEPC(epc: string): Event;
    epcList: any;
    /**
     * Remove each epc from the "epcList" field
     * @param {Array<string>} epcList - the epcs to remove
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return {Event} - the event instance
     */
    removeEPCList(epcList: Array<string>): Event;
    /**
     * Getter for the epcList property
     * @return {Array<string>} - the epcList
     */
    getEPCList(): Array<string>;
    /**
     * Add the quantity to the "quantityList" field
     * @param {QuantityElement} quantity - the quantity to add
     * @return {Event} - the event instance
     */
    addQuantity(quantity: QuantityElement): Event;
    /**
     * Add each quantity to the "quantityList" field
     * @param {Array<QuantityElement>} quantityList - the quantities to add
     * @return {Event} - the event instance
     */
    addQuantityList(quantityList: Array<QuantityElement>): Event;
    /**
     * Clear the quantity list
     * @return {Event} - the event instance
     */
    clearQuantityList(): Event;
    /**
     * Remove a quantity from the "quantityList" field
     * @param {QuantityElement} quantity - the quantity to remove
     * @return {Event} - the event instance
     */
    removeQuantity(quantity: QuantityElement): Event;
    quantityList: any;
    /**
     * Remove each quantity from the "quantityList" field
     * @param {Array<QuantityElement>} quantityList - the quantities to remove
     * @return {Event} - the event instance
     */
    removeQuantityList(quantityList: Array<QuantityElement>): Event;
    /**
     * Getter for the quantityList property
     * @return {Array<QuantityElement>} - the quantityList
     */
    getQuantityList(): Array<QuantityElement>;
    /**
     * Set the action property
     * @param {string} action - string from {"OBSERVE", "ADD", "DELETE"}
     * @return {Event} - the event instance
     */
    setAction(action: string): Event;
    /**
     * Getter for the action property
     * @return {string} - the action
     */
    getAction(): string;
    /**
     * Set the bizStep property
     * @param {string} bizStep - e.g bizsteps.accepting
     * @return {Event} - the event instance
     */
    setBizStep(bizStep: string): Event;
    /**
     * Getter for the bizStep property
     * @return {string} - the bizStep
     */
    getBizStep(): string;
    /**
     * Set the disposition property
     * @param {string} disposition - e.g dispositions.in_transit
     * @return {Event} - the event instance
     */
    setDisposition(disposition: string): Event;
    /**
     * Getter for the disposition property
     * @return {string} - the disposition
     */
    getDisposition(): string;
    /**
     * Set the persistentDisposition property
     * @param {PersistentDisposition} persistentDisposition
     * @return {Event} - the event instance
     */
    setPersistentDisposition(persistentDisposition: PersistentDisposition): Event;
    /**
     * Getter for the persistentDisposition property
     * @return {PersistentDisposition} - the persistentDisposition
     */
    getPersistentDisposition(): PersistentDisposition;
    /**
     * Set the readPoint property
     * @param {string|ReadPoint} readPoint id or readPoint instance
     * @return {Event} - the event instance
     */
    setReadPoint(readPoint: string | ReadPoint): Event;
    readPoint: ReadPoint;
    /**
     * Getter for the readPoint property
     * @return {ReadPoint} - the readPoint
     */
    getReadPoint(): ReadPoint;
    /**
     * Set the bizLocation property
     * @param {string|BizLocation} bizLocation instance or bizLocation id
     * @return {Event} - the event instance
     */
    setBizLocation(bizLocation: string | BizLocation): Event;
    bizLocation: BizLocation;
    /**
     * Getter for the bizLocation property
     * @return {BizLocation} - the bizLocation
     */
    getBizLocation(): BizLocation;
    /**
     * Add the bizTransaction to the "bizTransactionList" field
     * @param {BizTransactionElement} bizTransaction - the bizTransaction to add
     * @return {Event} - the event instance
     */
    addBizTransaction(bizTransaction: BizTransactionElement): Event;
    /**
     * Add each bizTransaction to the "bizTransactionList" field
     * @param {Array<BizTransactionElement>} bizTransactionList - the bizTransactions to add
     * @return {Event} - the event instance
     */
    addBizTransactionList(bizTransactionList: Array<BizTransactionElement>): Event;
    /**
     * Clear the bizTransaction list
     * @return {Event} - the event instance
     */
    clearBizTransactionList(): Event;
    /**
     * Remove a bizTransaction from the "bizTransactionList" field
     * @param {BizTransactionElement} bizTransaction - the bizTransaction to remove
     * @return {Event} - the event instance
     */
    removeBizTransaction(bizTransaction: BizTransactionElement): Event;
    bizTransactionList: any;
    /**
     * Remove each bizTransaction from the "bizTransactionList" field
     * @param {Array<BizTransactionElement>} bizTransactionList - the bizTransactions to remove
     * @return {Event} - the event instance
     */
    removeBizTransactionList(bizTransactionList: Array<BizTransactionElement>): Event;
    /**
     * Getter for the bizTransactionList property
     * @return {Array<BizTransactionElement>} - the bizTransactionList
     */
    getBizTransactionList(): Array<BizTransactionElement>;
    /**
     * Add the source to the "sourceList" field
     * @param {SourceElement} source - the source to add
     * @return {Event} - the event instance
     */
    addSource(source: SourceElement): Event;
    /**
     * Add each sourceElement to the "sourceList" field
     * @param {Array<SourceElement>} sourceList - the sourceElements to add
     * @return {Event} - the event instance
     */
    addSourceList(sourceList: Array<SourceElement>): Event;
    /**
     * Clear the source list
     * @return {Event} - the event instance
     */
    clearSourceList(): Event;
    /**
     * Remove a source from the "sourceList" field
     * @param {SourceElement} source - the source to remove
     * @return {Event} - the event instance
     */
    removeSource(source: SourceElement): Event;
    sourceList: any;
    /**
     * Remove each source from the "sourceList" field
     * @param {Array<SourceElement>} sourceList - the sources to remove
     * @return {Event} - the event instance
     */
    removeSourceList(sourceList: Array<SourceElement>): Event;
    /**
     * Getter for the sourceList property
     * @return {Array<SourceElement>} - the sourceList
     */
    getSourceList(): Array<SourceElement>;
    /**
     * Add the destination to the "destinationList" field
     * @param {DestinationElement} destination - the destination to add
     * @return {Event} - the event instance
     */
    addDestination(destination: DestinationElement): Event;
    /**
     * Add each destinationElement to the "destinationList" field
     * @param {Array<DestinationElement>} destinationList - the destinationElements to add
     * @return {Event} - the event instance
     */
    addDestinationList(destinationList: Array<DestinationElement>): Event;
    /**
     * Clear the destination list
     * @return {Event} - the event instance
     */
    clearDestinationList(): Event;
    /**
     * Remove a destination from the "destinationList" field
     * @param {DestinationElement} destination - the destination to remove
     * @return {Event} - the event instance
     */
    removeDestination(destination: DestinationElement): Event;
    destinationList: any;
    /**
     * Remove each destination from the "destinationList" field
     * @param {Array<DestinationElement>} destinationList - the destinations to remove
     * @return {Event} - the event instance
     */
    removeDestinationList(destinationList: Array<DestinationElement>): Event;
    /**
     * Getter for the destinationList property
     * @return {Array<DestinationElement>} - the destinationList
     */
    getDestinationList(): Array<DestinationElement>;
    /**
     * Add the sensorElement to the "sensorElementList" field
     * @param {SensorElement} sensorElement - the sensorElement to add
     * @return {Event} - the event instance
     */
    addSensorElement(sensorElement: SensorElement): Event;
    /**
     * Add each sensorElementElement to the "sensorElementList" field
     * @param {Array<SensorElement>} sensorElementList - the sensorElementElements to add
     * @return {Event} - the event instance
     */
    addSensorElementList(sensorElementList: Array<SensorElement>): Event;
    /**
     * Clear the sensorElement list
     * @return {Event} - the event instance
     */
    clearSensorElementList(): Event;
    /**
     * Remove a sensorElement from the "sensorElementList" field
     * @param {SensorElement} sensorElement - the sensorElement to remove
     * @return {Event} - the event instance
     */
    removeSensorElement(sensorElement: SensorElement): Event;
    sensorElementList: any;
    /**
     * Remove each sensorElement from the "sensorElementList" field
     * @param {Array<SensorElement>} sensorElementList - the sensorElements to remove
     * @return {Event} - the event instance
     */
    removeSensorElementList(sensorElementList: Array<SensorElement>): Event;
    /**
     * Getter for the sensorElementList property
     * @return {Array<SensorElement>} - the sensorElementList
     */
    getSensorElementList(): Array<SensorElement>;
    /**
     * Set the ilmd property
     * @param {Ilmd} ilmd object
     * @return {Event} - the event instance
     */
    setIlmd(ilmd: Ilmd): Event;
    /**
     * Getter for the ilmd property
     * @return {Ilmd} - the ilmd
     */
    getIlmd(): Ilmd;
    /**
     * Set the parentID property
     * @param {string} parentID
     * @return {Event} - the event instance
     */
    setParentId(parentID: string): Event;
    parentID: string;
    /**
     * Getter for the parentID property
     * @return {string} - the parentID
     */
    getParentId(): string;
    /**
     * Add the epc to the "childEPCs" field
     * @param {string} epc - the epc to add (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return {Event} - the event instance
     */
    addChildEPC(epc: string): Event;
    /**
     * Add each epc to the "childEPCs" field
     * @param {Array<string>} epcList - the epcs to add
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return {Event} - the event instance
     */
    addChildEPCList(epcList: Array<string>): Event;
    /**
     * Clear the childEPCs
     * @return {Event} - the event instance
     */
    clearChildEPCList(): Event;
    /**
     * Remove an epc from the "childEPCs" field
     * @param {string} epc - the epc to remove (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return {Event} - the event instance
     */
    removeChildEPC(epc: string): Event;
    childEPCs: any;
    /**
     * Remove each epc from the "childEPCs" field
     * @param {Array<string>} epcList - the epcs to remove
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return {Event} - the event instance
     */
    removeChildEPCList(epcList: Array<string>): Event;
    /**
     * Getter for the childEPCs property
     * @return {Array<string>} - the childEpcList
     */
    getChildEPCList(): Array<string>;
    /**
     * Add the quantity to the "childQuantityList" field
     * @param {QuantityElement} quantity - the quantity to add
     * @return {Event} - the event instance
     */
    addChildQuantity(quantity: QuantityElement): Event;
    /**
     * Add each quantity to the "childQuantityList" field
     * @param {Array<QuantityElement>} quantityList - the quantities to add
     * @return {Event} - the event instance
     */
    addChildQuantityList(quantityList: Array<QuantityElement>): Event;
    /**
     * Clear the childQuantityList
     * @return {Event} - the event instance
     */
    clearChildQuantityList(): Event;
    /**
     * Remove a quantity from the "childQuantityList" field
     * @param {QuantityElement} quantity - the quantity to remove
     * @return {Event} - the event instance
     */
    removeChildQuantity(quantity: QuantityElement): Event;
    childQuantityList: any;
    /**
     * Remove each quantity from the "childQuantityList" field
     * @param {Array<QuantityElement>} quantityList - the quantities to remove
     * @return {Event} - the event instance
     */
    removeChildQuantityList(quantityList: Array<QuantityElement>): Event;
    /**
     * Getter for the childQuantityList property
     * @return {Array<QuantityElement>} - the quantityList
     */
    getChildQuantityList(): Array<QuantityElement>;
    /**
     * Check if the EPCIS Event respects the rules of the standard defined in
     * src/schema/${EventType}.schema.json
     * @return {boolean} - true if the Event is valid
     */
    isValid(): boolean;
}
import Entity from "../Entity";
import ErrorDeclaration from "../model/ErrorDeclaration";
import QuantityElement from "../model/QuantityElement";
import PersistentDisposition from "../model/PersistentDisposition";
import ReadPoint from "../model/ReadPoint";
import BizLocation from "../model/BizLocation";
import BizTransactionElement from "../model/BizTransactionElement";
import SourceElement from "../model/SourceElement";
import DestinationElement from "../model/DestinationElement";
import SensorElement from "../model/sensor/SensorElement";
import Ilmd from "../model/Ilmd";
