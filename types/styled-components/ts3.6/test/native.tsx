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
    ReactNativeThemedStyledComponentsModule,
// tslint:disable-next-line:no-relative-import-in-test
} from "../native";
// tslint:disable-next-line:no-relative-import-in-test
import {} from "../cssprop";

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

async function typedThemes() {
  const theme = {
      color: "green"
  };

  // abuse "await import(...)" to be able to reference the styled-components namespace
  // without actually doing a top level namespace import
  const {
      default: styled,
      css,
      ThemeProvider,
      ThemeConsumer
  // tslint:disable-next-line:no-relative-import-in-test
  } = (await import("../native")) as any as ReactNativeThemedStyledComponentsModule<
      typeof theme
  >;

  const ThemedView = styled.View`
      background: ${props => {
          // $ExpectType string
          props.theme.color;
          // $ExpectType string | undefined
          props.testID;
          return props.theme.color;
      }};
  `;
  const ThemedView2 = styled.View(props => {
    // $ExpectType string
    props.theme.color;
    // $ExpectType string | undefined
    props.testID;

    return {
        background: props.theme.color
    };
  });
  const ThemedView3 = styled.View(props => {
    // $ExpectType string
    props.theme.color;
    // $ExpectType string | undefined
    props.testID;

    return css`
        background: ${props.theme.color};
    `;
});
const themedCss = css`
    background: ${props => {
        // $ExpectType string
        props.theme.color;
        // $ExpectType "theme"
        type Keys = keyof typeof props;
        return props.theme.color;
    }};
`;
//  can't use a FlattenInterpolation as the first argument, would make broken css
// $ExpectError
const ThemedView4 = styled.View(themedCss);

const themedCssWithNesting = css(props => ({
    color: props.theme.color,
    [ThemedView3]: {
        color: "green"
    }
}));

return (
    <ThemeProvider theme={theme}>
        <>
            <ThemedView />
            <ThemedView2 />
            <ThemedView3 />
            <ThemeConsumer>
                {theme => {
                    // $ExpectType string
                    theme.color;
                    return theme.color;
                }}
            </ThemeConsumer>
        </>
    </ThemeProvider>
  );
}

async function reexportCompatibility() {
  // tslint:disable-next-line:no-relative-import-in-test
  const sc = await import("../native");
  const themed = sc as ReactNativeThemedStyledComponentsModule<any>;

  let { ...scExports } = sc;
  let { ...themedExports } = themed;
  // both branches must be assignable to each other
  if (Math.random()) {
      scExports = themedExports;
  } else {
      themedExports = scExports;
  }
}

async function themeAugmentation() {
  interface BaseTheme {
      background: string;
  }
  interface ExtraTheme extends BaseTheme {
      accent: string;
  }

  // tslint:disable-next-line:no-relative-import-in-test
  const base = (await import("../native")) as any as ReactNativeThemedStyledComponentsModule<
      BaseTheme
  >;
  // tslint:disable-next-line:no-relative-import-in-test
  const extra = (await import("../native")) as any as ReactNativeThemedStyledComponentsModule<
      ExtraTheme,
      BaseTheme
  >;

  return (
      <base.ThemeProvider
          theme={{
              background: "black"
          }}
      >
          <>
              <extra.ThemeProvider
                  theme={base => base} // $ExpectError
              >
                  <extra.ThemeConsumer>{() => null}</extra.ThemeConsumer>
              </extra.ThemeProvider>
              <extra.ThemeProvider
                  theme={base => ({
                      ...base,
                      accent: "blue"
                  })}
              >
                  <extra.ThemeConsumer>{() => null}</extra.ThemeConsumer>
              </extra.ThemeProvider>
          </>
      </base.ThemeProvider>
  );
}
