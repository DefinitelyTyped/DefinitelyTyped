export interface OrderShipmentItem {
    id: string;
    shipping_method_id: string;
    line_item_id: string;
    product_id: string;
    shipping_description: string;
    provider: string;
    provider_type: string;
    product_name: string;
    variants: any; // todo
    status: string;
    quantity: number;
    quantity_fulfilled: number;
    quantity_remaining: number;
    last_updated: number;
    linked_shipments: string[];
}
