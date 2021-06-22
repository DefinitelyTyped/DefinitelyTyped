import * as React from "react";
import {
    App,
    Area,
    Box,
    Button,
    Checkbox,
    ColorButton,
    Form,
    Grid,
    Group,
    Menu,
    RadioButtons,
    render,
    Text,
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
                <RadioButtons onSelect={selected => selected.toFixed()} enabled={true}>
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

class GridTest extends React.Component {
    render() {
        return (
            <App>
                <Window title="ExampleGrid" size={{ w: 500, h: 500 }}>
                <Grid>
                    <Box
                        align={{h: false, v: false}}
                        row={0}
                        column={0}
                    >
                        <Text>0-0</Text>
                    </Box>
                    <Box
                        align={{h: false, v: false}}
                        row={0}
                        column={1}
                    >
                        <Checkbox>Enable</Checkbox>
                    </Box>
                    <Box
                        align={{h: false, v: false}}
                        row={1}
                        column={0}
                    >
                        <Button
                            onClick={() => {
                                const doSomething = 1;
                            }}
                        >
                            Open file
                        </Button>
                    </Box>
                    <Box
                        align={{h: false, v: false}}
                        row={1}
                        column={1}
                    >
                        <Form><ColorButton label={"Test"}/></Form>
                    </Box>
                    <Box
                        align={{h: false, v: false}}
                        row={2}
                        column={0}
                        span={{x: 2, y: 1}}
                    >
                        <Form><ColorButton label={"Spans Two Columns"}/></Form>
                    </Box>
                </Grid>
                </Window>
            </App>
        );
    }
}

class AreaTest extends React.Component {
    render() {
        return (
            <Area>
                <Area.Group width={30} height={20}>
                    <Area.Rectangle height={10} width={20} x={30} y={40} />
                    <Area.Path d="test" fillMode="nonzero" />
                    <Area.Text
                        style={{
                            fontSize: 30,
                            fontWeight: "maximum",
                            textAlign: "center",
                            textStretch: "ultraCondensed",
                        }}
                    >
                        Parent text
                        <Area.Text>
                            Nested Text
                        </Area.Text>
                    </Area.Text>
                </Area.Group>
            </Area>
        );
    }
}
