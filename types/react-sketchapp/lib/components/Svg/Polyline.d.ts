import React = require('react');

import { PathProps } from './props';

export interface PolylineProps extends PathProps {
    points: string;
}

export default class Polyline extends React.Component<PolylineProps> {}
