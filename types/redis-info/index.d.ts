export enum Flag {
    ON = "1",
    OFF = "0",
}

export interface ServerInfo {
    redis_version: string;
    redis_git_sha1: string;
    redis_git_dirty: Flag;
    redis_build_id: string;
    redis_mode: "standalone" | "sentinel" | "cluster";
    os: string;
    arch_bits: "32" | "64";
    multiplexing_api: string;
    atomicvar_api: string;
    gcc_version: string;
    process_id: string;
    run_id: string;
    tcp_port: string;
    uptime_in_seconds: string;
    uptime_in_days: string;
    hz: string;
    lru_clock: string;
    executable: string;
    config_file: string;
}

export interface ClientsInfo {
    connected_clients: string;
    client_longest_output_list: string;
    client_biggest_input_buf: string;
    blocked_clients: string;
}

export interface MemoryInfo {
    used_memory: string;
    used_memory_human: string;
    used_memory_rss: string;
    used_memory_rss_human: string;
    used_memory_peak: string;
    used_memory_peak_human: string;
    used_memory_peak_perc: string;
    used_memory_overhead: string;
    used_memory_startup: string;
    used_memory_dataset: string;
    used_memory_dataset_perc: string;
    allocator_allocated: string;
    allocator_active: string;
    allocator_resident: string;
    total_system_memory: string;
    total_system_memory_human: string;
    used_memory_lua: string;
    used_memory_lua_human: string;
    maxmemory: string;
    maxmemory_human: string;
    maxmemory_policy: string;
    allocator_frag_ratio: string;
    allocator_frag_bytes: string;
    allocator_rss_ratio: string;
    allocator_rss_bytes: string;
    rss_overhead_ratio: string;
    rss_overhead_bytes: string;
    mem_fragmentation_ratio: string;
    mem_fragmentation_bytes: string;
    mem_allocator: string;
    active_defrag_running: Flag;
    lazyfree_pending_objects: string;
}

export interface BasePersistenceInfo {
    rdb_changes_since_last_save: string;
    rdb_bgsave_in_progress: Flag;
    rdb_last_save_time: string;
    rdb_last_bgsave_status: string;
    rdb_last_bgsave_time_sec: string;
    rdb_current_bgsave_time_sec: string;
    rdb_last_cow_size: string;
    aof_rewrite_in_progress: Flag;
    aof_rewrite_scheduled: Flag;
    aof_last_rewrite_time_sec: string;
    aof_current_rewrite_time_sec: string;
    aof_last_bgrewrite_status: string;
    aof_last_write_status: string;
    aof_last_cow_size: string;
}

export type PersistenceInfo =
    & BasePersistenceInfo
    & (PersistenceAOFOnInfo | PersistenceAOFOffInfo)
    & (PersistenceLoadingOnInfo | PersistenceLoadingOffInfo);

export interface PersistenceAOFOnInfo {
    aof_enabled: Flag.ON;
    aof_current_size: string;
    aof_base_size: string;
    aof_pending_rewrite: Flag;
    aof_buffer_length: string;
    aof_rewrite_buffer_length: string;
    aof_pending_bio_fsync: string;
    aof_delayed_fsync: string;
}

export interface PersistenceAOFOffInfo {
    aof_enabled: Flag.OFF;
}

export interface PersistenceLoadingOnInfo {
    loading: Flag.ON;
    loading_start_time: string;
    loading_total_bytes: string;
    loading_loaded_bytes: string;
    loading_loaded_perc: string;
    loading_eta_seconds: string;
}

export interface PersistenceLoadingOffInfo {
    loading: Flag.OFF;
}

export interface Stats {
    total_connections_received: string;
    total_commands_processed: string;
    instantaneous_ops_per_sec: string;
    total_net_input_bytes: string;
    total_net_output_bytes: string;
    instantaneous_input_kbps: string;
    instantaneous_output_kbps: string;
    rejected_connections: string;
    sync_full: string;
    sync_partial_ok: string;
    sync_partial_err: string;
    expired_keys: string;
    expired_stale_perc: string;
    expired_time_cap_reached_count: string;
    evicted_keys: string;
    keyspace_hits: string;
    keyspace_misses: string;
    pubsub_channels: string;
    pubsub_patterns: string;
    latest_fork_usec: string;
    migrate_cached_sockets: string;
    slave_expires_tracked_keys: string;
    active_defrag_hits: string;
    active_defrag_misses: string;
    active_defrag_key_hits: string;
    active_defrag_key_misses: string;
}

export interface BaseReplicationInfo {
    connected_slaves: string;
    master_replid: string;
    master_replid2: string;
    master_repl_offset: string;
    second_repl_offset: string;
    repl_backlog_active: Flag;
    repl_backlog_size: string;
    repl_backlog_first_byte_offset: string;
    repl_backlog_histlen: string;
}

export type ReplicationInfo = BaseReplicationInfo & (ReplicationMasterInfo | ReplicationReplicaInfo);

export interface ReplicationMasterInfo {
    role: "master";
}

export interface BaseReplicationReplicaInfo {
    role: "slave";
    master_host: string;
    master_port: string;
    master_last_io_seconds_ago: string;
    slave_repl_offset: string;
    slave_priority: string;
    slave_read_only: Flag;
    connected_slaves: string;
    min_slaves_good_slaves: string;
}

export type ReplicationReplicaInfo =
    & BaseReplicationReplicaInfo
    & (ReplicationReplicaSyncOnInfo | ReplicationReplicaSyncOffInfo)
    & (ReplicationReplicaLinkUpInfo | ReplicationReplicaLinkDownInfo);

export interface ReplicationReplicaSyncOnInfo {
    master_sync_in_progress: Flag.ON;
    master_sync_left_bytes: string;
    master_sync_last_io_seconds_ago: string;
}

export interface ReplicationReplicaSyncOffInfo {
    master_sync_in_progress: Flag.OFF;
}

export enum LinkStatus {
    UP = "up",
    DOWN = "down",
}

export interface ReplicationReplicaLinkUpInfo {
    master_link_status: LinkStatus.UP;
}

export interface ReplicationReplicaLinkDownInfo {
    master_link_status: LinkStatus.DOWN;
    master_link_down_since_seconds: string;
}

export interface CPUInfo {
    used_cpu_sys: string;
    used_cpu_user: string;
    used_cpu_sys_children: string;
    used_cpu_user_children: string;
}

export interface ClusterInfo {
    cluster_enabled: Flag;
}

export interface GeneralStats {
    databases: {
        [index: number]: {
            keys: number;
            expires: number;
        };
    };
    commands: {
        [command: string]: {
            calls: number;
            usec: number;
            usec_per_call: number;
        };
    };
}

export type RedisInfo = Readonly<
    GeneralStats & ServerInfo & ClientsInfo & MemoryInfo & PersistenceInfo & Stats & ReplicationInfo & CPUInfo
>;

export function parse(info: string): RedisInfo;
