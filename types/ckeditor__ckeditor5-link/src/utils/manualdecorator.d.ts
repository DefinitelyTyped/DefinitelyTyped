import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';

// tslint:disable-next-line:no-empty-interface
export default interface ManualDecorator extends Observable {}

/**
 * Helper class that stores manual decorators with observable {@link module:link/utils~ManualDecorator#value}
 * to support integration with the UI state. An instance of this class is a model with the state of individual manual decorators.
 * These decorators are kept as collections in {@link module:link/linkcommand~LinkCommand#manualDecorators}.
 */
export default class ManualDecorator implements Observable {
    /**
     * Creates a new instance of {@link module:link/utils~ManualDecorator}.
     */
    constructor(config: {
        id: string;
        label: string;
        attributes: Record<string, string>;
        defaultValue?: boolean | undefined;
        classes?: string | string[];
        styles?: Record<string, string>;
    });

    /**
     * A set of attributes added to downcasted data when the decorator is activated for a specific link.
     * Attributes should be added in a form of attributes defined in {@link module:engine/view/elementdefinition~ElementDefinition}.
     */
    readonly attributes: Record<string, string>;

    /**
     * The default value of manual decorator.
     */
    readonly defaultValue: boolean;

    /**
     * An ID of a manual decorator which is the name of the attribute in the model, for example: 'linkManualDecorator0'.
     */
    readonly id: string;

    /**
     * The label used in the user interface to toggle the manual decorator.
     */
    readonly label: string;

    /**
     * The value of the current manual decorator. It reflects its state from the UI.
     */
    get value(): boolean;
    protected set value(val: boolean);

    /**
     * A set of classes added to downcasted data when the decorator is activated for a specific link.
     * Classes should be added in a form of classes defined in {@link module:engine/view/elementdefinition~ElementDefinition}.
     */
    readonly classes: string | string[] | undefined;

    /**
     * A set of styles added to downcasted data when the decorator is activated for a specific link.
     * Styles should be added in a form of styles defined in {@link module:engine/view/elementdefinition~ElementDefinition}.
     */
    readonly styles: Record<string, string> | undefined;
}
