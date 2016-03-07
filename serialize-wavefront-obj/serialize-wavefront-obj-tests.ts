/// <reference path="serialize-wavefront-obj.d.ts" />
class serializeObjTest {
	public test(){
		let mesh = {
			positions: [
				[ -1.0, 0.0, 0.0 ],
				[ 0.0, 1.0, 0.0 ],
				[1.0, 0.0, 0.0 ]
			],
			cells: [
				[0, 1, 2]
			]
		};
		let str = serialize.serialize(mesh.positions, mesh.cells);
		console.log(str);
	}
}

let T = new serializeObjTest;
T.test();
