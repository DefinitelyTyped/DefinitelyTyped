import { usePosition, PositionOptions } from 'use-position';

const watch = false;
const options: PositionOptions = { enableHighAccuracy: false, timeout: 0, maximumAge: Infinity};
usePosition(watch, options);
