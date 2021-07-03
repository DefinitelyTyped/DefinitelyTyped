import * as BranchSDK from 'branch-sdk';

const _noop_callback_with_data = (err: BranchSDK.BranchError, data: any) => null;
const _noop_callback_without_data = (err: BranchSDK.BranchError) => null;

const _base_deep_link_data: BranchSDK.DeepLinkData = {};
const _channel_deep_link_data: BranchSDK.DeepLinkData = { channel: 'test-channel' };
const _branch_data_deep_link_data: BranchSDK.DeepLinkData = {
    channel: 'test-channel',
    data: { $desktop_url: 'https://example.com' },
};
const _custom_data_deep_link_data: BranchSDK.DeepLinkData = {
    channel: 'test-channel',
    data: { $desktop_url: 'https://example.com', my_custom_key: 'anything I want' },
};

const _journey_event_listener = (event: BranchSDK.JourneyEvent, data: any) => null;

BranchSDK.init('test-api-key'); // $ExpectType void
BranchSDK.init('test-api-key', { no_journeys: true }); // $ExpectType void
BranchSDK.init('test-api-key', { no_journeys: true }, _noop_callback_with_data); // $ExpectType void

BranchSDK.data(); // $ExpectType void
BranchSDK.data(_noop_callback_with_data); // $ExpectType void

BranchSDK.first(); // $ExpectType void
BranchSDK.first(_noop_callback_with_data); // $ExpectType void

BranchSDK.setIdentity('test-identity'); // $ExpectType void
BranchSDK.setIdentity('test-identity', _noop_callback_with_data); // $ExpectType void

BranchSDK.logout(); // $ExpectType void
BranchSDK.logout(_noop_callback_without_data); // $ExpectType void

BranchSDK.crossPlatformIds(_noop_callback_with_data); // $ExpectType void

BranchSDK.lastAttributedTouchData(1234); // $ExpectType void
BranchSDK.lastAttributedTouchData(1234, _noop_callback_with_data); // $ExpectType void

BranchSDK.link(_base_deep_link_data, _noop_callback_with_data); // $ExpectType void
BranchSDK.link(_channel_deep_link_data, _noop_callback_with_data); // $ExpectType void
BranchSDK.link(_branch_data_deep_link_data, _noop_callback_with_data); // $ExpectType void
BranchSDK.link(_custom_data_deep_link_data, _noop_callback_with_data); // $ExpectType void

BranchSDK.sendSMS('+1234567890', _base_deep_link_data, undefined, _noop_callback_without_data); // $ExpectType void
BranchSDK.sendSMS('+1234567890', _channel_deep_link_data, undefined, _noop_callback_without_data); // $ExpectType void
BranchSDK.sendSMS('+1234567890', _branch_data_deep_link_data, { make_new_link: true }, _noop_callback_without_data); // $ExpectType void
BranchSDK.sendSMS('+1234567890', _custom_data_deep_link_data, { make_new_link: false }, _noop_callback_without_data); // $ExpectType void

BranchSDK.deepview(_base_deep_link_data, { make_new_link: true }, _noop_callback_without_data); // $ExpectType void
BranchSDK.deepview(_channel_deep_link_data, { make_new_link: false, open_app: true }, _noop_callback_without_data); // $ExpectType void
BranchSDK.deepview(_branch_data_deep_link_data, { make_new_link: false, open_app: false }, _noop_callback_without_data); // $ExpectType void
BranchSDK.deepview(_custom_data_deep_link_data, { make_new_link: true, open_app: false }, _noop_callback_without_data); // $ExpectType void

BranchSDK.deepviewCta(); // $ExpectType void

BranchSDK.credits(_noop_callback_with_data); // $ExpectType void

BranchSDK.creditHistory({}, _noop_callback_with_data); // $ExpectType void
BranchSDK.creditHistory({ bucket: 'test_bucket' }, _noop_callback_with_data); // $ExpectType void

BranchSDK.redeem(100, 'test-bucket'); // $ExpectType void
BranchSDK.redeem(100, 'test-bucket', _noop_callback_without_data); // $ExpectType void

BranchSDK.addListener(undefined, _journey_event_listener); // $ExpectType void
BranchSDK.addListener(BranchSDK.JourneyEvent.willShowJourney, _journey_event_listener); // $ExpectType void
BranchSDK.addListener(BranchSDK.JourneyEvent.didShowJourney, _journey_event_listener); // $ExpectType void
BranchSDK.addListener(BranchSDK.JourneyEvent.willNotShowJourney, _journey_event_listener); // $ExpectType void
BranchSDK.addListener(BranchSDK.JourneyEvent.didClickJourneyCTA, _journey_event_listener); // $ExpectType void
BranchSDK.addListener(BranchSDK.JourneyEvent.didClickJourneyClose, _journey_event_listener); // $ExpectType void
BranchSDK.addListener(BranchSDK.JourneyEvent.willCloseJourney, _journey_event_listener); // $ExpectType void
BranchSDK.addListener(BranchSDK.JourneyEvent.didCloseJourney, _journey_event_listener); // $ExpectType void
BranchSDK.addListener(BranchSDK.JourneyEvent.didCallJourneyClose, _journey_event_listener); // $ExpectType void

BranchSDK.removeListener(_journey_event_listener); // $ExpectType void

BranchSDK.setBranchViewData(_base_deep_link_data); // $ExpectType void
BranchSDK.setBranchViewData(_channel_deep_link_data); // $ExpectType void
BranchSDK.setBranchViewData(_branch_data_deep_link_data); // $ExpectType void
BranchSDK.setBranchViewData(_custom_data_deep_link_data); // $ExpectType void

BranchSDK.closeJourney(); // $ExpectType void
BranchSDK.closeJourney(_noop_callback_without_data); // $ExpectType void

BranchSDK.getBrowserFingerprintId(_noop_callback_with_data); // $ExpectType void

BranchSDK.track('test-event'); // $ExpectType void
BranchSDK.track('test-event', { foo: 'bar' }); // $ExpectType void
BranchSDK.track('test-event', { foo: 'bar' }, _noop_callback_without_data); // $ExpectType void

BranchSDK.logEvent('test-event'); // $ExpectType void
BranchSDK.logEvent('test-event', { foo: 'bar' }); // $ExpectType void
BranchSDK.logEvent('test-event', { foo: 'bar' }, [{ content: 'item' }]); // $ExpectType void
BranchSDK.logEvent('test-event', { foo: 'bar' }, [{ content: 'item' }], 'event-alias'); // $ExpectType void
BranchSDK.logEvent('test-event', { foo: 'bar' }, [{ content: 'item' }], 'event-alias', _noop_callback_without_data); // $ExpectType void

BranchSDK.trackCommerceEvent('purchase', { your_commerce_data: 'here' }); // $ExpectType void
BranchSDK.trackCommerceEvent('purchase', { your_commerce_data: 'here' }, { metadata: 'here' }); // $ExpectType void
// $ExpectType void
BranchSDK.trackCommerceEvent(
    'purchase',
    { your_commerce_data: 'here' },
    { metadata: 'here' },
    _noop_callback_without_data,
);

BranchSDK.disableTracking(); // $ExpectType void
BranchSDK.disableTracking(true); // $ExpectType void
BranchSDK.disableTracking(false); // $ExpectType void

BranchSDK.autoAppIndex({}); // $ExpectType void
BranchSDK.autoAppIndex({ androidPackageName: 'typescript' }); // $ExpectType void
BranchSDK.autoAppIndex({ androidPackageName: 'typescript' }, _noop_callback_without_data); // $ExpectType void
