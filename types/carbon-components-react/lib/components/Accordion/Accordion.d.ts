import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface AccordionProps extends ReactAttr<HTMLUListElement> {
    align?: "end" | "start" | undefined;
    disabled?: boolean | undefined;
    size?: "sm" | "md" | "lg" | "xl" | undefined;
}

declare const Accordion: React.FC<AccordionProps>;

export default Accordion;
