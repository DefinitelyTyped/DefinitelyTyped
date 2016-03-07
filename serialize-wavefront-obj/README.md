# serialize-wavefront-obj definition file
## Wavefront Obj serializer
Serializes a mesh to a Wavefront obj string.
## How to install
```
$ tsd install serialize-wavefront-obj
$ npm install serialize-wavefront-obj --save
```
## Example
```
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
```