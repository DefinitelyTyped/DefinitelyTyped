// JSBox SSH API TypeScript Declaration

declare namespace SshTypes {
    interface ConnectOptions {
        host: string;
        port: number;
        username: string;
        public_key?: string;
        private_key?: string;
        password?: string;
        script?: string; // The script execution result is the response below.
        handler: (session: Session, response: string) => void;
    }

    interface Session {
        host: string;
        port: number;
        username: string;
        timeout: number;
        lastError?: NSError;
        fingerprintHash: string;
        banner: string;
        remoteBanner: string;
        connected: boolean;
        authorized: boolean;
        channel: Channel;
        sftp: Sftp;
    }

    interface Channel {
        session: Session;
        bufferSize: number;
        type: number;
        lastResponse: string;
        requestPty: boolean;
        ptyTerminalType: number;
        environmentVariables: any; // JSON

        execute(options: {
            script: string;
            timeout: number;
            handler: (result: { response: string; error?: NSError }) => void;
        }): void;

        write(options: {
            command: string;
            timeout: number;
            handler: (result: { success: boolean; error?: NSError }) => void;
        }): void;

        upload(options: { path: string; dest: string; handler: (success: boolean) => void }): void;

        download(options: { path: string; dest: string; handler: (success: boolean) => void }): void;
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

        connect(): Promise<void>;
        moveItem(options: { src: string; dest: string; handler?: (success: boolean) => void }): void;
        directoryExists(options: { path: string; handler: (exists: boolean) => void }): void;
        createDirectory(options: { path: string; handler: (success: boolean) => void }): void;
        removeDirectory(options: { path: string; handler: (success: boolean) => void }): void;
        contentsOfDirectory(options: { path: string; handler: (contents: SftpFile[]) => void }): void;
        infoForFile(options: { path: string; handler: (file: SftpFile) => void }): void;
        fileExists(options: { path: string; handler: (exists: boolean) => void }): void;
        createSymbolicLink(options: { path: string; dest: string; handler: (success: boolean) => void }): void;
        removeFile(options: { path: string; handler: (success: boolean) => void }): void;
        contents(options: { path: string; handler: (file: NSData) => void }): void;
        write(options: {
            file: NSData;
            path: string;
            progress?: (sent: number) => boolean;
            // Optional: determine whether is finished here
            handler: (success: boolean) => void;
        }): void;
        append(options: { file: NSData; path: string; handler: (success: boolean) => void }): void;
        copy(options: {
            path: string;
            dest: string;
            progress?: (copied: number, totalBytes: number) => boolean;
            // Optional: determine whether is finished here
            handler: (success: boolean) => void;
        }): void;
    }
}

interface JBSsh {
    connect(options: SshTypes.ConnectOptions): void;
    disconnect(): void;
}

declare const $ssh: JBSsh;
