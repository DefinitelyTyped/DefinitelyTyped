export = BackupEventReader;
declare function BackupEventReader(): void;
declare class BackupEventReader {
    peekEvent(): any;
    popEvent(): any;
}
declare namespace BackupEventReader {
    const BACKUP_DONE: number;
    const BACKUP_INVALID: number;
    const DB_DROPPED: number;
    const BACKUP_RESTORED: number;
    const BACKUP_FAIL: number;
}
