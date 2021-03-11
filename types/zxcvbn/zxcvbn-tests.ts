import zxcvbn, { ZXCVBNResult, ZXCVBNScore, ZXCVBNAttackTime, ZXCVBNFeedback, ZXCVBNFeedbackWarning } from "zxcvbn";

const testA = zxcvbn("123456");
const guesses: number = testA.guesses;
const guessesLog10: number = testA.guesses_log10;
const score: ZXCVBNScore = testA.score;
const calcTime: number = testA.calc_time;
const crackTimeSeconds: ZXCVBNAttackTime = testA.crack_times_seconds;
const onlineThrottling100PerHour = crackTimeSeconds.online_throttling_100_per_hour;
const feedback: ZXCVBNFeedback = testA.feedback;
const warning: ZXCVBNFeedbackWarning = feedback.warning;
const suggestions: string[] = feedback.suggestions;

const test2: ZXCVBNResult = zxcvbn("123456", ["abc"]);
