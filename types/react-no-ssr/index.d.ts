import * as React from "react";

declare class NoSSR extends React.Component<{
    children?: React.ReactNode;
    onSSR?: React.ReactElement | number | string | undefined;
}> {}

export = NoSSR;
