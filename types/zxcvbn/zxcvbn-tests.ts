import zxcvbn = require('zxcvbn');

const testA: zxcvbn.ZXCVBNResult = zxcvbn('123456');
const guesses: number = testA.guesses;
const guessesLog10: number = testA.guesses_log10;
const score: zxcvbn.ZXCVBNScore = testA.score;
const calcTime: number = testA.calc_time;
const crackTimeSeconds: zxcvbn.ZXCVBNAttackTime = testA.crack_times_seconds;
const onlineThrottling100PerHour = crackTimeSeconds.online_throttling_100_per_hour;
const feedback: zxcvbn.ZXCVBNFeedback = testA.feedback;
const warning: string = feedback.warning;
const suggestions: string[] = feedback.suggestions;

const test2: zxcvbn.ZXCVBNResult = zxcvbn('123456', ['abc']);
