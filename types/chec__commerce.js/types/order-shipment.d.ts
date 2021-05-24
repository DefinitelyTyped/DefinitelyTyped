export interface OrderShipment {
    id: string;
    customer_reference: string;
    shipped_on: number;
    provider: string;
    provider_type: string;
    carrier: string;
    carrier_name: string;
    tracking_number: string;
    tracking_url: string;
    line_items: any; // todo
    created: number;
    metadata: any;
}
