import { API } from './API';
import * as Resources from './Resources';

export class Onfleet {
  constructor(api_key: string);
  verifyKey(): boolean;
  admins: Resources.Admin;
  api: API;
  apiKey: string;
  destinations: Resources.Destination;
  recipients: Resources.Recipient;
  tasks: Resources.Task;
  webhooks: Resources.Webhook;
  // containers: {}; // TODO define resource
  hubs: Resources.Hub;
  // organization: {}; // TODO define resource
  // teams: {}; // TODO define resource
  workers: Resources.Worker; // TODO define resource
}
