// Type definitions for generate-feed 1.1
// Project: https://github.com/bcomnes/generate-feed#readme
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace processFiles {
    interface Config {
        avatar?: string;
        author: string;
        description: string;
        expired?: boolean;
        favicon?: string;
        icon?: string;
        title: string;
        url: string;
        user_comment?: string;
    }

    interface LogMap {
        attachments?: Attachment[];
        author?: string;
        banner_image?: string;
        content?: string;
        date?: string;
        image?: string;
        link?: string;
        modified?: string;
        summary?: string;
        tags?: string[];
        title?: string;
        url?: string;
    }

    interface Attachment {
        duration_in_seconds?: number;
        mime_type?: string;
        size_in_bytes?: number;
        title?: string;
        url?: string;
    }

    type CallbackFn = (error?: Error) => void;
}

declare function processFiles(
    config: processFiles.Config,
    logMap: processFiles.LogMap[],
    dest: string,
    cb?: processFiles.CallbackFn,
): void;

export = processFiles;
