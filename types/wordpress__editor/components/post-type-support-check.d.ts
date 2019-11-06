import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace PostTypeSupportCheck {
    interface Props {
        children: ReactNode;
        supportKeys: string | string[];
    }
}
declare const PostTypeSupportCheck: ComponentType<PostTypeSupportCheck.Props>;

export default PostTypeSupportCheck;
