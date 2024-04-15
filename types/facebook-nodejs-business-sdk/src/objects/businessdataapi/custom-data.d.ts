import Content from './content.js';
import UserData from './user-data.js';
/**
 * CustomData represents the Custom Data Parameters of a Business Data Event Request.
 */
export default class CustomData {
    _value: number;
    _currency: string;
    _contents: Content[];
    _order_id: string;
    _status: string;
    _shipping_contact: UserData;
    _billing_contact: UserData;
    _external_order_id: string;
    _original_order_id: string;
    _message: string;
    /**
     * @param {Number} value value of the order Eg: 123.45
     * @param {String} currency currency involved in the transaction Eg: usd
     * @param {Content[]} contents Array of Content Objects. Use {Content} class to define a content.
     * @param {String} order_id Unique id representing the order
     * @param {String} status Status of order
     * @param {String} shipping_contact Shipping contact information. User {UserData} class to define a contact.
     * @param {String} billing_contact Billing contact information. User {UserData} class to define a contact.
     * @param {String} external_order_id Unique ID representing the order, universal across multiple categories from the business
     * @param {String} original_order_id Original order id for refund. For Refund event only.
     * @param {String} message Reason for refund. For Refund event only.
     */
    constructor(value: number, currency: string, contents: Content[], order_id: string, status: string, shipping_contact: UserData, billing_contact: UserData, external_order_id: string, original_order_id: string, message: string);
    /**
     * Gets the total value of the order.
     * A numeric value associated with this event. This could be a monetary value or a value in some other metric.
     * Example: 142.54.
     */
    get value(): number;
    /**
     * Sets the value of the custom data.
     * @param value A numeric value associated with this event. This could be a monetary value or a value in some other metric.
     * Example: 142.54.
     */
    set value(value: number);
    /**
     * Sets the value of the custom data.
     * @param {Number} value A numeric value associated with this event. This could be a monetary value or a value in some other metric.
     * Example: 142.54.
     */
    setValue(value: number): CustomData;
    /**
     * Gets the currency for the custom data.
     * The currency for the value specified, if applicable. Currency must be a valid ISO 4217 three digit currency code.
     * Example: 'usd'
     */
    get currency(): string;
    /**
     * Sets the currency for the custom data.
     * @param currency The currency for the value specified, if applicable. Currency must be a valid ISO 4217 three digit currency code.
     * Example: 'usd'
     */
    set currency(currency: string);
    /**
     * Sets the currency for the custom data.
     * @param {String} currency The currency for the value specified, if applicable. Currency must be a valid ISO 4217 three digit currency code.
     * Example: 'usd'
     */
    setCurrency(currency: string): CustomData;
    /**
     * Gets the contents for the custom data.
     * An array of Content objects that contain the product IDs associated with the event plus information about the products.
     * Example: [{'id':'ABC123','quantity' :2,'price':5.99}, {'id':'XYZ789','quantity':2, 'price':9.99}]
     */
    get contents(): Content[];
    /**
     * Sets the contents for the custom data.
     * @param contents An array of Content objects that contain the product IDs associated with the event plus information about the products.
     * Example: [{'id':'ABC123','quantity' :2,'price':5.99}, {'id':'XYZ789','quantity':2, 'price':9.99}]
     */
    set contents(contents: Content[]);
    /**
     * Sets the contents for the custom data.
     * @param {Content[]} contents An array of Content objects that contain the product IDs associated with the event plus information about the products.
     * Example: [{'id':'ABC123','quantity' :2,'item_price':5.99}, {'id':'XYZ789','quantity':2, 'item_price':9.99}]
     */
    setContents(contents: Content[]): CustomData;
    /**
     * Gets the order id for the custom data.
     * order_id is the order ID for this transaction as a String.
     * Example: 'order1234'
     */
    get order_id(): string;
    /**
     * Sets the order_id for the custom data.
     * @param order_id The order ID for this transaction as a String.
     * Example: 'order1234'
     */
    set order_id(order_id: string);
    /**
     * Sets the order_id for the custom data.
     * @param {String} order_id The order ID for this transaction as a String.
     * Example: 'order1234'
     */
    setOrderId(order_id: string): CustomData;
    /**
     * Gets the status of order.
     * Status of the order, as a String.
     */
    get status(): string;
    /**
     * Gets the status of order.
     * @param status Status of the order, as a String.
     */
    set status(status: string);
    /**
     * Sets the status of the registration event.
     * @param {String} status Status of the registration event, as a String.
     */
    setStatus(status: string): CustomData;
    /**
     * Gets the shipping contact of the order.
     * An Object contains the user data of shipping contact. Use {UserData} to construct the object.
     */
    get shipping_contact(): UserData;
    /**
     * Sets the shipping contact of the order.
     * @param shipping_contact An Object contains the user data of shipping contact. Use {UserData} to construct the object.
     */
    set shipping_contact(shipping_contact: UserData);
    /**
     * Sets the shipping contact of the order.
     * @param {UserData} shipping_contact An Object contains the user data of shipping contact. Use {UserData} to construct the object.
     */
    setShippingContact(shipping_contact: UserData): CustomData;
    /**
     * Gets the billing contact of the order.
     * An Object contains the user data of billing contact. Use {UserData} to construct the object.
     */
    get billing_contact(): UserData;
    /**
     * Sets the billing contact of the order.
     * @param billing_contact An Object contains the user data of billing contact. Use {UserData} to construct the object.
     */
    set billing_contact(billing_contact: UserData);
    /**
     * Sets the billing contact of the order.
     * @param {UserData} billing_contact An Object contains the user data of billing contact. Use {UserData} to construct the object.
     */
    setBillingContact(billing_contact: UserData): CustomData;
    /**
     * Gets the unique id of the order.
     * Unique ID representing the order, universal across multiple categories from the business.
     */
    get external_order_id(): string;
    /**
     * Sets the unique id of the order.
     * @param external_order_id Unique ID representing the order, universal across multiple categories from the business.
     */
    set external_order_id(external_order_id: string);
    /**
     * Sets the unique id of the order.
     * @param {String} external_order_id Unique ID representing the order, universal across multiple categories from the business.
     */
    setExternalOrderId(external_order_id: string): CustomData;
    /**
     * Gets the unique id of the original order.
     * Original order id for refund. For Refund event only.
     */
    get original_order_id(): string;
    /**
     * Sets the unique id of the original order.
     * @param original_order_id Original order id for refund. For Refund event only.
     */
    set original_order_id(original_order_id: string);
    /**
     * Sets the unique id of the original order.
     * @param {String} original_order_id Original order id for refund. For Refund event only.
     */
    setOriginalOrderId(original_order_id: string): CustomData;
    /**
     * Gets the unique id of the original order.
     * Reason for refund. For Refund event only.
     */
    get message(): string;
    /**
     * Sets the unique id of the original order.
     * @param message Reason for refund. For Refund event only.
     */
    set message(message: string);
    /**
     * Sets the unique id of the original order.
     * @param {String} message Reason for refund. For Refund event only.
     */
    setMessage(message: string): CustomData;
    /**
     * Convert to Json object for api call
     */
    toJson(): Record<any, any>;
}
