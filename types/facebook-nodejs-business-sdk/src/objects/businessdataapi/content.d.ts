export default class Content {
    _id: string;
    _quantity: number;
    _price: number;
    _title: string;
    _tax: number;
    _external_content_id: string;
    constructor(id: string, quantity: number, price: number, title: string, tax: number, external_content_id: string);
    get id(): string;
    set id(id: string);
    setId(id: string): Content;
    get quantity(): number;
    set quantity(quantity: number);
    setQuantity(quantity: number): Content;
    get price(): number;
    set price(price: number);
    setPrice(price: number): Content;
    get title(): string;
    set title(title: string);
    setTitle(title: string): Content;
    get tax(): number;
    set tax(tax: number);
    setTax(tax: number): Content;
    get external_content_id(): string;
    set external_content_id(external_content_id: string);
    setExternalContentID(external_content_id: string): Content;
    toJson(): Record<string, any>;
}
