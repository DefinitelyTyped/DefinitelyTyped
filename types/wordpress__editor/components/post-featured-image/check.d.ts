import { ComponentType, ReactNode } from 'react';

declare namespace PostFeaturedImageCheck {
    interface Props {
        children: ReactNode;
        supportKeys?: string | string[];
    }
}
declare const PostFeaturedImageCheck: ComponentType<PostFeaturedImageCheck.Props>;

export default PostFeaturedImageCheck;
