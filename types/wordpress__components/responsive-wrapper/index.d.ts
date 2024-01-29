import { ComponentType, ReactElement } from "react";

declare namespace ResponsiveWrapper {
    interface Props {
        children: ReactElement | number | string;
        naturalHeight: number;
        naturalWidth: number;
    }
}
declare const ResponsiveWrapper: ComponentType<ResponsiveWrapper.Props>;

export default ResponsiveWrapper;
