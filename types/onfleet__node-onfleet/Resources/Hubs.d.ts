import { DestinationAddress, Location, OnfleetDestination } from './Destinations';

declare class Hub {
    create(obj: Hub.CreateHubProps): Promise<Hub.OnfleetHub>;
    get(): Promise<Hub.OnfleetHub[]>;
    update(id: string, hub: Partial<Hub.OnfleetHub>): Promise<Hub.OnfleetHub>;
}

declare namespace Hub {
    interface OnfleetHub {
        address: OnfleetDestination['address'];
        id: string;
        location: Location;
        name: string;
        teams: string[];
    }

    interface CreateHubProps {
        /**
         * The hub’s street address information.
         */
        address: DestinationAddress;
        /**
         *  A name to identify the Hub.
         */
        name: string;
        /**
         * This is the team ID(s) that this Hub will be assigned to.
         */
        team?: string[];
    }
}

export = Hub;
