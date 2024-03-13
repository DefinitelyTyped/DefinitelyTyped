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
    queries?: QueriesObject | undefined;
}
export interface BreakpointConfig {
    resolve: "gatsby-plugin-breakpoints";
    options?: BreakpointOptions | undefined;
}

export function useBreakpoint(): BreakpointsObject;

export function withBreakpoints<P extends BreakpointProps>(Component: React.ComponentType<P>): React.ComponentType<P>;

export const BreakpointContext: React.Context<QueriesObject>;

export const BreakpointProvider: React.ProviderExoticComponent<BreakpointProviderProps>;
