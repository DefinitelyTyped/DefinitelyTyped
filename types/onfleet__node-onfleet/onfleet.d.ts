import Administrators = require('./resources/Administrators');
import Containers = require('./resources/Containers');
import Destinations = require('./resources/Destinations');
import Hubs = require('./resources/Hubs');
import Organization = require('./resources/Organization');
import Recipients = require('./resources/Recipients');
import Tasks = require('./resources/Tasks');
import Teams = require('./resources/Teams');
import Webhooks = require('./resources/Webhooks');
import Workers = require('./resources/Workers');

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
