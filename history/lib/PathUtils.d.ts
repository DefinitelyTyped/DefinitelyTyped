import { LocationDescriptorObject, Location, LocationDescriptor, Path } from '../index';

export function addQueryStringValueToPath(path: Path, key: string, value: string): Path;
export function stripQueryStringValueFromPath(path: Path, key: string): Path;
export function getQueryStringValueFromPath(path: Path, key: string): string | void;
export function parsePath(path: Path): LocationDescriptorObject;
export function createPath(location: Location | LocationDescriptorObject | Path | void): Path;
