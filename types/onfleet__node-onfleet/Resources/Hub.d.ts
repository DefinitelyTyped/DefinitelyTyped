import { Location, OnfleetDestination} from "./Destination";

export class Hub {
  get(): Promise<OnfleetHub[]>;
}

interface OnfleetHub {
  address: OnfleetDestination['address'];
  id: string;
  location: Location;
  name: string;
  teams: string[];
}
