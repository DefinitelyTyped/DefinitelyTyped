import * as React from 'react';
import Mathquill, { addStyles, Config, MathQuill } from 'react-mathquill';

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
            edit(mathField: MathQuill) {
                return mathField;
            },
            enter(mathField: MathQuill) {
                mathField.blur();
                mathField.focus();
                mathField.keystroke('Tab');
                mathField.typedText('test');
                mathField.moveToLeftEnd();
                mathField.moveToRightEnd();
                mathField.moveToDirEnd(1);
            },
            upOutOf(mathField: MathQuill) {
                mathField.keystroke('Enter');
            },
            moveOutOf(dir: number, mathField: MathQuill) {
                if (dir === 1) mathField.clearSelection();
            },
        },
    };

    return (
        <Mathquill
            latex={latex}
            onChange={(MQ: MathQuill) => setLatex(MQ.latex())}
            config={config}
            mathquillDidMount={(MQ: MathQuill) => MQ.latex('\\sqrt{}')}
        />
    );
};
