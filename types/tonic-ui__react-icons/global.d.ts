import { TonicProps as _TonicProps } from "@tonic-ui/react";
import { ForwardRefExoticComponent as _ForwardRefExoticComponent, RefAttributes as _RefAttributes } from "react";

declare global {
  interface TonicProps extends _TonicProps {}
  interface IconProps extends TonicProps {
    spin?: boolean;
  }
  interface ForwardRefExoticComponent<T> extends _ForwardRefExoticComponent<T> {}
  interface RefAttributes<T> extends _RefAttributes<T> {}
}
