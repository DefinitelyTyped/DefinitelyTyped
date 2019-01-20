import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactScrollLinkProps } from "./Link";

export type ButtonProps = ReactScrollLinkProps & ReactDOM.HTMLProps<HTMLButtonElement>;

export default class Button extends React.Component<ButtonProps> { }
