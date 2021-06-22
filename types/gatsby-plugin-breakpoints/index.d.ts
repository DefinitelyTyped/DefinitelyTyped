// Type definitions for gatsby-plugin-breakpoints 1.3
// Project: https://github.com/JimmyBeldone/gatsby-plugin-breakpoints
// Definitions by: Iva Kop <https://github.com/IvaKop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-breakpoints/
 */

export type BreakpointsObject = Record<string, boolean>;

export type QueriesObject = Record<string, string>;
export interface BreakpointProps {
    breakpoints: BreakpointsObject;
}

export interface BreakpointProviderProps {
    children: React.ReactNode;
    queries: QueriesObject;
}

export interface BreakpointOptions {
    queries?: QueriesObject;
}
export interface BreakpointConfig {
    resolve: 'gatsby-plugin-breakpoints';
    options?: BreakpointOptions;
}

export function useBreakpoint(): BreakpointsObject;

export function withBreakpoints<P extends BreakpointProps>(Component: React.ComponentType<P>): React.ComponentType<P>;

export const BreakpointContext: React.Context<QueriesObject>;

export const BreakpointProvider: React.ProviderExoticComponent<BreakpointProviderProps>;
