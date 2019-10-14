import { OnfleetMetadata } from '../metadata';

export class Recipient {
  create(recipient: OnfleetRecipient): Promise<RecipientResult>;
  get(id: string): Promise<RecipientResult>;
  get(queryValue: string, queryKey: RecipientQueryKey): Promise<RecipientResult>;
  update(id: string, recipient: Partial<OnfleetRecipient>): Promise<RecipientResult>;
}

export type RecipientQueryKey = 'phone' | 'name';

export interface OnfleetRecipient {
  name: string;
  phone: string;
  metadata?: OnfleetMetadata[];
  notes?: string;
  skipSMSNotifications?: boolean;
  skipPhoneNumberValidation?: boolean;
}

export interface RecipientResult {
  id: string;
  metadata: OnfleetMetadata[];
  name: string;
  notes: string;
  organization: string;
  phone: string;
  skipSMSNotifications: boolean;
  timeCreated: number;
  timeLastModified: number;
}
