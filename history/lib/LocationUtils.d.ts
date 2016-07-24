import { Query, Action, LocationDescriptor, LocationState, Location } from '../index';

export function createQuery(props: Object): Query;
export function createLocation(input?: LocationDescriptor, action?: Action, key?: string): Location;
export function statesAreEqual(a: LocationState, b: LocationState): boolean;
export function locationsAreEqual(a: Location, b: Location): boolean;
