export {};

declare global {
    /**
     * Opens an existing file and reads its entire contents.
     * https://mokapi.io/docs/javascript-api/globals/open
     * @param filePath - Path to the file.
     * @param args - Args object containing additional arguments
     * @returns File content
     * @example
     * const data = JSON.parse(open("/path/to/file.json"));
     * export default function() {
     *   mokapi.on("http", function(request, response) {
     *     response.data = data;
     *     return true;
     *   });
     * }
     */
    function open(filePath: string, args?: Args): string;

    interface Args {
        /**
         * By default contents of the file are read as string, but with binary the file will be read as binary.
         */
        as: "binary" | "string";
    }
}
