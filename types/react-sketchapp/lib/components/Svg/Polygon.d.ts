import React = require('react');

import { PathProps } from './props';

export interface PolygonProps extends PathProps {
    points: string;
}

export default class Polygon extends React.Component<PolygonProps> {}
