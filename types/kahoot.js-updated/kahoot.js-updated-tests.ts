import Kahoot = require('kahoot.js-updated');

// No options
new Kahoot();

// Some options
new Kahoot({
    options: { ChallengeScore: 123 },
    modules: { backup: false },
    proxy() {},
    wsproxy: url => ({ address: url }),
});

// Async API
(async () => {
    const kahootAsync = new Kahoot();
    await kahootAsync.join(1234567, 'foo'); // $ExpectType JoinResponse
    await kahootAsync.answerTwoFactorAuth([1, 2, 3, 4]); // $ExpectType LiveEventTimetrack
    await kahootAsync.joinTeam(['foo', 'bar', 'baz']); // $ExpectType LiveEventTimetrack
})();

// With Kahoot.join
const { client: joinClient, event: joinEvent } = Kahoot.join(1234567, 'foo');
joinClient; // $ExpectType Kahoot
joinEvent; // $ExpectType Promise<JoinResponse>

// Defaults method
const DefaultKahoot = Kahoot.defaults({}); // $ExpectType typeof Kahoot
new DefaultKahoot(); // $ExpectType Kahoot

// All events
const kahootEvents = new Kahoot();
kahootEvents.on('Disconnect', ev => console.log('Event: Disconnect', ev));
kahootEvents.on('Feedback', ev => console.log('Event: Feedback', ev));
kahootEvents.on('GameReset', ev => console.log('Event: GameReset', ev));
kahootEvents.on('Joined', ev => console.log('Event: Joined', ev));
kahootEvents.on('NameAccept', ev => console.log('Event: NameAccept', ev));
kahootEvents.on('Podium', ev => console.log('Event: Podium', ev));
kahootEvents.on('QuestionStart', ev => console.log('Event: QuestionStart', ev));
kahootEvents.on('QuestionReady', ev => console.log('Event: QuestionReady', ev));
kahootEvents.on('QuestionEnd', ev => console.log('Event: QuestionEnd', ev));
kahootEvents.on('QuizEnd', ev => console.log('Event: QuizEnd', ev));
kahootEvents.on('QuizStart', ev => console.log('Event: QuizStart', ev));
kahootEvents.on('RecoveryData', ev => console.log('Event: RecoveryData', ev));
kahootEvents.on('TeamAccept', ev => console.log('Event: TeamAccept', ev));
kahootEvents.on('TeamTalk', ev => console.log('Event: TeamTalk', ev));
kahootEvents.on('TimeOver', ev => console.log('Event: TimeOver', ev));
kahootEvents.on('TwoFactorCorrect', ev => console.log('Event: TwoFactorCorrect', ev));
kahootEvents.on('TwoFactorReset', ev => console.log('Event: TwoFactorReset', ev));
kahootEvents.on('TwoFactorWrong', ev => console.log('Event: TwoFactorWrong', ev));
