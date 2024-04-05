import { Slot, ToolbarGroup } from "@wordpress/components";
import { ComponentProps, FC, JSX, ReactNode } from "react";

type GetArrayTypeFromPossibleNestedArray<TestType extends Record<string, unknown> | Array<Record<string, unknown>>> =
    TestType extends Array<Record<string, unknown>> ? TestType[number] : TestType;
type BlockControlControlsType = GetArrayTypeFromPossibleNestedArray<
    NonNullable<Parameters<typeof ToolbarGroup>[0]["controls"]>[number]
>;

declare namespace BlockControls {
    type BlockControlGroup =
        | "default"
        | "block"
        | "inline"
        | "other"
        | "parent";

    interface Props {
        controls?: Array<BlockControlControlsType | BlockControlControlsType[]>;
        children: ReactNode;
        group?: BlockControlGroup | undefined;
    }
}
declare const BlockControls: {
    (props: BlockControls.Props): JSX.Element;
    Slot: FC<Omit<ComponentProps<typeof Slot>, "name">>;
};

export default BlockControls;
