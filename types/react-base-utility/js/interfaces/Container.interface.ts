import { HtmlHTMLAttributes, ReactElement, ReactNode } from 'react';
interface ContainerInterface extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: ReactNode | ReactElement;
  spacingH?: number;
  spacingV?: number;
  customWidth?: number;
  widthUnit?: string;
  spacingUnit?: string;
}
export default ContainerInterface;
