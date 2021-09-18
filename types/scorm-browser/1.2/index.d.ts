import {
    CMIBoolean,
    CMIBlank,
    CMIString255,
    CMIIdentifier,
    CMIDecimal,
    CMITimeSpan,
    CMIString4096,
    CMIInteger,
    CMISInteger,
    CMITime,
    CMIFeedback,
} from './CMIDataTypes';
import {
    CMIElementComments,
    CMIElementCommentsFromLMS,
    CMIElementCoreChildren,
    CMIElementCoreCredit,
    CMIElementCoreEntry,
    CMIElementCoreExit,
    CMIElementCoreLessonLocation,
    CMIElementCoreLessonMode,
    CMIElementCoreLessonStatus,
    CMIElementCoreScoreChildren,
    CMIElementCoreScoreMax,
    CMIElementCoreScoreMin,
    CMIElementCoreScoreRaw,
    CMIElementCoreSessionTime,
    CMIElementCoreStudentId,
    CMIElementCoreStudentName,
    CMIElementCoreTotalTime,
    CMIElementInteractionsChildren,
    CMIElementInteractionsCount,
    CMIElementInteractionsNCorrectResponsesCount,
    CMIElementInteractionsNCorrectResponsesNPattern,
    CMIElementInteractionsNID,
    CMIElementInteractionsNLatency,
    CMIElementInteractionsNObjectivesCount,
    CMIElementInteractionsNResult,
    CMIElementInteractionsNStudentResponse,
    CMIElementInteractionsNTime,
    CMIElementInteractionsNType,
    CMIElementInteractionsNWeighting,
    CMIElementLaunchData,
    CMIElementObjectivesChildren,
    CMIElementObjectivesCount,
    CMIElementObjectivesNID,
    CMIElementObjectivesNScoreChildren,
    CMIElementObjectivesNScoreMax,
    CMIElementObjectivesNScoreMin,
    CMIElementObjectivesNScoreRaw,
    CMIElementObjectivesNStatus,
    CMIElementStudentDataChildren,
    CMIElementStudentDataMasteryScore,
    CMIElementStudentDataMaxTimeAllowed,
    CMIElementStudentDataTimeLimitAction,
    CMIElementStudentPreferenceAudio,
    CMIElementStudentPreferenceChildren,
    CMIElementStudentPreferenceLanguage,
    CMIElementStudentPreferenceSpeed,
    CMIElementStudentPreferenceText,
    CMIElementSuspendData,
    CMIElementVersion,
} from './CMIElement';
import { CMIErrorCode } from './CMIErrorCode';
import {
    CMIVocabularyCredit,
    CMIVocabularyEntry,
    CMIVocabularyExit,
    CMIVocabularyInteraction,
    CMIVocabularyMode,
    CMIVocabularyResult,
    CMIVocabularyStatus,
    CMIVocabularyTimeLimitAction,
} from './CMIVocabulary';

export * from './CMIDataTypes';
export * from './CMIElement';
export * from './CMIErrorCode';
export * from './CMIVocabulary';

/**
 * The Sharable Content Object Reference Model (SCORM) Version 1.2 Run-Time Environment
 */
export interface SCORM12 {
    // Execution State

    /**
     * Begins a communication session with the LMS.
     * @param param The “” parameter is required by all SCORM methods that don’t accept any other arguments.
     */
    LMSInitialize(param: CMIBlank): CMIBoolean;

    /**
     * Ends a communication session with the LMS.
     * @param param The “” parameter is required by all SCORM methods that don’t accept any other arguments.
     */
    LMSFinish(param: CMIBlank): CMIBoolean;

    // Data Transfer

    /**
     * The _children keyword is used to determine all of the elements in the core category that are supported by the LMS. If an element has no children, but is supported, an empty string is returned.
     * If an element is not supported, an empty string is returned. A subsequent request for last error can verify that the element is not supported.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementCoreChildren): CMIString255;

    /**
     * Unique alpha-numeric code / identifier that refers to a single user of the LMS system.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementCoreStudentId): CMIIdentifier;

    /**
     * Normally, the official name used for the student on the course roster. A complete name, not just a first name.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementCoreStudentName): CMIString255;

    /**
     * This corresponds to the SCO exit point passed to the LMS system the last time the student experienced the SCO. This provides one mechanism to let the student return to a SCO at the same place
     * he left it earlier. In other words, this element can identify the student's exit point and that exit point can be used by the SCO as an entry point the next time the student runs the SCO.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementCoreLessonLocation): CMIString255;

    /**
     * Indicates whether the student is being credited by the LMS system based on performance (pass/fail and score) in this SCO.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementCoreCredit): CMIVocabularyCredit;

    /**
     * This is the current student status as determined by the LMS system. Six status values are possible.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementCoreLessonStatus): CMIVocabularyStatus;

    /**
     * Indication of whether the student has been in the SCO before.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementCoreEntry): CMIVocabularyEntry;

    /**
     * The _children keyword is used to determine all of the elements in the core category that are supported by the LMS. If an element has no children, but is supported, an empty string is returned.
     * If an element is not supported, an empty string is returned. A subsequent request for last error can verify that the element is not supported.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementCoreScoreChildren): CMIString255;

    /**
     * Indication of the performance of the student during his last attempt on the SCO. This score may be determined and calculated in any manner that makes sense to the SCO designer. For instance,
     * it could reflect the percentage of objectives complete, it could be the raw score on a multiple choice test, or it could indicate the number of correct first responses to embedded questions in
     * a SCO.
     *
     * The cmi.core.score.raw must be a normalized value between 0 and 100.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementCoreScoreRaw): CMIDecimal | CMIBlank;

    /**
     * The maximum score or total number that the student could have achieved.
     *
     * The cmi.core.score.max must be a normalized value between 0 and 100.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementCoreScoreMax): CMIDecimal | CMIBlank;

    /**
     * The minimum score that the student could have achieved.
     *
     * The cmi.core.score.min must be a normalized value between 0 and 100.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementCoreScoreMin): CMIDecimal | CMIBlank;

    /**
     * Accumulated time of all the student's sessions in the SCO.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementCoreTotalTime): CMITimeSpan;

    /**
     * Identifies the SCO behavior desired after launch. Many SCOs have a single "behavior". Some SCOs, however, can present different amounts of information, or present information in different
     * sequences, or present information reflecting  different training philosophies based on an instructor's or designer's decisions. Designers may enable SCOs to behave in a virtually unlimited
     * number of ways. This standard supports the communication of three parameters that may result in different SCO behaviors.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementCoreLessonMode): CMIVocabularyMode;

    /**
     * Unique information generated by the SCO during previous uses that is needed for the current use. This unique information is applicable to a launching SCO. Normally this is the element used
     * by the SCO for restart information. This is normally data that is created by the SCO and stored by the LMS to pass back to the SCO the next time the SCO is run.
     *
     * The LMS must set aside a space for this group for each SCO for each student. It stores this data and returns it to the SCO when it is run again. The LMS shall retain this data as long as the
     * student is in the course.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementSuspendData): CMIString4096;

    /**
     * Unique information generated at the SCO's creation that is needed for every use. Without this information, a SCO may not execute.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementLaunchData): CMIString4096;

    /**
     * Freeform feedback from the SCO. For example, the student may have the option of leaving comments at any point in the SCO, or they may be asked for comments at the end of the SCO. The comment
     * may also have an indication of where or when in the SCO it was created. A location may be tagged and embedded in the comment.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementComments): CMIString4096;

    /**
     * This element represents comments that would come from the LMS. An example of how this might be used is in the form of instructor comments. These types of comments are directed at the student
     * that the SCO may present to the student when appropriate.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementCommentsFromLMS): CMIString4096;

    /**
     * The _children keyword is used to determine all of the elements in the core category that are supported by the LMS. If an element has no children, but is supported, an empty string is returned.
     * If an element is not supported, an empty string is returned. A subsequent request for last error can verify that the element is not supported.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementObjectivesChildren): CMIString255;

    /**
     * The _count keyword is used to determine the current number of records in the cmi.objectives list. The total number of entries is returned. If the SCO does not know the count of the
     * cmi.objectives records, it can begin the current student count with 0. This would overwrite any information about objectives currently stored in the first index position. Overwriting or
     * appending is a decision that is made by the SCO author when he/she creates the SCO.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementObjectivesCount): CMIInteger;

    /**
     * An internally, developer defined, SCO specific identifier for an objective.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementObjectivesNID): CMIIdentifier;

    /**
     * The _children keyword is used to determine all of the elements in the core category that are supported by the LMS. If an element has no children, but is supported, an empty string is returned.
     * If an element is not supported, an empty string is returned. A subsequent request for last error can verify that the element is not supported.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementObjectivesNScoreChildren): CMIString255;

    /**
     * Numerical representation of student performance after each attempt on the objective. May be unprocessed raw score.
     *
     * The cmi.objectives.n.score.raw must be a normalized value between 0 and 100.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementObjectivesNScoreRaw): CMIDecimal | CMIBlank;

    /**
     * The maximum score or total number that the student could have achieved on the objective.
     *
     * The cmi.objectives.n.score.max must be a normalized value between 0 and 100.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementObjectivesNScoreMax): CMIDecimal | CMIBlank;

    /**
     * The minimum score that the student could have achieved on the objective.
     *
     * The cmi.objectives.n.score.min must be a normalized value between 0 and 100.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementObjectivesNScoreMin): CMIDecimal | CMIBlank;

    /**
     * The status of the SCO's objective obtained by the student after each attempt to master the SCO's objective. Only 6 possible vocabulary values: passed, completed, failed, incomplete, not
     * attempted or browsed.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementObjectivesNStatus): CMIVocabularyStatus;

    /**
     * The _children keyword is used to determine all of the elements in the core category that are supported by the LMS. If an element has no children, but is supported, an empty string is returned.
     * If an element is not supported, an empty string is returned. A subsequent request for last error can verify that the element is not supported.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementStudentDataChildren): CMIString255;

    /**
     * The passing score, as determined outside the SCO. When the SCO score is greater than or equal to the mastery score, the student is considered to have passed, or mastered the content. In some
     * cases, the SCO does not know what this passing score is, because it is determined by the LMS system.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementStudentDataMasteryScore): CMIDecimal;

    /**
     * The amount of time the student is allowed to have in the current attempt on the SCO. See time_limit_action for the SCO's expected response to exceeding the limit.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementStudentDataMaxTimeAllowed): CMITimeSpan;

    /**
     * Tells the SCO what to do when the max_time_allowed is exceeded. There iare two arguments for this element:
     *
     * - What the SCO should do - exit or continue
     * - What the student should see - message or no message
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementStudentDataTimeLimitAction): CMIVocabularyTimeLimitAction;

    /**
     * The _children keyword is used to determine all of the elements in the core category that are supported by the LMS. If an element has no children, but is supported, an empty string is returned.
     * If an element is not supported, an empty string is returned. A subsequent request for last error can verify that the element is not supported.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementStudentPreferenceChildren): CMIString255;

    /**
     * Audio may be turned off, or its volume controlled. The element indicates whether the audio is turned off, or on.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementStudentPreferenceAudio): CMISInteger;

    /**
     * For SCOs with multi-lingual capability, this element should be used to identify in what language the information should be delivered.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementStudentPreferenceLanguage): CMIString255;

    /**
     * SCOs may sometimes be difficult to understand because of the pace. This element controls the pace of the content delivery.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementStudentPreferenceSpeed): CMISInteger;

    /**
     * In a SCO designed for audio, it may be possible to turn off the audio, and view the audio content in a text window. Or it may be possible to leave the audio on, and request that the text be
     * presented simultaneously with the audio. Or it may be possible to make the text disappear so that only the audio and the screen graphics are available. This element defines whether the audio
     * text appears in the SCO.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementStudentPreferenceText): CMISInteger;

    /**
     * The _children keyword is used to determine all of the elements in the core category that are supported by the LMS. If an element has no children, but is supported, an empty string is returned.
     * If an element is not supported, an empty string is returned. A subsequent request for last error can verify that the element is not supported.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementInteractionsChildren): CMIString255;

    /**
     * The _count keyword is used to determine the current number of records in the cmi.interactions list. The total number of entries is returned. If the SCO does not know the count of the
     * cmi.interactions records, it can begin the current student count with 0. This would overwrite any information about interactions currently stored in the first index position. Overwriting or
     * appending is a decision that is made by the SCO author when he/she creates the SCO.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementInteractionsCount): CMIInteger;

    /**
     * The _count keyword is used to determine the current number of records in the cmi.interactions objective id list. The total number of entries is returned. If the SCO does not know the count of
     * the cmi.interactions.n.objecives records, it can begin the current student count with 0. This would overwrite any information about objective ids currently stored in the first index position.
     * Overwriting or appending is a decision that is made by the SCO author when he/she creates the SCO.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementInteractionsNObjectivesCount): CMIInteger;

    /**
     * The _count keyword is used to determine the current number of records in the cmi.interactions correct responses list. The total number of entries is returned. If the SCO does not know the
     * count of the cmi.interactions.n.correct_responses records, it can begin the current student count with 0. This would overwrite any information about correct responses currently stored in the
     * first index position. Overwriting or appending is a decision that is made by the SCO author when he/she creates the SCO.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementInteractionsNCorrectResponsesCount): CMIInteger;

    /**
     * The _version keyword is used to determine the version of the data model supported by the LMS.
     */
    // tslint:disable-next-line:unified-signatures
    LMSGetValue(element: CMIElementVersion): CMIString255;

    /**
     * This corresponds to the SCO exit point passed to the LMS system the last time the student experienced the SCO. This provides one mechanism to let the student return to a SCO at the same place
     * he left it earlier. In other words, this element can identify the student's exit point and that exit point can be used by the SCO as an entry point the next time the student runs the SCO.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementCoreLessonLocation, value: CMIString255): CMIBoolean;

    /**
     * This is the current student status as determined by the LMS system. Six status values are possible.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementCoreLessonStatus, value: CMIVocabularyStatus): CMIBoolean;

    /**
     * Indication of the performance of the student during his last attempt on the SCO. This score may be determined and calculated in any manner that makes sense to the SCO designer. For instance,
     * it could reflect the percentage of objectives complete, it could be the raw score on a multiple choice test, or it could indicate the number of correct first responses to embedded questions in
     * a SCO.
     *
     * The cmi.core.score.raw must be a normalized value between 0 and 100.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementCoreScoreRaw, value: CMIDecimal | CMIBlank): CMIBoolean;

    /**
     * The maximum score or total number that the student could have achieved.
     *
     * The cmi.core.score.max must be a normalized value between 0 and 100.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementCoreScoreMax, value: CMIDecimal | CMIBlank): CMIBoolean;

    /**
     * The minimum score that the student could have achieved.
     *
     * The cmi.core.score.min must be a normalized value between 0 and 100.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementCoreScoreMin, value: CMIDecimal | CMIBlank): CMIBoolean;

    /**
     * An indication of how or why the student has left the SCO.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementCoreExit, value: CMIVocabularyExit): CMIBoolean;

    /**
     * This is the amount of time in hours, minutes and seconds that the student has spent in the SCO at the time they leave it. That is, this represents the time from beginning of the session to the
     * end of a single use of the SCO.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementCoreSessionTime, value: CMITimeSpan): CMIBoolean;

    /**
     * Unique information generated by the SCO during previous uses that is needed for the current use. This unique information is applicable to a launching SCO. Normally this is the element used by
     * the SCO for restart information. This is normally data that is created by the SCO and stored by the LMS to pass back to the SCO the next time the SCO is run.
     *
     * The LMS must set aside a space for this group for each SCO for each student. It stores this data and returns it to the SCO when it is run again. The LMS shall retain this data as long as the
     * student is in the course.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementSuspendData, value: CMIString4096): CMIBoolean;

    /**
     * Freeform feedback from the SCO. For example, the student may have the option of leaving comments at any point in the SCO, or they may be asked for comments at the end of the SCO. The comment
     * may also have an indication of where or when in the SCO it was created. A location may be tagged and embedded in the comment.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementComments, value: CMIString4096): CMIBoolean;

    /**
     * An internally, developer defined, SCO specific identifier for an objective.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementObjectivesNID, value: CMIIdentifier): CMIBoolean;

    /**
     * Numerical representation of student performance after each attempt on the objective. May be unprocessed raw score.
     *
     * The cmi.objectives.n.score.raw must be a normalized value between 0 and 100.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementObjectivesNScoreRaw, value: CMIDecimal | CMIBlank): CMIBoolean;

    /**
     * The maximum score or total number that the student could have achieved on the objective.
     *
     * The cmi.objectives.n.score.max must be a normalized value between 0 and 100.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementObjectivesNScoreMax, value: CMIDecimal | CMIBlank): CMIBoolean;

    /**
     * The minimum score that the student could have achieved on the objective.
     *
     * The cmi.objectives.n.score.min must be a normalized value between 0 and 100.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementObjectivesNScoreMin, value: CMIDecimal | CMIBlank): CMIBoolean;

    /**
     * The status of the SCO's objective obtained by the student after each attempt to master the SCO's objective. Only 6 possible vocabulary values: passed, completed, failed, incomplete, not
     * attempted or browsed.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementObjectivesNStatus, value: CMIVocabularyStatus): CMIBoolean;

    /**
     * Audio may be turned off, or its volume controlled. The element indicates whether the audio is turned off, or on.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementStudentPreferenceAudio, value: CMISInteger): CMIBoolean;

    /**
     * For SCOs with multi-lingual capability, this element should be used to identify in what language the information should be delivered.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementStudentPreferenceLanguage, value: CMIString255): CMIBoolean;

    /**
     * SCOs may sometimes be difficult to understand because of the pace. This element controls the pace of the content delivery.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementStudentPreferenceSpeed, value: CMISInteger): CMIBoolean;

    /**
     * In a SCO designed for audio, it may be possible to turn off the audio, and view the audio content in a text window. Or it may be possible to leave the audio on, and request that the text be
     * presented simultaneously with the audio. Or it may be possible to make the text disappear so that only the audio and the screen graphics are available. This element defines whether the audio
     * text appears in the SCO.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementStudentPreferenceText, value: CMISInteger): CMIBoolean;

    /**
     * Unique identifier for an interaction.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementInteractionsNID, value: CMIIdentifier): CMIBoolean;

    /**
     * Identification of when the student interaction was completed.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementInteractionsNTime, value: CMITime): CMIBoolean;

    /**
     * Indication of which category of interaction is recorded. The type of interction determines how the interaction response should be interpreted. Eight possible question types are defined. They
     * are not meant to be limiting. There are other types of questions. However, if one of these eight types is used, these are the identifiers that match those types.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementInteractionsNType, value: CMIVocabularyInteraction): CMIBoolean;

    /**
     * Description of possible student responses to the interaction. There may be more than one correct response, and some responses may be more correct than others.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementInteractionsNCorrectResponsesNPattern, value: CMIFeedback): CMIBoolean;

    /**
     * Interactions vary in importance. The weighting is a factor which is used to identify the relative importance of one interaction compared to another. For instance, if the first interaction has
     * a weight of 15 and the second interaction has a weight of 25, then any combined score that reflects weighting would be more influenced by the second interaction.
     *
     * If all interactions are equal in importance, then each interaction has the same weight.
     *
     * A weight of 0 indicates that the interaction should not be counted in the weighted final score.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementInteractionsNWeighting, value: CMIDecimal): CMIBoolean;

    /**
     * Description of possible responses to the interaction. There may be more than one correct response, and some responses may be more correct than others.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementInteractionsNStudentResponse, value: CMIFeedback): CMIBoolean;

    /**
     * How the system judges the described response.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementInteractionsNResult, value: CMIVocabularyResult): CMIBoolean;

    /**
     * The time from the presentation of the stimulus to the completion of the measurable response.
     */
    // tslint:disable-next-line:unified-signatures
    LMSSetValue(element: CMIElementInteractionsNLatency, value: CMITimeSpan): CMIBoolean;

    /**
     * Indicates to the LMS that all data should be persisted (not required).
     * @param param The “” parameter is required by all SCORM methods that don’t accept any other arguments.
     */
    LMSCommit(param: CMIBlank): CMIBoolean;

    // State Management

    /**
     * Returns the error code that resulted from the last API call.
     */
    LMSGetLastError(): CMIErrorCode;

    /**
     * Returns a short string describing the specified error code.
     * @param errorCode The CMIErrorCode data type is a three-digit number, represented by a string, that corresponds to one of the SCORM Run-Time error codes.
     */
    LMSGetErrorString(errorCode: CMIErrorCode): string;

    /**
     * Returns detailed information about the last error that occurred.
     * @param errorCode The CMIErrorCode data type is a three-digit number, represented by a string, that corresponds to one of the SCORM Run-Time error codes.
     */
    LMSGetDiagnostic(errorCode: CMIErrorCode): string;
}
