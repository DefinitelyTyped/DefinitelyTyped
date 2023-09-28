import zxcvbn from "zxcvbn";

const testA = zxcvbn("123456");
const guesses: number = testA.guesses;
const guessesLog10: number = testA.guesses_log10;
const score: zxcvbn.ZXCVBNScore = testA.score;
const calcTime: number = testA.calc_time;
const crackTimeSeconds: zxcvbn.ZXCVBNAttackTime = testA.crack_times_seconds;
const onlineThrottling100PerHour: string | number = crackTimeSeconds.online_throttling_100_per_hour;
const feedback: zxcvbn.ZXCVBNFeedback = testA.feedback;
const warning: zxcvbn.ZXCVBNFeedbackWarning = feedback.warning;
const suggestions: string[] = feedback.suggestions;

const test2: zxcvbn.ZXCVBNResult = zxcvbn("123456", ["abc"]);
