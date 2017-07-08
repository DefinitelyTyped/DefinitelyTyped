import * as React from "react";
import { StyleSheet, css, StyleSheetServer, StyleSheetTestUtils } from "aphrodite";

const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red'
    },
    blue: {
        backgroundColor: 'blue'
    },
    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    },
    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    }
});

const coolFont = {
    fontFamily: "CoolFont",
    fontStyle: "normal",
    fontWeight: "normal",
    src: "url('coolfont.woff2') format('woff2')"
};

const withFont = StyleSheet.create({
    headingText: {
        fontFamily: coolFont,
        fontSize: 20
    },
    bodyText: {
        fontFamily: [coolFont, "sans-serif"],
        fontSize: 12
    }
});


class App extends React.Component {
    render() {
        return <div>
            <span className={css(styles.red)}>
                This is red.
            </span>
            <span className={css(styles.hover)}>
                This turns red on hover.
            </span>
            <span className={css(styles.small)}>
                This turns red when the browser is less than 600px width.
            </span>
            <span className={css(styles.red, styles.blue)}>
                This is blue.
            </span>
            <span className={css(styles.blue, styles.small)}>
                This is blue and turns red when the browser is less than
                600px width.
            </span>
            <span className={css(withFont.bodyText)}>
                With font
            </span>
        </div>;
    }
}

const output = StyleSheetServer.renderStatic(() => {
    return "test";
});

output.css.content;
output.css.renderedClassNames;
output.html;

StyleSheet.rehydrate(output.css.renderedClassNames);

StyleSheetTestUtils.suppressStyleInjection();
StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
