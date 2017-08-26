// Type definitions for react-tap-event-plugin
// Project: https://github.com/zilverline/react-tap-event-plugin
// Definitions by: Michael Ledin <https://github.com/mxl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface StrategyOverrides {
    shouldRejectClick?: (lastTouchEventTimestamp: Date, clickEventTimestamp: Date) => boolean;
}

declare var injectTapEventPlugin: (strategyOverrides?: StrategyOverrides) => void;

export = injectTapEventPlugin;
