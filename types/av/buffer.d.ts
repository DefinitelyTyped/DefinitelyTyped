/// <reference path="./baseTypes.d.ts" />

declare namespace AV {
	class Buffer {
		static allocate(size: number): Buffer;

		constructor(data: TypedArray);

		length: number;

		copy(): Buffer;
		slice(offset: number, length: number): Buffer;
		toBlob(): Blob;
		toBlobURL(): string;
	}
}
