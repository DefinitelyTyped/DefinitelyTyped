import * as React from "react";
import NoSSR from "react-no-ssr";

<NoSSR></NoSSR>;

<NoSSR>
    <div />
</NoSSR>;

<NoSSR onSSR={<span />}>
    <div />
</NoSSR>;
