import {
    lnglat as point,
    lnglatTuple as pointTuple
} from './preset';

const line = [point];
const lineTuple = [pointTuple];
const ring = [point];
const ringTuple = [pointTuple];
const polygon = [ring];
const polygonTuple = [ringTuple];
const util = AMap.GeometryUtil;

// $ExpectType number
util.distance(point, point);
// $ExpectType number
util.distance(pointTuple, pointTuple);
// $ExpectType number
util.distance(point, line);
// $ExpectType number
util.distance(pointTuple, lineTuple);

// $ExpectType number
util.ringArea(ring);
// $ExpectType number
util.ringArea(ringTuple);

// $ExpectType boolean
util.isClockwise(ring);
// $ExpectType boolean
util.isClockwise(ringTuple);

// $ExpectType number
util.distanceOfLine(line);
// $ExpectType number
util.distanceOfLine(lineTuple);

// $ExpectType [number, number][]
util.ringRingClip(ring, ring);
// $ExpectType [number, number][]
util.ringRingClip(ringTuple, ringTuple);

// $ExpectType boolean
util.doesRingRingIntersect(ring, ring);
// $ExpectType boolean
util.doesRingRingIntersect(ringTuple, ringTuple);

// $ExpectType boolean
util.doesLineRingIntersect(line, ring);
// $ExpectType boolean
util.doesLineRingIntersect(lineTuple, ringTuple);

// $ExpectType boolean
util.doesLineLineIntersect(line, line);
// $ExpectType boolean
util.doesLineLineIntersect(lineTuple, lineTuple);

// $ExpectType boolean
util.doesSegmentPolygonIntersect(point, point, polygon);
// $ExpectType boolean
util.doesSegmentPolygonIntersect(pointTuple, pointTuple, polygonTuple);

// $ExpectType boolean
util.doesSegmentRingIntersect(point, point, ring);
// $ExpectType boolean
util.doesSegmentRingIntersect(pointTuple, pointTuple, ringTuple);

// $ExpectType boolean
util.doesSegmentLineIntersect(point, point, line);
// $ExpectType boolean
util.doesSegmentLineIntersect(pointTuple, pointTuple, lineTuple);

// $ExpectType boolean
util.doesSegmentsIntersect(point, point, point, point);
// $ExpectType boolean
util.doesSegmentsIntersect(pointTuple, pointTuple, pointTuple, pointTuple);

// $ExpectType boolean
util.isPointInRing(point, ring);
// $ExpectType boolean
util.isPointInRing(pointTuple, ringTuple);

// $ExpectType boolean
util.isRingInRing(ring, ring);
// $ExpectType boolean
util.isRingInRing(ringTuple, ringTuple);

// $ExpectType boolean
util.isPointInPolygon(point, polygon);
// $ExpectType boolean
util.isPointInPolygon(pointTuple, polygonTuple);

// $ExpectType [number, number][]
util.makesureClockwise(lineTuple);

// $ExpectType [number, number][]
util.makesureAntiClockwise(lineTuple);

// $ExpectType [number, number]
util.closestOnSegment(point, point, point);
// $ExpectType [number, number]
util.closestOnSegment(pointTuple, pointTuple, pointTuple);

// $ExpectType [number, number]
util.closestOnSegment(point, point, point);
// $ExpectType [number, number]
util.closestOnSegment(pointTuple, pointTuple, pointTuple);

// $ExpectType [number, number]
util.closestOnLine(point, line);
// $ExpectType [number, number]
util.closestOnLine(pointTuple, lineTuple);

// $ExpectType number
util.distanceToSegment(point, point, point);
// $ExpectType number
util.distanceToSegment(pointTuple, pointTuple, pointTuple);

// $ExpectType number
util.distanceToLine(point, line);
// $ExpectType number
util.distanceToLine(pointTuple, lineTuple);

// $ExpectType boolean
util.isPointOnSegment(point, point, point);
// $ExpectType boolean
util.isPointOnSegment(point, point, point, 1);
// $ExpectType boolean
util.isPointOnSegment(pointTuple, pointTuple, pointTuple);
// $ExpectType boolean
util.isPointOnSegment(pointTuple, pointTuple, pointTuple, 1);

// $ExpectType boolean
util.isPointOnLine(point, line);
// $ExpectType boolean
util.isPointOnLine(point, line, 1);
// $ExpectType boolean
util.isPointOnLine(pointTuple, lineTuple);
// $ExpectType boolean
util.isPointOnLine(pointTuple, lineTuple, 1);

// $ExpectType boolean
util.isPointOnRing(point, ring);
// $ExpectType boolean
util.isPointOnRing(point, ring, 1);
// $ExpectType boolean
util.isPointOnRing(pointTuple, ringTuple);
// $ExpectType boolean
util.isPointOnRing(pointTuple, ringTuple, 1);

// $ExpectType boolean
util.isPointOnPolygon(point, polygon);
// $ExpectType boolean
util.isPointOnPolygon(point, polygon, 1);
// $ExpectType boolean
util.isPointOnPolygon(pointTuple, polygonTuple);
// $ExpectType boolean
util.isPointOnPolygon(pointTuple, polygonTuple, 1);
