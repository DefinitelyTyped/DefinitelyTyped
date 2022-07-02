import { Price } from './price';

export interface SelectedVariant {
    group_id: string;
    group_name: string;
    option_id: string;
    option_name: string;
    price: Price;
}
