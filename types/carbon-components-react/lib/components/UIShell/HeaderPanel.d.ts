import { ForwardRefReturn, ReactDivAttr } from "../../../typings/shared";

export interface HeaderPanelProps extends ReactDivAttr {
    expanded?: boolean | undefined;
}

declare const HeaderPanel: ForwardRefReturn<HTMLDivElement, HeaderPanelProps>;

export default HeaderPanel;
