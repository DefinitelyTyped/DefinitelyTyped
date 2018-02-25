// Type definitions for Dota2_Lua 1.0
// Project: https://github.com/ModDota/API
// Definitions by: ModDota <https://github.com/ModDota>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference path="dota-enums.d.ts" />
/// <reference path="dota-gameevents.d.ts" />
/// <reference path="dota-modifier-properties.d.ts" />
/// <reference path="dota-std.d.ts" />
type QAngle = any;
type Quaternion = any;
type EntityID = number;
type ProjectileID = number;
type ParticleID = number;
type EventListenerID = number;
type CCustomGameEventListener = number;

interface table {
    [key: string]: any;
}

// see: https://github.com/Microsoft/TypeScript/issues/15480
type PlayerID = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;

declare abstract class CScriptHTTPResponse {
    Body: string;
    Request: CScriptHTTPResponse;
    StatusCode: number;
}

/**
 * Animating models
 */
declare abstract class CBaseAnimating extends CBaseModelEntity {
    /**
     * Returns the duration in seconds of the active sequence.
     */
    ActiveSequenceDuration(): number;
    /**
     * Get the attachment id's angles as a p,y,r vector.
     */
    GetAttachmentAngles(iAttachment: number): Vec;
    /**
     * Get the attachment id's origin vector.
     */
    GetAttachmentOrigin(iAttachment: number): Vec;
    /**
     * Get the value of the given animGraph parameter
     */
    GetGraphParameter(pszParam: string): any;
    /**
     * Get scale of entity's model.
     */
    GetModelScale(): number;
    /**
     * Returns the name of the active sequence.
     */
    GetSequence(): string;
    /**
     * Ask whether the main sequence is done playing.
     */
    IsSequenceFinished(): boolean;
    /**
     * Sets the active sequence by name, resetting the current cycle.
     */
    ResetSequence(pSequenceName: string): void;
    /**
     * Get the named attachment id.
     */
    ScriptLookupAttachment(pAttachmentName: string): number;
    /**
     * Returns the duration in seconds of the given sequence name.
     */
    SequenceDuration(pSequenceName: string): number;
    /**
     * Sets a bodygroup.
     */
    SetBodygroup(iGroup: number, iValue: number): void;
    /**
     * Sets a bodygroup by name.
     */
    SetBodygroupByName(pName: string, iValue: number): void;
    /**
     * Pass the vector value to the specified param in the graph
     */
    SetGraphLookDirection(vValue: Vec): void;
    /**
     * Set the specific param value, type is inferred from the type in script
     */
    SetGraphParameter(pszParam: string, svArg: any): void;
    /**
     * Set the specific param on or off
     */
    SetGraphParameterBool(szName: string, bValue: boolean): void;
    /**
     * Pass the enum (int) value to the specified param
     */
    SetGraphParameterEnum(szName: string, nValue: number): void;
    /**
     * Pass the float value to the specified param
     */
    SetGraphParameterFloat(szName: string, flValue: number): void;
    /**
     * Pass the int value to the specified param
     */
    SetGraphParameterInt(szName: string, nValue: number): void;
    /**
     * Pass the vector value to the specified param in the graph
     */
    SetGraphParameterVector(szName: string, vValue: Vec): void;
    /**
     * Set scale of entity's model.
     */
    SetModelScale(flScale: number): void;
    /**
     * Set the specified pose parameter to the specified value.
     */
    SetPoseParameter(szName: string, fValue: number): number;
    /**
     * Sets the named procedural IK target.
     */
    SetProceduralIKTarget(pChainName: string, pTargetName: string, vTargetPosition: Vec, qTargetRotation: QAngle): boolean;
    /**
     * Sets the named procedural IK targets weight: 0 = full animation, 1 = full IK.
     */
    SetProceduralIKTargetWeight(pChainName: string, pTargetName: string, flWeight: number): boolean;
    /**
     * Sets the active sequence by name, keeping the current cycle.
     */
    SetSequence(pSequenceName: string): void;
    /**
     * Set skin (int).
     */
    SetSkin(iSkin: number): void;
    /**
     * Stop the current animation by setting playback rate to 0.0.
     */
    StopAnimation(): void;
}
/**
 * BaseCombatCharacter
 */
declare abstract class CBaseCombatCharacter extends CBaseFlex {
    /**
     * GetEquippedWeapons() : Returns an array of all the equipped weapons
     */
    GetEquippedWeapons(): any;
    /**
     * Get the combat character faction.
     */
    GetFaction(): number;
    /**
     * GetWeaponCount() : Gets the number of weapons currently equipped
     */
    GetWeaponCount(): number;
    /**
     * Returns the shoot position eyes (or hand in VR).
     */
    ShootPosition(nHand: number): Vec;
}
/**
 * Root class of all server-side entities
 */
declare abstract class CBaseEntity extends CEntityInstance {
    /**
     * AddEffects( int ): Adds the render effect flag.
     */
    AddEffects(nFlags: number): void;
    /**
     * Apply a Velocity Impulse
     */
    ApplyAbsVelocityImpulse(vecImpulse: Vec): void;
    /**
     * Apply an Ang Velocity Impulse
     */
    ApplyLocalAngularVelocityImpulse(angImpulse: Vec): void;
    /**
     * Get float value for an entity attribute.
     */
    Attribute_GetFloatValue(pName: string, flDefault: number): number;
    /**
     * Get int value for an entity attribute.
     */
    Attribute_GetIntValue(pName: string, nDefault: number): number;
    /**
     * Set float value for an entity attribute.
     */
    Attribute_SetFloatValue(pName: string, flValue: number): void;
    /**
     * Set int value for an entity attribute.
     */
    Attribute_SetIntValue(pName: string, nValue: number): void;
    /**
     * Delete an entity attribute.
     */
    DeleteAttribute(pName: string): void;
    /**
     * Plays a sound from this entity.
     */
    EmitSound(soundname: string): void;
    /**
     * Plays/modifies a sound from this entity. changes sound if nPitch and/or flVol or flSoundTime is > 0.
     */
    EmitSoundParams(soundname: string, nPitch: number, flVolume: number, flDelay: number): void;
    /**
     * Get the qangles that this entity is looking at.
     */
    EyeAngles(): QAngle;
    /**
     * Get vector to eye position - absolute coords.
     */
    EyePosition(): Vec;
    FirstMoveChild(): CBaseEntity;
    /**
     * hEntity to follow, bool bBoneMerge
     */
    FollowEntity(hEnt: CBaseEntity, bBoneMerge: boolean): void;
    /**
     * Returns a table containing the criteria that would be used for response queries on this entity. This is the same as the table that is passed to response rule script function callbacks.
     */
    GatherCriteria(hResult: table): void;
    GetAbsOrigin(): Vec;
    GetAbsScale(): number;
    GetAngles(): QAngle;
    /**
     * Get entity pitch, yaw, roll as a vector.
     */
    GetAnglesAsVector(): Vec;
    /**
     * Get the local angular velocity - returns a vector of pitch,yaw,roll
     */
    GetAngularVelocity(): Vec;
    /**
     * Get Base? velocity.
     */
    GetBaseVelocity(): Vec;
    /**
     * Get a vector containing max bounds, centered on object.
     */
    GetBoundingMaxs(): Vec;
    /**
     * Get a vector containing min bounds, centered on object.
     */
    GetBoundingMins(): Vec;
    /**
     * Get a table containing the 'Mins' & 'Maxs' vector bounds, centered on object.
     */
    GetBounds(): any;
    /**
     * Get vector to center of object - absolute coords
     */
    GetCenter(): Vec;
    /**
     * Get the entities parented to this entity.
     */
    GetChildren(): CBaseEntity[];
    /**
     * GetContext( name ): looks up a context and returns it if available. May return string, float, or null (if the context isn't found).
     */
    GetContext(name: string): any;
    /**
     * Get the forward vector of the entity.
     */
    GetForwardVector(): Vec;
    /**
     * Get the health of this entity.
     */
    GetHealth(): number;
    /**
     * Get entity local pitch, yaw, roll as a QAngle
     */
    GetLocalAngles(): QAngle;
    /**
     * Maybe local angvel
     */
    GetLocalAngularVelocity(): QAngle;
    /**
     * Get entity local origin as a Vector
     */
    GetLocalOrigin(): Vec;
    GetLocalScale(): number;
    /**
     * Get Entity relative velocity.
     */
    GetLocalVelocity(): Vec;
    /**
     * Get the mass of an entity. (returns 0 if it doesn't have a physics object)
     */
    GetMass(): number;
    /**
     * Get the maximum health of this entity.
     */
    GetMaxHealth(): number;
    /**
     * Returns the name of the model.
     */
    GetModelName(): string;
    /**
     * If in hierarchy, retrieves the entity's parent.
     */
    GetMoveParent(): CBaseEntity;
    GetOrigin(): Vec;
    /**
     * Gets this entity's owner
     */
    GetOwner(): CBaseEntity;
    /**
     * Get the owner entity, if there is one
     */
    GetOwnerEntity(): CBaseEntity;
    /**
     * Get the right vector of the entity.
     */
    GetRightVector(): Vec;
    /**
     * If in hierarchy, walks up the hierarchy to find the root parent.
     */
    GetRootMoveParent(): CBaseEntity;
    /**
     * Returns float duration of the sound. Takes soundname and optional actormodelname.
     */
    GetSoundDuration(soundname: string, actormodel: string): number;
    /**
     * Get the team number of this entity.
     */
    GetTeam(): DOTATeam_t;
    /**
     * Get the team number of this entity.
     */
    GetTeamNumber(): DOTATeam_t;
    /**
     * Get the up vector of the entity.
     */
    GetUpVector(): Vec;
    GetVelocity(): Vec;
    /**
     * See if an entity has a particular attribute.
     */
    HasAttribute(pName: string): boolean;
    /**
     * Is this entity alive?
     */
    IsAlive(): boolean;
    /**
     * Is this entity an CAI_BaseNPC?
     */
    IsNPC(): this is CDOTA_BaseNPC;
    /**
     * Is this entity a player?
     */
    IsPlayer(): this is CBasePlayer;
    Kill(): void;
    NextMovePeer(): CBaseEntity;
    /**
     * Takes duration, value for a temporary override.
     */
    OverrideFriction(duration: number, friction: number): void;
    /**
     * Precache a sound for later playing.
     */
    PrecacheScriptSound(soundname: string): void;
    /**
     * RemoveEffects( int ): Removes the render effect flag.
     */
    RemoveEffects(nFlags: number): void;
    /**
     * Set entity pitch, yaw, roll by component.
     */
    SetAbsAngles(fPitch: number, fYaw: number, fRoll: number): void;
    SetAbsOrigin(origin: Vec): void;
    SetAbsScale(flScale: number): void;
    /**
     * Set entity pitch, yaw, roll by component.
     */
    SetAngles(fPitch: number, fYaw: number, fRoll: number): void;
    /**
     * Set the local angular velocity - takes float pitch,yaw,roll velocities
     */
    SetAngularVelocity(pitchVel: number, yawVel: number, rollVel: number): void;
    /**
     * Set the position of the constraint.
     */
    SetConstraint(vPos: Vec): void;
    /**
     * SetContext( name , value, duration ): store any key/value pair in this entity's dialog contexts. Value must be a string. Will last for duration (set 0 to mean 'forever').
     */
    SetContext(pName: string, pValue: string, duration: number): void;
    /**
     * SetContextNum( name , value, duration ): store any key/value pair in this entity's dialog contexts. Value must be a number (int or float). Will last for duration (set 0 to mean 'forever').
     */
    SetContextNum(pName: string, fValue: number, duration: number): void;
    /**
     * Set a think function on this entity.
     */
    SetContextThink(pszContextName: string, hThinkFunc: () => number, flInterval: number): void;
    /**
     * Set the name of an entity.
     */
    SetEntityName(pName: string): void;
    /**
     * Set the orientation of the entity to have this forward vector.
     */
    SetForwardVector(v: Vec): void;
    /**
     * Set PLAYER friction, ignored for objects.
     */
    SetFriction(flFriction: number): void;
    /**
     * Set PLAYER gravity, ignored for objects.
     */
    SetGravity(flGravity: number): void;
    /**
     * Set the health of this entity.
     */
    SetHealth(nHealth: number): void;
    /**
     * Set entity local pitch, yaw, roll by component
     */
    SetLocalAngles(fPitch: number, fYaw: number, fRoll: number): void;
    /**
     * Set entity local origin from a Vector
     */
    SetLocalOrigin(origin: Vec): void;
    SetLocalScale(flScale: number): void;
    /**
     * Set the mass of an entity. (does nothing if it doesn't have a physics object)
     */
    SetMass(flMass: number): void;
    /**
     * Set the maximum health of this entity.
     */
    SetMaxHealth(amt: number): void;
    SetOrigin(v: Vec): void;
    /**
     * Sets this entity's owner
     */
    SetOwner(pOwner: CBaseEntity): void;
    /**
     * Set the parent for this entity.
     */
    SetParent(hParent: CBaseEntity, pAttachmentname: string): void;
    SetTeam(iTeamNum: DOTATeam_t): void;
    SetVelocity(vecVelocity: Vec): void;
    /**
     * Stops a named sound playing from this entity.
     */
    StopSound(soundname: string): void;
    /**
     * Apply damage to this entity. Use CreateDamageInfo() to create a damageinfo object.
     */
    TakeDamage(hInfo: table): number;
    /**
     * Fires off this entity's OnTrigger responses.
     */
    Trigger(): void;
    /**
     * Validates the private script scope and creates it if one doesn't exist.
     */
    ValidatePrivateScriptScope(): void;
}
/**
 * Animated characters who have vertex flex capability.
 */
declare abstract class CBaseFlex extends CBaseAnimating {
    /**
     * Returns the instance of the oldest active scene entity (if any).
     */
    GetCurrentScene(): CSceneEntity;
    /**
     * Returns the instance of the scene entity at the specified index.
     */
    GetSceneByIndex(index: number): CSceneEntity;
    /**
     * ( vcd file, delay ) - play specified vcd file
     */
    ScriptPlayScene(pszScene: string, flDelay: number): number;
}
/**
 * Base entity with model
 */
declare abstract class CBaseModelEntity extends CBaseEntity {
    /**
     * GetMaterialGroupHash(): Get the material group hash of this entity.
     */
    GetMaterialGroupHash(): number;
    /**
     * GetMaterialGroupMask(): Get the mesh group mask of this entity.
     */
    GetMaterialGroupMask(): number;
    /**
     * GetRenderAlpha(): Get the alpha modulation of this entity.
     */
    GetRenderAlpha(): number;
    /**
     * GetRenderColor(): Get the render color of the entity.
     */
    GetRenderColor(): Vec;
    /**
     * SetLightGroup( string ): Sets the light group of the entity.
     */
    SetLightGroup(pLightGroup: string): void;
    /**
     * SetMaterialGroup( string ): Set the material group of this entity.
     */
    SetMaterialGroup(pMaterialGroup: string): void;
    /**
     * SetMaterialGroupHash( uint32 ): Set the material group hash of this entity.
     */
    SetMaterialGroupHash(nHash: number): void;
    /**
     * SetMaterialGroupMask( uint64 ): Set the mesh group mask of this entity.
     */
    SetMaterialGroupMask(nMeshGroupMask: number): void;
    SetModel(pModelName: string): void;
    /**
     * SetRenderAlpha( int ): Set the alpha modulation of this entity.
     */
    SetRenderAlpha(nAlpha: number): void;
    /**
     * SetRenderColor( r, g, b ): Sets the render color of the entity.
     */
    SetRenderColor(r: number, g: number, b: number): void;
    /**
     * SetRenderMode( int ): Sets the render mode of the entity.
     */
    SetRenderMode(nMode: number): void;
    /**
     * SetSingleMeshGroup( string ): Set a single mesh group for this entity.
     */
    SetSingleMeshGroup(pMeshGroupName: string): void;
    SetSize(mins: Vec, maxs: Vec): void;
}
/**
 * The player entity.
 */
declare abstract class CBasePlayer extends CBaseCombatCharacter {
    /**
     * Returns whether this player's chaperone bounds are visible.
     */
    AreChaperoneBoundsVisible(): boolean;
    /**
     * Returns the HMD anchor entity for this player if it exists.
     */
    GetHMDAnchor(): any;
    /**
     * Returns the HMD Avatar entity for this player if it exists.
     */
    GetHMDAvatar(): any;
    /**
     * Returns the Vector position of the point you ask for. Pass 0-3 to get the four points.
     */
    GetPlayArea(nPoint: number): Vec;
    /**
     * Returns the player's user id.
     */
    GetUserID(): number;
    /**
     * Returns the type of controller being used while in VR.
     */
    GetVRControllerType(): any;
    /**
     * Returns true if the player is in noclip mode.
     */
    IsNoclipping(): boolean;
    /**
     * Returns true if the use key is pressed.
     */
    IsUsePressed(): boolean;
    /**
     * Returns true if the controller button is pressed.
     */
    IsVRControllerButtonPressed(nButton: number): boolean;
    /**
     * Returns true if the SteamVR dashboard is showing for this player.
     */
    IsVRDashboardShowing(): boolean;
    /**
     * Quit the game from script.
     */
    Quit(): void;
}
/**
 * Base Trigger for all the triggers
 */
declare abstract class CBaseTrigger extends CBaseEntity {
    /**
     * Disable's the trigger
     */
    Disable(): void;
    /**
     * Enable the trigger
     */
    Enable(): void;
    /**
     * Checks whether the passed entity is touching the trigger.
     */
    IsTouching(hEnt: CBaseEntity): boolean;
}
/**
 * Body Component Scriptdesc
 */
declare abstract class CBodyComponent {
    /**
     * Apply an impulse at a worldspace position to the physics
     */
    AddImpulseAtPosition(arg1: Vec, arg2: Vec): void;
    /**
     * Add linear and angular velocity to the physics object
     */
    AddVelocity(arg1: Vec, arg2: Vec): void;
    /**
     * Detach from its parent
     */
    DetachFromParent(): void;
    /**
     * Returns the active sequence
     */
    GetSequence(): any;
    /**
     * Is attached to parent
     */
    IsAttachedToParent(): boolean;
    /**
     * Returns a sequence id given a name
     */
    LookupSequence(arg1: string): any;
    /**
     * Returns the duration in seconds of the specified sequence
     */
    SequenceDuration(arg1: string): number;
    SetAngularVelocity(arg1: Vec): void;
    /**
     * Pass string for the animation to play on this model
     */
    SetAnimation(arg1: string): void;
    SetBodyGroup(arg1: string): void;
    SetMaterialGroup(arg1: string): void;
    SetVelocity(arg1: Vec): void;
}
/**
 * !Custom game event manager
 */
interface CCustomGameEventManager {
    /**
     * ( string EventName, func CallbackFunction ) - Register a callback to be called when a particular custom event arrives. Returns a listener ID that can be used to unregister later.
     */
    RegisterListener(eventName: string, handler: (userID: number, event: table) => void): CCustomGameEventListener;
    /**
     * ( string EventName, table EventData )
     */
    Send_ServerToAllClients(eventName: string, eventData: table): void;
    /**
     * ( Entity Player, string EventName, table EventData )
     */
    Send_ServerToPlayer(player: CDOTAPlayer, eventName: string, eventData: table): void;
    /**
     * ( int TeamNumber, string EventName, table EventData )
     */
    Send_ServerToTeam(team: DOTATeam_t, eventName: string, eventData: table): void;
    /**
     * ( int ListnerID ) - Unregister a specific listener
     */
    UnregisterListener(listener: CCustomGameEventListener): void;
}
declare const CustomGameEventManager: CCustomGameEventManager;

/**
 * !Custom network table manager
 */
interface CCustomNetTableManager {
    /**
     * ( string TableName, string KeyName )
     */
    GetTableValue(arg1: string, arg2: string): table;
    /**
     * ( string TableName, string KeyName, script_table Value )
     */
    SetTableValue(arg1: string, arg2: string, arg3: table): boolean;
}
declare const CustomNetTables: CCustomNetTableManager;

/**
 * An ability
 */
declare abstract class CDOTABaseAbility extends CBaseEntity {
    CanAbilityBeUpgraded(): boolean;
    CastAbility(): boolean;
    ContinueCasting(): boolean;
    CreateVisibilityNode(vLocation: Vec, fRadius: number, fDuration: number): void;
    DecrementModifierRefCount(): void;
    EndChannel(bInterrupted: boolean): void;
    /**
     * Clear the cooldown remaining on this ability.
     */
    EndCooldown(): void;
    GetAbilityDamage(): number;
    GetAbilityDamageType(): DAMAGE_TYPES;
    GetAbilityIndex(): number;
    /**
     * Gets the key values definition for this ability.
     */
    GetAbilityKeyValues(): table;
    /**
     * Returns the name of this ability.
     */
    GetAbilityName(): string;
    GetAbilityTargetFlags(): DOTA_UNIT_TARGET_FLAGS;
    GetAbilityTargetTeam(): DOTA_UNIT_TARGET_TEAM;
    GetAbilityTargetType(): DOTA_UNIT_TARGET_TYPE;
    GetAbilityType(): number;
    GetAnimationIgnoresModelScale(): boolean;
    GetAssociatedPrimaryAbilities(): string;
    GetAssociatedSecondaryAbilities(): string;
    GetAutoCastState(): boolean;
    GetBackswingTime(): number;
    GetBehavior(): number;
    GetCastPoint(): number;
    /**
     * Gets the cast range of the ability.
     */
    GetCastRange(vLocation: Vec, hTarget: CDOTA_BaseNPC): number;
    GetCaster(): CDOTA_BaseNPC;
    GetChannelStartTime(): number;
    GetChannelTime(): number;
    GetChannelledManaCostPerSecond(iLevel: number): number;
    GetCloneSource(): CDOTA_BaseNPC;
    GetConceptRecipientType(): number;
    /**
     * Get the cooldown duration for this ability at a given level, not the amount of cooldown actually left.
     */
    GetCooldown(iLevel: number): number;
    GetCooldownTime(): number;
    GetCooldownTimeRemaining(): number;
    GetCursorPosition(): Vec;
    GetCursorTarget(): CDOTA_BaseNPC;
    GetCursorTargetingNothing(): boolean;
    GetDuration(): number;
    GetGoldCost(iLevel: number): number;
    GetGoldCostForUpgrade(iLevel: number): number;
    GetHeroLevelRequiredToUpgrade(): number;
    GetIntrinsicModifierName(): string;
    /**
     * Get the current level of the ability.
     */
    GetLevel(): number;
    GetLevelSpecialValueFor(valueName: string, nLevel: number): number;
    GetManaCost(iLevel: number): number;
    GetMaxLevel(): number;
    GetModifierValue(): number;
    GetModifierValueBonus(): number;
    GetPlaybackRateOverride(): number;
    GetSharedCooldownName(): string;
    /**
     * Gets a value from this ability's special value block for its current level.
     */
    GetSpecialValueFor(valueName: string): number;
    GetStolenActivityModifier(): string;
    GetToggleState(): boolean;
    HeroXPChange(flXP: number): boolean;
    IncrementModifierRefCount(): void;
    IsActivated(): boolean;
    IsAttributeBonus(): boolean;
    /**
     * Returns whether the ability is currently channeling.
     */
    IsChanneling(): boolean;
    IsCooldownReady(): boolean;
    IsCosmetic(hEntity: CBaseEntity): boolean;
    /**
     * Returns whether the ability can be cast.
     */
    IsFullyCastable(): boolean;
    IsHidden(): boolean;
    IsHiddenWhenStolen(): boolean;
    /**
     * Returns whether the ability is currently casting.
     */
    IsInAbilityPhase(): boolean;
    IsItem(): this is CDOTA_Item;
    IsOwnersGoldEnough(nIssuerPlayerID: number): boolean;
    IsOwnersGoldEnoughForUpgrade(): boolean;
    IsOwnersManaEnough(): boolean;
    IsPassive(): boolean;
    IsRefreshable(): boolean;
    IsSharedWithTeammates(): boolean;
    IsStealable(): boolean;
    IsStolen(): boolean;
    IsToggle(): boolean;
    IsTrained(): boolean;
    /**
     * Mark the ability button for this ability as needing a refresh.
     */
    MarkAbilityButtonDirty(): void;
    NumModifiersUsingAbility(): number;
    OnAbilityPhaseInterrupted(): void;
    OnAbilityPhaseStart(): boolean;
    OnAbilityPinged(nPlayerID: number): void;
    OnChannelFinish(bInterrupted: boolean): void;
    OnChannelThink(flInterval: number): void;
    OnHeroCalculateStatBonus(): void;
    OnHeroLevelUp(): void;
    OnOwnerDied(): void;
    OnOwnerSpawned(): void;
    OnSpellStart(): void;
    OnToggle(): void;
    OnUpgrade(): void;
    PayGoldCost(): void;
    PayGoldCostForUpgrade(): void;
    PayManaCost(): void;
    PlaysDefaultAnimWhenStolen(): boolean;
    ProcsMagicStick(): boolean;
    RefCountsModifiers(): boolean;
    RefreshCharges(): void;
    RefundManaCost(): void;
    ResetToggleOnRespawn(): boolean;
    SetAbilityIndex(iIndex: number): void;
    SetActivated(bActivated: boolean): void;
    SetChanneling(bChanneling: boolean): void;
    SetFrozenCooldown(bFrozenCooldown: boolean): void;
    SetHidden(bHidden: boolean): void;
    SetInAbilityPhase(bInAbilityPhase: boolean): void;
    /**
     * Sets the level of this ability.
     */
    SetLevel(iLevel: number): void;
    SetOverrideCastPoint(flCastPoint: number): void;
    SetRefCountsModifiers(bRefCounts: boolean): void;
    SetStolen(bStolen: boolean): void;
    ShouldUseResources(): boolean;
    SpeakAbilityConcept(iConcept: number): void;
    SpeakTrigger(): any;
    StartCooldown(flCooldown: number): void;
    ToggleAbility(): void;
    ToggleAutoCast(): void;
    UpgradeAbility(bSupressSpeech: boolean): void;
    UseResources(bMana: boolean, bGold: boolean, bCooldown: boolean): void;
}

interface AbilityTuningEvent {
    value: number;
    entindex_ability_const: EntityID;
    value_name_const: string;
    entindex_caster_const: EntityID;
}

interface BountyRunePickupEvent {
    player_id_const: PlayerID;
    xp_bounty: number;
    gold_bounty: number;
}

interface DamageEvent {
    damagetype_const: DAMAGE_TYPES;
    damage: number;
    entindex_attacker_const: EntityID;
    entindex_victim_const: EntityID;
}

interface ExecuteOrderEvent {
    entindex_ability: EntityID;
    sequence_number_const: number;
    queue: boolean;
    units: {[index: string]: CDOTA_BaseNPC};
    entindex_target: EntityID;
    position_x: number;
    position_y: number;
    position_z: number;
    order_type: DotaUnitOrder_t;
    issuer_player_id_const: PlayerID;
}

interface HealingEvent {
    heal: number;
    entindex_target_const: EntityID;
}

interface ItemAddedToInventoryEvent {
    item_entindex_const: EntityID;
    inventory_parent_entindex_const: EntityID;
    suggested_slot: number;
    item_parent_entindex_const: EntityID;
}

interface ModifierGainedEvent {
    entindex_parent_const: EntityID;
    duration: number;
    name_const: string;
}

interface ModifyExperienceEvent {
    reason_const: EDOTA_ModifyXP_Reason;
    experience: number;
    player_id_const: PlayerID;
}

interface ModifyGoldEvent {
    reason_const: EDOTA_ModifyGold_Reason;
    reliable: boolean;
    player_id_const: PlayerID;
    gold: number;
}

interface RuneSpawnEvent {
    rune_type: DOTA_RUNES;
    spawner_entindex_const: EntityID;
}

interface TrackingProjectileEvent {
    is_attack: boolean;
    entindex_ability_const: EntityID;
    max_impact_time: number;
    entindex_target_const: EntityID;
    move_speed: number;
    entindex_source_const: EntityID;
    dodgeable: boolean;
    expire_tiem: number;
}

/**
 * Base game mode class
 */
declare abstract class CDOTABaseGameMode extends CBaseEntity {
    /**
     * Get if weather effects are disabled on the client.
     */
    AreWeatherEffectsDisabled(): boolean;
    /**
     * Clear the script filter that controls bounty rune pickup behavior.
     */
    ClearBountyRunePickupFilter(): void;
    /**
     * Clear the script filter that controls how a unit takes damage.
     */
    ClearDamageFilter(): void;
    /**
     * Clear the script filter that controls when a unit picks up an item.
     */
    ClearExecuteOrderFilter(): void;
    /**
     * Clear the script filter that controls how a unit heals.
     */
    ClearHealingFilter(): void;
    /**
     * Clear the script filter that controls the item added to inventory filter.
     */
    ClearItemAddedToInventoryFilter(): void;
    /**
     * Clear the script filter that controls the modifier filter.
     */
    ClearModifierGainedFilter(): void;
    /**
     * Clear the script filter that controls how hero experience is modified.
     */
    ClearModifyExperienceFilter(): void;
    /**
     * Clear the script filter that controls how hero gold is modified.
     */
    ClearModifyGoldFilter(): void;
    /**
     * Clear the script filter that controls what rune spawns.
     */
    ClearRuneSpawnFilter(): void;
    /**
     * Clear the script filter that controls when tracking projectiles are launched.
     */
    ClearTrackingProjectileFilter(): void;
    /**
     * Use to disable hud flip for this mod
     */
    DisableHudFlip(bDisable: boolean): void;
    /**
     * Show the player hero's inventory in the HUD, regardless of what unit is selected.
     */
    GetAlwaysShowPlayerInventory(): boolean;
    /**
     * Get whether player names are always shown, regardless of client setting.
     */
    GetAlwaysShowPlayerNames(): boolean;
    /**
     * Are in-game announcers disabled?
     */
    GetAnnouncerDisabled(): boolean;
    /**
     * Set a different camera distance; dota default is 1134.
     */
    GetCameraDistanceOverride(): number;
    /**
     * Get current derived stat value constant.
     */
    GetCustomAttributeDerivedStatValue(nDerivedStatType: AttributeDerivedStats): number;
    /**
     * Turns on capability to define custom buyback cooldowns.
     */
    GetCustomBuybackCooldownEnabled(): boolean;
    /**
     * Turns on capability to define custom buyback costs.
     */
    GetCustomBuybackCostEnabled(): boolean;
    /**
     * Allows definition of the max level heroes can achieve (default is 25).
     */
    GetCustomHeroMaxLevel(): number;
    /**
     * Gets the fixed respawn time.
     */
    GetFixedRespawnTime(): number;
    /**
     * Turn the fog of war on or off.
     */
    GetFogOfWarDisabled(): boolean;
    /**
     * Turn the sound when gold is acquired off/on.
     */
    GetGoldSoundDisabled(): boolean;
    /**
     * Returns the HUD element visibility.
     */
    GetHUDVisible(iElement: number): boolean;
    /**
     * Get the maximum attack speed for units.
     */
    GetMaximumAttackSpeed(): number;
    /**
     * Get the minimum attack speed for units.
     */
    GetMinimumAttackSpeed(): number;
    /**
     * Turn the panel for showing recommended items at the shop off/on.
     */
    GetRecommendedItemsDisabled(): boolean;
    /**
     * Returns the scale applied to non-fixed respawn times.
     */
    GetRespawnTimeScale(): number;
    /**
     * Turn purchasing items to the stash off/on. If purchasing to the stash is off the player must be at a shop to purchase items.
     */
    GetStashPurchasingDisabled(): boolean;
    /**
     * Hide the sticky item in the quickbuy.
     */
    GetStickyItemDisabled(): boolean;
    /**
     * Override the values of the team values on the top game bar.
     */
    GetTopBarTeamValuesOverride(): boolean;
    /**
     * Turning on/off the team values on the top game bar.
     */
    GetTopBarTeamValuesVisible(): boolean;
    /**
     * Gets whether tower backdoor protection is enabled or not.
     */
    GetTowerBackdoorProtectionEnabled(): boolean;
    /**
     * Are custom-defined XP values for hero level ups in use?
     */
    GetUseCustomHeroLevels(): boolean;
    /**
     * Enables or disables buyback completely.
     */
    IsBuybackEnabled(): boolean;
    /**
     * Is the day/night cycle disabled?
     */
    IsDaynightCycleDisabled(): boolean;
    /**
     * Set a filter function to control the tuning values that abilities use. (Modify the table and Return true to use new values, return false to use the old values)
     */
    SetAbilityTuningValueFilter<T>(filterFunc: (context: T, event: AbilityTuningEvent) => boolean, context: T): void;
    /**
     * Show the player hero's inventory in the HUD, regardless of what unit is selected.
     */
    SetAlwaysShowPlayerInventory(bAlwaysShow: boolean): void;
    /**
     * Set whether player names are always shown, regardless of client setting.
     */
    SetAlwaysShowPlayerNames(bEnabled: boolean): void;
    /**
     * Mutes the in-game announcer.
     */
    SetAnnouncerDisabled(bDisabled: boolean): void;
    /**
     * Enables/Disables bots in custom games. Note: this will only work with default heroes in the dota map.
     */
    SetBotThinkingEnabled(bEnabled: boolean): void;
    /**
     * Set if the bots should try their best to push with a human player.
     */
    SetBotsAlwaysPushWithHuman(bAlwaysPush: boolean): void;
    /**
     * Set if bots should enable their late game behavior.
     */
    SetBotsInLateGame(bLateGame: boolean): void;
    /**
     * Set the max tier of tower that bots want to push. (-1 to disable)
     */
    SetBotsMaxPushTier(nMaxTier: number): void;
    /**
     * Set a filter function to control the behavior when a bounty rune is picked up. (Modify the table and Return true to use new values, return false to cancel the event)
     */
    SetBountyRunePickupFilter<T>(filterFunc: (context: T, event: BountyRunePickupEvent) => boolean, context: T): void;
    /**
     * Enables or disables buyback completely.
     */
    SetBuybackEnabled(bEnabled: boolean): void;
    /**
     * Set a different camera distance; dota default is 1134.
     */
    SetCameraDistanceOverride(flCameraDistanceOverride: number): void;
    /**
     * Set a different camera smooth count; dota default is 8.
     */
    SetCameraSmoothCountOverride(nSmoothCount: number): void;
    /**
     * Modify derived stat value constants. ( AttributeDerivedStat eStatType, float flNewValue.
     */
    SetCustomAttributeDerivedStatValue(nStatType: AttributeDerivedStats, flNewValue: number): void;
    /**
     * Turns on capability to define custom buyback cooldowns.
     */
    SetCustomBuybackCooldownEnabled(bEnabled: boolean): void;
    /**
     * Turns on capability to define custom buyback costs.
     */
    SetCustomBuybackCostEnabled(bEnabled: boolean): void;
    /**
     * Force all players to use the specified hero and disable the normal hero selection process. Must be used before hero selection.
     */
    SetCustomGameForceHero(pHeroName: string): void;
    /**
     * Allows definition of the max level heroes can achieve (default is 25).
     */
    SetCustomHeroMaxLevel(iMaxLevel: number): void;
    /**
     * Set the effect used as a custom weather effect, when units are on non-default terrain, in this mode.
     */
    SetCustomTerrainWeatherEffect(pszEffectName: string): void;
    /**
     * Allows definition of a table of hero XP values.
     */
    SetCustomXPRequiredToReachNextLevel(hTable: table): void;
    /**
     * Set a filter function to control the behavior when a unit takes damage. (Modify the table and Return true to use new values, return false to cancel the event)
     */
    SetDamageFilter<T>(filterFunc: (context: T, event: DamageEvent) => boolean, context: T): void;
    /**
     * Enable or disable the day/night cycle.
     */
    SetDaynightCycleDisabled(bDisable: boolean): void;
    /**
     * Specify whether the full screen death overlay effect plays when the selected hero dies.
     */
    SetDeathOverlayDisabled(bDisabled: boolean): void;
    /**
     * Set a filter function to control the behavior when a unit picks up an item. (Modify the table and Return true to use new values, return false to cancel the event)
     */
    SetExecuteOrderFilter<T>(filterFunc: (context: T, order: ExecuteOrderEvent) => boolean, context: T): void;
    /**
     * Set a fixed delay for all players to respawn after.
     */
    SetFixedRespawnTime(flFixedRespawnTime: number): void;
    /**
     * Turn the fog of war on or off.
     */
    SetFogOfWarDisabled(bDisabled: boolean): void;
    /**
     * Set the constant rate that the fountain will regen mana. (-1 for default)
     */
    SetFountainConstantManaRegen(flConstantManaRegen: number): void;
    /**
     * Set the percentage rate that the fountain will regen health. (-1 for default)
     */
    SetFountainPercentageHealthRegen(flPercentageHealthRegen: number): void;
    /**
     * Set the percentage rate that the fountain will regen mana. (-1 for default)
     */
    SetFountainPercentageManaRegen(flPercentageManaRegen: number): void;
    /**
     * Allows clicks on friendly buildings to be handled normally.
     */
    SetFriendlyBuildingMoveToEnabled(bEnabled: boolean): void;
    /**
     * Turn the sound when gold is acquired off/on.
     */
    SetGoldSoundDisabled(bDisabled: boolean): void;
    /**
     * Set the HUD element visibility.
     */
    SetHUDVisible(iHUDElement: DOTAHUDVisibility_t, bVisible: boolean): void;
    /**
     * Set a filter function to control the behavior when a unit heals. (Modify the table and Return true to use new values, return false to cancel the event)
     */
    SetHealingFilter<T>(filterFunc: (context: T, event: HealingEvent) => boolean, context: T): void;
    /**
     * Specify whether the default combat events will show in the HUD.
     */
    SetHudCombatEventsDisabled(bDisabled: boolean): void;
    /**
     * Set a filter function to control what happens to items that are added to an inventory, return false to cancel the event
     */
    SetItemAddedToInventoryFilter<T>(filterFunc: (context: T, event: ItemAddedToInventoryEvent) => boolean, context: T): void;
    /**
     * Mutes the in-game killing spree announcer.
     */
    SetKillingSpreeAnnouncerDisabled(bDisabled: boolean): void;
    /**
     * Use to disable gold loss on death.
     */
    SetLoseGoldOnDeath(bEnabled: boolean): void;
    /**
     * Set the maximum attack speed for units.
     */
    SetMaximumAttackSpeed(nMaxSpeed: number): void;
    /**
     * Set the minimum attack speed for units.
     */
    SetMinimumAttackSpeed(nMinSpeed: number): void;
    /**
     * Set a filter function to control modifiers that are gained, return false to destroy modifier.
     */
    SetModifierGainedFilter<T>(filterFunc: (context: T, event: ModifierGainedEvent) => boolean, context: T): void;
    /**
     * Set a filter function to control the behavior when a hero's experience is modified. (Modify the table and Return true to use new values, return false to cancel the event)
     */
    SetModifyExperienceFilter<T>(filterFunc: (context: T, event: ModifyExperienceEvent) => boolean, context: T): void;
    /**
     * Set a filter function to control the behavior when a hero's gold is modified. (Modify the table and Return true to use new values, return false to cancel the event)
     */
    SetModifyGoldFilter<T>(filterFunc: (context: T, event: ModifyGoldEvent) => boolean, context: T): void;
    /**
     * Set an override for the default selection entity, instead of each player's hero.
     */
    SetOverrideSelectionEntity(hOverrideEntity: CDOTA_BaseNPC): void;
    /**
     * Turn the panel for showing recommended items at the shop off/on.
     */
    SetRecommendedItemsDisabled(bDisabled: boolean): void;
    /**
     * Make it so illusions are immediately removed upon death, rather than sticking around for a few seconds.
     */
    SetRemoveIllusionsOnDeath(bRemove: boolean): void;
    /**
     * Sets the scale applied to non-fixed respawn times. 1 = default DOTA respawn calculations.
     */
    SetRespawnTimeScale(flValue: number): void;
    /**
     * Set if a given type of rune is enabled.
     */
    SetRuneEnabled(nRune: DOTA_RUNES, bEnabled: boolean): void;
    /**
     * Set a filter function to control what rune spawns. (Modify the table and Return true to use new values, return false to cancel the event)
     */
    SetRuneSpawnFilter<T>(filterFunc: (context: T, event: RuneSpawnEvent) => boolean, context: T): void;
    /**
     * Enable/disable gold penalty for late picking.
     */
    SetSelectionGoldPenaltyEnabled(bEnabled: boolean): void;
    /**
     * Turn purchasing items to the stash off/on. If purchasing to the stash is off the player must be at a shop to purchase items.
     */
    SetStashPurchasingDisabled(bDisabled: boolean): void;
    /**
     * Hide the sticky item in the quickbuy.
     */
    SetStickyItemDisabled(bDisabled: boolean): void;
    /**
     * Set the team values on the top game bar.
     */
    SetTopBarTeamValue(iTeam: DOTATeam_t, nValue: number): void;
    /**
     * Override the values of the team values on the top game bar.
     */
    SetTopBarTeamValuesOverride(bOverride: boolean): void;
    /**
     * Turning on/off the team values on the top game bar.
     */
    SetTopBarTeamValuesVisible(bVisible: boolean): void;
    /**
     * Enables/Disables tower backdoor protection.
     */
    SetTowerBackdoorProtectionEnabled(bEnabled: boolean): void;
    /**
     * Set a filter function to control when tracking projectiles are launched. (Modify the table and Return true to use new values, return false to cancel the event)
     */
    SetTrackingProjectileFilter<T>(filterFunc: (context: T, event: TrackingProjectileEvent) => boolean, context: T): void;
    /**
     * Enable or disable unseen fog of war. When enabled parts of the map the player has never seen will be completely hidden by fog of war.
     */
    SetUnseenFogOfWarEnabled(bEnabled: boolean): void;
    /**
     * Turn on custom-defined XP values for hero level ups.  The table should be defined before switching this on.
     */
    SetUseCustomHeroLevels(bEnabled: boolean): void;
    /**
     * Set if weather effects are disabled.
     */
    SetWeatherEffectsDisabled(bDisable: boolean): void;
}
/**
 * !The Dota game manager
 */
interface CDOTAGameManager {
    /**
     * Get the hero unit
     */
    GetHeroDataByName_Script(arg1: string): any;
    /**
     * Get the hero ID given the hero name.
     */
    GetHeroIDByName(arg1: string): number;
    /**
     * Get the hero name given a hero ID.
     */
    GetHeroNameByID(arg1: number): string;
    /**
     * Get the hero name given a unit name.
     */
    GetHeroNameForUnitName(arg1: string): string;
    /**
     * Get the hero unit name given the hero ID.
     */
    GetHeroUnitNameByID(arg1: number): string;
}
/**
 * !DOTA GameRules
 */
interface CDOTAGamerules {
    /**
     * Event-only ( string szNameSuffix, int nStars, int nMaxStars, int nExtraData1, int nExtraData2 )
     */
    AddEventMetadataLeaderboardEntry(arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): boolean;
    /**
     * Add a point on the minimap.
     */
    AddMinimapDebugPoint(arg1: number, arg2: Vec, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    /**
     * Add a point on the minimap for a specific team.
     */
    AddMinimapDebugPointForTeam(arg1: number, arg2: Vec, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
    /**
     * Begin night stalker night.
     */
    BeginNightstalkerNight(duration: number): void;
    /**
     * Begin temporary night.
     */
    BeginTemporaryNight(duration: number): void;
    /**
     * Kills the ancient, etc.
     */
    Defeated(): void;
    /**
     * true when we have waited some time after end of the game and not received signout
     */
    DidMatchSignoutTimeOut(): boolean;
    /**
     * Enabled (true) or disable (false) auto launch for custom game setup.
     */
    EnableCustomGameSetupAutoLaunch(enabled: boolean): void;
    /**
     * Indicate that the custom game setup phase is complete, and advance to the game.
     */
    FinishCustomGameSetup(): void;
    /**
     * Returns the difficulty level of the custom game mode
     */
    GetCustomGameDifficulty(): number;
    /**
     * Get whether a team is selectable during game setup
     */
    GetCustomGameTeamMaxPlayers(team: DOTATeam_t): number;
    /**
     * (b IncludePregameTime b IncludeNegativeTime) Returns the actual DOTA in-game clock time.
     */
    GetDOTATime(includePreGame: boolean, includeNegativeTime: boolean): number;
    /**
     * Returns difficulty level of the custom game mode
     */
    GetDifficulty(): number;
    /**
     * Gets the Xth dropped item
     */
    GetDroppedItem(index: number): CDOTA_Item;
    /**
     * Returns the number of seconds elapsed since the last frame was renderered. This time doesn't count up when the game is paused
     */
    GetGameFrameTime(): number;
    /**
     * Get the game mode entity
     */
    GetGameModeEntity(): CDOTABaseGameMode;
    /**
     * Get a string value from the game session config (map options)
     */
    GetGameSessionConfigValue(arg1: string, arg2: string): string;
    /**
     * Returns the number of seconds elapsed since map start. This time doesn't count up when the game is paused
     */
    GetGameTime(): number;
    /**
     * Get the MatchID for this game.
     */
    GetMatchID(): number;
    /**
     * Have we received the post match signout message that includes reward information
     */
    GetMatchSignoutComplete(): boolean;
    /**
     * For New Bloom, get total damage taken by the Nian / Year Beast
     */
    GetNianTotalDamageTaken(): number;
    /**
     * (Preview/Unreleased) Gets the player's custom game account record, as it looked at the start of this session
     */
    GetPlayerCustomGameAccountRecord(arg1: number): table;
    /**
     * Get the time of day
     */
    GetTimeOfDay(): number;
    /**
     * Are cheats enabled on the server
     */
    IsCheatMode(): boolean;
    /**
     * Is it day time?
     */
    IsDaytime(): boolean;
    /**
     * Returns whether the game is paused.
     */
    IsGamePaused(): boolean;
    /**
     * Returns whether hero respawn is enabled.
     */
    IsHeroRespawnEnabled(): boolean;
    /**
     * Is it night stalker night-time?
     */
    IsNightstalkerNight(): boolean;
    /**
     * Is it temporarily night-time?
     */
    IsTemporaryNight(): boolean;
    /**
     * Lock (true) or unlock (false) team assignemnt. If team assignment is locked players cannot change teams.
     */
    LockCustomGameSetupTeamAssignment(locked: boolean): void;
    /**
     * Makes the specified team lose
     */
    MakeTeamLose(team: DOTATeam_t): void;
    /**
     * Returns the number of items currently dropped on the ground
     */
    NumDroppedItems(): number;
    /**
     * Whether a player has custom game host privileges (shuffle teams, etc.)
     */
    PlayerHasCustomGameHostPrivileges(player: CDOTAPlayer): boolean;
    /**
     * Updates custom hero, unit and ability KeyValues in memory with the latest values from disk
     */
    Playtesting_UpdateAddOnKeyValues(): void;
    /**
     * Restart after killing the ancient, etc.
     */
    ResetDefeated(): void;
    /**
     * Restart the game at hero selection
     */
    ResetToHeroSelection(): void;
    /**
     * Sends a message on behalf of a player.
     */
    SendCustomMessage(arg1: string, arg2: number, arg3: number): void;
    /**
     * Sends a message on behalf of a player to the specified team.
     */
    SendCustomMessageToTeam(arg1: string, arg2: number, arg3: number, arg4: number): void;
    /**
     * (flMinimapCreepIconScale) - Scale the creep icons on the minimap.
     */
    SetCreepMinimapIconScale(scale: number): void;
    /**
     * (Preview/Unreleased) Sets a callback to handle saving custom game account records (callback is passed a Player ID and should return a flat simple table)
     */
    SetCustomGameAccountRecordSaveFunction(arg1: any, arg2: any): void;
    /**
     * Sets a flag to enable/disable the default music handling code for custom games
     */
    SetCustomGameAllowBattleMusic(allow: boolean): void;
    /**
     * Sets a flag to enable/disable the default music handling code for custom games
     */
    SetCustomGameAllowHeroPickMusic(allow: boolean): void;
    /**
     * Sets a flag to enable/disable the default music handling code for custom games
     */
    SetCustomGameAllowMusicAtGameStart(allow: boolean): void;
    /**
     * Set the difficulty level of the custom game mode
     */
    SetCustomGameDifficulty(difficulty: number): void;
    /**
     * Sets the game end delay.
     */
    SetCustomGameEndDelay(delay: number): void;
    /**
     * Set the amount of time to wait for auto launch.
     */
    SetCustomGameSetupAutoLaunchDelay(delay: number): void;
    /**
     * Set the amount of remaining time, in seconds, for custom game setup. 0 = finish immediately, -1 = wait forever
     */
    SetCustomGameSetupRemainingTime(remainingTime: number): void;
    /**
     * Setup (pre-gameplay) phase timeout. 0 = instant, -1 = forever (until FinishCustomGameSetup is called)
     */
    SetCustomGameSetupTimeout(timeout: number): void;
    /**
     * Set whether a team is selectable during game setup
     */
    SetCustomGameTeamMaxPlayers(team: DOTATeam_t, maxPlayers: number): void;
    /**
     * Sets the victory message.
     */
    SetCustomVictoryMessage(message: string): void;
    /**
     * Sets the victory message duration.
     */
    SetCustomVictoryMessageDuration(duration: number): void;
    /**
     * Event-only ( table hMetadataTable )
     */
    SetEventMetadataCustomTable(arg1: table): boolean;
    /**
     * Event-only ( table hMetadataTable )
     */
    SetEventSignoutCustomTable(arg1: table): boolean;
    /**
     * Sets whether First Blood has been triggered.
     */
    SetFirstBloodActive(active: boolean): void;
    /**
     * Makes the specified team win
     */
    SetGameWinner(team: DOTATeam_t): void;
    /**
     * Set the auto gold increase per timed interval.
     */
    SetGoldPerTick(amount: number): void;
    /**
     * Set the time interval between auto gold increases.
     */
    SetGoldTickTime(time: number): void;
    /**
     * (flMinimapHeroIconScale) - Scale the hero minimap icons on the minimap.
     */
    SetHeroMinimapIconScale(scale: number): void;
    /**
     * Control if the normal DOTA hero respawn rules apply.
     */
    SetHeroRespawnEnabled(enabled: boolean): void;
    /**
     * Sets the amount of time players have to pick their hero.
     */
    SetHeroSelectionTime(selectionTime: number): void;
    /**
     * Sets whether the multikill, streak, and first-blood banners appear at the top of the screen.
     */
    SetHideKillMessageHeaders(hideHeaders: boolean): void;
    /**
     * Show this unit's health on the overlay health bar
     */
    SetOverlayHealthBarUnit(unit: CDOTA_BaseNPC, style: number): void;
    /**
     * Sets the amount of time players have between the game ending and the server disconnecting them.
     */
    SetPostGameTime(time: number): void;
    /**
     * Sets the amount of time players have between picking their hero and game start.
     */
    SetPreGameTime(time: number): void;
    /**
     * (flMinimapRuneIconScale) - Scale the rune icons on the minimap.
     */
    SetRuneMinimapIconScale(flMinimapRuneIconScale: number): void;
    /**
     * Sets the amount of time between rune spawns.
     */
    SetRuneSpawnTime(time: number): void;
    /**
     * (bSafeToLeave) - Mark this game as safe to leave.
     */
    SetSafeToLeave(bSafeToLeave: boolean): void;
    /**
     * When true, players can repeatedly pick the same hero.
     */
    SetSameHeroSelectionEnabled(enabled: boolean): void;
    /**
     * Sets the amount of time players have between the strategy phase and entering the pre-game phase.
     */
    SetShowcaseTime(time: number): void;
    /**
     * Set the starting gold amount.
     */
    SetStartingGold(amount: number): void;
    /**
     * Sets the amount of time players have between the hero selection and entering the showcase phase.
     */
    SetStrategyTime(time: number): void;
    /**
     * Set the time of day.
     */
    SetTimeOfDay(time: number): void;
    /**
     * Sets the tree regrow time in seconds.
     */
    SetTreeRegrowTime(time: number): void;
    /**
     * Heroes will use the basic NPC functionality for determining their bounty, rather than DOTA specific formulas.
     */
    SetUseBaseGoldBountyOnHeroes(useBaseGoldBounties: boolean): void;
    /**
     * Allows heroes in the map to give a specific amount of XP (this value must be set).
     */
    SetUseCustomHeroXPValues(useCustomXPValues: boolean): void;
    /**
     * When true, all items are available at as long as any shop is in range.
     */
    SetUseUniversalShopMode(useUniversalShopMode: boolean): void;
    /**
     * Get the current Gamerules state
     */
    State_Get(): DOTA_GameState;
}
declare const GameRules: CDOTAGamerules;

/**
 * dota_player
 */
declare abstract class CDOTAPlayer extends CBaseAnimating {
    /**
     * Get the player's hero.
     */
    GetAssignedHero(): CDOTA_BaseNPC_Hero;
    /**
     * Get the player's official PlayerID; notably is -1 when the player isn't yet on a team.
     */
    GetPlayerID(): number;
    /**
     * Randoms this player's hero.
     */
    MakeRandomHeroSelection(): void;
    /**
     * Set the kill cam unit for this hero.
     */
    SetKillCamUnit(hEntity: CDOTA_BaseNPC): void;
    /**
     * (nMusicStatus, flIntensity) - Set the music status for this player, note this will only really apply if dota_music_battle_enable is off.
     */
    SetMusicStatus(nMusicStatus: number, flIntensity: number): void;
}

/**
 * !DOTA Tutorial
 */
interface CDOTATutorial {
    /**
     * Add a computer controlled bot.
     */
    AddBot(heroName: string, unknown1: string, unknown2: string, unknown3: boolean): boolean;
    /**
     * Add a quest to the quest log
     */
    AddQuest(arg1: string, arg2: number, arg3: string, arg4: string): void;
    /**
     * Add an item to the shop whitelist.
     */
    AddShopWhitelistItem(itemName: string): void;
    /**
     * Complete a quest,
     */
    CompleteQuest(arg1: string): void;
    /**
     * Add a task to move to a specific location
     */
    CreateLocationTask(arg1: Vec): void;
    /**
     * Alert the player when a creep becomes agro to their hero.
     */
    EnableCreepAggroViz(arg1: boolean): void;
    /**
     * Enable the tip to alert players how to find their hero.
     */
    EnablePlayerOffscreenTip(arg1: boolean): void;
    /**
     * Alert the player when a tower becomes agro to their hero.
     */
    EnableTowerAggroViz(arg1: boolean): void;
    /**
     * End the tutorial.
     */
    FinishTutorial(): void;
    /**
     * Force the start of the game.
     */
    ForceGameStart(): void;
    /**
     * Is our time frozen?
     */
    GetTimeFrozen(): boolean;
    /**
     * Is this item currently in the white list.
     */
    IsItemInWhiteList(itemName: string): boolean;
    /**
     * Remove an item from the shop whitelist.
     */
    RemoveShopWhitelistItem(itemName: string): void;
    /**
     * Select a hero for the local player
     */
    SelectHero(heroName: string): void;
    /**
     * Select the team for the local player
     */
    SelectPlayerTeam(arg1: string): void;
    /**
     * Set the current item guide.
     */
    SetItemGuide(arg1: string): void;
    /**
     * Set gold amount for the tutorial player. (int) GoldAmount, (bool) true=Set, false=Modify
     */
    SetOrModifyPlayerGold(goldAmount: number, setNotModify: boolean): void;
    /**
     * Set players quick buy item.
     */
    SetQuickBuy(itemName: string): void;
    /**
     * Set the shop open or closed.
     */
    SetShopOpen(open: boolean): void;
    /**
     * Set if we should freeze time or not.
     */
    SetTimeFrozen(timeFrozen: boolean): void;
    /**
     * Set a tutorial convar
     */
    SetTutorialConvar(arg1: string, arg2: string): void;
    /**
     * Set the UI to use a reduced version to focus attention to specific elements.
     */
    SetTutorialUI(arg1: number): void;
    /**
     * Set if we should whitelist shop items.
     */
    SetWhiteListEnabled(whitelistEnabled: boolean): void;
    /**
     * Initialize Tutorial Mode
     */
    StartTutorialMode(): void;
    /**
     * Upgrade a specific ability for the local hero
     */
    UpgradePlayerAbility(abilityName: string): void;
}
declare const Tutorial: CDOTATutorial;

/**
 * A Dota NPC Unit
 */
declare abstract class CDOTA_Ability_Animation_Attack extends CDOTABaseAbility {
    /**
     * Override playbackrate
     */
    SetPlaybackRate(flRate: number): void;
}
/**
 * A Dota NPC Unit.
 */
declare abstract class CDOTA_Ability_Animation_TailSpin extends CDOTABaseAbility {
    /**
     * Override playbackrate
     */
    SetPlaybackRate(flRate: number): void;
}
/**
 * A data driven ability.
 */
declare abstract class CDOTA_Ability_DataDriven extends CDOTABaseAbility {
    /**
     * Applies a data driven modifier to the target
     */
    ApplyDataDrivenModifier(caster: CDOTA_BaseNPC, target: CDOTA_BaseNPC, modifier_name: string, modifier_table: table): CDOTA_Buff;
    /**
     * Applies a data driven thinker at the location
     */
    ApplyDataDrivenThinker(hCaster: CDOTA_BaseNPC, vLocation: Vec, pszModifierName: string, hModifierTable: table): table;
}

/** !NoClassOr */
/** !PureAbstract */
declare abstract class CDOTA_Ability_Lua extends CDOTABaseAbility {
    /**
     * Determine whether an issued command with no target is valid.
     */
    CastFilterResult(): UnitFilterResult;
    /**
     * (Vector vLocation) Determine whether an issued command on a location is valid.
     */
    CastFilterResultLocation(vLocation: Vec): UnitFilterResult;
    /**
     * (HSCRIPT hTarget) Determine whether an issued command on a target is valid.
     */
    CastFilterResultTarget(hTarget: CDOTA_BaseNPC): UnitFilterResult;
    /**
     * Returns abilities that are stolen simultaneously, or otherwise related in functionality.
     */
    GetAssociatedPrimaryAbilities(): string;
    /**
     * Returns other abilities that are stolen simultaneously, or otherwise related in functionality.  Generally hidden abilities.
     */
    GetAssociatedSecondaryAbilities(): string;
    /**
     * Return cast behavior type of this ability.
     */
    GetBehavior(): DOTA_ABILITY_BEHAVIOR;
    /**
     * Return casting animation of this ability.
     */
    GetCastAnimation(): GameActivity_t;
    /**
     * Return cast point of this ability.
     */
    GetCastPoint(): number;
    /**
     * Return cast range of this ability.
     */
    GetCastRange(vLocation: Vec, hTarget: CDOTA_BaseNPC): number;
    /**
     * Return channel animation of this ability.
     */
    GetChannelAnimation(): GameActivity_t;
    /**
     * Return the channel time of this ability.
     */
    GetChannelTime(): number;
    /**
     * Return mana cost at the given level per second while channeling (-1 is current).
     */
    GetChannelledManaCostPerSecond(iLevel: number): number;
    /**
     * Return who hears speech when this spell is cast.
     */
    GetConceptRecipientType(): number;
    /**
     * Return cooldown of this ability.
     */
    GetCooldown(iLevel: number): number;
    /**
     * Return the error string of a failed command with no target.
     */
    GetCustomCastError(): string;
    /**
     * (Vector vLocation) Return the error string of a failed command on a location.
     */
    GetCustomCastErrorLocation(vLocation: Vec): string;
    /**
     * (HSCRIPT hTarget) Return the error string of a failed command on a target.
     */
    GetCustomCastErrorTarget(hTarget: CDOTA_BaseNPC): string;
    /**
     * Return gold cost at the given level (-1 is current).
     */
    GetGoldCost(iLevel: number): number;
    /**
     * Returns the name of the modifier applied passively by this ability.
     */
    GetIntrinsicModifierName(): string;
    /**
     * Return mana cost at the given level (-1 is current).
     */
    GetManaCost(iLevel: number): number;
    /**
     * Return the animation rate of the cast animation.
     */
    GetPlaybackRateOverride(): number;
    /**
     * Returns true if this ability can be used when not on the action panel.
     */
    IsHiddenAbilityCastable(): boolean;
    /**
     * Returns true if this ability is hidden when stolen by Spell Steal.
     */
    IsHiddenWhenStolen(): boolean;
    /**
     * Returns true if this ability is refreshed by Refresher Orb.
     */
    IsRefreshable(): boolean;
    /**
     * Returns true if this ability can be stolen by Spell Steal.
     */
    IsStealable(): boolean;
    /**
     * Cast time did not complete successfully.
     */
    OnAbilityPhaseInterrupted(): void;
    /**
     * Cast time begins (return true for successful cast).
     */
    OnAbilityPhaseStart(): boolean;
    /**
     * (bool bInterrupted) Channel finished.
     */
    OnChannelFinish(bInterrupted: boolean): void;
    /**
     * (float flInterval) Channeling is taking place.
     */
    OnChannelThink(flInterval: number): void;
    /**
     * Caster (hero only) gained a level, skilled an ability, or received a new stat bonus.
     */
    OnHeroCalculateStatBonus(): void;
    /**
     * A hero has died in the vicinity (ie Urn), takes table of params.
     */
    OnHeroDiedNearby(unit: CDOTA_BaseNPC, attacker: CDOTA_BaseNPC, event: table): void;
    /**
     * Caster gained a level.
     */
    OnHeroLevelUp(): void;
    /**
     * Caster inventory changed.
     */
    OnInventoryContentsChanged(): void;
    /**
     * ( HSCRIPT hItem ) Caster equipped item.
     */
    OnItemEquipped(hItem: CDOTA_Item): void;
    /**
     * Caster died.
     */
    OnOwnerDied(): void;
    /**
     * Caster respawned or spawned for the first time.
     */
    OnOwnerSpawned(): void;
    /**
     * (HSCRIPT hTarget, Vector vLocation) Projectile has collided with a given target or reached its destination (target is invalid).
     */
    OnProjectileHit(hTarget: CDOTA_BaseNPC, vLocation: Vec): boolean;
    /**
     * (HSCRIPT hTarget, Vector vLocation, int nHandle) Projectile has collided with a given target or reached its destination (target is invalid).
     */
    OnProjectileHitHandle(hTarget: CDOTA_BaseNPC, vLocation: Vec, iProjectileHandle: ProjectileID): boolean;
    /**
     * (HSCRIPT hTarget, Vector vLocation, table kv) Projectile has collided with a given target or reached its destination (target is invalid).
     */
    OnProjectileHit_ExtraData(hTarget: CDOTA_BaseNPC, vLocation: Vec, data: table): boolean;
    /**
     * (Vector vLocation) Projectile is actively moving.
     */
    OnProjectileThink(vLocation: Vec): void;
    /**
     * (int nProjectileHandle) Projectile is actively moving.
     */
    OnProjectileThinkHandle(iProjectileHandle: ProjectileID): void;
    /**
     * (Vector vLocation, table kv ) Projectile is actively moving.
     */
    OnProjectileThink_ExtraData(vLocation: Vec, data: table): void;
    /**
     * Cast time finished, spell effects begin.
     */
    OnSpellStart(): void;
    /**
     * ( HSCRIPT hAbility ) Special behavior when stolen by Spell Steal.
     */
    OnStolen(hSourceAbility: CDOTABaseAbility): void;
    /**
     * Ability is toggled on/off.
     */
    OnToggle(): void;
    /**
     * Special behavior when lost by Spell Steal.
     */
    OnUnStolen(): void;
    /**
     * Ability gained a level.
     */
    OnUpgrade(): void;
    /**
     * Returns true if this ability will generate magic stick charges for nearby enemies.
     */
    ProcsMagicStick(): boolean;
    /**
     * Return the type of speech used.
     */
    SpeakTrigger(): number;
}

/**
 * A Dota NPC Unit
 */
declare abstract class CDOTA_BaseNPC extends CBaseFlex {
    /**
     * Add an ability to this unit by name.
     */
    AddAbility(ability_name: string): CDOTABaseAbility;
    /**
     * Add an item to this unit's inventory.
     */
    AddItem(item_to_add: CDOTA_Item): CDOTA_Item;
    /**
     * Add an item to this unit's inventory.
     */
    AddItemByName(item_name: string): CDOTA_Item;
    /**
     * Add a modifier to this unit.
     */
    AddNewModifier(caster: CDOTA_BaseNPC | null | undefined, source_ability: CDOTABaseAbility | null | undefined, modifier_name: string, modifier_table: table): CDOTA_Buff;
    /**
     * Adds the no draw flag.
     */
    AddNoDraw(): void;
    /**
     * Add a speech bubble(1-4 live at a time) to this NPC.
     */
    AddSpeechBubble(iBubble: number, pszSpeech: string, flDuration: number, unOffsetX: number, unOffsetY: number): void;
    AlertNearbyUnits(hAttacker: CDOTA_BaseNPC, hAbility: CDOTABaseAbility): void;
    AngerNearbyUnits(): void;
    AttackNoEarlierThan(flTime: number): void;
    AttackReady(): boolean;
    BoundingRadius2D(): number;
    /**
     * Check FoW to see if an entity is visible.
     */
    CanEntityBeSeenByMyTeam(hEntity: CDOTA_BaseNPC): boolean;
    /**
     * Query if this unit can sell items.
     */
    CanSellItems(): boolean;
    /**
     * Cast an ability immediately.
     */
    CastAbilityImmediately(hAbility: CDOTABaseAbility, iPlayerIndex: number): void;
    /**
     * Cast an ability with no target.
     */
    CastAbilityNoTarget(hAbility: CDOTABaseAbility, iPlayerIndex: number): void;
    /**
     * Cast an ability on a position.
     */
    CastAbilityOnPosition(vPosition: Vec, hAbility: CDOTABaseAbility, iPlayerIndex: number): void;
    /**
     * Cast an ability on a target entity.
     */
    CastAbilityOnTarget(hTarget: CDOTA_BaseNPC, hAbility: CDOTABaseAbility, iPlayerIndex: number): void;
    /**
     * Toggle an ability.
     */
    CastAbilityToggle(hAbility: CDOTABaseAbility, iPlayerIndex: number): void;
    DestroyAllSpeechBubbles(): void;
    /**
     * Disassemble the passed item in this unit's inventory.
     */
    DisassembleItem(hItem: CDOTA_Item): void;
    /**
     * Drop an item at a given point.
     */
    DropItemAtPosition(vDest: Vec, hItem: CDOTA_Item): void;
    /**
     * Immediately drop a carried item at a given position.
     */
    DropItemAtPositionImmediate(hItem: CDOTA_Item, vPosition: Vec): void;
    /**
     * Drops the selected item out of this unit's stash.
     */
    EjectItemFromStash(hItem: CDOTA_Item): void;
    /**
     * This unit will be set to face the target point.
     */
    FaceTowards(vTarget: Vec): void;
    /**
     * Fade and remove the given gesture activity.
     */
    FadeGesture(nActivity: GameActivity_t): void;
    /**
     * Retrieve an ability by name from the unit.
     */
    FindAbilityByName(ability_name: string): CDOTABaseAbility;
    /**
     * Returns a table of all of the modifiers on the NPC.
     */
    FindAllModifiers(): CDOTA_Buff[];
    /**
     * Returns a table of all of the modifiers on the NPC with the passed name (modifierName)
     */
    FindAllModifiersByName(name: string): CDOTA_Buff[];
    /**
     * Get handle to first item in inventory, else nil.
     */
    FindItemInInventory(item_name: string): CDOTA_Item;
    /**
     * Return a handle to the modifier of the given name if found, else nil (string Name )
     */
    FindModifierByName(modifier_name: string): CDOTA_Buff;
    /**
     * Return a handle to the modifier of the given name from the passed caster if found, else nil ( string Name, hCaster )
     */
    FindModifierByNameAndCaster(modifier_name: string, caster: CDOTA_BaseNPC): CDOTA_Buff;
    /**
     * Kill this unit immediately.
     */
    ForceKill(bReincarnate: boolean): void;
    /**
     * Play an activity once, and then go back to idle.
     */
    ForcePlayActivityOnce(nActivity: GameActivity_t): void;
    /**
     * Retrieve an ability by index from the unit.
     */
    GetAbilityByIndex(ability_index: number): CDOTABaseAbility;
    GetAbilityCount(): number;
    /**
     * Gets the range at which this unit will auto-acquire.
     */
    GetAcquisitionRange(): number;
    /**
     * Combat involving this creature will have this weight added to the music calcuations.
     */
    GetAdditionalBattleMusicWeight(): number;
    /**
     * Returns this unit's aggro target.
     */
    GetAggroTarget(): CDOTA_BaseNPC;
    GetAttackAnimationPoint(): number;
    GetAttackCapability(): DOTAUnitAttackCapability_t;
    /**
     * Returns a random integer between the minimum and maximum base damage of the unit.
     */
    GetAttackDamage(): number;
    /**
     * Gets this unit's attack range after all modifiers.
     */
    GetAttackRange(): number;
    /**
     * Gets the attack range buffer.
     */
    GetAttackRangeBuffer(): number;
    GetAttackSpeed(): number;
    GetAttackTarget(): CDOTA_BaseNPC;
    GetAttacksPerSecond(): number;
    /**
     * Returns the average value of the minimum and maximum damage values.
     */
    GetAverageTrueAttackDamage(hTarget: CDOTA_BaseNPC): number;
    GetBaseAttackTime(): number;
    /**
     * Get the maximum attack damage of this unit.
     */
    GetBaseDamageMax(): number;
    /**
     * Get the minimum attack damage of this unit.
     */
    GetBaseDamageMin(): number;
    /**
     * Returns the vision range before modifiers.
     */
    GetBaseDayTimeVisionRange(): number;
    GetBaseHealthRegen(): number;
    /**
     * Returns base magical armor value.
     */
    GetBaseMagicalResistanceValue(): number;
    /**
     * Gets the base max health value.
     */
    GetBaseMaxHealth(): number;
    GetBaseMoveSpeed(): number;
    /**
     * Returns the vision range after modifiers.
     */
    GetBaseNightTimeVisionRange(): number;
    /**
     * This Mana regen is derived from constant bonuses like Basilius.
     */
    GetBonusManaRegen(): number;
    GetCastPoint(bAttack: boolean): number;
    /**
     * Get clone source (Meepo Prime, if this is a Meepo)
     */
    GetCloneSource(): CDOTA_BaseNPC;
    /**
     * Returns the size of the collision padding around the hull.
     */
    GetCollisionPadding(): number;
    GetCreationTime(): number;
    /**
     * Get the ability this unit is currently casting.
     */
    GetCurrentActiveAbility(): CDOTABaseAbility;
    /**
     * Gets the current vision range.
     */
    GetCurrentVisionRange(): number;
    GetCursorCastTarget(): CDOTA_BaseNPC;
    GetCursorPosition(): Vec;
    GetCursorTargetingNothing(): boolean;
    /**
     * Returns the vision range after modifiers.
     */
    GetDayTimeVisionRange(): number;
    /**
     * Get the XP bounty on this unit.
     */
    GetDeathXP(): number;
    GetForceAttackTarget(): CDOTA_BaseNPC;
    /**
     * Get the gold bounty on this unit.
     */
    GetGoldBounty(): number;
    GetHasteFactor(): number;
    /**
     * Returns integer amount of health missing from max.
     */
    GetHealthDeficit(): number;
    /**
     * Get the current health percent of the unit.
     */
    GetHealthPercent(): number;
    GetHealthRegen(): number;
    /**
     * Get the collision hull radius of this NPC.
     */
    GetHullRadius(): number;
    /**
     * Returns speed after all modifiers.
     */
    GetIdealSpeed(): number;
    /**
     * Returns speed after all modifiers, but excluding those that reduce speed.
     */
    GetIdealSpeedNoSlows(): number;
    GetIncreasedAttackSpeed(): number;
    /**
     * Returns the initial waypoint goal for this NPC.
     */
    GetInitialGoalEntity(): CBaseEntity;
    /**
     * Returns nth item in inventory slot (index is zero based).
     */
    GetItemInSlot(slot: number): CDOTA_Item;
    GetLastAttackTime(): number;
    /**
     * Get the last game time that this unit switched to/from idle state.
     */
    GetLastIdleChangeTime(): number;
    /**
     * Returns the level of this unit.
     */
    GetLevel(): number;
    /**
     * Returns current magical armor value.
     */
    GetMagicalArmorValue(): number;
    /**
     * Returns the player ID of the controlling player.
     */
    GetMainControllingPlayer(): number;
    /**
     * Get the mana on this unit.
     */
    GetMana(): number;
    /**
     * Get the percent of mana remaining.
     */
    GetManaPercent(): number;
    GetManaRegen(): number;
    /**
     * Returns mana regen rate per intelligence.
     */
    GetManaRegenMultiplier(): number;
    /**
     * Get the maximum mana of this unit.
     */
    GetMaxMana(): number;
    /**
     * Get the maximum gold bounty for this unit.
     */
    GetMaximumGoldBounty(): number;
    /**
     * Get the minimum gold bounty for this unit.
     */
    GetMinimumGoldBounty(): number;
    GetModelRadius(): number;
    /**
     * How many modifiers does this unit have?
     */
    GetModifierCount(): number;
    /**
     * Get a modifier name by index.
     */
    GetModifierNameByIndex(nIndex: number): string;
    /**
     * Gets the stack count of a given modifier.
     */
    GetModifierStackCount(modifierName: string, hCaster: CDOTA_BaseNPC): number;
    GetMoveSpeedModifier(flBaseSpeed: number): number;
    /**
     * Set whether this NPC is required to reach each goal entity, rather than being allowed to unkink their path.
     */
    GetMustReachEachGoalEntity(): boolean;
    /**
     * If set to true, we will never attempt to move this unit to clear space, even when it unphases.
     */
    GetNeverMoveToClearSpace(): boolean;
    /**
     * Returns the vision range after modifiers.
     */
    GetNightTimeVisionRange(): number;
    GetOpposingTeamNumber(): DOTATeam_t;
    /**
     * Get the collision hull radius (including padding) of this NPC.
     */
    GetPaddedCollisionRadius(): number;
    /**
     * Returns base physical armor value.
     */
    GetPhysicalArmorBaseValue(): number;
    /**
     * Returns current physical armor value.
     */
    GetPhysicalArmorValue(): number;
    /**
     * Returns the player that owns this unit.
     */
    GetPlayerOwner(): CDOTAPlayer;
    /**
     * Get the owner player ID for this unit.
     */
    GetPlayerOwnerID(): PlayerID;
    GetProjectileSpeed(): number;
    GetRangeToUnit(hNPC: CDOTA_BaseNPC): number;
    GetRangedProjectileName(): string;
    GetSecondsPerAttack(): number;
    /**
     * Get how much gold has been spent on ability upgrades.
     */
    GetTotalPurchasedUpgradeGoldCost(): number;
    GetUnitLabel(): string;
    /**
     * Get the name of this unit.
     */
    GetUnitName(): string;
    /**
     * Give mana to this unit, this can be used for mana gained by abilities or item usage.
     */
    GiveMana(flMana: number): void;
    /**
     * See whether this unit has an ability by name.
     */
    HasAbility(pszAbilityName: string): boolean;
    HasAnyActiveAbilities(): boolean;
    HasAttackCapability(): boolean;
    HasFlyMovementCapability(): boolean;
    HasFlyingVision(): boolean;
    HasGroundMovementCapability(): boolean;
    /**
     * Does this unit have an inventory.
     */
    HasInventory(): boolean;
    /**
     * See whether this unit has an item by name.
     */
    HasItemInInventory(pItemName: string): boolean;
    /**
     * Sees if this unit has a given modifier.
     */
    HasModifier(pszScriptName: string): boolean;
    HasMovementCapability(): boolean;
    HasScepter(): boolean;
    /**
     * Heal this unit.
     */
    Heal(flAmount: number, hInflictor: CDOTA_BaseNPC): void;
    /**
     * Hold position.
     */
    Hold(): void;
    Interrupt(): void;
    InterruptChannel(): void;
    InterruptMotionControllers(bFindClearSpace: boolean): void;
    /**
     * Is this unit alive?
     */
    IsAlive(): boolean;
    /**
     * Is this unit an Ancient?
     */
    IsAncient(): boolean;
    IsAttackImmune(): boolean;
    IsAttacking(): boolean;
    IsAttackingEntity(hEntity: CDOTA_BaseNPC): boolean;
    /**
     * Is this unit a Barracks?
     */
    IsBarracks(): boolean;
    IsBlind(): boolean;
    IsBlockDisabled(): boolean;
    /**
     * Is this unit a boss?
     */
    IsBoss(): boolean;
    /**
     * Is this unit a building?
     */
    IsBuilding(): this is CDOTA_BaseNPC_Building;
    /**
     * Is this unit currently channeling a spell?
     */
    IsChanneling(): boolean;
    /**
     * Is this unit a clone? (Meepo)
     */
    IsClone(): boolean;
    IsCommandRestricted(): boolean;
    /**
     * Is this unit a considered a hero for targeting purposes?
     */
    IsConsideredHero(): boolean;
    /**
     * Is this unit controlled by any non-bot player?
     */
    IsControllableByAnyPlayer(): boolean;
    /**
     * Is this unit a courier?
     */
    IsCourier(): boolean;
    /**
     * Is this a Creature type NPC?
     */
    IsCreature(): this is CDOTA_BaseNPC_Creature;
    /**
     * Is this unit a creep?
     */
    IsCreep(): boolean;
    IsDeniable(): boolean;
    IsDisarmed(): boolean;
    IsDominated(): boolean;
    IsEvadeDisabled(): boolean;
    /**
     * Is this unit an Ancient?
     */
    IsFort(): boolean;
    IsFrozen(): boolean;
    /**
     * Is this a hero or hero illusion?
     */
    IsHero(): this is CDOTA_BaseNPC_Hero;
    IsHexed(): boolean;
    /**
     * Is this creature currently idle?
     */
    IsIdle(): boolean;
    IsIllusion(): boolean;
    IsInvisible(): boolean;
    IsInvulnerable(): boolean;
    IsLowAttackPriority(): boolean;
    IsMagicImmune(): boolean;
    IsMovementImpaired(): boolean;
    /**
     * Is this unit moving?
     */
    IsMoving(): boolean;
    IsMuted(): boolean;
    /**
     * Is this a neutral?
     */
    IsNeutralUnitType(): boolean;
    IsNightmared(): boolean;
    IsOpposingTeam(nTeam: DOTATeam_t): boolean;
    /**
     * Is this unit a ward-type unit?
     */
    IsOther(): boolean;
    IsOutOfGame(): boolean;
    /**
     * Is this unit owned by any non-bot player?
     */
    IsOwnedByAnyPlayer(): boolean;
    /**
     * Is this a phantom unit?
     */
    IsPhantom(): boolean;
    IsPhantomBlocker(): boolean;
    IsPhased(): boolean;
    IsPositionInRange(vPosition: Vec, flRange: number): boolean;
    /**
     * Is this unit a ranged attacker?
     */
    IsRangedAttacker(): boolean;
    /**
     * Is this a real hero?
     */
    IsRealHero(): this is CDOTA_BaseNPC_Hero;
    IsRooted(): boolean;
    /**
     * Is this a shrine?
     */
    IsShrine(): this is CDOTA_BaseNPC_Building;
    IsSilenced(): boolean;
    IsSpeciallyDeniable(): boolean;
    IsStunned(): boolean;
    /**
     * Is this unit summoned?
     */
    IsSummoned(): boolean;
    IsTempestDouble(): this is CDOTA_BaseNPC_Hero;
    /**
     * Is this a tower?
     */
    IsTower(): this is CDOTA_BaseNPC_Building;
    IsUnableToMiss(): boolean;
    IsUnselectable(): boolean;
    IsUntargetable(): boolean;
    /**
     * Kills this NPC, with the params Ability and Attacker.
     */
    Kill(hAbility?: CDOTABaseAbility, hAttacker?: CDOTA_BaseNPC): void;
    MakeIllusion(): void;
    MakePhantomBlocker(): void;
    MakeVisibleDueToAttack(iTeam: DOTATeam_t): void;
    MakeVisibleToTeam(iTeam: DOTATeam_t, flDuration: number): void;
    ManageModelChanges(): void;
    /**
     * Sets the health to a specific value, with optional flags or inflictors.
     */
    ModifyHealth(iDesiredHealthValue: number, hAbility: CDOTABaseAbility, bLethal: boolean, iAdditionalFlags: number): void;
    /**
     * Move to follow a unit.
     */
    MoveToNPC(hNPC: CDOTA_BaseNPC): void;
    /**
     * Give an item to another unit.
     */
    MoveToNPCToGiveItem(hNPC: CDOTA_BaseNPC, hItem: CDOTA_Item): void;
    /**
     * Issue a Move-To command.
     */
    MoveToPosition(vDest: Vec): void;
    /**
     * Issue an Attack-Move-To command.
     */
    MoveToPositionAggressive(vDest: Vec): void;
    /**
     * Move to a target to attack.
     */
    MoveToTargetToAttack(hTarget: CDOTA_BaseNPC): void;
    NoHealthBar(): boolean;
    NoTeamMoveTo(): boolean;
    NoTeamSelect(): boolean;
    NoUnitCollision(): boolean;
    NotOnMinimap(): boolean;
    NotOnMinimapForEnemies(): boolean;
    NotifyWearablesOfModelChange(bOriginalModel: boolean): void;
    PassivesDisabled(): boolean;
    /**
     * Issue a Patrol-To command.
     */
    PatrolToPosition(vDest: Vec): void;
    /**
     * Performs an attack on a target.
     */
    PerformAttack(hTarget: CDOTA_BaseNPC, bUseCastAttackOrb: boolean, bProcessProcs: boolean, bSkipCooldown: boolean, bIgnoreInvis: boolean, bUseProjectile: boolean, bFakeAttack: boolean,
                  bNeverMiss: boolean): void;
    /**
     * Pick up a dropped item.
     */
    PickupDroppedItem(hItem: CDOTA_Item): void;
    /**
     * Pick up a rune.
     */
    PickupRune(hItem: CDOTA_Item): void;
    /**
     * Play a VCD on the NPC.
     */
    PlayVCD(pVCD: string): void;
    ProvidesVision(): boolean;
    /**
     * (bool RemovePositiveBuffs, bool RemoveDebuffs, bool BuffsCreatedThisFrameOnly, bool RemoveStuns, bool RemoveExceptions
     */
    Purge(bRemovePositiveBuffs: boolean, bRemoveDebuffs: boolean, bFrameOnly: boolean, bRemoveStuns: boolean, bRemoveExceptions: boolean): void;
    /**
     * Remove mana from this unit, this can be used for involuntary mana loss, not for mana that is spent.
     */
    ReduceMana(flAmount: number): void;
    /**
     * Remove an ability from this unit by name.
     */
    RemoveAbility(pszAbilityName: string): void;
    /**
     * Remove the given gesture activity.
     */
    RemoveGesture(nActivity: GameActivity_t): void;
    RemoveHorizontalMotionController(hBuff: CDOTA_Buff): void;
    /**
     * Removes the passed item from this unit's inventory and deletes it.
     */
    RemoveItem(hItem: CDOTA_Item): void;
    /**
     * Removes a modifier.
     */
    RemoveModifierByName(pszScriptName: string): void;
    /**
     * Removes a modifier that was cast by the given caster.
     */
    RemoveModifierByNameAndCaster(pszScriptName: string, hCaster: CDOTA_BaseNPC): void;
    /**
     * Remove the no draw flag.
     */
    RemoveNoDraw(): void;
    RemoveVerticalMotionController(hBuff: CDOTA_Buff): void;
    /**
     * Respawns the target unit if it can be respawned.
     */
    RespawnUnit(): void;
    /**
     * Sells the passed item in this unit's inventory.
     */
    SellItem(hItem: CDOTA_Item): void;
    /**
     * Set the ability by index.
     */
    SetAbilityByIndex(hAbility: CDOTABaseAbility, iIndex: number): void;
    SetAcquisitionRange(nRange: number): void;
    /**
     * Combat involving this creature will have this weight added to the music calcuations.
     */
    SetAdditionalBattleMusicWeight(flWeight: number): void;
    /**
     * Set this unit's aggro target to a specified unit.
     */
    SetAggroTarget(hAggroTarget: CDOTA_BaseNPC): void;
    SetAttackCapability(iAttackCapabilities: DOTAUnitAttackCapability_t): void;
    SetAttacking(hAttackTarget: CDOTA_BaseNPC): void;
    SetBaseAttackTime(flBaseAttackTime: number): void;
    /**
     * Sets the maximum base damage.
     */
    SetBaseDamageMax(nMax: number): void;
    /**
     * Sets the minimum base damage.
     */
    SetBaseDamageMin(nMin: number): void;
    SetBaseHealthRegen(flHealthRegen: number): void;
    /**
     * Sets base magical armor value.
     */
    SetBaseMagicalResistanceValue(flMagicalResistanceValue: number): void;
    SetBaseManaRegen(flManaRegen: number): void;
    /**
     * Set a new base max health value.
     */
    SetBaseMaxHealth(flBaseMaxHealth: number): void;
    SetBaseMoveSpeed(iMoveSpeed: number): void;
    /**
     * Set whether or not this unit is allowed to sell items (bCanSellItems)
     */
    SetCanSellItems(bCanSell: boolean): void;
    /**
     * Set this unit controllable by the player with the passed ID.
     */
    SetControllableByPlayer(iIndex: number, bSkipAdjustingPosition: boolean): void;
    SetCursorCastTarget(hEntity: CDOTA_BaseNPC): void;
    SetCursorPosition(vLocation: Vec): void;
    SetCursorTargetingNothing(bTargetingNothing: boolean): void;
    SetCustomHealthLabel(pLabel: string, r: number, g: number, b: number): void;
    /**
     * Set the base vision range.
     */
    SetDayTimeVisionRange(iRange: number): void;
    /**
     * Set the XP bounty on this unit.
     */
    SetDeathXP(iXPBounty: number): void;
    SetForceAttackTarget(hNPC: CDOTA_BaseNPC): void;
    SetForceAttackTargetAlly(hNPC: CDOTA_BaseNPC): void;
    /**
     * Set if this unit has an inventory.
     */
    SetHasInventory(bHasInventory: boolean): void;
    /**
     * Set the collision hull radius of this NPC.
     */
    SetHullRadius(flHullRadius: number): void;
    SetIdleAcquire(bIdleAcquire: boolean): void;
    /**
     * Sets the initial waypoint goal for this NPC.
     */
    SetInitialGoalEntity(hGoal: CBaseEntity): void;
    /**
     * Set the mana on this unit.
     */
    SetMana(flMana: number): void;
    /**
     * Set the maximum gold bounty for this unit.
     */
    SetMaximumGoldBounty(iGoldBountyMax: number): void;
    /**
     * Set the minimum gold bounty for this unit.
     */
    SetMinimumGoldBounty(iGoldBountyMin: number): void;
    /**
     * Sets the stack count of a given modifier.
     */
    SetModifierStackCount(pszScriptName: string, hCaster: CDOTA_BaseNPC, nStackCount: number): void;
    SetMoveCapability(iMoveCapabilities: DOTAUnitMoveCapability_t): void;
    /**
     * Set whether this NPC is required to reach each goal entity, rather than being allowed to unkink their path.
     */
    SetMustReachEachGoalEntity(must: boolean): void;
    /**
     * If set to true, we will never attempt to move this unit to clear space, even when it unphases.
     */
    SetNeverMoveToClearSpace(neverMoveToClearSpace: boolean): void;
    /**
     * Returns the vision range after modifiers.
     */
    SetNightTimeVisionRange(iRange: number): void;
    /**
     * Set the unit's origin.
     */
    SetOrigin(vLocation: Vec): void;
    /**
     * Sets the original model of this entity, which it will tend to fall back to anytime its state changes.
     */
    SetOriginalModel(pszModelName: string): void;
    /**
     * Sets base physical armor value.
     */
    SetPhysicalArmorBaseValue(flPhysicalArmorValue: number): void;
    SetRangedProjectileName(pProjectileName: string): void;
    /**
     * sets the client side map reveal radius for this unit
     */
    SetRevealRadius(revealRadius: number): void;
    SetStolenScepter(bStolenScepter: boolean): void;
    SetUnitCanRespawn(bCanRespawn: boolean): void;
    SetUnitName(pName: string): void;
    ShouldIdleAcquire(): boolean;
    /**
     * Spend mana from this unit, this can be used for spending mana from abilities or item usage.
     */
    SpendMana(flManaSpent: number, hAbility: CDOTABaseAbility): void;
    /**
     * Add the given gesture activity.
     */
    StartGesture(nActivity: GameActivity_t): void;
    /**
     * Add the given gesture activity with a playback rate override.
     */
    StartGestureWithPlaybackRate(nActivity: GameActivity_t, flRate: number): void;
    /**
     * Stop the current order.
     */
    Stop(): void;
    StopFacing(): void;
    /**
     * Swaps the slots of the two passed abilities and sets them enabled/disabled.
     */
    SwapAbilities(pAbilityName1: string, pAbilityName2: string, bEnable1: boolean, bEnable2: boolean): void;
    /**
     * Swap the contents of two item slots (slot1, slot2)
     */
    SwapItems(nSlot1: number, nSlot2: number): void;
    /**
     * Removed the passed item from this unit's inventory.
     */
    TakeItem(hItem: CDOTA_Item): CDOTA_Item;
    TimeUntilNextAttack(): number;
    TriggerModifierDodge(): boolean;
    TriggerSpellAbsorb(hAbility: CDOTABaseAbility): boolean;
    /**
     * Trigger the Lotus Orb-like effect.(hAbility)
     */
    TriggerSpellReflect(hAbility: CDOTABaseAbility): void;
    /**
     * Makes the first ability unhidden, and puts it where second ability currently is. Will do nothing if the first ability is already unhidden and in a valid slot.
     */
    UnHideAbilityToSlot(pszAbilityName: string, pszReplacedAbilityName: string): void;
    UnitCanRespawn(): boolean;
}
/**
 * A building.
 */
declare abstract class CDOTA_BaseNPC_Building extends CDOTA_BaseNPC {
    /**
     * Get the invulnerability count for a building.
     */
    GetInvulnCount(): number;
    /**
     * Set the invulnerability counter of this building.
     */
    SetInvulnCount(nInvulnCount: number): void;
}
/**
 * A Dota NPC Unit
 */
declare abstract class CDOTA_BaseNPC_Creature extends CDOTA_BaseNPC {
    /**
     * Add the specified item drop to this creature.
     */
    AddItemDrop(hDropData: table): void;
    /**
     * Level the creature up by the specified number of levels
     */
    CreatureLevelUp(iLevels: number): void;
    /**
     * Is this unit a champion?
     */
    IsChampion(): boolean;
    /**
     * Remove all item drops from this creature.
     */
    RemoveAllItemDrops(): void;
    /**
     * Set the armor gained per level on this creature.
     */
    SetArmorGain(flArmorGain: number): void;
    /**
     * Set the attack time gained per level on this creature.
     */
    SetAttackTimeGain(flAttackTimeGain: number): void;
    /**
     * Set the bounty gold gained per level on this creature.
     */
    SetBountyGain(nBountyGain: number): void;
    /**
     * Flag this unit as a champion creature.
     */
    SetChampion(bIsChampion: boolean): void;
    /**
     * Set the damage gained per level on this creature.
     */
    SetDamageGain(nDamageGain: number): void;
    /**
     * Set the disable resistance gained per level on this creature.
     */
    SetDisableResistanceGain(flDisableResistanceGain: number): void;
    /**
     * Set the hit points gained per level on this creature.
     */
    SetHPGain(nHPGain: number): void;
    /**
     * Set the hit points regen gained per level on this creature.
     */
    SetHPRegenGain(flHPRegenGain: number): void;
    /**
     * Set the magic resistance gained per level on this creature.
     */
    SetMagicResistanceGain(flMagicResistanceGain: number): void;
    /**
     * Set the mana points gained per level on this creature.
     */
    SetManaGain(nManaGain: number): void;
    /**
     * Set the mana points regen gained per level on this creature.
     */
    SetManaRegenGain(flManaRegenGain: number): void;
    /**
     * Set the move speed gained per level on this creature.
     */
    SetMoveSpeedGain(nMoveSpeedGain: number): void;
    /**
     * Set the xp reward gained per level on this creature.
     */
    SetXPGain(nXPGain: number): void;
}
/**
 * A Dota Hero NPC
 */
interface CDOTA_BaseNPC_Hero extends CDOTA_BaseNPC {
    /**
     * Params: Float XP, Bool applyBotDifficultyScaling
     */
    AddExperience(flXP: number, nReason: EDOTA_ModifyXP_Reason, bApplyBotDifficultyScaling: boolean, bIncrementTotal: boolean): boolean;
    /**
     * Spend the gold and buyback with this hero.
     */
    Buyback(): void;
    /**
     * Recalculate all stats after the hero gains stats.
     */
    CalculateStatBonus(): void;
    /**
     * Returns boolean value result of buyback gold limit time less than game time.
     */
    CanEarnGold(): boolean;
    /**
     * Value is stored in PlayerResource.
     */
    ClearLastHitMultikill(): void;
    /**
     * Value is stored in PlayerResource.
     */
    ClearLastHitStreak(): void;
    /**
     * Value is stored in PlayerResource.
     */
    ClearStreak(): void;
    /**
     * Gets the current unspent ability points.
     */
    GetAbilityPoints(): number;
    GetAdditionalOwnedUnits(): CDOTA_BaseNPC[];
    GetAgility(): number;
    GetAgilityGain(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetAssists(): number;
    GetAttacker(nIndex: number): number;
    GetBaseAgility(): number;
    /**
     * Hero damage is also affected by attributes.
     */
    GetBaseDamageMax(): number;
    /**
     * Hero damage is also affected by attributes.
     */
    GetBaseDamageMin(): number;
    GetBaseIntellect(): number;
    /**
     * Returns the base mana regen.
     */
    GetBaseManaRegen(): number;
    GetBaseStrength(): number;
    GetBonusDamageFromPrimaryStat(): number;
    /**
     * Return float value for the amount of time left on cooldown for this hero's buyback.
     */
    GetBuybackCooldownTime(): number;
    /**
     * Return integer value for the gold cost of a buyback.
     */
    GetBuybackCost(): number;
    /**
     * Returns the amount of time gold gain is limited after buying back.
     */
    GetBuybackGoldLimitTime(): number;
    /**
     * Returns the amount of XP
     */
    GetCurrentXP(): number;
    GetDeathGoldCost(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetDeaths(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetDenies(): number;
    /**
     * Returns gold amount for the player owning this hero
     */
    GetGold(): number;
    GetGoldBounty(): number;
    /**
     * Hero attack speed is also affected by agility.
     */
    GetIncreasedAttackSpeed(): number;
    GetIntellect(): number;
    GetIntellectGain(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetKills(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetLastHits(): number;
    /**
     * Returns the intelligenced based mana regen multiplier.
     */
    GetManaRegenMultiplier(): number;
    GetMostRecentDamageTime(): number;
    GetMultipleKillCount(): number;
    GetNumAttackers(): number;
    GetNumItemsInInventory(): number;
    GetNumItemsInStash(): number;
    /**
     * Hero armor is affected by attributes.
     */
    GetPhysicalArmorBaseValue(): number;
    /**
     * Returns player ID of the player owning this hero
     */
    GetPlayerID(): PlayerID;
    /**
     * 0 = strength, 1 = agility, 2 = intelligence.
     */
    GetPrimaryAttribute(): Attributes;
    GetPrimaryStatValue(): number;
    GetRespawnTime(): number;
    /**
     * Is this hero prevented from respawning?
     */
    GetRespawnsDisabled(): boolean;
    /**
     * Value is stored in PlayerResource.
     */
    GetStreak(): number;
    GetStrength(): number;
    GetStrengthGain(): number;
    GetTimeUntilRespawn(): number;
    /**
     * Get wearable entity in slot (slot)
     */
    GetTogglableWearable(nSlotType: number): CBaseEntity;
    HasAnyAvailableInventorySpace(): boolean;
    HasFlyingVision(): boolean;
    HasOwnerAbandoned(): boolean;
    /**
     * Args: const char* pItemName, bool bIncludeStashCombines, bool bAllowSelling
     */
    HasRoomForItem(pItemName: string, bIncludeStashCombines: boolean, bAllowSelling: boolean): number;
    /**
     * Levels up the hero, true or false to play effects.
     */
    HeroLevelUp(bPlayEffects: boolean): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementAssists(iKillerID: number): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementDeaths(iKillerID: number): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementDenies(): void;
    /**
     * Passed ID is for the victim, killer ID is ID of the current hero.  Value is stored in PlayerResource.
     */
    IncrementKills(iVictimID: number): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementLastHitMultikill(): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementLastHitStreak(): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementLastHits(): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementNearbyCreepDeaths(): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementStreak(): void;
    IsBuybackDisabledByReapersScythe(): boolean;
    IsReincarnating(): boolean;
    IsStashEnabled(): boolean;
    /**
     * Args: Hero, Inflictor
     */
    KilledHero(hHero: CDOTA_BaseNPC_Hero, hInflictor: CDOTA_BaseNPC): void;
    /**
     * Adds passed value to base attribute value, then calls CalculateStatBonus.
     */
    ModifyAgility(flNewAgility: number): void;
    /**
     * Gives this hero some gold.  Args: int nGoldChange, bool bReliable, int reason
     */
    ModifyGold(iGoldChange: number, bReliable: boolean, iReason: number): number;
    /**
     * Adds passed value to base attribute value, then calls CalculateStatBonus.
     */
    ModifyIntellect(flNewIntellect: number): void;
    /**
     * Adds passed value to base attribute value, then calls CalculateStatBonus.
     */
    ModifyStrength(flNewStrength: number): void;
    PerformTaunt(): void;
    RecordLastHit(): void;
    /**
     * Respawn this hero.
     */
    RespawnHero(bBuyBack: boolean, bRespawnPenalty: boolean): void;
    /**
     * Sets the current unspent ability points.
     */
    SetAbilityPoints(iPoints: number): void;
    SetBaseAgility(flAgility: number): void;
    SetBaseIntellect(flIntellect: number): void;
    SetBaseStrength(flStrength: number): void;
    SetBotDifficulty(nDifficulty: number): void;
    SetBuyBackDisabledByReapersScythe(bBuybackDisabled: boolean): void;
    /**
     * Sets the buyback cooldown time.
     */
    SetBuybackCooldownTime(flTime: number): void;
    /**
     * Set the amount of time gold gain is limited after buying back.
     */
    SetBuybackGoldLimitTime(flTime: number): void;
    /**
     * Sets a custom experience value for this hero.  Note, GameRules boolean must be set for this to work!
     */
    SetCustomDeathXP(iValue: number): void;
    /**
     * Sets the gold amount for the player owning this hero
     */
    SetGold(iGold: number, bReliable: boolean): void;
    SetPlayerID(iPlayerID: number): void;
    /**
     * Set this hero's primary attribute value.
     */
    SetPrimaryAttribute(nPrimaryAttribute: Attributes): void;
    SetRespawnPosition(vOrigin: Vec): void;
    /**
     * Prevent this hero from respawning.
     */
    SetRespawnsDisabled(bDisableRespawns: boolean): void;
    SetStashEnabled(bEnabled: boolean): void;
    SetTimeUntilRespawn(time: number): void;
    ShouldDoFlyHeightVisual(): boolean;
    /**
     * Args: int nGold, int nReason
     */
    SpendGold(iCost: number, iReason: EDOTA_ModifyGold_Reason): void;
    UnitCanRespawn(): boolean;
    /**
     * This upgrades the passed ability if it exists and the hero has enough ability points.
     */
    UpgradeAbility(hAbility: CDOTABaseAbility): void;
    WillReincarnate(): boolean;
}
/**
 * A Dota NPC Trap Ward
 */
declare abstract class CDOTA_BaseNPC_Trap_Ward extends CDOTA_BaseNPC_Creature {
    /**
     * Get the trap target for this entity.
     */
    GetTrapTarget(): Vec;
    /**
     * Set the animation sequence for this entity.
     */
    SetAnimation(pAnimation: string): void;
}

/**
 * A modifier.
 */
declare abstract class CDOTA_Buff {
    /**
     * (index, bDestroyImmediately, bStatusEffect, priority, bHeroEffect, bOverheadEffect
     */
    AddParticle(i: number, bDestroyImmediately: boolean, bStatusEffect: boolean, iPriority: number, bHeroEffect: boolean, bOverheadEffect: boolean): void;
    /**
     * Decrease this modifier's stack count by 1.
     */
    DecrementStackCount(): void;
    /**
     * Run all associated destroy functions, then remove the modifier.
     */
    Destroy(): void;
    /**
     * Run all associated refresh functions on this modifier as if it was re-applied.
     */
    ForceRefresh(): void;
    /**
     * Get the ability that generated the modifier.
     */
    GetAbility(): CDOTABaseAbility;
    /**
     * Returns aura stickiness (default 0.5)
     */
    GetAuraDuration(): number;
    /**
     * Get the owner of the ability responsible for the modifier.
     */
    GetCaster(): CDOTA_BaseNPC;
    GetClass(): string;
    GetCreationTime(): number;
    GetDieTime(): number;
    GetDuration(): number;
    GetElapsedTime(): number;
    GetName(): string;
    /**
     * Get the unit the modifier is parented to.
     */
    GetParent(): CDOTA_BaseNPC;
    GetRemainingTime(): number;
    GetStackCount(): number;
    HasFunction(iFunction: number): boolean;
    /**
     * Increase this modifier's stack count by 1.
     */
    IncrementStackCount(): void;
    IsStunDebuff(): boolean;
    /**
     * (flTime, bInformClients)
     */
    SetDuration(flDuration: number, bInformClient: boolean): void;
    SetStackCount(iCount: number): void;
    /**
     * Start this modifier's think function (OnIntervalThink) with the given interval (float).  To stop, call with -1.
     */
    StartIntervalThink(flInterval: number): void;
}
/**
 * !Custom HUD manager
 */
interface CDOTA_CustomUIManager {
    /**
     * Create a new custom UI HUD element for the specified player(s).
     * ( int PlayerID /*-1 means everyone* /, string ElementID /* should be unique * /, string LayoutFileName, table DialogVariables /* can be nil * / )
     */
    DynamicHud_Create(arg1: number, arg2: string, arg3: string, arg4: table): void;
    /**
     * Destroy a custom hud element ( int PlayerID /*-1 means everyone* /, string ElementID )
     */
    DynamicHud_Destroy(arg1: number, arg2: string): void;
    /**
     * Add or modify dialog variables for an existing custom hud element ( int PlayerID /*-1 means everyone* /, string ElementID, table DialogVariables )
     */
    DynamicHud_SetDialogVariables(arg1: number, arg2: string, arg3: table): void;
    /**
     * Toggle the visibility of an existing custom hud element ( int PlayerID /*-1 means everyone* /, string ElementID, bool Visible )
     */
    DynamicHud_SetVisible(arg1: number, arg2: string, arg3: boolean): void;
}
/**
 * A usable item.
 */
declare abstract class CDOTA_Item extends CDOTABaseAbility {
    CanBeUsedOutOfInventory(): boolean;
    /**
     * Get the container for this item.
     */
    GetContainer(): CDOTA_Item_Physical;
    GetCost(): number;
    /**
     * Get the number of charges this item currently has.
     */
    GetCurrentCharges(): number;
    /**
     * Get the initial number of charges this item has.
     */
    GetInitialCharges(): number;
    /**
     * Gets whether item is unequipped or ready.
     */
    GetItemState(): number;
    /**
     * Get the purchase time of this item
     */
    GetPurchaseTime(): number;
    /**
     * Get the purchaser for this item.
     */
    GetPurchaser(): CDOTA_BaseNPC;
    GetShareability(): EShareAbility;
    IsAlertableItem(): boolean;
    IsCastOnPickup(): boolean;
    IsCombinable(): boolean;
    IsDisassemblable(): boolean;
    IsDroppable(): boolean;
    IsInBackpack(): boolean;
    IsItem(): this is CDOTA_Item;
    IsKillable(): boolean;
    IsMuted(): boolean;
    IsPermanent(): boolean;
    IsPurchasable(): boolean;
    IsRecipe(): boolean;
    IsRecipeGenerated(): boolean;
    IsSellable(): boolean;
    IsStackable(): boolean;
    LaunchLoot(bAutoUse: boolean, flHeight: number, flDuration: number, vEndPoint: Vec): void;
    LaunchLootInitialHeight(bAutoUse: boolean, flInitialHeight: number, flLaunchHeight: number, flDuration: number, vEndPoint: Vec): void;
    OnEquip(): void;
    OnUnequip(): void;
    RequiresCharges(): boolean;
    SetCanBeUsedOutOfInventory(bValue: boolean): void;
    SetCastOnPickup(bCastOnPickUp: boolean): void;
    /**
     * Set the number of charges on this item
     */
    SetCurrentCharges(iCharges: number): void;
    SetDroppable(bDroppable: boolean): void;
    /**
     * Sets whether item is unequipped or ready.
     */
    SetItemState(iState: number): void;
    /**
     * Set the purchase time of this item
     */
    SetPurchaseTime(flTime: number): void;
    /**
     * Set the purchaser of record for this item.
     */
    SetPurchaser(hPurchaser: CDOTA_BaseNPC): void;
    SetSellable(bSellable: boolean): void;
    SetShareability(iShareability: EShareAbility): void;
    SetStacksWithOtherOwners(bStacksWithOtherOwners: boolean): void;
    SpendCharge(): void;
    StacksWithOtherOwners(): boolean;
    /**
     * Think this item
     */
    Think(): void;
}
/**
 * Spawns a physical item
 */
declare abstract class CDOTA_ItemSpawner extends CBaseEntity {
    /**
     * Returns the item name
     */
    GetItemName(): string;
}
/**
 * A data driven usable item.
 */
declare abstract class CDOTA_Item_DataDriven extends CDOTA_Item {
    /**
     * Applies a data driven modifier to the target
     */
    ApplyDataDrivenModifier(hCaster: CDOTA_BaseNPC, hTarget: CDOTA_BaseNPC, pszModifierName: string, hModifierTable: table): void;
    /**
     * Applies a data driven thinker at the location
     */
    ApplyDataDrivenThinker(hCaster: CDOTA_BaseNPC, vLocation: Vec, pszModifierName: string, hModifierTable: table): CBaseEntity;
}

/** !PureAbstract */
declare abstract class CDOTA_Item_Lua extends CDOTA_Item {
    /**
     * Determine whether an issued command with no target is valid.
     */
    CastFilterResult(): UnitFilterResult;
    /**
     * (Vector vLocation) Determine whether an issued command on a location is valid.
     */
    CastFilterResultLocation(vLocation: Vec): UnitFilterResult;
    /**
     * (HSCRIPT hTarget) Determine whether an issued command on a target is valid.
     */
    CastFilterResultTarget(hTarget: CDOTA_BaseNPC): UnitFilterResult;
    /**
     * Returns abilities that are stolen simultaneously, or otherwise related in functionality.
     */
    GetAssociatedPrimaryAbilities(): string;
    /**
     * Returns other abilities that are stolen simultaneously, or otherwise related in functionality.  Generally hidden abilities.
     */
    GetAssociatedSecondaryAbilities(): string;
    /**
     * Return cast behavior type of this ability.
     */
    GetBehavior(): DOTA_ABILITY_BEHAVIOR;
    /**
     * Return cast range of this ability.
     */
    GetCastRange(vLocation: Vec, hTarget: CDOTA_BaseNPC): number;
    /**
     * Return the channel time of this ability.
     */
    GetChannelTime(): number;
    /**
     * Return mana cost at the given level per second while channeling (-1 is current).
     */
    GetChannelledManaCostPerSecond(iLevel: number): number;
    /**
     * Return who hears speech when this spell is cast.
     */
    GetConceptRecipientType(): number;
    /**
     * Return cooldown of this ability.
     */
    GetCooldown(iLevel: number): number;
    /**
     * Return the error string of a failed command with no target.
     */
    GetCustomCastError(): string;
    /**
     * (Vector vLocation) Return the error string of a failed command on a location.
     */
    GetCustomCastErrorLocation(vLocation: Vec): string;
    /**
     * (HSCRIPT hTarget) Return the error string of a failed command on a target.
     */
    GetCustomCastErrorTarget(hTarget: CDOTA_BaseNPC): string;
    /**
     * Return gold cost at the given level (-1 is current).
     */
    GetGoldCost(iLevel: number): number;
    /**
     * Returns the name of the modifier applied passively by this ability.
     */
    GetIntrinsicModifierName(): string;
    /**
     * Return mana cost at the given level (-1 is current).
     */
    GetManaCost(iLevel: number): number;
    /**
     * Return the animation rate of the cast animation.
     */
    GetPlaybackRateOverride(): number;
    /**
     * Returns true if this ability can be used when not on the action panel.
     */
    IsHiddenAbilityCastable(): boolean;
    /**
     * Returns true if this ability is hidden when stolen by Spell Steal.
     */
    IsHiddenWhenStolen(): boolean;
    /**
     * Returns whether this item is muted or not.
     */
    IsMuted(): boolean;
    /**
     * Returns true if this ability is refreshed by Refresher Orb.
     */
    IsRefreshable(): boolean;
    /**
     * Returns true if this ability can be stolen by Spell Steal.
     */
    IsStealable(): boolean;
    /**
     * Cast time did not complete successfully.
     */
    OnAbilityPhaseInterrupted(): void;
    /**
     * Cast time begins (return true for successful cast).
     */
    OnAbilityPhaseStart(): boolean;
    /**
     * (bool bInterrupted) Channel finished.
     */
    OnChannelFinish(bInterrupted: boolean): void;
    /**
     * (float flInterval) Channeling is taking place.
     */
    OnChannelThink(flInterval: number): void;
    /**
     * Caster (hero only) gained a level, skilled an ability, or received a new stat bonus.
     */
    OnHeroCalculateStatBonus(): void;
    /**
     * A hero has died in the vicinity (ie Urn), takes table of params.
     */
    OnHeroDiedNearby(unit: CDOTA_BaseNPC, attacker: CDOTA_BaseNPC, event: table): void;
    /**
     * Caster gained a level.
     */
    OnHeroLevelUp(): void;
    /**
     * Caster inventory changed.
     */
    OnInventoryContentsChanged(): void;
    /**
     * ( HSCRIPT hItem ) Caster equipped item.
     */
    OnItemEquipped(hItem: CDOTA_Item): void;
    /**
     * Caster died.
     */
    OnOwnerDied(): void;
    /**
     * Caster respawned or spawned for the first time.
     */
    OnOwnerSpawned(): void;
    /**
     * (HSCRIPT hTarget, Vector vLocation) Projectile has collided with a given target or reached its destination (target is invalid).
     */
    OnProjectileHit(hTarget: CDOTA_BaseNPC, vLocation: Vec): boolean;
    /**
     * (Vector vLocation) Projectile is actively moving.
     */
    OnProjectileThink(vLocation: Vec): void;
    /**
     * Cast time finished, spell effects begin.
     */
    OnSpellStart(): void;
    /**
     * ( HSCRIPT hAbility ) Special behavior when stolen by Spell Steal.
     */
    OnStolen(hSourceAbility: CDOTABaseAbility): void;
    /**
     * Ability is toggled on/off.
     */
    OnToggle(): void;
    /**
     * Special behavior when lost by Spell Steal.
     */
    OnUnStolen(): void;
    /**
     * Ability gained a level.
     */
    OnUpgrade(): void;
    /**
     * Returns true if this ability will generate magic stick charges for nearby enemies.
     */
    ProcsMagicStick(): boolean;
    /**
     * Return the type of speech used.
     */
    SpeakTrigger(): number;
}
/**
 * A physical item dropped in the world
 */
declare abstract class CDOTA_Item_Physical extends CBaseAnimating {
    /**
     * Returned the contained item.
     */
    GetContainedItem(): CDOTA_Item;
    /**
     * Returns the game time when this item was created in the world
     */
    GetCreationTime(): number;
    /**
     * Set the contained item.
     */
    SetContainedItem(hItem: CDOTA_Item): void;
}
/**
 * A tree in the Dota map
 */
declare abstract class CDOTA_MapTree extends CBaseEntity {
    /**
     * Cuts down this tree. Parameters: int nTeamNumberKnownTo (-1 = invalid team)
     */
    CutDown(nTreeNumberKnownTo: DOTATeam_t): void;
    /**
     * Cuts down this tree. Parameters: float flRegrowAfter (-1 = never regrow), int nTeamNumberKnownTo (-1 = invalid team)
     */
    CutDownRegrowAfter(flRegrowAfter: number, nTeamNumberKnownTo: DOTATeam_t): void;
    /**
     * Grows back the tree if it was cut down.
     */
    GrowBack(): void;
    /**
     * Returns true if the tree is standing, false if it has been cut down
     */
    IsStanding(): boolean;
}

/** !PureAbstract */
declare abstract class CDOTA_Modifier_Lua_Horizontal_Motion extends CDOTA_Modifier_Lua {
    /**
     * Starts the horizontal motion controller effects for this buff.  Returns true if successful.
     */
    ApplyHorizontalMotionController(): boolean;
    /**
     * Get the priority
     */
    GetPriority(): modifierpriority;
    /**
     * Called when the motion gets interrupted.
     */
    OnHorizontalMotionInterrupted(): void;
    /**
     * Set the priority
     */
    SetPriority(nMotionPriority: modifierpriority): void;
    /**
     * Perform any motion from the given interval on the NPC.
     */
    UpdateHorizontalMotion(me: CDOTA_BaseNPC, dt: number): void;
}

/** !PureAbstract */
declare abstract class CDOTA_Modifier_Lua_Motion_Both extends CDOTA_Modifier_Lua {
    /**
     * Starts the horizontal motion controller effects for this buff.  Returns true if successful.
     */
    ApplyHorizontalMotionController(): boolean;
    /**
     * Starts the vertical motion controller effects for this buff.  Returns true if successful.
     */
    ApplyVerticalMotionController(): boolean;
    /**
     * Get the priority
     */
    GetPriority(): modifierpriority;
    /**
     * Called when the motion gets interrupted.
     */
    OnHorizontalMotionInterrupted(): void;
    /**
     * Called when the motion gets interrupted.
     */
    OnVerticalMotionInterrupted(): void;
    /**
     * Set the priority
     */
    SetPriority(nMotionPriority: modifierpriority): void;
    /**
     * Perform any motion from the given interval on the NPC.
     */
    UpdateHorizontalMotion(me: CDOTA_BaseNPC, dt: number): void;
    /**
     * Perform any motion from the given interval on the NPC.
     */
    UpdateVerticalMotion(me: CDOTA_BaseNPC, dt: number): void;
}

/** !PureAbstract */
declare abstract class CDOTA_Modifier_Lua_Vertical_Motion extends CDOTA_Modifier_Lua {
    /**
     * Starts the vertical motion controller effects for this buff.  Returns true if successful.
     */
    ApplyVerticalMotionController(): boolean;
    /**
     * Get the priority
     */
    GetMotionPriority(): modifierpriority;
    /**
     * Called when the motion gets interrupted.
     */
    OnVerticalMotionInterrupted(): void;
    /**
     * Set the priority
     */
    SetMotionPriority(nMotionPriority: modifierpriority): void;
    /**
     * Perform any motion from the given interval on the NPC.
     */
    UpdateVerticalMotion(me: CDOTA_BaseNPC, dt: number): void;
}

/**
 * Interface to player data
 */
interface CDOTA_PlayerResource {
    AddAegisPickup(iPlayerID: PlayerID): void;
    AddClaimedFarm(iPlayerID: PlayerID, flFarmValue: number, bEarnedValue: boolean): void;
    AddGoldSpentOnSupport(iPlayerID: PlayerID, iCost: number): void;
    AddRunePickup(iPlayerID: PlayerID): void;
    AreUnitsSharedWithPlayerID(nUnitOwnerPlayerID: PlayerID, nOtherPlayerID: PlayerID): boolean;
    CanRepick(iPlayerID: PlayerID): boolean;
    ClearKillsMatrix(iPlayerID: PlayerID): void;
    ClearLastHitMultikill(iPlayerID: PlayerID): void;
    ClearLastHitStreak(iPlayerID: PlayerID): void;
    ClearRawPlayerDamageMatrix(iPlayerID: PlayerID): void;
    ClearStreak(iPlayerID: PlayerID): void;
    GetAegisPickups(iPlayerID: PlayerID): number;
    GetAssists(iPlayerID: PlayerID): number;
    GetBroadcasterChannel(iPlayerID: PlayerID): number;
    GetBroadcasterChannelSlot(iPlayerID: PlayerID): number;
    GetClaimedDenies(iPlayerID: PlayerID): number;
    GetClaimedFarm(iPlayerID: PlayerID, bOnlyEarned: boolean): number;
    GetClaimedMisses(iPlayerID: PlayerID): number;
    GetConnectionState(iPlayerID: PlayerID): DOTAConnectionState_t;
    GetCreepDamageTaken(iPlayerID: PlayerID, bTotal: boolean): number;
    GetCustomBuybackCooldown(iPlayerID: PlayerID): number;
    GetCustomBuybackCost(iPlayerID: PlayerID): number;
    /**
     * Get the current custom team assignment for this player.
     */
    GetCustomTeamAssignment(iPlayerID: PlayerID): number;
    GetDamageDoneToHero(iPlayerID: PlayerID, iVictimID: number): number;
    GetDeaths(iPlayerID: PlayerID): number;
    GetDenies(iPlayerID: PlayerID): number;
    GetEventPointsForPlayerID(iPlayerID: PlayerID): number;
    GetEventPremiumPoints(iPlayerID: PlayerID): number;
    GetEventRanks(iPlayerID: PlayerID): any;
    GetGold(iPlayerID: PlayerID): number;
    GetGoldLostToDeath(iPlayerID: PlayerID): number;
    GetGoldPerMin(iPlayerID: PlayerID): number;
    GetGoldSpentOnBuybacks(iPlayerID: PlayerID): number;
    GetGoldSpentOnConsumables(iPlayerID: PlayerID): number;
    GetGoldSpentOnItems(iPlayerID: PlayerID): number;
    GetGoldSpentOnSupport(iPlayerID: PlayerID): number;
    GetHealing(iPlayerID: PlayerID): number;
    GetHeroDamageTaken(iPlayerID: PlayerID, bTotal: boolean): number;
    GetKills(iPlayerID: PlayerID): number;
    GetKillsDoneToHero(iPlayerID: PlayerID, iVictimID: PlayerID): number;
    GetLastHitMultikill(iPlayerID: PlayerID): number;
    GetLastHitStreak(iPlayerID: PlayerID): number;
    GetLastHits(iPlayerID: PlayerID): number;
    GetLevel(iPlayerID: PlayerID): number;
    GetMisses(iPlayerID: PlayerID): number;
    GetNearbyCreepDeaths(iPlayerID: PlayerID): number;
    GetNthCourierForTeam(nCourierIndex: number, nTeamNumber: DOTATeam_t): CDOTA_Unit_Courier;
    GetNthPlayerIDOnTeam(iTeamNumber: DOTATeam_t, iNthPlayer: number): number;
    GetNumConsumablesPurchased(iPlayerID: PlayerID): number;
    GetNumCouriersForTeam(nTeamNumber: DOTATeam_t): number;
    GetNumItemsPurchased(iPlayerID: PlayerID): number;
    GetPlayer(iPlayerID: PlayerID): CDOTAPlayer;
    /**
     * Includes spectators and players not assigned to a team
     */
    GetPlayerCount(): number;
    GetPlayerCountForTeam(iTeam: DOTATeam_t): number;
    GetPlayerLoadedCompletely(iPlayerID: PlayerID): boolean;
    GetPlayerName(iPlayerID: PlayerID): string;
    GetRawPlayerDamage(iPlayerID: PlayerID): number;
    GetReliableGold(iPlayerID: PlayerID): number;
    GetRespawnSeconds(iPlayerID: PlayerID): number;
    GetRoshanKills(iPlayerID: PlayerID): number;
    GetRunePickups(iPlayerID: PlayerID): number;
    GetSelectedHeroEntity(iPlayerID: PlayerID): CDOTA_BaseNPC_Hero;
    GetSelectedHeroID(iPlayerID: PlayerID): number;
    GetSelectedHeroName(iPlayerID: PlayerID): string;
    GetSteamAccountID(iPlayerID: PlayerID): number;
    /**
     * Get the 64 bit steam ID for a given player.
     */
    GetSteamID(iPlayerID: PlayerID): number;
    GetStreak(iPlayerID: PlayerID): number;
    GetStuns(iPlayerID: PlayerID): number;
    GetTeam(iPlayerID: PlayerID): DOTATeam_t;
    GetTeamKills(iTeam: DOTATeam_t): number;
    /**
     * Players on a valid team (radiant, dire, or custom*) who haven't abandoned the game
     */
    GetTeamPlayerCount(): number;
    GetTimeOfLastConsumablePurchase(iPlayerID: PlayerID): number;
    GetTimeOfLastDeath(iPlayerID: PlayerID): number;
    GetTimeOfLastItemPurchase(iPlayerID: PlayerID): number;
    GetTotalEarnedGold(iPlayerID: PlayerID): number;
    GetTotalEarnedXP(iPlayerID: PlayerID): number;
    GetTotalGoldSpent(iPlayerID: PlayerID): number;
    GetTowerDamageTaken(iPlayerID: PlayerID, bTotal: boolean): number;
    GetTowerKills(iPlayerID: PlayerID): number;
    GetUnitShareMaskForPlayer(nPlayerID: PlayerID, nOtherPlayerID: PlayerID): number;
    GetUnreliableGold(iPlayerID: PlayerID): number;
    GetXPPerMin(iPlayerID: PlayerID): number;
    /**
     * Does this player have a custom game ticket for this game?
     */
    HasCustomGameTicketForPlayerID(iPlayerID: PlayerID): boolean;
    HasRandomed(iPlayerID: PlayerID): boolean;
    HasSelectedHero(iPlayerID: PlayerID): boolean;
    HaveAllPlayersJoined(): boolean;
    IncrementAssists(iPlayerID: PlayerID, iVictimID: PlayerID): void;
    IncrementClaimedDenies(iPlayerID: PlayerID): void;
    IncrementClaimedMisses(iPlayerID: PlayerID): void;
    IncrementDeaths(iPlayerID: PlayerID, iKillerID: PlayerID): void;
    IncrementDenies(iPlayerID: PlayerID): void;
    IncrementKills(iPlayerID: PlayerID, iVictimID: PlayerID): void;
    IncrementLastHitMultikill(iPlayerID: PlayerID): void;
    IncrementLastHitStreak(iPlayerID: PlayerID): void;
    IncrementLastHits(iPlayerID: PlayerID): void;
    IncrementMisses(iPlayerID: PlayerID): void;
    IncrementNearbyCreepDeaths(iPlayerID: PlayerID): void;
    IncrementStreak(iPlayerID: PlayerID): void;
    IncrementTotalEarnedXP(iPlayerID: PlayerID, iXP: number, nReason: EDOTA_ModifyXP_Reason): void;
    IsBroadcaster(iPlayerID: PlayerID): boolean;
    IsDisableHelpSetForPlayerID(nPlayerID: PlayerID, nOtherPlayerID: PlayerID): boolean;
    IsFakeClient(iPlayerID: PlayerID): boolean;
    IsHeroSelected(pHeroname: string): boolean;
    IsHeroSharedWithPlayerID(nUnitOwnerPlayerID: PlayerID, nOtherPlayerID: PlayerID): boolean;
    IsValidPlayer(iPlayerID: PlayerID): boolean;
    IsValidPlayerID(iPlayerID: PlayerID): boolean;
    IsValidTeamPlayer(iPlayerID: PlayerID): boolean;
    IsValidTeamPlayerID(iPlayerID: PlayerID): boolean;
    ModifyGold(iPlayerID: PlayerID, iGoldChange: number, bReliable: boolean, nReason: EDOTA_ModifyGold_Reason): number;
    /**
     * (playerID, heroClassName, gold, XP) - replaces the player's hero with a new one of the specified class, gold and XP
     */
    ReplaceHeroWith(iPlayerID: PlayerID, pszHeroClass: string, nGold: number, nXP: number): CDOTA_BaseNPC_Hero;
    ResetBuybackCostTime(nPlayerID: PlayerID): void;
    ResetTotalEarnedGold(iPlayerID: PlayerID): void;
    SetBuybackCooldownTime(nPlayerID: PlayerID, flBuybackCooldown: number): void;
    SetBuybackGoldLimitTime(nPlayerID: PlayerID, flBuybackCooldown: number): void;
    /**
     * (playerID, entity) - force the given player's camera to follow the given entity
     */
    SetCameraTarget(nPlayerID: PlayerID, hTarget: CDOTA_BaseNPC): void;
    SetCanRepick(iPlayerID: PlayerID, bCanRepick: boolean): void;
    /**
     * Set the buyback cooldown for this player.
     */
    SetCustomBuybackCooldown(iPlayerID: PlayerID, flCooldownTime: number): void;
    /**
     * Set the buyback cost for this player.
     */
    SetCustomBuybackCost(iPlayerID: PlayerID, iGoldCost: number): void;
    /**
     * Set custom color for player (minimap, scoreboard, etc)
     */
    SetCustomPlayerColor(iPlayerID: PlayerID, r: number, g: number, b: number): void;
    /**
     * Set custom team assignment for this player.
     */
    SetCustomTeamAssignment(iPlayerID: PlayerID, iTeamAssignment: DOTATeam_t): void;
    SetGold(iPlayerID: PlayerID, iGold: number, bReliable: boolean): void;
    SetHasRandomed(iPlayerID: PlayerID): void;
    SetLastBuybackTime(iPlayerID: PlayerID, iLastBuybackTime: number): void;
    /**
     * Set the forced selection entity for a player.
     */
    SetOverrideSelectionEntity(nPlayerID: PlayerID, hEntity: CDOTA_BaseNPC): void;
    SetUnitShareMaskForPlayer(nPlayerID: PlayerID, nOtherPlayerID: PlayerID, nFlag: number, bState: boolean): void;
    SpendGold(iPlayerID: PlayerID, iCost: number, iReason: EDOTA_ModifyGold_Reason): void;
    UpdateTeamSlot(iPlayerID: PlayerID, iTeamNumber: DOTATeam_t, desiredSlot: number): void;
    WhoSelectedHero(pHeroFilename: string): number;
}
declare const PlayerResource: CDOTA_PlayerResource;

/**
 * Simple obstruction
 */
declare abstract class CDOTA_SimpleObstruction extends CBaseEntity {
    /**
     * Returns whether the obstruction is currently active
     */
    IsEnabled(): boolean;
    /**
     * Enable or disable the obstruction
     */
    SetEnabled(bEnabled: boolean, bForce: boolean): void;
}
/**
 * A courier.
 */
declare abstract class CDOTA_Unit_Courier extends CDOTA_BaseNPC {
    /**
     * Upgrade to a flying courier
     */
    UpgradeToFlyingCourier(): boolean;
}

/**
 * Wrapper class over g_pDebugOverlay instance
 */
interface CDebugOverlayScriptHelper {
    /**
     * Draws an axis. Specify origin + orientation in world space.
     */
    Axis(arg1: Vec, arg2: Quaternion, arg3: number, arg4: boolean, arg5: number): void;
    /**
     * Draws a world-space axis-aligned box. Specify bounds in world space.
     */
    Box(arg1: Vec, arg2: Vec, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number): void;
    /**
     * Draws an oriented box at the origin. Specify bounds in local space.
     */
    BoxAngles(arg1: Vec, arg2: Vec, arg3: Vec, arg4: Quaternion, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number): void;
    /**
     * Draws a capsule. Specify base in world space.
     */
    Capsule(arg1: Vec, arg2: Quaternion, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number): void;
    /**
     * Draws a circle. Specify center in world space.
     */
    Circle(arg1: Vec, arg2: Quaternion, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
    /**
     * Draws a circle oriented to the screen. Specify center in world space.
     */
    CircleScreenOriented(arg1: Vec, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number): void;
    /**
     * Draws a wireframe cone. Specify endpoint and direction in world space.
     */
    Cone(arg1: Vec, arg2: Vec, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number): void;
    /**
     * Draws a screen-aligned cross. Specify origin in world space.
     */
    Cross(arg1: Vec, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number): void;
    /**
     * Draws a world-aligned cross. Specify origin in world space.
     */
    Cross3D(arg1: Vec, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number): void;
    /**
     * Draws an oriented cross. Specify origin in world space.
     */
    Cross3DOriented(arg1: Vec, arg2: Quaternion, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
    /**
     * Draws a dashed line. Specify endpoints in world space.
     */
    DrawTickMarkedLine(arg1: Vec, arg2: Vec, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number): void;
    /**
     * Draws the attachments of the entity
     */
    EntityAttachments(arg1: CBaseEntity, arg2: number, arg3: number): void;
    /**
     * Draws the axis of the entity origin
     */
    EntityAxis(arg1: CBaseEntity, arg2: number, arg3: boolean, arg4: number): void;
    /**
     * Draws bounds of an entity
     */
    EntityBounds(arg1: CBaseEntity, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: number): void;
    /**
     * Draws the skeleton of the entity
     */
    EntitySkeleton(arg1: CBaseEntity, arg2: number): void;
    /**
     * Draws text on an entity
     */
    EntityText(arg1: CBaseEntity, arg2: number, arg3: string, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
    /**
     * Draws a screen-space filled 2D rectangle. Coordinates are in pixels.
     */
    FilledRect2D(arg1: Vec, arg2: Vec, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    /**
     * Draws a horizontal arrow. Specify endpoints in world space.
     */
    HorzArrow(arg1: Vec, arg2: Vec, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
    /**
     * Draws a line between two points
     */
    Line(arg1: Vec, arg2: Vec, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number): void;
    /**
     * Draws a line between two points in screenspace
     */
    Line2D(arg1: Vec, arg2: Vec, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    /**
     * Pops the identifier used to group overlays. Overlays marked with this identifier can be deleted in a big batch.
     */
    PopDebugOverlayScope(): void;
    /**
     * Pushes an identifier used to group overlays. Deletes all existing overlays using this overlay id.
     */
    PushAndClearDebugOverlayScope(arg1: string): void;
    /**
     * Pushes an identifier used to group overlays. Overlays marked with this identifier can be deleted in a big batch.
     */
    PushDebugOverlayScope(arg1: string): void;
    /**
     * Removes all overlays marked with a specific identifier, regardless of their lifetime.
     */
    RemoveAllInScope(arg1: string): void;
    /**
     * Draws a solid cone. Specify endpoint and direction in world space.
     */
    SolidCone(arg1: Vec, arg2: Vec, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number): void;
    /**
     * Draws a wireframe sphere. Specify center in world space.
     */
    Sphere(arg1: Vec, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number): void;
    /**
     * Draws a swept box. Specify endpoints in world space and the bounds in local space.
     */
    SweptBox(arg1: Vec, arg2: Vec, arg3: Vec, arg4: Vec, arg5: Quaternion, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
    /**
     * Draws 2D text. Specify origin in world space.
     */
    Text(arg1: Vec, arg2: number, arg3: string, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
    /**
     * Draws a screen-space texture. Coordinates are in pixels.
     */
    Texture(arg1: string, arg2: Vec, arg3: Vec, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Vec, arg9: Vec, arg10: number): void;
    /**
     * Draws a filled triangle. Specify vertices in world space.
     */
    Triangle(arg1: Vec, arg2: Vec, arg3: Vec, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
    /**
     * Toggles the overlay render type, for unit tests
     */
    UnitTestCycleOverlayRenderType(): void;
    /**
     * Draws 3D text. Specify origin + orientation in world space.
     */
    VectorText3D(arg1: Vec, arg2: Quaternion, arg3: string, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
    /**
     * Draws a vertical arrow. Specify endpoints in world space.
     */
    VertArrow(arg1: Vec, arg2: Vec, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
    /**
     * Draws a arrow associated with a specific yaw. Specify endpoints in world space.
     */
    YawArrow(arg1: Vec, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number): void;
}
/**
 * A quest
 */
declare abstract class CDotaQuest extends CBaseEntity {
    /**
     * Add a subquest to this quest
     */
    AddSubquest(hSubquest: table): void;
    /**
     * Mark this quest complete
     */
    CompleteQuest(): void;
    /**
     * Finds a subquest from this quest by index
     */
    GetSubquest(nIndex: number): CDotaSubquestBase;
    /**
     * Finds a subquest from this quest by name
     */
    GetSubquestByName(pszName: string): CDotaSubquestBase;
    /**
     * Remove a subquest from this quest
     */
    RemoveSubquest(hSubquest: CDotaSubquestBase): void;
    /**
     * Set the text replace string for this quest
     */
    SetTextReplaceString(pszString: string): void;
    /**
     * Set a quest value
     */
    SetTextReplaceValue(valueSlot: number, value: number): void;
}
/**
 * A subquest
 */
declare abstract class CDotaSubquestBase extends CBaseEntity {
    /**
     * Mark this subquest complete
     */
    CompleteSubquest(): void;
    /**
     * Set the text replace string for this subquest
     */
    SetTextReplaceString(pszString: string): void;
    /**
     * Set a subquest value
     */
    SetTextReplaceValue(valueSlot: number, value: number): void;
}
/**
 * !The global list of entities
 */
interface CEntities {
    /**
     * Creates an entity by classname
     */
    CreateByClassname(className: string): CBaseEntity;
    /**
     * Finds all entities by class name. Returns an array containing all the found entities.
     */
    FindAllByClassname(className: string): CBaseEntity[];
    /**
     * Find entities by class name within a radius.
     */
    FindAllByClassnameWithin(className: string, location: Vec, radius: number): CBaseEntity[];
    /**
     * Find entities by model name.
     */
    FindAllByModel(modelName: string): CBaseEntity[];
    /**
     * Find all entities by name. Returns an array containing all the found entities in it.
     */
    FindAllByName(name: string): CBaseEntity[];
    /**
     * Find entities by name within a radius.
     */
    FindAllByNameWithin(name: string, location: Vec, radius: number): CBaseEntity[];
    /**
     * Find entities by targetname.
     */
    FindAllByTarget(target: string): CBaseEntity[];
    /**
     * Find entities within a radius.
     */
    FindAllInSphere(location: Vec, radius: number): CBaseEntity[];
    /**
     * Find entities by class name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search
     */
    FindByClassname(previous: CBaseEntity | undefined, className: string): CBaseEntity;
    /**
     * Find entities by class name nearest to a point.
     */
    FindByClassnameNearest(className: string, location: Vec, radius: number): CBaseEntity;
    /**
     * Find entities by class name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search
     */
    FindByClassnameWithin(previous: CBaseEntity | undefined, className: string, location: Vec, radius: number): CBaseEntity;
    /**
     * Find entities by model name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search
     */
    FindByModel(previous: CBaseEntity | undefined, modelName: string): CBaseEntity;
    /**
     * Find entities by model name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search
     */
    FindByModelWithin(previous: CBaseEntity | undefined, modelName: string, location: Vec, radius: number): CBaseEntity;
    /**
     * Find entities by name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search
     */
    FindByName(previous: CBaseEntity | undefined, name: string): CBaseEntity;
    /**
     * Find entities by name nearest to a point.
     */
    FindByNameNearest(name: string, location: Vec, radius: number): CBaseEntity;
    /**
     * Find entities by name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search
     */
    FindByNameWithin(previous: CBaseEntity | undefined, name: string, location: Vec, radius: number): CBaseEntity;
    /**
     * Find entities by targetname. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search
     */
    FindByTarget(previous: CBaseEntity | undefined, target: string): CBaseEntity;
    /**
     * Find entities within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search
     */
    FindInSphere(previous: CBaseEntity | undefined, location: Vec, radius: number): CBaseEntity;
    /**
     * Begin an iteration over the list of entities
     */
    First(): CBaseEntity;
    /**
     * Get the local player.
     */
    GetLocalPlayer(): CDOTAPlayer;
    /**
     * Continue an iteration over the list of entities, providing reference to a previously found entity
     */
    Next(previous: CBaseEntity): CBaseEntity;
}
declare const Entities: CEntities;

/**
 * CEntityInstance: Root class for all entities
 */
declare abstract class CEntityInstance {
    /**
     * Adds an I/O connection that will call the named function on this entity when the specified output fires.
     */
    ConnectOutput(arg1: string, arg2: string): void;
    Destroy(): void;
    /**
     * Removes a connected script function from an I/O event on this entity.
     */
    DisconnectOutput(arg1: string, arg2: string): void;
    /**
     * Removes a connected script function from an I/O event on the passed entity.
     */
    DisconnectRedirectedOutput(arg1: string, arg2: string, arg3: table): void;
    /**
     * Fire an entity output
     */
    FireOutput(arg1: string, arg2: table, arg3: table, arg4: any, arg5: number): void;
    GetClassname(): string;
    /**
     * Get the entity name w/help if not defined (i.e. classname/etc)
     */
    GetDebugName(): string;
    /**
     * Get the entity as an EHANDLE
     */
    GetEntityHandle(): CBaseEntity;
    GetEntityIndex(): EntityID;
    /**
     * Get Integer Attribute
     */
    GetIntAttr(arg1: string): number;
    GetName(): string;
    /**
     * Retrieve, creating if necessary, the private per-instance script-side data associated with an entity
     */
    GetOrCreatePrivateScriptScope(): object;
    /**
     * Retrieve, creating if necessary, the public script-side data associated with an entity
     */
    GetOrCreatePublicScriptScope(): object;
    /**
     * Retrieve the private per-instance script-side data associated with an entity
     */
    GetPrivateScriptScope(): object;
    /**
     * Retrieve the public script-side data associated with an entity
     */
    GetPublicScriptScope(): object;
    /**
     * Adds an I/O connection that will call the named function on the passed entity when the specified output fires.
     */
    RedirectOutput(arg1: string, arg2: string, arg3: table): void;
    /**
     * Delete this entity
     */
    RemoveSelf(): void;
    /**
     * Set Integer Attribute
     */
    SetIntAttr(arg1: string, arg2: number): void;
    entindex(): EntityID;
}

/**
 * env_entity_maker
 */
interface CEnvEntityMaker extends CBaseEntity {
    /**
     * Create an entity at the location of the maker
     */
    SpawnEntity(): void;
    /**
     * Create an entity at the location of a specified entity instance
     */
    SpawnEntityAtEntityOrigin(hEntity: CBaseEntity): void;
    /**
     * Create an entity at a specified location and orientaton, orientation is Euler angle in degrees (pitch, yaw, roll)
     */
    SpawnEntityAtLocation(vecAlternateOrigin: Vec, vecAlternateAngles: Vec): void;
    /**
     * Create an entity at the location of a named entity
     */
    SpawnEntityAtNamedEntityOrigin(pszName: string): void;
}

/**
 * Choreographed scene which controls animation and/or dialog on one or more actors.
 */
declare abstract class CSceneEntity extends CBaseEntity {
    /**
     * Adds a team (by index) to the broadcast list
     */
    AddBroadcastTeamTarget(arg1: number): void;
    /**
     * Cancel scene playback
     */
    Cancel(): void;
    /**
     * Returns length of this scene in seconds.
     */
    EstimateLength(): number;
    /**
     * Get the camera
     */
    FindCamera(): any;
    /**
     * given an entity reference, such as !target, get actual entity from scene object
     */
    FindNamedEntity(arg1: string): CBaseEntity;
    /**
     * If this scene is currently paused.
     */
    IsPaused(): boolean;
    /**
     * If this scene is currently playing.
     */
    IsPlayingBack(): boolean;
    /**
     * given a dummy scene name and a vcd string, load the scene
     */
    LoadSceneFromString(arg1: string, arg2: string): boolean;
    /**
     * Removes a team (by index) from the broadcast list
     */
    RemoveBroadcastTeamTarget(arg1: number): void;
    /**
     * Start scene playback, takes activatorEntity as param
     */
    Start(arg1: CBaseEntity): void;
}
/**
 * !The global list of heroes
 */
interface CScriptHeroList {
    /**
     * Returns all the heroes in the world
     */
    GetAllHeroes(): CDOTA_BaseNPC_Hero[];
    /**
     * Get the Nth hero in the Hero List
     */
    GetHero(nth: number): CDOTA_BaseNPC_Hero;
    /**
     * Returns the number of heroes in the world
     */
    GetHeroCount(): number;
}
declare const HeroList: CScriptHeroList;

/**
 * !Used to create and manage particle effects
 */
interface CScriptParticleManager {
    /**
     * Creates a new particle effect
     */
    CreateParticle(particleName: string, particleAttach: ParticleAttachment_t, owner: CDOTA_BaseNPC | null | undefined): ParticleID;
    /**
     * Creates a new particle effect that only plays for the specified player
     */
    CreateParticleForPlayer(particleName: string, particleAttach: ParticleAttachment_t, owner: CDOTA_BaseNPC | null | undefined, player: CDOTAPlayer): ParticleID;
    /**
     * Creates a new particle effect that only plays for the specified team
     */
    CreateParticleForTeam(particleName: string, particleAttach: ParticleAttachment_t, owner: CDOTA_BaseNPC | null | undefined, team: DOTATeam_t): ParticleID;
    /**
     * (int index, bool bDestroyImmediately) - Destroy a particle, if bDestroyImmediately destroy it without playing end caps.
     */
    DestroyParticle(particle: ParticleID, immediate: boolean): void;
    GetParticleReplacement(arg1: string, arg2: table): string;
    /**
     * Frees the specified particle index
     */
    ReleaseParticleIndex(particle: ParticleID): void;
    SetParticleAlwaysSimulate(particle: ParticleID): void;
    /**
     * Set the control point data for a control on a particle effect
     */
    SetParticleControl(particle: ParticleID, controlPoint: number, value: Vec): void;
    SetParticleControlEnt(particle: ParticleID, controlPoint: number, unit: CDOTA_BaseNPC, particleAttach: ParticleAttachment_t, attachment: string, offset: Vec, lockOrientation: boolean): void;
    /**
     * (int iIndex, int iPoint, Vector vecPosition)
     */
    SetParticleControlFallback(arg1: number, arg2: number, arg3: Vec): void;
    /**
     * (int nFXIndex, int nPoint, vForward)
     */
    SetParticleControlForward(particle: ParticleID, controlPoint: number, forward: Vec): void;
    /**
     * (int nFXIndex, int nPoint, vForward, vRight, vUp)
     */
    SetParticleControlOrientation(particle: ParticleID, controlPoint: number, forward: Vec, right: Vec, up: Vec): void;
    /**
     * int nfxindex, int nPoint, int nPoint2, float flRadius
     */
    SetParticleFoWProperties(arg1: number, arg2: number, arg3: number, arg4: number): void;
}
declare const ParticleManager: CScriptParticleManager;

/**
 * Container to hold context published to precache functions in script
 */
declare abstract class CScriptPrecacheContext {
    /**
     * Precaches a specific resource
     */
    AddResource(arg1: string): void;
    /**
     * Reads a spawn key
     */
    GetValue(arg1: string): any;
}
/**
 * !Access to convar functions
 */
interface Convars {
    /**
     * GetBool(name) : returns the convar as a boolean flag.
     */
    GetBool(convar: string): boolean;
    /**
     * GetCommandClient() : returns the player who issued this console command.
     */
    GetCommandClient(): CDOTAPlayer;
    /**
     * GetDOTACommandClient() : returns the DOTA player who issued this console command.
     */
    GetDOTACommandClient(): CDOTAPlayer;
    /**
     * GetFloat(name) : returns the convar as a float. May return null if no such convar.
     */
    GetFloat(convar: string): number;
    /**
     * GetInt(name) : returns the convar as an int. May return null if no such convar.
     */
    GetInt(convar: string): number;
    /**
     * GetStr(name) : returns the convar as a string. May return null if no such convar.
     */
    GetStr(convar: string): string;
    /**
     * RegisterCommand(name, fn, helpString, flags) : register a console command.
     */
    RegisterCommand(commandName: string, callback: (commandName: string, ...args: string[]) => void, description: string, flags: number): void;
    /**
     * RegisterConvar(name, defaultValue, helpString, flags): register a new console variable.
     */
    RegisterConvar(convarName: string, defaultValue: string, description: string, flags: number): void;
    /**
     * SetBool(name, val) : sets the value of the convar to the bool.
     */
    SetBool(convar: string, value: boolean): void;
    /**
     * SetFloat(name, val) : sets the value of the convar to the float.
     */
    SetFloat(convar: string, value: number): void;
    /**
     * SetInt(name, val) : sets the value of the convar to the int.
     */
    SetInt(convar: string, value: number): void;
    /**
     * SetStr(name, val) : sets the value of the convar to the string.
     */
    SetStr(convar: string, value: string): void;
}
declare const Convars: Convars;

/**
 * Add temporary vision for a given team ( nTeamID, vLocation, flRadius, flDuration, bObstructedVision)
 */
declare function AddFOWViewer(team: DOTATeam_t, location: Vec, radius: number, duration: number, obstructedVision: boolean): void;
/**
 * Returns the number of degrees difference between two yaw angles
 */
declare function AngleDiff(arg1: number, arg2: number): number;
/**
 * Appends a string to a log file on the server
 */
declare function AppendToLogFile(arg1: string, arg2: string): void;

interface DamageTable {
    victim: CDOTA_BaseNPC;
    attacker: CDOTA_BaseNPC;
    damage: number;
    damage_type: DAMAGE_TYPES;
    damage_flags?: DOTADamageFlag_t;
    ability?: CDOTABaseAbility;
}
/**
 * Damage an npc.
 */
declare function ApplyDamage(arg1: DamageTable): number;
/**
 * (vector,float) constructs a quaternion representing a rotation by angle around the specified vector axis
 */
declare function AxisAngleToQuaternion(arg1: Vec, arg2: number): Quaternion;
/**
 * Compute the closest point on the OBB of an entity.
 */
declare function CalcClosestPointOnEntityOBB(entity: CBaseEntity, arg2: Vec): Vec;
/**
 * Compute the distance between two entity OBB. A negative return value indicates an input error. A return value of zero indicates that the OBBs are overlapping.
 */
declare function CalcDistanceBetweenEntityOBB(entity1: CBaseEntity, entity2: CBaseEntity): number;
declare function CalcDistanceToLineSegment2D(arg1: Vec, arg2: Vec, arg3: Vec): number;
/**
 * Create all I/O events for a particular entity
 */
declare function CancelEntityIOEvents(arg1: CBaseEntity): void;
/**
 * ( teamNumber )
 */
declare function ClearTeamCustomHealthbarColor(team: DOTATeam_t): void;
/**
 * (hInflictor, hAttacker, flDamage) - Allocate a damageinfo object, used as an argument to TakeDamage(). Call DestroyDamageInfo( hInfo ) to free the object.
 */
declare function CreateDamageInfo(hInflictor: table, arg2: table, arg3: Vec, arg4: Vec, arg5: number, arg6: number): table;
/**
 * Pass table - Inputs: entity, effect
 */
declare function CreateEffect(arg1: table): boolean;
/**
 * Create an HTTP request.
 */
declare function CreateHTTPRequest(method: string, url: string): CScriptHTTPRequest;
/**
 * Create an HTTP request.
 */
declare function CreateHTTPRequestScriptVM(method: string, url: string): CScriptHTTPRequest;
/**
 * Creates a DOTA hero by its dota_npc_units.txt name and sets it as the given player's controlled hero
 */
declare function CreateHeroForPlayer(heroName: string, player: CDOTAPlayer): CDOTA_BaseNPC_Hero;
/**
 * Create a DOTA item
 */
declare function CreateItem(itemName: string, owner: CDOTAPlayer, purchaser: CDOTAPlayer): CDOTA_Item;
/**
 * Create a physical item at a given location, can start in air (but doesn't clear a space)
 */
declare function CreateItemOnPositionForLaunch(location: Vec, item: CDOTA_Item): CDOTA_Item;
/**
 * Create a physical item at a given location
 */
declare function CreateItemOnPositionSync(location: Vec, item: CDOTA_Item): CDOTA_Item;
/**
 * Create a modifier not associated with an NPC. ( hCaster, hAbility, modifierName, paramTable, vOrigin, nTeamNumber, bPhantomBlocker )
 */
declare function CreateModifierThinker(caster: CDOTA_BaseNPC, ability: CDOTABaseAbility, modifierName: string, params: table, arg5: Vec, arg6: number, arg7: boolean): CBaseEntity;
/**
 * Create a scene entity to play the specified scene.
 */
declare function CreateSceneEntity(arg1: string): CSceneEntity;
/**
 * Create a temporary tree. (vLocation, flDuration).
 */
declare function CreateTempTree(arg1: Vec, arg2: number): void;
/**
 * CreateTrigger( vecMin, vecMax ) : Creates and returns an AABB trigger
 */
declare function CreateTrigger(arg1: Vec, arg2: Vec, arg3: Vec): CBaseTrigger;
/**
 * CreateTriggerRadiusApproximate( vecOrigin, flRadius ) : Creates and returns an AABB trigger thats bigger than the radius provided
 */
declare function CreateTriggerRadiusApproximate(arg1: Vec, arg2: number): CBaseTrigger;
/**
 * Creates a DOTA unit by its dota_npc_units.txt name
 */
declare function CreateUnitByName(unit_name: string, location: Vec, find_clear_space: boolean, npc_owner: CBaseEntity | null | undefined, unit_owner: CDOTAPlayer | null | undefined,
                                  team_number: DOTATeam_t): CDOTA_BaseNPC;
/**
 * Creates a DOTA unit by its dota_npc_units.txt name
 */
declare function CreateUnitByNameAsync(unitName: string, location: Vec, findClearSpace: boolean, npcOwner: CDOTA_BaseNPC | null | undefined, playerOwner: CDOTAPlayer | null | undefined,
                                       team: DOTATeam_t, callback: (unit: CDOTA_BaseNPC) => void): number;
/**
 * Creates a DOTA unit by its dota_npc_units.txt name from a table of entity key values and a position to spawn at.
 */
declare function CreateUnitFromTable(arg1: table, arg2: Vec): CDOTA_BaseNPC;
/**
 * (vector,vector) cross product between two vectors
 */
declare function CrossVectors(arg1: Vec, arg2: Vec): Vec;
/**
 * Breaks in the debugger
 */
declare function DebugBreak(): void;
/**
 * Draw a debug overlay box (origin, mins, maxs, forward, r, g, b, a, duration )
 */
declare function DebugDrawBox(arg1: Vec, arg2: Vec, arg3: Vec, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
/**
 * Draw a debug forward box (cent, min, max, forward, vRgb, a, duration)
 */
declare function DebugDrawBoxDirection(arg1: Vec, arg2: Vec, arg3: Vec, arg4: Vec, arg5: Vec, arg6: number, arg7: number): void;
/**
 * Draw a debug circle (center, vRgb, a, rad, ztest, duration)
 */
declare function DebugDrawCircle(arg1: Vec, arg2: Vec, arg3: number, arg4: number, arg5: boolean, arg6: number): void;
/**
 * Try to clear all the debug overlay info
 */
declare function DebugDrawClear(): void;
/**
 * Draw a debug overlay line (origin, target, r, g, b, ztest, duration)
 */
declare function DebugDrawLine(arg1: Vec, arg2: Vec, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: number): void;
/**
 * Draw a debug line using color vec (start, end, vRgb, a, ztest, duration)
 */
declare function DebugDrawLine_vCol(arg1: Vec, arg2: Vec, arg3: Vec, arg4: boolean, arg5: number): void;
/**
 * Draw text with a line offset (x, y, lineOffset, text, r, g, b, a, duration)
 */
declare function DebugDrawScreenTextLine(arg1: number, arg2: number, arg3: number, arg4: string, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
/**
 * Draw a debug sphere (center, vRgb, a, rad, ztest, duration)
 */
declare function DebugDrawSphere(arg1: Vec, arg2: Vec, arg3: number, arg4: number, arg5: boolean, arg6: number): void;
/**
 * Draw text in 3d (origin, text, bViewCheck, duration)
 */
declare function DebugDrawText(arg1: Vec, arg2: string, arg3: boolean, arg4: number): void;
/**
 * Draw pretty debug text (x, y, lineOffset, text, r, g, b, a, duration, font, size, bBold)
 */
declare function DebugScreenTextPretty(arg1: number, arg2: number, arg3: number, arg4: string, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: string, arg11: number,
                                       arg12: boolean): void;
/**
 * Free a damageinfo object that was created with CreateDamageInfo().
 */
declare function DestroyDamageInfo(arg1: table): void;
/**
 * (hAttacker, hTarget, hAbility, fDamage, fRadius, effectName)
 */
declare function DoCleaveAttack(attacker: CDOTA_BaseNPC, target: CDOTA_BaseNPC, ability: CDOTABaseAbility, damage: number, startRadius: number, endRadius: number, distance: number,
                                effectName: string): number;
/**
 * #EntFire:Generate and entity i/o event
 */
declare function DoEntFire(arg1: string, arg2: string, arg3: string, arg4: number, arg5: table, arg6: table): void;
/**
 * #EntFireByHandle:Generate and entity i/o event
 */
declare function DoEntFireByInstanceHandle(arg1: table, arg2: string, arg3: string, arg4: number, arg5: table, arg6: table): void;
/**
 * Execute a script (internal)
 */
declare function DoIncludeScript(arg1: string, arg2: table): boolean;
/**
 * #ScriptAssert:Asserts the passed in value. Prints out a message and brings up the assert dialog.
 */
declare function DoScriptAssert(arg1: boolean, arg2: string): void;
/**
 * #UniqueString:Generate a string guaranteed to be unique across the life of the script VM, with an optional root string. Useful for adding data to tables when not sure what keys are already in use
 * in that table.
 */
declare function DoUniqueString(seed: string): string;
declare function DotProduct(arg1: Vec, arg2: Vec): number;
/**
 * Emit an announcer sound for all players.
 */
declare function EmitAnnouncerSound(arg1: string): void;
/**
 * Emit an announcer sound for a player.
 */
declare function EmitAnnouncerSoundForPlayer(arg1: string, arg2: number): void;
/**
 * Emit an announcer sound for a team.
 */
declare function EmitAnnouncerSoundForTeam(arg1: string, arg2: number): void;
/**
 * Emit an announcer sound for a team at a specific location.
 */
declare function EmitAnnouncerSoundForTeamOnLocation(arg1: string, arg2: number, arg3: Vec): void;
/**
 * Play named sound for all players
 */
declare function EmitGlobalSound(arg1: string): void;
/**
 * Play named sound on Entity
 */
declare function EmitSoundOn(soundname: string, ntity: CBaseEntity): void;
/**
 * Play named sound only on the client for the passed in player
 */
declare function EmitSoundOnClient(arg1: string, arg2: CDOTAPlayer): void;
/**
 * Emit a sound on a location from a unit, only for players allied with that unit (vLocation, soundName, hCaster
 */
declare function EmitSoundOnLocationForAllies(arg1: Vec, arg2: string, arg3: CDOTAPlayer): void;
/**
 * Emit a sound on a location from a unit. (vLocation, soundName, hCaster).
 */
declare function EmitSoundOnLocationWithCaster(arg1: Vec, arg2: string, arg3: CDOTA_BaseNPC): void;
/**
 * Turn an entity index integer to an HScript representing that entity's script instance.
 */
declare function EntIndexToHScript(entIndex: number): CBaseEntity;

interface OrderTable {
    UnitIndex: EntityID;
    OrderType: DotaUnitOrder_t;
    TargetIndex?: EntityID;
    AbilityIndex?: EntityID;
    Position?: Vec;
    Queue?: boolean;
}
/**
 * Issue an order from a script table
 */
declare function ExecuteOrderFromTable(order: OrderTable): void;
/**
 * Smooth curve decreasing slower as it approaches zero
 */
declare function ExponentialDecay(arg1: number, arg2: number, arg3: number): number;
/**
 * Finds a clear random position around a given target unit, using the target unit's padded collision radius.
 */
declare function FindClearRandomPositionAroundUnit(arg1: CDOTA_BaseNPC, arg2: CDOTA_BaseNPC, arg3: number): boolean;
/**
 * Place a unit somewhere not already occupied.
 */
declare function FindClearSpaceForUnit(unit: CDOTA_BaseNPC, location: Vec, unknown: boolean): boolean;
/**
 * Find units that intersect the given line with the given flags.
 */
declare function FindUnitsInLine(team: DOTATeam_t, startPos: Vec, endPos: Vec, cacheUnit: CBaseEntity|null, width: number, teamFilter: DOTA_UNIT_TARGET_TEAM, typeFilter: DOTA_UNIT_TARGET_TYPE,
                                 flagFilter: DOTA_UNIT_TARGET_FLAGS): CDOTA_BaseNPC[];
/**
 * Finds the units in a given radius with the given flags.
 */
declare function FindUnitsInRadius(team: DOTATeam_t, location: Vec, cacheUnit: CBaseEntity|null, radius: number, teamFilter: DOTA_UNIT_TARGET_TEAM, typeFilter: DOTA_UNIT_TARGET_TYPE,
                                   flagFilter: DOTA_UNIT_TARGET_FLAGS, order: FindType_t, canGrowCache: boolean): CDOTA_BaseNPC[];
/**
 * Fire Entity's Action Input w/no data
 */
declare function FireEntityIOInputNameOnly(arg1: CBaseEntity, arg2: string): void;
/**
 * Fire Entity's Action Input with passed String - you own the memory
 */
declare function FireEntityIOInputString(arg1: CBaseEntity, arg2: string, arg3: string): void;
/**
 * Fire Entity's Action Input with passed Vector - you own the memory
 */
declare function FireEntityIOInputVec(arg1: CBaseEntity, arg2: string, arg3: Vec): void;
/**
 * Fire a game event.
 */
declare function FireGameEvent(eventName: string, eventData: table): void;
/**
 * Fire a game event without broadcasting to the client.
 */
declare function FireGameEventLocal(eventName: string, eventData: table): void;
/**
 * Get the time spent on the server in the last frame
 */
declare function FrameTime(): number;
/**
 * Get the enity index for a tree id specified as the entindex_target of a DOTA_UNIT_ORDER_CAST_TARGET_TREE.
 */
declare function GetEntityIndexForTreeId(arg1: number): number;
/**
 * Returns the engines current frame count
 */
declare function GetFrameCount(): number;
declare function GetFrostyBoostAmount(arg1: number, arg2: number): number;
declare function GetFrostyPointsForRound(arg1: number, arg2: number, arg3: number): number;
declare function GetGoldFrostyBoostAmount(arg1: number, arg2: number): number;
declare function GetGoldFrostyPointsForRound(arg1: number, arg2: number, arg3: number): number;
declare function GetGroundHeight(location: Vec, unitHull: CDOTA_BaseNPC): number;
/**
 * Returns the supplied position moved to the ground. Second parameter is an NPC for measuring movement collision hull offset.
 */
declare function GetGroundPosition(location: Vec, unitHull: CDOTA_BaseNPC): Vec;
/**
 * Get the cost of an item by name.
 */
declare function GetItemCost(arg1: string): number;
declare function GetItemDefOwnedCount(arg1: number, arg2: number): number;
declare function GetItemDefQuantity(arg1: number, arg2: number): number;
/**
 * Get the local player on a listen server.
 */
declare function GetListenServerHost(): CBasePlayer;
/**
 * Get the name of the map.
 */
declare function GetMapName(): string;
/**
 * Get the longest delay for all events attached to an output
 */
declare function GetMaxOutputDelay(arg1: CBaseEntity, arg2: string): number;
/**
 * Get Angular Velocity for VPHYS or normal object. Returns a vector of the axis of rotation, multiplied by the degrees of rotation per second.
 */
declare function GetPhysAngularVelocity(arg1: CBaseEntity): Vec;
/**
 * Get Velocity for VPHYS or normal object
 */
declare function GetPhysVelocity(arg1: CBaseEntity): Vec;
/**
 * Get the current real world date
 */
declare function GetSystemDate(): string;
/**
 * Get the current real world time
 */
declare function GetSystemTime(): string;
/**
 * ( int teamID )
 */
declare function GetTeamHeroKills(team: DOTATeam_t): number;
/**
 * ( int teamID )
 */
declare function GetTeamName(team: DOTATeam_t): string;
/**
 * Given and entity index of a tree, get the tree id for use for use with with unit orders.
 */
declare function GetTreeIdForEntityIndex(arg1: number): number;
/**
 * Gets the world's maximum X position.
 */
declare function GetWorldMaxX(): number;
/**
 * Gets the world's maximum Y position.
 */
declare function GetWorldMaxY(): number;
/**
 * Gets the world's minimum X position.
 */
declare function GetWorldMinX(): number;
/**
 * Gets the world's minimum Y position.
 */
declare function GetWorldMinY(): number;
/**
 * If the given file doesn't exist, creates it with the given contents; does nothing if it exists
 */
declare function InitLogFile(arg1: string, arg2: string): void;
/**
 * Returns true if this is lua running from the client.dll.
 */
declare function IsClient(): boolean;
/**
 * Returns true if this server is a dedicated server.
 */
declare function IsDedicatedServer(): boolean;
/**
 * Returns true if this is lua running within tools mode.
 */
declare function IsInToolsMode(): boolean;
/**
 * Ask fog of war if a location is visible to a certain team (nTeamNumber, vLocation).
 */
declare function IsLocationVisible(team: DOTATeam_t, location: Vec): boolean;
/**
 * Returns true if the entity is valid and marked for deletion.
 */
declare function IsMarkedForDeletion(arg1: CBaseEntity): boolean;
/**
 * Returns true if this is lua running from the server.dll.
 */
declare function IsServer(): boolean;
/**
 * Checks to see if the given hScript is a valid entity
 */
declare function IsValidEntity(entity: CBaseEntity): boolean;
/**
 * (vector,vector,float) lerp between two vectors by a float factor returning new vector
 */
declare function LerpVectors(arg1: Vec, arg2: Vec, arg3: number): Vec;
/**
 * Set the limit on the pathfinding search space.
 */
declare function LimitPathingSearchDepth(arg1: number): void;
/**
 * Link a lua-defined modifier with the associated class ( className, fileName, LuaModifierType).
 */
declare function LinkLuaModifier(modifierName: string, filePath: string, motionController: LuaModifierType): void;

interface GameEvent {
    [key: string]: any;
}
/**
 * Creates a table from the specified keyvalues text file
 */
declare function LoadKeyValues(filePath: string): table;
/**
 * Creates a table from the specified keyvalues string
 */
declare function LoadKeyValuesFromString(kvString: string): table;
/**
 * Get the current local time
 */
declare function LocalTime(): any;
/**
 * Checks to see if the given hScript is a valid entity
 */
declare function MakeStringToken(arg1: string): number;
/**
 * Start a minimap event. (nTeamID, hEntity, nXCoord, nYCoord, nEventType, nEventDuration).
 */
declare function MinimapEvent(team: DOTATeam_t, entity: CBaseEntity, xCoord: number, yCoord: number, eventType: DOTAMinimapEvent_t, duration: number): void;
/**
 * Pause or unpause the game.
 */
declare function PauseGame(paused: boolean): void;
/**
 * Get a script instance of a player by index.
 */
declare function PlayerInstanceFromIndex(arg1: number): CDOTAPlayer;
/**
 * Precache an entity from KeyValues in table
 */
declare function PrecacheEntityFromTable(arg1: string, arg2: table, callback: (entity: CBaseEntity) => void): void;
/**
 * Precache a list of entity KeyValues tables
 */
declare function PrecacheEntityListFromTable(arg1: table, callback: (entity: CBaseEntity) => void): void;
/**
 * Asynchronously precaches a DOTA item by its dota_npc_items.txt name, provides a callback when it's finished.
 */
declare function PrecacheItemByNameAsync(itemName: string, callback: (id: number) => void): void;
/**
 * Precaches a DOTA item by its dota_npc_items.txt name
 */
declare function PrecacheItemByNameSync(itemName: string, context: CScriptPrecacheContext): void;
/**
 * ( modelName, context ) - Manually precache a single model
 */
declare function PrecacheModel(arg1: string, context: CScriptPrecacheContext): void;
/**
 * Manually precache a single resource
 */
declare function PrecacheResource(arg1: string, arg2: string, context: CScriptPrecacheContext): void;
/**
 * Asynchronously precaches a DOTA unit by its dota_npc_units.txt name, provides a callback when it's finished.
 */
declare function PrecacheUnitByNameAsync(unitName: string, callback: () => void, playerID: PlayerID): void;
/**
 * Precaches a DOTA unit by its dota_npc_units.txt name
 */
declare function PrecacheUnitByNameSync(arg1: string, context: CScriptPrecacheContext, playerOwner?: PlayerID): void;
/**
 * Precaches a DOTA unit from a table of entity key values.
 */
declare function PrecacheUnitFromTableAsync(arg1: table, callback: () => void): void;
/**
 * Precaches a DOTA unit from a table of entity key values.
 */
declare function PrecacheUnitFromTableSync(arg1: table, context: CScriptPrecacheContext): void;
/**
 * Print a console message with a linked console command
 */
declare function PrintLinkedConsoleMessage(arg1: string, arg2: string): void;
/**
 * Get a random float within a range
 */
declare function RandomFloat(min: number, max: number): number;
/**
 * Get a random int within a range
 */
declare function RandomInt(min: number, max: number): number;
/**
 * Get a random 2D vector of the given length.
 */
declare function RandomVector(length: number): Vec;
/**
 * Register a custom animation script to run when a model loads
 */
declare function RegisterCustomAnimationScriptForModel(arg1: string, arg2: string): void;
/**
 * Create a C proxy for a script-based spawn group filter
 */
declare function RegisterSpawnGroupFilterProxy(arg1: string): void;
/**
 * Reloads the MotD file
 */
declare function ReloadMOTD(): void;
/**
 * Remove the C proxy for a script-based spawn group filter
 */
declare function RemoveSpawnGroupFilterProxy(arg1: string): void;
/**
 * Check and fix units that have been assigned a position inside collision radius of other NPCs.
 */
declare function ResolveNPCPositions(arg1: Vec, arg2: number): void;
/**
 * Rolls a number from 1 to 100 and returns true if the roll is less than or equal to the number specified
 */
declare function RollPercentage(successPercentage: number): boolean;
/**
 * Rotate a QAngle by another QAngle.
 */
declare function RotateOrientation(arg1: QAngle, arg2: QAngle): QAngle;
/**
 * Rotate a Vector around a point.
 */
declare function RotatePosition(arg1: Vec, arg2: QAngle, arg3: Vec): Vec;
/**
 * (quaternion,vector,float) rotates a quaternion by the specified angle around the specified vector axis
 */
declare function RotateQuaternionByAxisAngle(arg1: Quaternion, arg2: Vec, arg3: number): Quaternion;
/**
 * Find the delta between two QAngles.
 */
declare function RotationDelta(arg1: QAngle, arg2: QAngle): QAngle;
/**
 * converts delta QAngle to an angular velocity Vector
 */
declare function RotationDeltaAsAngularVelocity(arg1: QAngle, arg2: QAngle): Vec;
/**
 * Have Entity say string, and teamOnly or not
 */
declare function Say(entity: CBaseEntity, message: string, teamOnly: boolean): void;
/**
 * Start a screenshake with the following parameters. vecCenter, flAmplitude, flFrequency, flDuration, flRadius, eCommand( SHAKE_START = 0, SHAKE_STOP = 1 ), bAirShake
 */
declare function ScreenShake(center: Vec, amplitude: number, frequency: number, duration: number, radius: number, eCommand: number, airShake: boolean): void;
declare function SendFrostivusTimeElapsedToGC(): void;
declare function SendFrostyPointsMessageToGC(arg1: table): void;
/**
 * ( DOTAPlayer sendToPlayer, int iMessageType, Entity targetEntity, int iValue, DOTAPlayer sourcePlayer ) - sendToPlayer and sourcePlayer can be nil - iMessageType is one of OVERHEAD_ALERT_*
 */
declare function SendOverheadEventMessage(player: CDOTAPlayer, messageType: number, unit: CDOTA_BaseNPC, value: number, sourcePlayer: CDOTAPlayer): void;
/**
 * Send a string to the console as a client command
 */
declare function SendToConsole(arg1: string): void;
/**
 * Send a string to the console as a server command
 */
declare function SendToServerConsole(arg1: string): void;
/**
 * Sets an opvar value for all players
 */
declare function SetOpvarFloatAll(arg1: string, arg2: string, arg3: string, arg4: number): void;
/**
 * Sets an opvar value for a single player
 */
declare function SetOpvarFloatPlayer(arg1: string, arg2: string, arg3: string, arg4: number, arg5: table): void;
/**
 * Set Angular Velocity for VPHYS or normal object, from a vector of the axis of rotation, multiplied by the degrees of rotation per second.
 */
declare function SetPhysAngularVelocity(arg1: CBaseEntity, arg2: Vec): void;
/**
 * Set the current quest name.
 */
declare function SetQuestName(arg1: string): void;
/**
 * Set the current quest phase.
 */
declare function SetQuestPhase(arg1: number): void;
/**
 * Set rendering on/off for an ehandle
 */
declare function SetRenderingEnabled(arg1: CBaseEntity, arg2: boolean): void;
/**
 * ( teamNumber, r, g, b )
 */
declare function SetTeamCustomHealthbarColor(team: DOTATeam_t, r: number, g: number, b: number): void;
/**
 * ( const char *pszMessage, int nPlayerID, int nValue, float flTime ) - Supports localized strings - %s1 = PlayerName, %s2 = Value, %s3 = TeamName
 */
declare function ShowCustomHeaderMessage(arg1: string, arg2: number, arg3: number, arg4: number): void;
/**
 * Show a generic popup dialog for all players.
 */
declare function ShowGenericPopup(arg1: string, arg2: string, arg3: string, arg4: string, arg5: number): void;
/**
 * Show a generic popup dialog to a specific player.
 */
declare function ShowGenericPopupToPlayer(arg1: table, arg2: string, arg3: string, arg4: string, arg5: string, arg6: number): void;
/**
 * Print a hud message on all clients
 */
declare function ShowMessage(arg1: string): void;
/**
 * Synchronously spawns a single entity from a table
 */
declare function SpawnEntityFromTableSynchronous(baseclass: string, data: table): CBaseEntity;
/**
 * Hierarchically spawn an entity group from a set of spawn tables.
 */
declare function SpawnEntityGroupFromTable(arg1: table, arg2: boolean, arg3: table): boolean;
/**
 * Asynchronously spawn an entity group from a list of spawn tables. A callback will be triggered when the spawning is complete
 */
declare function SpawnEntityListFromTableAsynchronous(arg1: table, callback: () => void): number;
/**
 * Synchronously spawn an entity group from a list of spawn tables.
 */
declare function SpawnEntityListFromTableSynchronous(arg1: table): table;
/**
 * (quaternion,quaternion,float) very basic interpolation of v0 to v1 over t on [0,1]
 */
declare function SplineQuaternions(arg1: Quaternion, arg2: Quaternion, arg3: number): Quaternion;
/**
 * (vector,vector,float) very basic interpolation of v0 to v1 over t on [0,1]
 */
declare function SplineVectors(arg1: Vec, arg2: Vec, arg3: number): Vec;
/**
 * Start a sound event
 */
declare function StartSoundEvent(arg1: string, arg2: CBaseEntity): void;
/**
 * Start a sound event from position
 */
declare function StartSoundEventFromPosition(arg1: string, arg2: Vec): void;
/**
 * Start a sound event from position with reliable delivery
 */
declare function StartSoundEventFromPositionReliable(arg1: string, arg2: Vec): void;
/**
 * Start a sound event from position with optional delivery
 */
declare function StartSoundEventFromPositionUnreliable(arg1: string, arg2: Vec): void;
/**
 * Start a sound event with reliable delivery
 */
declare function StartSoundEventReliable(arg1: string, arg2: CBaseEntity): void;
/**
 * Start a sound event with optional delivery
 */
declare function StartSoundEventUnreliable(arg1: string, arg2: CBaseEntity): void;
/**
 * Pass entity and effect name
 */
declare function StopEffect(arg1: CBaseEntity, arg2: string): void;
/**
 * Stop listening to all game events within a specific context.
 */
declare function StopListeningToAllGameEvents(arg1: object): void;
/**
 * Stop listening to a particular game event.
 */
declare function StopListeningToGameEvent(arg1: number): boolean;
/**
 * Stops a sound event
 */
declare function StopSoundEvent(arg1: string, arg2: CBaseEntity): void;
/**
 * Stop named sound on Entity
 */
declare function StopSoundOn(arg1: string, arg2: CBaseEntity): void;
/**
 * Get the current server time
 */
declare function Time(): number;
/**
 * Pass table - Inputs: start, end, ent, (optional mins, maxs) -- outputs: pos, fraction, hit, startsolid, normal
 */
declare function TraceCollideable(arg1: table): boolean;
/**
 * Pass table - Inputs: start, end, min, max, mask, ignore  -- outputs: pos, fraction, hit, enthit, startsolid
 */
declare function TraceHull(arg1: table): boolean;
/**
 * Pass table - Inputs: startpos, endpos, mask, ignore  -- outputs: pos, fraction, hit, enthit, startsolid
 */
declare function TraceLine(arg1: table): boolean;
/**
 * Returns the number of degrees difference between two yaw angles
 */
declare function UTIL_AngleDiff(arg1: number, arg2: number): number;
/**
 * Sends colored text to one client.
 */
declare function UTIL_MessageText(arg1: number, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number): void;
/**
 * Sends colored text to all clients.
 */
declare function UTIL_MessageTextAll(arg1: string, arg2: number, arg3: number, arg4: number, arg5: number): void;
/**
 * Sends colored text to all clients. (Valid context keys: player_id, value, team_id)
 */
declare function UTIL_MessageTextAll_WithContext(arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: table): void;
/**
 * Sends colored text to one client. (Valid context keys: player_id, value, team_id)
 */
declare function UTIL_MessageText_WithContext(arg1: number, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: table): void;
/**
 * Removes the specified entity
 */
declare function UTIL_Remove(hEntity: CBaseEntity): void;
/**
 * Immediately removes the specified entity
 */
declare function UTIL_RemoveImmediate(hEntity: CBaseEntity): void;
/**
 * Clear all message text on one client.
 */
declare function UTIL_ResetMessageText(arg1: number): void;
/**
 * Clear all message text from all clients.
 */
declare function UTIL_ResetMessageTextAll(): void;
/**
 * Check if a unit passes a set of filters. (hNPC, nTargetTeam, nTargetType, nTargetFlags, nTeam
 */
declare function UnitFilter(unit: CDOTA_BaseNPC, targetTeam: DOTA_UNIT_TARGET_TEAM, targetType: DOTA_UNIT_TARGET_TYPE,
                            targetFlags: DOTA_UNIT_TARGET_FLAGS, team: DOTATeam_t): boolean;
/**
 * Unload a spawn group by name
 */
declare function UnloadSpawnGroup(arg1: string): void;
/**
 * Unload a spawn group by handle
 */
declare function UnloadSpawnGroupByHandle(arg1: number): void;
declare function UpdateEventPoints(arg1: table): void;
declare function VectorAngles(arg1: Vec): QAngle;
/**
 * Get Qangles (with no roll) for a Vector.
 */
declare function VectorToAngles(arg1: Vec): QAngle;
/**
 * Gets the value of the given cvar, as a float.
 */
declare function cvar_getf(arg1: string): number;
/**
 * Sets the value of the given cvar, as a float.
 */
declare function cvar_setf(arg1: string, arg2: number): boolean;
/**
 * Add a rule to the decision database.
 */
declare function rr_AddDecisionRule(arg1: table): boolean;
/**
 * Commit the result of QueryBestResponse back to the given entity to play. Call with params (entity, airesponse)
 */
declare function rr_CommitAIResponse(arg1: table, arg2: table): boolean;
/**
 * Retrieve a table of all available expresser targets, in the form { name : handle, name: handle }.
 */
declare function rr_GetResponseTargets(): table;
/**
 * Params: (entity, query) : tests 'query' against entity's response system and returns the best response found (or null if none found).
 */
declare function rr_QueryBestResponse(arg1: table, arg2: table, arg3: table): boolean;

/**
 * !The grid navigation system
 */
interface GridNav {
    /**
     * Determine if it is possible to reach the specified end point from the specified start point. bool (vStart, vEnd)
     */
    CanFindPath(arg1: Vec, arg2: Vec): boolean;
    /**
     * Destroy all trees in the area(vPosition, flRadius, bFullCollision
     */
    DestroyTreesAroundPoint(arg1: Vec, arg2: number, arg3: boolean): void;
    /**
     * Find a path between the two points an return the length of the path. If there is not a path between the points the returned value will be -1. float (vStart, vEnd )
     */
    FindPathLength(arg1: Vec, arg2: Vec): number;
    /**
     * Returns a table full of tree HSCRIPTS (vPosition, flRadius, bFullCollision).
     */
    GetAllTreesAroundPoint(arg1: Vec, arg2: number, arg3: boolean): any;
    /**
     * Get the X position of the center of a given X index
     */
    GridPosToWorldCenterX(arg1: number): number;
    /**
     * Get the Y position of the center of a given Y index
     */
    GridPosToWorldCenterY(arg1: number): number;
    /**
     * Checks whether the given position is blocked
     */
    IsBlocked(arg1: Vec): boolean;
    /**
     * (position, radius, checkFullTreeRadius?) Checks whether there are any trees overlapping the given point
     */
    IsNearbyTree(arg1: Vec, arg2: number, arg3: boolean): boolean;
    /**
     * Checks whether the given position is traversable
     */
    IsTraversable(arg1: Vec): boolean;
    /**
     * Causes all trees in the map to regrow
     */
    RegrowAllTrees(): void;
    /**
     * Get the X index of a given world X position
     */
    WorldToGridPosX(arg1: number): number;
    /**
     * Get the Y index of a given world Y position
     */
    WorldToGridPosY(arg1: number): number;
}
declare const GridNav: GridNav;

interface LinearProjectileTable {
    Ability: CDOTABaseAbility;
    EffectName: string;
    vSpawnOrigin: Vec;
    fDistance: number;
    fStartRadius: number;
    fEndRadius: number;
    Source: CDOTA_BaseNPC;
    bHasFrontalCone?: boolean;
    bReplaceExisting?: boolean;
    iUnitTargetTeam?: DOTA_UNIT_TARGET_TEAM;
    iUnitTargetFlags?: DOTA_UNIT_TARGET_FLAGS;
    iUnitTargetType?: DOTA_UNIT_TARGET_TYPE;
    fExpireTime?: number;
    bDeleteOnHit?: boolean;
    vVelocity: Vec;
    bProvidesVision?: boolean;
    iVisionRadius?: number;
    iVisionTeamNumber?: DOTATeam_t;
}

interface TrackingProjectileTable {
    Target: CDOTA_BaseNPC;
    Source: CDOTA_BaseNPC;
    Ability: CDOTABaseAbility;
    EffectName: string;
    iMoveSpeed: number;
    vSourceLoc?: Vec;
    bDrawsOnMinimap?: boolean;
    bDodgeable?: boolean;
    bIsAttack?: boolean;
    bVisibleToEnemies?: boolean;
    bReplaceExisting?: boolean;
    flExpireTime?: number;
    bProvidesVision?: boolean;
    iVisionRadius?: number;
    iVisionTeamNumber?: DOTATeam_t;
}

/**
 * !The projectile manager
 */
interface ProjectileManager {
    /**
     * Update speed
     */
    ChangeTrackingProjectileSpeed(arg1: table, arg2: number): void;
    /**
     * Creates a linear projectile and returns the projectile ID
     */
    CreateLinearProjectile(projectileData: LinearProjectileTable): ProjectileID;
    /**
     * Creates a tracking projectile
     */
    CreateTrackingProjectile(projectileData: TrackingProjectileTable): ProjectileID;
    /**
     * Destroys the linear projectile matching the argument ID
     */
    DestroyLinearProjectile(projectile: ProjectileID): void;
    /**
     * Returns current location of projectile
     */
    GetLinearProjectileLocation(projectile: ProjectileID): Vec;
    /**
     * Returns current radius of projectile
     */
    GetLinearProjectileRadius(projectile: ProjectileID): number;
    /**
     * Returns a vector representing the current velocity of the projectile.
     */
    GetLinearProjectileVelocity(projectile: ProjectileID): Vec;
    /**
     * Makes the specified unit dodge projectiles
     */
    ProjectileDodge(unit: CDOTA_BaseNPC): void;
    /**
     * Update velocity
     */
    UpdateLinearProjectileDirection(projectile: ProjectileID, direction: Vec, speed: number): void;
}
declare const ProjectileManager: ProjectileManager;

/**
 * Vector class
 */
declare function Vector(x?: number, y?: number, z?: number): Vec;

// Hack to allow v1 + v2
type Vec = number;
interface Number {
    Dot(b: Vec): number;
    Cross(b: Vec): Vec;
    Length(): number;
    Length2D(): number;
    Normalized(): Vec;
}

declare abstract class CScriptHTTPRequest {
    /**
     * Send a HTTP request.
     */
    Send(callback: (result: CScriptHTTPResponse) => void): boolean;
    /**
     * Set the total timeout on the request.
     */
    SetHTTPRequestAbsoluteTimeoutMS(timeout: number): boolean;
    /**
     * Set a POST or GET parameter on the request.
     */
    SetHTTPRequestGetOrPostParameter(arg1: string, arg2: string): boolean;
    /**
     * Set a header value on the request.
     */
    SetHTTPRequestHeaderValue(arg1: string, arg2: string): boolean;
    /**
     * Set the network timeout on the request - this timer is reset when any data is received.
     */
    SetHTTPRequestNetworkActivityTimeout(timeout: number): boolean;
    /**
     * Set the literal body of a post - invalid after setting a post parameter.
     */
    SetHTTPRequestRawPostBody(arg1: string, arg2: string): boolean;
}
