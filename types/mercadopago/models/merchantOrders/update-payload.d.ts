import { CreateMerchantOrderPayload, MerchantOrderItem } from './create-payload';

export interface  UpdateMerchantOrderItem extends Omit<MerchantOrderItem, 'id'> {
  /** /** Id do anúncio. */
  id: string;
}

export interface UpdateMerchantOrderPayload extends Omit<CreateMerchantOrderPayload, 'items'> {
  id: number | string;
  items?: UpdateMerchantOrderItem[] | undefined;
}
