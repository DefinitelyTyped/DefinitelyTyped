import { Company } from "./Company";
import { Avatar, LocationData, Segment, SocialProfile, Tag } from './User';

export type LeadIdentifier = { "id": string } | { "user_id": string };

export interface Lead {
  "type": "contact",
  readonly "id": string,
  "user_id": string | null,
  "email": string | null,
  "phone": string | null,
  "name": string | null,
  readonly "updated_at": number,
  "last_seen_ip": string | null,
  "unsubscribed_from_emails": boolean,
  "last_request_at": number | null,
  readonly "created_at": number,
  "user_agent_data": string | null,
  "custom_attributes": {
    [key: string]: any
  },
  "avatar": Avatar,
  "location_data": LocationData | {},
  "social_profiles": {
    "type": "social_profile.list",
    "social_profiles": SocialProfile[]
  },
  "companies": {
    "type": "company.list",
    "companies": Company[]
  },
  "segments": {
    "type": "segment.list",
    "segments": Segment[]

  },
  "tags": {
    "type": "tag.list",
    "tags": Tag[]
  },
  "referrer": string | null,
}

export interface List {
  "type": "user.list",
  "total_count": number,
  "contacts": Lead[],
  "pages": { "next"?: string, "page": number, "per_page": number, "total_pages": number }
}
