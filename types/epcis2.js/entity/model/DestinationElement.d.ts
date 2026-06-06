export default class DestinationElement extends Entity {
    addExtension: () => never;
    removeExtension: () => never;
    /**
     * Set the destination property
     * @param destination
     * @return the destination instance
     */
    setDestination(destination: string): DestinationElement;
    /**
     * Getter for the destination property
     * @return - the destination
     */
    getDestination(): string;
    /**
     * Set the type property
     * @param type
     * @return the destination instance
     */
    setType(type: string): DestinationElement;
    /**
     * Getter for the type property
     * @return - the type
     */
    getType(): string;
}
import Entity from "../Entity";
