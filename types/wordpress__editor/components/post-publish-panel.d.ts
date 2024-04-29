import { ComponentType, HTMLProps } from "react";

declare namespace PostPublishPanel {
    interface Props extends HTMLProps<HTMLDivElement> {
        children?: never | undefined;
        onClose(): void;
        forceIsDirty?: boolean | undefined;
        forceIsSaving?: boolean | undefined;
        PostPublishExtension?: ComponentType | undefined;
        PrePublishExtension?: ComponentType | undefined;
    }
}
declare const PostPublishPanel: ComponentType<PostPublishPanel.Props>;

export default PostPublishPanel;
