import * as redisInfo from 'redis-info';

const info = redisInfo.parse('');

if (info.role === 'master') {
    // @ts-expect-error
    info.master_host;
} else {
    info.master_host;

    if (info.master_sync_in_progress === redisInfo.Flag.OFF) {
        // @ts-expect-error
        info.master_sync_left_bytes;
    } else {
        info.master_sync_left_bytes;
    }

    if (info.master_link_status === redisInfo.LinkStatus.UP) {
        // @ts-expect-error
        info.master_link_down_since_seconds;
    } else {
        info.master_link_down_since_seconds;
    }
}

if (info.aof_enabled === redisInfo.Flag.OFF) {
    // @ts-expect-error
    info.aof_pending_rewrite;
} else {
    info.aof_pending_rewrite;
}

if (info.loading === redisInfo.Flag.OFF) {
    // @ts-expect-error
    info.loading_start_time;
} else {
    info.loading_start_time;
}
