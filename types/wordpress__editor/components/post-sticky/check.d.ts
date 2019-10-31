import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace PostStickyCheck {
    interface Props {
        children: ReactNode;
    }
}
declare const PostStickyCheck: ComponentType<PostStickyCheck.Props>;

export default PostStickyCheck;
