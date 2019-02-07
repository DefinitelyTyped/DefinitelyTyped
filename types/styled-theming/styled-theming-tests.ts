import theme from "styled-theming";

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
