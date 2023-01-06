export default class TransformationEvent extends Event {
    type: string;
    /**
     * Set the transformationID property
     * @param {string} id
     * @return {Event} - the event instance
     */
    setTransformationID(id: string): Event;
    /**
     * Getter for the transformationID property
     * @return {string} - the transformationID
     */
    getTransformationID(): string;
    /**
     * Add the epc to the "inputEPCList" field
     * @param {string} epc - the epc to add (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return {TransformationEvent} - the transformation event instance
     */
    addInputEPC(epc: string): TransformationEvent;
    /**
     * Add each epc to the "inputEPCList" field
     * @param {Array<string>} epcList - the epcs to add
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return {TransformationEvent} - the transformation event instance
     */
    addInputEPCList(epcList: Array<string>): TransformationEvent;
    /**
     * Clear the inputEPCList list
     * @return {TransformationEvent} - the transformation event instance
     */
    clearInputEPCList(): TransformationEvent;
    /**
     * Remove an epc from the "inputEPCList" field
     * @param {string} epc - the epc to remove (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return {TransformationEvent} - the transformation event instance
     */
    removeInputEPC(epc: string): TransformationEvent;
    inputEPCList: any;
    /**
     * Remove each epc from the "inputEPCList" field
     * @param {Array<string>} epcList - the epcs to remove
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return {TransformationEvent} - the transformation event instance
     */
    removeInputEPCList(epcList: Array<string>): TransformationEvent;
    /**
     * Getter for the inputEPCList property
     * @return {Array<string>} - the epcList
     */
    getInputEPCList(): Array<string>;
    /**
     * Add the epc to the "inputEPCList" field
     * @param {string} epc - the epc to add (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return {TransformationEvent} - the transformation event instance
     */
    addOutputEPC(epc: string): TransformationEvent;
    /**
     * Add each epc to the "outputEPCList" field
     * @param {Array<string>} epcList - the epcs to add
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return {TransformationEvent} - the transformation event instance
     */
    addOutputEPCList(epcList: Array<string>): TransformationEvent;
    /**
     * Clear the outputEPCList list
     * @return {TransformationEvent} - the transformation event instance
     */
    clearOutputEPCList(): TransformationEvent;
    /**
     * Remove an epc from the "outputEPCList" field
     * @param {string} epc - the epc to remove (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return {TransformationEvent} - the transformation event instance
     */
    removeOutputEPC(epc: string): TransformationEvent;
    outputEPCList: any;
    /**
     * Remove each epc from the "outputEPCList" field
     * @param {Array<string>} epcList - the epcs to remove
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return {TransformationEvent} - the transformation event instance
     */
    removeOutputEPCList(epcList: Array<string>): TransformationEvent;
    /**
     * Getter for the outputEPCList property
     * @return {Array<string>} - the epcList
     */
    getOutputEPCList(): Array<string>;
    /**
     * Add the quantity to the "inputQuantityList" field
     * @param {QuantityElement} quantity - the quantity to add
     * @return {TransformationEvent} - the transformation event instance
     */
    addInputQuantity(quantity: QuantityElement): TransformationEvent;
    /**
     * Add each quantity to the "inputQuantityList" field
     * @param {Array<QuantityElement>} quantityList - the quantities to add
     * @return {TransformationEvent} - the transformation event instance
     */
    addInputQuantityList(quantityList: Array<QuantityElement>): TransformationEvent;
    /**
     * Clear the inputQuantityList
     * @return {TransformationEvent} - the transformation event instance
     */
    clearInputQuantityList(): TransformationEvent;
    /**
     * Remove a quantity from the "inputQuantityList" field
     * @param {QuantityElement} quantity - the quantity to remove
     * @return {TransformationEvent} - the transformation event instance
     */
    removeInputQuantity(quantity: QuantityElement): TransformationEvent;
    inputQuantityList: any;
    /**
     * Remove each quantity from the "inputQuantityList" field
     * @param {Array<QuantityElement>} quantityList - the quantities to remove
     * @return {TransformationEvent} - the transformation event instance
     */
    removeInputQuantityList(quantityList: Array<QuantityElement>): TransformationEvent;
    /**
     * Getter for the inputQuantityList property
     * @return {TransformationEvent} - the transformation event instance
     */
    getInputQuantityList(): TransformationEvent;
    /**
     * Add the quantity to the "outputQuantityList" field
     * @param {QuantityElement} quantity - the quantity to add
     * @return {TransformationEvent} - the transformation event instance
     */
    addOutputQuantity(quantity: QuantityElement): TransformationEvent;
    /**
     * Add each quantity to the "outputQuantityList" field
     * @param {Array<QuantityElement>} quantityList - the quantities to add
     * @return {TransformationEvent} - the transformation event instance
     */
    addOutputQuantityList(quantityList: Array<QuantityElement>): TransformationEvent;
    /**
     * Clear the outputQuantityList
     * @return {TransformationEvent} - the transformation event instance
     */
    clearOutputQuantityList(): TransformationEvent;
    /**
     * Remove a quantity from the "outputQuantityList" field
     * @param {QuantityElement} quantity - the quantity to remove
     * @return {TransformationEvent} - the transformation event instance
     */
    removeOutputQuantity(quantity: QuantityElement): TransformationEvent;
    outputQuantityList: any;
    /**
     * Remove each quantity from the "outputQuantityList" field
     * @param {Array<QuantityElement>} quantityList - the quantities to remove
     * @return {TransformationEvent} - the transformation event instance
     */
    removeOutputQuantityList(quantityList: Array<QuantityElement>): TransformationEvent;
    /**
     * Getter for the outputQuantityList property
     * @return {TransformationEvent} - the transformation event instance
     */
    getOutputQuantityList(): TransformationEvent;
}
import Event from "./Event";
import QuantityElement from "../model/QuantityElement";
