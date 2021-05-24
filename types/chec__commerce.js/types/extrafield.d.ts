export enum ExtrafieldType {
  Text = 'text',
}

export interface Extrafield {
  id: string;
  name: string;
  type: ExtrafieldType;
  required: boolean;
  options: any; // todo
}
