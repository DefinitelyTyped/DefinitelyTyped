import * as React from "react";

interface InheritedProps { }

export interface HeaderContainerProps extends InheritedProps {
    isSideNavExpanded?: boolean,
    render: React.ComponentType,
}

declare const HeaderContainer: React.FC<HeaderContainerProps>;

export default HeaderContainer;
