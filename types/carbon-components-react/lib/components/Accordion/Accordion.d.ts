import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps {
    children?: ReactAttr["children"],
    className?: ReactAttr["className"],
}

export interface AccordionProps extends InheritedProps {
    /** Specify the alignment of the accordion heading title and chevron. */
    align?: 'start' | 'end'
}

declare const Accordion: React.FC<AccordionProps>;

export default Accordion;
