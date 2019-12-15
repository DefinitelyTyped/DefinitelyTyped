import { usePosition, UsePosition } from 'use-position';

const watch = false;
const options: UsePosition.PositionOptions = { enableHighAccuracy: false, timeout: 0, maximumAge: Infinity};
usePosition(watch, options);
