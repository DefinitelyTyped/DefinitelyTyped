import {
    useAnalytics,
    useIdentify,
    usePage,
    useTrack,
    AnalyticsConsumer,
    AnalyticsContext,
    AnalyticsProvider,
    withAnalytics,
} from 'use-analytics';

// $ExpectType AnalyticsInstance
const instance = useAnalytics();

// $ExpectType Track
const track = useTrack();

// $ExpectType Identify
const identify = useIdentify();

// $ExpectType Page
const page = usePage();

// $ExpectType React.Consumer<{instance: AnalyticsInstance;}>
const consumer = AnalyticsConsumer;

// $ExpectType React.Context<{instance: AnalyticsInstance;}>
const context = AnalyticsContext;

// $ExpectType React.Provider<{instance: AnalyticsInstance;}>
const provider = AnalyticsProvider;

// $ExpectType any
const hoc = withAnalytics('text');
