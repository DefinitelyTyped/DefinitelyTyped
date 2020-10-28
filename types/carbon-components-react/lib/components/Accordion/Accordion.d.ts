import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface AccordionProps extends ReactAttr<HTMLUListElement> {
    align?: "end" | "start";
}

declare const Accordion: React.FC<AccordionProps>;

export default Accordion;
