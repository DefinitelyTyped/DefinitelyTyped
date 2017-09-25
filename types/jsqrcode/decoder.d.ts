declare const Decoder: {
	rsDecoder: ReedSolomonDecoder,

	correctErrors: (codewordBytes: Array<number>,  numDataCodewords: number) => void,

	decode(bits: BitMatrix): QRCodeDataBlockReader;
};
