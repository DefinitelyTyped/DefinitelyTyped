import * as React from 'react';
import { DropdownToggleProps } from './DropdownToggle';

interface SplitToggleProps extends DropdownToggleProps, React.HTMLProps<SplitToggle> { }

export default class SplitToggle extends React.Component<SplitToggleProps> { }
