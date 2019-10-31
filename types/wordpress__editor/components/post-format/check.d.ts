import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace PostFormatCheck {
    interface Props {
        children: ReactNode;
        supportKeys?: string | string[];
    }
}
declare const PostFormatCheck: ComponentType<PostFormatCheck.Props>;

export default PostFormatCheck;
