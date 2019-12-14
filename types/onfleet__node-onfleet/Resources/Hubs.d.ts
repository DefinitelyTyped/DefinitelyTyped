import { Location, OnfleetDestination } from './Destinations';

declare class Hub {
  get(): Promise<Hub.OnfleetHub[]>;
}

declare namespace Hub {
  interface OnfleetHub {
    address: OnfleetDestination['address'];
    id: string;
    location: Location;
    name: string;
    teams: string[];
  }
}

export = Hub;
