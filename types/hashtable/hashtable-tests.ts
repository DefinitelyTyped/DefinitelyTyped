

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

var coloursForPoints = new Hashtable<Point, string>({ hashCode: hashPoint, equals: pointsEqual });

function getColourAt(x: number, y: number) {
    var point = new Point(x, y);
    return coloursForPoints.get(point);
}

coloursForPoints.put(new Point(1, 2), "green");

alert(getColourAt(1, 2)); // Alerts green
