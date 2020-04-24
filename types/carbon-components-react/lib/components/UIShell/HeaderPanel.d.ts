import { ReactDivAttr, ForwardRefReturn } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface HeaderPanelProps extends InheritedProps {
    expanded?: boolean,
}

declare const HeaderPanel: ForwardRefReturn<HTMLDivElement, HeaderPanelProps>;

export default HeaderPanel;
