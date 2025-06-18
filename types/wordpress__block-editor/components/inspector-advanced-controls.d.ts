import { Slot } from "@wordpress/components";
import { ComponentProps, FC, JSX, ReactNode } from "react";

declare namespace InspectorAdvancedControls {
    interface Props {
        children: ReactNode;
    }
}
declare const InspectorAdvancedControls: {
    (props: InspectorAdvancedControls.Props): JSX.Element;
    Slot: FC<Omit<ComponentProps<typeof Slot>, "name">>;
};

export default InspectorAdvancedControls;
