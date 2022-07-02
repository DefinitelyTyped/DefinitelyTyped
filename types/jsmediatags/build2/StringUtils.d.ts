export type DecodedString = InternalDecodedString;

export default class InternalDecodedString {
  _value: string;
  bytesReadCount: number;
  length: number;

  constructor(value: string, bytesReadCount: number);

  toString(): string;
}
