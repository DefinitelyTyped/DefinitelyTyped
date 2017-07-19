import * as React from 'react';
import { AffixProps } from './Affix';

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

export default class AutoAffix extends React.Component<AutoAffixProps> { }
