import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace PostFeaturedImageCheck {
    interface Props {
        children: ReactNode;
        supportKeys?: string | string[];
    }
}
declare const PostFeaturedImageCheck: ComponentType<PostFeaturedImageCheck.Props>;

export default PostFeaturedImageCheck;
