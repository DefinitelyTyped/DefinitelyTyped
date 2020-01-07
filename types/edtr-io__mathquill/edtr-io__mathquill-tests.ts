import { MQ, Config } from '@edtr-io/mathquill';

const Test = () => {
    const config: Config = {
        spaceBehavesLikeTab: true,
        leftRightIntoCmdGoes: 'up',
        autoSubscriptNumerals: true,
        maxDepth: 10,
        substituteTextarea() {
            return document.createElement('textarea');
        },
        restrictMismatchedBrackets: true,
        sumStartsWithNEquals: true,
        supSubsRequireOperand: true,
        charsThatBreakOutOfSupSub: '+-=<>',
        autoCommands: 'pi theta sqrt',
        autoOperatorNames: 'sin cos tan log',
        handlers: {
            edit(mathField: MQ) {
                return mathField;
            },
            enter(mathField: MQ) {
                mathField.blur();
                mathField.focus();
                mathField.keystroke('Tab');
                mathField.typedText('test');
                mathField.moveToLeftEnd();
                mathField.moveToRightEnd();
                mathField.moveToDirEnd(1);
            },
            upOutOf(mathField: MQ) {
                mathField.keystroke('Enter');
            },
            moveOutOf(dir: number, mathField: MQ) {
                if (dir === 1) mathField.clearSelection();
            },
        },
    };
};
