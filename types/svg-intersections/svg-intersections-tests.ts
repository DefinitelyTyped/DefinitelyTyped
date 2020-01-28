import { intersect, shape } from 'svg-intersections';

const line = shape('line', {x1: 0, y1: 0, x2: 2, y2: 3});
const rect = shape('rect', {x: 0, y: 0, width: 200, height: 100});
const rectWithOptional = shape('rect', {x: 0, y: 0, width: 200, height: 100, rx: 4, ry: 4});
const circle = shape('circle', {cx: 0, cy: 0, r: 100});
const ellipse = shape('ellipse', {rx: 100, ry: 150, cx: 0, cy: 0});
const polygon = shape('polygon', {points: '-5,0 0,10 5,0 0,-10'});
const path = shape('path', {d: 'M 10 10 h 80 v 80 h -80 Z'});

const intersections = intersect(line, rect);
