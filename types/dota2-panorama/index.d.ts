// Type definitions for Dota2_Panorama 1.0
// Project: https://github.com/ModDota/API
// Definitions by: ModDota <https://github.com/ModDota>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference path="dota_enums.d.ts" />
/// <reference path="dota_panels.d.ts" />

/*
    Typescript definition file of the DotA 2 Panorama API.

    This file contains information on the API and how it should be used. This file can be used
    just as reference, or when writing Typescript to compile into Panorama JS.

    To use this file with typescript for Panorama, install typescript and put this file at the project root.

    Any javascript compiled from this typescript should be Panorama-compatible and run in Panorama.
    Issues or bugs in the definitions can be reported by making an issue on GitHub:
    https://github.com/ModDota/API.
*/

type abilityID = number;
type buffID = number;
type entityID = number;
type itemID = number;
type particleID = number;
type scheduleID = number;

interface CDOTA_PanoramaScript_GameEvents {
    /**
     * Subscribe to a game event
     */
    Subscribe(pEventName: string, funcVal: (data: object) => void): number;

    /**
     * Unsubscribe from a game event
     */
    Unsubscribe(nCallbackHandle: number): void;

    /**
     * Send a custom game event
     */
    SendCustomGameEventToServer(pEventName: string, eventData: object): void;

    /**
     * Send a custom game event to the server, which will send it to all clients
     */
    SendCustomGameEventToAllClients(pEventName: string, eventData: object): void;

    /**
     * Send a custom game event to the server, which will send it to all clients
     */
    SendCustomGameEventToClient(pEventName: string, playerIndex: number, eventData: object): void;

    /**
     * Send a client-side event using gameeventmanager (only useful for a few specific events)
     */
    SendEventClientSide(pEventName: string, eventData: object): void;
}

// Define string dictionary for CustomUIConfig to return
interface StringDictionary {
    [key: string]: any;
}

declare const enum MouseButton {
    LEFT = 0,
    RIGHT = 1,
    MIDDLE = 2
}

type MouseButtonEvent =
    "pressed" | "doublepressed";

interface CDOTA_PanoramaScript_GameUI {
    /**
     * Control whether the default UI is enabled
     */
    SetDefaultUIEnabled(nElementType: number, bVisible: boolean): void;

    /**
     * Get the current UI configuration
     */
    CustomUIConfig(): StringDictionary;

    /**
     * Create a minimap ping at the given location
     */
    PingMinimapAtLocation(vec3: [number, number, number]): void;

    /**
     * Install a mouse input filter
     */
    SetMouseCallback(callbackFn: (event: MouseButtonEvent, button: MouseButton) => void): void;

    /**
     *
     */
    EnableAliMode(bEnable: boolean, nPort: number, offsetVal: number, flScale: number): void;

    /**
     * Get the current mouse position.
     */
    GetCursorPosition(): [number, number];

    /**
     * Return the entity index of the entity under the given screen position.
     */
    FindScreenEntities(screenPos: [number, number]): entityID[];

    /**
     * Get the world position of the screen position, or null if the cursor is out of the world.
     */
    GetScreenWorldPosition(screenPos: [number, number]): [number, number, number];

    /**
     * Install a mouse input filter
     */
    WasMousePressed(nButtonNum: MouseButton): boolean;

    /**
     * Install a mouse input filter
     */
    WasMouseDoublePressed(nButtonNum: MouseButton): boolean;

    /**
     * Install a mouse input filter
     */
    IsMouseDown(nButtonNum: MouseButton): boolean;

    /**
     * Is the shift button pressed?
     */
    IsShiftDown(): boolean;

    /**
     * Is the alt button pressed?
     */
    IsAltDown(): boolean;

    /**
     * Is the control button pressed?
     */
    IsControlDown(): boolean;

    /**
     * Get the current UI click interaction mode.
     */
    GetClickBehaviors(): CLICK_BEHAVIORS;

    /**
     * Select a unit, adding it to the group or replacing the current selection.
     */
    SelectUnit(nEntityIndex: number, bAddToGroup: boolean): void;

    /**
     * Set the minimum camera pitch angle.
     */
    SetCameraPitchMin(flPitchMin: number): void;

    /**
     * Set the maximum camera pitch angle.
     */
    SetCameraPitchMax(flPitchMax: number): void;

    /**
     * Set the camera's yaw.
     */
    SetCameraYaw(flCameraYaw: number): void;

    /**
     * Offset the camera's look at point.
     */
    SetCameraLookAtPositionHeightOffset(flCameraLookAtHeightOffset: number): void;

    /**
     * Set the camera distance from the look at point.
     */
    SetCameraDistance(flDistance: number): void;

    /**
     * Set the gap between the bottom of the screen and the game rendering viewport. (Value expressed as pixels in a normalized 1024x768 viewport.)
     */
    SetRenderBottomInsetOverride(nInset: number): void;

    /**
     * Set the gap between the top of the screen and the game rendering viewport. (Value expressed as pixels in a normalized 1024x768 viewport.)
     */
    SetRenderTopInsetOverride(nInset: number): void;

    /**
     * Set the camera target for the local player, or -1 to clear.
     */
    SetCameraTarget(nTargetEntIndex: number): void;

    /**
     * Set the camera target as position for the local player over specified lerp.
     */
    SetCameraTargetPosition(vec3: [number, number, number], flLerp: number): void;
}

interface TableValue {
    key: string;
    value: any;
}

interface CDOTA_PanoramaScript_CustomNetTables {
    /**
     * Get a key from a custom net table
     */
    GetTableValue(pTableName: string, pKeyName: string): any;

    /**
     * Get all values from a custom net table
     */
    GetAllTableValues(pTableName: string): TableValue[];

    /**
     * Register a callback when a particular custom net table changes
     */
    SubscribeNetTableListener(tableName: string, callback: (table_name: string, key: string, value: any) => void): void;

    /**
     * Unsubscribe from a game event
     */
    UnsubscribeNetTableListener(nCallbackHandle: number): void;
}

interface CScriptBindingPR_Particles {
    /**
     * Create a particle from a file with an attachment and an owning entity.
     */
    CreateParticle(particleName: string, particleAttach: ParticleAttachment_t, owningEntity: entityID): particleID;

    /**
     * Release the index of a particle, will make the particle in-accessible from script. This allows another particle
     * to reuse the freed particle index.
     */
    ReleaseParticleIndex(particle: particleID): void;

    /**
     * Destroy a particle. Setting the immediate boolean to true will prevent the endcap from playing.
     */
    DestroyParticleEffect(particle: particleID, immediate: boolean): void;

    /**
     * Set a particle's control point to a vector value.
     */
    SetParticleControl(particle: particleID, controlPoint: number, value: [number, number, number]): void;

    /**
     * Set a particle's forward control point to a vector value.
     */
    SetParticleControlForward(particle: particleID, controlPoint: number, value: [number, number, number]): void;

    /**
     * Unknown use, any info welcome.
     */
    SetParticleAlwaysSimulate(particle: particleID): void;

    /**
     * Set a particle's control point to an entity's attachment. Most common example is:
     * Particles.SetPerticleControlEnt(particle, controlPoint, entity, ParticleAttachment_t.PATTACH_POINT_FOLLOW, "attach_hitloc", [0,0,0], true);
     */
    SetParticleControlEnt(particle: particleID, controlPoint: number, entity: entityID, particleAttach: ParticleAttachment_t, attachmentName: string, offset: [number, number, number],
                          unknown: boolean): void;
}

interface CScriptBindingPR_Buffs {
    /**
     * Returns the name of the modifier.
     */
    GetName(nEntityIndex: entityID, nBuffIndex: buffID): string;

    /**
     * Returns the classname of the modifier.
     */
    GetClass(nEntityIndex: entityID, nBuffIndex: buffID): string;

    /**
     * Returns the modifier icon texture.
     */
    GetTexture(nEntityIndex: entityID, nBuffIndex: buffID): string;

    /**
     * Returns the total duration of the modifier.
     */
    GetDuration(nEntityIndex: entityID, nBuffIndex: buffID): number;

    /**
     * Returns the time at which the modifier will expire.
     */
    GetDieTime(nEntityIndex: entityID, nBuffIndex: buffID): number;

    /**
     * Returns the time until the modifier expires.
     */
    GetRemainingTime(nEntityIndex: entityID, nBuffIndex: buffID): number;

    /**
     * Returns the time elapsed since the creation of the modifier.
     */
    GetElapsedTime(nEntityIndex: entityID, nBuffIndex: buffID): number;

    /**
     * Returns the time at which the modifier was created.
     */
    GetCreationTime(nEntityIndex: entityID, nBuffIndex: buffID): number;

    /**
     * Returns the keybind (as a string) for the specified ability.
     */
    GetStackCount(nEntityIndex: entityID, nBuffIndex: buffID): number;

    /**
     * Returns true if the modifier is a debuff (red icon), false otherwise.
     */
    IsDebuff(nEntityIndex: entityID, nBuffIndex: buffID): boolean;

    /**
     * Returns the keybind (as a string) for the specified ability.
     */
    IsHidden(nEntityIndex: entityID, nBuffIndex: buffID): boolean;

    /**
     * Returns the entity that created the modifier (possibly on another entity).
     */
    GetCaster(nEntityIndex: entityID, nBuffIndex: buffID): entityID;

    /**
     * Returns the entity to which the modifier is applied.
     */
    GetParent(nEntityIndex: entityID, nBuffIndex: buffID): entityID;

    /**
     * Returns the ability associated with the modifier.
     */
    GetAbility(nEntityIndex: entityID, nBuffIndex: buffID): abilityID;
}

interface CScriptBindingPR_Players {
    /**
     * Get the maximum number of players in the game.
     */
    GetMaxPlayers(): number;

    /**
     * Get the maximum number of players on teams.
     */
    GetMaxTeamPlayers(): number;

    /**
     * Get the local player ID.
     */
    GetLocalPlayer(): number;

    /**
     * Is the nth player a valid player?
     */
    IsValidPlayerID(iPlayerID: number): boolean;

    /**
     * Return the name of a player.
     */
    GetPlayerName(iPlayerID: number): string;

    /**
     * Get the entity index of the hero controlled by this player.
     */
    GetPlayerHeroEntityIndex(iPlayerID: number): number;

    /**
     * Get the entities this player has selected.
     */
    GetSelectedEntities(iPlayerID: number): number[];

    /**
     * Get the entities this player is querying.
     */
    GetQueryUnit(iPlayerID: number): entityID;

    /**
     * Get local player current portrait unit. (ie. Player's hero or primary selected unit.)
     */
    GetLocalPlayerPortraitUnit(): entityID;

    /**
     * Can the player buy back?
     */
    CanPlayerBuyback(iPlayerID: number): boolean;

    /**
     * Does this player have a custom game ticket?
     */
    HasCustomGameTicketForPlayerID(iPlayerID: number): boolean;

    /**
     * The number of assists credited to a player.
     */
    GetAssists(iPlayerID: number): number;

    /**
     *
     */
    GetClaimedDenies(iPlayerID: number): number;

    /**
     *
     */
    GetClaimedMisses(iPlayerID: number): number;

    /**
     * The number of deaths a player has suffered.
     */
    GetDeaths(iPlayerID: number): number;

    /**
     * The number of denies credited to a player.
     */
    GetDenies(iPlayerID: number): number;

    /**
     * The amount of gold a player has.
     */
    GetGold(iPlayerID: number): number;

    /**
     * The number of kills credited to a player.
     */
    GetKills(iPlayerID: number): number;

    /**
     *
     */
    GetLastBuybackTime(iPlayerID: number): number;

    /**
     *
     */
    GetLastHitMultikill(iPlayerID: number): number;

    /**
     * The number of last hits credited to a player.
     */
    GetLastHits(iPlayerID: number): number;

    /**
     *
     */
    GetLastHitStreak(iPlayerID: number): number;

    /**
     * The current level of a player.
     */
    GetLevel(iPlayerID: number): number;

    /**
     *
     */
    GetMisses(iPlayerID: number): number;

    /**
     *
     */
    GetNearbyCreepDeaths(iPlayerID: number): number;

    /**
     * Total reliable gold for this player.
     */
    GetReliableGold(iPlayerID: number): number;

    /**
     *
     */
    GetRespawnSeconds(iPlayerID: number): number;

    /**
     *
     */
    GetStreak(iPlayerID: number): number;

    /**
     * Total gold earned in this game by this player.
     */
    GetTotalEarnedGold(iPlayerID: number): number;

    /**
     * Total xp earned in this game by this player.
     */
    GetTotalEarnedXP(iPlayerID: number): number;

    /**
     * Total unreliable gold for this player.
     */
    GetUnreliableGold(iPlayerID: number): number;

    /**
     * Get the team this player is on.
     */
    GetTeam(iPlayerID: number): DOTATeam_t;

    /**
     * Average gold earned per minute for this player.
     */
    GetGoldPerMin(iPlayerID: number): number;

    /**
     * Average xp earned per minute for this player.
     */
    GetXPPerMin(iPlayerID: number): number;

    /**
     * Return the name of the hero a player is controlling.
     */
    GetPlayerSelectedHero(iPlayerID: number): string;

    /**
     * Get the player color.
     */
    GetPlayerColor(iPlayerID: number): number;

    /**
     * Is this player a spectator.
     */
    IsSpectator(iPlayerID: number): boolean;

    /**
     * .
     */
    PlayerPortraitClicked(nClickedPlayerID: number, bHoldingCtrl: boolean, bHoldingAlt: boolean): void;

    /**
     * .
     */
    BuffClicked(nEntity: entityID, nBuffSerial: number, bAlert: boolean): void;
}

interface CScriptBindingPR_Entities {
    /**
     * Get the world origin of the entity.
     */
    GetAbsOrigin(nEntityIndex: entityID): [number, number, number];

    /**
     * Get the forward vector of the entity.
     */
    GetForward(nEntityIndex: entityID): [number, number, number];

    /**
     * Get the right vector of the entity.
     */
    GetRight(nEntityIndex: entityID): [number, number, number];

    /**
     * Get the up vector of the entity.
     */
    GetUp(nEntityIndex: entityID): [number, number, number];

    /**
     * Get all the building entities.
     */
    GetAllBuildingEntities(): entityID[];

    /**
     * Get all the hero entities.
     */
    GetAllHeroEntities(): entityID[];

    /**
     * Get all the entities with a given name.
     */
    GetAllEntitiesByName(pszName: string): entityID[];

    /**
     * Get all the entities with a given classname.
     */
    GetAllEntitiesByClassname(pszName: string): entityID[];

    /**
     * Get all the creature entities.
     */
    GetAllCreatureEntities(): entityID[];

    /**
     * Get all the entities.
     */
    GetAllEntities(): entityID[];

    /**
     * Get the ID of the player owning the given entity.
     */
    GetPlayerOwnerID(nEntityIndex: entityID): number;

    /**
     *
     */
    CanBeDominated(nEntityIndex: entityID): boolean;

    /**
     *
     */
    HasAttackCapability(nEntityIndex: entityID): boolean;

    /**
     *
     */
    HasCastableAbilities(nEntityIndex: entityID): boolean;

    /**
     *
     */
    HasFlyingVision(nEntityIndex: entityID): boolean;

    /**
     *
     */
    HasFlyMovementCapability(nEntityIndex: entityID): boolean;

    /**
     *
     */
    HasGroundMovementCapability(nEntityIndex: entityID): boolean;

    /**
     *
     */
    HasMovementCapability(nEntityIndex: entityID): boolean;

    /**
     *
     */
    HasScepter(nEntityIndex: entityID): boolean;

    /**
     *
     */
    HasUpgradeableAbilities(nEntityIndex: entityID): boolean;

    /**
     *
     */
    HasUpgradeableAbilitiesThatArentMaxed(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsAlive(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsAncient(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsAttackImmune(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsBarracks(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsBlind(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsBoss(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsRoshan(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsBuilding(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsCommandRestricted(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsConsideredHero(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsControllableByAnyPlayer(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsCourier(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsCreature(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsCreep(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsCreepHero(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsDeniable(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsDominated(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsEnemy(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsEvadeDisabled(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsFort(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsFrozen(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsGeneratedByEconItem(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsHallofFame(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsDisarmed(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsHero(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsHexed(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsIllusion(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsInRangeOfFountain(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsInventoryEnabled(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsInvisible(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsInvulnerable(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsLaneCreep(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsLowAttackPriority(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsMagicImmune(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsMuted(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsNeutralUnitType(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsNightmared(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsOther(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsOutOfGame(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsOwnedByAnyPlayer(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsPhantom(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsRangedAttacker(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsRealHero(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsRooted(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsSelectable(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsShop(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsSilenced(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsSpeciallyDeniable(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsStunned(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsSummoned(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsTower(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsUnselectable(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsWard(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsZombie(nEntityIndex: entityID): boolean;

    /**
     *
     */
    NoHealthBar(nEntityIndex: entityID): boolean;

    /**
     *
     */
    NoTeamMoveTo(nEntityIndex: entityID): boolean;

    /**
     *
     */
    NoTeamSelect(nEntityIndex: entityID): boolean;

    /**
     *
     */
    NotOnMinimap(nEntityIndex: entityID): boolean;

    /**
     *
     */
    NotOnMinimapForEnemies(nEntityIndex: entityID): boolean;

    /**
     *
     */
    NoUnitCollision(nEntityIndex: entityID): boolean;

    /**
     *
     */
    PassivesDisabled(nEntityIndex: entityID): boolean;

    /**
     *
     */
    ProvidesVision(nEntityIndex: entityID): boolean;

    /**
     *
     */
    UsesHeroAbilityNumbers(nEntityIndex: entityID): boolean;

    /**
     *
     */
    IsMoving(nEntityIndex: entityID): boolean;

    /**
     *
     */
    GetAbilityCount(nEntityIndex: entityID): number;

    /**
     *
     */
    GetCombatClassAttack(nEntityIndex: entityID): number;

    /**
     *
     */
    GetCombatClassDefend(nEntityIndex: entityID): number;

    /**
     *
     */
    GetCurrentVisionRange(nEntityIndex: entityID): number;

    /**
     *
     */
    GetDamageBonus(nEntityIndex: entityID): number;

    /**
     *
     */
    GetDamageMax(nEntityIndex: entityID): number;

    /**
     *
     */
    GetDamageMin(nEntityIndex: entityID): number;

    /**
     *
     */
    GetDayTimeVisionRange(nEntityIndex: entityID): number;

    /**
     *
     */
    GetHealth(nEntityIndex: entityID): number;

    /**
     *
     */
    GetHealthPercent(nEntityIndex: entityID): number;

    /**
     *
     */
    GetHealthThinkRegen(nEntityIndex: entityID): number;

    /**
     *
     */
    GetLevel(nEntityIndex: entityID): number;

    /**
     *
     */
    GetMaxHealth(nEntityIndex: entityID): number;

    /**
     *
     */
    GetNightTimeVisionRange(nEntityIndex: entityID): number;

    /**
     *
     */
    GetStates(nEntityIndex: entityID): modifierstate[];

    /**
     *
     */
    GetTotalPurchasedUpgradeGoldCost(nEntityIndex: entityID): number;

    /**
     *
     */
    GetTeamNumber(nEntityIndex: entityID): DOTATeam_t;

    /**
     *
     */
    GetAttackRange(nEntityIndex: entityID): number;

    /**
     *
     */
    GetAttackSpeed(nEntityIndex: entityID): number;

    /**
     *
     */
    GetAttacksPerSecond(nEntityIndex: entityID): number;

    /**
     *
     */
    GetBaseAttackTime(nEntityIndex: entityID): number;

    /**
     *
     */
    GetBaseMagicalResistanceValue(nEntityIndex: entityID): number;

    /**
     *
     */
    GetBaseMoveSpeed(nEntityIndex: entityID): number;

    /**
     *
     */
    GetBonusPhysicalArmor(nEntityIndex: entityID): number;

    /**
     *
     */
    GetCollisionPadding(nEntityIndex: entityID): number;

    /**
     *
     */
    GetEffectiveInvisibilityLevel(nEntityIndex: entityID): number;

    /**
     *
     */
    GetHasteFactor(nEntityIndex: entityID): number;

    /**
     *
     */
    GetHullRadius(nEntityIndex: entityID): number;

    /**
     *
     */
    GetIdealSpeed(nEntityIndex: entityID): number;

    /**
     *
     */
    GetIncreasedAttackSpeed(nEntityIndex: entityID): number;

    /**
     *
     */
    GetMana(nEntityIndex: entityID): number;

    /**
     *
     */
    GetManaThinkRegen(nEntityIndex: entityID): number;

    /**
     *
     */
    GetMaxMana(nEntityIndex: entityID): number;

    /**
     *
     */
    GetMagicalArmorValue(nEntityIndex: entityID): number;

    /**
     *
     */
    GetPaddedCollisionRadius(nEntityIndex: entityID): number;

    /**
     *
     */
    GetPercentInvisible(nEntityIndex: entityID): number;

    /**
     *
     */
    GetPhysicalArmorValue(nEntityIndex: entityID): number;

    /**
     *
     */
    GetProjectileCollisionSize(nEntityIndex: entityID): number;

    /**
     * Returns the radius of the bounding ring of the unit.
     */
    GetRingRadius(nEntityIndex: entityID): number;

    /**
     *
     */
    GetSecondsPerAttack(nEntityIndex: entityID): number;

    /**
     *
     */
    ManaFraction(nEntityIndex: entityID): number;

    /**
     *
     */
    GetClassname(nEntityIndex: entityID): string;

    /**
     *
     */
    GetDisplayedUnitName(nEntityIndex: entityID): string;

    /**
     *
     */
    GetSelectionGroup(nEntityIndex: entityID): string;

    /**
     *
     */
    GetSoundSet(nEntityIndex: entityID): string;

    /**
     *
     */
    GetUnitLabel(nEntityIndex: entityID): string;

    /**
     *
     */
    GetUnitName(nEntityIndex: entityID): string;

    /**
     *
     */
    GetTotalDamageTaken(nEntityIndex: entityID): number;

    /**
     *
     */
    IsControllableByPlayer(nEntityIndex: entityID, nPlayerIndex: number): boolean;

    /**
     *
     */
    GetChosenTarget(nEntityIndex: entityID): number;

    /**
     *
     */
    HasItemInInventory(nEntityIndex: entityID, pItemName: string): boolean;

    /**
     *
     */
    GetRangeToUnit(nEntityIndex: entityID, nEntityIndex2: entityID): number;

    /**
     *
     */
    IsEntityInRange(nEntityIndex: entityID, nEntityIndex2: entityID, flRange: number): boolean;

    /**
     *
     */
    GetMoveSpeedModifier(nEntityIndex: entityID, flBaseSpeed: number): number;

    /**
     *
     */
    CanAcceptTargetToAttack(nEntityIndex: entityID, nEntityIndex2: entityID): boolean;

    /**
     *
     */
    InState(nEntityIndex: entityID, nState: modifierstate): boolean;

    /**
     *
     */
    GetArmorForDamageType(nEntityIndex: entityID, iDamageType: DAMAGE_TYPES): number;

    /**
     *
     */
    GetArmorReductionForDamageType(nEntityIndex: entityID, iDamageType: DAMAGE_TYPES): number;

    /**
     *
     */
    IsInRangeOfShop(nEntityIndex: entityID, iShopType: number, bSpecific: boolean): boolean;

    /**
     *
     */
    GetNumItemsInStash(nEntityIndex: entityID): number;

    /**
     *
     */
    GetNumItemsInInventory(nEntityIndex: entityID): number;

    /**
     *
     */
    GetItemInSlot(nEntityIndex: entityID, nSlotIndex: number): itemID;

    /**
     *
     */
    GetAbility(nEntityIndex: entityID, nSlotIndex: number): abilityID;

    /**
     *
     */
    GetAbilityByName(nEntityIndex: entityID, pszAbilityName: string): abilityID;

    /**
     *
     */
    GetNumBuffs(nEntityIndex: entityID): number;

    /**
     *
     */
    GetBuff(nEntityIndex: entityID, nBufIndex: number): buffID;

    /**
     *
     */
    GetAbilityPoints(nEntityIndex: entityID): number;

    /**
     *
     */
    GetCurrentXP(nEntityIndex: entityID): number;

    /**
     *
     */
    GetNeededXPToLevel(nEntityIndex: entityID): number;

    /**
     * Get the currently selected entities
     */
    GetSelectionEntities(): entityID[];

    /**
     * Is this a valid entity index?
     */
    IsValidEntity(nEntityIndex: entityID): boolean;

    /**
     * Is this entity an item container in the world?
     */
    IsItemPhysical(nEntityIndex: entityID): boolean;

    /**
     * Get the item contained in this physical item container.
     */
    GetContainedItem(nEntityIndex: entityID): itemID;
}

interface CScriptBindingPR_Abilities {
    /**
     *
     */
    GetAbilityName(nEntityIndex: abilityID): string;

    /**
     *
     */
    GetAbilityTextureName(nEntityIndex: abilityID): string;

    /**
     *
     */
    GetAssociatedPrimaryAbilities(nEntityIndex: abilityID): abilityID[];

    /**
     *
     */
    GetAssociatedSecondaryAbilities(nEntityIndex: abilityID): abilityID[];

    /**
     *
     */
    GetHotkeyOverride(nEntityIndex: abilityID): string;

    /**
     *
     */
    GetIntrinsicModifierName(nEntityIndex: abilityID): string;

    /**
     *
     */
    GetSharedCooldownName(nEntityIndex: abilityID): string;

    /**
     *
     */
    AbilityReady(nEntityIndex: abilityID): number;

    /**
     * Returns an AbilityLearnResult_t
     */
    CanAbilityBeUpgraded(nEntityIndex: abilityID): AbilityLearnResult_t;

    /**
     *
     */
    CanBeExecuted(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    GetAbilityDamage(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetAbilityDamageType(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetAbilityTargetFlags(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetAbilityTargetTeam(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetAbilityTargetType(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetAbilityType(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetBehavior(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetCastRange(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetChannelledManaCostPerSecond(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetCurrentCharges(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetEffectiveLevel(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetHeroLevelRequiredToUpgrade(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetLevel(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetManaCost(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetMaxLevel(nEntityIndex: abilityID): number;

    /**
     *
     */
    AttemptToUpgrade(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    CanLearn(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    GetAutoCastState(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    GetToggleState(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    HasScepterUpgradeTooltip(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsActivated(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsActivatedChanging(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsAttributeBonus(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsAutocast(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsCooldownReady(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsDisplayedAbility(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsHidden(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsHiddenWhenStolen(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsInAbilityPhase(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsItem(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsMarkedAsDirty(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsMuted(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsOnCastbar(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsOnLearnbar(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsOwnersGoldEnough(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsOwnersGoldEnoughForUpgrade(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsOwnersManaEnough(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsPassive(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsRecipe(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsSharedWithTeammates(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsStealable(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsStolen(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    IsToggle(nEntityIndex: abilityID): boolean;

    /**
     *
     */
    GetAOERadius(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetBackswingTime(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetCastPoint(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetChannelStartTime(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetChannelTime(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetCooldown(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetCooldownLength(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetCooldownTime(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetCooldownTimeRemaining(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetDuration(nEntityIndex: abilityID): number;

    /**
     *
     */
    GetUpgradeBlend(nEntityIndex: abilityID): number;

    /**
     * Get the local player's current active ability. (Pre-cast targetting state.)
     */
    GetLocalPlayerActiveAbility(): abilityID;

    /**
     *
     */
    GetCaster(nAbilityIndex: abilityID): entityID;

    /**
     *
     */
    GetCustomValueFor(nAbilityIndex: abilityID, pszAbilityVarName: string): number;

    /**
     *
     */
    GetLevelSpecialValueFor(nAbilityIndex: abilityID, szName: string, nLevel: number): number;

    /**
     *
     */
    GetSpecialValueFor(nAbilityIndex: abilityID, szName: string): number;

    /**
     *
     */
    IsCosmetic(nAbilityIndex: abilityID, nTargetEntityIndex: entityID): boolean;

    /**
     * Attempt to execute the specified ability (Equivalent to clicking the ability in the HUD action bar)
     */
    ExecuteAbility(nAbilityEntIndex: abilityID, nCasterEntIndex: entityID, bIsQuickCast: boolean): boolean;

    /**
     * Attempt to double-tap (self-cast) the specified ability (Equivalent to double-clicking the ability in the HUD action bar)
     */
    CreateDoubleTapCastOrder(nAbilityEntIndex: abilityID, nCasterEntIndex: entityID): void;

    /**
     * Ping the specified ability (Equivalent to alt-clicking the ability in the HUD action bar)
     */
    PingAbility(nAbilityIndex: abilityID): void;

    /**
     * Returns the keybind (as a string) for the specified ability.
     */
    GetKeybind(nAbilityEntIndex: abilityID): string;
}

interface CScriptBindingPR_Items {
    /**
     *
     */
    ShouldDisplayCharges(nEntityIndex: itemID): boolean;

    /**
     *
     */
    AlwaysDisplayCharges(nEntityIndex: itemID): boolean;

    /**
     *
     */
    ShowSecondaryCharges(nEntityIndex: itemID): boolean;

    /**
     *
     */
    CanBeSoldByLocalPlayer(nEntityIndex: itemID): boolean;

    /**
     *
     */
    CanDoubleTapCast(nEntityIndex: itemID): boolean;

    /**
     *
     */
    ForceHideCharges(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsAlertableItem(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsCastOnPickup(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsDisassemblable(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsDroppable(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsInnatelyDisassemblable(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsKillable(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsMuted(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsPermanent(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsPurchasable(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsRecipe(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsRecipeGenerated(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsSellable(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsStackable(nEntityIndex: itemID): boolean;

    /**
     *
     */
    ProRatesChargesWhenSelling(nEntityIndex: itemID): boolean;

    /**
     *
     */
    RequiresCharges(nEntityIndex: itemID): boolean;

    /**
     *
     */
    CanBeExecuted(nEntityIndex: itemID): number;

    /**
     *
     */
    GetCost(nEntityIndex: itemID): number;

    /**
     *
     */
    GetCurrentCharges(nEntityIndex: itemID): number;

    /**
     *
     */
    GetSecondaryCharges(nEntityIndex: itemID): number;

    /**
     *
     */
    GetDisplayedCharges(nEntityIndex: itemID): number;

    /**
     *
     */
    GetInitialCharges(nEntityIndex: itemID): number;

    /**
     *
     */
    GetItemColor(nEntityIndex: itemID): number;

    /**
     *
     */
    GetShareability(nEntityIndex: itemID): EShareAbility;

    /**
     *
     */
    GetAbilityTextureSF(nEntityIndex: itemID): string;

    /**
     *
     */
    GetAssembledTime(nEntityIndex: itemID): number;

    /**
     *
     */
    GetPurchaseTime(nEntityIndex: itemID): number;

    /**
     *
     */
    GetPurchaser(nItemID: itemID): entityID;

    /**
     * Attempt to have the local player disassemble the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerDisassembleItem(nItem: itemID): boolean;

    /**
     * Attempt to have the local player drop the specified item from its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerDropItemFromStash(nItem: itemID): boolean;

    /**
     * Attempt to have the local player alert allies about the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerItemAlertAllies(nItem: itemID): boolean;

    /**
     * Attempt to have the local player move the specified item to its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerMoveItemToStash(nItem: itemID): boolean;

    /**
     * Attempt to have the local player sell the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerSellItem(nItem: itemID): boolean;
}

interface TeamDetails {
    team_id: DOTATeam_t;
    team_name: string;
    team_max_players: number;
    team_score: number;
    team_num_players: number;
}

interface PlayerInfo {
    player_id: number;
    player_name: string;
    player_connection_state: DOTAConnectionState_t;
    player_steamid: string;
    player_kills: number;
    player_deaths: number;
    player_assists: number;
    player_selected_hero_id: number;
    player_selected_hero: string;
    player_selected_hero_entity_index: number;
    possible_hero_selection: string;
    player_level: number;
    player_respawn_seconds: number;
    player_gold: number;
    player_team_id: DOTATeam_t;
    player_is_local: boolean;
    player_has_host_privileges: boolean;
}

interface MapInfo {
    map_name: string;
    map_display_name: string;
}

interface PrepareUnitOrdersArgument {
    OrderType?: dotaunitorder_t;
    TargetIndex?: number;
    Position?: [number, number, number];
    AbilityIndex?: number;
    OrderIssuer?: any; // TODO: OrderIssuer_t - not in enums, entityID?
    UnitIndex?: number;
    QueueBehavior?: OrderQueueBehavior_t;
    ShowEffects?: boolean;
}

interface CScriptBindingPR_Game {
    /**
     *
     */
    Time(): number;

    /**
     *
     */
    GetGameTime(): number;

    /**
     *
     */
    GetDOTATime(bIncludePreGame: boolean, bIncludeNegativeTime: boolean): number;

    /**
     *
     */
    IsGamePaused(): boolean;

    /**
     *
     */
    IsInToolsMode(): boolean;

    /**
     * Return the team id of the winning team.
     */
    GetGameWinner(): number;

    /**
     *
     */
    GetStateTransitionTime(): number;

    /**
     * Get the difficulty setting of the game.
     */
    GetCustomGameDifficulty(): number;

    /**
     * Returns true if the user has enabled flipped HUD
     */
    IsHUDFlipped(): boolean;

    /**
     * Returns the width of the display.
     */
    GetScreenWidth(): number;

    /**
     * Returns the height of the display.
     */
    GetScreenHeight(): number;

    /**
     * Converts the specified x,y,z world co-ordinate into an x screen coordinate. Returns -1 if behind the camera
     */
    WorldToScreenX(x: number, y: number, z: number): number;

    /**
     * Converts the specified x,y,z world co-ordinate into a y screen coordinate. Returns -1 if behind the camera
     */
    WorldToScreenY(x: number, y: number, z: number): number;

    /**
     * Converts the specified x, y screen coordinates into a x, y, z world coordinates.
     */
    ScreenXYToWorld(nX: number, nY: number): [number, number, number];

    /**
     * Returns the keybind (as a string) for the requested ability slot.
     */
    GetKeybindForAbility(iSlot: number): string;

    /**
     *
     */
    GetNianFightTimeLeft(): number;

    /**
     *
     */
    GetState(): DOTA_GameState;

    /**
     *
     */
    GameStateIs(nState: DOTA_GameState): boolean;

    /**
     *
     */
    GameStateIsBefore(nState: DOTA_GameState): boolean;

    /**
     *
     */
    GameStateIsAfter(nState: DOTA_GameState): boolean;

    /**
     *
     */
    AddCommand(pszCommandName: string, callback: (data: object) => void, pszDescription: string, nFlags: number): void;

    /**
     *
     */
    GetLocalPlayerID(): number;

    /**
     * Assign the local player to the specified team
     */
    PlayerJoinTeam(nTeamID: DOTATeam_t): void;

    /**
     * Assign the currently unassigned players to teams
     */
    AutoAssignPlayersToTeams(): void;

    /**
     * Shuffle the team assignments of all of the players currently assigned to a team.
     */
    ShufflePlayerTeamAssignments(): void;

    /**
     * Set the remaining seconds in team setup before the game starts. -1 to stop the countdown timer
     */
    SetRemainingSetupTime(flSeconds: number): void;

    /**
     * Set the amount of time in seconds that will be set as the remaining time when all players are assigned to a team.
     */
    SetAutoLaunchDelay(flSeconds: number): void;

    /**
     * Enable or disable automatically starting the game once all players are assigned to a team
     */
    SetAutoLaunchEnabled(bEnable: boolean): void;

    /**
     * Return true of false indicating if automatically starting the game is enabled.
     */
    GetAutoLaunchEnabled(): boolean;

    /**
     * Lock the team selection preventing players from swiching teams.
     */
    SetTeamSelectionLocked(bLockTeams: boolean): void;

    /**
     * Returns true or false to indicate if team selection is locked
     */
    GetTeamSelectionLocked(): boolean;

    /**
     * Get all team IDs
     */
    GetAllTeamIDs(): DOTATeam_t[];

    /**
     * Get all player IDs
     */
    GetAllPlayerIDs(): number[];

    /**
     * Get unassigned player IDs
     */
    GetUnassignedPlayerIDs(): number[];

    /**
     * Get info about the player hero ultimate ability
     */
    GetPlayerUltimateStateOrTime(nPlayerID: number): number;

    /**
     * Whether the local player has muted text and voice chat for the specified player id
     */
    IsPlayerMuted(nPlayerID: number): boolean;

    /**
     * Set whether the local player has muted text and voice chat for the specified player id
     */
    SetPlayerMuted(nPlayerID: number, bMuted: boolean): void;

    /**
     * Get detailed information for the given team
     */
    GetTeamDetails(nTeam: number): TeamDetails;

    /**
     * Get details for the local player
     */
    GetLocalPlayerInfo(): PlayerInfo;

    /**
     * Get info about the player items.
     */
    GetPlayerItems(nPlayerID: number): itemID[];

    /**
     * Get info about the given player
     */
    GetPlayerInfo(nPlayerID: number): PlayerInfo;

    /**
     * Get player IDs for the given team
     */
    GetPlayerIDsOnTeam(nTeam: DOTATeam_t): number[];

    /**
     *
     */
    ServerCmd(pMsg: string): void;

    /**
     *
     */
    FinishGame(): void;

    /**
     * Emit a sound for the local player. Returns an integer handle that can be passed to StopSound. (Returns 0 on failure.)
     */
    EmitSound(pSoundEventName: string): number;

    /**
     * Stop a current playing sound on the local player. Takes handle from a call to EmitSound.
     */
    StopSound(nHandle: number): void;

    /**
     * Return information about the current map.
     */
    GetMapInfo(): MapInfo;

    /**
     * Orders from the local player.
     */
    PrepareUnitOrders(args: PrepareUnitOrdersArgument): void;

    /**
     * Order a unit to drop the specified item at the current cursor location.
     */
    DropItemAtCursor(nControlledUnitEnt: entityID, nItemEnt: itemID): void;

    /**
     *
     */
    EnterAbilityLearnMode(): void;

    /**
     *
     */
    EndAbilityLearnMode(): void;

    /**
     *
     */
    IsInAbilityLearnMode(): boolean;

    /**
     * Registers a keybind that can be listened to with Game.AddCommand
     */
    CreateCustomKeyBind(keyName: string, commandName: string): void;
}

interface CPanoramaScript_SteamUGC {
    /**
     * Subscribe to a piece of UGC
     */
    SubscribeItem(pPublishedFileID: string, funcVal: any): void;

    /**
     * Unsubscribe to a piece of UGC
     */
    UnsubscribeItem(pPublishedFileID: string, funcVal: any): void;

    /**
     * Get a key from a custom net table
     */
    GetSubscriptionInfo(pPublishedFileID: string): any;

    /**
     * Vote on a piece of UGC
     */
    SetUserItemVote(pPublishedFileID: string, bVoteUp: boolean, funcVal: any): any;

    /**
     * Get the user's vote on a peice of UGC
     */
    GetUserItemVote(pPublishedFileID: string, funcVal: any): any;

    /**
     * Add an item to the user's favorites list
     */
    AddToFavorites(pPublishedFileID: string, funcVal: any): any;

    /**
     * Remove an item from the user's favorites list
     */
    RemoveFromFavorites(pPublishedFileID: string, funcVal: any): any;

    /**
     * Create a request to query Steam for all UGC
     */
    CreateQueryAllUGCRequest(eQueryType: number, eMatchingeMatchingUGCTypeFileType: number, unPage: number): any;

    /**
     * Creqte a request to query Steam for specific UGC
     */
    CreateQueryUGCDetailsRequest(pPublishedFileIDs: string[]): any;

    /**
     * Adds a required tag to the query
     */
    AddRequiredTagToQuery(handle: number, pchTag: string): any;

    /**
     * Adds an excluded tag to the query
     */
    AddExcludedTagToQuery(handle: number, pchTag: string): any;

    /**
     * Adds a required tag to the query
     */
    ConfigureQuery(handle: number, jsObject: any): any;

    /**
     * Sends the prepared query
     */
    SendUGCQuery(handle: number, funcVal: any): any;

    /**
     * Register a callback to be called when the item is downloaded
     */
    RegisterDownloadItemResultCallback(pPublishedFileID: string, funcVal: any): any;
}

interface CPanoramaScript_SteamFriends {
    /**
     * Requests the user's persona name
     */
    RequestPersoneName(pchSteamID: string, funcVal: any): any;

    /**
     * Sets the avatar image on the image panel
     */
    SetLargeAvatarImage(...unknown: any[]): any;
}

interface CPanoramaScript_SteamUtils {
    /**
     * Returns the connected universe
     */
    GetConnectedUniverse(): any;

    /**
     * Returns the appid of the current app
     */
    GetAppID(): any;
}

interface CPanoramaScript_VRUtils {
    /**
     * Get application properties for a VR app with the specifiied appID
     */
    GetVRAppPropertyData(nAppID: number): any;

    /**
     * Launches a Steam Application using OpenVR.
     */
    LaunchSteamApp(nAppID: number): any;
}

interface DollarStatic {
    (selector: string): Panel;
    CreatePanel(type: string, root: Panel, id: string): Panel;
    CreatePanel(type: string, root: Panel, id: string): PanelBase;
    Msg(...args: any[]): void;
    GetContextPanel(): Panel;
    Schedule(time: number, callback: () => void): scheduleID;
    CancelScheduled(scheduledEvent: scheduleID): void;
    DispatchEvent(event: string, panelID?: string, ...args: any[]): void;
    DispatchEvent(event: string, panel: Panel, ...args: any[]): void;
    DispatchEventAsync(delay: number, event: string, panelID?: string, ...args: any[]): void;
    DispatchEventAsync(delay: number, event: string, panel: Panel, ...args: any[]): void;
    Localize(token: string, parent?: Panel): string;
    RegisterEventHandler(event: string, parent: Panel, handler: () => void): number;
    Each<T>(list: T[], callback: (item: T, index: number) => void): void;
    Each<T>(map: {[key: string]: T}, callback: (value: T, key: string) => void): void;
    Each<T>(map: {[key: number]: T}, callback: (value: T, key: number) => void): void;
    AsyncWebRequest(url: string, data: AsyncWebRequest_data): void;
}

interface AsyncWebRequest_data {
    type?: string;
    timeout?: number;
    headers?: object;
    data?: object;
    success?: (data: any) => void;
    error?: (data: any) => void;
    complete?: (data: any) => void;
}

declare var GameEvents: CDOTA_PanoramaScript_GameEvents;
declare var GameUI: CDOTA_PanoramaScript_GameUI;
declare var CustomNetTables: CDOTA_PanoramaScript_CustomNetTables;
declare var Particles: CScriptBindingPR_Particles;
declare var Buffs: CScriptBindingPR_Buffs;
declare var Players: CScriptBindingPR_Players;
declare var Entities: CScriptBindingPR_Entities;
declare var Abilities: CScriptBindingPR_Abilities;
declare var Items: CScriptBindingPR_Items;
declare var Game: CScriptBindingPR_Game;
declare var SteamUGC: CPanoramaScript_SteamUGC;
declare var SteamFriends: CPanoramaScript_SteamFriends;
declare var SteamUtils: CPanoramaScript_SteamUtils;
declare var VRUtils: CPanoramaScript_VRUtils;
declare var $: DollarStatic;
declare var panorama: DollarStatic;
