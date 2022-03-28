import Kahoot = require('kahoot.js-updated');

// No options
const kahoot = new Kahoot();

kahoot.on('Joined', ev => {});

// Defaults method
const DefaultKahoot = Kahoot.defaults({});
const defaultKahoot = new DefaultKahoot();

// All events
kahoot.on('Disconnect', ev => console.log('Event: Disconnect', ev));
kahoot.on('Feedback', ev => console.log('Event: Feedback', ev));
kahoot.on('GameReset', ev => console.log('Event: GameReset', ev));
kahoot.on('Joined', ev => console.log('Event: Joined', ev));
kahoot.on('NameAccept', ev => console.log('Event: NameAccept', ev));
kahoot.on('Podium', ev => console.log('Event: Podium', ev));
kahoot.on('QuestionEnd', ev => console.log('Event: QuestionEnd', ev));
kahoot.on('QuestionReady', ev => console.log('Event: QuestionReady', ev));
kahoot.on('QuestionStart', ev => console.log('Event: QuestionStart', ev));
kahoot.on('QuizEnd', ev => console.log('Event: QuizEnd', ev));
kahoot.on('QuizStart', ev => console.log('Event: QuizStart', ev));
kahoot.on('RecoveryData', ev => console.log('Event: RecoveryData', ev));
kahoot.on('TeamAccept', ev => console.log('Event: TeamAccept', ev));
kahoot.on('TeamTalk', ev => console.log('Event: TeamTalk', ev));
kahoot.on('TimeOver', ev => console.log('Event: TimeOver', ev));
kahoot.on('TwoFactorCorrect', ev => console.log('Event: TwoFactorCorrect', ev));
kahoot.on('TwoFactorReset', ev => console.log('Event: TwoFactorReset', ev));
kahoot.on('TwoFactorWrong', ev => console.log('Event: TwoFactorWrong', ev));
