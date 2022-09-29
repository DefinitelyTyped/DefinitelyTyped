import type { ComponentType, ReactNode } from 'react';

interface GuidePage {
    content: ReactNode;
    image?: ReactNode;
}

interface GuideProps {
    className?: string;
    contentLabel?: string;
    finishButtonText?: ReactNode;
    onFinish?: () => void;
    pages?: GuidePage[];

    /**
     * @deprecated use the `pages` prop instead
     * @since 5.5
     */
    children?: ReactNode;
}

declare const Guide: ComponentType<GuideProps>;
export default Guide;
