/// <reference types="react" />
import ContainerInterface from '../interfaces/Container.interface';
declare const Container: import('react').MemoExoticComponent<
  ({
    children,
    spacingH,
    spacingV,
    widthUnit,
    customWidth,
    spacingUnit,
    className,
  }: ContainerInterface) => JSX.Element
>;
export default Container;
