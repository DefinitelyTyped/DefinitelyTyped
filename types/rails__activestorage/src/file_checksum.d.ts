export namespace FileChecksum {
    function create(file: File, callback: (error: string | null, checksum: string) => void): void;
}
