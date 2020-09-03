declare class Organization {
  get(): Promise<Organization.OnfleetOrganization[]>;
  get(id: string): Promise<Organization.OnfleetOrganization | Organization.Delegatee>;
  insertTask(id: string, obj: { tasks: string[] }): Promise<any>;
}

declare namespace Organization {
  interface OnfleetOrganization {
    id: string;
    timeCreated: number;
    timeLastModified: number;
    name: string;
    email: string;
    image: string;
    timezone: string;
    country: string;
    delegatees: string[];
  }

  interface Delegatee {
    country: string;
    email: string;
    id: string;
    name: string;
    timezone: string;
  }
}

export = Organization;
