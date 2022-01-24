// Type definitions for Minecraft Bedrock Edition script APIs (experimental) 0.1
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */

import * as mojangminecraft from "mojang-minecraft";
/**
 * Represents the type of fluid for use within a fluid
 * containing block, like a cauldron.
 */
export enum FluidType {
    /**
     * Represents water as a type of fluida.
     */
    water = 0,
    /**
     * Represents lava as a type of fluid.
     */
    lava = 1,
    /**
     * Represents powder snow as a type of fluid.
     */
    powderSnow = 2,
    /**
     * Represents a potion as a type of fluid.
     */
    potion = 3
}
/**
 * Returns information about whether this fence is connected to
 * other fences in several directions.
 */
export class FenceConnectivity {
    /**
     * Represents whether this fence block is connected to another
     * fence to the east (x + 1).
     */
    readonly "east": boolean;
    /**
     * Represents whether this fence block is connected to another
     * fence to the north (z - 1).
     */
    readonly "north": boolean;
    /**
     * Represents whether this fence block is connected to another
     * fence to the south (z + 1).
     */
    readonly "south": boolean;
    /**
     * Represents whether this fence block is connected to another
     * fence to the west (x - 1).
     */
    readonly "west": boolean;
}
/**
 * Executes a set of steps defined via chained .thenXyz
 * methods, sequentially. This facilitates a 'script' of
 * GameTest setup methods and assertions over time.
 */
export class GameTestSequence {
    /**
     * @remarks
     * Runs the given callback as a step within a GameTest
     * sequence. Exceptions thrown within the callback will end
     * sequence execution.
     * @param callback
     * Callback function to execute.
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenExecute(callback: () => void): GameTestSequence;
    /**
     * @remarks
     * After a delay, runs the given callback as a step within a
     * GameTest sequence. Exceptions thrown within the callback
     * will end sequence execution.
     * @param delayTicks
     * Number of ticks to wait before executing the callback.
     * @param callback
     * Callback function to execute.
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenExecuteAfter(delayTicks: number, callback: () => void): GameTestSequence;
    /**
     * @remarks
     * Runs the given callback every tick for the given number of
     * ticks.
     * @param tickCount
     * @param callback
     * Callback function to execute.
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenExecuteFor(tickCount: number, callback: () => void): GameTestSequence;
    /**
     * @remarks
     * Causes the test to fail if this step in the GameTest
     * sequence is reached.
     * @param errorMessage
     * Error message summarizing the failure condition.
     */
    thenFail(errorMessage: string): void;
    /**
     * @remarks
     * Idles the GameTest sequence for the specified delayTicks.
     * @param delayTicks
     * Number of ticks to delay for this step in the GameTest
     * sequence.
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenIdle(delayTicks: number): GameTestSequence;
    /**
     * @remarks
     * Marks the GameTest a success if this step is reached in the
     * GameTest sequence.
     */
    thenSucceed(): void;
    /**
     * @remarks
     * Executes the given callback every tick until it succeeds.
     * Exceptions thrown within the callback will end sequence
     * execution.
     * @param callback
     * Testing callback function to execute. Typically, this
     * function will have .assertXyz functions within it.
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenWait(callback: () => void): GameTestSequence;
    /**
     * @remarks
     * After a delay from the previous step, executes the given
     * callback every tick until it succeeds. Exceptions thrown
     * within the callback will end sequence execution.
     * @param delayTicks
     * Tick (after the previous step in the GameTest sequence) to
     * run the callback at.
     * @param callback
     * Testing callback function to execute. Typically, this
     * function will have .assertXyz functions within it.
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenWaitAfter(delayTicks: number, callback: () => void): GameTestSequence;
}
/**
 * A utility class to set GameTest parameters for a test.
 * Methods can be chained together to set multiple properties.
 */
export class RegistrationBuilder {
    /**
     * @remarks
     * Sets the batch for the test to run in.
     * @param batchName
     * Name of the batch for the test.
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    batch(batchName: ('night'|'day')): RegistrationBuilder;
    /**
     * @remarks
     * Sets the maximum number of times a test will try to rerun if
     * it fails.
     * @param attemptCount
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    maxAttempts(attemptCount: number): RegistrationBuilder;
    /**
     * @remarks
     * Sets the maximum number of ticks a test will run for before
     * timing out and failing.
     * @param tickCount
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    maxTicks(tickCount: number): RegistrationBuilder;
    /**
     * @remarks
     * Size around the GameTest, in blocks, that should be reserved
     * for the test when running multiple tests together.
     * @param paddingBlocks
     * Size, in blocks, around the GameTest where additional
     * GameTests should not be created.
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    padding(paddingBlocks: number): RegistrationBuilder;
    /**
     * @remarks
     * Whether this test is required to pass as part of its broader
     * set of tests.
     * @param isRequired
     * If set to true, the test must pass in order for the entire
     * run of tests to pass.
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    required(isRequired: boolean): RegistrationBuilder;
    /**
     * @remarks
     * Sets the number of successful test runs to be considered
     * successful.
     * @param attemptCount
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder;
    /**
     * @remarks
     * If true, runs the test in all four rotations when run via
     * /gametest runset.
     * @param rotate
     */
    rotateTest(rotate: boolean): RegistrationBuilder;
    /**
     * @remarks
     * Sets the number of ticks for a test to wait before executing
     * when the structure is spawned.
     * @param tickCount
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    setupTicks(tickCount: number): RegistrationBuilder;
    /**
     * @remarks
     * Sets the name of the structure for a test to use. "xyz:bar"
     * will load `/structures/xyz/bar.mcstructure` from the
     * behavior pack stack.
     * @param structureName
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    structureName(structureName: string): RegistrationBuilder;
    /**
     * @remarks
     * Adds a tag to a test. You can run all tests with a given tag
     * with `/gametest runset <tag>`.
     * @param tag
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    tag(tag: string): RegistrationBuilder;
}
/**
 * A simulated player can be used within GameTests to represent
 * how a player moves throughout the world and to support
 * testing of how entities and the environment will react to a
 * player. This type derives much of its structure and methods
 * from the {@link mojang-minecraft.Player} type.
 */
export class SimulatedPlayer extends mojangminecraft.Player {
    /**
     * Rotation of the body in degrees. Range is between -180 and
     * 180 degrees.
     * @throws This property can throw when used.
     */
    readonly "bodyRotation": number;
    /**
     * Dimension that the simulated player is currently within.
     * @throws This property can throw when used.
     */
    readonly "dimension": mojangminecraft.Dimension;
    /**
     * Location of the center of the head component of the player.
     * @throws This property can throw when used.
     */
    readonly "headLocation": mojangminecraft.Location;
    /**
     * Rotation of the head across pitch and yaw angles.
     * @throws This property can throw when used.
     */
    readonly "headRotation": mojangminecraft.PitchYawRotation;
    /**
     * Identifier for the player.
     * @throws This property can throw when used.
     */
    readonly "id": string;
    /**
     * True if the player is currently using a sneaking movement.
     */
    "isSneaking": boolean;
    /**
     * Current location of the player.
     * @throws This property can throw when used.
     */
    readonly "location": mojangminecraft.Location;
    /**
     * Name of the player.
     * @throws This property can throw when used.
     */
    readonly "name": string;
    /**
     * Optional name tag of the player.
     */
    "nameTag": string;
    /**
     * Manages the selected slot in the player's hotbar.
     */
    "selectedSlot": number;
    /**
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking.
     */
    "target": mojangminecraft.Entity;
    /**
     * Current speed of the player across X, Y, and Z dimensions.
     * @throws This property can throw when used.
     */
    readonly "velocity": mojangminecraft.Vector;
    /**
     * Vector of the current view of the player.
     * @throws This property can throw when used.
     */
    readonly "viewVector": mojangminecraft.Vector;
    /**
     * @remarks
     * Adds an effect, like poison, to the entity.
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in seconds, for the effect to apply.
     * @param amplifier
     * Optional amplification of the effect to apply.
     * @throws This function can throw errors.
     */
    addEffect(effectType: mojangminecraft.EffectType, duration: number, amplifier: number): void;
    /**
     * @remarks
     * Adds a specified tag to a simulated player.
     * @param tag
     * Content of the tag to add.
     * @throws This function can throw errors.
     */
    addTag(tag: string): boolean;
    /**
     * @remarks
     * Causes the simulated player to make an attack 'swipe'.
     * Returns true if the attack was performed - for example, the
     * player was not on cooldown and had a valid target. Target
     * selection is performed by raycasting from the player's head.
     * @throws This function can throw errors.
     */
    attack(): boolean;
    /**
     * @remarks
     * Causes the simulated player to attack the provided target.
     * Returns true if the attack was performed - for example, the
     * player was not on cooldown and had a valid target. The
     * attack can be performed at any distance and does not require
     * line of sight to the target entity.
     * @param entity
     * @throws This function can throw errors.
     */
    attackEntity(entity: mojangminecraft.Entity): boolean;
    /**
     * @remarks
     * Destroys the block at blockLocation, respecting the rules of
     * the server player's game mode. The block will be hit until
     * broken, an item is used or stopBreakingBlock is called.
     * Returns true if the block at blockLocation is solid.
     * @param blockLocation
     * Location of the block to interact with.
     * @param direction
     * Direction to place the specified item within.
     * @throws This function can throw errors.
     */
    breakBlock(blockLocation: mojangminecraft.BlockLocation, direction?: number): boolean;
    /**
     * @remarks
     * Gets the first block that intersects with the vector of the
     * view of this entity.
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getBlockFromViewVector(options?: mojangminecraft.BlockRaycastOptions): mojangminecraft.Block;
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed. If the component is not present on
     * the entity, undefined is returned.
     */
    getComponent(componentId: string): mojangminecraft.IEntityComponent;
    /**
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     */
    getComponents(): mojangminecraft.IEntityComponent[];
    /**
     * @remarks
     * Returns the effect for the specified EffectType on the
     * entity, or undefined if the effect is not present.
     * @param effectType
     * @returns
     * Effect object for the specified effect, or undefined if the
     * effect is not present.
     * @throws This function can throw errors.
     */
    getEffect(effectType: mojangminecraft.EffectType): mojangminecraft.Effect;
    /**
     * @remarks
     * Gets the first entity that intersects with the vector of the
     * view of this entity.
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getEntitiesFromViewVector(options?: mojangminecraft.EntityRaycastOptions): mojangminecraft.Entity[];
    /**
     * @remarks
     * Gets the current item cooldown time for a particular
     * cooldown category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @throws This function can throw errors.
     */
    getItemCooldown(itemCategory: string): number;
    /**
     * @remarks
     * Returns all tags associated with this simulated player.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @remarks
     * Gives the simulated player a particular item stack.
     * @param itemStack
     * Item to give.
     * @param selectSlot
     * Whether to set the selected slot once given.
     * @throws This function can throw errors.
     */
    giveItem(itemStack: mojangminecraft.ItemStack, selectSlot?: boolean): boolean;
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Tests whether a simulated player has a particular tag.
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Performs a raycast from the player’s head and interacts with
     * the first intersected block or entity. Returns true if the
     * interaction was successful. Maximum range is 6 blocks.
     * @throws This function can throw errors.
     */
    interact(): boolean;
    /**
     * @remarks
     * Causes the simulated player to interact with a block. The
     * block at the specified block location must be solid. Returns
     * true if the interaction was performed.
     * @param blockLocation
     * Location of the block to interact with.
     * @param direction
     * Direction to place the specified item within.
     * @throws This function can throw errors.
     */
    interactWithBlock(blockLocation: mojangminecraft.BlockLocation, direction?: number): boolean;
    /**
     * @remarks
     * Causes the simulated player to interact with a mob. Returns
     * true if the interaction was performed.
     * @param entity
     * Entity to interact with.
     * @throws This function can throw errors.
     */
    interactWithEntity(entity: mojangminecraft.Entity): boolean;
    /**
     * @remarks
     * Causes the simulated player to jump.
     * @returns
     * True if a jump was performed.
     * @throws This function can throw errors.
     */
    jump(): boolean;
    /**
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     * @throws This function can throw errors.
     */
    kill(): void;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given block location.
     * @param blockLocation
     * @throws This function can throw errors.
     */
    lookAtBlock(blockLocation: mojangminecraft.BlockLocation): void;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given entity.
     * @param entity
     * @throws This function can throw errors.
     */
    lookAtEntity(entity: mojangminecraft.Entity): void;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given location.
     * @param location
     * @throws This function can throw errors.
     */
    lookAtLocation(location: mojangminecraft.Location): void;
    /**
     * @remarks
     * Orders the simulated player to walk in the given direction
     * relative to the GameTest.
     * @param westEast
     * @param northSouth
     * @param speed
     * @throws This function can throw errors.
     */
    move(westEast: number, northSouth: number, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to walk in the given direction
     * relative to the player's current rotation.
     * @param leftRight
     * @param backwardForward
     * @param speed
     * @throws This function can throw errors.
     */
    moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to move to the given block
     * location in a straight line. If a move or navigation is
     * already playing, this will override the last
     * move/navigation.
     * @param blockLocation
     * @param speed
     * @throws This function can throw errors.
     */
    moveToBlock(blockLocation: mojangminecraft.BlockLocation, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to move to the given location in
     * a straight line. If a move or navigation is already playing,
     * this will override the last move/navigation.
     * @param location
     * @param speed
     * @throws This function can throw errors.
     */
    moveToLocation(location: mojangminecraft.Location, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to move to a specific block
     * location using navigation. If a move or navigation is
     * already playing, this will override the last move/walk. Note
     * that if the simulated player gets stuck, that simulated
     * player will stop. The player must be touching the ground in
     * order to start navigation.
     * @param blockLocation
     * @param speed
     * @throws This function can throw errors.
     */
    navigateToBlock(blockLocation: mojangminecraft.BlockLocation, speed?: number): mojangminecraft.NavigationResult;
    /**
     * @remarks
     * Will use navigation to follow the selected entity to within
     * a one block radius. If a move or navigation is already
     * playing, this will override the last move/navigation.
     * @param entity
     * @param speed
     * @throws This function can throw errors.
     */
    navigateToEntity(entity: mojangminecraft.Entity, speed?: number): mojangminecraft.NavigationResult;
    /**
     * @remarks
     * Orders the simulated player to move to a specific location
     * using navigation. If a move or navigation is already
     * playing, this will override the last move/walk. Note that if
     * the simulated player gets stuck, that simulated player will
     * stop. The player must be touching the ground in order to
     * start navigation.
     * @param location
     * @param speed
     * @throws This function can throw errors.
     */
    navigateToLocation(location: mojangminecraft.Location, speed?: number): mojangminecraft.NavigationResult;
    /**
     * @remarks
     * Use navigation to follow the route provided via the
     * locations parameter. If a move or navigation is already
     * playing, this will override the last move/navigation.
     * @param locations
     * A list of locations to use for routing.
     * @param speed
     * Net speed to use for doing the navigation.
     * @throws This function can throw errors.
     */
    navigateToLocations(locations: mojangminecraft.Location[], speed?: number): void;
    /**
     * @remarks
     * Removes a specified tag from a simulated player.
     * @param tag
     * Content of the tag to remove.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks
     * Causes the simulated player to turn by the provided angle,
     * relative to the player's current rotation.
     * @param angleInDegrees
     * @throws This function can throw errors.
     */
    rotateBody(angleInDegrees: number): void;
    /**
     * @remarks
     * Runs a particular command from the context of this simulated
     * player.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     * @throws This function can throw errors.
     * @example commands.js
     * ```typescript
     *        player.runCommand("say You got a new high score!");
     *        player.runCommand("scoreboard players set @s score 10");
     *
     * ```
     */
    runCommand(commandString: string): any;
    /**
     * @remarks
     * Causes the simulated player to turn to face the provided
     * angle, relative to the GameTest.
     * @param angleInDegrees
     * @throws This function can throw errors.
     */
    setBodyRotation(angleInDegrees: number): void;
    /**
     * @remarks
     * Sets the game mode that the simulated player is operating
     * under.
     * @param gameMode
     * Game mode to set.
     * @throws This function can throw errors.
     */
    setGameMode(gameMode: mojangminecraft.GameMode): void;
    /**
     * @remarks
     * Sets a particular item for the simulated player.
     * @param itemStack
     * Item to set.
     * @param slot
     * Slot to place the given item in.
     * @param selectSlot
     * Whether to set the selected slot once set.
     * @throws This function can throw errors.
     */
    setItem(itemStack: mojangminecraft.ItemStack, slot: number, selectSlot?: boolean): boolean;
    /**
     * @remarks
     * Sets a velocity for the entity to move with.
     * @param velocity
     * X/Y/Z components of the velocity.
     * @throws This function can throw errors.
     */
    setVelocity(velocity: mojangminecraft.Vector): void;
    /**
     * @remarks
     * Sets the item cooldown time for a particular cooldown
     * category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @param tickDuration
     * Duration in ticks of the item cooldown.
     * @throws This function can throw errors.
     */
    startItemCooldown(itemCategory: string, tickDuration: number): void;
    /**
     * @remarks
     * Stops destroying the block that is currently being hit.
     * @throws This function can throw errors.
     */
    stopBreakingBlock(): void;
    /**
     * @remarks
     * Stops interacting with entities or blocks.
     * @throws This function can throw errors.
     */
    stopInteracting(): void;
    /**
     * @remarks
     * Stops moving/walking/following if the simulated player is
     * moving.
     * @throws This function can throw errors.
     */
    stopMoving(): void;
    /**
     * @remarks
     * Stops using the currently active item.
     * @throws This function can throw errors.
     */
    stopUsingItem(): void;
    /**
     * @remarks
     * Teleports the selected player to a new location
     * @param location
     * New location for the player.
     * @param dimension
     * Dimension to move the selected player to.
     * @param xRotation
     * X rotation of the player after teleportation.
     * @param yRotation
     * Y rotation of the player after teleportation.
     * @throws This function can throw errors.
     */
    teleport(location: mojangminecraft.Location, dimension: mojangminecraft.Dimension, xRotation: number, yRotation: number): void;
    /**
     * @remarks
     * Teleports the selected player to a new location, and will
     * have the player facing a specified location.
     * @param location
     * New location for the player.
     * @param dimension
     * Dimension to move the selected player to.
     * @param facingLocation
     * Location that this player will be facing.
     * @throws This function can throw errors.
     */
    teleportFacing(location: mojangminecraft.Location, dimension: mojangminecraft.Dimension, facingLocation: mojangminecraft.Location): void;
    /**
     * @remarks
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws This function can throw errors.
     */
    triggerEvent(eventName: string): void;
    /**
     * @remarks
     * Causes the simulated player to use an item. Does not consume
     * the item. Returns false if the item is on cooldown.
     * @param itemStack
     * Item to use.
     * @throws This function can throw errors.
     */
    useItem(itemStack: mojangminecraft.ItemStack): boolean;
    /**
     * @remarks
     * Causes the simulated player to hold and use an item in their
     * inventory.
     * @param slot
     * Index of the inventory slot.
     * @throws This function can throw errors.
     */
    useItemInSlot(slot: number): boolean;
    /**
     * @remarks
     * Causes the simulated player to use an item in their
     * inventory on a block. The block at the specified block
     * location must be solid. Returns true if the item was used.
     * @param slot
     * Index of the slot to use.
     * @param blockLocation
     * Location to use the item upon.
     * @param direction
     * Direction to place the specified item within.
     * @param faceLocationX
     * Block-face-relative X position where to place the item.
     * @param faceLocationY
     * Block-face-relative Y position where to place the item.
     * @throws This function can throw errors.
     */
    useItemInSlotOnBlock(slot: number, blockLocation: mojangminecraft.BlockLocation, direction?: number, faceLocationX?: number, faceLocationY?: number): boolean;
    /**
     * @remarks
     * Causes the simulated player to use an item on a block. The
     * block at the specified block location must be solid. Returns
     * true if the item was used.
     * @param itemStack
     * Item to use.
     * @param blockLocation
     * Location to use the item upon.
     * @param direction
     * Direction to place the specified item within.
     * @param faceLocationX
     * Block-face-relative X position where to place the item.
     * @param faceLocationY
     * Block-face-relative Y position where to place the item.
     * @throws This function can throw errors.
     */
    useItemOnBlock(itemStack: mojangminecraft.ItemStack, blockLocation: mojangminecraft.BlockLocation, direction?: number, faceLocationX?: number, faceLocationY?: number): boolean;
}
/**
 * These well-known tags can be used to classify different
 * tests into suites to run.
 */
// tslint:disable-next-line:no-unnecessary-class
export class Tags {
    /**
     * Indicates that the tagged test should be a part of all
     * suites.
     */
    static readonly "suiteAll" = "suite:all";
    /**
     * Indicates that the tagged test should be a part of an
     * internal (debug) test suite.
     */
    static readonly "suiteDebug" = "suite:debug";
    /**
     * Indicates that the tagged test should be a part of the
     * default test suite.
     */
    static readonly "suiteDefault" = "suite:default";
    /**
     * Indicates that the tagged test should be a part of a suite
     * of disabled tests.
     */
    static readonly "suiteDisabled" = "suite:disabled";
}
/**
 * Main class for GameTest functions, with helpers and data for
 * manipulating the respective test. Note that all methods of
 * this class expect BlockLocations and Locations relative to
 * the GameTest structure block.
 */
export class Test {
    /**
     * @remarks
     * Tests that the condition specified in _condition_ is true.
     * If not, an error with the specified _message_ is thrown.
     * @param condition
     * Expression of the condition to evaluate.
     * @param message
     * Message that is passed if the _condition_ does not evaluate
     * to true.
     * @throws This function can throw errors.
     */
    assert(condition: boolean, message: string): void;
    /**
     * @remarks
     * Tests that a block of the specified type is present at the
     * specified location. If it is not, an exception is thrown.
     * @param blockType
     * Expected block type.
     * @param blockLocation
     * Location of the block to test at.
     * @param isPresent
     * If true, this function tests whether a block of the
     * specified type is at the location. If false, tests that a
     * block of the specified type is not present.
     * @throws This function can throw errors.
     */
    assertBlockPresent(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    /**
     * @remarks
     * Tests that a block has a particular state value at the
     * specified location. If it does not have that state value, an
     * exception is thrown.
     * @param blockLocation
     * Location of the block to test at.
     * @param callback
     * Callback function that contains additional tests based on
     * the block at the specified location.
     * @throws This function can throw errors.
     * @example testIfButtonNotPressed.js
     * ```typescript
     *        test.assertBlockState(buttonPos, (block) => {
     *        return block.getBlockData().getProperty("button_pressed_bit") == 0;
     *        });
     * ```
     */
    assertBlockState(blockLocation: mojangminecraft.BlockLocation, callback: (arg: mojangminecraft.Block) => boolean): void;
    /**
     * @remarks
     * Tests that an entity can reach a particular location.
     * Depending on the value of canReach, throws an exception if
     * the condition is not met.
     * @param mob
     * Entity that you wish to test the location against.
     * @param blockLocation
     * Structure-relative location to test whether the specified
     * mob can reach.
     * @param canReach
     * If true, tests whether the mob can reach the location. If
     * false, tests whether the mob is not able to reach the
     * location.
     * @throws This function can throw errors.
     */
    assertCanReachLocation(mob: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation, canReach?: boolean): void;
    /**
     * @remarks
     * Tests that a container (e.g., a chest) at the specified
     * location contains a specified of item stack. If not, an
     * error is thrown.
     * @param itemStack
     * Represents the type of item to check for. The specified
     * container must contain at least 1 item matching the item
     * type defined in _itemStack_.
     * @param blockLocation
     * Location of the block with a container (for example, a
     * chest) to test the contents of.
     * @throws This function can throw errors.
     */
    assertContainerContains(itemStack: mojangminecraft.ItemStack, blockLocation: mojangminecraft.BlockLocation): void;
    /**
     * @remarks
     * Tests that a container (e.g., a chest) at the specified
     * location is empty. If not, an error is thrown.
     * @param blockLocation
     * Location of the block with a container (for example, a
     * chest) to test is empty of contents.
     * @throws This function can throw errors.
     */
    assertContainerEmpty(blockLocation: mojangminecraft.BlockLocation): void;
    /**
     * @remarks
     * Tests that an entity has a specific piece of armor equipped.
     * If not, an error is thrown.
     * @param entityTypeIdentifier
     * Identifier of the entity to match (e.g.,
     * 'minecraft:skeleton').
     * @param armorSlot
     * Container slot index to test.
     * @param armorName
     * Name of the armor to look for.
     * @param armorData
     * Data value integer to look for.
     * @param blockLocation
     * Location of the entity with armor to test for.
     * @param hasArmor
     * Whether or not the entity is expected to have the specified
     * armor equipped.
     * @throws This function can throw errors.
     * @example horseArmorTest.js
     * ```typescript
     *        test.assertEntityHasArmor("minecraft:horse", armorSlotTorso, "diamond_horse_armor", 0, horseLocation, true);
     *
     * ```
     */
    assertEntityHasArmor(entityTypeIdentifier: string, armorSlot: number, armorName: string, armorData: number, blockLocation: mojangminecraft.BlockLocation, hasArmor?: boolean): void;
    /**
     * @remarks
     * Tests that an entity has a particular component. If not, an
     * exception is thrown.
     * @param entityTypeIdentifier
     * Identifier of the specified entity (e.g.,
     * 'minecraft:skeleton'). If the namespace is not specified,
     * 'minecraft:' is assumed.
     * @param componentIdentifier
     * Identifier of the component to check for. If the namespace
     * is not specified, 'minecraft:' is assumed.
     * @param blockLocation
     * Location of the block with a container (for example, a
     * chest.)
     * @param hasComponent
     * Determines whether to test that the component exists, or
     * does not.
     * @throws This function can throw errors.
     * @example sheepShearedTest.js
     * ```typescript
     *        test.assertEntityHasComponent("minecraft:sheep", "minecraft:is_sheared", entityLoc, false);
     *
     * ```
     */
    assertEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: mojangminecraft.BlockLocation, hasComponent?: boolean): void;
    /**
     * @remarks
     * Depending on the value for isPresent, tests that a
     * particular entity is present or not present at the specified
     * location. Depending on the value of isPresent, if the entity
     * is found or not found, an error is thrown.
     * @param entity
     * Specific entity to test for.
     * @param blockLocation
     * Location of the entity to test for.
     * @param isPresent
     * Whether to test that an entity is present or not present at
     * the specified location.
     * @throws This function can throw errors.
     */
    assertEntityInstancePresent(entity: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    /**
     * @remarks
     * Depending on the value of isPresent, tests for the presence
     * or non-presence of entity of a specified type at a
     * particular location. If the condition is not met, an
     * exception is thrown.
     * @param entityTypeIdentifier
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * @param blockLocation
     * Location of the entity to test for.
     * @param isPresent
     * If true, this function tests whether an entity of the
     * specified type is present. If false, tests that an entity of
     * the specified type is not present.
     * @throws This function can throw errors.
     */
    assertEntityPresent(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    /**
     * @remarks
     * Tests that an entity of a specified type is present within
     * the GameTest area. If not, an exception is thrown.
     * @param entityTypeIdentifier
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * @param isPresent
     * If true, this function tests whether an entity of the
     * specified type is present in the GameTest area. If false,
     * tests that an entity of the specified type is not present.
     * @throws This function can throw errors.
     */
    assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void;
    /**
     * @remarks
     * Tests that an entity (e.g., a skeleton) at the specified
     * location has a particular piece of data. If not, an error is
     * thrown.
     * @param blockLocation
     * Location of the entity to look for.
     * @param entityTypeIdentifier
     * Identifier of the entity (e.g., 'minecraft:skeleton') to
     * look for. Note if no namespace is specified, 'minecraft:' is
     * assumed.
     * @param callback
     * Callback function where facets of the selected entity can be
     * tested for. If this callback function returns false or no
     * entity with the specified identifier is found, an exception
     * is thrown.
     * @throws This function can throw errors.
     * @example villagerEffectTest.js
     * ```typescript
     *        test.assertEntityState(
     *        villagerPos,
     *        "minecraft:villager_v2",
     *        (entity) => entity.getEffect(MinecraftEffectTypes.regeneration).duration > 120
     *        ); // At least 6 seconds remaining in the villagers' effect
     *
     * ```
     */
    assertEntityState(blockLocation: mojangminecraft.BlockLocation, entityTypeIdentifier: string, callback: (arg: mojangminecraft.Entity) => boolean): void;
    /**
     * @remarks
     * Depending on the value of isTouching, tests that an entity
     * of a specified type is touching or connected to another
     * entity. If the condition is not met, an exception is thrown.
     * @param entityTypeIdentifier
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * @param location
     * Location of the entity to test for.
     * @param isTouching
     * If true, this function tests whether the entity is touching
     * the specified location. If false, tests that an entity is
     * not testing the specified location.
     * @throws This function can throw errors.
     */
    assertEntityTouching(entityTypeIdentifier: string, location: mojangminecraft.Location, isTouching?: boolean): void;
    /**
     * @remarks
     * Depending on the value of isWaterlogged, tests that a block
     * at a location contains water. If the condition is not met,
     * an error is thrown. Pure water blocks are not considered to
     * be waterlogged.
     * @param blockLocation
     * Location of the block to test for.
     * @param isWaterlogged
     * Whether to test that the block at _position_ is expected to
     * be waterlogged.
     * @throws This function can throw errors.
     */
    assertIsWaterlogged(blockLocation: mojangminecraft.BlockLocation, isWaterlogged?: boolean): void;
    /**
     * @remarks
     * Tests that items of a particular type and count are present
     * within an area. If not, an error is thrown.
     * @param itemType
     * Type of item to look for.
     * @param blockLocation
     * Location to search around for the specified set of items.
     * @param searchDistance
     * Range, in blocks, to aggregate a count of items around. If
     * 0, will only search the particular block at _position_.
     * @param count
     * Number of items, at minimum, to look and test for.
     * @throws This function can throw errors.
     * @example findFeathers.js
     * ```typescript
     *        test.assertItemEntityCountIs(Items.feather, expectedFeatherLoc, 0, 1);
     *
     * ```
     */
    assertItemEntityCountIs(itemType: mojangminecraft.ItemType, blockLocation: mojangminecraft.BlockLocation, searchDistance: number, count: number): void;
    /**
     * @remarks
     * Depending on the value of isPresent, tests whether a
     * particular item entity is present or not at a particular
     * location. If the condition is not met, an exception is
     * thrown.
     * @param itemType
     * Type of item to test for.
     * @param blockLocation
     * Location of the item entity to test for.
     * @param searchDistance
     * Radius in blocks to look for the item entity.
     * @param isPresent
     * If true, this function tests whether an item entity of the
     * specified type is present. If false, tests that an item
     * entity of the specified type is not present.
     * @throws This function can throw errors.
     */
    assertItemEntityPresent(itemType: mojangminecraft.ItemType, blockLocation: mojangminecraft.BlockLocation, searchDistance: number, isPresent?: boolean): void;
    /**
     * @remarks
     * Tests that Redstone power at a particular location matches a
     * particular value. If not, an exception is thrown.
     * @param blockLocation
     * Location to test.
     * @param power
     * Expected power level.
     * @throws This function can throw errors.
     */
    assertRedstonePower(blockLocation: mojangminecraft.BlockLocation, power: number): void;
    /**
     * @remarks
     * Marks the current test as a failure case.
     * @param errorMessage
     * Error message summarizing the failure condition.
     * @throws This function can throw errors.
     */
    fail(errorMessage: string): void;
    /**
     * @remarks
     * Runs the given callback. If the callback does not throw an
     * exception, the test is marked as a failure.
     * @param callback
     * Callback function that runs. If the function runs
     * successfully, the test is marked as a failure. Typically,
     * this function will have .assertXyz method calls within it.
     * @throws This function can throw errors.
     */
    failIf(callback: () => void): void;
    /**
     * @remarks
     * Gets a block at the specified block location.
     * @param blockLocation
     * Location of the block to retrieve.
     * @throws This function can throw errors.
     */
    getBlock(blockLocation: mojangminecraft.BlockLocation): mojangminecraft.Block;
    /**
     * @remarks
     * Gets the dimension of this test.
     * @throws This function can throw errors.
     */
    getDimension(): mojangminecraft.Dimension;
    /**
     * @remarks
     * If the block at the specified block location is a fence,
     * this returns a helper object with details on how a fence is
     * connected.
     * @param blockLocation
     * Location of the block to retrieve.
     * @throws This function can throw errors.
     */
    getFenceConnectivity(blockLocation: mojangminecraft.BlockLocation): FenceConnectivity;
    /**
     * @remarks
     * Returns the direction of the current test - see the
     * {@link mojang-minecraft}.Direction enum for more information on
     * potential values (north, east, south, west - values 2-5).
     */
    getTestDirection(): mojangminecraft.Direction;
    /**
     * @remarks
     * This asynchronous function will wait for the specified time
     * in ticks before continuing execution.
     * @param tickDelay
     * Amount of time to wait, in ticks.
     */
    idle(tickDelay: number): Promise<void>;
    /**
     * @remarks
     * Kills all entities within the GameTest structure.
     * @throws This function can throw errors.
     */
    killAllEntities(): void;
    /**
     * @remarks
     * Presses a button at a block location.
     * @param blockLocation
     * Location to push the button at.
     * @throws
     * Will throw an error if a button is not present at the
     * specified position.
     */
    pressButton(blockLocation: mojangminecraft.BlockLocation): void;
    /**
     * @remarks
     * Displays the specified message to all players.
     * @param text
     * Message to display.
     * @throws This function can throw errors.
     */
    print(text: string): void;
    /**
     * @remarks
     * Pulls a lever at a block location.
     * @param blockLocation
     * Location to pull the lever at.
     * @throws
     * Will throw an error if a lever is not present at the
     * specified position.
     */
    pullLever(blockLocation: mojangminecraft.BlockLocation): void;
    /**
     * @remarks
     * Sends a Redstone pulse at a particular location by creating
     * a temporary Redstone block.
     * @param blockLocation
     * Location to pulse Redstone at.
     * @param duration
     * Number of ticks to pulse Redstone.
     * @throws This function can throw errors.
     */
    pulseRedstone(blockLocation: mojangminecraft.BlockLocation, duration: number): void;
    /**
     * @remarks
     * From a BlockLocation, returns a new BlockLocation with
     * coordinates relative to the current GameTest structure
     * block. For example, the relative coordinates for the block
     * above the structure block are (0, 1, 0). Rotation of the
     * GameTest structure is also taken into account.
     * @param worldBlockLocation
     * Absolute location in the world to convert to a relative
     * location.
     * @returns
     * A location relative to the GameTest command block.
     * @throws This function can throw errors.
     */
    relativeBlockLocation(worldBlockLocation: mojangminecraft.BlockLocation): mojangminecraft.BlockLocation;
    /**
     * @remarks
     * From a location, returns a new location with coordinates
     * relative to the current GameTest structure block. For
     * example, the relative coordinates for the block above the
     * structure block are (0, 1, 0). Rotation of the GameTest
     * structure is also taken into account.
     * @param worldLocation
     * Absolute location in the world to convert to a relative
     * location.
     * @returns
     * A location relative to the GameTest command block.
     * @throws This function can throw errors.
     */
    relativeLocation(worldLocation: mojangminecraft.Location): mojangminecraft.Location;
    /**
     * @remarks
     * Removes a simulated player from the world.
     * @param simulatedPlayer
     * Simulated player to remove.
     */
    removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void;
    /**
     * @remarks
     * Returns a relative direction given the current rotation of
     * the current test. Passing in Direction.south will return the
     * test direction; Passing in Direction.north will return the
     * opposite of the test direction, and so on.
     * @param direction
     * Direction to translate into a direction relative to the
     * GameTest facing. Passing in Direction.south will return the
     * test direction; Passing in Direction.north will return the
     * opposite of the test direction, and so on.
     * @throws This function can throw errors.
     */
    rotateDirection(direction: mojangminecraft.Direction): mojangminecraft.Direction;
    /**
     * @remarks
     * Runs a specific callback after a specified delay of ticks
     * @param delayTicks
     * Number of ticks to delay before running the specified
     * callback.
     * @param callback
     * Callback function to execute.
     * @throws This function can throw errors.
     */
    runAfterDelay(delayTicks: number, callback: () => void): void;
    /**
     * @remarks
     * Runs the given callback after a delay of _tick_ ticks from
     * the start of the GameTest.
     * @param tick
     * Tick (after the start of the GameTest) to run the callback
     * at.
     * @param callback
     * Callback function to execute.
     * @throws This function can throw errors.
     */
    runAtTickTime(tick: number, callback: () => void): void;
    /**
     * @remarks
     * Sets a block to a particular configuration (a
     * BlockPermutation) at the specified block location.
     * @param blockData
     * Permutation that contains the configuration data for a
     * block.
     * @param blockLocation
     * Location of the block to set.
     * @throws This function can throw errors.
     */
    setBlockPermutation(blockData: mojangminecraft.BlockPermutation, blockLocation: mojangminecraft.BlockLocation): void;
    /**
     * @remarks
     * Sets a block to a particular type at the specified block
     * location.
     * @param blockType
     * Type of block to set.
     * @param blockLocation
     * Location of the block to set.
     * @throws This function can throw errors.
     */
    setBlockType(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation): void;
    /**
     * @remarks
     * For blocks that are fluid containers - like a cauldron -
     * changes the type of fluid within that container.
     * @param location
     * Location of the fluid container block.
     * @param type
     * Type of fluid to set. See {@link mojang-gametest}.FluidType for a
     * list of values.
     * @throws This function can throw errors.
     */
    setFluidContainer(location: mojangminecraft.BlockLocation, type: number): void;
    /**
     * @remarks
     * Sets the fuse of an explodable entity.
     * @param entity
     * Entity that is explodable.
     * @param fuseLength
     * Length of time, in ticks, before the entity explodes.
     * @throws This function can throw errors.
     */
    setTntFuse(entity: mojangminecraft.Entity, fuseLength: number): void;
    /**
     * @remarks
     * Spawns an entity at a location.
     * @param entityTypeIdentifier
     * Type of entity to create. If no namespace is provided,
     * 'minecraft:' is assumed. Note that an optional initial spawn
     * event can be specified between less than/greater than signs
     * (e.g., namespace:entityType<spawnEvent>).
     * @param blockLocation
     * @returns
     * The spawned entity. If the entity cannot be spawned, returns
     * undefined.
     * @throws This function can throw errors.
     * @example spawnAdultPig.js
     * ```typescript
     *        test.spawn("minecraft:pig<minecraft:ageable_grow_up>", new BlockLocation(1, 2, 1));
     *
     * ```
     */
    spawn(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation): mojangminecraft.Entity;
    /**
     * @remarks
     * Spawns an entity at a location.
     * @param entityTypeIdentifier
     * Type of entity to create. If no namespace is provided,
     * 'minecraft:' is assumed. Note that an optional initial spawn
     * event can be specified between less than/greater than signs
     * (e.g., namespace:entityType<spawnEvent>).
     * @param location
     * @returns
     * The spawned entity. If the entity cannot be spawned, returns
     * undefined.
     * @throws This function can throw errors.
     * @example spawnAdultPig.js
     * ```typescript
     *        test.spawn("minecraft:pig<minecraft:ageable_grow_up>", new Location(1.5, 2, 1.5));
     * ```
     */
    spawnAtLocation(entityTypeIdentifier: string, location: mojangminecraft.Location): mojangminecraft.Entity;
    /**
     * @remarks
     * Spawns an item entity at a specified location.
     * @param itemStack
     * ItemStack that describes the item entity to create.
     * @param location
     * Location to create the item entity at.
     * @throws This function can throw errors.
     * @example spawnEmeralds.js
     * ```typescript
     *        const oneEmerald = new ItemStack(MinecraftItemTypes.emerald, 1, 0);
     *        const fiveEmeralds = new ItemStack(MinecraftItemTypes.emerald, 5, 0);
     *
     *        test.spawnItem(oneEmerald, new Location(3.5, 3, 1.5));
     *        test.spawnItem(fiveEmeralds, new Location(1.5, 3, 1.5));
     *
     * ```
     */
    spawnItem(itemStack: mojangminecraft.ItemStack, location: mojangminecraft.Location): mojangminecraft.Entity;
    /**
     * @remarks
     * Creates a new simulated player within the world.
     * @param blockLocation
     * Location where to spawn the simulated player.
     * @param name
     * Name to give the new simulated player.
     * @param gameMode
     * @throws This function can throw errors.
     */
    spawnSimulatedPlayer(blockLocation: mojangminecraft.BlockLocation, name?: string, gameMode?: mojangminecraft.GameMode): SimulatedPlayer;
    /**
     * @remarks
     * Spawns an entity at a location without any AI behaviors.
     * This method is frequently used in conjunction with methods
     * like .walkTo to create predictable mob actions.
     * @param entityTypeIdentifier
     * @param blockLocation
     * Location where the entity should be spawned.
     * @throws This function can throw errors.
     */
    spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation): mojangminecraft.Entity;
    /**
     * @remarks
     * Spawns an entity at a location without any AI behaviors.
     * This method is frequently used in conjunction with methods
     * like .walkTo to create predictable mob actions.
     * @param entityTypeIdentifier
     * @param location
     * Location where the entity should be spawned.
     * @throws This function can throw errors.
     */
    spawnWithoutBehaviorsAtLocation(entityTypeIdentifier: string, location: mojangminecraft.Location): mojangminecraft.Entity;
    /**
     * @remarks
     * Tests that a particular item entity is present at a
     * particular location. If not, an exception is thrown.
     * @param blockLocation
     * BlockLocation containing a multiface block.
     * @param fromFace
     * Face to spread from. This face must already be set.
     * @param direction
     * Direction to spread. Use the Minecraft.Direction enum to
     * specify a direction.
     * @throws This function can throw errors.
     * @example spreadFromFaceTowardDirection.js
     * ```typescript
     *        test.spreadFromFaceTowardDirection(new BlockLocation(1, 2, 1), Direction.south, Direction.down);
     * ```
     */
    spreadFromFaceTowardDirection(blockLocation: mojangminecraft.BlockLocation, fromFace: mojangminecraft.Direction, direction: mojangminecraft.Direction): void;
    /**
     * @remarks
     * Creates a new GameTestSequence - A set of steps that play
     * out sequentially within a GameTest.
     * @returns
     * A new GameTestSequence with chaining methods that facilitate
     * creating a set of steps.
     */
    startSequence(): GameTestSequence;
    /**
     * @remarks
     * Marks the current test as a success case.
     * @throws This function can throw errors.
     */
    succeed(): void;
    /**
     * @remarks
     * Runs the given callback. If the callback does not throw an
     * exception, the test is marked as a success.
     * @param callback
     * Callback function that runs. If the function runs
     * successfully, the test is marked as a success. Typically,
     * this function will have .assertXyz method calls within it.
     * @throws This function can throw errors.
     */
    succeedIf(callback: () => void): void;
    /**
     * @remarks
     * Marks the test as a success at the specified tick.
     * @param tick
     * Tick after the start of the GameTest to mark the test as
     * successful.
     * @throws This function can throw errors.
     */
    succeedOnTick(tick: number): void;
    /**
     * @remarks
     * Runs the given callback at _tick_ ticks after the start of
     * the test. If the callback does not throw an exception, the
     * test is marked as a failure.
     * @param tick
     * Tick after the start of the GameTest to run the testing
     * callback at.
     * @param callback
     * Callback function that runs. If the function runs
     * successfully, the test is marked as a success.
     * @throws This function can throw errors.
     */
    succeedOnTickWhen(tick: number, callback: () => void): void;
    /**
     * @remarks
     * Runs the given callback every tick. When the callback
     * successfully executes, the test is marked as a success.
     * Specifically, the test will succeed when the callback does
     * not throw an exception.
     * @param callback
     * Testing callback function that runs. If the function runs
     * successfully, the test is marked as a success.
     * @throws This function can throw errors.
     */
    succeedWhen(callback: () => void): void;
    /**
     * @remarks
     * Depending on the condition of isPresent, tests for the
     * presence of a block of a particular type on every tick. When
     * the specified block of a type is found or not found
     * (depending on isPresent), the test is marked as a success.
     * @param blockType
     * Type of block to test for.
     * @param blockLocation
     * Location of the block to test at.
     * @param isPresent
     * If true, this function tests whether a block of the
     * specified type is present. If false, tests that a block of
     * the specified type is not present.
     * @throws This function can throw errors.
     */
    succeedWhenBlockPresent(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    /**
     * @remarks
     * Tests for the presence of a component on every tick.
     * Depending on the value of hasComponent, when the specified
     * component is found, the test is marked as a success.
     * @param entityTypeIdentifier
     * Type of entity to look for. If no namespace is specified,
     * 'minecraft:' is assumed.
     * @param componentIdentifier
     * Type of component to test for the presence of. If no
     * namespace is specified, 'minecraft:' is assumed.
     * @param blockLocation
     * Block location of the entity to test.
     * @param hasComponent
     * If true, this function tests for the presence of a
     * component. If false, this function tests for the lack of a
     * component.
     * @throws This function can throw errors.
     */
    succeedWhenEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: mojangminecraft.BlockLocation, hasComponent: boolean): void;
    /**
     * @remarks
     * Depending on the value of isPresent, tests for the presence
     * of an entity on every tick. When an entity of the specified
     * type is found or not found (depending on isPresent), the
     * test is marked as a success.
     * @param entityTypeIdentifier
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * @param blockLocation
     * Location of the entity to test for.
     * @param isPresent
     * If true, this function tests whether an entity of the
     * specified type is present. If false, tests that an entity of
     * the specified type is not present.
     * @throws This function can throw errors.
     */
    succeedWhenEntityPresent(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    /**
     * @remarks
     * Triggers a block event from a fixed list of available block
     * events.
     * @param blockLocation
     * @param event
     * Event to trigger. Valid values include minecraft:drip,
     * minecraft:grow_stalagtite, minecraft:grow_stalagmite,
     * minecraft:grow_up, minecraft:grow_down and
     * minecraft:grow_sideways.
     * @param eventParameters
     * @throws This function can throw errors.
     */
    triggerInternalBlockEvent(blockLocation: mojangminecraft.BlockLocation, event: string, eventParameters?: number[]): void;
    /**
     * @remarks
     * This asynchronous function will wait until the code in the
     * specified callback successfully completes. until can be used
     * in conjunction with .assert functions to evaluate that a
     * condition is true.
     * @param callback
     * Function with code to evaluate.
     */
    until(callback: () => void): Promise<void>;
    /**
     * @remarks
     * Forces a mob to walk to a particular location. Usually used
     * in conjunction with methods like .spawnWithoutBehaviors to
     * have more predictable mob behaviors. Mobs will stop
     * navigation as soon as they intersect the target location.
     * @param mob
     * Mob entity to give orders to.
     * @param blockLocation
     * Location where the entity should be walk to.
     * @param speedModifier
     * Adjustable modifier to the mob's walking speed.
     * @throws This function can throw errors.
     */
    walkTo(mob: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation, speedModifier?: number): void;
    /**
     * @remarks
     * Forces a mob to walk to a particular location. Usually used
     * in conjunction with methods like .spawnWithoutBehaviors to
     * have more predictable mob behaviors. Mobs will stop
     * navigation as soon as they intersect the target location.
     * @param mob
     * Mob entity to give orders to.
     * @param location
     * Location where the entity should be walk to.
     * @param speedModifier
     * Adjustable modifier to the mob's walking speed.
     * @throws This function can throw errors.
     */
    walkToLocation(mob: mojangminecraft.Entity, location: mojangminecraft.Location, speedModifier?: number): void;
    /**
     * @remarks
     * From a BlockLocation with coordinates relative to the
     * GameTest structure block, returns a new BlockLocation with
     * coordinates relative to world. Rotation of the GameTest
     * structure is also taken into account.
     * @param relativeBlockLocation
     * Location relative to the GameTest command block.
     * @returns
     * An absolute location relative to the GameTest command block.
     * @throws This function can throw errors.
     */
    worldBlockLocation(relativeBlockLocation: mojangminecraft.BlockLocation): mojangminecraft.BlockLocation;
    /**
     * @remarks
     * From a location with coordinates relative to the GameTest
     * structure block, returns a new location with coordinates
     * relative to world. Rotation of the GameTest structure is
     * also taken into account.
     * @param relativeLocation
     * Location relative to the GameTest command block.
     * @returns
     * An absolute location relative to the GameTest command block.
     * @throws This function can throw errors.
     */
    worldLocation(relativeLocation: mojangminecraft.Location): mojangminecraft.Location;
}
/**
 * @remarks
 * Registers a new GameTest function. This GameTest will become
 * available in Minecraft via /gametest run
 * [testClassName]:[testName].
 * @param testClassName
 * Name of the class of tests this test should be a part of.
 * @param testName
 * Name of this specific test.
 * @param testFunction
 * Implementation of the test function.
 * @returns
 * Returns a {@link mojang-gametest.RegistrationBuilder} object where
 * additional options for this test can be specified via
 * builder methods.
 * @example example1.js
 * ```typescript
 *        GameTest.register("ExampleTests", "alwaysFail", (test) => {
 *        test.fail("This test, runnable via '/gametest run ExampleTests:alwaysFail', will always fail");
 *        });
 *
 * ```
 */
export function register(testClassName: string, testName: string, testFunction: (arg: Test) => void): RegistrationBuilder;
/**
 * @remarks
 * Registers a new GameTest function that is designed for
 * asynchronous execution. This GameTest will become available
 * in Minecraft via /gametest run [testClassName]:[testName].
 * @param testClassName
 * Name of the class of tests this test should be a part of.
 * @param testName
 * Name of this specific test.
 * @param testFunction
 * Implementation of the test function.
 * @returns
 * Returns a {@link mojang-gametest.RegistrationBuilder} object where
 * additional options for this test can be specified via
 * builder methods.
 * @example example1.js
 * ```typescript
 *        GameTest.register("ExampleTests", "alwaysFail", (test) => {
 *        test.fail("This test, runnable via '/gametest run ExampleTests:alwaysFail', will always fail");
 *        });
 *
 * ```
 */
export function registerAsync(testClassName: string, testName: string, testFunction: (arg: Test) => Promise<void>): RegistrationBuilder;
