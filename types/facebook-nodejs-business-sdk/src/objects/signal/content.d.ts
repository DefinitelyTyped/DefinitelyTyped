import BusinessDataContent from '../businessdataapi/content';
import ServerContent from '../serverside/content';
export default class Content {
    _business_data_content: BusinessDataContent;
    _server_content: ServerContent;
    constructor(
        id: string,
        quantity: number,
        price: number,
        item_price: number,
        title: string,
        description: string,
        brand: string,
        category: string,
        delivery_category: string,
        tax: number,
        external_content_id: string,
    );
    get id(): string;
    set id(id: string);
    setId(id: string): Content;
    get quantity(): number;
    set quantity(quantity: number);
    setQuantity(quantity: number): Content;
    get item_price(): number;
    set item_price(item_price: number);
    setItemPrice(item_price: number): Content;
    get title(): string;
    set title(title: string);
    setTitle(title: string): Content;
    get description(): string;
    set description(description: string);
    setDescription(description: string): Content;
    get brand(): string;
    set brand(brand: string);
    setBrand(brand: string): Content;
    get category(): string;
    set category(category: string);
    setCategory(category: string): Content;
    get delivery_category(): string;
    set delivery_category(delivery_category: string);
    setDeliveryCategory(delivery_category: string): Content;
    get tax(): number;
    set tax(tax: number);
    setTax(tax: number): Content;
    get external_content_id(): string;
    set external_content_id(external_content_id: string);
    setExternalContentId(external_content_id: string): Content;
    get price(): number;
    set price(price: number);
    setPrice(price: number): Content;
    get business_data_content(): BusinessDataContent;
    get server_content(): ServerContent;
}
