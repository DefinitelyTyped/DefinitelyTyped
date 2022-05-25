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

// $ExpectType Consumer<{ instance: AnalyticsInstance; }>
const consumer = AnalyticsConsumer;

// $ExpectType Context<{ instance: AnalyticsInstance; }>
const context = AnalyticsContext;

// $ExpectType Provider<{ instance: AnalyticsInstance; }>
const provider = AnalyticsProvider;

// $ExpectType any
const hoc = withAnalytics('text');
