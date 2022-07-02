declare const EVENT_NAMES: [
    'ready',
    'stateChange',
    'playbackQualityChange',
    'playbackRateChange',
    'error',
    'apiChange',
    'volumeChange'
];

export default EVENT_NAMES;

export type EventType =
    'ready' |
    'stateChange' |
    'playbackQualityChange' |
    'playbackRateChange' |
    'error' |
    'apiChange' |
    'volumeChange';
