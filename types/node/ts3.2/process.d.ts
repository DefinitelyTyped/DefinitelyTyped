import 'process';
declare module 'process' {
    interface HRTime {
        bigint(): bigint;
    }
}
