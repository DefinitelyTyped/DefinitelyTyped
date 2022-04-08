interface Avatar {
  image_url: string;
}

interface FromToObject {
  id: string;
  type: string;
}

interface Owner {
  avatar: Avatar;
  away_mode_enabled: boolean;
  away_mode_reassign: boolean;
  email: string;
  id: string;
  name: string;
  type: string;
}

interface MessageModel {
  body: string;
  message_type: string;
  subject?: string;
}

export interface CreateMessage extends MessageModel {
  from: FromToObject;
  template?: string;
  to: FromToObject;
}

export interface Message extends MessageModel {
  created_at: number;
  id: string;
  owner: Owner;
  type: string;
}
