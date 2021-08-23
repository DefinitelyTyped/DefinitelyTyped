import * as React from 'react';
import { OptionTypeBase } from 'react-select';
import { Props, defaultProps } from 'react-select/src/stateManager';

export default class StateManager extends React.Component<Props<OptionTypeBase, boolean>> {
    defaultProps = defaultProps;
}
