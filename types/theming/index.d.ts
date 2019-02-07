// Type definitions for theming 1.3
// Project: https://github.com/iamstarkov/theming#readme
// Definitions by: Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from "react";

export type Channel = string;
export type Theme = object | ((outerTheme: object) => object);

export const channel: "__THEMING__";

/**
 * Returns a component with an already passed Theme listening on the default channel
 */
export function withTheme<P>(
  component: React.ComponentType<P & { theme: Theme }>
): React.ComponentType<Pick<P, Exclude<keyof P, "theme">>>;

export interface ThemeProviderProps {
  theme: Theme;
  children?: React.ReactElement<any>;
}
/**
 * Provide a theme to an entire react component listening on the default channel
 */
export class ThemeProvider extends React.Component<ThemeProviderProps> {}

export type SubscriptionId = number;
export interface Broadcast<T extends Theme> {
  getState(): T;
  subscribe(callback: () => void): SubscriptionId;
  unsubscribe(id: SubscriptionId): void;
}
export type ContextWithTheme<C extends string> = Record<C, Broadcast<Theme>>;
export interface ThemeListener<C extends string> {
  initial(context: ContextWithTheme<C>): Theme;
  subscribe(
    context: ContextWithTheme<C>,
    callback: (theme: Theme) => void
  ): SubscriptionId;
  unsubscribe(context: ContextWithTheme<C>, id: SubscriptionId): void;
  contextTypes: React.ValidationMap<C>;
}
/**
 * ThemeListener for the default channel
 */
export const themeListener: ThemeListener<typeof channel>;

export interface Theming<C extends string> {
  channel: C;
  withTheme: typeof withTheme;
  ThemeProvider: ThemeProvider;
  themeListener: ThemeListener<C>;
}
/**
 * creates a new Theming on the given channel
 */
export function createTheming<C extends string>(customChannel?: C): Theming<C>;
