declare class ObjectId {
  static UNIQUE_VALUE: Buffer;

  constructor(prop?: string|number);

  generateCounterValue(): Buffer;
  fromHex(hex: string): void;
  setMachineId(machineId?: Buffer): void;
  getDate(): Date; getTimestamp(): number;
  getCounterValue(): Buffer;
  toHex(): string;
  toString(): string;
  getMachineId(): Buffer;
  isValid(hex: string): boolean;
}

export = ObjectId