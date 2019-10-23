

class jsClipperTest{
	public intPointTest(){

		let v1: ClipperLib.IntPoint = new ClipperLib.IntPoint(10, 10);
		console.log("def: v1 - " + v1.X.toString() + v1.Y.toString());
		let v2: ClipperLib.IntPoint = new ClipperLib.IntPoint(20, 20);
		console.log("def: v2 - " + v2.X.toString() + v1.Y.toString());
		let v3: ClipperLib.IntPoint = new ClipperLib.IntPoint(30, 30);
		console.log("def: v3 -" + v3.X.toString() + v1.Y.toString());
		console.log("perp: v3 - " + v3.X.toString() + v3.Y.toString());

	}
}

var tt = new jsClipperTest;

tt.intPointTest();
