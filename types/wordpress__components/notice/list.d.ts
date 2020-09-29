import { ComponentType, ReactNode } from 'react';

import Notice from './';

declare namespace NoticeList {
    interface Props {
        /**
         * Array of notices to render.
         */
        notices: readonly Notice[];
        /**
         * Function called when a notice should be removed / dismissed.
         */
        onRemove?(noticeId: string): void;
        className?: string;
    }
    interface Notice extends Omit<Notice.Props, 'children' | 'onRemove'> {
        id: string;
        content: ReactNode;
    }
}
declare const NoticeList: ComponentType<NoticeList.Props>;

export default NoticeList;
