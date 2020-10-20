export namespace FileChecksum {
  function create(file: File, callback: (error: Error, checksum: string) => void): void;
}
