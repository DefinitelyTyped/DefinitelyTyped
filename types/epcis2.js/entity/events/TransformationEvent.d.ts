export default class TransformationEvent extends Event {
    type: string;
    /**
     * Set the transformationID property
     * @param id
     * @return the event instance
     */
    setTransformationID(id: string): TransformationEvent;
    /**
     * Getter for the transformationID property
     * @return - the transformationID
     */
    getTransformationID(): string;
    /**
     * Add the epc to the "inputEPCList" field
     * @param epc - the epc to add (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return the transformation event instance
     */
    addInputEPC(epc: string): TransformationEvent;
    /**
     * Add each epc to the "inputEPCList" field
     * @param epcList - the epcs to add
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return the transformation event instance
     */
    addInputEPCList(epcList: string[]): TransformationEvent;
    /**
     * Clear the inputEPCList list
     * @return the transformation event instance
     */
    clearInputEPCList(): TransformationEvent;
    /**
     * Remove an epc from the "inputEPCList" field
     * @param epc - the epc to remove (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return the transformation event instance
     */
    removeInputEPC(epc: string): TransformationEvent;
    inputEPCList: any;
    /**
     * Remove each epc from the "inputEPCList" field
     * @param epcList - the epcs to remove
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return the transformation event instance
     */
    removeInputEPCList(epcList: string[]): TransformationEvent;
    /**
     * Getter for the inputEPCList property
     * @return - the epcList
     */
    getInputEPCList(): string[];
    /**
     * Add the epc to the "inputEPCList" field
     * @param epc - the epc to add (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return the transformation event instance
     */
    addOutputEPC(epc: string): TransformationEvent;
    /**
     * Add each epc to the "outputEPCList" field
     * @param epcList - the epcs to add
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return the transformation event instance
     */
    addOutputEPCList(epcList: string[]): TransformationEvent;
    /**
     * Clear the outputEPCList list
     * @return the transformation event instance
     */
    clearOutputEPCList(): TransformationEvent;
    /**
     * Remove an epc from the "outputEPCList" field
     * @param epc - the epc to remove (e.g urn:epc:id:sgtin:xxxxxx.xxxxx.xxx)
     * @return the transformation event instance
     */
    removeOutputEPC(epc: string): TransformationEvent;
    outputEPCList: any;
    /**
     * Remove each epc from the "outputEPCList" field
     * @param epcList - the epcs to remove
     * (e.g [urn:epc:id:sgtin:xxxxxx.xxxxx.xxx, urn:epc:id:sgtin:xxxxxx.xxxxx.xxy])
     * @return the transformation event instance
     */
    removeOutputEPCList(epcList: string[]): TransformationEvent;
    /**
     * Getter for the outputEPCList property
     * @return - the epcList
     */
    getOutputEPCList(): string[];
    /**
     * Add the quantity to the "inputQuantityList" field
     * @param quantity - the quantity to add
     * @return the transformation event instance
     */
    addInputQuantity(quantity: QuantityElement): TransformationEvent;
    /**
     * Add each quantity to the "inputQuantityList" field
     * @param quantityList - the quantities to add
     * @return the transformation event instance
     */
    addInputQuantityList(quantityList: QuantityElement[]): TransformationEvent;
    /**
     * Clear the inputQuantityList
     * @return the transformation event instance
     */
    clearInputQuantityList(): TransformationEvent;
    /**
     * Remove a quantity from the "inputQuantityList" field
     * @param quantity - the quantity to remove
     * @return the transformation event instance
     */
    removeInputQuantity(quantity: QuantityElement): TransformationEvent;
    inputQuantityList: any;
    /**
     * Remove each quantity from the "inputQuantityList" field
     * @param quantityList - the quantities to remove
     * @return the transformation event instance
     */
    removeInputQuantityList(quantityList: QuantityElement[]): TransformationEvent;
    /**
     * Getter for the inputQuantityList property
     * @return the transformation event instance
     */
    getInputQuantityList(): TransformationEvent;
    /**
     * Add the quantity to the "outputQuantityList" field
     * @param quantity - the quantity to add
     * @return the transformation event instance
     */
    addOutputQuantity(quantity: QuantityElement): TransformationEvent;
    /**
     * Add each quantity to the "outputQuantityList" field
     * @param quantityList - the quantities to add
     * @return the transformation event instance
     */
    addOutputQuantityList(quantityList: QuantityElement[]): TransformationEvent;
    /**
     * Clear the outputQuantityList
     * @return the transformation event instance
     */
    clearOutputQuantityList(): TransformationEvent;
    /**
     * Remove a quantity from the "outputQuantityList" field
     * @param quantity - the quantity to remove
     * @return the transformation event instance
     */
    removeOutputQuantity(quantity: QuantityElement): TransformationEvent;
    outputQuantityList: any;
    /**
     * Remove each quantity from the "outputQuantityList" field
     * @param quantityList - the quantities to remove
     * @return the transformation event instance
     */
    removeOutputQuantityList(quantityList: QuantityElement[]): TransformationEvent;
    /**
     * Getter for the outputQuantityList property
     * @return the transformation event instance
     */
    getOutputQuantityList(): TransformationEvent;
}
import QuantityElement from "../model/QuantityElement";
import Event from "./Event";
