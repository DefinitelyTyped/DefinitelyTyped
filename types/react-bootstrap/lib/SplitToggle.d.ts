import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DropdownToggleProps } from './DropdownToggle';

declare namespace SplitToggle {
    export type SplitToggleProps = DropdownToggleProps & ReactDOM.HTMLProps<SplitToggle>;
}
declare class SplitToggle extends React.Component<SplitToggle.SplitToggleProps> { }
export = SplitToggle;
