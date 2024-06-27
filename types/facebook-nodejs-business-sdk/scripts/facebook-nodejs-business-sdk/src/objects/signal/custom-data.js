/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import BusinessDataCustomData from '../businessdataapi/custom-data';
import ServerCustomData from '../serverside/custom-data';
import SignalUserData from './user-data';
import SignalContent from './content';

import Utils from './utils';

/**
 * CustomData represents the Custom Data Parameters for both Conversion API and Business Data API.
 */
export default class CustomData {

    _business_data_custom_data: BusinessDataCustomData;
    _server_custom_data: ServerCustomData;

    /**
     * params both Business Data API & Conversion API consume
     * @param {Number} value value of the item Eg: 123.45
     * @param {String} currency currency involved in the transaction Eg: usd
     * @param {Array<SignalContent>} contents Array of Content Objects. Use {Content} class to define a content.
     * @param {String} order_id Unique id representing the order
     * @param {String} status Status of the registration in Registration event.
     *                        Use only with CompleteRegistration events for Conversion API.
     *                        Use only with Purchase or UpdateOrder events for Business Data API
     * params only Conversion API consumes
     * @param {String} content_name name of the Content Eg: lettuce
     * @param {String} content_category category of the content Eg: grocery
     * @param {Array<String>} content_ids list of content unique ids involved in the event
     * @param {String} content_type Type of the Content group or Product SKU
     * @param {Number} predicted_ltv Predicted LifeTime Value for the customer involved in the event
     * @param {Number} num_items Number of items involved
     * @param {String} search_string query string used for the Search event
     * @param {String} item_number The item number
     * @param {String} delivery_category The type of delivery for a purchase event
     * @param {Object} custom_properties Custom Properties to be added to the Custom Data
     * params only Business Data API consumes
     * @param {SignalUserData} shipping_contact Shipping contact information. User {UserData} class to define a contact.
     * @param {SignalUserData} billing_contact Billing contact information. User {UserData} class to define a contact.
     * @param {String} external_order_id Unique ID representing the order, universal across multiple categories from the business
     * @param {String} original_order_id Original order id for refund. For Refund event only.
     * @param {String} message Reason for refund. For Refund event only.
     */
    constructor(value: number, currency: string, content_name: string, content_category: string, content_ids: Array < string > , contents: Array < SignalContent > ,
        content_type: string, order_id: string, predicted_ltv: number, num_items: number, search_string: string, status: string, item_number: string,
        delivery_category: string, custom_properties: Object, shipping_contact: SignalUserData, billing_contact: SignalUserData, external_order_id: string, original_order_id: string, message: string) {

        const business_data_contents = contents != undefined ? contents.map(content => content.business_data_content) : [];
        const server_contents = contents != undefined ? contents.map(content => content.server_content) : [];
        const business_data_shipping_contact = shipping_contact != undefined ? shipping_contact.business_data_user_data : shipping_contact;
        const business_data_billing_contact = billing_contact != undefined ? billing_contact.business_data_user_data : billing_contact;

        this._business_data_custom_data = new BusinessDataCustomData(
            value,
            currency,
            business_data_contents,
            order_id,
            status,
            business_data_shipping_contact,
            business_data_billing_contact,
            external_order_id,
            original_order_id,
            message
        );
        this._server_custom_data = new ServerCustomData(
            value,
            currency,
            content_name,
            content_category,
            content_ids,
            server_contents,
            content_type,
            order_id,
            predicted_ltv,
            num_items,
            search_string,
            status,
            item_number,
            delivery_category,
            custom_properties
        );
    }

    /**
     * Gets the value of the custom data.
     * A numeric value associated with this event. This could be a monetary value or a value in some other metric.
     * Example: 142.54.
     */
    get value() {
        return Utils.constructResponse(this._server_custom_data.value, this._business_data_custom_data.value);
    }

    /**
     * Sets the value of the custom data.
     * @param value A numeric value associated with this event. This could be a monetary value or a value in some other metric.
     * Example: 142.54.
     */
    set value(value: number) {
        this._business_data_custom_data.value = value;
        this._server_custom_data.value = value;
    }

    /**
     * Sets the value of the custom data.
     * @param {Number} value A numeric value associated with this event. This could be a monetary value or a value in some other metric.
     * Example: 142.54.
     */
    setValue(value: number): CustomData {
        this._business_data_custom_data.value = value;
        this._server_custom_data.value = value;
        return this;
    }

    /**
     * Gets the currency for the custom data.
     * The currency for the value specified, if applicable. Currency must be a valid ISO 4217 three digit currency code.
     * Example: 'usd'
     */
    get currency() {
        return Utils.constructResponse(this._server_custom_data.currency, this._business_data_custom_data.currency);
    }

    /**
     * Sets the currency for the custom data.
     * @param currency The currency for the value specified, if applicable. Currency must be a valid ISO 4217 three digit currency code.
     * Example: 'usd'
     */
    set currency(currency: string) {
        this._business_data_custom_data.currency = currency;
        this._server_custom_data.currency = currency;
    }

    /**
     * Sets the currency for the custom data.
     * @param {String} currency The currency for the value specified, if applicable. Currency must be a valid ISO 4217 three digit currency code.
     * Example: 'usd'
     */
    setCurrency(currency: string): CustomData {
        this._business_data_custom_data.currency = currency;
        this._server_custom_data.currency = currency;
        return this;
    }

    /**
     * Gets the contents for the custom data.
     * An array of Content objects that contain the product IDs associated with the event plus information about the products. id, quantity, and item_price are available fields.
     * Example: [{'id':'ABC123','quantity' :2,'item_price':5.99}, {'id':'XYZ789','quantity':2, 'item_price':9.99}]
     */
    get contents() {
        return Utils.constructResponse(this._server_custom_data.contents, this._business_data_custom_data.contents);
    }

    /**
     * Sets the contents for the custom data.
     * @param contents An array of Content objects that contain the product IDs associated with the event plus information about the products. id, quantity, and item_price are available fields.
     * Example: [{'id':'ABC123','quantity' :2,'item_price':5.99}, {'id':'XYZ789','quantity':2, 'item_price':9.99}]
     */
    set contents(contents: Array < SignalContent > ) {
        const business_data_contents = contents.map(content => content.business_data_content);
        const server_contents = contents.map(content => content.server_content);
        this._business_data_custom_data.contents = business_data_contents;
        this._server_custom_data.contents = server_contents;
    }

    /**
     * Sets the contents for the custom data.
     * @param {Array<Content>} contents An array of Content objects that contain the product IDs associated with the event plus information about the products. id, quantity, and item_price are available fields.
     * Example: [{'id':'ABC123','quantity' :2,'item_price':5.99}, {'id':'XYZ789','quantity':2, 'item_price':9.99}]
     */
    setContents(contents: Array < SignalContent > ): CustomData {
        const business_data_contents = contents.map(content => content.business_data_content);
        const server_contents = contents.map(content => content.server_content);
        this._business_data_custom_data.contents = business_data_contents;
        this._server_custom_data.contents = server_contents;
        return this;
    }

    /**
     * Gets the order id for the custom data.
     * order_id is the order ID for this transaction as a String.
     * Example: 'order1234'
     */
    get order_id() {
        return Utils.constructResponse(this._server_custom_data.order_id, this._business_data_custom_data.order_id);
    }

    /**
     * Sets the order_id for the custom data.
     * @param order_id The order ID for this transaction as a String.
     * Example: 'order1234'
     */
    set order_id(order_id: string) {
        this._business_data_custom_data.order_id = order_id;
        this._server_custom_data.order_id = order_id;
    }

    /**
     * Sets the order_id for the custom data.
     * @param {String} order_id The order ID for this transaction as a String.
     * Example: 'order1234'
     */
    setOrderId(order_id: string): CustomData {
        this._business_data_custom_data.order_id = order_id;
        this._server_custom_data.order_id = order_id;
        return this;
    }

    /**
     * Status of the registration in Registration event or Status of the order in Purchase/UpdateOrder event.
     * - Used only with CompleteRegistration events for Conversion API.
     * - Used only with Purchase or UpdateOrder events for Business Data API
     */
    get status() {
        return Utils.constructResponse(this._server_custom_data.status, this._business_data_custom_data.status);
    }

    /**
     * Sets status of the registration in Registration event or status of the order in Purchase/UpdateOrder event.
     * - Used only with CompleteRegistration events for Conversion API.
     * - Used only with Purchase or UpdateOrder events for Business Data API
     * @param status status, as a String.
     */
    set status(status: string) {
        this._server_custom_data.status = status;
        this._business_data_custom_data.status = status;
    }

    /**
     * Sets status of the registration in Registration event or status of the order in Purchase/UpdateOrder event.
     * - Used only with CompleteRegistration events for Conversion API.
     * - Used only with Purchase or UpdateOrder events for Business Data API
     * @param {String} status status, as a String.
     */
    setStatus(status: string): CustomData {
        this._server_custom_data.status = status;
        this._business_data_custom_data.status = status;
        return this;
    }

    /**
     * Gets the content name for the custom data. The name of the page or product associated with the event.
     * The name of the page or product associated with the event.
     * Example: 'lettuce'
     */
    get content_name() {
        return Utils.constructResponse(this._server_custom_data.content_name, null);
    }

    /**
     * Sets the content name for the custom data.
     * @param content_name The name of the page or product associated with the event.
     * Example: 'lettuce'
     */
    set content_name(content_name: string) {
        this._server_custom_data.content_name = content_name;
    }

    /**
     * Sets the content name for the custom data.
     * @param content_name The name of the page or product associated with the event.
     * Example: 'lettuce'
     */
    setContentName(content_name: string): CustomData {
        this._server_custom_data.content_name = content_name;
        return this;
    }

    /**
     * Gets the content category for the custom data.
     * The category of the content associated with the event.
     * Example: 'grocery'
     */
    get content_category() {
        return Utils.constructResponse(this._server_custom_data.content_category, null);
    }

    /**
     * Sets the content_category for the custom data.
     * @param content_category The category of the content associated with the event.
     * Example: 'grocery'
     */
    set content_category(content_category: string) {
        this._server_custom_data.content_category = content_category;
    }

    /**
     * Sets the content_category for the custom data.
     * @param content_category The category of the content associated with the event.
     * Example: 'grocery'
     */
    setContentCategory(content_category: string): CustomData {
        this._server_custom_data.content_category = content_category;
        return this;
    }

    /**
     * Gets the content_ids for the custom data.
     * The content IDs associated with the event, such as product SKUs for items in an AddToCart, represented as Array of string.
     * If content_type is a product, then your content IDs must be an array with a single string value. Otherwise, this array can contain any number of string values.
     * Example: ['ABC123', 'XYZ789']
     */
    get content_ids() {
        return Utils.constructResponse(this._server_custom_data.content_ids, null);
    }

    /**
     * Sets the content_ids for the custom data.
     * @param content_ids The content IDs associated with the event, such as product SKUs for items in an AddToCart, represented as Array of string.
     * If content_type is a product, then your content IDs must be an array with a single string value. Otherwise, this array can contain any number of string values.
     * Example: ['ABC123', 'XYZ789']
     */
    set content_ids(content_ids: Array < string > ) {
        this._server_custom_data.content_ids = content_ids;
    }

    /**
     * Sets the content_ids for the custom data.
     * @param {Array} content_ids The content IDs associated with the event, such as product SKUs for items in an AddToCart, represented as Array of string.
     * If content_type is a product, then your content IDs must be an array with a single string value. Otherwise, this array can contain any number of string values.
     * Example: ['ABC123', 'XYZ789']
     */
    setContentIds(content_ids: Array < string > ): CustomData {
        this._server_custom_data.content_ids = content_ids;
        return this;
    }



    /**
     * Gets the content type for the custom data.
     * A String equal to either product or product_group. Set to product if the keys you send content_ids or contents represent products.
     * Set to product_group if the keys you send in content_ids represent product groups.
     */
    get content_type() {
        return Utils.constructResponse(this._server_custom_data.content_type, null);
    }

    /**
     * Sets the content type for the custom data.
     * A String equal to either product or product_group. Set to product if the keys you send content_ids or contents represent products.
     * Set to product_group if the keys you send in content_ids represent product groups.
     */
    set content_type(content_type: string) {
        this._server_custom_data.content_type = content_type;
    }

    /**
     * Sets the content type for the custom data.
     * @param {String} content_type A string equal to either product or product_group. Set to product if the keys you send content_ids or contents represent products.
     * Set to product_group if the keys you send in content_ids represent product groups.
     */
    setContentType(content_type: string): CustomData {
        this._server_custom_data.content_type = content_type;
        return this;
    }


    /**
     * Gets the predicted LifeTimeValue for the (user) in custom data.
     * The predicted lifetime value of a conversion event, as a String.
     * Example: '432.12'
     */
    get predicted_ltv() {
        return Utils.constructResponse(this._server_custom_data.predicted_ltv, null);
    }

    /**
     * Sets the predicted LifeTimeValue for the custom data.
     * @param predicted_ltv The predicted lifetime value of a conversion event, as a String.
     * Example: '432.12'
     */
    set predicted_ltv(predicted_ltv: number) {
        this._server_custom_data.predicted_ltv = predicted_ltv;
    }

    /**
     * Sets the predicted LifeTimeValue for the custom data.
     * @param {Number} predicted_ltv The predicted lifetime value of a conversion event, as a String.
     * Example: '432.12'
     */
    setPredictedLtv(predicted_ltv: number): CustomData {
        this._server_custom_data.predicted_ltv = predicted_ltv;
        return this;
    }

    /**
     * Gets the number of items for the custom data.
     * The number of items that a user tries to buy during checkout. Use only with InitiateCheckout type events.
     * Example: 5
     */
    get num_items() {
        return Utils.constructResponse(this._server_custom_data.num_items, null);
    }

    /**
     * Sets the number of items for the custom data.
     * @param num_items The number of items that a user tries to buy during checkout. Use only with InitiateCheckout type events.
     * Example: 5
     */
    set num_items(num_items: number) {
        this._server_custom_data.num_items = num_items;
    }

    /**
     * Sets the number of items for the custom data.
     * @param {Number} num_items The number of items that a user tries to buy during checkout. Use only with InitiateCheckout type events.
     * Example: 5
     */
    setNumItems(num_items: number): CustomData {
        this._server_custom_data.num_items = num_items;
        return this;
    }

    /**
     * Gets the search string for the custom data.
     * A search query made by a user.Use only with Search events.
     * Eg: 'lettuce'
     */
    get search_string() {
        return Utils.constructResponse(this._server_custom_data.search_string, null);
    }

    /**
     * Sets the search string for the custom data.
     * @param {Number} search_string A search query made by a user.Use only with Search events.
     * Eg: 'lettuce'
     */
    set search_string(search_string: string) {
        this._server_custom_data.search_string = search_string;
    }

    /**
     * Sets the search string for the custom data.
     * @param search_string A search query made by a user.Use only with Search events.
     * Eg: 'lettuce'
     */
    setSearchString(search_string: string): CustomData {
        this._server_custom_data.search_string = search_string;
        return this;
    }

    /**
     * Gets the item number.
     */
    get item_number() {
        return Utils.constructResponse(this._server_custom_data.item_number, null);
    }

    /**
     * Sets the item number.
     * @param item_number The item number.
     */
    set item_number(item_number: string) {
        this._server_custom_data.item_number = item_number;
    }

    /**
     * Sets the item number.
     * @param {String} item_number The item number.
     */
    setItemNumber(item_number: string): CustomData {
        this._server_custom_data.item_number = item_number;
        return this;
    }

    /**
     * Gets the delivery category.
     */
    get delivery_category() {
        return Utils.constructResponse(this._server_custom_data.delivery_category, null);
    }

    /**
     * Sets the type of delivery for a purchase event.
     * @param delivery_category The delivery category.
     */
    set delivery_category(delivery_category: string) {
        this._server_custom_data.delivery_category = delivery_category;
    }

    /**
     * Sets the type of delivery for a purchase event.
     * @param {String} delivery_category The delivery category.
     */
    setDeliveryCategory(delivery_category: string): CustomData {
        this._server_custom_data.delivery_category = delivery_category;
        return this;
    }

    /**
     * Gets the custom properties to be included in the Custom Data.
     * If our predefined object properties don't suit your needs, you can include your own, custom properties. Custom properties can be used with both standard and custom events, and can help you further define custom audiences.
     * This behavior is the same for Server-Side API and Facebook Pixel.
     * @see {@link https://developers.facebook.com/docs/marketing-api/server-side-api/parameters/custom-data#custom-properties}
     * Eg: '{ 'warehouse_location' : 'washington', 'package_size' : 'L'}'
     */
    get custom_properties() {
        return Utils.constructResponse(this._server_custom_data.custom_properties, null);
    }

    /**
     * Sets the custom properties to be included in the Custom Data.
     * If our predefined object properties don't suit your needs, you can include your own, custom properties. Custom properties can be used with both standard and custom events, and can help you further define custom audiences.
     * This behavior is the same for Server-Side API and Facebook Pixel.
     * @see {@link https://developers.facebook.com/docs/marketing-api/server-side-api/parameters/custom-data#custom-properties}
     * @param {Object} custom_properties custom properties property bag to be included in the Custom Data. Eg: '{ 'warehouse_location' : 'washington', 'package_size' : 'L'}'
     */
    set custom_properties(custom_properties: Object) {
        this._server_custom_data.custom_properties = custom_properties;
    }

    /**
     * Sets the search string for the custom data.
     * @param custom_properties A custom properties property bag to be included in the Custom Data.
     * If our predefined object properties don't suit your needs, you can include your own, custom properties. Custom properties can be used with both standard and custom events, and can help you further define custom audiences.
     * This behavior is the same for Server-Side API and Facebook Pixel.
     * @see {@link https://developers.facebook.com/docs/marketing-api/server-side-api/parameters/custom-data#custom-properties}
     * Eg: '{ 'warehouse_location' : 'washington', 'package_size' : 'L'}'
     * * @returns {Object} custom_properties property bag.
     */
    setCustomProperties(custom_properties: Object): CustomData {
        this._server_custom_data.custom_properties = custom_properties;
        return this;
    }

    /**
     * Adds the custom property (key, value) to the custom property bag.
     * @param {string} key The Key for the property to be added.
     * @param {string} value The Value for the property to be added.
     */
    add_custom_property(key: string, value: string) {

        if (this._server_custom_data.custom_properties == null) {
            this._server_custom_data.custom_properties = {};
        }

        this._server_custom_data.custom_properties[key] = value;
    }

    /**
     * Gets the shipping_contact for Purchase/Update Order event.
     * shipping_contact of an order
     */
    get shipping_contact() {
        return Utils.constructResponse(null, this._business_data_custom_data.shipping_contact);
    }

    /**
     * Sets the shipping_contact for Purchase/Update Order event.
     * @param shipping_contact shipping contact of an order, use {SignalUserData} to build
     */
    set shipping_contact(shipping_contact: SignalUserData) {
        this._business_data_custom_data.shipping_contact = shipping_contact.business_data_user_data;
    }

    /**
     * Sets the shipping_contact for Purchase/Update Order event.
     * @param {SignalUserData} shipping_contact shipping contact of an order, use {SignalUserData} to build
     */
    setShippingContact(shipping_contact: SignalUserData): CustomData {
        this._business_data_custom_data.shipping_contact = shipping_contact.business_data_user_data;
        return this;
    }

    /**
     * Gets the billing_contact for Purchase/Update Order event.
     * billing_contact of an order
     */
    get billing_contact() {
        return Utils.constructResponse(null, this._business_data_custom_data.billing_contact);
    }

    /**
     * Sets the billing_contact for Purchase/Update Order event.
     * @param billing_contact billing contact of an order, use {SignalUserData} to build
     */
    set billing_contact(billing_contact: SignalUserData) {
        this._business_data_custom_data.billing_contact = billing_contact.business_data_user_data;
    }

    /**
     * Sets the billing_contact for Purchase/Update Order event.
     * @param {SignalUserData} billing_contact billing contact of an order, use {SignalUserData} to build
     */
    setBillingContact(billing_contact: SignalUserData): CustomData {
        this._business_data_custom_data.billing_contact = billing_contact.business_data_user_data;
        return this;
    }

    /**
     * Gets the unique id of the order.
     * Unique ID representing the order, universal across multiple categories from the business.
     */
    get external_order_id(): string {
        return Utils.constructResponse(null, this._business_data_custom_data.external_order_id);
    }

    /**
     * Sets the unique id of the order.
     * @param external_order_id Unique ID representing the order, universal across multiple categories from the business.
     */
    set external_order_id(external_order_id: string) {
        this._business_data_custom_data.external_order_id = external_order_id;
    }

    /**
     * Sets the unique id of the order.
     * @param {String} external_order_id Unique ID representing the order, universal across multiple categories from the business.
     */
    setExternalOrderId(external_order_id: string): CustomData {
        this._business_data_custom_data.external_order_id = external_order_id;
        return this;
    }

    /**
     * Gets the unique id of the original order.
     * Original order id for refund. For Refund event only.
     */
    get original_order_id(): string {
        return Utils.constructResponse(null, this._business_data_custom_data.original_order_id);
    }

    /**
     * Sets the unique id of the original order.
     * @param original_order_id Original order id for refund. For Refund event only.
     */
    set original_order_id(original_order_id: string) {
        this._business_data_custom_data.original_order_id = original_order_id;
    }

    /**
     * Sets the unique id of the original order.
     * @param {String} original_order_id Original order id for refund. For Refund event only.
     */
    setOriginalOrderId(original_order_id: string): CustomData {
        this._business_data_custom_data.original_order_id = original_order_id;
        return this;
    }

    /**
     * Gets the unique id of the original order.
     * Reason for refund. For Refund event only.
     */
    get message(): string {
        return Utils.constructResponse(null, this._business_data_custom_data.message);
    }

    /**
     * Sets the unique id of the original order.
     * @param message Reason for refund. For Refund event only.
     */
    set message(message: string) {
        this._business_data_custom_data.message = message;
    }

    /**
     * Sets the unique id of the original order.
     * @param {String} message Reason for refund. For Refund event only.
     */
    setMessage(message: string): CustomData {
        this._business_data_custom_data.message = message;
        return this;
    }

    /**
     * Gets the constructed custom data for Business Data API
     */
    get business_data_custom_data() {
        return this._business_data_custom_data;
    }

    /**
     * Gets the constructed custom data for Business Data API
     */
    get server_custom_data() {
        return this._server_custom_data;
    }
}
