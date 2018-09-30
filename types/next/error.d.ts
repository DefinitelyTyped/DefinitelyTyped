import * as React from "react";
import { NextContext } from ".";

/**
 * Initial props returned from base Error class.
 * https://github.com/zeit/next.js/blob/7.0.0/lib/error.js#L7
 */
export interface DefaultErrorIProps {
    statusCode: number;
}

export default class Error<P = {}> extends React.Component<P & DefaultErrorIProps> {
    static getInitialProps(context: NextContext): DefaultErrorIProps;
}
