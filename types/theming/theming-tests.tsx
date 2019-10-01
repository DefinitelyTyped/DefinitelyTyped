import * as React from "react";
import {
  channel,
  ContextWithTheme,
  Theme,
  themeListener,
  ThemeProvider,
  withTheme
} from "theming";

// Typings currently accept non-plain-objects while they get rejected at runtime.
// There exists currently no typing for plain objects.
const runtimeErrorTheme: Theme = [];

const customTheme = {
  color: {
    primary: "red",
    secondary: "blue"
  }
};
type CustomTheme = typeof customTheme;

interface DemoBoxProps {
  text: string;
  theme: CustomTheme;
}
const DemoBox = ({ text, theme }: DemoBoxProps) => {
  return <div style={{ color: theme.color.primary }}>{text}</div>;
};
const ThemedDemoBox = withTheme(DemoBox);
const renderDemoBox = () => <ThemedDemoBox text="Hello, World!" />;

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <ThemedDemoBox text="Theme provided" />
    </ThemeProvider>
  );
};

const AugmentedApp = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <ThemeProvider theme={outerTheme => ({ ...outerTheme, augmented: true })}>
        <ThemedDemoBox text="Theme provided" />
      </ThemeProvider>
    </ThemeProvider>
  );
};

function customWithTheme<P>(
  // tslint:disable-next-line: no-unnecessary-generics
  Component: React.ComponentType<P & { theme: object }>
) {
  return class CustomWithTheme extends React.Component<P, { theme: object }> {
    static contextTypes = themeListener.contextTypes;

    setTheme = (theme: object) => this.setState({ theme });
    subscription: number | undefined;

    constructor(props: P, context: ContextWithTheme<typeof channel>) {
      super(props, context);
      this.state = { theme: themeListener.initial(context) };
    }
    componentDidMount() {
      this.subscription = themeListener.subscribe(this.context, this.setTheme);
    }
    componentWillUnmount() {
      const { subscription } = this;
      if (subscription != null) {
        themeListener.unsubscribe(this.context, subscription);
      }
    }
    render() {
      const { theme } = this.state;
      return <Component theme={theme} {...this.props} />;
    }
  };
}
