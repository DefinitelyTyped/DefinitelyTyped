import * as React from 'react';
import ToolTip, { TooltipProps } from './ToolTip';

declare class StatefulToolTip extends React.Component<StatefulToolTipProps> {}

export default StatefulToolTip;

interface StatefulToolTipProps extends TooltipProps {
    className?: string;
}
