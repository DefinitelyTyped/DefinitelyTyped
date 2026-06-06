// eslint-disable-next-line @definitelytyped/no-bad-reference
import ArchiveEntry from "../archive-entry.js";
import GeneralPurposeBit from "./general-purpose-bit.js";

export default class ZipArchiveEntry extends ArchiveEntry {
    platform: number;
    method: number;
    name: string | null;
    size: number;
    csize: number;
    gpb: GeneralPurposeBit;
    crc: number;
    time: number;
    minver: number;
    mode: number;
    extra: number | null;
    exattr: number;
    inattr: number;
    comment: string | null;

    setExtra(extra: Buffer): void;
    getExtra(): Buffer;
    getCentralDirectoryExtra(): Buffer;
    getLocalFileDataExtra(): Buffer;

    setComment(comment: string): void;
    getComment(): string;

    setCompressedSize(size: number): void;
    getCompressedSize(): number;

    setCrc(crc: number): void;
    getCrc(): number;

    getInternalAttributes(): number;
    setInternalAttributes(attr: number): void;

    setExternalAttributes(attr: number): void;
    getExternalAttributes(): number;

    setGeneralPurposeBit(gpb: GeneralPurposeBit): void;
    getGeneralPurposeBit(): GeneralPurposeBit;

    setTime(time: Date, forceLocalTime?: boolean): void;
    getTime(): number | Date;
    getTimeDos(): number;
    getLastModifiedDate(): number | Date;

    setUnixMode(mode: number): void;
    getUnixMode(): number;

    getVersionNeededToExtract(minver: number): void;
    getVersionNeededToExtract(): number;

    setMethod(method: number): void;
    getMethod(): number;

    setName(name: string, prependSlash?: boolean): void;
    getName(): string | null;

    setPlatform(platform: number): void;
    getPlatform(): number;

    setSize(size: number): void;
    getSize(): number;

    isDirectory(): boolean;
    isUnixSymlink(): boolean;
    isZip64(): boolean;
}
