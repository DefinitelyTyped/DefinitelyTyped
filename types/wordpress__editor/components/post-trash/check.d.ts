import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace PostTrashCheck {
    interface Props {
        children: ReactNode;
    }
}
declare const PostTrashCheck: ComponentType<PostTrashCheck.Props>;

export default PostTrashCheck;
