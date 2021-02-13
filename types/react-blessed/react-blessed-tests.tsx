import React, { useState } from 'react';
import blessed from 'blessed';
import { render } from 'react-blessed';

const TestCheckBox = () => {
    const [checked, setChecked] = useState(true);

    return (
        <box left="5%">
            <checkbox mouse style={{ fg: 'red' }} text="test" checked={checked} onChange={() => setChecked(!checked)} />
        </box>
    );
};

const TestButton = () => {
    return (
        <box>
            <button mouse onPress={() => process.exit(1)} style={{ border: 'line' }}>
                Exit
            </button>
        </box>
    );
};

const TestTextbox = () => {
    const [text, setText] = useState('');

    return (
        <box left="10%">
            <textbox
                width={10}
                height={10}
                border="line"
                mouse
                keys
                censor
                inputOnFocus
                onSubmit={() => process.exit(2)}
                onFocus={() => setText('hi')}
                onBlur={() => process.exit(3)}
                value={text}
                onTextChange={(t: string) => setText(t)}
            >
                <button onPress={() => process.exit(-1)}>click</button>
            </textbox>
        </box>
    );
};

const TestLine = () => {
    return (
        <box left="16%">
            <line content="hi" fg="red" orientation="horizontal" />
        </box>
    );
};

// WIP: bigtext
const TestBigText = () => {
    return (
        <box top="5%">
            <bigtext content="hi" />
        </box>
    );
};

const TestText = () => (
    <box top="5%" left="95%">
        <text fg="red" align="center" valign="middle">
            hi from text
        </text>
    </box>
);

const App = () => {
    return (
        <box border="line">
            <TestButton />
            <TestCheckBox />
            <TestTextbox />
            <TestLine />
            <TestBigText />
            <TestText />
        </box>
    );
};

// Creating our screen
const screen = blessed.screen({
    autoPadding: true,
    smartCSR: true,
});

screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

render(<App />, screen);
