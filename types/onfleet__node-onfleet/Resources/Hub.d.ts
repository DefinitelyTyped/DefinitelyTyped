import { Location, DestinationResult } from "./Destination";

export class Hub {
  get(): Promise<OnfleetHub[]>;
}

interface OnfleetHub {
  address: DestinationResult['address'];
  id: string;
  location: Location;
  name: string;
  teams: string[];
}
