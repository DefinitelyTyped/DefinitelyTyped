import Head, * as head from "next/head";
import * as React from "react";

const elements: JSX.Element[] = head.defaultHead();
const jsx = <Head>{elements}</Head>;

if (!Head.canUseDOM) {
    Head.rewind().map(x => [x.key, x.props, x.type]);
}

Head.peek().map(x => [x.key, x.props, x.type]);
