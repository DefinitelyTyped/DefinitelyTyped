import * as React from 'react';
import { AffixProps } from './Affix';

declare class AutoAffix extends React.Component<AutoAffixProps> { }
declare namespace AutoAffix { }
export = AutoAffix;

interface AutoAffixProps extends AffixProps {
	/**
	 * The logical container node or component for determining offset from bottom
	 * of viewport, or a function that returns it
	 */
	container?: React.ReactInstance | (() => React.ReactInstance);

	/**
	 * Automatically set width when affixed
	 */
	autoWidth?: boolean;
}
