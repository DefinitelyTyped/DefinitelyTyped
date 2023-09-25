// Type definitions for sightengine 1.3
// Project: https://github.com/Sightengine/client-nodejs
// Definitions by: Andrew Kerr <https://github.com/andrewkerr3956>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

declare namespace client {
    function check(models: string[]): typeof client;
    function set_url(imageUrl: URL | string): Promise<any>;
    function set_file(file: File): Promise<any>;
    function set_bytes(binaryImage: string, filename?: string): Promise<any>;
    function video(video: URL | string, callback: URL | string): Promise<any>;
    function video_sync(video: URL | string): Promise<any>;
    function feedback(model: string, modelClass: string, image: URL | string): Promise<any>;
}
declare function encodeQueryData(data: string): string;
declare function makeClient(api_user: string, api_secret: string): typeof client; 
export default makeClient;
