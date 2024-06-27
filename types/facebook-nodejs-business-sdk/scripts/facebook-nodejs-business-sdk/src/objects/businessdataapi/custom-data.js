/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import Content from './content.js';
import UserData from './user-data.js';

/**
 * CustomData represents the Custom Data Parameters of a Business Data Event Request.
 */

export default class CustomData {

    _value: number;
    _currency: string;
    _contents: Array < Content > ;
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
     * @param {Array<Content>} contents Array of Content Objects. Use {Content} class to define a content.
     * @param {String} order_id Unique id representing the order
     * @param {String} status Status of order
     * @param {String} shipping_contact Shipping contact information. User {UserData} class to define a contact.
     * @param {String} billing_contact Billing contact information. User {UserData} class to define a contact.
     * @param {String} external_order_id Unique ID representing the order, universal across multiple categories from the business
     * @param {String} original_order_id Original order id for refund. For Refund event only.
     * @param {String} message Reason for refund. For Refund event only.
     */
    constructor(value: number, currency: string, contents: Array < Content > , order_id: string, status: string,
        shipping_contact: UserData, billing_contact: UserData, external_order_id: string, original_order_id: string, message: string) {
        this._value = value;
        this._currency = currency;
        this._contents = contents;
        this._order_id = order_id;
        this._status = status;
        this._shipping_contact = shipping_contact;
        this._billing_contact = billing_contact;
        this._external_order_id = external_order_id;
        this._original_order_id = original_order_id;
        this._message = message;
    }

    /**
     * Gets the total value of the order.
     * A numeric value associated with this event. This could be a monetary value or a value in some other metric.
     * Example: 142.54.
     */
    get value(): number {
        return this._value;
    }

    /**
     * Sets the value of the custom data.
     * @param value A numeric value associated with this event. This could be a monetary value or a value in some other metric.
     * Example: 142.54.
     */
    set value(value: number) {
        this._value = value;
    }

    /**
     * Sets the value of the custom data.
     * @param {Number} value A numeric value associated with this event. This could be a monetary value or a value in some other metric.
     * Example: 142.54.
     */
    setValue(value: number): CustomData {
        this._value = value;
        return this;
    }

    /**
     * Gets the currency for the custom data.
     * The currency for the value specified, if applicable. Currency must be a valid ISO 4217 three digit currency code.
     * Example: 'usd'
     */
    get currency(): string {
        return this._currency;
    }

    /**
     * Sets the currency for the custom data.
     * @param currency The currency for the value specified, if applicable. Currency must be a valid ISO 4217 three digit currency code.
     * Example: 'usd'
     */
    set currency(currency: string) {
        this._currency = currency;
    }

    /**
     * Sets the currency for the custom data.
     * @param {String} currency The currency for the value specified, if applicable. Currency must be a valid ISO 4217 three digit currency code.
     * Example: 'usd'
     */
    setCurrency(currency: string): CustomData {
        this._currency = currency;
        return this;
    }

    /**
     * Gets the contents for the custom data.
     * An array of Content objects that contain the product IDs associated with the event plus information about the products.
     * Example: [{'id':'ABC123','quantity' :2,'price':5.99}, {'id':'XYZ789','quantity':2, 'price':9.99}]
     */
    get contents(): Array < Content > {
        return this._contents;
    }

    /**
     * Sets the contents for the custom data.
     * @param contents An array of Content objects that contain the product IDs associated with the event plus information about the products.
     * Example: [{'id':'ABC123','quantity' :2,'price':5.99}, {'id':'XYZ789','quantity':2, 'price':9.99}]
     */
    set contents(contents: Array < Content > ) {
        this._contents = contents;
    }


    /**
     * Sets the contents for the custom data.
     * @param { Array< Content >} contents An array of Content objects that contain the product IDs associated with the event plus information about the products.
     * Example: [{'id':'ABC123','quantity' :2,'item_price':5.99}, {'id':'XYZ789','quantity':2, 'item_price':9.99}]
     */
    setContents(contents: Array < Content > ): CustomData {
        this._contents = contents;
        return this;
    }

    /**
     * Gets the order id for the custom data.
     * order_id is the order ID for this transaction as a String.
     * Example: 'order1234'
     */
    get order_id(): string {
        return this._order_id;
    }

    /**
     * Sets the order_id for the custom data.
     * @param order_id The order ID for this transaction as a String.
     * Example: 'order1234'
     */
    set order_id(order_id: string) {
        this._order_id = order_id;
    }

    /**
     * Sets the order_id for the custom data.
     * @param {String} order_id The order ID for this transaction as a String.
     * Example: 'order1234'
     */
    setOrderId(order_id: string): CustomData {
        this._order_id = order_id;
        return this;
    }

    /**
     * Gets the status of order.
     * Status of the order, as a String.
     */
    get status(): string {
        return this._status;
    }

    /**
     * Gets the status of order.
     * @param status Status of the order, as a String.
     */
    set status(status: string) {
        this._status = status;
    }

    /**
     * Sets the status of the registration event.
     * @param {String} status Status of the registration event, as a String.
     */
    setStatus(status: string): CustomData {
        this._status = status;
        return this;
    }

    /**
     * Gets the shipping contact of the order.
     * An Object contains the user data of shipping contact. Use {UserData} to construct the object.
     */
    get shipping_contact(): UserData {
        return this._shipping_contact;
    }

    /**
     * Sets the shipping contact of the order.
     * @param shipping_contact An Object contains the user data of shipping contact. Use {UserData} to construct the object.
     */
    set shipping_contact(shipping_contact: UserData) {
        this._shipping_contact = shipping_contact;
    }

    /**
     * Sets the shipping contact of the order.
     * @param {UserData} shipping_contact An Object contains the user data of shipping contact. Use {UserData} to construct the object.
     */
    setShippingContact(shipping_contact: UserData) : CustomData {
        this._shipping_contact = shipping_contact;
        return this;
    }

    /**
     * Gets the billing contact of the order.
     * An Object contains the user data of billing contact. Use {UserData} to construct the object.
     */
    get billing_contact(): UserData {
        return this._billing_contact;
    }

    /**
     * Sets the billing contact of the order.
     * @param billing_contact An Object contains the user data of billing contact. Use {UserData} to construct the object.
     */
    set billing_contact(billing_contact: UserData) {
        this._billing_contact = billing_contact;
    }

    /**
     * Sets the billing contact of the order.
     * @param {UserData} billing_contact An Object contains the user data of billing contact. Use {UserData} to construct the object.
     */
    setBillingContact(billing_contact: UserData): CustomData  {
        this._billing_contact = billing_contact;
        return this;
    }

    /**
     * Gets the unique id of the order.
     * Unique ID representing the order, universal across multiple categories from the business.
     */
    get external_order_id(): string {
        return this._external_order_id;
    }

    /**
     * Sets the unique id of the order.
     * @param external_order_id Unique ID representing the order, universal across multiple categories from the business.
     */
    set external_order_id(external_order_id: string) {
        this._external_order_id = external_order_id;
    }

    /**
     * Sets the unique id of the order.
     * @param {String} external_order_id Unique ID representing the order, universal across multiple categories from the business.
     */
    setExternalOrderId(external_order_id: string) : CustomData {
        this._external_order_id = external_order_id;
        return this;
    }

    /**
     * Gets the unique id of the original order.
     * Original order id for refund. For Refund event only.
     */
    get original_order_id(): string {
        return this._original_order_id;
    }

    /**
     * Sets the unique id of the original order.
     * @param original_order_id Original order id for refund. For Refund event only.
     */
    set original_order_id(original_order_id: string) {
        this._original_order_id = original_order_id;
    }

    /**
     * Sets the unique id of the original order.
     * @param {String} original_order_id Original order id for refund. For Refund event only.
     */
    setOriginalOrderId(original_order_id: string) : CustomData {
        this._original_order_id = original_order_id;
        return this;
    }

    /**
     * Gets the unique id of the original order.
     * Reason for refund. For Refund event only.
     */
    get message(): string {
        return this._message;
    }

    /**
     * Sets the unique id of the original order.
     * @param message Reason for refund. For Refund event only.
     */
    set message(message: string) {
        this._message = message;
    }

    /**
     * Sets the unique id of the original order.
     * @param {String} message Reason for refund. For Refund event only.
     */
    setMessage(message: string) : CustomData {
        this._message = message;
        return this;
    }

    /**
     * Convert to Json object for api call
     */
    toJson(): Object {
        const contents = this._contents ? this._contents.map(content => content.toJson()) : [];
        return {
            'value': this._value,
            'currency': this._currency,
            'contents': contents,
            'order_id': this._order_id,
            'status': this._status,
            'shipping_contact': this._shipping_contact.toJson(),
            'billing_contact': this._billing_contact.toJson(),
            'external_order_id': this._external_order_id,
            'original_order_id': this._original_order_id,
            'message': this._message,
        }
    }
}
