import { EditorSettings } from "@wordpress/block-editor";
import { BlockInstance } from "@wordpress/blocks";
import { ComponentType, ReactNode } from "react";

declare namespace EditorProvider {
    interface Props {
        children: ReactNode;
        blocks?: BlockInstance[] | undefined;
        initialEdits?: object | undefined;
        useSubRegistry?: boolean | undefined;
        settings?: Partial<EditorSettings> | undefined;
        post: Record<string, any>; // FIXME: fix this later on if needed
    }
}
declare const EditorProvider: ComponentType<EditorProvider.Props>;

export default EditorProvider;
