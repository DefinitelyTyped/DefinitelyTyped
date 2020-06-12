import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr<HTMLUListElement> { }

export interface AccordionProps extends InheritedProps {
    align?: "end" | "start";
}

declare const Accordion: React.FC<AccordionProps>;

export default Accordion;
