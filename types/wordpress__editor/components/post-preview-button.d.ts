import { ComponentType } from "react";

declare namespace PostPreviewButton {
    interface Props {
        children?: never | undefined;
        forcePreviewLink?: string | undefined;
        forceIsAutosaveable?: boolean | undefined;
    }
}
declare const PostPreviewButton: ComponentType<PostPreviewButton.Props>;

export default PostPreviewButton;
