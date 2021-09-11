import { CreateCustomerPayload } from './create-payload.model';

export interface UpdateCustomerPayload extends CreateCustomerPayload {
  /** Customer's id. */
  id: string;
}
