import { Path, LocationState, LocationKey, Location, LocationDescriptor } from './index';

export function locationsAreEqual(lv: Location, rv: Location): boolean;
export function createLocation(options: LocationDescriptor): Location;
export function createLocation(path: Path, state?: LocationState, key?: LocationKey, currentLocation?: Location): Location;
