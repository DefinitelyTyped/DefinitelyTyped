import theme from "styled-theming";
import { css } from "styled-components";

const textColor = theme("mode", {
    dark: "white",
    light: "black"
});

const backgroundColor = theme.variants("mode", "variant", {
    default: { light: "gray", dark: "darkgray" },
    primary: { light: "blue", dark: "darkblue" },
    success: { light: "green", dark: "darkgreen" },
    warning: { light: "orange", dark: "darkorange" }
});

const cssTheme = theme("mode", {
    dark: css`
        background: gray;
    `,
    light: css`
        background: white;
    `
});
