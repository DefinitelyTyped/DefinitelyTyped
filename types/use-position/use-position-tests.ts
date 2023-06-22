import { usePosition, PositionOptions } from 'use-position';

const watch = false;
const options: PositionOptions = { enableHighAccuracy: false, timeout: 0, maximumAge: Infinity};

const { latitude, longitude, timestamp, accuracy, speed, heading, error } = usePosition(watch, options);
