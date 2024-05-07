import { ComponentType } from "react";

declare namespace PostSavedState {
    interface Props {
        children?: never | undefined;
        forceIsDirty?: boolean | undefined;
        forceIsSaving?: boolean | undefined;
    }
}
declare const PostSavedState: ComponentType<PostSavedState.Props>;

export default PostSavedState;
