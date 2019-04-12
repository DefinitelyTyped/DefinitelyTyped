import * as React from "react";
import { CSSModule } from "../index";
import { FadeProps } from "./Fade";

export type ToastProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  innerRef?: React.Ref<HTMLElement>;
  isOpen?: boolean;
  fade?: boolean;
  transition?: FadeProps;
} & T;

declare class Toast<T> extends React.Component<ToastProps<T>> {}
export default Toast;
