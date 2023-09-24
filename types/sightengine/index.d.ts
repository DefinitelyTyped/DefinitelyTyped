// Type definitions for sightengine
// Project: https://github.com/Sightengine/client-nodejs
// Definitions by: Andrew Kerr <https://github.com/andrewkerr3956/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module "sightengine" {
    export namespace client {
        export function check(models: string[]): typeof client;
        export function set_url(imageUrl: URL | string): Promise<any>;
        export function set_file(file: File): Promise<any>;
        export function set_bytes(binaryImage: string, filename?: string): Promise<any>;
        export function video(video: URL | string, callback: URL | string): Promise<any>;
        export function video_sync(video: URL | string): Promise<any>;
        export function feedback(model: string, modelClass: string, image: URL | string): Promise<any>;
    }
    export function encodeQueryData(data: string): string;
    export default function makeClient(api_user: string, api_secret: string): typeof client;
}
