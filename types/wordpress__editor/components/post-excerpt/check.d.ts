import { ComponentType, ReactNode } from 'react';

declare namespace PostExcerptCheck {
    interface Props {
        children: ReactNode;
        supportKeys?: string | string[];
    }
}
declare const PostExcerptCheck: ComponentType<PostExcerptCheck.Props>;

export default PostExcerptCheck;
