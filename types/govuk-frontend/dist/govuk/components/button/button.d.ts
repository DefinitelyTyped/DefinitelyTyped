import { ConfigurableComponent } from "../../common/configuration.js";

/**
 * JavaScript enhancements for the Button component
 */
export class Button extends ConfigurableComponent<ButtonConfig, HTMLElement> {
    /**
     * Name for the component used when initialising using data-module attributes.
     */
    static moduleName: string;

    /**
     * Button default config
     *
     * @see {@link ButtonConfig}
     * @constant
     */
    static defaults: ButtonConfig;

    /**
     * Button config schema
     *
     * @constant
     * @satisfies {Schema<ButtonConfig>}
     */
    static schema: Readonly<{
        properties: {
            preventDoubleClick: {
                type: "boolean";
            };
        };
    }>;

    /**
     * @param {Element | null} $root - HTML element to use for button
     * @param {ButtonConfig} [config] - Button config
     */
    constructor($root: Element | null, config?: ButtonConfig);
}

/**
 * Button config
 */
export interface ButtonConfig {
    /**
     * - Prevent accidental double
     * clicks on submit buttons from submitting forms multiple times.
     */
    preventDoubleClick?: boolean | undefined;
}
