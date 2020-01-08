import Apptimize, { VariantInfo } from 'apptimize__apptimize-web-sdk';

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
Apptimize.getBool(); // $ExpectError
Apptimize.getBoolArray(); // $ExpectError
Apptimize.getBoolDictionary (); // $ExpectError
Apptimize.getDouble(); // $ExpectError
Apptimize.getDoubleArray(); // $ExpectError
Apptimize.getDoubleDictionary (); // $ExpectError
Apptimize.getInt(); // $ExpectError
Apptimize.getIntArray(); // $ExpectError
Apptimize.getIntDictionary (); // $ExpectError
Apptimize.getString(); // $ExpectError
Apptimize.getStringArray(); // $ExpectError
Apptimize.getStringDictionary(); // $ExpectError
Apptimize.isFeatureFlagEnabled(); // $ExpectError
Apptimize.runCodeBlock(); // $ExpectError
Apptimize.setAppName(); // $ExpectError
Apptimize.setAppVersion(); // $ExpectError
Apptimize.setCustomAttributes(); // $ExpectError
Apptimize.setCustomerUserId(); // $ExpectError
Apptimize.setOnApptimizeInitializedCallback(); // $ExpectError
Apptimize.setOnEnrolledInExperimentCallback(); // $ExpectError
Apptimize.setOnMetadataUpdatedCallback(); // $ExpectError
Apptimize.setOnParticipatedInExperimentCallback(); // $ExpectError
Apptimize.setOnUnenrolledInExperimentCallback(); // $ExpectError
Apptimize.setPilotTargetingId(); // $ExpectError
Apptimize.setup(); // $ExpectError
Apptimize.track(); // $ExpectError
Apptimize.trackValue(); // $ExpectError

// Verify malformed ConfigAttributes cannot be passed to setup
Apptimize.setup('appKey', 'string'); // $ExpectError
Apptimize.setup('appKey', {log_level: 2}); // $ExpectError
Apptimize.setup('appKey', {log_level: 'Non-Supported Option'}); // $ExpectError
Apptimize.setup('appKey', {result_post_delay_ms: '60000'}); // $ExpectError
Apptimize.setup('appKey', {nonSupportedProperty: ''}); // $ExpectError
