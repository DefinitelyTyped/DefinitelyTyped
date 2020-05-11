import * as React from "react";

declare class WaitForContainer extends React.Component<
    WaitForContainer.WaitForContainerProps
> {}
export = WaitForContainer;

declare namespace WaitForContainer {
    interface WaitForContainerProps {
        /**
         * "offsetParent" of the component
         */
        container?: React.ReactNode | Function;

        onContainerResolved?: Function;
    }
}
