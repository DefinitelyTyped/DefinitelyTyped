/// <reference types="node" />

interface VPKHeader {
    version: number
    treeLength: number
    unknown1?: number
    footerLength?: number
    unknown3?: number
    unknown4?: number
}
  
interface VPKDirectoryEntry {
    crc: number
    preloadBytes: number
    archiveIndex: number
    entryOffset: number
    entryLength: number
    preloadOffset?: number
}
  
declare class VPK {
    constructor(path: string)
  
    directoryPath: string
    header: VPKHeader
    tree: Record<string, VPKDirectoryEntry>
  
    isValid(): boolean
    load(): void
    readonly files: string[]
    getFile(path: string): Buffer | null
}
  
declare namespace VPK {
    type Header = VPKHeader
    type Entry = VPKDirectoryEntry
}
  
export = VPK