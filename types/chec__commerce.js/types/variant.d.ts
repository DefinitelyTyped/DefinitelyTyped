import { VariantOption } from './variant-option';

export interface Variant {
  id: string;
  name: string;
  options: VariantOption[];
}
