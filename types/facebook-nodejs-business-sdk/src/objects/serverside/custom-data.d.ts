import Content from './content';
export default class CustomData {
    _value: number;
    _currency: string;
    _content_name: string;
    _content_category: string;
    _content_ids: string[];
    _contents: Content[];
    _content_type: string;
    _order_id: string;
    _predicted_ltv: number;
    _num_items: number;
    _search_string: string;
    _status: string;
    _item_number: string;
    _delivery_category: string;
    _custom_properties: Record<string, any>;
    constructor(
        value?: number,
        currency?: string,
        content_name?: string,
        content_category?: string,
        content_ids?: string[],
        contents?: Content[],
        content_type?: string,
        order_id?: string,
        predicted_ltv?: number,
        num_items?: number,
        search_string?: string,
        status?: string,
        item_number?: string,
        delivery_category?: string,
        custom_properties?: Record<string, any>,
    );
    get value(): number;
    set value(value: number);
    setValue(value: number): CustomData;
    get currency(): string;
    set currency(currency: string);
    setCurrency(currency: string): CustomData;
    get content_name(): string;
    set content_name(content_name: string);
    setContentName(content_name: string): CustomData;
    get content_category(): string;
    set content_category(content_category: string);
    setContentCategory(content_category: string): CustomData;
    get content_ids(): string[];
    set content_ids(content_ids: string[]);
    setContentIds(content_ids: string[]): CustomData;
    get contents(): Content[];
    set contents(contents: Content[]);
    setContents(contents: Content[]): CustomData;
    get content_type(): string;
    set content_type(content_type: string);
    setContentType(content_type: string): CustomData;
    get order_id(): string;
    set order_id(order_id: string);
    setOrderId(order_id: string): CustomData;
    get predicted_ltv(): number;
    set predicted_ltv(predicted_ltv: number);
    setPredictedLtv(predicted_ltv: number): CustomData;
    get num_items(): number;
    set num_items(num_items: number);
    setNumItems(num_items: number): CustomData;
    get search_string(): string;
    set search_string(search_string: string);
    setSearchString(search_string: string): CustomData;
    get item_number(): string;
    set item_number(item_number: string);
    setItemNumber(item_number: string): CustomData;
    get delivery_category(): string;
    set delivery_category(delivery_category: string);
    setDeliveryCategory(delivery_category: string): CustomData;
    get custom_properties(): Record<string, any>;
    set custom_properties(custom_properties: Record<string, any>);
    setCustomProperties(custom_properties: Record<string, any>): CustomData;
    get status(): string;
    set status(status: string);
    setStatus(status: string): CustomData;
    add_custom_property(key: string, value: string): void;
    normalize(): Record<string, any>;
}
