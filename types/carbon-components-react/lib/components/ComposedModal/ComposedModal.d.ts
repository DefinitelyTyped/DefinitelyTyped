import * as React from 'react';
import { ReactDivAttr } from '../../../typings/shared';
import { ButtonProps } from '../Button';

// ComposedModal

type ExcludedAttributes = 'onBlur' | 'onClick' | 'onTransitionEnd' | 'ref' | 'role' | 'tabIndex';
export interface ComposedModalProps extends Omit<ReactDivAttr, ExcludedAttributes> {
    containerClassName?: string | undefined;
    danger?: boolean | undefined;
    onClose?(): boolean | void;
    open?: boolean | undefined;
    preventCloseOnClickOutside?: boolean | undefined;
    selectorPrimaryFocus?: string | undefined;
    selectorsFloatingMenus?: readonly string[] | undefined;
    size?: 'xs' | 'sm' | 'md' | 'lg' | undefined;
    forwardedRef?: React.ForwardedRef<HTMLDivElement>;
}

declare class ComposedModal extends React.Component<ComposedModalProps> {}

// Header

export interface ModalHeaderProps extends Omit<ReactDivAttr, 'title'> {
    buttonOnClick?(event: React.MouseEvent<HTMLButtonElement>): void;
    closeClassName?: string | undefined;
    closeIconClassName?: string | undefined;
    closeModal?(): void;
    iconDescription?: string | undefined;
    label?: React.ReactNode | undefined;
    labelClassName?: string | undefined;
    title?: React.ReactNode | undefined;
    titleClassName?: string | undefined;
}

export declare class ModalHeader extends React.Component<ModalHeaderProps> {}

// Body

export interface ModalBodyProps extends ReactDivAttr {
    hasForm?: boolean | undefined;
    hasScrollingContent?: boolean | undefined;
}

export declare const ModalBody: React.FC<ModalBodyProps>;

// Footer

export interface ModalFooterSecondaryButtonConfig {
    buttonText: NonNullable<React.ReactNode>;
    onClick?: ButtonProps['onClick'] | undefined;
}

export interface ModalFooterProps extends ReactDivAttr {
    closeModal?: ButtonProps['onClick'] | undefined;
    danger?: boolean | undefined;
    inputref?: any; // TODO
    primaryClassName?: string | undefined;
    primaryButtonText?: string | undefined;
    primaryButtonDisabled?: boolean | undefined;
    secondaryClassName?: string | undefined;
    secondaryButtonText?: string | undefined;
    secondaryButtons?: readonly ModalFooterSecondaryButtonConfig[] | undefined;
    onRequestClose?: ButtonProps['onClick'] | undefined;
    onRequestSubmit?: ButtonProps['onClick'] | undefined;
}

export declare class ModalFooter extends React.Component<ModalFooterProps> {}

export default ComposedModal;
