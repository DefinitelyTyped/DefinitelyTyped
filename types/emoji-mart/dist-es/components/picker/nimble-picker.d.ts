import React = require('react');

import { Data, PickerProps } from '../..';

export interface NimblePickerProps extends PickerProps {
    data: Data;
}

export default class NimblePicker extends React.PureComponent<NimblePickerProps> {
    // everything inside it is supposed to be private
}
