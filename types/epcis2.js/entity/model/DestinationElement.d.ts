export default class DestinationElement extends Entity {
    addExtension: () => never;
    removeExtension: () => never;
    /**
     * Set the destination property
     * @param {string} destination
     * @return {DestinationElement} - the destination instance
     */
    setDestination(destination: string): DestinationElement;
    /**
     * Getter for the destination property
     * @return {string} - the destination
     */
    getDestination(): string;
    /**
     * Set the type property
     * @param {string} type
     * @return {DestinationElement} - the destination instance
     */
    setType(type: string): DestinationElement;
    /**
     * Getter for the type property
     * @return {string} - the type
     */
    getType(): string;
}
import Entity from "../Entity";
