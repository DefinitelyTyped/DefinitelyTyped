import * as svgPathBoundingBox from 'svg-path-bounding-box';

const bbox = svgPathBoundingBox('M300,200 h-150 a150,150 0 1,0 150,-150 z');

const x1: number = bbox.x1;
const y1: number = bbox.y1;
const x2: number = bbox.x2;
const y2: number = bbox.y2;
const minX: number = bbox.minX;
const minY: number = bbox.minY;
const maxX: number = bbox.maxX;
const maxY: number = bbox.maxY;
const width: number = bbox.width;
const height: number = bbox.height;

const rounded: svgPathBoundingBox.BoundingBoxView = bbox.round(2);
const scaled: svgPathBoundingBox.BoundingBoxView = bbox.scale(2);
const roundedString: string = rounded.toString();

const path = new svgPathBoundingBox.Path('M300,200 h-150 a150,150 0 1,0 150,-150 z');
const d: string = path.d;
const bbox2: svgPathBoundingBox.BoundingBoxView = path.getBoundingBox();
