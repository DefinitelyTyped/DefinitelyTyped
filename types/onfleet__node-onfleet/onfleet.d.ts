import { API } from './API';
import * as Resources from './Resources';

export class Onfleet {
  api: API;
  apiKey: string;

  constructor(api_key: string);
  verifyKey(): boolean;

  admins: Resources.Admin;
  containers: Resources.Container;
  destinations: Resources.Destination;
  hubs: Resources.Hub;
  organization: Resources.Organization;
  recipients: Resources.Recipient;
  tasks: Resources.Task;
  teams: Resources.Team;
  webhooks: Resources.Webhook;
  workers: Resources.Worker;
}
