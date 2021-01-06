import { Payment, Locale, OtherPaymentMethods } from './utils';
export default interface OmiseCard {
    /**
     * Set default configuration for form.
     *
     * This is a good place to set your public key.
     *
     * Buttons configured via the `configureButton` method will inherit this configuration.
     *
     * The form opened via the `open` method will also inherit this configuration.
     *
     * @see https://www.omise.co/omise-js#configure
     */
    configure: OmiseCardConfigure;
    /**
     * Set button-specific configuration for form.
     *
     * If button is located outside of form, include the configuration object key `submitFormTarget` to point to your form.
     *
     * @see https://www.omise.co/omise-js#configurebutton
     */
    configureButton: OmiseCardConfigureButton;
    /**
     * Attach set configurations to buttons that have been configured using `configureButton.`
     *
     * Once the configuration has been attached to all target buttons, clicking on the button should trigger the form.
     *
     * @see https://www.omise.co/omise-js#attach
     */
    attach: OmiseCardAttach;
    /**
     * Open the payment form.
     *
     * @see https://www.omise.co/omise-js#open
     */
    open: OmiseCardOpen;
}
export declare type OmiseCardConfigure = (config: OmiseCardConfiguration) => void;
export interface OmiseCardConfiguration {
    publicKey: string;
}
export declare type OmiseCardConfigureButton = (config: OmiseCardConfigureButtonConfig) => void;
export interface OmiseCardConfigureButtonConfig {
    selector: string;
    config?: Object;
}
export interface OmiseCardConfigureButtonConfig extends Object {
    publicKey: string;
    amount: number;
    frameLabel: string;
    submitLabel: string;
}
export declare type OmiseCardAttach = () => void;
export declare type OmiseCardOpen = (config: OmiseCardOpenConfig) => void;
export interface OmiseCardOpenConfig extends Object {
    amount: number;
    publicKey: string;
    buttonLabel?: string;
    currency?: string;
    defaultPaymentMethod?: Payment;
    frameDescription?: string;
    frameLabel?: string;
    hideAmount?: boolean;
    image?: string;
    locale?: Locale;
    location?: 'yes' | 'no';
    otherPaymentMethods?: OtherPaymentMethods;
    submitLabel?: string;
    submitFormTarget?: string;
    onCreateTokenSuccess: OmiseCardOnCreateTokenSuccess;
    onFormClosed: OmiseCardOnFormClosed;
}
export declare type OmiseCardOnCreateTokenSuccess = (nonce: string) => void;
export declare type OmiseCardOnFormClosed = () => void;
