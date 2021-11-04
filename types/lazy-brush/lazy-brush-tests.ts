import { LazyBrush, Point, LazyPoint, Coordinates } from 'lazy-brush';

const point = new Point(1, 2);
const pointX: number = point.x;
const pointY: number = point.y;

const lazyPoint = new LazyPoint(1, 2);
const lazyPointX: number = lazyPoint.x;
const lazyPointY: number = lazyPoint.y;
const equalsToResult: boolean = lazyPoint.equalsTo({ x: 1, y: 4 });
const getAngleToResult: number = lazyPoint.getAngleTo(point);
const getDifferenceToResult: Point = lazyPoint.getDifferenceTo(point);
const getDistanceToResult: number = lazyPoint.getDistanceTo(point);
lazyPoint.moveByAngle(45, 20);
const toObjectResult: Coordinates = lazyPoint.toObject();
lazyPoint.update({ x: 1, y: 7 });

new LazyBrush();
new LazyBrush({ radius: 20 });
const lazy = new LazyBrush({
    radius: 30,
    enabled: true,
    initialPoint: { x: 0, y: 0 },
});

const radiusValue: number = lazy.radius;
const _isEnabledValue: boolean = lazy._isEnabled;
const pointerValue: LazyPoint = lazy.pointer;
const brushValue: LazyPoint = lazy.brush;
const angleValue: number = lazy.angle;
const distanceValue: number = lazy.distance;
const _hasMovedValue: boolean = lazy._hasMoved;

const updateResult: boolean = lazy.update({ x: 50, y: 0 });
const updateResult2: boolean = lazy.update({ x: 50, y: 0 }, { both: true });
const brushHasMovedResult: boolean = lazy.brushHasMoved();
lazy.disable();
lazy.enable();
const isEnabledResult: boolean = lazy.isEnabled();
const getAngleResult: number = lazy.getAngle();
const getBrushResult: LazyPoint = lazy.getBrush();
const getBrushCoordinatesResult: Coordinates = lazy.getBrushCoordinates();
const getDistanceResult: number = lazy.getDistance();
const getPointerResult: LazyPoint = lazy.getPointer();
const getPointerCoordinatesResult: Coordinates = lazy.getPointerCoordinates();
const getRadiusResult: number = lazy.getRadius();
lazy.setRadius(12);
