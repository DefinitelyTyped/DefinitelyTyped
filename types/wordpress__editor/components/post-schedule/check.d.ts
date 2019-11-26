import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace PostScheduleCheck {
    interface Props {
        children: ReactNode;
    }
}
declare const PostScheduleCheck: ComponentType<PostScheduleCheck.Props>;

export default PostScheduleCheck;
