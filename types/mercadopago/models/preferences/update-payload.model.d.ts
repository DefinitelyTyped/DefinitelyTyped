import { CreatePreferencePayload } from './create-payload.model';

export interface UpdatePreferencePayload extends CreatePreferencePayload {
  /** Preference id. */
  id: string;
}
