import { AnalyticsInstance } from "analytics";
import * as React from "react";

export function useAnalytics(): AnalyticsInstance;

export function useTrack(): AnalyticsInstance["track"];
export function usePage(): AnalyticsInstance["page"];
export function useIdentify(): AnalyticsInstance["identify"];

export const AnalyticsContext: React.Context<AnalyticsInstance>;

export interface AnalyticsProviderProps {
    children: React.ReactNode;
    instance: AnalyticsInstance;
}

export const AnalyticsProvider: React.ComponentType<AnalyticsProviderProps>;

export const AnalyticsConsumer: typeof AnalyticsContext.Consumer;

export interface WithAnalyticsProps {
    analytics: AnalyticsInstance;
}

export function withAnalytics<T extends WithAnalyticsProps>(
    Component: React.ComponentType<T>,
): React.ComponentType<Omit<T, "analytics">>;
