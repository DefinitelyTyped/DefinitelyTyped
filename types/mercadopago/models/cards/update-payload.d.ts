import { CreateCardPayload } from './create-payload';

export interface UpdateCardPayload extends CreateCardPayload {
  /** Card id */
  id: number | string;
}
