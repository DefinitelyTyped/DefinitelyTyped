import * as React from "react";
import { CSSModule } from "../index";
import { FadeProps } from "./Fade";

export interface ToastProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  innerRef?: React.Ref<HTMLElement>;
  isOpen?: boolean;
  fade?: boolean;
  transition?: FadeProps;
}

declare class Toast<T> extends React.Component<ToastProps> {}
export default Toast;
