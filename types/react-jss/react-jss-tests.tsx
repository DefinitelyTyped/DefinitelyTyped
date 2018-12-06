import * as React from "react";
import injectSheet, {
  JssProvider,
  SheetsRegistry,
  Styles,
  WithSheet,
  ThemeProvider,
  StyleCreator,
  CSSProperties
} from "react-jss";

interface MyTheme {
  color: {
    primary: string;
    secondary: string;
  };
}

interface ButtonProps {
    label: string;
    size: number;
}

/**
 * helper function to counter typescripts type widening
 */
function createStyles<C extends string>(styles: Styles<C>): Styles<C> {
    return styles;
}

const styles = (theme: MyTheme) =>
    createStyles({
        myButton: (props: ButtonProps): CSSProperties => ({
            fontSize: props.size,
            color: theme.color.primary,
            margin: 1,
            "& span": {
                fontWeight: "revert"
            }
        }),
        myLabel: {
            fontStyle: "italic"
        }
    });

interface Props extends ButtonProps, WithSheet<typeof styles> {}

const Button: React.SFC<Props> = ({ classes, children }) => {
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  );
};

const ManuallyStyles = () => {
  return (
    <Button
      classes={{ myButton: "my-button", myLabel: "my-label" }}
      size={16}
      label="Hello, World!"
      theme={{ color: { primary: "red", secondary: "blue" } }}
    />
  );
};

const StyledButton = injectSheet(styles)(Button);

const darkTheme: MyTheme = {
  color: {
    primary: "grey",
    secondary: "brown"
  }
};
const App = () => (
  <ThemeProvider theme={darkTheme}>
    <StyledButton size={16} label="I'm dark" />
  </ThemeProvider>
);

function ssrRender(req: any, res: { send: (text: string) => any }) {
  const mockedRenderToString = (e: React.ReactElement<any>) => `${e}`;
  const sheets = new SheetsRegistry();

  const body = mockedRenderToString(
    <JssProvider classNamePrefix="dt-" registry={sheets}>
      <StyledButton size={16} label="I come from the server" />
    </JssProvider>
  );

  // Any instances of `injectSheet` within `<MyApp />` will have gotten sheets
  // from `context` and added their Style Sheets to it by now.

  return res.send(
    mockedRenderToString(
      <html>
        <head>
          <style type="text/css">{sheets.toString()}</style>
        </head>
        <body>{body}</body>
      </html>
    )
  );
}
