import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace MediaUploadCheck {
    interface Props {
        children: ReactNode;
        fallback?: ReactNode;
    }
}
declare const MediaUploadCheck: ComponentType<MediaUploadCheck.Props>;

export default MediaUploadCheck;
