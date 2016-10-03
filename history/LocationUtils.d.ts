import { LocationDescriptor, LocationState, Key, Location } from './index';

export function createLocation(path: LocationDescriptor, state?: LocationState, key?: Key, currentLocation?: Location): Location;
export function locationsAreEqual(a: Location, b: Location): boolean;
