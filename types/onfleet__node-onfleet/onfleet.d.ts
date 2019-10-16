import * as Administrators from './resources/Administrators';
import * as Containers from './resources/Containers';
import * as Destinations from './resources/Destinations';
import * as Hubs from './resources/Hubs';
import * as Organization from './resources/Organization';
import * as Recipients from './resources/Recipients';
import * as Tasks from './resources/Tasks';
import * as Teams from './resources/Teams';
import * as Webhooks from './resources/Webhooks';
import * as Workers from './resources/Workers';

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

  admins: Administrators;
  containers: Containers;
  destinations: Destinations;
  hubs: Hubs;
  organization: Organization;
  recipients: Recipients;
  tasks: Tasks;
  teams: Teams;
  webhooks: Webhooks;
  workers: Workers;
}

export = Onfleet;
