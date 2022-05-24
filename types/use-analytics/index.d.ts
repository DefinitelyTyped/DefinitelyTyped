// Type definitions for use-analytics 0.0
// Project: https://github.com/DavidWells/analytics
// Definitions by: Oliver Alonso <https://github.com/boxgames1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AnalyticsInstance } from 'analytics';
import * as React from 'react';

export type TrackFunction = () => void;
export type PageFunction = () => void;
export type IdentifyFunction = () => void;

/**
 *  React hook useAnalytics() for getting analytics functions
 *
 * @returns analytics functions: track, page and identify
 */
export function useAnalytics(): AnalyticsInstance;
export function useTrack(): AnalyticsInstance['track'];
export function usePage(): AnalyticsInstance['page'];
export function useIdentify(): AnalyticsInstance['identify'];

export function withAnalytics(Component: any): any;

export const AnalyticsContext: React.Context<{
    instance: AnalyticsInstance;
}>;
export const AnalyticsProvider: React.Provider<{
    instance: AnalyticsInstance;
}>;
export const AnalyticsConsumer: React.Consumer<{
    instance: AnalyticsInstance;
}>;
