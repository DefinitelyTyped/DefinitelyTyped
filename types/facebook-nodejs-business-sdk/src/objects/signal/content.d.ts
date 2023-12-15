import BusinessDataContent from '../businessdataapi/content';
import ServerContent from '../serverside/content';
/**
 * UserData represents the User Data Parameters(user_data) of Business Data API and Conversion API Request.
 */
export default class Content {
    _business_data_content: BusinessDataContent;
    _server_content: ServerContent;
    /**
     * @param {String} id Product Id of the Item.
     * @param {Number} quantity Quantity of the Item.
     * @param {Number} price Subtotal for the content/product.
     * @param {Number} item_price Price per unit of the content/product.
     * @param {String} title Title of the listed Item.
     * @param {String} description Product description used for the item.
     * @param {String} brand Brand of the item.
     * @param {String} category Category of the Item.
     * @param {String} delivery_category The type of delivery for a purchase event
     * @param {Number} tax Subtotal tax for the content/product.
     * @param {String} external_content_id Unique ID for the contents/products that are being involved in the customer interaction.
     */
    constructor(id: string, quantity: number, price: number, item_price: number, title: string, description: string, brand: string, category: string, delivery_category: string, tax: number, external_content_id: string);
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
     * @param id is a string representing the unique id for the product.
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
     * Gets the item price for the Product.
     * The item_price or price per unit of the product.
     * Example: '123.45'
     */
    get item_price(): number;
    /**
     * Sets the item price for the Content.
     * @param item_price The item_price or price per unit of the product.
     * Example: '123.45'
     */
    set item_price(item_price: number);
    /**
     * Sets the item price for the Content.
     * @param {Number} item_price The item_price or price per unit of the product.
     * Example: '123.45'
     */
    setItemPrice(item_price: number): Content;
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
     * @param title is a string representing listed title for the product.
     */
    setTitle(title: string): Content;
    /**
     * Gets the Description of the listed Item.
     * A string representing the Description for the product.
     */
    get description(): string;
    /**
     * Sets the Description of the listed Item.
     * @param description A string representing the Description for the product.
     */
    set description(description: string);
    /**
     * Sets the Product Description of the Item.
     * @param description is a string representing the description for the product.
     */
    setDescription(description: string): Content;
    /**
     * Gets the Brand of the listed Item.
     * A string representing the Brand for the product.
     */
    get brand(): string;
    /**
     * Sets the Brand of the listed Item.
     * @param brand A string representing the Brand for the product.
     */
    set brand(brand: string);
    /**
     * Sets the Brand of the Product.
     * @param brand is a string representing the Brand for the product.
     */
    setBrand(brand: string): Content;
    /**
     * Gets the Category of the listed Item.
     * A string representing the Category for the product.
     */
    get category(): string;
    /**
     * Sets the Category of the listed Item.
     * @param category A string representing the Category for the product.
     */
    set category(category: string);
    /**
     * Sets the Category of the Product.
     * @param category is a string representing the Category for the product.
     */
    setCategory(category: string): Content;
    /**
     * Gets the delivery category.
     */
    get delivery_category(): string;
    /**
     * Sets the type of delivery for a purchase event.
     * @param delivery_category The delivery category.
     */
    set delivery_category(delivery_category: string);
    /**
     * Sets the type of delivery for a purchase event.
     * @param {String} delivery_category The delivery category.
     */
    setDeliveryCategory(delivery_category: string): Content;
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
     * Sets the total tax of the Item.
     * @param {String} external_content_id The total tax for the products that are being involved in the customer interaction.
     */
    setExternalContentId(external_content_id: string): Content;
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
     * Gets the constructed content for Business Data API
     */
    get business_data_content(): BusinessDataContent;
    /**
     * Gets the constructed content for Conversion API
     */
    get server_content(): ServerContent;
}
