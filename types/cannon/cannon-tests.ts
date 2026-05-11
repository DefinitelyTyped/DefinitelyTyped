import cannon = require("cannon");

var aabb = new cannon.AABB();

aabb.setFromPoints([new cannon.Vec3(1, 2, 3)]);

var vehicle = new CANNON.RaycastVehicle();

vehicle.addWheel({
    isFrontWheel: true,
});
