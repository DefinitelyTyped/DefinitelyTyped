export default class Content {
    _id: string;
    _quantity: number;
    _item_price: number;
    _title: string;
    _description: string;
    _category: string;
    _brand: string;
    _delivery_category: string;
    constructor(
        id?: string,
        quantity?: number,
        item_price?: number,
        title?: string,
        description?: string,
        brand?: string,
        category?: string,
        delivery_category?: string
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
    normalize(): Record<string, any>;
}
