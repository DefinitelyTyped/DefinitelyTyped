import BusinessDataCustomData from '../businessdataapi/custom-data';
import ServerCustomData from '../serverside/custom-data';
import SignalUserData from './user-data';
import SignalContent from './content';
export default class CustomData {
    _business_data_custom_data: BusinessDataCustomData;
    _server_custom_data: ServerCustomData;
    constructor(
        value: number,
        currency: string,
        content_name: string,
        content_category: string,
        content_ids: string[],
        contents: SignalContent[],
        content_type: string,
        order_id: string,
        predicted_ltv: number,
        num_items: number,
        search_string: string,
        status: string,
        item_number: string,
        delivery_category: string,
        custom_properties: Record<string, any>,
        shipping_contact: SignalUserData,
        billing_contact: SignalUserData,
        external_order_id: string,
        original_order_id: string,
        message: string,
    );
    get value(): number;
    set value(value: number);
    setValue(value: number): CustomData;
    get currency(): string;
    set currency(currency: string);
    setCurrency(currency: string): CustomData;
    get contents(): SignalContent[];
    set contents(contents: SignalContent[]);
    setContents(contents: SignalContent[]): CustomData;
    get order_id(): string;
    set order_id(order_id: string);
    setOrderId(order_id: string): CustomData;
    get status(): string;
    set status(status: string);
    setStatus(status: string): CustomData;
    get content_name(): string;
    set content_name(content_name: string);
    setContentName(content_name: string): CustomData;
    get content_category(): string;
    set content_category(content_category: string);
    setContentCategory(content_category: string): CustomData;
    get content_ids(): string[];
    set content_ids(content_ids: string[]);
    setContentIds(content_ids: string[]): CustomData;
    get content_type(): string;
    set content_type(content_type: string);
    setContentType(content_type: string): CustomData;
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
    add_custom_property(key: string, value: string): void;
    get shipping_contact(): SignalUserData;
    set shipping_contact(shipping_contact: SignalUserData);
    setShippingContact(shipping_contact: SignalUserData): CustomData;
    get billing_contact(): SignalUserData;
    set billing_contact(billing_contact: SignalUserData);
    setBillingContact(billing_contact: SignalUserData): CustomData;
    get external_order_id(): string;
    set external_order_id(external_order_id: string);
    setExternalOrderId(external_order_id: string): CustomData;
    get original_order_id(): string;
    set original_order_id(original_order_id: string);
    setOriginalOrderId(original_order_id: string): CustomData;
    get message(): string;
    set message(message: string);
    setMessage(message: string): CustomData;
    get business_data_custom_data(): BusinessDataCustomData;
    get server_custom_data(): ServerCustomData;
}
