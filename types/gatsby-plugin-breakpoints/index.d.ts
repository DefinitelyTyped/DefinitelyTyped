// Type definitions for gatsby-plugin-breakpoints 1.3
// Project: https://github.com/JimmyBeldone/gatsby-plugin-breakpoints
// Definitions by: Iva Kop <https://github.com/IvaKop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Breakpoints = Record<string, boolean>;

export type Queries = Record<string, string>;

export interface BreakpointProps {
    breakpoints: Breakpoints;
}

export interface BreakpointOptions {
    queries?: Queries;
}

/**
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-breakpoints/
 */

export interface BreakpointConfig {
    resolve: 'gatsby-plugin-breakpoints';
    options?: BreakpointOptions;
}

export function useBreakpoint(): Breakpoints;

export function withBreakpoints<P extends BreakpointProps>(Component: React.ComponentType<P>): React.ComponentType<P>;

export const BreakpointContext: React.Context<Queries>;

export const BreakpointProvider: React.Provider<Queries>;
