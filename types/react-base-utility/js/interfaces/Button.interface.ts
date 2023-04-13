import { HtmlHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
interface ButtonInterface extends HtmlHTMLAttributes<HTMLButtonElement> {
  title: string;
  extras?: {
    bg?: string;
    hoverBg?: string;
    textColor?: string;
    hoverTextColor?: string;
    transitionSpees?: string;
    fontSize?: string;
  };
  icon?: {
    svg?: IconType;
    side: string;
    style?: {
      height?: string;
      width?: string;
    };
  };
}
export default ButtonInterface;
