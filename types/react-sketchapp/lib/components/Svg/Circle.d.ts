import React = require('react');

import { PathProps, NumberProp } from './props';

export interface CircleProps extends PathProps {
  cx: NumberProp;
  cy: NumberProp;
  r: NumberProp;
}

export default class Circle extends React.Component<CircleProps> {}
