import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps {
    children?: ReactAttr["children"],
    className?: ReactAttr["className"],
}

export interface AccordionProps extends InheritedProps { }

declare const Accordion: React.FC<AccordionProps>;

export default Accordion;
