import * as React from "react";
import * as ReactNative from "react-native";
import * as ReactDOMServer from "react-dom/server";

import styled, {
    css,
    isStyledComponent,
    ThemeProps,
    ThemeProvider,
    withTheme,
    ThemeConsumer,
} from "styled-components/native";
import {} from "styled-components/cssprop";

const StyledView = styled.View`
  background-color: papayawhip;
`;

const StyledText = styled(ReactNative.Text)`
  color: palevioletred;
`;

class MyReactNativeComponent extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText>Hello World!</StyledText>
      </StyledView>
    );
  }
}

const ValidProp = <StyledText adjustsFontSizeToFit />;
const invalidProp = <StyledText randoName={2} />; // $ExpectError
const invalidTag = styled.div` margin-top: 5px; `; // $ExpectError

interface MyTheme {
    primary: string;
}

interface ButtonProps {
    name: string;
    primary?: boolean;
    theme: MyTheme;
}

class MyButton extends React.Component<ButtonProps> {
    render() {
        return <ReactNative.TouchableOpacity>Custom button</ReactNative.TouchableOpacity>;
    }
}

const TomatoButton = styled(MyButton)`
    color: tomato;
    border-color: tomato;
`;

// needs name prop, but not theme prop
const tomatoElement = <TomatoButton name="needed" />;
