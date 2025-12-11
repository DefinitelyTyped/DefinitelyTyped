/**
 * Initializes a Haxball headless room with the specified configuration.
 * @param roomConfig - Configuration object for the room. All properties are optional.
 * @returns The room object used to control the room.
 * @example
 * ```js
 * var room = HBInit({
 *   roomName: "My room",
 *   maxPlayers: 16,
 *   noPlayer: true // Remove host player (recommended!)
 * });
 * room.setDefaultStadium("Big");
 * room.setScoreLimit(5);
 * room.setTimeLimit(0);
 * ```
 */
declare function HBInit(roomConfig: RoomConfigObject): RoomObject;

/**
 * Configuration object for initializing a Haxball room.
 * All properties are optional.
 */
interface RoomConfigObject {
    /** The name for the room. */
    roomName?: string;
    /** The name for the host player. */
    playerName?: string;
    /** The password for the room (no password if omitted). */
    password?: string;
    /** Max number of players the room accepts. */
    maxPlayers?: number;
    /** If true the room will appear in the room list. */
    public?: boolean;
    /** GeoLocation override for the room. */
    geo?: { "code": string; "lat": number; "lon": number };
    /** Token that can be obtained from https://www.haxball.com/headlesstoken to skip recaptcha. These tokens expire after a few minutes. */
    token?: string;
    /** 
     * If set to true the room player list will be empty, the playerName setting will be ignored.
     * Default value is false but it's recommended to set this to true.
     * @warning Events will have null as the byPlayer argument when the event is caused by the host.
     */
    noPlayer?: boolean;
}

/**
 * Main interface for controlling the room and listening to its events.
 * @note All API functions that modify the game's state execute asynchronously.
 */
interface RoomObject {
    /**
     * Sends a chat message using the host player.
     * @param msg - The message to send.
     * @param targetId - If null/undefined, message is sent to all players. Otherwise, sent only to player with matching id.
     */
    sendChat(msg: string, targetId?: number): void;

    /**
     * Changes the admin status of the specified player.
     * @param playerId - The ID of the player.
     * @param admin - Whether to grant or revoke admin status.
     */
    setPlayerAdmin(playerId: number, admin: boolean): void;

    /**
     * Moves the specified player to a team.
     * @param playerId - The ID of the player.
     * @param team - The team ID (0 = Spectators, 1 = Red, 2 = Blue).
     */
    setPlayerTeam(playerId: number, team: number): void;

    /**
     * Kicks the specified player from the room.
     * @param playerId - The ID of the player to kick.
     * @param reason - The reason for the kick.
     * @param ban - Whether to ban the player.
     */
    kickPlayer(playerId: number, reason: string, ban: boolean): void;

    /**
     * Clears the ban for a playerId that belonged to a player that was previously banned.
     * @param playerId - The ID of the player to unban.
     */
    clearBan(playerId: number): void;

    /**
     * Clears the list of banned players.
     */
    clearBans(): void;

    /**
     * Sets the score limit of the room.
     * @param limit - The score limit.
     * @note If a game is in progress this method does nothing.
     */
    setScoreLimit(limit: number): void;

    /**
     * Sets the time limit of the room in minutes.
     * @param limitInMinutes - The time limit in minutes.
     * @note If a game is in progress this method does nothing.
     */
    setTimeLimit(limitInMinutes: number): void;

    /**
     * Parses the stadiumFileContents as a .hbs stadium file and sets it as the selected stadium.
     * @param stadiumFileContents - The contents of the .hbs stadium file as a string.
     * @note There must not be a game in progress. If a game is in progress this method does nothing.
     */
    setCustomStadium(stadiumFileContents: string): void;

    /**
     * Sets the selected stadium to one of the default stadiums.
     * @param stadiumName - The name of the stadium (must match exactly, case sensitive).
     * @note There must not be a game in progress. If a game is in progress this method does nothing.
     */
    setDefaultStadium(stadiumName: string): void;

    /**
     * Sets the teams lock. When teams are locked players cannot change team unless moved by an admin.
     * @param locked - Whether teams should be locked.
     */
    setTeamsLock(locked: boolean): void;

    /**
     * Sets the colors of a team.
     * @param team - The team ID (1 = Red, 2 = Blue).
     * @param angle - The angle of the color gradient.
     * @param textColor - The text color as an integer (e.g., 0xFF0000 for red).
     * @param colors - Array of color integers.
     */
    setTeamColors(team: TeamID, angle: number, textColor: number, colors: readonly number[]): void;

    /**
     * Starts the game.
     * @note If a game is already in progress this method does nothing.
     */
    startGame(): void;

    /**
     * Stops the game.
     * @note If no game is in progress this method does nothing.
     */
    stopGame(): void;

    /**
     * Sets the pause state of the game.
     * @param pauseState - true = paused, false = unpaused.
     */
    pauseGame(pauseState: boolean): void;

    /**
     * Returns the player with the specified id.
     * @param playerId - The ID of the player.
     * @returns The player object or null if the player doesn't exist.
     */
    getPlayer(playerId: number): PlayerObject | null;

    /**
     * Returns the current list of players.
     */
    getPlayerList(): PlayerObject[];

    /**
     * Returns the current score information if a game is in progress.
     * @returns The scores object or null if no game is in progress.
     */
    getScores(): ScoresObject | null;

    /**
     * Returns the ball's position in the field.
     * @returns The ball's position or null if no game is in progress.
     */
    getBallPosition(): { "x": number; "y": number } | null;

    /**
     * Starts recording of a haxball replay.
     * @warning Don't forget to call stopRecording or it will cause a memory leak.
     */
    startRecording(): void;

    /**
     * Stops the recording previously started with startRecording and returns the replay file contents.
     * @returns The replay file contents as a Uint8Array, or null if recording was not started or had already been stopped.
     */
    stopRecording(): Uint8Array | null;

    /**
     * Changes the password of the room.
     * @param pass - The new password, or null to clear the password.
     */
    setPassword(pass: string | null): void;

    /**
     * Activates or deactivates the recaptcha requirement to join the room.
     * @param required - Whether recaptcha is required.
     */
    setRequireRecaptcha(required: boolean): void;

    /**
     * Reorders players in the player list.
     * First all listed players are removed, then reinserted in the order they appear in playerIdList.
     * @param playerIdList - Array of player IDs to reorder.
     * @param moveToTop - If true, players are inserted at the top of the list, otherwise at the bottom.
     */
    reorderPlayers(playerIdList: readonly number[], moveToTop: boolean): void;

    /**
     * Sends a host announcement.
     * Unlike sendChat, announcements work without a host player and have a larger character limit.
     * @param msg - The message contents.
     * @param targetId - If null/undefined, sent to all players. Otherwise, sent only to player with matching id.
     * @param color - Color encoded as integer (0xFF0000 = red, 0x00FF00 = green, 0x0000FF = blue).
     * @param style - Text style: "normal", "bold", "italic", "small", "small-bold", "small-italic". Default: "normal".
     * @param sound - 0 = no sound, 1 = normal chat sound, 2 = notification sound.
     */
    sendAnnouncement(msg: string, targetId?: number | null, color?: number, style?: string, sound?: number): void;

    /**
     * Sets the room's kick rate limits.
     * @param min - Minimum number of logic-frames between two kicks. It is impossible to kick faster than this. Default: 2.
     * @param rate - Works like min but lets players save up extra kicks to use later depending on burst. Default: 0.
     * @param burst - How many extra kicks the player can save up. Default: 0.
     */
    setKickRateLimit(min: number, rate: number, burst: number): void;

    /**
     * Overrides the avatar of the target player.
     * @param playerId - The ID of the player.
     * @param avatar - The avatar string, or null to clear the override and let the player use their own avatar.
     */
    setPlayerAvatar(playerId: number, avatar: string | null): void;

    /**
     * Sets properties of the target disc.
     * Properties that are null or undefined will not be set and will preserve the disc's current value.
     * @param discIndex - The index of the disc.
     * @param properties - Partial disc properties to set.
     * @example
     * ```js
     * // Set position of disc 0 to <0,0> while leaving other values intact
     * room.setDiscProperties(0, {x: 0, y: 0});
     * ```
     */
    setDiscProperties(discIndex: number, properties: Partial<DiscPropertiesObject>): void;

    /**
     * Gets the properties of the disc at discIndex.
     * @param discIndex - The index of the disc.
     * @returns The disc properties or null if discIndex is out of bounds.
     */
    getDiscProperties(discIndex: number): DiscPropertiesObject | null;

    /**
     * Same as setDiscProperties but targets the disc belonging to a player with the given Id.
     * @param playerId - The ID of the player.
     * @param properties - Partial disc properties to set.
     */
    setPlayerDiscProperties(playerId: number, properties: Partial<DiscPropertiesObject>): void;

    /**
     * Same as getDiscProperties but targets the disc belonging to a player with the given Id.
     * @param playerId - The ID of the player.
     * @returns The player's disc properties.
     */
    getPlayerDiscProperties(playerId: number): DiscPropertiesObject;

    /**
     * Gets the number of discs in the game including the ball and player discs.
     */
    getDiscCount(): number;

    /**
     * Object filled with collision flags constants that compose the cMask and cGroup disc properties.
     * @see https://github.com/haxball/haxball-issues/wiki/Collision-Flags
     * @example
     * ```js
     * // Check if disc 4 belongs to collision group "ball":
     * var discProps = room.getDiscProperties(4);
     * var hasBallFlag = (discProps.cGroup & room.CollisionFlags.ball) != 0;
     * 
     * // Add "wall" to the collision mask of disc 5:
     * var discProps = room.getDiscProperties(5);
     * room.setDiscProperties(5, {cMask: discProps.cMask | room.CollisionFlags.wall});
     * ```
     */
    CollisionFlags: CollisionFlagsObject;

    /**
     * Event called when a new player joins the room.
     * @param player - The player who joined.
     */
    onPlayerJoin(player: PlayerObject): void;

    /**
     * Event called when a player leaves the room.
     * @param player - The player who left.
     */
    onPlayerLeave(player: PlayerObject): void;

    /**
     * Event called when a team wins.
     * @param scores - The final scores.
     */
    onTeamVictory(scores: ScoresObject): void;

    /**
     * Event called when a player sends a chat message.
     * @param player - The player who sent the message.
     * @param msg - The message text.
     * @returns Return false to filter the message and prevent it from reaching other players.
     */
    onPlayerChat(player: PlayerObject, msg: string): boolean;

    /**
     * Event called when a player kicks the ball.
     * @param player - The player who kicked the ball.
     */
    onPlayerBallKick(player: PlayerObject): void;

    /**
     * Event called when a team scores a goal.
     * @param team - The team that scored (1 = Red, 2 = Blue).
     */
    onTeamGoal(team: TeamID): void;

    /**
     * Event called when a game starts.
     * @param byPlayer - The player who caused the event (can be null if not caused by a player).
     */
    onGameStart(byPlayer: PlayerObject | null): void;

    /**
     * Event called when a game stops.
     * @param byPlayer - The player who caused the event (can be null if not caused by a player).
     */
    onGameStop(byPlayer: PlayerObject | null): void;

    /**
     * Event called when a player's admin rights are changed.
     * @param changedPlayer - The player whose admin rights changed.
     * @param byPlayer - The player who caused the event (can be null if not caused by a player).
     */
    onPlayerAdminChange(changedPlayer: PlayerObject, byPlayer: PlayerObject | null): void;

    /**
     * Event called when a player's team is changed.
     * @param changedPlayer - The player who changed teams.
     * @param byPlayer - The player who caused the event (can be null if not caused by a player).
     */
    onPlayerTeamChange(changedPlayer: PlayerObject, byPlayer: PlayerObject | null): void;

    /**
     * Event called when a player has been kicked from the room.
     * This is always called after the onPlayerLeave event.
     * @param kickedPlayer - The player who was kicked.
     * @param reason - The reason for the kick.
     * @param ban - Whether the player was banned.
     * @param byPlayer - The player who caused the event (can be null if not caused by a player).
     */
    onPlayerKicked(kickedPlayer: PlayerObject, reason: string, ban: boolean, byPlayer: PlayerObject | null): void;

    /**
     * Event called once for every game tick (60 times per second).
     * Useful for monitoring player and ball positions without missing any ticks.
     * @note This event is not called if the game is paused or stopped.
     */
    onGameTick(): void;

    /**
     * Event called when the game is paused.
     * @param byPlayer - The player who paused the game.
     */
    onGamePause(byPlayer: PlayerObject): void;

    /**
     * Event called when the game is unpaused.
     * After this event there's a timer before the game is fully unpaused.
     * Listen for the first onGameTick event after this to detect when the game has really resumed.
     * @param byPlayer - The player who unpaused the game.
     */
    onGameUnpause(byPlayer: PlayerObject): void;

    /**
     * Event called when the players and ball positions are reset after a goal.
     */
    onPositionsReset(): void;

    /**
     * Event called when a player gives signs of activity (e.g., pressing a key).
     * Useful for detecting inactive players.
     * @param player - The player who showed activity.
     */
    onPlayerActivity(player: PlayerObject): void;

    /**
     * Event called when the stadium is changed.
     * @param newStadiumName - The name of the new stadium.
     * @param byPlayer - The player who changed the stadium.
     */
    onStadiumChange(newStadiumName: string, byPlayer: PlayerObject): void;

    /**
     * Event called when the room link is obtained.
     * @param url - The room URL.
     */
    onRoomLink(url: string): void;

    /**
     * Event called when the kick rate limit is set.
     * @param min - The minimum frames between kicks.
     * @param rate - The rate parameter.
     * @param burst - The burst parameter.
     * @param byPlayer - The player who changed the setting.
     */
    onKickRateLimitSet(min: number, rate: number, burst: number, byPlayer: PlayerObject): void;
}

/**
 * Holds information about a player.
 */
interface PlayerObject {
    /** The unique id of the player. Each player gets a unique id that will never change. */
    id: number;
    /** The name of the player. */
    name: string;
    /** The team of the player (0 = Spectators, 1 = Red, 2 = Blue). */
    team: TeamID;
    /** Whether the player has admin rights. */
    admin: boolean;
    /** The player's position in the field, or null if the player is not in the field. */
    position: { "x": number; "y": number } | null;
    /**
     * The player's public ID. Players can view their own ID at https://www.haxball.com/playerauth
     * Useful for validating a player is who they claim to be, but not for verifying they aren't someone else.
     * Good for user accounts, not suitable for banning systems.
     * Can be null if ID validation fails. Only set in the onPlayerJoin event.
     */
    auth: string | null;
    /**
     * A string that uniquely identifies the player's connection.
     * If two players join using the same network, this string will be equal.
     * Only set in the onPlayerJoin event.
     */
    conn: string;
}

/**
 * Holds information relevant to the current game scores.
 */
interface ScoresObject {
    /** The number of goals scored by the red team. */
    red: number;
    /** The number of goals scored by the blue team. */
    blue: number;
    /** The number of seconds elapsed (doesn't advance while the game is paused). */
    time: number;
    /** The score limit for the game. */
    scoreLimit: number;
    /** The time limit for the game. */
    timeLimit: number;
}

/**
 * Team identifiers.
 * - 0 = Spectators
 * - 1 = Red Team
 * - 2 = Blue Team
 */
type TeamID = 0 | 1 | 2;

/**
 * Holds information about a game physics disc.
 */
interface DiscPropertiesObject {
    /** The x coordinate of the disc's position. */
    x: number;
    /** The y coordinate of the disc's position. */
    y: number;
    /** The x coordinate of the disc's speed vector. */
    xspeed: number;
    /** The y coordinate of the disc's speed vector. */
    yspeed: number;
    /** The x coordinate of the disc's gravity vector. */
    xgravity: number;
    /** The y coordinate of the disc's gravity vector. */
    ygravity: number;
    /** The disc's radius. */
    radius: number;
    /** The disc's bouncing coefficient. */
    bCoeff: number;
    /** The inverse of the disc's mass. */
    invMass: number;
    /** The disc's damping factor. */
    damping: number;
    /** The disc's color as an integer (0xFF0000 = red, 0x00FF00 = green, 0x0000FF = blue, -1 = transparent). */
    color: number;
    /** The disc's collision mask (represents what groups the disc can collide with). */
    cMask: number;
    /** The disc's collision groups. */
    cGroup: number;
}

/**
 * Contains flag constants used as helpers for reading and writing collision flags.
 * Collision flags determine which objects collide and which objects ignore each other.
 * 
 * Object A and B will collide if and only if:
 * (A.cGroup & B.cMask != 0) && (B.cGroup & A.cMask != 0)
 * 
 * @see https://github.com/haxball/haxball-issues/wiki/Collision-Flags
 */
interface CollisionFlagsObject {
    /** Default collision group of the ball. */
    "ball": number;
    /** Automatically added to players of the red team. */
    "red": number;
    /** Automatically added to players of the blue team. */
    "blue": number;
    /** Kickoff barriers active during kickoff for the red team. */
    "redKO": number;
    /** Kickoff barriers active during kickoff for the blue team. */
    "blueKO": number;
    /** Default collision group for vertexes, segments, and planes. */
    "wall": number;
    /** Represents a set including ball, red, blue, redKO, blueKO, and wall. */
    "all": number;
    /** Objects with this flag in their cGroup become kickable by players. */
    "kick": number;
    /** Objects with this flag in their cGroup will score goals if they cross a goal line. */
    "score": number;
    /** Custom collision flag with no special meaning, can be used for any purpose. */
    "c0": number;
    /** Custom collision flag with no special meaning, can be used for any purpose. */
    "c1": number;
    /** Custom collision flag with no special meaning, can be used for any purpose. */
    "c2": number;
    /** Custom collision flag with no special meaning, can be used for any purpose. */
    "c3": number;
}

/**
 * Root object of a stadium file (.hbs).
 * A HaxBall stadium file is a text file with JSON5 format containing a single StadiumObject.
 */
interface StadiumObject {
    /** The name of the stadium. */
    name?: string;
    /** Width of the rectangle centered at <0,0> in which the camera will be contained. */
    width?: number;
    /** Height of the rectangle centered at <0,0> in which the camera will be contained. */
    height?: number;
    /** 
     * Maximum allowed viewable width for the level.
     * If the player screen is wide enough to see more than maxViewWidth, the game will zoom in.
     * Setting to 0 disables this feature. Default: 0
     */
    maxViewWidth?: number;
    /** 
     * Changes camera following behavior.
     * "player" = follow player only, ignore ball
     * "ball" = follow average position between player and ball, prioritize player if too far apart
     * Default: "ball"
     */
    cameraFollow?: string;
    /** 
     * Distance from <0,0> at which teams spawn during kickoff.
     * Ignored if redSpawnPoints or blueSpawnPoints are not empty.
     */
    spawnDistance?: number;
    /** Whether this stadium can be stored with the /store command. Default: true */
    canBeStored?: boolean;
    /** 
     * "partial" = only ball and player discs reset for kickoff
     * "full" = all discs reset for kickoff
     * Default: "partial"
     */
    kickOffReset?: string;
    /** Object describing the background for the stadium. */
    bg: BackgroundObject;
    /** 
     * Map of named traits. TraitValues define default values for any object that references that trait.
     * Useful for avoiding repetition when manually writing stadium files.
     */
    traits?: Record<string, object>;
    /** List of vertexes (collision points). */
    vertexes?: Vertex[];
    /** List of segments (lines connecting vertexes). */
    segments?: Segment[];
    /** List of goals. */
    goals?: Goal[];
    /** List of discs (circular physical objects). */
    discs?: Disc[];
    /** List of planes (infinite collision lines). */
    planes?: Plane[];
    /** List of joints (physical connections between discs). */
    joints?: Joint[];
    /** 
     * List of spawn points for red team kickoff.
     * If empty, default spawn behavior is used.
     * When a player joins a started game, they're positioned at the last point.
     * Default: []
     */
    redSpawnPoints?: number[][];
    /** 
     * List of spawn points for blue team kickoff.
     * If empty, default spawn behavior is used.
     * Default: []
     */
    blueSpawnPoints?: number[][];
    /** Object describing player physics. If omitted, default player physics will be used. */
    playerPhysics?: PlayerPhysics;
    /** 
     * Disc used to create the ball. Collision flags "kick" and "score" are automatically added.
     * Setting to "disc0" uses the first disc as the ball (cGroup left unmodified).
     * If omitted, default ball physics will be used.
     */
    ballPhysics?: Disc | "disc0";
}

/**
 * Describes the background for the stadium.
 */
interface BackgroundObject {
    /** Type of background: "grass", "hockey", or "none". Default: "none" */
    type?: "grass" | "hockey" | "none";
    /** Width of the background rectangle. Default: 0 */
    width?: number;
    /** Height of the background rectangle. Default: 0 */
    height?: number;
    /** Radius of the kickoff circle. Default: 0 */
    kickOffRadius?: number;
    /** Radius of the corners (creates rounded corners if > 0). Default: 0 */
    cornerRadius?: number;
    /** Horizontal distance to goals from <0,0>, used by "hockey" background only. Default: 0 */
    goalLine?: number;
    /** Background color for the stadium. Default: "718C5A" */
    color?: string | number[];
}

/**
 * A vertex is a point which can collide with discs but cannot move and is not visible.
 */
interface Vertex {
    /** The x position for the vertex. */
    x?: number;
    /** The y position for the vertex. */
    y?: number;
    /** The bouncing coefficient. */
    bCoef?: number;
    /** List of flags representing this object's collision mask. */
    cMask?: string[];
    /** List of flags representing this object's collision group. */
    cGroup?: string[];
    /** A trait to use as default values for this object. See StadiumObject traits property for more info. */
    trait?: string;
}

/**
 * A segment is a line (curved or straight) that connects two vertexes.
 * Discs can collide with segments and they can also be used as decoration.
 */
interface Segment {
    /** Index of a vertex in the stadium vertex list to be used as first point of the segment. */
    v0?: number;
    /** Index of a vertex in the stadium vertex list to be used as the second point of the segment. */
    v1?: number;
    /** The bouncing coefficient. */
    bCoef?: number;
    /** The angle in degrees with which the segment will curve forming an arc. 0 = straight line. Default: 0 */
    curve?: number;
    /** Alternative representation of curve. If present, curve value is ignored. */
    curveF?: number;
    /**
     * Determines segment thickness and makes it one-way if != 0.
     * 0 = collide normally on both sides
     * Other values = one-way collision with specified thickness
     * Useful for boundaries that prevent fast moving balls from passing through. Default: 0
     */
    bias?: number;
    /** List of flags representing this object's collision mask. */
    cMask?: string[];
    /** List of flags representing this object's collision group. */
    cGroup?: string[];
    /** If false, the segment will be invisible. Default: true */
    vis?: boolean;
    /** The color with which the segment will be drawn. Default: "000000" (black) */
    color?: string | number[];
    /** A trait to use as default values for this object. See StadiumObject traits property for more info. */
    trait?: string;
}

/**
 * Goals are lines belonging to a team. When the ball crosses this line, the opposite team scores.
 */
interface Goal {
    /** The coordinates of the first point of the line in array form [x, y]. */
    p0?: number[];
    /** The coordinates of the second point of the line in array form [x, y]. */
    p1?: number[];
    /** The team the goal belongs to: "red" or "blue". */
    team?: "red" | "blue";
    /** A trait to use as default values for this object. See StadiumObject traits property for more info. */
    trait?: string;
}

/**
 * Planes are collision objects that divide the map in two by an infinite line.
 * Useful for creating the boundaries of the stadium.
 */
interface Plane {
    /** The direction vector of the plane in array form [x, y]. */
    normal?: number[];
    /** The distance from coordinates [0,0] (in direction of the normal) where the plane is located. */
    dist?: number;
    /** The bouncing coefficient. */
    bCoef?: number;
    /** List of flags representing this object's collision mask. */
    cMask?: string[];
    /** List of flags representing this object's collision group. */
    cGroup?: string[];
    /** A trait to use as default values for this object. See StadiumObject traits property for more info. */
    trait?: string;
}

/**
 * Discs are circular physical objects placed in the stadium. They can move and collide with other discs.
 */
interface Disc {
    /** The starting position of the object in array form [x, y]. */
    pos?: number[];
    /** The starting speed of the object in array form [x, y]. */
    speed?: number[];
    /** The gravity vector of the object in array form [x, y]. */
    gravity?: number[];
    /** The radius of the disc. */
    radius?: number;
    /** The inverse of the disc's mass. */
    invMass?: number;
    /** The damping factor of the disc. */
    damping?: number;
    /** The disc fill color. Supports "transparent". Default: "FFFFFF" */
    color?: string | number[];
    /** The bouncing coefficient. */
    bCoef?: number;
    /** List of flags representing this object's collision mask. */
    cMask?: string[];
    /** List of flags representing this object's collision group. */
    cGroup?: string[];
    /** A trait to use as default values for this object. See StadiumObject traits property for more info. */
    trait?: string;
}

/**
 * Describes physical constants affecting the players.
 */
interface PlayerPhysics {
    /** The gravity vector affecting players. */
    gravity?: number[];
    /** The radius of the player disc. */
    radius?: number;
    /** The inverse of the player's mass. */
    invMass?: number;
    /** The bouncing coefficient. */
    bCoef?: number;
    /** The damping factor. */
    damping?: number;
    /** The collision groups the player belongs to. */
    cGroup?: string[];
    /** How fast a player accelerates when moving with keys. */
    acceleration?: number;
    /** Replaces acceleration when the player is holding the kick button. */
    kickingAcceleration?: number;
    /** Replaces damping when the player is holding the kick button. */
    kickingDamping?: number;
    /** How much force the player applies to the ball when kicking. */
    kickStrength?: number;
    /** Like kickStrength but applied to the kicking player instead. */
    kickback?: number;
}

/**
 * Joints are physical connections between two discs.
 */
interface Joint {
    /** 
     * Index of one of the two discs connected by the joint.
     * Note: Index 0 is used by the ball disc if StadiumObject.ballPhysics is not set to "disc0".
     */
    d0?: number;
    /** 
     * Index of one of the two discs connected by the joint.
     * Note: Index 0 is used by the ball disc if StadiumObject.ballPhysics is not set to "disc0".
     */
    d1?: number;
    /**
     * The length of the joint.
     * - null = automatically computed to match the distance between the two discs
     * - float = use that value as length
     * - [min, max] = joint has min and max length, applies no forces if distance is in range
     * Default: null
     */
    length?: number | [number, number] | null;
    /**
     * The strength of the joint.
     * - "rigid" = joint acts like a solid
     * - float = joint acts like a spring
     * Default: "rigid"
     */
    strength?: number | "rigid";
    /** The color of the joint. Supports "transparent". Default: "000000" (black) */
    color?: string | number[];
    /** A trait to use as default values for this object. See StadiumObject traits property for more info. */
    trait?: string;
}
