import * as React from "react";
import { SelectProps } from "../../Select";

export interface PageSelectorProps extends SelectProps {
    currentPage: number,
    totalPages: number,
}

declare const PageSelector: React.FC<PageSelectorProps>;

export default PageSelector;
