export default class SourceElement extends Entity {
    addExtension: () => never;
    removeExtension: () => never;
    /**
     * Set the source property
     * @return the source instance
     */
    setSource(source: string): SourceElement;
    /**
     * Getter for the source property
     */
    getSource(): string;
    /**
     * Set the type property
     * @return the source instance
     */
    setType(type: string): SourceElement;
    /**
     * Getter for the type property
     */
    getType(): string;
}
import Entity from "../Entity";
