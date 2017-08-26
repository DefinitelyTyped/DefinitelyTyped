import Victor = require('victor');

var vector1 = new Victor(10,10)
var vector2 = new Victor(20,20)

vector1.add(vector2).addX(vector2).addY(vector2)

vector1.clone().copy(vector2).toString()

vector1.toArray()
vector1.toObject()

vector1.subtract(vector2).subtractX(vector2).subtractY(vector2)
.multiply(vector2).multiplyX(vector2).multiplyY(vector2)
.divide(vector2).divideX(vector2).divideY(vector2)
.invert().invertX().invertY()
.mix(vector2, 0.5).mixX(vector2,0.5).mixY(vector2,0.5)
.normalize().norm()
.limit(100,5)
.unfloat()
.rotate(10)
.rotateDeg(10)
.rotateBy(10)
.rotateByDeg(10)
.randomize(new Victor(10,10), new Victor(100,100)).randomizeY(new Victor(10,10), new Victor(100,100)).randomizeX(new Victor(10,10), new Victor(100,100)).randomizeAny(new Victor(10,10), new Victor(100,100))

vector2.dot(vector1)
vector2.cross(vector1)

vector1.length()
vector1.lengthSq()

vector1.distance(vector2)
vector1.distanceSq(vector2)

vector1.distanceX(vector2)
vector1.distanceY(vector2)

vector1.horizontalAngle()
vector1.horizontalAngleDeg()
vector1.angle()
vector1.angleDeg()
vector1.verticalAngle()
vector1.verticalAngleDeg()
