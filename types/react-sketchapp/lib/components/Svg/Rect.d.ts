import React = require('react');

import { PathProps, NumberProp } from './props';

export interface RectProps extends PathProps {
    x: NumberProp;
    y: NumberProp;
    width: NumberProp;
    height: NumberProp;
    rx?: NumberProp;
    ry?: NumberProp;
}

export default class Rect extends React.Component<RectProps> {}
