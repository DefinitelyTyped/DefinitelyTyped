export default class BizTransactionElement extends Entity {
    addExtension: () => never;
    removeExtension: () => never;
    /**
     * Set the bizTransaction property
     * @param {string} bizTransaction
     * @return {BizTransactionElement} - the bizTransaction instance
     */
    setBizTransaction(bizTransaction: string): BizTransactionElement;
    /**
     * Getter for the type property
     * @return {string} - the bizTransaction
     */
    getBizTransaction(): string;
    /**
     * Set the type property
     * @param {string} type
     * @return {BizTransactionElement} - the bizTransaction instance
     */
    setType(type: string): BizTransactionElement;
    /**
     * Getter for the type property
     * @return {string} - the type
     */
    getType(): string;
}
import Entity from "../Entity";
