import Content from './content';
import UserData from './user-data';
export default class CustomData {
    _value: number;
    _currency: string;
    _contents: Content[];
    _order_id: string;
    _status: string;
    _shipping_contact: UserData;
    _billing_contact: UserData;
    _external_order_id: string;
    _original_order_id: string;
    _message: string;
    constructor(
        value: number,
        currency: string,
        contents: Content[],
        order_id: string,
        status: string,
        shipping_contact: UserData,
        billing_contact: UserData,
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
    get contents(): Content[];
    set contents(contents: Content[]);
    setContents(contents: Content[]): CustomData;
    get order_id(): string;
    set order_id(order_id: string);
    setOrderId(order_id: string): CustomData;
    get status(): string;
    set status(status: string);
    setStatus(status: string): CustomData;
    get shipping_contact(): UserData;
    set shipping_contact(shipping_contact: UserData);
    setShippingContact(shipping_contact: UserData): CustomData;
    get billing_contact(): UserData;
    set billing_contact(billing_contact: UserData);
    setBillingContact(billing_contact: UserData): CustomData;
    get external_order_id(): string;
    set external_order_id(external_order_id: string);
    setExternalOrderId(external_order_id: string): CustomData;
    get original_order_id(): string;
    set original_order_id(original_order_id: string);
    setOriginalOrderId(original_order_id: string): CustomData;
    get message(): string;
    set message(message: string);
    setMessage(message: string): CustomData;
    toJson(): Record<string, any>;
}
