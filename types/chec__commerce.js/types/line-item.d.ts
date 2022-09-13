import { Price } from './price';
import { SelectedVariant } from './selected-variant';
import { Variant } from './variant';
import { Asset } from './asset';

export interface LineItem {
    id: string;
    name: string;
    quantity: number;
    product_id: string;
    product_name: string;
    product_meta: any;
    sku: string;
    permalink: string;
    media: any; // todo
    selected_options: SelectedVariant[];
    variant?: Variant;
    price: Price;
    line_total: Price;
    image: Asset | null;
}
