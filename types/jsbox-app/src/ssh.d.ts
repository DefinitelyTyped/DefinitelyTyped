// JSBox SSH API TypeScript Declaration

declare namespace SshTypes {
    interface ConnectOptions {
        host: string;
        port: number;
        username: string;
        public_key?: string;
        private_key?: string;
        password?: string;
        script?: string;
        /** Called after connecting. `response` contains the result of `script`, when provided. */
        handler: (session: Session, response: string) => void;
    }

    interface Session {
        host: string;
        port: number;
        username: string;
        timeout: number;
        lastError?: NSError | null;
        /** Usually a fingerprint string; JSBox may bridge a missing value as `0`. */
        fingerprintHash: string | number;
        banner?: string;
        remoteBanner: string;
        connected: boolean;
        authorized: boolean;
        channel: Channel;
        sftp: Sftp;
    }

    interface ExecuteResult {
        response: string;
        error: NSError | null;
    }

    interface WriteResult {
        success: boolean;
        error: NSError | null;
    }

    interface Channel {
        session: Session;
        bufferSize: number;
        type: number;
        lastResponse: string;
        requestPty: boolean;
        ptyTerminalType: number;
        environmentVariables?: Record<string, string>;

        execute(options: { script: string; timeout?: number; handler: (result: ExecuteResult) => void }): void;
        execute(options: { script: string; timeout?: number }): Promise<ExecuteResult>;

        write(options: { command: string; timeout?: number; handler: (result: WriteResult) => void }): void;
        write(options: { command: string; timeout?: number }): Promise<WriteResult>;

        upload(options: { path: string; dest: string; handler: (success: boolean) => void }): void;
        upload(options: { path: string; dest: string }): Promise<boolean>;

        download(options: { path: string; dest: string; handler: (success: boolean) => void }): void;
        download(options: { path: string; dest: string }): Promise<boolean>;
    }

    interface SftpFile {
        filename: string;
        isDirectory: boolean;
        modificationDate: Date;
        lastAccess: Date;
        fileSize: number;
        ownerUserID: number;
        ownerGroupID: number;
        permissions: string;
        flags: number;
    }

    interface Sftp {
        session: Session;
        bufferSize: number;
        connected: boolean;

        connect(): Promise<boolean>;
        /**
         * Disconnects this SFTP channel. Do not call it immediately before
         * `$ssh.disconnect()`, as some JSBox versions may crash on double cleanup.
         */
        disconnect(): void;

        moveItem(options: { src: string; dest: string; handler: (success: boolean) => void }): void;
        moveItem(options: { src: string; dest: string }): Promise<boolean>;

        directoryExists(options: { path: string; handler: (exists: boolean) => void }): void;
        directoryExists(options: { path: string }): Promise<boolean>;

        createDirectory(options: { path: string; handler: (success: boolean) => void }): void;
        createDirectory(options: { path: string }): Promise<boolean>;

        removeDirectory(options: { path: string; handler: (success: boolean) => void }): void;
        removeDirectory(options: { path: string }): Promise<boolean>;

        contentsOfDirectory(options: { path: string; handler: (contents: SftpFile[]) => void }): void;
        contentsOfDirectory(options: { path: string }): Promise<SftpFile[]>;

        infoForFile(options: { path: string; handler: (file: SftpFile) => void }): void;
        infoForFile(options: { path: string }): Promise<SftpFile>;

        fileExists(options: { path: string; handler: (exists: boolean) => void }): void;
        fileExists(options: { path: string }): Promise<boolean>;

        createSymbolicLink(options: { path: string; dest: string; handler: (success: boolean) => void }): void;
        createSymbolicLink(options: { path: string; dest: string }): Promise<boolean>;

        removeFile(options: { path: string; handler: (success: boolean) => void }): void;
        removeFile(options: { path: string }): Promise<boolean>;

        contents(options: { path: string; handler: (file: NSData) => void }): void;
        contents(options: { path: string }): Promise<NSData>;

        write(options: {
            file: NSData;
            path: string;
            /** Return `true` to stop the transfer early. */
            progress?: (sent: number) => boolean;
            handler: (success: boolean) => void;
        }): void;
        write(options: {
            file: NSData;
            path: string;
            /** Return `true` to stop the transfer early. */
            progress?: (sent: number) => boolean;
        }): Promise<boolean>;

        append(options: { file: NSData; path: string; handler: (success: boolean) => void }): void;
        append(options: { file: NSData; path: string }): Promise<boolean>;

        copy(options: {
            path: string;
            dest: string;
            /** Return `true` to stop the transfer early. */
            progress?: (copied: number, totalBytes: number) => boolean;
            handler: (success: boolean) => void;
        }): void;
        copy(options: {
            path: string;
            dest: string;
            /** Return `true` to stop the transfer early. */
            progress?: (copied: number, totalBytes: number) => boolean;
        }): Promise<boolean>;
    }
}

interface JBSsh {
    connect(options: SshTypes.ConnectOptions): void;
    disconnect(): void;
}

declare const $ssh: JBSsh;
