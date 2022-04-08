import React = require('react');

import { PathProps, NumberProp } from './props';

export interface LineProps extends PathProps {
    x1: NumberProp;
    x2: NumberProp;
    y1: NumberProp;
    y2: NumberProp;
}

export default class Line extends React.Component<LineProps> {}
