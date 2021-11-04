import { ProductAttributeOption } from './product-attribute-option';

export interface ProductAttribute {
    id: string;
    meta: any;
    name: string;
    value: string | ProductAttributeOption[] | null;
}
