/// <reference path="hashset.d.ts" />

class Point {
    constructor(public x: number, public y: number) {
    }
}

function hashPoint(p: Point) {
    return "Point:" + p.x + "," + p.y;
}

function pointsEqual(p1: Point, p2: Point) {
    return p1.x === p2.x && p1.y === p2.y;
}

var points = new HashSet<Point>({ hashCode: hashPoint, equals: pointsEqual });

points.add(new Point(1, 2));
points.add(new Point(2, 3));
points.add(new Point(1, 2));
points.add(new Point(6, 5));

alert(points.size()); // Alerts 3

var otherPoints = new HashSet<Point>({ hashCode: hashPoint, equals: pointsEqual });

otherPoints.add(new Point(4, 4));
otherPoints.add(new Point(7, 9));
otherPoints.add(new Point(2, 3));
otherPoints.add(new Point(6, 5));

var intersection = points.intersection(otherPoints);

alert(intersection.contains(new Point(2, 3))); // Alerts true
alert(intersection.contains(new Point(7, 9))); // Alerts false
alert(intersection.size()); // Alerts 2
