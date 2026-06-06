import * as React from "react";
import ThemeContextProvider from "terra-theme-context/lib/ThemeContextProvider";

const AllProps = (
    <ThemeContextProvider theme={{ name: "name", className: "class" }}>
        <div />
    </ThemeContextProvider>
);

const PartialProps = (
    <ThemeContextProvider theme={{}}>
        <div />
    </ThemeContextProvider>
);

const RequiredProps = (
    <ThemeContextProvider>
        <div />
    </ThemeContextProvider>
);
