import Apptimize, { VariantInfo } from '@apptimize/apptimize-web-sdk';

// Test Apptimize methods called with valid properties return expected types
Apptimize.flushTracking(); // $ExpectType void
Apptimize.getApptimizeAnonUserId(); // $ExpectType string
Apptimize.getApptimizeSDKPlatform(); // $ExpectType string
Apptimize.getApptimizeSDKVersion(); // $ExpectType string
Apptimize.getBool('name', true); // $ExpectType boolean
Apptimize.getBoolArray('name', [true]); // $ExpectType boolean[]
Apptimize.getBoolDictionary ('name', {defaultValue: true}); // $ExpectType Dictionary<boolean>
Apptimize.getCustomAttributes(); // $ExpectType Dictionary<simpleData>
Apptimize.getCustomerUserId(); // $ExpectType string
Apptimize.getDouble('name', 1.22); // $ExpectType number
Apptimize.getDoubleArray('name', [1.22]); // $ExpectType number[]
Apptimize.getDoubleDictionary ('name', {defaultValue: 1.22}); // $ExpectType Dictionary<number>
Apptimize.getInt('name', 1); // $ExpectType number
Apptimize.getIntArray('name', [1]); // $ExpectType number[]
Apptimize.getIntDictionary ('name', {defaultValue: 1}); // $ExpectType Dictionary<number>
Apptimize.getString('name', 'defaultValue'); // $ExpectType string
Apptimize.getStringArray('name', ['defaultValue']); // $ExpectType string[]
Apptimize.getStringDictionary('name', {defaultValue: 'defaultValue'}); // $ExpectType Dictionary<string>
Apptimize.getVariantInfo(); // $ExpectType VariantInfo[]
Apptimize.isFeatureFlagEnabled('name'); // $ExpectType boolean
Apptimize.runCodeBlock('codeBlockVariableName', {template: () => {}}); // $ExpectType void
Apptimize.setAppName('name'); // $ExpectType void
Apptimize.setAppVersion('version'); // $ExpectType void
Apptimize.setCustomAttributes({key: 'value'}); // $ExpectType void
Apptimize.setCustomerUserId('id'); // $ExpectType void
Apptimize.setOnApptimizeInitializedCallback(() => {}); // $ExpectType void
Apptimize.setOnEnrolledInExperimentCallback((_variantInfo: VariantInfo) => {}); // $ExpectType void
Apptimize.setOnMetadataUpdatedCallback(() => {}); // $ExpectType void
Apptimize.setOnParticipatedInExperimentCallback((_variantInfo: VariantInfo) => {}); // $ExpectType void
Apptimize.setOnUnenrolledInExperimentCallback((_variantInfo: VariantInfo, _reason: string) => {}); // $ExpectType void
Apptimize.setPilotTargetingId('id'); // $ExpectType void
Apptimize.setup('appKey', {log_level: 'LOG_LEVEL_WARN', result_post_delay_ms: 60000}); // $ExpectType void
Apptimize.track('eventName'); // $ExpectType void
Apptimize.trackValue('eventName', 1); // $ExpectType void
Apptimize.updateApptimizeMetadataOnce(); // $ExpectType void

// Apptimize methods called without required properties should error
// @ts-expect-error
Apptimize.getBool();
// @ts-expect-error
Apptimize.getBoolArray();
// @ts-expect-error
Apptimize.getBoolDictionary ();
// @ts-expect-error
Apptimize.getDouble();
// @ts-expect-error
Apptimize.getDoubleArray();
// @ts-expect-error
Apptimize.getDoubleDictionary ();
// @ts-expect-error
Apptimize.getInt();
// @ts-expect-error
Apptimize.getIntArray();
// @ts-expect-error
Apptimize.getIntDictionary ();
// @ts-expect-error
Apptimize.getString();
// @ts-expect-error
Apptimize.getStringArray();
// @ts-expect-error
Apptimize.getStringDictionary();
// @ts-expect-error
Apptimize.isFeatureFlagEnabled();
// @ts-expect-error
Apptimize.runCodeBlock();
// @ts-expect-error
Apptimize.setAppName();
// @ts-expect-error
Apptimize.setAppVersion();
// @ts-expect-error
Apptimize.setCustomAttributes();
// @ts-expect-error
Apptimize.setCustomerUserId();
// @ts-expect-error
Apptimize.setOnApptimizeInitializedCallback();
// @ts-expect-error
Apptimize.setOnEnrolledInExperimentCallback();
// @ts-expect-error
Apptimize.setOnMetadataUpdatedCallback();
// @ts-expect-error
Apptimize.setOnParticipatedInExperimentCallback();
// @ts-expect-error
Apptimize.setOnUnenrolledInExperimentCallback();
// @ts-expect-error
Apptimize.setPilotTargetingId();
// @ts-expect-error
Apptimize.setup();
// @ts-expect-error
Apptimize.track();
// @ts-expect-error
Apptimize.trackValue();

// Verify malformed ConfigAttributes cannot be passed to setup
// @ts-expect-error
Apptimize.setup('appKey', 'string');
// @ts-expect-error
Apptimize.setup('appKey', {log_level: 2});
// @ts-expect-error
Apptimize.setup('appKey', {log_level: 'Non-Supported Option'});
// @ts-expect-error
Apptimize.setup('appKey', {result_post_delay_ms: '60000'});
// @ts-expect-error
Apptimize.setup('appKey', {nonSupportedProperty: ''});
