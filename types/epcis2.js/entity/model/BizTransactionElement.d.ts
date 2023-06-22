export default class BizTransactionElement extends Entity {
    addExtension: () => never;
    removeExtension: () => never;
    /**
     * Set the bizTransaction property
     * @param bizTransaction
     * @return the bizTransaction instance
     */
    setBizTransaction(bizTransaction: string): BizTransactionElement;
    /**
     * Getter for the type property
     * @return the bizTransaction
     */
    getBizTransaction(): string;
    /**
     * Set the type property
     * @param type
     * @return the bizTransaction instance
     */
    setType(type: string): BizTransactionElement;
    /**
     * Getter for the type property
     * @return the type
     */
    getType(): string;
}
import Entity from "../Entity";
