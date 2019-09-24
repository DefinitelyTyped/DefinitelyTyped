import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace PostAuthorCheck {
    interface Props {
        children: ReactNode;
    }
}
declare const PostAuthorCheck: ComponentType<PostAuthorCheck.Props>;

export default PostAuthorCheck;
