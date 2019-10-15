import { OnfleetTask } from "./Task";

export class Organization {
  get(): Promise<OnfleetOrganization[]>;
  get(id: string): Promise<OnfleetOrganization | Delegatee>;
  insertTask(id: string, task: OnfleetTask): Promise<any>;
}

interface OnfleetOrganization {
  id: string;
  timeCreated: number;
  timeLastModified: number;
  name: string;
  email: string;
  image: string;
  timezone: string;
  country: string;
  delegatees: Delegatee['id'][];
}

interface Delegatee {
  country: string;
  email: string;
  id: string;
  name: string;
  timezone: string;
}
