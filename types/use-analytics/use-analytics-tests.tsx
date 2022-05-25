import { AnalyticsConsumer, AnalyticsContext, AnalyticsProvider, useAnalytics, withAnalytics } from './index';
import * as React from 'react';
import { AnalyticsInstance } from 'analytics';

// useAnalytics
{
    const { track, page, identify, user } = useAnalytics();

    track('trackThing');
    page();
    identify('userId', { email: 'user@example.com' });
    user('userId');
}

// AnalyticsContext
{
    const analytics = React.useContext(AnalyticsContext);
    const { track, page, identify, user } = analytics;
}

// AnalyticsProvider & AnalyticsConsumer
{
    const analytics = useAnalytics();

    const TestProviderAndConsumer = () => (
        <AnalyticsProvider instance={analytics}>
            <AnalyticsConsumer>
                {props => {
                    const { track, page, identify, user } = props;
                    return <div />;
                }}
            </AnalyticsConsumer>
        </AnalyticsProvider>
    );
}

// withAnalytics
{
    type Props = { analytics: AnalyticsInstance; otherProp: number };

    const App = ({ analytics, otherProp }: Props) => {
        const { track, page, identify, user } = analytics;
        return <div />;
    };

    const AppWithAnalytics = withAnalytics(App);

    const Test = () => <AppWithAnalytics otherProp={5} />;
}
