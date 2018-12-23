interface IntercomUserIdId { intercom_user_id: string }
interface UserIdId { user_id: string }
interface EmailIdId { email: string }

export type EventIdentifier = IntercomUserIdId | UserIdId | EmailIdId;

export interface Event extends Partial<UserIdId>, Partial<IntercomUserIdId>, Partial<EmailIdId> {
  readonly id: string,
  created_at: number,
  event_name: string,
  metadata?: any;
}

export type ListParam = EventIdentifier & {
  type: 'user',
  per_page?: number, // max 100
}

export interface List {
  "type": "event.list",
  "total_count": number,
  "events": (Event)[],
  "pages": { "next"?: string, "page": number, "per_page": number, "total_pages": number }
}
