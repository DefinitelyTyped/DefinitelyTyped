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

interface BottleneckOptions {
    /** default 20 */
    LIMITER_RESERVOIR?: number;
    /** default 10000 */
    LIMITER_WAIT_UPON_DEPLETION?: number;
    /** default 1 */
    LIMITER_MAX_CONCURRENT?: number;
    /** default 50 */
    LIMITER_MIN_TIME?: number;
}

declare class Onfleet {
    apiKey: string;
    api: {
        baseUrl: string;
        timeout: number;
        headers: {
            'Content-Type': string;
            'User-Agent': string;
            Authorization: string;
        };
    };

    constructor(
        api_key: string,
        timeout?: number,
        bottleneckOptions?: BottleneckOptions,
        baseURL?: string,
        defaultPath?: string,
        defaultApiVersion?: string,
    );
    verifyKey(): Promise<boolean>;

    administrators: Administrators;
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
