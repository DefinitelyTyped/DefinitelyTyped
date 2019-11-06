import { ComponentType } from '@wordpress/element';

declare namespace PostSavedState {
    interface Props {
        children?: never;
        forceIsDirty?: boolean;
        forceIsSaving?: boolean;
    }
}
declare const PostSavedState: ComponentType<PostSavedState.Props>;

export default PostSavedState;
