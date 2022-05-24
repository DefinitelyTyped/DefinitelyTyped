import { useAnalytics, useIdentify, usePage, useTrack } from 'use-analytics';

// $ExpectType AnalyticsInstance
const instance = useAnalytics();

// $ExpectType Track
const track = useTrack();

// $ExpectType Identify
const identify = useIdentify();

// $ExpectType Page
const page = usePage();
