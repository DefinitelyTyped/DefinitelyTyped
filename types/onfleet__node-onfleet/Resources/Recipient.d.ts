import { OnfleetMetadata } from '../metadata';

export class Recipient {
  create(recipient: CreateRecipientProps): Promise<OnfleetRecipient>;
  get(id: string): Promise<OnfleetRecipient>;
  get(queryValue: string, queryKey: RecipientQueryKey): Promise<OnfleetRecipient>;
  update(id: string, recipient: Partial<CreateRecipientProps>): Promise<OnfleetRecipient>;
}

export type RecipientQueryKey = 'phone' | 'name';

export interface OnfleetRecipient {
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

export interface CreateRecipientProps {
  name: string;
  phone: string;
  metadata?: OnfleetMetadata[];
  notes?: string;
  skipSMSNotifications?: boolean;
  skipPhoneNumberValidation?: boolean;
}
