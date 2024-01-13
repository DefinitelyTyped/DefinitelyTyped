/**
 * Content is part of the Custom Data Parameters of a Business Data Event Request. Content can be used to set the item/product details added in the Custom Data.
 */
export default class Content {
    _id: string;
    _quantity: number;
    _price: number;
    _title: string;
    _tax: number;
    _external_content_id: string;
    /**
     * @param {String} id Product Id of the Item.
     * @param {Number} quantity Quantity of the Item.
     * @param {Number} price Subtotal for the content/product.
     * @param {String} title Title of the listed Item.
     * @param {Number} tax Subtotal tax for the content/product.
     * @param {String} external_content_id Unique ID for the contents/products that are being involved in the customer interaction.
     */
    constructor(id: string, quantity: number, price: number, title: string, tax: number, external_content_id: string);
    /**
     * Gets the Product Id of the Item.
     * A string representing the unique Id for the product.
     * Example: XYZ.
     */
    get id(): string;
    /**
     * Sets the Product Id of the Item.
     * @param id A string representing the unique Id for the product.
     * Example: XYZ.
     */
    set id(id: string);
    /**
     * Sets the Product Id of the Item.
     * @param {String} id is a string representing the unique id for the product.
     * Example: XYZ.
     */
    setId(id: string): Content;
    /**
     * Gets the quantity of the Item.
     * The number/quantity of the content that is being involved in the customer interaction.
     * Example: 5
     */
    get quantity(): number;
    /**
     * Sets the quantity of the Item.
     * @param quantity The number/quantity of the product that is being involved in the customer interaction.
     * Example: 5
     */
    set quantity(quantity: number);
    /**
     * Sets the quantity of the Content/Item.
     * @param {Number} quantity The number/quantity of the product that is being involved in the customer interaction.
     * Example: 5
     */
    setQuantity(quantity: number): Content;
    /**
     * Gets the total price of the Item.
     * The total price for the products that are being involved in the customer interaction.
     * Example: '123.45'
     */
    get price(): number;
    /**
     * Sets the total price of the Item.
     * @param price The total price for the products that are being involved in the customer interaction.
     * Example: '123.45'
     */
    set price(price: number);
    /**
     * Sets the total price of the Item.
     * @param {Number} price The total price for the products that are being involved in the customer interaction.
     * Example: '123.45'
     */
    setPrice(price: number): Content;
    /**
     * Gets the Title of the listed Item.
     * A string representing the Title for the product.
     */
    get title(): string;
    /**
     * Sets the Title of the listed Item.
     * @param title A string representing the Title for the product.
     */
    set title(title: string);
    /**
     * Sets the Title of the Item.
     * @param {String} title is a string representing listed title for the product.
     */
    setTitle(title: string): Content;
    /**
     * Gets the total tax of the Item.
     * The total tax for the products that are being involved in the customer interaction.
     * Example: 45.5
     */
    get tax(): number;
    /**
     * Sets the total tax of the Item.
     * @param tax The total tax for the products that are being involved in the customer interaction.
     * Example: 45.5
     */
    set tax(tax: number);
    /**
     * Sets the total tax of the Item.
     * @param {Number} tax The total tax for the products that are being involved in the customer interaction.
     * Example: 45.5
     */
    setTax(tax: number): Content;
    /**
     * Gets the external id for this order item
     * The external id for the products that are being involved in the customer interaction.
     */
    get external_content_id(): string;
    /**
     * Sets the external id for this order item
     * @param external_content_id The external id for the products that are being involved in the customer interaction.
     */
    set external_content_id(external_content_id: string);
    /**
     * Sets the external id for this order item
     * @param {String} external_content_id The external id for the products that are being involved in the customer interaction.
     */
    setExternalContentID(external_content_id: string): Content;
    /**
     * Convert to Json object for api call
     */
    toJson(): Record<any, any>;
}
