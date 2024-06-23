interface StrategyOverrides {
    shouldRejectClick?: ((lastTouchEventTimestamp: Date, clickEventTimestamp: Date) => boolean) | undefined;
}

declare var injectTapEventPlugin: (strategyOverrides?: StrategyOverrides) => void;

export = injectTapEventPlugin;
