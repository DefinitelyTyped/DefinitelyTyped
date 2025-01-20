/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
    namespace Conference_Data {
        /**
         * Container for all conference-related information.
         *
         *     var conferenceId;
         *     // Set the conference ID, that is, the identifier your system creates for the meeting.
         *
         *     var entryPoint = ConferenceDataService.newEntryPoint();
         *     // Finish building the entry point ...
         *
         *     var conferenceParameter = ConferenceDataService.newConferenceParameter();
         *     // Finish building the parameter ...
         *
         *     var conferenceData = ConferenceDataService.newConferenceDataBuilder()
         *         .setConferenceId(conferenceId);
         *         .addEntryPoint(entryPoint)
         *         .addConferenceParameter(conferenceParameter)
         *         .build();
         */
        interface ConferenceData {
            /**
             * Prints the JSON representation of this object. This is for debugging only.
             * https://developers.google.com/apps-script/reference/conference-data/conference-data#printJson()
             */
            printJson(): string;
        }
        /**
         * Builder for creating for ConferenceData objects.
         */
        interface ConferenceDataBuilder {
            /**
             * Adds a ConferenceParameter to this ConferenceData. The maximum number of
             * parameters per ConferenceData is 300.
             * https://developers.google.com/apps-script/reference/conference-data/conference-data-builder#addConferenceParameter(ConferenceParameter)
             * @param conferenceParameter The parameter to add.
             */
            addConferenceParameter(conferenceParameter: ConferenceParameter): ConferenceDataBuilder;

            /**
             * Adds an EntryPoint to this ConferenceData. The maximum number of entry points
             * per ConferenceData is 300.
             * https://developers.google.com/apps-script/reference/conference-data/conference-data-builder#addEntryPoint(EntryPoint)
             * @param entryPoint The entry point to add.
             */
            addEntryPoint(entryPoint: EntryPoint): ConferenceDataBuilder;

            /**
             * Builds and validates the ConferenceData.
             * https://developers.google.com/apps-script/reference/conference-data/conference-data-builder#build()
             */
            build(): ConferenceData;

            /**
             * Sets the conference ID of this ConferenceData. The maximum length for this field is 512
             * characters.
             * https://developers.google.com/apps-script/reference/conference-data/conference-data-builder#setConferenceId(String)
             * @param conferenceId The ID to set.
             */
            setConferenceId(conferenceId: string): ConferenceDataBuilder;

            /**
             * Sets the conference solution ID defined in the addon's manifest. The value must be specified
             * and populates conference's name and iconUrl values.
             *
             * Note that the field is required for GSuite add-ons whereas it's ignored for Conferencing
             * add-ons
             * https://developers.google.com/apps-script/reference/conference-data/conference-data-builder#setConferenceSolutionId(String)
             * @param conferenceSolutionId The ID matching the manifest.
             */
            setConferenceSolutionId(conferenceSolutionId: string): ConferenceDataBuilder;

            /**
             * Sets the ConferenceError of this ConferenceData, indicating that the conference
             * was not successfully created.
             * https://developers.google.com/apps-script/reference/conference-data/conference-data-builder#setError(ConferenceError)
             * @param conferenceError The error to set.
             */
            setError(conferenceError: ConferenceError): ConferenceDataBuilder;

            /**
             * Sets the additional notes of this ConferenceData, such as instructions from the
             * administrator or legal notices. Can contain HTML. The maximum length for this field is 2048
             * characters.
             * https://developers.google.com/apps-script/reference/conference-data/conference-data-builder#setNotes(String)
             * @param notes The additional notes to set.
             */
            setNotes(notes: string): ConferenceDataBuilder;
        }
        /**
         * Service that scripts can use to create conferencing information.
         */
        interface ConferenceDataService {
            ConferenceErrorType: typeof ConferenceErrorType;
            EntryPointFeature: typeof EntryPointFeature;
            EntryPointType: typeof EntryPointType;

            /**
             * Returns a new, empty ConferenceDataBuilder.
             * https://developers.google.com/apps-script/reference/conference-data/conference-data-service#newConferenceDataBuilder()
             */
            newConferenceDataBuilder(): ConferenceDataBuilder;

            /**
             * Returns a new, empty ConferenceError.
             * https://developers.google.com/apps-script/reference/conference-data/conference-data-service#newConferenceError()
             */
            newConferenceError(): ConferenceError;

            /**
             * Returns a new, empty ConferenceParameter.
             * https://developers.google.com/apps-script/reference/conference-data/conference-data-service#newConferenceParameter()
             */
            newConferenceParameter(): ConferenceParameter;

            /**
             * Returns a new, empty EntryPoint.
             * https://developers.google.com/apps-script/reference/conference-data/conference-data-service#newEntryPoint()
             */
            newEntryPoint(): EntryPoint;
        }
        /**
         * Error that occurred in a conferencing add-on. Example usage:
         *
         *     var conferenceError = ConferenceDataService.newConferenceError()
         *         .setConferenceErrorType(ConferenceErrorType.PERMANENT);
         *
         *     var state = ScriptApp.newStateToken()
         *         .withMethod('myLoginCallbackFunction');
         *         .withTimeout(3600)
         *         .createToken();
         *
         *     var authenticationUrl = 'https://script.google.com/a/google.com/d/'
         *         + ScriptApp.getScriptId()
         *         + '/usercallback?state='
         *         + state;
         *
         *     var conferenceError = ConferenceDataService.newConferenceError()
         *         .setConferenceErrorType(ConferenceErrorType.UNAUTHENTICATED)
         *         .setAuthenticationUrl(authenticationUrl);
         */
        interface ConferenceError {
            /**
             * If the error type is AUTHENTICATION, the add-on must
             * provide a URL calling back into the add-on to allow users to log in. The maximum length for
             * this field is 1800 characters.
             * https://developers.google.com/apps-script/reference/conference-data/conference-error#setAuthenticationUrl(String)
             * @param authenticationUrl The authentication URL to set.
             */
            setAuthenticationUrl(authenticationUrl: string): ConferenceError;

            /**
             * Sets the error type of this ConferenceError.
             * https://developers.google.com/apps-script/reference/conference-data/conference-error#setConferenceErrorType(ConferenceErrorType)
             * @param conferenceErrorType The type of error to set.
             */
            setConferenceErrorType(conferenceErrorType: ConferenceErrorType): ConferenceError;
        }
        /**
         * Enum that defines the types of errors that you can specify in a ConferenceError.
         */
        enum ConferenceErrorType {
            AUTHENTICATION,
            CONFERENCE_SOLUTION_FORBIDDEN,
            PERMANENT,
            PERMISSION_DENIED,
            TEMPORARY,
            UNKNOWN,
        }
        /**
         * Solution-specific parameter available fo the add-on's use. This parameter is persisted with the
         * conference data and, if an update or delete is needed, is passed to the add-on. Example usage:
         *
         *     var conferenceParameter = ConferenceDataService.newConferenceParameter()
         *         .setKey('meetingId')
         *         .setValue('123456');
         */
        interface ConferenceParameter {
            /**
             * Sets the key of this ConferenceParameter. The maximum length for this field is 50
             * characters. Required.
             * https://developers.google.com/apps-script/reference/conference-data/conference-parameter#setKey(String)
             * @param key The key to set.
             */
            setKey(key: string): ConferenceParameter;

            /**
             * Sets the value of this ConferenceParameter. The maximum length for this field is 1024
             * characters. Required.
             * https://developers.google.com/apps-script/reference/conference-data/conference-parameter#setValue(String)
             * @param value The value to set.
             */
            setValue(value: string): ConferenceParameter;
        }
        /**
         * Definition of a specific way to join a conference. Example usage:
         *
         *     var videoEntryPoint = ConferenceDataService.newEntryPoint()
         *         .setEntryPointType(ConferenceDataService.EntryPointType.VIDEO)
         *         .setUri('https://example.com/myroom');
         *         .setPasscode('12345');
         *
         *     var phoneEntryPoint = ConferenceDataService.newEntryPoint()
         *         .setEntryPointType(ConferenceDataService.EntryPointType.PHONE)
         *         .setUri('tel:+11234567890,,,112233445;9687')
         *         .addFeature(ConferenceDataService.EntryPointFeature.TOLL)
         *         setPin('9687');
         *
         *     var sipEntryPoint = ConferenceDataService.newEntryPoint()
         *         .setEntryPointType(ConferenceDataService.EntryPointType.SIP)
         *         .setUri('sip:joe@example.com')
         *         .setAccessCode('1234567');
         *
         *     var moreEntryPoint = ConferenceDataService.newEntryPoint()
         *         .setEntryPointType(ConferenceDataService.EntryPointType.MORE)
         *         .setUri('https://example.com/moreJoiningInfo');
         */
        interface EntryPoint {
            /**
             * Adds the feature of the entry point, such as being toll or toll-free.
             * https://developers.google.com/apps-script/reference/conference-data/entry-point#addFeature(EntryPointFeature)
             * @param feature The feature to set.
             */
            addFeature(feature: EntryPointFeature): EntryPoint;

            /**
             * An access code for accessing the conference. Maximum length 128 characters. Optional.
             * https://developers.google.com/apps-script/reference/conference-data/entry-point#setAccessCode(String)
             * @param accessCode The access code to set.
             */
            setAccessCode(accessCode: string): EntryPoint;

            /**
             * Sets the type of this entry point. Required.
             * https://developers.google.com/apps-script/reference/conference-data/entry-point#setEntryPointType(EntryPointType)
             * @param entryPointType The entry point type to set.
             */
            setEntryPointType(entryPointType: EntryPointType): EntryPoint;

            /**
             * A meeting code for accessing the conference. Maximum length 128 characters. Optional.
             * https://developers.google.com/apps-script/reference/conference-data/entry-point#setMeetingCode(String)
             * @param meetingCode The meeting code to set.
             */
            setMeetingCode(meetingCode: string): EntryPoint;

            /**
             * A passcode for accessing the conference. Maximum length 128 characters. Optional.
             * https://developers.google.com/apps-script/reference/conference-data/entry-point#setPasscode(String)
             * @param passcode The passcode to set.
             */
            setPasscode(passcode: string): EntryPoint;

            /**
             * A password code for accessing the conference. Maximum length 128 characters. Optional.
             * https://developers.google.com/apps-script/reference/conference-data/entry-point#setPassword(String)
             * @param password The password to set.
             */
            setPassword(password: string): EntryPoint;

            /**
             * A PIN code for accessing the conference. Maximum length 128 characters. Optional.
             * https://developers.google.com/apps-script/reference/conference-data/entry-point#setPin(String)
             * @param pin The PIN code to set.
             */
            setPin(pin: string): EntryPoint;

            /**
             * The CLDR/ISO 3166 region code for the country associated with this entry point. Applicable only
             * to phone entry point types. Optional.
             * https://developers.google.com/apps-script/reference/conference-data/entry-point#setRegionCode(String)
             * @param regionCode The regionCode to set.
             */
            setRegionCode(regionCode: string): EntryPoint;

            /**
             * Sets the URI for joining the conference through this entry point. For PHONE entry points, the prefix tel: is required. For SIP entry points, the prefix sip: is required. For VIDEO and MORE entry points, the prefixes
             * http: or https: are required. Maximum length 1300 characters. Required.
             * https://developers.google.com/apps-script/reference/conference-data/entry-point#setUri(String)
             * @param uri The URI to set.
             */
            setUri(uri: string): EntryPoint;
        }
        /**
         * Enum that defines the features of the entry point that can be created by a conferencing add-on.
         */
        enum EntryPointFeature {
            UNKNOWN_FEATURE,
            TOLL,
            TOLL_FREE,
        }
        /**
         * Enum that defines the types of entry points that can be created by a conferencing add-on.
         */
        enum EntryPointType {
            VIDEO,
            PHONE,
            MORE,
            SIP,
        }
    }
}

declare var ConferenceDataService: GoogleAppsScript.Conference_Data.ConferenceDataService;
