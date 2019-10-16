import React = require('react');

import { PathProps, NumberProp } from './props';

export interface EllipseProps extends PathProps {
  cx: NumberProp;
  cy: NumberProp;
  rx: NumberProp;
  ry: NumberProp;
}

export default class Ellipse extends React.Component<EllipseProps> {}
