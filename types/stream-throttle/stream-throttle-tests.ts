import { Throttle, ThrottleGroup } from 'stream-throttle';

const throttle = new Throttle({rate: 1});
const throttleGroup = new ThrottleGroup({rate: 1});

// $ExpectType Throttle
throttleGroup.throttle({rate: 1});
