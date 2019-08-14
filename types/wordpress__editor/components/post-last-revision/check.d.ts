import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace PostLastRevisionCheck {
    interface Props {
        children: ReactNode;
    }
}
declare const PostLastRevisionCheck: ComponentType<PostLastRevisionCheck.Props>;

export default PostLastRevisionCheck;
