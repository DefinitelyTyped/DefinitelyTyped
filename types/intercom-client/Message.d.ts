interface Avatar {
  image_url: string;
}

interface FromObject {
  id: string;
  type: 'admin';
}

interface ToObject {
  id: string;
  type: 'user' | 'lead';
}

interface Owner {
  avatar: Avatar;
  away_mode_enabled: boolean;
  away_mode_reassign: boolean;
  email: string;
  id: string;
  name: string;
  type: 'admin';
}

interface MessageModel {
  body: string;
  subject: string;
}

export interface CreateMessage extends MessageModel {
  from: FromObject;
  message_type: 'email' | 'inapp';
  template?: string;
  to: ToObject;
}

export interface Message extends MessageModel {
  created_at: number;
  id: string;
  message_type: 'email' | 'inapp' | 'facebook' | 'twitter';
  owner: Owner;
  type: 'admin_message';
}