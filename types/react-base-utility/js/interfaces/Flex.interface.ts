import { HtmlHTMLAttributes, ReactElement, ReactNode, Ref } from 'react';
export interface StylesInterface {
  alignItems?: string;
  flexDirection?: string;
  justifyContent?: string;
  flexGrow?: string;
  flexWrap?: string;
}
interface FlexInterface extends HtmlHTMLAttributes<HTMLDivElement> {
  config?: {
    styles?: StylesInterface;
  };
  children?: ReactElement | ReactNode | JSX.Element;
  ref?: Ref<HTMLDivElement>;
}
export default FlexInterface;
