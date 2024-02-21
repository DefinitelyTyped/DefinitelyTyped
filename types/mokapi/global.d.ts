export {}

declare global {
    /**
     * Opens a file
     * @param filePath - Path to the file.
     * @returns File content
     */
    function open(filePath: string): string
}