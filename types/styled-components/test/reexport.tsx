import * as styledComponents from 'styled-components';

interface MyTheme {
    color: string;
}

const {
    createGlobalStyle,
    css,
    default: styled,
    isStyledComponent,
    keyframes,
    ServerStyleSheet,
    StyleSheetManager,
    ThemeConsumer,
    ThemeContext,
    ThemeProvider,
    useTheme,
    withTheme
  } = styledComponents as styledComponents.ThemedStyledComponentsModule<MyTheme>;

  export {
    createGlobalStyle,
    css,
    isStyledComponent,
    keyframes,
    ServerStyleSheet,
    StyleSheetManager,
    ThemeConsumer,
    ThemeContext,
    ThemeProvider,
    useTheme,
    withTheme
  };

  export default styled;
