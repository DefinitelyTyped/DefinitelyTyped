import { ComponentType, ReactNode } from "react";

declare namespace PostFormatCheck {
    interface Props {
        children: ReactNode;
        supportKeys?: string | string[] | undefined;
    }
}
declare const PostFormatCheck: ComponentType<PostFormatCheck.Props>;

export default PostFormatCheck;
