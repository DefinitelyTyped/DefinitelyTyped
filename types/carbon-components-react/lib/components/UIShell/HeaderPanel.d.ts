import { ReactDivAttr, ForwardRefReturn } from "../../../typings/shared";

export interface HeaderPanelProps extends ReactDivAttr {
    expanded?: boolean,
}

declare const HeaderPanel: ForwardRefReturn<HTMLDivElement, HeaderPanelProps>;

export default HeaderPanel;
