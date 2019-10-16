import * as Resources from './resources';

declare class Onfleet {
  apiKey: string;
  api: {
    baseUrl: string;
    timeout: number;
    headers: {
      'Content-Type': string;
      'User-Agent': string;
      Authorization: string;
    }
  };

  constructor(api_key: string);
  verifyKey(): boolean;

  admins: Resources.Administrators;
  containers: Resources.Containers;
  destinations: Resources.Destinations;
  hubs: Resources.Hubs;
  organization: Resources.Organization;
  recipients: Resources.Recipients;
  tasks: Resources.Tasks;
  teams: Resources.Teams;
  webhooks: Resources.Webhooks;
  workers: Resources.Workers;
}

export = Onfleet;
