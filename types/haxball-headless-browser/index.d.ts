// Type definitions for non-npm package haxball-headless-browser 0.2
// Project: https://github.com/haxball/haxball-issues/wiki/Headless-Host
// Definitions by: Jakub Juszko <https://github.com/jakjus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function HBInit(roomConfig: RoomConfigObject): RoomObject;

interface RoomConfigObject {
    roomName?: string;
    playerName?: string;
    password?: string;
    maxPlayers?: number;
    public?: boolean;
    geo?: {"code": string, "lat": number, "lon": number};
    token?: string;
    noPlayer?: boolean;
}

declare class RoomObject {
    sendChat(msg: string, targetId: number): void;
    setPlayerAdmin(playerId: number, admin: boolean): void;
    setPlayerTeam(playerId: number, team: number): void;
    kickPlayer(playerId: number, reason: string, ban: boolean): void;
    clearBan(playerId: number): void;
    clearBans(): void;
    setScoreLimit(limit: number): void;
    setTimeLimit(limitInMinutes: number): void;
    setCustomStadium(stadiumFileContents: string): void;
    setDefaultStadium(stadiumName: string): void;
    setTeamsLock(locked: boolean): void;
    setTeamColors(team: TeamID, angle: number, textColor: number, colors: ReadonlyArray<number>): void;
    startGame(): void;
    stopGame(): void;
    pauseGame(pauseState: boolean): void;
    getPlayer(playerId: number): PlayerObject;
    getPlayerList(): PlayerObject[];
    getScores(): ScoresObject;
    getBallPosition(): {"x": number, "y": number};
    startRecording(): void;
    stopRecording(): Uint8Array;
    setPassword(pass: string): void;
    setRequireCaptcha(required: boolean): void;
    reorderPlayers(playerIdList: ReadonlyArray<number>, moveToTop: boolean): void;
    sendAnnouncement(msg: string, targetId?: number, color?: number, style?: string, sound?: number): void;
    setKickRateLimit(min: number, rate: number, burst: number): void;
    setPlayerAvatar(playerId: number, avatar: string): void;
    setDiscProperties(discIndex: number, properties: Partial<DiscPropertiesObject>): void;
    getDiscProperties(discIndex: number): DiscPropertiesObject;
    setPlayerDiscProperties(playerId: number, properties: Partial<DiscPropertiesObject>): void;
    getPlayerDiscProperties(playerId: number): DiscPropertiesObject;
    getDiscCount(): number;
    CollisionFlags: CollisionFlagsObject;
    onPlayerJoin(player: PlayerObject): void;
    onPlayerLeave(player: PlayerObject): void;
    onTeamVictory(scores: ScoresObject): void;
    onPlayerChat(player: PlayerObject, msg: string): boolean;
    onPlayerBallKick(player: PlayerObject): void;
    onTeamGoal(team: TeamID): void;
    onGameStart(byPlayer: PlayerObject): void;
    onGameStop(byPlayer: PlayerObject): void;
    onPlayerAdminChange(changedPlayer: PlayerObject, byPlayer: PlayerObject): void;
    onPlayerTeamChange(changedPlayer: PlayerObject, byPlayer: PlayerObject): void;
    onPlayerKicked(kickedPlayer: PlayerObject, reason: string, ban: boolean, byPlayer: PlayerObject): void;
    onGameTick(): void;
    onGamePause(byPlayer: PlayerObject): void;
    onGameUnpause(byPlayer: PlayerObject): void;
    onPositionsReset(): void;
    onPlayerActivity(player: PlayerObject): void;
    onStadiumChange(newStadiumName: string, byPlayer: PlayerObject): void;
    onRoomLink(url: string): void;
    onKickRateLimitSet(min: number, rate: number, burst: number, byPlayer: PlayerObject): void;
}

declare class PlayerObject {
    id: number;
    name: string;
    team: TeamID;
    admin: boolean;
    position: {"x": number, "y": number};
    auth: string;
    conn: string;
}

declare class ScoresObject {
    red: number;
    blue: number;
    time: number;
    scoreLimit: number;
    timeLimit: number;
}

type TeamID = 0 | 1 | 2;

declare class DiscPropertiesObject {
    x: number;
    y: number;
    xspeed: number;
    yspeed: number;
    xgravity: number;
    ygravity: number;
    radius: number;
    bCoeff: number;
    invMass: number;
    damping: number;
    color: number;
    cMask: number;
    cGroup: number;
}

interface CollisionFlagsObject {
    "ball": number;
    "red": number;
    "blue": number;
    "redKO": number;
    "blueKO": number;
    "wall": number;
    "all": number;
    "kick": number;
    "score": number;
    "c0": number;
    "c1": number;
    "c2": number;
    "c3": number;
}
