const wkt = new Wkt.Wkt();

const point = wkt.read("POINT(1 2)");

point.toJson();
