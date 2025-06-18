import { Slot } from "@wordpress/components";
import { ComponentProps, FC, JSX, ReactNode } from "react";

declare namespace InspectorControls {
    interface Props {
        group?: string;
        children: ReactNode;
    }
}
declare const InspectorControls: {
    (props: InspectorControls.Props): JSX.Element;
    Slot: FC<Omit<ComponentProps<typeof Slot>, "name">>;
};

export default InspectorControls;
