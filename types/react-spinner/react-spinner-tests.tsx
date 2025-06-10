import * as React from "react";
import Spinner from "react-spinner";

const spinner: React.JSX.Element = <Spinner />;

// $ExpectType void
const spinnerWithClass: React.JSX.Element = <Spinner className="test" />;

// @ts-expect-error
const spinnerWithInvalidDivProp: React.JSX.Element = <Spinner invalidProp="test" />;


