import * as React from "react";
import {
    render,
    App,
    Area,
    Group,
    Menu,
    RadioButtons,
    Window,
} from "proton-native";

class ExampleApp extends React.Component {
    render() {
        return (
            <App>
                <Window title="Example" size={{ w: 500, h: 500 }} />
            </App>
        );
    }
}

class MenuTest extends React.Component {
    render() {
      return (
        <App>
          <Window title="Example" size={{ w: 500, h: 500 }}>
            <App>
                <Menu label="HI">
                <Menu.Item>Hi</Menu.Item>
                </Menu>
                <Window title="Example" size={{w: 500, h: 500}} />
            </App>
          </Window>
        </App>
      );
    }
}

class RadioTest extends React.Component {
    render() {
      return (
        <App>
            <Window title="Example" size={{w: 500, h: 500}}>
                <RadioButtons enabled={true}>
                    <RadioButtons.Item>Option 1</RadioButtons.Item>
                    <RadioButtons.Item>Option 2</RadioButtons.Item>
                </RadioButtons>
            </Window>
        </App>
      );
    }
}

class RectangleTest extends React.Component {
    render() {
        return (
            <App>
                <Window title="Example" size={{ w: 500, h: 500 }}>
                <Area>
                    <Area.Rectangle
                    x="10"
                    y="10"
                    width="100"
                    height="200"
                    fill="blue"
                    />
                </Area>
                </Window>
            </App>
        );
    }
}
