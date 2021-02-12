import React, { useState } from "react";
import blessed from "blessed";
import { render } from "react-blessed";

const TestCheckBox = () => {
  const [checked, setChecked] = useState(true);

  return (
    <blessed-box left="5%">
      <blessed-checkbox
        mouse
        style={{ fg: "red" }}
        text="test"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </blessed-box>
  );
};

const TestButton = () => {
  return (
    <blessed-box>
      <blessed-button
        mouse
        onPress={() => process.exit(1)}
        style={{ border: "line" }}
      >
        Exit
      </blessed-button>
    </blessed-box>
  );
};

const TestTextbox = () => {
  const [text, setText] = useState("");

  return (
    <blessed-box left="10%">
      <blessed-textbox
        width={10}
        height={10}
        border="line"
        mouse
        keys
        censor
        inputOnFocus
        onSubmit={() => process.exit(2)}
        onFocus={() => setText("hi")}
        onBlur={() => process.exit(3)}
        value={text}
        onTextChange={(t: string) => setText(t)}
      >
        <blessed-button onPress={() => process.exit(-1)}>click</blessed-button>
      </blessed-textbox>
    </blessed-box>
  );
};

const TestLine = () => {
  return (
    <blessed-box left="16%">
      <blessed-line content="hi" fg="red" orientation="horizontal" />
    </blessed-box>
  );
};

// WIP: blessed-bigtext
const TestBigText = () => {
  return (
    <blessed-box top="5%">
      <blessed-bigtext content="hi" />
    </blessed-box>
  );
};

const TestText = () => (
  <blessed-box top="5%" left="95%">
    <blessed-text fg="red" align="center" valign="middle">
      hi from text
    </blessed-text>
  </blessed-box>
);

const App = () => {
  return (
    <blessed-box border="line">
      <TestButton />
      <TestCheckBox />
      <TestTextbox />
      <TestLine />
      <TestBigText />
      <TestText />
    </blessed-box>
  );
};

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
});

screen.key(["escape", "q", "C-c"], () => process.exit(0));

render(<App />, screen);
