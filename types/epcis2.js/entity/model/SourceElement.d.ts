export default class SourceElement extends Entity {
    addExtension: () => never;
    removeExtension: () => never;
    /**
     * Set the source property
     * @param {string} source
     * @return {SourceElement} - the source instance
     */
    setSource(source: string): SourceElement;
    /**
     * Getter for the source property
     * @return {string} - the source
     */
    getSource(): string;
    /**
     * Set the type property
     * @param {string} type
     * @return {SourceElement} - the source instance
     */
    setType(type: string): SourceElement;
    /**
     * Getter for the type property
     * @return {string} - the type
     */
    getType(): string;
}
import Entity from "../Entity";
