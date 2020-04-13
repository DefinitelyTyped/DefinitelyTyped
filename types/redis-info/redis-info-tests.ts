import * as redisInfo from 'redis-info';

const info = redisInfo.parse('');

if (info.role === 'master') {
    info.master_host; // $ExpectError
} else {
    info.master_host;

    if (info.master_sync_in_progress === redisInfo.Flag.OFF) {
        info.master_sync_left_bytes; // $ExpectError
    } else {
        info.master_sync_left_bytes;
    }

    if (info.master_link_status === redisInfo.LinkStatus.UP) {
        info.master_link_down_since_seconds; // $ExpectError
    } else {
        info.master_link_down_since_seconds;
    }
}

if (info.aof_enabled === redisInfo.Flag.OFF) {
    info.aof_pending_rewrite; // $ExpectError
} else {
    info.aof_pending_rewrite;
}

if (info.loading === redisInfo.Flag.OFF) {
    info.loading_start_time; // $ExpectError
} else {
    info.loading_start_time;
}
