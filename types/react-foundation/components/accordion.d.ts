/// <reference types="react" />
import * as React from 'react';
import { FlexboxPropTypes } from '../utils';
/**
 * Accordion component.
 * http://foundation.zurb.com/sites/docs/accordion.html
  */
export declare const Accordion: React.StatelessComponent<AccordianProps>;
export interface AccordianProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLUListElement> {
}
/**
 * Accordion item component.
 */
export declare const AccordionItem: React.StatelessComponent<AccordianItemProps>;
export interface AccordianItemProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLLIElement> {
    isActive?: boolean;
}
/**
 * Accordion panel container component.
 */
export declare const AccordionContent: React.StatelessComponent<AccordianContentProps>;
export interface AccordianContentProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
}
/**
 * Accordion panel title component.
 */
export declare const AccordionTitle: React.StatelessComponent<AccordionTitleProps>;
export interface AccordionTitleProps extends FlexboxPropTypes, React.AnchorHTMLAttributes<HTMLAnchorElement> {
    isActive?: boolean;
}
