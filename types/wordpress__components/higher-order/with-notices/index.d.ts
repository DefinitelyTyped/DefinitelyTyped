import { ComponentType, ReactNode } from '@wordpress/element';

import NoticeList from '../../notice/list';

declare namespace withNotices {
    interface Props {
        noticeList: readonly NoticeList.Notice[];
        noticeOperations: {
            createNotice(notice: Partial<NoticeList.Notice> & Pick<NoticeList.Notice, 'content'>): void;
            createErrorNotice(message: string): void;
            removeAllNotices(): void;
            removeNotice(noticeId: string): void;
        };
        noticeUI: ReactNode;
    }
}

// prettier-ignore
declare function withNotices<T extends ComponentType<any>>(wrapped: T):
    T extends ComponentType<infer U> ? ComponentType<Omit<U, keyof withNotices.Props>> :
    never;

export default withNotices;
