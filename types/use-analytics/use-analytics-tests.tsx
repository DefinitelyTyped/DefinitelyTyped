import {
    AnalyticsConsumer,
    AnalyticsContext,
    AnalyticsProvider,
    useAnalytics,
    useIdentify,
    usePage,
    useTrack,
    withAnalytics,
} from 'use-analytics';
import * as React from 'react';
import { AnalyticsInstance } from 'analytics';

// Hooks
{
    // useAnalytics
    {
        const { track, page, identify, user } = useAnalytics();

        track('trackThing');
        page();
        identify('userId', { email: 'user@example.com' });
        user('userId');
    }

    // useTrack
    {
        const track = useTrack();
        track('trackThing');
    }

    // usePage
    {
        const page = usePage();
        page();
    }

    // useIdentify
    {
        const identify = useIdentify();
        identify('userId', { email: 'user@example.com' });
    }
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
    interface Props {
        analytics: AnalyticsInstance;
        otherProp: number;
    }

    const App = ({ analytics, otherProp }: Props) => {
        const { track, page, identify, user } = analytics;
        return <div />;
    };

    const AppWithAnalytics = withAnalytics(App);

    const Test = () => <AppWithAnalytics otherProp={5} />;
}
