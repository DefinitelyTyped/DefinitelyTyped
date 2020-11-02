// Type definitions for Google Apps Script 2020-11-02
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  export module Conference_Data {
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
    export interface ConferenceData {
      printJson(): string;
    }

    /**
     * Builder for creating for ConferenceData objects.
     */
    export interface ConferenceDataBuilder {
      addConferenceParameter(conferenceParameter: ConferenceParameter): ConferenceDataBuilder;
      addEntryPoint(entryPoint: EntryPoint): ConferenceDataBuilder;
      build(): ConferenceData;
      setConferenceId(conferenceId: string): ConferenceDataBuilder;
      setConferenceSolutionId(conferenceSolutionId: string): ConferenceDataBuilder;
      setError(conferenceError: ConferenceError): ConferenceDataBuilder;
      setNotes(notes: string): ConferenceDataBuilder;
    }

    /**
     * Service that scripts can use to create conferencing information.
     */
    export interface ConferenceDataService {
      ConferenceErrorType: typeof ConferenceErrorType;
      EntryPointFeature: typeof EntryPointFeature;
      EntryPointType: typeof EntryPointType;
      newConferenceDataBuilder(): ConferenceDataBuilder;
      newConferenceError(): ConferenceError;
      newConferenceParameter(): ConferenceParameter;
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
    export interface ConferenceError {
      setAuthenticationUrl(authenticationUrl: string): ConferenceError;
      setConferenceErrorType(conferenceErrorType: ConferenceErrorType): ConferenceError;
    }

    /**
     * Enum that defines the types of errors that you can specify in a ConferenceError.
     */
    export enum ConferenceErrorType { AUTHENTICATION, CONFERENCE_SOLUTION_FORBIDDEN, PERMANENT, PERMISSION_DENIED, TEMPORARY, UNKNOWN }

    /**
     * Solution-specific parameter available fo the add-on's use. This parameter is persisted with the
     * conference data and, if an update or delete is needed, is passed to the add-on. Example usage:
     *
     *     var conferenceParameter = ConferenceDataService.newConferenceParameter()
     *         .setKey('meetingId')
     *         .setValue('123456');
     */
    export interface ConferenceParameter {
      setKey(key: string): ConferenceParameter;
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
    export interface EntryPoint {
      addFeature(feature: EntryPointFeature): EntryPoint;
      setAccessCode(accessCode: string): EntryPoint;
      setEntryPointType(entryPointType: EntryPointType): EntryPoint;
      setMeetingCode(meetingCode: string): EntryPoint;
      setPasscode(passcode: string): EntryPoint;
      setPassword(password: string): EntryPoint;
      setPin(pin: string): EntryPoint;
      setRegionCode(regionCode: string): EntryPoint;
      setUri(uri: string): EntryPoint;
    }

    /**
     * Enum that defines the features of the entry point that can be created by a conferencing add-on.
     */
    export enum EntryPointFeature { UNKNOWN_FEATURE, TOLL, TOLL_FREE }

    /**
     * Enum that defines the types of entry points that can be created by a conferencing add-on.
     */
    export enum EntryPointType { VIDEO, PHONE, MORE, SIP }

  }
}

declare var ConferenceDataService: GoogleAppsScript.Conference_Data.ConferenceDataService;
