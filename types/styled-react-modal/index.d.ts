// Type definitions for styled-react-modal 1.2
// Project: https://github.com/AlexanderRichey/styled-react-modal
// Definitions by: Adam Lavin <https://github.com/Lavoaster>
//                 Greg Perlman <https://github.com/gperl27>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from 'react';
import { StyledComponent, AnyStyledComponent, CSSObject, InterpolationFunction } from 'styled-components';

declare const BaseModalBackground: StyledComponent<'div', any>;

export interface ModalProps {
  children?: React.ReactNode | undefined;
  isOpen: boolean;
  allowScroll?: boolean | undefined;
  backgroundProps?: object | undefined;
  afterOpen?: (() => void) | undefined;
  afterClose?: (() => void) | undefined;
  beforeOpen?: Promise<void> | (() => void) | undefined;
  beforeClose?: Promise<void> | (() => void) | undefined;
  onEscapeKeydown?: ((event: Event) => void) | undefined;
  onBackgroundClick?: ((event: React.MouseEvent<HTMLDivElement>) => void) | undefined;
}

declare class Modal extends React.Component<ModalProps> {
    static styled(
        object: CSSObject | InterpolationFunction<any>
    ): StyledComponent<React.ComponentClass<ModalProps>, any>;
    static styled(
        strings: TemplateStringsArray,
        ...interpolations: any[]
    ): StyledComponent<React.ComponentClass<ModalProps>, any>;
}

interface ModalProviderProps {
  backgroundComponent?: AnyStyledComponent | undefined;
  children: React.ReactNode;
}

declare class ModalProvider extends React.Component<ModalProviderProps> {}

export default Modal;
export { BaseModalBackground, ModalProvider };
