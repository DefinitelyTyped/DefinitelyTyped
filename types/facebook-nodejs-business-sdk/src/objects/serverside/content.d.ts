/**
 * Content is part of the Custom Data Parameters of a Conversions API Event Request. Content can be used to set the item/product details added in the Custom Data.
 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/custom-data#contents}
 */
export default class Content {
    _id: string;
    _quantity: number;
    _item_price: number;
    _title: string;
    _description: string;
    _category: string;
    _brand: string;
    _delivery_category: string;
    /**
     * @param {String} id Product Id of the Item.
     * @param {Number} quantity Quantity of the Item.
     * @param {Number} item_price Price per unit of the content/product.
     * @param {String} title Title of the listed Item.
     * @param {String} description Product description used for the item.
     * @param {String} brand Brand of the item.
     * @param {String} category Category of the Item.
     * @param {String} delivery_category The type of delivery for a purchase event
     */
    constructor(id?: string, quantity?: number, item_price?: number, title?: string, description?: string, brand?: string, category?: string, delivery_category?: string);
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
     * Returns the normalized payload for the Content.
     * @returns {Object} normalized Content payload.
     */
    normalize(): Record<any, any>;
}
