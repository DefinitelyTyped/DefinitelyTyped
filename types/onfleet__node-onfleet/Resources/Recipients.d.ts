import { OnfleetMetadata } from '../metadata';

declare class Recipient {
  create(recipient: Recipient.CreateRecipientProps): Promise<Recipient.OnfleetRecipient>;
  get(queryOrId: string, queryKey?: Recipient.RecipientQueryKey): Promise<Recipient.OnfleetRecipient>;
  update(id: string, recipient: Partial<Recipient.CreateRecipientProps>): Promise<Recipient.OnfleetRecipient>;
}

declare namespace Recipient {
  type RecipientQueryKey = 'phone' | 'name';

  interface OnfleetRecipient {
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

  interface CreateRecipientProps {
    name: string;
    phone: string;
    metadata?: OnfleetMetadata[];
    notes?: string;
    skipSMSNotifications?: boolean;
    skipPhoneNumberValidation?: boolean;
  }
}
export = Recipient;
