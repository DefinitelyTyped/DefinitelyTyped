// Type definitions for uploadcare 0.4
// Project: https://github.com/rexmorgan/uploadcare-node
// Definitions by: Jinesh Shah <https://github.com/jineshshah36>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ReadStream } from "fs";

declare namespace Uploadcare {
    interface File {
        original_file_url: string;
        image_info: ImageInfo;
        mime_type: string;
        is_ready: boolean;
        url: string;
        uuid: string;
        original_filename: string;
        datetime_uploaded: string;
        size: number;
        is_image: boolean;
        datetime_stored: string;
        datetime_removed: string | null;
    }

    interface ImageInfo {
        orientation: null;
        sequence: boolean;
        format: string;
        height: number;
        width: number;
        geo_location: null;
        datetime_original: null;
        dpi: number[];
    }

    interface Instance {
        file: {
            upload: (
                readStream: ReadStream,
                options: { store?: boolean },
                callback: (err: Error, res: { file: string }) => void
            ) => void;
            fromUrl: (
                url: string,
                options: { store?: boolean },
                callback: (err: Error, res: File) => void
            ) => void;
        };
        files: {
            store: (
                uuid: string,
                callback: (err: Error, res: File) => void
            ) => void;
            remove: (
                uuid: string,
                callback: (err: Error, res: File) => void
            ) => void;
        };
    }
}

declare function Uploadcare(
    publicKey: string,
    privateKey: string
): Uploadcare.Instance;

export = Uploadcare;
