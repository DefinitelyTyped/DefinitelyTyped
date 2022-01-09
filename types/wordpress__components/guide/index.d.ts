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

		/* @deprecated */
		children?: ReactNode;
}

declare const Guide: ComponentType<GuideProps>;
export default Guide;
