import { CMIDecimal } from './CMIDataTypes';

/**
 * A set vocabulary phrase. Three possible vocabulary values:
 *
 * - "browse": The student wants to preview the materials, but not necessarily challenge the SCO for a grade.
 * - "normal": This indicates that the SCO should behave as designed for a student wanting to get credit for his learning.
 * - "review": The student has already seen the material at least once and been graded.
 *
 * If an unrecognized or unanticipated lesson_mode is received, then **normal** is assumed by the SCO.
 */
export type CMIVocabularyMode = 'normal' | 'review' | 'browse';

/**
 * A set vocabulary phrase. Six possible vocabulary values:
 *
 * - "passed": Necessary number of objectives in the SCO were mastered, or the necessary score was achieved. Student is considered to have completed the SCO and passed.
 * - "completed": The SCO may or may not be passed, but all the elements in the SCO were experienced by the student. The student is considered to have completed the SCO. For instance, passing may
 * depend on a certain score known to the LMS system. The SCO knows the raw score but not whether that raw score was high enough to pass.
 * - "failed": The SCO was not passed. All the SCO elements may or may not have been completed by the student. The student is considered to have completed the SCO and failed.
 * - "incomplete": The SCO was begun but not finished.
 * - "browsed": The student launched the SCO with a LMS mode of Browse on the initial attempt.
 * - "not attempted": Incomplete implies that the student made an attempt to perform the SCO, but for some reason was unable to finish it. Not attempted means that the student did not even begin the
 * SCO. Maybe he just read the table of contents, or the SCO abstract and decided he was not ready. Any algorithm within the SCO may be used to determine when the SCO moves from "not attempted" to
 * "incomplete".
 */
export type CMIVocabularyStatus = 'passed' | 'completed' | 'failed' | 'incomplete' | 'browsed' | 'not attempted';

/**
 * A set vocabulary phrase. Three possible vocabulary values:
 *
 * - "time-out": This indicates the SCO ended because the SCO has determined an excessive amount of time has elapsed, or the max_time_allowed has been exceeded. The max_time_allowed can be found in
 * the manifest (adlcp:maxtimeallowed for the item)
 * - "suspend": This indicates the student leaves the SCO with the intent of returning to it later at the point where he/she left.
 * - "logout": This indicates that the student logged out from within the SCO instead of returning to the LMS system to log out. This implies that the SCO passed control to the LMS system, and the
 * LMS system automatically logged the student out of the course - after updating the appropriate data model elements.
 * - "": The empty string vocabulary should be used to represent a normal exit state.
 */
export type CMIVocabularyExit = 'time-out' | 'suspend' | 'logout' | '';

/**
 * A set vocabulary phrase. Two possible vocabulary values:
 * - "credit": This means that the student is taking the SCO for credit. The LMS system is telling the SCO that if the SCO sends data to the LMS system, the LMS system will credit it to the student.
 * - "no-credit": This means that the student is taking the SCO for no-credit. His current credit if any (for instance a score of 80 and a status of passed) will not be changed by his performance in
 * this SCO. The LMS system is telling the SCO that if the SCO sends data to the LMS system it will not change the student's accreditation.
 */
export type CMIVocabularyCredit = 'credit' | 'no-credit';

/**
 * A set vocabulary phrase. Three possible vocabulary values:
 *
 * - "ab-initio": This indicates it is the first time the student is entering the SCO. Because the student may have passed all of the objectives in an SCO by completing a pre-test, the lesson_status
 * of not attempted is not a reliable indicator. That is, a SCO may be passed without the student having ever seen it.
 * - "resume": This indicates that the student was in the SCO earlier. The student is resuming a suspended SCO.
 * - "": The empty string should be used to represent an entry into the SCO that is neither an initial (ab-initio) nor a continuation from a suspended state (resume). A scenario that this might be
 * used is if the SCO was already completed and then later it was loaded for review purposes. In this case it was neither an initial launch (ab-initio) nor a continuation from a suspended state
 * (resume).
 */
export type CMIVocabularyEntry = 'ab-initio' | 'resume' | '';

export type CMIVocabularyInteraction =
    | 'true-false'
    | 'choice'
    | 'fill-in'
    | 'numeric'
    | 'likert'
    | 'matching'
    | 'performance'
    | 'sequencing';

export type CMIVocabularyResult = 'correct' | 'wrong' | 'unanticipated' | 'neutral' | CMIDecimal;

export type CMIVocabularyTimeLimitAction = `${'exit' | 'continue'},${'message' | 'no message'}`;
