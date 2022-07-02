import React, { ReactNode } from 'react';
import {
    BreakpointConfig,
    BreakpointProvider,
    BreakpointContext,
    useBreakpoint,
    withBreakpoints,
    BreakpointProps,
} from 'gatsby-plugin-breakpoints';

const defaultQueries = {
    xs: '(max-width: 320px)',
    sm: '(max-width: 720px)',
    md: '(max-width: 1024px)',
    l: '(max-width: 1536px)',
};

const plugins: BreakpointConfig = {
    resolve: `gatsby-plugin-breakpoints`,
    options: {
        queries: defaultQueries,
    },
};

// useBreakpoints hook
function HookComponent() {
    const breakpoints = useBreakpoint();

    return <div>{breakpoints.xs ? <div /> : null}</div>;
}

// withBreakpoints HOC
const EnhancedFunctionalComponent = withBreakpoints(function Component({ breakpoints }) {
    return breakpoints.xs ? <div /> : <div>Content hidden only on mobile</div>;
});

class Component extends React.Component<BreakpointProps> {
    render() {
        const { breakpoints } = this.props;
        return breakpoints.xs ? <div /> : <div>Content hidden only on mobile</div>;
    }
}

const EnhancedClassComponent = withBreakpoints(Component);

// BreakpointContext
function useContext() {
    const context = React.useContext(BreakpointContext);
    return context;
}
// BreakpointProvider
const ProviderComponent: React.FC<{ children?: ReactNode }> = ({ children }) => {
    return <BreakpointProvider queries={defaultQueries}>{children}</BreakpointProvider>;
};
