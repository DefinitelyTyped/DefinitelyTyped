// Type definitions for use-analytics 0.0.5
// Project: https://github.com/DavidWells/analytics/tree/master/packages/use-analytics
// Definitions by: Harry Cruse <https://github.com/CruseCtrl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { AnalyticsInstance } from 'analytics';

export const useAnalytics: () => AnalyticsInstance;

export const AnalyticsContext: React.Context<AnalyticsInstance>;

export type AnalyticsProviderProps = {
    children: React.ReactNode;
    instance: AnalyticsInstance;
};

export const AnalyticsProvider: React.ComponentType<AnalyticsProviderProps>;

export const AnalyticsConsumer: typeof AnalyticsContext.Consumer;

export type WithAnalyticsProps = { analytics: AnalyticsInstance };

export const withAnalytics: <T extends WithAnalyticsProps>(
    Component: React.ComponentType<T>,
) => React.ComponentType<Omit<T, 'analytics'>>;
