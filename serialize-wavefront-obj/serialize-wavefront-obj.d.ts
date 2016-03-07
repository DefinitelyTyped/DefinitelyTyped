// Type definitions for serialize-wavefront-obj
// Project: https://github.com/thibauts/serialize-wavefront-obj
// Definitions by: Hou Chunlei <https://github.com/omni360>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module serialize {
	export function serialize(cells: ArrayLike<ArrayLike<number>>, positions: ArrayLike<ArrayLike<number>>,
		 vertexNormals?: ArrayLike<number>, vertexUVs?: ArrayLike<number>, faceNormals?: ArrayLike<ArrayLike<number>>, 
		 faceUVs?: ArrayLike<ArrayLike<number>>, name?: string): ArrayLike<string>;
}