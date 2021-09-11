import {
    CMIBlank,
    CMIBoolean,
    CMIDecimal,
    CMIFeedbackChoice,
    CMIFeedbackLikert,
    CMIFeedbackMatching,
    CMIFeedbackNumeric,
    CMIFeedbackTrueFalse,
} from 'scorm-browser/1.2';

if (window.API) {
    // Data Types
    const cmiBlank: CMIBlank = '';

    const cmiBooleanTrue: CMIBoolean = 'true';
    const cmiBooleanFalse: CMIBoolean = 'false';

    const cmiDecimalNegative: CMIDecimal = '-4';
    const cmiDecimalPositive: CMIDecimal = '4';
    const cmiDecimalNegativeDecimal: CMIDecimal = '-4.4';

    const cmiFeedbackTrueFalseBinaryFalse: CMIFeedbackTrueFalse = '0';
    const cmiFeedbackTrueFalseBinaryTrue: CMIFeedbackTrueFalse = '1';
    const cmiFeedbackTrueFalseCharFalse: CMIFeedbackTrueFalse = 'f';
    const cmiFeedbackTrueFalseCharTrue: CMIFeedbackTrueFalse = 't';

    const cmiFeedbackChoiceChar: CMIFeedbackChoice = 'a';
    const cmiFeedbackChoiceCharDouble: CMIFeedbackChoice = 'a,b';
    const cmiFeedbackChoiceCharMultiple: CMIFeedbackChoice = 'a,b,c';
    const cmiFeedbackChoiceCharDoubleAll: CMIFeedbackChoice = '{a,b}';
    const cmiFeedbackChoiceCharMultipleAll: CMIFeedbackChoice = '{a,b,c,d,e}';
    const cmiFeedbackChoiceNum: CMIFeedbackChoice = '0';
    const cmiFeedbackChoiceNumDouble: CMIFeedbackChoice = '0,1';
    const cmiFeedbackChoiceNumMultiple: CMIFeedbackChoice = '0,1,2';
    const cmiFeedbackChoiceNumDoubleAll: CMIFeedbackChoice = '{0,1}';
    const cmiFeedbackChoiceNumMultipleAll: CMIFeedbackChoice = '{0,1,2,3,4}';

    const cmiFeedbackNumericNegative: CMIFeedbackNumeric = '-4';
    const cmiFeedbackNumericPositive: CMIFeedbackNumeric = '4';
    const cmiFeedbackNumericNegativeDecimal: CMIFeedbackNumeric = '-4.4';

    const cmiFeedbackLikertChar: CMIFeedbackLikert = 'a';
    const cmiFeedbackLikertNum: CMIFeedbackLikert = '0';

    const cmiFeedbackMatching: CMIFeedbackMatching = 'a.1,b.2,c.3';
    const cmiFeedbackMatchingAll: CMIFeedbackMatching = '{a.1,b.2,c.3}';

    const cmiTime = '00:00:00';
    const cmiTimeDecimalSingle = '00:00:00.1';
    const cmiTimeDecimalDouble = '00:00:00.12';

    const cmiTimeSpan = '00:00:00';
    const cmiTimeSpanDecimalSingle = '00:00:00.1';
    const cmiTimeSpanDecimalDouble = '00:00:00.12';
    const cmiTimeSpanManyHours = '1000:00:00';

    // Methods
    const initSuccess: string = window.API.LMSInitialize('');
    const commitSuccess: string = window.API.LMSCommit('');
    const finishSuccess: string = window.API.LMSFinish('');
    const errorCode = window.API.LMSGetLastError();
    const errorString: string = window.API.LMSGetErrorString(errorCode);
    const diagnostic: string = window.API.LMSGetDiagnostic(errorCode);

    const coreChildren: string = window.API.LMSGetValue('cmi.core._children');
    const coreStudentID: string = window.API.LMSGetValue('cmi.core.student_id');
    const coreStudentName: string = window.API.LMSGetValue('cmi.core.student_name');
    const coreSCOLocation: string = window.API.LMSGetValue('cmi.core.lesson_location');
    const creditFlag: string = window.API.LMSGetValue('cmi.core.credit');
    const lessonStatus: string = window.API.LMSGetValue('cmi.core.lesson_status');
    const entryStatus: string = window.API.LMSGetValue('cmi.core.entry');
    const scoreChildren: string = window.API.LMSGetValue('cmi.core.score_children');
    const scoreRaw: string = window.API.LMSGetValue('cmi.core.score.raw');
    const scoreMax: string = window.API.LMSGetValue('cmi.core.score.max');
    const scoreMin: string = window.API.LMSGetValue('cmi.core.score.min');
    const totalTime: string = window.API.LMSGetValue('cmi.core.total_time');
    const lessonMode: string = window.API.LMSGetValue('cmi.core.lesson_mode');
    const suspendData: string = window.API.LMSGetValue('cmi.suspend_data');
    const launchData: string = window.API.LMSGetValue('cmi.launch_data');
    const comments: string = window.API.LMSGetValue('cmi.comments');
    const commentsFromLMS: string = window.API.LMSGetValue('cmi.comments_from_lms');
    const objChildren: string = window.API.LMSGetValue('cmi.objectives._children');
    const totalObj: string = window.API.LMSGetValue('cmi.objectives._count');
    const objID: string = window.API.LMSGetValue(`cmi.objectives.${0}.id`);
    const objScoreChildren: string = window.API.LMSGetValue(`cmi.objectives.${(1).toString()}.score._children`);
    const objScoreRaw: string = window.API.LMSGetValue(`cmi.objectives.${2}.score.raw`);
    const objScoreMax: string = window.API.LMSGetValue(`cmi.objectives.${3}.score.max`);
    const objStatus: string = window.API.LMSGetValue(`cmi.objectives.${5}.status`);
    const studentDataChildren: string = window.API.LMSGetValue('cmi.student_data._children');
    const masteryScore: string = window.API.LMSGetValue('cmi.student_data.mastery_score');
    const maxTimeAllowed: string = window.API.LMSGetValue('cmi.student_data.max_time_allowed');
    const timeLimitAction: string = window.API.LMSGetValue('cmi.student_data.time_limit_action');
    const studentPreferenceChildren: string = window.API.LMSGetValue('cmi.student_preference._children');
    const audioValue: string = window.API.LMSGetValue('cmi.student_preference.audio');
    const languageValue: string = window.API.LMSGetValue('cmi.student_preference.language');
    const speedValue: string = window.API.LMSGetValue('cmi.student_preference.speed');
    const textValue: string = window.API.LMSGetValue('cmi.student_preference.text');
    const interactionsChildren: string = window.API.LMSGetValue('cmi.interactions._children');
    const interactionsCount: string = window.API.LMSGetValue('cmi.interactions._count');
    const interactionObjectivesCount: string = window.API.LMSGetValue(`cmi.interactions.${0}.objectives._count`);
    const interactionCorrectResponsesCount: string = window.API.LMSGetValue(
        `cmi.interactions.${0}.correct_responses._count`,
    );
    const version = window.API.LMSGetValue('cmi._version');

    window.API.LMSSetValue('cmi.core.lesson_location', 'my-location');
    window.API.LMSSetValue('cmi.core.lesson_status', 'passed');
    window.API.LMSSetValue('cmi.core.score.raw', `${50}`);
    window.API.LMSSetValue('cmi.core.score.max', (100).toString());
    window.API.LMSSetValue('cmi.core.score.min', '0');
    window.API.LMSSetValue('cmi.core.exit', 'suspend');
    window.API.LMSSetValue('cmi.core.session_time', `${(0).toString()}:0:0`);
    window.API.LMSSetValue('cmi.suspend_data', JSON.stringify({ test: true }));
    window.API.LMSSetValue('cmi.comments', 'hello world');
    window.API.LMSSetValue(`cmi.objectives.${(0).toString()}.id`, 'Obj1');
    window.API.LMSSetValue(`cmi.objectives.${1}.score.raw`, `${5}`);
    window.API.LMSSetValue(`cmi.objectives.${2}.score.max`, `${100}`);
    window.API.LMSSetValue(`cmi.objectives.${4}.status`, 'failed');
    window.API.LMSSetValue('cmi.student_preference.audio', '100');
    window.API.LMSSetValue('cmi.student_preference.language', 'English');
    window.API.LMSSetValue('cmi.student_preference.speed', '-100');
    window.API.LMSSetValue('cmi.student_preference.text', (1).toString());
    window.API.LMSSetValue(`cmi.interactions.${0}.id`, 't-010-010');
    window.API.LMSSetValue(`cmi.interactions.${0}.objectives.${0}.id`, 'objective-0');
    window.API.LMSSetValue(`cmi.interactions.${0}.time`, '12:34:56.00');
    window.API.LMSSetValue(`cmi.interactions.${0}.type`, 'true-false');
    window.API.LMSSetValue(`cmi.interactions.${0}.correct_responses.${0}.pattern`, 't');
    window.API.LMSSetValue(`cmi.interactions.${0}.weighting`, '1');
    window.API.LMSSetValue(`cmi.interactions.${0}.student_response`, 'f');
    window.API.LMSSetValue(`cmi.interactions.${0}.result`, 'wrong');
    window.API.LMSSetValue(`cmi.interactions.${0}.latency`, '12:34:56.00');
}
