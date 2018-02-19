/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "team_info", callback: (event: TeamInfoEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "team_info", callback: (context: T, event: TeamInfoEvent) => void, context: T): EventListenerID;
interface TeamInfoEvent {
    teamid: number;
    teamname: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "team_score", callback: (event: TeamScoreEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "team_score", callback: (context: T, event: TeamScoreEvent) => void, context: T): EventListenerID;
interface TeamScoreEvent {
    teamid: number;
    score: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "teamplay_broadcast_audio", callback: (event: TeamplayBroadcastAudioEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "teamplay_broadcast_audio", callback: (context: T, event: TeamplayBroadcastAudioEvent) => void, context: T): EventListenerID;
interface TeamplayBroadcastAudioEvent {
    team: number;
    sound: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_team", callback: (event: PlayerTeamEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_team", callback: (context: T, event: PlayerTeamEvent) => void, context: T): EventListenerID;
interface PlayerTeamEvent {
    userid: number;
    team: number;
    oldteam: number;
    disconnect: boolean;
    autoteam: boolean;
    silent: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_class", callback: (event: PlayerClassEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_class", callback: (context: T, event: PlayerClassEvent) => void, context: T): EventListenerID;
interface PlayerClassEvent {
    userid: number;
    class: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_death", callback: (event: PlayerDeathEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_death", callback: (context: T, event: PlayerDeathEvent) => void, context: T): EventListenerID;
interface PlayerDeathEvent {
    userid: number;
    attacker: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_hurt", callback: (event: PlayerHurtEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_hurt", callback: (context: T, event: PlayerHurtEvent) => void, context: T): EventListenerID;
interface PlayerHurtEvent {
    userid: number;
    attacker: number;
    health: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_chat", callback: (event: PlayerChatEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_chat", callback: (context: T, event: PlayerChatEvent) => void, context: T): EventListenerID;
interface PlayerChatEvent {
    teamonly: boolean;
    userid: number;
    playerid: number;
    text: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_score", callback: (event: PlayerScoreEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_score", callback: (context: T, event: PlayerScoreEvent) => void, context: T): EventListenerID;
interface PlayerScoreEvent {
    userid: number;
    kills: number;
    deaths: number;
    score: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_spawn", callback: (event: PlayerSpawnEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_spawn", callback: (context: T, event: PlayerSpawnEvent) => void, context: T): EventListenerID;
interface PlayerSpawnEvent {
    userid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_shoot", callback: (event: PlayerShootEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_shoot", callback: (context: T, event: PlayerShootEvent) => void, context: T): EventListenerID;
interface PlayerShootEvent {
    userid: number;
    weapon: number;
    mode: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_use", callback: (event: PlayerUseEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_use", callback: (context: T, event: PlayerUseEvent) => void, context: T): EventListenerID;
interface PlayerUseEvent {
    userid: number;
    entity: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_changename", callback: (event: PlayerChangenameEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_changename", callback: (context: T, event: PlayerChangenameEvent) => void, context: T): EventListenerID;
interface PlayerChangenameEvent {
    userid: number;
    oldname: string;
    newname: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_hintmessage", callback: (event: PlayerHintmessageEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_hintmessage", callback: (context: T, event: PlayerHintmessageEvent) => void, context: T): EventListenerID;
interface PlayerHintmessageEvent {
    hintmessage: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "game_init", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "game_newmap", callback: (event: GameNewmapEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "game_newmap", callback: (context: T, event: GameNewmapEvent) => void, context: T): EventListenerID;
interface GameNewmapEvent {
    mapname: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "game_start", callback: (event: GameStartEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "game_start", callback: (context: T, event: GameStartEvent) => void, context: T): EventListenerID;
interface GameStartEvent {
    roundslimit: number;
    timelimit: number;
    fraglimit: number;
    objective: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "game_end", callback: (event: GameEndEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "game_end", callback: (context: T, event: GameEndEvent) => void, context: T): EventListenerID;
interface GameEndEvent {
    winner: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "round_start", callback: (event: RoundStartEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "round_start", callback: (context: T, event: RoundStartEvent) => void, context: T): EventListenerID;
interface RoundStartEvent {
    timelimit: number;
    fraglimit: number;
    objective: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "round_end", callback: (event: RoundEndEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "round_end", callback: (context: T, event: RoundEndEvent) => void, context: T): EventListenerID;
interface RoundEndEvent {
    winner: number;
    reason: number;
    message: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "round_start_pre_entity", callback: (event: {}) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "teamplay_round_start", callback: (event: TeamplayRoundStartEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "teamplay_round_start", callback: (context: T, event: TeamplayRoundStartEvent) => void, context: T): EventListenerID;
interface TeamplayRoundStartEvent {
    full_reset: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hostname_changed", callback: (event: HostnameChangedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "hostname_changed", callback: (context: T, event: HostnameChangedEvent) => void, context: T): EventListenerID;
interface HostnameChangedEvent {
    hostname: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "difficulty_changed", callback: (event: DifficultyChangedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "difficulty_changed", callback: (context: T, event: DifficultyChangedEvent) => void, context: T): EventListenerID;
interface DifficultyChangedEvent {
    newDifficulty: number;
    oldDifficulty: number;
    strDifficulty: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "finale_start", callback: (event: FinaleStartEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "finale_start", callback: (context: T, event: FinaleStartEvent) => void, context: T): EventListenerID;
interface FinaleStartEvent {
    rushes: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "game_message", callback: (event: GameMessageEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "game_message", callback: (context: T, event: GameMessageEvent) => void, context: T): EventListenerID;
interface GameMessageEvent {
    target: number;
    text: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "break_breakable", callback: (event: BreakBreakableEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "break_breakable", callback: (context: T, event: BreakBreakableEvent) => void, context: T): EventListenerID;
interface BreakBreakableEvent {
    entindex: number;
    userid: number;
    material: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "break_prop", callback: (event: BreakPropEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "break_prop", callback: (context: T, event: BreakPropEvent) => void, context: T): EventListenerID;
interface BreakPropEvent {
    entindex: number;
    userid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "npc_spawned", callback: (event: NpcSpawnedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "npc_spawned", callback: (context: T, event: NpcSpawnedEvent) => void, context: T): EventListenerID;
interface NpcSpawnedEvent {
    entindex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "npc_replaced", callback: (event: NpcReplacedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "npc_replaced", callback: (context: T, event: NpcReplacedEvent) => void, context: T): EventListenerID;
interface NpcReplacedEvent {
    old_entindex: number;
    new_entindex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "entity_killed", callback: (event: EntityKilledEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "entity_killed", callback: (context: T, event: EntityKilledEvent) => void, context: T): EventListenerID;
interface EntityKilledEvent {
    entindex_killed: number;
    entindex_attacker: number;
    entindex_inflictor: number;
    damagebits: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "entity_hurt", callback: (event: EntityHurtEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "entity_hurt", callback: (context: T, event: EntityHurtEvent) => void, context: T): EventListenerID;
interface EntityHurtEvent {
    entindex_killed: number;
    entindex_attacker: number;
    entindex_inflictor: number;
    damagebits: number;
    damage: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "bonus_updated", callback: (event: BonusUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "bonus_updated", callback: (context: T, event: BonusUpdatedEvent) => void, context: T): EventListenerID;
interface BonusUpdatedEvent {
    numadvanced: number;
    numbronze: number;
    numsilver: number;
    numgold: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_stats_updated", callback: (event: PlayerStatsUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_stats_updated", callback: (context: T, event: PlayerStatsUpdatedEvent) => void, context: T): EventListenerID;
interface PlayerStatsUpdatedEvent {
    forceupload: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "achievement_event", callback: (event: AchievementEventEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "achievement_event", callback: (context: T, event: AchievementEventEvent) => void, context: T): EventListenerID;
interface AchievementEventEvent {
    achievement_name: string;
    cur_val: number;
    max_val: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "achievement_earned", callback: (event: AchievementEarnedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "achievement_earned", callback: (context: T, event: AchievementEarnedEvent) => void, context: T): EventListenerID;
interface AchievementEarnedEvent {
    player: number;
    achievement: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "achievement_write_failed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "physgun_pickup", callback: (event: PhysgunPickupEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "physgun_pickup", callback: (context: T, event: PhysgunPickupEvent) => void, context: T): EventListenerID;
interface PhysgunPickupEvent {
    entindex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "flare_ignite_npc", callback: (event: FlareIgniteNpcEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "flare_ignite_npc", callback: (context: T, event: FlareIgniteNpcEvent) => void, context: T): EventListenerID;
interface FlareIgniteNpcEvent {
    entindex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "helicopter_grenade_punt_miss", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "user_data_downloaded", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "ragdoll_dissolved", callback: (event: RagdollDissolvedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "ragdoll_dissolved", callback: (context: T, event: RagdollDissolvedEvent) => void, context: T): EventListenerID;
interface RagdollDissolvedEvent {
    entindex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "gameinstructor_draw", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "gameinstructor_nodraw", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "map_transition", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "instructor_server_hint_create", callback: (event: InstructorServerHintCreateEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "instructor_server_hint_create", callback: (context: T, event: InstructorServerHintCreateEvent) => void, context: T): EventListenerID;
interface InstructorServerHintCreateEvent {
    hint_name: string;
    hint_replace_key: string;
    hint_target: number;
    hint_activator_userid: number;
    hint_timeout: number;
    hint_icon_onscreen: string;
    hint_icon_offscreen: string;
    hint_caption: string;
    hint_activator_caption: string;
    hint_color: string;
    hint_icon_offset: number;
    hint_range: number;
    hint_flags: number;
    hint_binding: string;
    hint_allow_nodraw_target: boolean;
    hint_nooffscreen: boolean;
    hint_forcecaption: boolean;
    hint_local_player_only: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "instructor_server_hint_stop", callback: (event: InstructorServerHintStopEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "instructor_server_hint_stop", callback: (context: T, event: InstructorServerHintStopEvent) => void, context: T): EventListenerID;
interface InstructorServerHintStopEvent {
    hint_name: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "chat_new_message", callback: (event: ChatNewMessageEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "chat_new_message", callback: (context: T, event: ChatNewMessageEvent) => void, context: T): EventListenerID;
interface ChatNewMessageEvent {
    channel: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "chat_members_changed", callback: (event: ChatMembersChangedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "chat_members_changed", callback: (context: T, event: ChatMembersChangedEvent) => void, context: T): EventListenerID;
interface ChatMembersChangedEvent {
    channel: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "inventory_updated", callback: (event: InventoryUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "inventory_updated", callback: (context: T, event: InventoryUpdatedEvent) => void, context: T): EventListenerID;
interface InventoryUpdatedEvent {
    itemdef: number;
    itemid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "cart_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "store_pricesheet_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "gc_connected", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "item_schema_initialized", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "drop_rate_modified", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "event_ticket_modified", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hltv_cameraman", callback: (event: HltvCameramanEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "hltv_cameraman", callback: (context: T, event: HltvCameramanEvent) => void, context: T): EventListenerID;
interface HltvCameramanEvent {
    index: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hltv_rank_camera", callback: (event: HltvRankCameraEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "hltv_rank_camera", callback: (context: T, event: HltvRankCameraEvent) => void, context: T): EventListenerID;
interface HltvRankCameraEvent {
    index: number;
    rank: number;
    target: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hltv_rank_entity", callback: (event: HltvRankEntityEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "hltv_rank_entity", callback: (context: T, event: HltvRankEntityEvent) => void, context: T): EventListenerID;
interface HltvRankEntityEvent {
    index: number;
    rank: number;
    target: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hltv_fixed", callback: (event: HltvFixedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "hltv_fixed", callback: (context: T, event: HltvFixedEvent) => void, context: T): EventListenerID;
interface HltvFixedEvent {
    posx: number;
    posy: number;
    posz: number;
    theta: number;
    phi: number;
    offset: number;
    fov: number;
    target: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hltv_chase", callback: (event: HltvChaseEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "hltv_chase", callback: (context: T, event: HltvChaseEvent) => void, context: T): EventListenerID;
interface HltvChaseEvent {
    target1: number;
    target2: number;
    distance: number;
    theta: number;
    phi: number;
    inertia: number;
    ineye: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hltv_message", callback: (event: HltvMessageEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "hltv_message", callback: (context: T, event: HltvMessageEvent) => void, context: T): EventListenerID;
interface HltvMessageEvent {
    text: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hltv_title", callback: (event: HltvTitleEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "hltv_title", callback: (context: T, event: HltvTitleEvent) => void, context: T): EventListenerID;
interface HltvTitleEvent {
    text: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hltv_chat", callback: (event: HltvChatEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "hltv_chat", callback: (context: T, event: HltvChatEvent) => void, context: T): EventListenerID;
interface HltvChatEvent {
    name: string;
    text: string;
    steamID: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hltv_versioninfo", callback: (event: HltvVersioninfoEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "hltv_versioninfo", callback: (context: T, event: HltvVersioninfoEvent) => void, context: T): EventListenerID;
interface HltvVersioninfoEvent {
    version: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_chase_hero", callback: (event: DotaChaseHeroEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_chase_hero", callback: (context: T, event: DotaChaseHeroEvent) => void, context: T): EventListenerID;
interface DotaChaseHeroEvent {
    target1: number;
    target2: number;
    type: number;
    priority: number;
    gametime: number;
    highlight: boolean;
    target1playerid: number;
    target2playerid: number;
    eventtype: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_combatlog", callback: (event: DotaCombatlogEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_combatlog", callback: (context: T, event: DotaCombatlogEvent) => void, context: T): EventListenerID;
interface DotaCombatlogEvent {
    type: number;
    sourcename: number;
    targetname: number;
    attackername: number;
    inflictorname: number;
    attackerillusion: boolean;
    targetillusion: boolean;
    value: number;
    health: number;
    timestamp: number;
    targetsourcename: number;
    timestampraw: number;
    attackerhero: boolean;
    targethero: boolean;
    ability_toggle_on: boolean;
    ability_toggle_off: boolean;
    ability_level: number;
    gold_reason: number;
    xp_reason: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_game_state_change", callback: (event: DotaGameStateChangeEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_game_state_change", callback: (context: T, event: DotaGameStateChangeEvent) => void, context: T): EventListenerID;
interface DotaGameStateChangeEvent {
    old_state: number;
    new_state: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_pick_hero", callback: (event: DotaPlayerPickHeroEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_pick_hero", callback: (context: T, event: DotaPlayerPickHeroEvent) => void, context: T): EventListenerID;
interface DotaPlayerPickHeroEvent {
    player: number;
    heroindex: number;
    hero: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "modifier_event", callback: (event: ModifierEventEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "modifier_event", callback: (context: T, event: ModifierEventEvent) => void, context: T): EventListenerID;
interface ModifierEventEvent {
    eventname: string;
    caster: number;
    ability: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_kill", callback: (event: DotaPlayerKillEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_kill", callback: (context: T, event: DotaPlayerKillEvent) => void, context: T): EventListenerID;
interface DotaPlayerKillEvent {
    victim_userid: number;
    killer1_userid: number;
    killer2_userid: number;
    killer3_userid: number;
    killer4_userid: number;
    killer5_userid: number;
    bounty: number;
    neutral: number;
    greevil: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_deny", callback: (event: DotaPlayerDenyEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_deny", callback: (context: T, event: DotaPlayerDenyEvent) => void, context: T): EventListenerID;
interface DotaPlayerDenyEvent {
    killer_userid: number;
    victim_userid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_barracks_kill", callback: (event: DotaBarracksKillEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_barracks_kill", callback: (context: T, event: DotaBarracksKillEvent) => void, context: T): EventListenerID;
interface DotaBarracksKillEvent {
    barracks_id: number;
    killer_playerid: number;
    killer_team: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_tower_kill", callback: (event: DotaTowerKillEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_tower_kill", callback: (context: T, event: DotaTowerKillEvent) => void, context: T): EventListenerID;
interface DotaTowerKillEvent {
    killer_userid: number;
    teamnumber: number;
    gold: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_effigy_kill", callback: (event: DotaEffigyKillEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_effigy_kill", callback: (context: T, event: DotaEffigyKillEvent) => void, context: T): EventListenerID;
interface DotaEffigyKillEvent {
    owner_userid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_roshan_kill", callback: (event: DotaRoshanKillEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_roshan_kill", callback: (context: T, event: DotaRoshanKillEvent) => void, context: T): EventListenerID;
interface DotaRoshanKillEvent {
    teamnumber: number;
    gold: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_courier_lost", callback: (event: DotaCourierLostEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_courier_lost", callback: (context: T, event: DotaCourierLostEvent) => void, context: T): EventListenerID;
interface DotaCourierLostEvent {
    teamnumber: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_courier_respawned", callback: (event: DotaCourierRespawnedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_courier_respawned", callback: (context: T, event: DotaCourierRespawnedEvent) => void, context: T): EventListenerID;
interface DotaCourierRespawnedEvent {
    teamnumber: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_glyph_used", callback: (event: DotaGlyphUsedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_glyph_used", callback: (context: T, event: DotaGlyphUsedEvent) => void, context: T): EventListenerID;
interface DotaGlyphUsedEvent {
    teamnumber: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_super_creeps", callback: (event: DotaSuperCreepsEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_super_creeps", callback: (context: T, event: DotaSuperCreepsEvent) => void, context: T): EventListenerID;
interface DotaSuperCreepsEvent {
    teamnumber: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_item_purchase", callback: (event: DotaItemPurchaseEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_item_purchase", callback: (context: T, event: DotaItemPurchaseEvent) => void, context: T): EventListenerID;
interface DotaItemPurchaseEvent {
    userid: number;
    item_ability_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_item_gifted", callback: (event: DotaItemGiftedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_item_gifted", callback: (context: T, event: DotaItemGiftedEvent) => void, context: T): EventListenerID;
interface DotaItemGiftedEvent {
    userid: number;
    item_ability_id: number;
    sourceid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_rune_pickup", callback: (event: DotaRunePickupEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_rune_pickup", callback: (context: T, event: DotaRunePickupEvent) => void, context: T): EventListenerID;
interface DotaRunePickupEvent {
    userid: number;
    type: number;
    rune: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_rune_spotted", callback: (event: DotaRuneSpottedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_rune_spotted", callback: (context: T, event: DotaRuneSpottedEvent) => void, context: T): EventListenerID;
interface DotaRuneSpottedEvent {
    userid: number;
    rune: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_item_spotted", callback: (event: DotaItemSpottedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_item_spotted", callback: (context: T, event: DotaItemSpottedEvent) => void, context: T): EventListenerID;
interface DotaItemSpottedEvent {
    userid: number;
    item_ability_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_no_battle_points", callback: (event: DotaNoBattlePointsEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_no_battle_points", callback: (context: T, event: DotaNoBattlePointsEvent) => void, context: T): EventListenerID;
interface DotaNoBattlePointsEvent {
    userid: number;
    reason: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_chat_informational", callback: (event: DotaChatInformationalEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_chat_informational", callback: (context: T, event: DotaChatInformationalEvent) => void, context: T): EventListenerID;
interface DotaChatInformationalEvent {
    userid: number;
    type: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_action_item", callback: (event: DotaActionItemEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_action_item", callback: (context: T, event: DotaActionItemEvent) => void, context: T): EventListenerID;
interface DotaActionItemEvent {
    reason: number;
    itemdef: number;
    message: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_chat_ban_notification", callback: (event: DotaChatBanNotificationEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_chat_ban_notification", callback: (context: T, event: DotaChatBanNotificationEvent) => void, context: T): EventListenerID;
interface DotaChatBanNotificationEvent {
    userid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_chat_event", callback: (event: DotaChatEventEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_chat_event", callback: (context: T, event: DotaChatEventEvent) => void, context: T): EventListenerID;
interface DotaChatEventEvent {
    userid: number;
    gold: number;
    message: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_chat_timed_reward", callback: (event: DotaChatTimedRewardEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_chat_timed_reward", callback: (context: T, event: DotaChatTimedRewardEvent) => void, context: T): EventListenerID;
interface DotaChatTimedRewardEvent {
    userid: number;
    itmedef: number;
    message: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_pause_event", callback: (event: DotaPauseEventEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_pause_event", callback: (context: T, event: DotaPauseEventEvent) => void, context: T): EventListenerID;
interface DotaPauseEventEvent {
    userid: number;
    value: number;
    message: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_chat_kill_streak", callback: (event: DotaChatKillStreakEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_chat_kill_streak", callback: (context: T, event: DotaChatKillStreakEvent) => void, context: T): EventListenerID;
interface DotaChatKillStreakEvent {
    gold: number;
    killer_id: number;
    killer_streak: number;
    killer_multikill: number;
    victim_id: number;
    victim_streak: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_chat_first_blood", callback: (event: DotaChatFirstBloodEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_chat_first_blood", callback: (context: T, event: DotaChatFirstBloodEvent) => void, context: T): EventListenerID;
interface DotaChatFirstBloodEvent {
    gold: number;
    killer_id: number;
    victim_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_chat_assassin_announce", callback: (event: DotaChatAssassinAnnounceEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_chat_assassin_announce", callback: (context: T, event: DotaChatAssassinAnnounceEvent) => void, context: T): EventListenerID;
interface DotaChatAssassinAnnounceEvent {
    assassin_id: number;
    target_id: number;
    message: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_chat_assassin_denied", callback: (event: DotaChatAssassinDeniedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_chat_assassin_denied", callback: (context: T, event: DotaChatAssassinDeniedEvent) => void, context: T): EventListenerID;
interface DotaChatAssassinDeniedEvent {
    assassin_id: number;
    target_id: number;
    message: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_chat_assassin_success", callback: (event: DotaChatAssassinSuccessEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_chat_assassin_success", callback: (context: T, event: DotaChatAssassinSuccessEvent) => void, context: T): EventListenerID;
interface DotaChatAssassinSuccessEvent {
    assassin_id: number;
    target_id: number;
    message: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_update_hero_selection", callback: (event: DotaPlayerUpdateHeroSelectionEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_update_hero_selection", callback: (context: T, event: DotaPlayerUpdateHeroSelectionEvent) => void, context: T): EventListenerID;
interface DotaPlayerUpdateHeroSelectionEvent {
    tabcycle: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_update_selected_unit", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_update_query_unit", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_update_killcam_unit", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_take_tower_damage", callback: (event: DotaPlayerTakeTowerDamageEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_take_tower_damage", callback: (context: T, event: DotaPlayerTakeTowerDamageEvent) => void, context: T): EventListenerID;
interface DotaPlayerTakeTowerDamageEvent {
    PlayerID: number;
    damage: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_hud_error_message", callback: (event: DotaHudErrorMessageEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_hud_error_message", callback: (context: T, event: DotaHudErrorMessageEvent) => void, context: T): EventListenerID;
interface DotaHudErrorMessageEvent {
    reason: number;
    message: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_action_success", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_starting_position_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_money_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_enemy_money_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_portrait_unit_stats_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_portrait_unit_modifiers_changed", callback: (event: DotaPortraitUnitModifiersChangedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_portrait_unit_modifiers_changed", callback: (context: T, event: DotaPortraitUnitModifiersChangedEvent) => void, context: T): EventListenerID;
interface DotaPortraitUnitModifiersChangedEvent {
    modifier_affects_abilities: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_force_portrait_update", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_inventory_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_item_suggestions_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_estimated_match_duration_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_hero_ability_points_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_item_picked_up", callback: (event: DotaItemPickedUpEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_item_picked_up", callback: (context: T, event: DotaItemPickedUpEvent) => void, context: T): EventListenerID;
interface DotaItemPickedUpEvent {
    itemname: string;
    PlayerID: number;
    ItemEntityIndex: number;
    HeroEntityIndex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_inventory_item_changed", callback: (event: DotaInventoryItemChangedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_inventory_item_changed", callback: (context: T, event: DotaInventoryItemChangedEvent) => void, context: T): EventListenerID;
interface DotaInventoryItemChangedEvent {
    entityIndex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_ability_changed", callback: (event: DotaAbilityChangedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_ability_changed", callback: (context: T, event: DotaAbilityChangedEvent) => void, context: T): EventListenerID;
interface DotaAbilityChangedEvent {
    entityIndex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_spectator_talent_changed", callback: (event: DotaSpectatorTalentChangedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_spectator_talent_changed", callback: (context: T, event: DotaSpectatorTalentChangedEvent) => void, context: T): EventListenerID;
interface DotaSpectatorTalentChangedEvent {
    abilityname: string;
    playerid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_portrait_ability_layout_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_inventory_item_added", callback: (event: DotaInventoryItemAddedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_inventory_item_added", callback: (context: T, event: DotaInventoryItemAddedEvent) => void, context: T): EventListenerID;
interface DotaInventoryItemAddedEvent {
    itemname: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_inventory_changed_query_unit", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_link_clicked", callback: (event: DotaLinkClickedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_link_clicked", callback: (context: T, event: DotaLinkClickedEvent) => void, context: T): EventListenerID;
interface DotaLinkClickedEvent {
    link: string;
    nav: boolean;
    nav_back: boolean;
    recipe: number;
    shop: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_set_quick_buy", callback: (event: DotaSetQuickBuyEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_set_quick_buy", callback: (context: T, event: DotaSetQuickBuyEvent) => void, context: T): EventListenerID;
interface DotaSetQuickBuyEvent {
    item: string;
    recipe: number;
    toggle: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_quick_buy_changed", callback: (event: DotaQuickBuyChangedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_quick_buy_changed", callback: (context: T, event: DotaQuickBuyChangedEvent) => void, context: T): EventListenerID;
interface DotaQuickBuyChangedEvent {
    item: string;
    recipe: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_shop_changed", callback: (event: DotaPlayerShopChangedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_shop_changed", callback: (context: T, event: DotaPlayerShopChangedEvent) => void, context: T): EventListenerID;
interface DotaPlayerShopChangedEvent {
    prevshopmask: number;
    shopmask: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_show_killcam", callback: (event: DotaPlayerShowKillcamEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_show_killcam", callback: (context: T, event: DotaPlayerShowKillcamEvent) => void, context: T): EventListenerID;
interface DotaPlayerShowKillcamEvent {
    nodes: number;
    player: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_show_minikillcam", callback: (event: DotaPlayerShowMinikillcamEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_show_minikillcam", callback: (context: T, event: DotaPlayerShowMinikillcamEvent) => void, context: T): EventListenerID;
interface DotaPlayerShowMinikillcamEvent {
    nodes: number;
    player: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "gc_user_session_created", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "team_data_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "guild_data_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "guild_open_parties_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "fantasy_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "fantasy_league_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "fantasy_score_info_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "league_admin_info_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "league_series_info_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_info_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_info_individual_updated", callback: (event: PlayerInfoIndividualUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_info_individual_updated", callback: (context: T, event: PlayerInfoIndividualUpdatedEvent) => void, context: T): EventListenerID;
interface PlayerInfoIndividualUpdatedEvent {
    account_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "game_rules_state_change", callback: () => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "game_rules_state_change", callback: (context: T) => void, context: T): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "match_history_updated", callback: (event: MatchHistoryUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "match_history_updated", callback: (context: T, event: MatchHistoryUpdatedEvent) => void, context: T): EventListenerID;
interface MatchHistoryUpdatedEvent {
    SteamID: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "match_details_updated", callback: (event: MatchDetailsUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "match_details_updated", callback: (context: T, event: MatchDetailsUpdatedEvent) => void, context: T): EventListenerID;
interface MatchDetailsUpdatedEvent {
    matchID: number;
    result: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "team_details_updated", callback: (event: TeamDetailsUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "team_details_updated", callback: (context: T, event: TeamDetailsUpdatedEvent) => void, context: T): EventListenerID;
interface TeamDetailsUpdatedEvent {
    teamID: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "live_games_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "recent_matches_updated", callback: (event: RecentMatchesUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "recent_matches_updated", callback: (context: T, event: RecentMatchesUpdatedEvent) => void, context: T): EventListenerID;
interface RecentMatchesUpdatedEvent {
    Page: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "news_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "persona_updated", callback: (event: PersonaUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "persona_updated", callback: (context: T, event: PersonaUpdatedEvent) => void, context: T): EventListenerID;
interface PersonaUpdatedEvent {
    SteamID: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "tournament_state_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "party_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "lobby_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dashboard_caches_cleared", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "last_hit", callback: (event: LastHitEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "last_hit", callback: (context: T, event: LastHitEvent) => void, context: T): EventListenerID;
interface LastHitEvent {
    PlayerID: number;
    EntKilled: number;
    FirstBlood: boolean;
    HeroKill: boolean;
    TowerKill: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_completed_game", callback: (event: PlayerCompletedGameEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_completed_game", callback: (context: T, event: PlayerCompletedGameEvent) => void, context: T): EventListenerID;
interface PlayerCompletedGameEvent {
    PlayerID: number;
    Winner: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_reconnected", callback: (event: PlayerReconnectedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_reconnected", callback: (context: T, event: PlayerReconnectedEvent) => void, context: T): EventListenerID;
interface PlayerReconnectedEvent {
    PlayerID: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "nommed_tree", callback: (event: NommedTreeEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "nommed_tree", callback: (context: T, event: NommedTreeEvent) => void, context: T): EventListenerID;
interface NommedTreeEvent {
    PlayerID: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_rune_activated_server", callback: (event: DotaRuneActivatedServerEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_rune_activated_server", callback: (context: T, event: DotaRuneActivatedServerEvent) => void, context: T): EventListenerID;
interface DotaRuneActivatedServerEvent {
    PlayerID: number;
    rune: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_gained_level", callback: (event: DotaPlayerGainedLevelEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_gained_level", callback: (context: T, event: DotaPlayerGainedLevelEvent) => void, context: T): EventListenerID;
interface DotaPlayerGainedLevelEvent {
    PlayerID: number;
    level: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_learned_ability", callback: (event: DotaPlayerLearnedAbilityEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_learned_ability", callback: (context: T, event: DotaPlayerLearnedAbilityEvent) => void, context: T): EventListenerID;
interface DotaPlayerLearnedAbilityEvent {
    PlayerID: number;
    player: number;
    abilityname: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_used_ability", callback: (event: DotaPlayerUsedAbilityEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_used_ability", callback: (context: T, event: DotaPlayerUsedAbilityEvent) => void, context: T): EventListenerID;
interface DotaPlayerUsedAbilityEvent {
    PlayerID: number;
    abilityname: string;
    caster_entindex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_non_player_used_ability", callback: (event: DotaNonPlayerUsedAbilityEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_non_player_used_ability", callback: (context: T, event: DotaNonPlayerUsedAbilityEvent) => void, context: T): EventListenerID;
interface DotaNonPlayerUsedAbilityEvent {
    abilityname: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_begin_cast", callback: (event: DotaPlayerBeginCastEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_begin_cast", callback: (context: T, event: DotaPlayerBeginCastEvent) => void, context: T): EventListenerID;
interface DotaPlayerBeginCastEvent {
    PlayerID: number;
    abilityname: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_non_player_begin_cast", callback: (event: DotaNonPlayerBeginCastEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_non_player_begin_cast", callback: (context: T, event: DotaNonPlayerBeginCastEvent) => void, context: T): EventListenerID;
interface DotaNonPlayerBeginCastEvent {
    abilityname: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_ability_channel_finished", callback: (event: DotaAbilityChannelFinishedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_ability_channel_finished", callback: (context: T, event: DotaAbilityChannelFinishedEvent) => void, context: T): EventListenerID;
interface DotaAbilityChannelFinishedEvent {
    abilityname: string;
    interrupted: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_holdout_revive_complete", callback: (event: DotaHoldoutReviveCompleteEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_holdout_revive_complete", callback: (context: T, event: DotaHoldoutReviveCompleteEvent) => void, context: T): EventListenerID;
interface DotaHoldoutReviveCompleteEvent {
    caster: number;
    target: number;
    channel_time: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_killed", callback: (event: DotaPlayerKilledEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_killed", callback: (context: T, event: DotaPlayerKilledEvent) => void, context: T): EventListenerID;
interface DotaPlayerKilledEvent {
    PlayerID: number;
    HeroKill: boolean;
    TowerKill: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "bindpanel_open", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "bindpanel_close", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "keybind_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_item_drag_begin", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_item_drag_end", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_shop_item_drag_begin", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_shop_item_drag_end", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_item_purchased", callback: (event: DotaItemPurchasedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_item_purchased", callback: (context: T, event: DotaItemPurchasedEvent) => void, context: T): EventListenerID;
interface DotaItemPurchasedEvent {
    PlayerID: number;
    itemname: string;
    itemcost: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_item_combined", callback: (event: DotaItemCombinedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_item_combined", callback: (context: T, event: DotaItemCombinedEvent) => void, context: T): EventListenerID;
interface DotaItemCombinedEvent {
    PlayerID: number;
    itemname: string;
    itemcost: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_item_used", callback: (event: DotaItemUsedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_item_used", callback: (context: T, event: DotaItemUsedEvent) => void, context: T): EventListenerID;
interface DotaItemUsedEvent {
    PlayerID: number;
    itemname: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_item_auto_purchase", callback: (event: DotaItemAutoPurchaseEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_item_auto_purchase", callback: (context: T, event: DotaItemAutoPurchaseEvent) => void, context: T): EventListenerID;
interface DotaItemAutoPurchaseEvent {
    item_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_unit_event", callback: (event: DotaUnitEventEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_unit_event", callback: (context: T, event: DotaUnitEventEvent) => void, context: T): EventListenerID;
interface DotaUnitEventEvent {
    victim: number;
    attacker: number;
    basepriority: number;
    priority: number;
    eventtype: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_quest_started", callback: (event: DotaQuestStartedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_quest_started", callback: (context: T, event: DotaQuestStartedEvent) => void, context: T): EventListenerID;
interface DotaQuestStartedEvent {
    questIndex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_quest_completed", callback: (event: DotaQuestCompletedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_quest_completed", callback: (context: T, event: DotaQuestCompletedEvent) => void, context: T): EventListenerID;
interface DotaQuestCompletedEvent {
    questIndex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "gameui_activated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "gameui_hidden", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_fullyjoined", callback: (event: PlayerFullyjoinedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_fullyjoined", callback: (context: T, event: PlayerFullyjoinedEvent) => void, context: T): EventListenerID;
interface PlayerFullyjoinedEvent {
    userid: number;
    name: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_spectate_hero", callback: (event: DotaSpectateHeroEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_spectate_hero", callback: (context: T, event: DotaSpectateHeroEvent) => void, context: T): EventListenerID;
interface DotaSpectateHeroEvent {
    entindex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_match_done", callback: (event: DotaMatchDoneEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_match_done", callback: (context: T, event: DotaMatchDoneEvent) => void, context: T): EventListenerID;
interface DotaMatchDoneEvent {
    winningteam: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_match_done_client", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "set_instructor_group_enabled", callback: (event: SetInstructorGroupEnabledEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "set_instructor_group_enabled", callback: (context: T, event: SetInstructorGroupEnabledEvent) => void, context: T): EventListenerID;
interface SetInstructorGroupEnabledEvent {
    group: string;
    enabled: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "joined_chat_channel", callback: (event: JoinedChatChannelEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "joined_chat_channel", callback: (context: T, event: JoinedChatChannelEvent) => void, context: T): EventListenerID;
interface JoinedChatChannelEvent {
    channelName: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "left_chat_channel", callback: (event: LeftChatChannelEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "left_chat_channel", callback: (context: T, event: LeftChatChannelEvent) => void, context: T): EventListenerID;
interface LeftChatChannelEvent {
    channelName: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "gc_chat_channel_list_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "today_messages_updated", callback: (event: TodayMessagesUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "today_messages_updated", callback: (context: T, event: TodayMessagesUpdatedEvent) => void, context: T): EventListenerID;
interface TodayMessagesUpdatedEvent {
    num_messages: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "file_downloaded", callback: (event: FileDownloadedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "file_downloaded", callback: (context: T, event: FileDownloadedEvent) => void, context: T): EventListenerID;
interface FileDownloadedEvent {
    success: boolean;
    local_filename: string;
    remote_url: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_report_counts_updated", callback: (event: PlayerReportCountsUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_report_counts_updated", callback: (context: T, event: PlayerReportCountsUpdatedEvent) => void, context: T): EventListenerID;
interface PlayerReportCountsUpdatedEvent {
    positive_remaining: number;
    negative_remaining: number;
    positive_total: number;
    negative_total: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "scaleform_file_download_complete", callback: (event: ScaleformFileDownloadCompleteEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "scaleform_file_download_complete", callback: (context: T, event: ScaleformFileDownloadCompleteEvent) => void, context: T): EventListenerID;
interface ScaleformFileDownloadCompleteEvent {
    success: boolean;
    local_filename: string;
    remote_url: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "item_purchased", callback: (event: ItemPurchasedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "item_purchased", callback: (context: T, event: ItemPurchasedEvent) => void, context: T): EventListenerID;
interface ItemPurchasedEvent {
    itemid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "gc_mismatched_version", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "demo_skip", callback: (event: DemoSkipEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "demo_skip", callback: (context: T, event: DemoSkipEvent) => void, context: T): EventListenerID;
interface DemoSkipEvent {
    playback_tick: number;
    skipto_tick: number;
    user_message_list: any;
    dota_hero_chase_list: any;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "demo_start", callback: (event: DemoStartEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "demo_start", callback: (context: T, event: DemoStartEvent) => void, context: T): EventListenerID;
interface DemoStartEvent {
    dota_combatlog_list: any;
    dota_hero_chase_list: any;
    dota_pick_hero_list: any;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "demo_stop", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "map_shutdown", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_workshop_fileselected", callback: (event: DotaWorkshopFileselectedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_workshop_fileselected", callback: (context: T, event: DotaWorkshopFileselectedEvent) => void, context: T): EventListenerID;
interface DotaWorkshopFileselectedEvent {
    filename: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_workshop_filecanceled", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "rich_presence_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "live_leagues_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_hero_random", callback: (event: DotaHeroRandomEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_hero_random", callback: (context: T, event: DotaHeroRandomEvent) => void, context: T): EventListenerID;
interface DotaHeroRandomEvent {
    userid: number;
    heroid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_river_painted", callback: (event: DotaRiverPaintedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_river_painted", callback: (context: T, event: DotaRiverPaintedEvent) => void, context: T): EventListenerID;
interface DotaRiverPaintedEvent {
    userid: number;
    riverid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_scan_used", callback: (event: DotaScanUsedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_scan_used", callback: (context: T, event: DotaScanUsedEvent) => void, context: T): EventListenerID;
interface DotaScanUsedEvent {
    teamnumber: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_rd_chat_turn", callback: (event: DotaRdChatTurnEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_rd_chat_turn", callback: (context: T, event: DotaRdChatTurnEvent) => void, context: T): EventListenerID;
interface DotaRdChatTurnEvent {
    userid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_ad_nominated_ban", callback: (event: DotaAdNominatedBanEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_ad_nominated_ban", callback: (context: T, event: DotaAdNominatedBanEvent) => void, context: T): EventListenerID;
interface DotaAdNominatedBanEvent {
    heroid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_ad_ban", callback: (event: DotaAdBanEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_ad_ban", callback: (context: T, event: DotaAdBanEvent) => void, context: T): EventListenerID;
interface DotaAdBanEvent {
    heroid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_ad_ban_count", callback: (event: DotaAdBanCountEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_ad_ban_count", callback: (context: T, event: DotaAdBanCountEvent) => void, context: T): EventListenerID;
interface DotaAdBanCountEvent {
    count: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_favorite_heroes_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "profile_opened", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "profile_closed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "item_preview_closed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dashboard_switched_section", callback: (event: DashboardSwitchedSectionEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dashboard_switched_section", callback: (context: T, event: DashboardSwitchedSectionEvent) => void, context: T): EventListenerID;
interface DashboardSwitchedSectionEvent {
    section: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_tournament_item_event", callback: (event: DotaTournamentItemEventEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_tournament_item_event", callback: (context: T, event: DotaTournamentItemEventEvent) => void, context: T): EventListenerID;
interface DotaTournamentItemEventEvent {
    winner_count: number;
    event_type: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_hero_swap", callback: (event: DotaHeroSwapEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_hero_swap", callback: (context: T, event: DotaHeroSwapEvent) => void, context: T): EventListenerID;
interface DotaHeroSwapEvent {
    playerid1: number;
    playerid2: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_reset_suggested_items", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "halloween_high_score_received", callback: (event: HalloweenHighScoreReceivedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "halloween_high_score_received", callback: (context: T, event: HalloweenHighScoreReceivedEvent) => void, context: T): EventListenerID;
interface HalloweenHighScoreReceivedEvent {
    round: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "halloween_phase_end", callback: (event: HalloweenPhaseEndEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "halloween_phase_end", callback: (context: T, event: HalloweenPhaseEndEvent) => void, context: T): EventListenerID;
interface HalloweenPhaseEndEvent {
    phase: number;
    team: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "halloween_high_score_request_failed", callback: (event: HalloweenHighScoreRequestFailedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "halloween_high_score_request_failed", callback: (context: T, event: HalloweenHighScoreRequestFailedEvent) => void, context: T): EventListenerID;
interface HalloweenHighScoreRequestFailedEvent {
    round: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_hud_skin_changed", callback: (event: DotaHudSkinChangedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_hud_skin_changed", callback: (context: T, event: DotaHudSkinChangedEvent) => void, context: T): EventListenerID;
interface DotaHudSkinChangedEvent {
    skin: string;
    style: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_inventory_player_got_item", callback: (event: DotaInventoryPlayerGotItemEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_inventory_player_got_item", callback: (context: T, event: DotaInventoryPlayerGotItemEvent) => void, context: T): EventListenerID;
interface DotaInventoryPlayerGotItemEvent {
    itemname: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_is_experienced", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_is_notexperienced", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_tutorial_lesson_start", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_tutorial_task_advance", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_tutorial_shop_toggled", callback: (event: DotaTutorialShopToggledEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_tutorial_shop_toggled", callback: (context: T, event: DotaTutorialShopToggledEvent) => void, context: T): EventListenerID;
interface DotaTutorialShopToggledEvent {
    shop_opened: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "map_location_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "richpresence_custom_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "game_end_visible", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "enable_china_logomark", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "highlight_hud_element", callback: (event: HighlightHudElementEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "highlight_hud_element", callback: (context: T, event: HighlightHudElementEvent) => void, context: T): EventListenerID;
interface HighlightHudElementEvent {
    elementname: string;
    duration: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hide_highlight_hud_element", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "intro_video_finished", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "matchmaking_status_visibility_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "practice_lobby_visibility_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_courier_transfer_item", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "full_ui_unlocked", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "client_disconnect", callback: (event: ClientDisconnectEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "client_disconnect", callback: (context: T, event: ClientDisconnectEvent) => void, context: T): EventListenerID;
interface ClientDisconnectEvent {
    reason_code: number;
    reason_desc: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hero_selector_preview_set", callback: (event: HeroSelectorPreviewSetEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "hero_selector_preview_set", callback: (context: T, event: HeroSelectorPreviewSetEvent) => void, context: T): EventListenerID;
interface HeroSelectorPreviewSetEvent {
    setindex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "antiaddiction_toast", callback: (event: AntiaddictionToastEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "antiaddiction_toast", callback: (context: T, event: AntiaddictionToastEvent) => void, context: T): EventListenerID;
interface AntiaddictionToastEvent {
    message: string;
    duration: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hero_picker_shown", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hero_picker_hidden", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_local_quickbuy_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "show_center_message", callback: (event: ShowCenterMessageEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "show_center_message", callback: (context: T, event: ShowCenterMessageEvent) => void, context: T): EventListenerID;
interface ShowCenterMessageEvent {
    message: string;
    duration: number;
    clear_message_queue: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "hud_flip_changed", callback: (event: HudFlipChangedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "hud_flip_changed", callback: (context: T, event: HudFlipChangedEvent) => void, context: T): EventListenerID;
interface HudFlipChangedEvent {
    flipped: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "frosty_points_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "defeated", callback: (event: DefeatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "defeated", callback: (context: T, event: DefeatedEvent) => void, context: T): EventListenerID;
interface DefeatedEvent {
    entindex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "reset_defeated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "booster_state_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "event_points_updated", callback: (event: EventPointsUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "event_points_updated", callback: (context: T, event: EventPointsUpdatedEvent) => void, context: T): EventListenerID;
interface EventPointsUpdatedEvent {
    event_id: number;
    points: number;
    premium_points: number;
    owned: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "local_player_event_points", callback: (event: LocalPlayerEventPointsEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "local_player_event_points", callback: (context: T, event: LocalPlayerEventPointsEvent) => void, context: T): EventListenerID;
interface LocalPlayerEventPointsEvent {
    points: number;
    conversion_rate: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "custom_game_difficulty", callback: (event: CustomGameDifficultyEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "custom_game_difficulty", callback: (context: T, event: CustomGameDifficultyEvent) => void, context: T): EventListenerID;
interface CustomGameDifficultyEvent {
    difficulty: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "tree_cut", callback: (event: TreeCutEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "tree_cut", callback: (context: T, event: TreeCutEvent) => void, context: T): EventListenerID;
interface TreeCutEvent {
    tree_x: number;
    tree_y: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "ugc_details_arrived", callback: (event: UgcDetailsArrivedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "ugc_details_arrived", callback: (context: T, event: UgcDetailsArrivedEvent) => void, context: T): EventListenerID;
interface UgcDetailsArrivedEvent {
    published_file_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "ugc_subscribed", callback: (event: UgcSubscribedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "ugc_subscribed", callback: (context: T, event: UgcSubscribedEvent) => void, context: T): EventListenerID;
interface UgcSubscribedEvent {
    published_file_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "ugc_unsubscribed", callback: (event: UgcUnsubscribedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "ugc_unsubscribed", callback: (context: T, event: UgcUnsubscribedEvent) => void, context: T): EventListenerID;
interface UgcUnsubscribedEvent {
    published_file_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "ugc_download_requested", callback: (event: UgcDownloadRequestedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "ugc_download_requested", callback: (context: T, event: UgcDownloadRequestedEvent) => void, context: T): EventListenerID;
interface UgcDownloadRequestedEvent {
    published_file_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "ugc_installed", callback: (event: UgcInstalledEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "ugc_installed", callback: (context: T, event: UgcInstalledEvent) => void, context: T): EventListenerID;
interface UgcInstalledEvent {
    published_file_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "prizepool_received", callback: (event: PrizepoolReceivedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "prizepool_received", callback: (context: T, event: PrizepoolReceivedEvent) => void, context: T): EventListenerID;
interface PrizepoolReceivedEvent {
    success: boolean;
    prizepool: number;
    leagueid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "microtransaction_success", callback: (event: MicrotransactionSuccessEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "microtransaction_success", callback: (context: T, event: MicrotransactionSuccessEvent) => void, context: T): EventListenerID;
interface MicrotransactionSuccessEvent {
    txnid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_rubick_ability_steal", callback: (event: DotaRubickAbilityStealEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_rubick_ability_steal", callback: (context: T, event: DotaRubickAbilityStealEvent) => void, context: T): EventListenerID;
interface DotaRubickAbilityStealEvent {
    abilityIndex: number;
    abilityLevel: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "compendium_event_actions_loaded", callback: (event: CompendiumEventActionsLoadedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "compendium_event_actions_loaded", callback: (context: T, event: CompendiumEventActionsLoadedEvent) => void, context: T): EventListenerID;
interface CompendiumEventActionsLoadedEvent {
    account_id: number;
    league_id: number;
    local_test: boolean;
    original_points: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "compendium_selections_loaded", callback: (event: CompendiumSelectionsLoadedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "compendium_selections_loaded", callback: (context: T, event: CompendiumSelectionsLoadedEvent) => void, context: T): EventListenerID;
interface CompendiumSelectionsLoadedEvent {
    account_id: number;
    league_id: number;
    local_test: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "compendium_set_selection_failed", callback: (event: CompendiumSetSelectionFailedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "compendium_set_selection_failed", callback: (context: T, event: CompendiumSetSelectionFailedEvent) => void, context: T): EventListenerID;
interface CompendiumSetSelectionFailedEvent {
    account_id: number;
    league_id: number;
    local_test: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "compendium_trophies_loaded", callback: (event: CompendiumTrophiesLoadedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "compendium_trophies_loaded", callback: (context: T, event: CompendiumTrophiesLoadedEvent) => void, context: T): EventListenerID;
interface CompendiumTrophiesLoadedEvent {
    account_id: number;
    league_id: number;
    local_test: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "community_cached_names_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "spec_item_pickup", callback: (event: SpecItemPickupEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "spec_item_pickup", callback: (context: T, event: SpecItemPickupEvent) => void, context: T): EventListenerID;
interface SpecItemPickupEvent {
    player_id: number;
    item_name: string;
    purchase: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "spec_aegis_reclaim_time", callback: (event: SpecAegisReclaimTimeEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "spec_aegis_reclaim_time", callback: (context: T, event: SpecAegisReclaimTimeEvent) => void, context: T): EventListenerID;
interface SpecAegisReclaimTimeEvent {
    reclaim_time: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "account_trophies_changed", callback: (event: AccountTrophiesChangedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "account_trophies_changed", callback: (context: T, event: AccountTrophiesChangedEvent) => void, context: T): EventListenerID;
interface AccountTrophiesChangedEvent {
    account_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "account_all_hero_challenge_changed", callback: (event: AccountAllHeroChallengeChangedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "account_all_hero_challenge_changed", callback: (context: T, event: AccountAllHeroChallengeChangedEvent) => void, context: T): EventListenerID;
interface AccountAllHeroChallengeChangedEvent {
    account_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "team_showcase_ui_update", callback: (event: TeamShowcaseUiUpdateEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "team_showcase_ui_update", callback: (context: T, event: TeamShowcaseUiUpdateEvent) => void, context: T): EventListenerID;
interface TeamShowcaseUiUpdateEvent {
    show: boolean;
    account_id: number;
    hero_entindex: number;
    display_ui_on_left: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_match_signout", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_illusions_created", callback: (event: DotaIllusionsCreatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_illusions_created", callback: (context: T, event: DotaIllusionsCreatedEvent) => void, context: T): EventListenerID;
interface DotaIllusionsCreatedEvent {
    original_entindex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_year_beast_killed", callback: (event: DotaYearBeastKilledEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_year_beast_killed", callback: (context: T, event: DotaYearBeastKilledEvent) => void, context: T): EventListenerID;
interface DotaYearBeastKilledEvent {
    killer_player_id: number;
    message: number;
    beast_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_spawned", callback: (event: DotaPlayerSpawnedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_spawned", callback: (context: T, event: DotaPlayerSpawnedEvent) => void, context: T): EventListenerID;
interface DotaPlayerSpawnedEvent {
    PlayerID: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_hero_undoselection", callback: (event: DotaHeroUndoselectionEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_hero_undoselection", callback: (context: T, event: DotaHeroUndoselectionEvent) => void, context: T): EventListenerID;
interface DotaHeroUndoselectionEvent {
    playerid1: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_challenge_socache_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_team_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "party_invites_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "lobby_invites_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "custom_game_mode_list_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "custom_game_lobby_list_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "friend_lobby_list_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_team_player_list_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_details_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_profile_stats_updated", callback: (event: PlayerProfileStatsUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_profile_stats_updated", callback: (context: T, event: PlayerProfileStatsUpdatedEvent) => void, context: T): EventListenerID;
interface PlayerProfileStatsUpdatedEvent {
    account_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "custom_game_player_count_updated", callback: (event: CustomGamePlayerCountUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "custom_game_player_count_updated", callback: (context: T, event: CustomGamePlayerCountUpdatedEvent) => void, context: T): EventListenerID;
interface CustomGamePlayerCountUpdatedEvent {
    custom_game_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "custom_game_friends_played_updated", callback: (event: CustomGameFriendsPlayedUpdatedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "custom_game_friends_played_updated", callback: (context: T, event: CustomGameFriendsPlayedUpdatedEvent) => void, context: T): EventListenerID;
interface CustomGameFriendsPlayedUpdatedEvent {
    custom_game_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "custom_games_friends_play_updated", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_update_assigned_hero", callback: (event: DotaPlayerUpdateAssignedHeroEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_update_assigned_hero", callback: (context: T, event: DotaPlayerUpdateAssignedHeroEvent) => void, context: T): EventListenerID;
interface DotaPlayerUpdateAssignedHeroEvent {
    playerid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_hero_selection_dirty", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_npc_goal_reached", callback: (event: DotaNpcGoalReachedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_npc_goal_reached", callback: (context: T, event: DotaNpcGoalReachedEvent) => void, context: T): EventListenerID;
interface DotaNpcGoalReachedEvent {
    npc_entindex: number;
    goal_entindex: number;
    next_goal_entindex: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_selected_custom_team", callback: (event: DotaPlayerSelectedCustomTeamEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_selected_custom_team", callback: (context: T, event: DotaPlayerSelectedCustomTeamEvent) => void, context: T): EventListenerID;
interface DotaPlayerSelectedCustomTeamEvent {
    player_id: number;
    team_id: number;
    success: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_coin_wager", callback: (event: DotaCoinWagerEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_coin_wager", callback: (context: T, event: DotaCoinWagerEvent) => void, context: T): EventListenerID;
interface DotaCoinWagerEvent {
    userid: number;
    message: number;
    coins: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_wager_token", callback: (event: DotaWagerTokenEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_wager_token", callback: (context: T, event: DotaWagerTokenEvent) => void, context: T): EventListenerID;
interface DotaWagerTokenEvent {
    userid: number;
    message: number;
    amount: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_rank_wager", callback: (event: DotaRankWagerEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_rank_wager", callback: (context: T, event: DotaRankWagerEvent) => void, context: T): EventListenerID;
interface DotaRankWagerEvent {
    userid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "colorblind_mode_changed", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_report_submitted", callback: (event: DotaReportSubmittedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_report_submitted", callback: (context: T, event: DotaReportSubmittedEvent) => void, context: T): EventListenerID;
interface DotaReportSubmittedEvent {
    result: number;
    report_flags: number;
    message: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "client_reload_game_keyvalues", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_hero_inventory_item_change", callback: (event: DotaHeroInventoryItemChangeEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_hero_inventory_item_change", callback: (context: T, event: DotaHeroInventoryItemChangeEvent) => void, context: T): EventListenerID;
interface DotaHeroInventoryItemChangeEvent {
    player_id: number;
    hero_entindex: number;
    item_entindex: number;
    removed: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "game_rules_shutdown", callback: (event: {
        }) => void, context: table): EventListenerID;
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "aegis_event", callback: (event: AegisEventEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "aegis_event", callback: (context: T, event: AegisEventEvent) => void, context: T): EventListenerID;
interface AegisEventEvent {
    player_id: number;
    chat_message_type: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_buyback", callback: (event: DotaBuybackEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_buyback", callback: (context: T, event: DotaBuybackEvent) => void, context: T): EventListenerID;
interface DotaBuybackEvent {
    entindex: number;
    player_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "bought_back", callback: (event: BoughtBackEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "bought_back", callback: (context: T, event: BoughtBackEvent) => void, context: T): EventListenerID;
interface BoughtBackEvent {
    player_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_shrine_kill", callback: (event: DotaShrineKillEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_shrine_kill", callback: (context: T, event: DotaShrineKillEvent) => void, context: T): EventListenerID;
interface DotaShrineKillEvent {
    killer_userid: number;
    teamnumber: number;
    gold: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "particle_system_start", callback: (event: ParticleSystemStartEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "particle_system_start", callback: (context: T, event: ParticleSystemStartEvent) => void, context: T): EventListenerID;
interface ParticleSystemStartEvent {
    targetname: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "particle_system_stop", callback: (event: ParticleSystemStopEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "particle_system_stop", callback: (context: T, event: ParticleSystemStopEvent) => void, context: T): EventListenerID;
interface ParticleSystemStopEvent {
    targetname: string;
    immediate: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_combat_event_message", callback: (event: DotaCombatEventMessageEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_combat_event_message", callback: (context: T, event: DotaCombatEventMessageEvent) => void, context: T): EventListenerID;
interface DotaCombatEventMessageEvent {
    message: string;
    teamnumber: number;
    player_id: number;
    int_value: number;
    locstring_value: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_item_spawned", callback: (event: DotaItemSpawnedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_item_spawned", callback: (context: T, event: DotaItemSpawnedEvent) => void, context: T): EventListenerID;
interface DotaItemSpawnedEvent {
    item_ent_index: number;
    player_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_player_reconnected", callback: (event: DotaPlayerReconnectedEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_player_reconnected", callback: (context: T, event: DotaPlayerReconnectedEvent) => void, context: T): EventListenerID;
interface DotaPlayerReconnectedEvent {
    player_id: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "dota_team_kill_credit", callback: (event: DotaTeamKillCreditEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "dota_team_kill_credit", callback: (context: T, event: DotaTeamKillCreditEvent) => void, context: T): EventListenerID;
interface DotaTeamKillCreditEvent {
    killer_userid: number;
    victim_userid: number;
    teamnumber: number;
    herokills: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "server_spawn", callback: (event: ServerSpawnEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "server_spawn", callback: (context: T, event: ServerSpawnEvent) => void, context: T): EventListenerID;
interface ServerSpawnEvent {
    hostname: string;
    address: string;
    port: number;
    game: string;
    mapname: string;
    addonname: string;
    maxplayers: number;
    os: string;
    dedicated: boolean;
    password: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "server_pre_shutdown", callback: (event: ServerPreShutdownEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "server_pre_shutdown", callback: (context: T, event: ServerPreShutdownEvent) => void, context: T): EventListenerID;
interface ServerPreShutdownEvent {
    reason: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "server_shutdown", callback: (event: ServerShutdownEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "server_shutdown", callback: (context: T, event: ServerShutdownEvent) => void, context: T): EventListenerID;
interface ServerShutdownEvent {
    reason: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "server_cvar", callback: (event: ServerCvarEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "server_cvar", callback: (context: T, event: ServerCvarEvent) => void, context: T): EventListenerID;
interface ServerCvarEvent {
    cvarname: string;
    cvarvalue: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "server_message", callback: (event: ServerMessageEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "server_message", callback: (context: T, event: ServerMessageEvent) => void, context: T): EventListenerID;
interface ServerMessageEvent {
    text: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "server_addban", callback: (event: ServerAddbanEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "server_addban", callback: (context: T, event: ServerAddbanEvent) => void, context: T): EventListenerID;
interface ServerAddbanEvent {
    name: string;
    userid: number;
    networkid: string;
    ip: string;
    duration: string;
    by: string;
    kicked: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "server_removeban", callback: (event: ServerRemovebanEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "server_removeban", callback: (context: T, event: ServerRemovebanEvent) => void, context: T): EventListenerID;
interface ServerRemovebanEvent {
    networkid: string;
    ip: string;
    by: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_connect", callback: (event: PlayerConnectEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_connect", callback: (context: T, event: PlayerConnectEvent) => void, context: T): EventListenerID;
interface PlayerConnectEvent {
    name: string;
    index: number;
    userid: number;
    networkid: string;
    address: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_info", callback: (event: PlayerInfoEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_info", callback: (context: T, event: PlayerInfoEvent) => void, context: T): EventListenerID;
interface PlayerInfoEvent {
    name: string;
    index: number;
    userid: number;
    networkid: string;
    bot: boolean;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_disconnect", callback: (event: PlayerDisconnectEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_disconnect", callback: (context: T, event: PlayerDisconnectEvent) => void, context: T): EventListenerID;
interface PlayerDisconnectEvent {
    userid: number;
    reason: number;
    name: string;
    networkid: string;
    PlayerID: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_activate", callback: (event: PlayerActivateEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_activate", callback: (context: T, event: PlayerActivateEvent) => void, context: T): EventListenerID;
interface PlayerActivateEvent {
    userid: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_connect_full", callback: (event: PlayerConnectFullEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_connect_full", callback: (context: T, event: PlayerConnectFullEvent) => void, context: T): EventListenerID;
interface PlayerConnectFullEvent {
    userid: number;
    index: number;
    PlayerID: number;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_say", callback: (event: PlayerSayEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_say", callback: (context: T, event: PlayerSayEvent) => void, context: T): EventListenerID;
interface PlayerSayEvent {
    userid: number;
    text: string;
}
/**
 * Register as a listener for a game event from script.
 */
declare function ListenToGameEvent(eventName: "player_full_update", callback: (event: PlayerFullUpdateEvent) => void, context: null): EventListenerID;
declare function ListenToGameEvent<T>(eventName: "player_full_update", callback: (context: T, event: PlayerFullUpdateEvent) => void, context: T): EventListenerID;
interface PlayerFullUpdateEvent {
    userid: number;
    count: number;
}
