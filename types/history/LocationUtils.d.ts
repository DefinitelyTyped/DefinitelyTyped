import { Path, LocationState, LocationKey, Location, LocationDescriptor } from './index';

export function locationsAreEqual<S = LocationState>(
  lv: LocationDescriptor<S>,
  rv: LocationDescriptor<S>,
): boolean;
export function createLocation<S = LocationState>(
  path: LocationDescriptor<S>,
  state?: S,
  key?: LocationKey,
  currentLocation?: Location<S>,
): Location<S>;
