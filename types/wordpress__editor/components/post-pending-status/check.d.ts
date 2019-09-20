import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace PostPendingStatusCheck {
    interface Props {
        children: ReactNode;
    }
}
declare const PostPendingStatusCheck: ComponentType<PostPendingStatusCheck.Props>;

export default PostPendingStatusCheck;
