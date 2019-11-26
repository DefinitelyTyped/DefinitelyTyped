import Administrators = require('./Resources/Administrators');
import Containers = require('./Resources/Containers');
import Destinations = require('./Resources/Destinations');
import Hubs = require('./Resources/Hubs');
import Organization = require('./Resources/Organization');
import Recipients = require('./Resources/Recipients');
import Tasks = require('./Resources/Tasks');
import Teams = require('./Resources/Teams');
import Webhooks = require('./Resources/Webhooks');
import Workers = require('./Resources/Workers');

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
