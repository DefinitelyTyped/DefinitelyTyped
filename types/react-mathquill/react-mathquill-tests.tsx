import * as React from 'react';
import MathQuill, { addStyles } from 'react-mathquill';
import { Config, MQ } from '@edtr-io/mathquill';

addStyles();

const Test = () => {
    const [latex, setLatex] = React.useState<string>('');

    const config: Config = {
        spaceBehavesLikeTab: true,
        leftRightIntoCmdGoes: 'up',
        autoSubscriptNumerals: true,
        maxDepth: 10,
        substituteTextarea() {
            return '';
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

    return (
        <MathQuill
            latex={latex}
            onChange={(MQ: MQ) => setLatex(MQ.latex())}
            config={config}
            mathquillDidMount={(MQ: MQ) => MQ.latex('\\sqrt{}')}
        />
    );
};
