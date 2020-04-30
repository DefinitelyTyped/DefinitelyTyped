import { ComponentType, ReactNode } from 'react';

declare namespace PostTrashCheck {
    interface Props {
        children: ReactNode;
    }
}
declare const PostTrashCheck: ComponentType<PostTrashCheck.Props>;

export default PostTrashCheck;
