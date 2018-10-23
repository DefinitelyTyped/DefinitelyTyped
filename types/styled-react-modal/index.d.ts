// Type definitions for styled-react-modal 1.0
// Project: https://github.com/AlexanderRichey/styled-react-modal
// Definitions by: Adam Lavin <https://github.com/Lavoaster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { StyledComponentClass } from 'styled-components';

declare const BackgroundComponent: StyledComponentClass<{}, any>;

interface ModalProps {
  isOpen: boolean;
  allowScroll?: boolean;
  afterOpen?: () => void;
  afterClose?: () => void;
  beforeOpen?: Promise<void> | (() => void);
  beforeClose?: Promise<void> | (() => void);
  onEscapeKeydown?: (event: Event) => void;
  onBackgroundClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

declare class Modal extends React.Component<ModalProps> {
  static styled(
    strings: TemplateStringsArray,
    ...interpolations: any[]
  ): StyledComponentClass<ModalProps, any>;
}

interface ModalProviderProps {
  backgroundComponent?: StyledComponentClass<any, any>;
  children: React.ReactChild;
}

declare class ModalProvider extends React.Component<ModalProviderProps> {}

export default Modal;
export { BackgroundComponent, ModalProvider };
