export type n = string; // NOTE: Ideally this would be number but it would force the developer to use template literals over the toString method

/**
 * Listing of supported data model elements
 */
export type CMIElementCoreChildren = 'cmi.core._children';

/**
 * Identifies the student on behalf of whom the SCO was launched
 */
export type CMIElementCoreStudentId = 'cmi.core.student_id';

/**
 * Name provided for the student by the LMS
 */
export type CMIElementCoreStudentName = 'cmi.core.student_name';

/**
 * The learner’s current location in the SCO
 */
export type CMIElementCoreLessonLocation = 'cmi.core.lesson_location';

/**
 * Indicates whether the learner will be credited for performance in the SCO
 */
export type CMIElementCoreCredit = 'cmi.core.credit';

/**
 * Indicates whether the learner has completed and satisfied the requirements for the SCO
 */
export type CMIElementCoreLessonStatus = 'cmi.core.lesson_status';

/**
 * Asserts whether the learner has previously accessed the SCO
 */
export type CMIElementCoreEntry = 'cmi.core.entry';

/**
 * Listing of supported data model elements
 */
export type CMIElementCoreScoreChildren = 'cmi.core.score_children';

/**
 * Number that reflects the performance of the learner relative to the range bounded by the values of min and max
 */
export type CMIElementCoreScoreRaw = 'cmi.core.score.raw';

/**
 * Maximum value in the range for the raw score
 */
export type CMIElementCoreScoreMax = 'cmi.core.score.max';

/**
 * Minimum value in the range for the raw score
 */
export type CMIElementCoreScoreMin = 'cmi.core.score.min';

/**
 * Sum of all of the learner’s session times accumulated in the current learner attempt
 */
export type CMIElementCoreTotalTime = 'cmi.core.total_time';

/**
 * Identifies one of three possible modes in which the SCO may be presented to the learner
 */
export type CMIElementCoreLessonMode = 'cmi.core.lesson_mode';

/**
 * Indicates how or why the learner left the SCO
 */
export type CMIElementCoreExit = 'cmi.core.exit';

/**
 * Amount of time that the learner has spent in the current learner session for this SCO
 */
export type CMIElementCoreSessionTime = 'cmi.core.session_time';

/**
 * Provides space to store and retrieve data between learner sessions
 */
export type CMIElementSuspendData = 'cmi.suspend_data';

/**
 * Data provided to a SCO after launch, initialized from the dataFromLMS manifest element
 */
export type CMIElementLaunchData = 'cmi.launch_data';

/**
 * Textual input from the learner about the SCO
 */
export type CMIElementComments = 'cmi.comments';

/**
 * Comments or annotations associated with a SCO
 */
export type CMIElementCommentsFromLMS = 'cmi.comments_from_lms';

/**
 * Listing of supported data model elements
 */
export type CMIElementObjectivesChildren = 'cmi.objectives._children';

/**
 * Current number of objectives being stored by the LMS
 */
export type CMIElementObjectivesCount = 'cmi.objectives._count';

/**
 * Unique label for the objective
 */
export type CMIElementObjectivesNID = `cmi.objectives.${n}.id`;

/**
 * Listing of supported data model elements
 */
export type CMIElementObjectivesNScoreChildren = `cmi.objectives.${n}.score._children`;

/**
 * Number that reflects the performance of the learner, for the objective, relative to the range bounded by the values of min and max
 */
export type CMIElementObjectivesNScoreRaw = `cmi.objectives.${n}.score.raw`;

/**
 * Maximum value, for the objective, in the range for the raw
 */
export type CMIElementObjectivesNScoreMax = `cmi.objectives.${n}.score.max`;

/**
 * Minimum value, for the objective, in the range for the raw
 */
export type CMIElementObjectivesNScoreMin = `cmi.objectives.${n}.score.min`;

/**
 * Indicates whether the learner has completed or satisfied the objective
 */
export type CMIElementObjectivesNStatus = `cmi.objectives.${n}.status`;

/**
 * Listing of supported data model elements
 */
export type CMIElementStudentDataChildren = 'cmi.student_data._children';

/**
 * Passing score required to master the SCO
 */
export type CMIElementStudentDataMasteryScore = 'cmi.student_data.mastery_score';

/**
 * Amount of accumulated time the learner is allowed to use a SCO
 */
export type CMIElementStudentDataMaxTimeAllowed = 'cmi.student_data.max_time_allowed';

/**
 * Indicates what the SCO should do when max_time_allowed is exceeded
 */
export type CMIElementStudentDataTimeLimitAction = 'cmi.student_data.time_limit_action';

/**
 * Listing of supported data model elements
 */
export type CMIElementStudentPreferenceChildren = 'cmi.student_preference._children';

/**
 * Specifies an intended change in perceived audio level
 */
export type CMIElementStudentPreferenceAudio = 'cmi.student_preference.audio';

/**
 * The student’s preferred language for SCOs with multilingual capability
 */
export type CMIElementStudentPreferenceLanguage = 'cmi.student_preference.language';

/**
 * The learner’s preferred relative speed of content delivery
 */
export type CMIElementStudentPreferenceSpeed = 'cmi.student_preference.speed';

/**
 * Specifies whether captioning text corresponding to audio is displayed
 */
export type CMIElementStudentPreferenceText = 'cmi.student_preference.text';

/**
 * Listing of supported data model elements
 */
export type CMIElementInteractionsChildren = 'cmi.interactions._children';

/**
 * Current number of interactions being stored by the LMS
 */
export type CMIElementInteractionsCount = 'cmi.interactions._count';

/**
 * Unique label for the interaction
 */
export type CMIElementInteractionsNID = `cmi.interactions.${n}.id`;

/**
 * Current number of objectives (i.e., objective identifiers) being stored by the LMS for this interaction
 */
export type CMIElementInteractionsNObjectivesCount = `cmi.interactions.${n}.objectives._count`;

/**
 * Label for objectives associated with the interaction
 */
export type CMIElementInteractionsNObjectivesID = `cmi.interactions.${n}.objectives.${n}.id`;

/**
 * Point in time at which the interaction was first made available to the student for student interaction and response
 */
export type CMIElementInteractionsNTime = `cmi.interactions.${n}.time`;

/**
 * Which type of interaction is recorded
 */
export type CMIElementInteractionsNType = `cmi.interactions.${n}.type`;

/**
 * Current number of correct responses being stored by the LMS for this interaction
 */
export type CMIElementInteractionsNCorrectResponsesCount = `cmi.interactions.${n}.correct_responses._count`;

/**
 * One correct response pattern for the interaction
 */
export type CMIElementInteractionsNCorrectResponsesNPattern = `cmi.interactions.${n}.correct_responses.${n}.pattern`;

/**
 * Weight given to the interaction relative to other interactions
 */
export type CMIElementInteractionsNWeighting = `cmi.interactions.${n}.weighting`;

/**
 * Data generated when a student responds to an interaction
 */
export type CMIElementInteractionsNStudentResponse = `cmi.interactions.${n}.student_response`;

/**
 * Judgment of the correctness of the learner response
 */
export type CMIElementInteractionsNResult = `cmi.interactions.${n}.result`;

/**
 * Time elapsed between the time the interaction was made available to the learner for response and the time of the first response
 */
export type CMIElementInteractionsNLatency = `cmi.interactions.${n}.latency`;

/**
 * The version of the data model supported by the LMS
 */
export type CMIElementVersion = 'cmi._version';
