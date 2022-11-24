import * as React from 'react';
import { ReactLIAttr } from '../../../typings/shared';

export interface HeadingClickData {
    event: React.MouseEvent<HTMLElement>;
    isOpen: boolean;
}

export interface AccordionItemProps extends Omit<ReactLIAttr, 'title'> {
    disabled?: boolean | undefined;
    /**
     * @deprecated
     */
    iconDescription?: string | undefined;
    onHeadingClick?(data: HeadingClickData): void;
    open?: boolean | undefined;
    /**
     * @deprecated use renderToggle instead
     */
    renderExpando?: React.ReactNode | undefined;
    renderToggle?: React.ReactNode | undefined;
    /** The accordion title. */
    title?: React.ReactNode | undefined;
}

declare class AccordionItem extends React.Component<AccordionItemProps> {}

export default AccordionItem;
