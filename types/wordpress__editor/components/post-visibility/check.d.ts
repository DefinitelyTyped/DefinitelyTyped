import { ComponentType, JSX } from "react";

declare namespace PostVisibilityCheck {
    interface RenderProps {
        canEdit: boolean;
    }
    interface Props {
        children?: never | undefined;
        render(props: RenderProps): JSX.Element;
    }
}
declare const PostVisibilityCheck: ComponentType<PostVisibilityCheck.Props>;

export default PostVisibilityCheck;
