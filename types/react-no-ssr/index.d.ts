import * as React from "react";

export default class NoSSR extends React.Component<{
    children?: React.ReactNode;
    onSSR?: React.ReactChild | undefined;
}> {}
