import * as React from 'react';
import Mathquill, {addStyles, Config, MathQuill} from 'react-mathquill';

addStyles();

function Test() {
    const [latex, setLatex] = React.useState<string>('');

    const config: Config = {
        spaceBehavesLikeTab: true,
        leftRightIntoCmdGoes: 'up',
        autoSubscriptNumerals: true,
        maxDepth: 10,
        substituteTextarea: function() {
            return '';
        },
        restrictMismatchedBrackets: true,
        sumStartsWithNEquals: true,
        supSubsRequireOperand: true,
        charsThatBreakOutOfSupSub: '+-=<>',
        autoCommands: 'pi theta sqrt',
        autoOperatorNames: 'sin cos tan log',
        handlers: {
            edit: function(mathField: MathQuill) { return mathField; },
            enter: function(mathField: MathQuill)  {
                mathField.blur(); 
                mathField.focus();
                mathField.keystroke('Tab')
                mathField.typedText('test');
                mathField.moveToLeftEnd();
                mathField.moveToRightEnd();
                mathField.moveToDirEnd(1); 
            },
            upOutOf: function(mathField: MathQuill) { mathField.keystroke('Enter') },
            moveOutOf: function(dir: number, mathField: MathQuill) { if (dir === 1) mathField.clearSelection() }
        }   
    }

    return (
        <Mathquill
            latex={latex}
            onChange={ (MQ: MathQuill) => setLatex(MQ.latex())}
            config={config}
            mathquillDidMount={ (MQ: MathQuill) => MQ.latex('\\sqrt{}')}
        />
    );
}