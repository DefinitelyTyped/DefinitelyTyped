import { API } from './API';
import * as Resources from './Resources';

export class Onfleet {
  constructor(api_key: string);
  verifyKey(): boolean;
  api: API;
  apiKey: string;
  destinations: Resources.Destination;
  recipients: Resources.Recipient;
  tasks: Resources.Task;
  webhooks: Resources.Webhook;
  // containers: {}; // TODO define resource
  // hubs: {}; // TODO define resource
  // organization: {}; // TODO define resource
  // teams: {}; // TODO define resource
  workers: Resources.Worker; // TODO define resource
}
