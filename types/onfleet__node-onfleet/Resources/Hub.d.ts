import { Location, OnfleetDestination } from "./Destination";

export class Hub {
  get(): Promise<OnfleetHub[]>;
}

export interface OnfleetHub {
  address: OnfleetDestination['address'];
  id: string;
  location: Location;
  name: string;
  teams: string[];
}
