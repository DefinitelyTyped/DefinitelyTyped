import { OnfleetMetadata, MatchMetadata } from '../metadata';

declare class Recipient {
  create(recipient: Recipient.CreateRecipientProps): Promise<Recipient.OnfleetRecipient>;
  get(queryOrId: string, queryKey?: Recipient.RecipientQueryKey): Promise<Recipient.OnfleetRecipient>;
  matchMetadata: MatchMetadata<Recipient.OnfleetRecipient['metadata']>;
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
    metadata?: OnfleetMetadata[] | undefined;
    notes?: string | undefined;
    skipSMSNotifications?: boolean | undefined;
    skipPhoneNumberValidation?: boolean | undefined;
  }
}
export = Recipient;
