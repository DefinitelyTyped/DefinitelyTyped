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
 * Returns information about whether this fence is connected to
 * other fences in several directions.
 */
export class FenceConnectivity {
    /**
     * Represents whether this fence block is connected to another
     * fence to the east (x + 1).
     */
    "east": boolean;
    /**
     * Represents whether this fence block is connected to another
     * fence to the north (z - 1).
     */
    "north": boolean;
    /**
     * Represents whether this fence block is connected to another
     * fence to the south (z + 1).
     */
    "south": boolean;
    /**
     * Represents whether this fence block is connected to another
     * fence to the west (x - 1).
     */
    "west": boolean;
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
     * @returns Returns a GameTestSequence object where additional .thenXyz method steps can be added.
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
     * @returns Returns a GameTestSequence object where additional .thenXyz method steps can be added.
     */
    thenExecuteAfter(delayTicks: number, callback: () => void): GameTestSequence;
    /**
     * @remarks
     * Runs the given callback every tick for the given number of
     * ticks.
     * @param tickCount
     * @param callback
     * Callback function to execute.
     * @returns Returns a GameTestSequence object where additional .thenXyz method steps can be added.
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
     * @returns Returns a GameTestSequence object where additional .thenXyz method steps can be added.
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
     * @returns Returns a GameTestSequence object where additional .thenXyz method steps can be added.
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
     * @returns Returns a GameTestSequence object where additional .thenXyz method steps can be added.
     */
    thenWaitWithDelay(delayTicks: number, callback: () => void): GameTestSequence;
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
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    batch(batchName: ('night'|'day')): RegistrationBuilder;
    /**
     * @remarks
     * Sets the maximum number of times a test will try to rerun if
     * it fails.
     * @param attemptCount
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    maxAttempts(attemptCount: number): RegistrationBuilder;
    /**
     * @remarks
     * Sets the maximum number of ticks a test will run for before
     * timing out and failing.
     * @param tickCount
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    maxTicks(tickCount: number): RegistrationBuilder;
    /**
     * @remarks
     * Size around the GameTest, in blocks, that should be reserved
     * for the test when running multiple tests together.
     * @param paddingBlocks
     * Size, in blocks, around the GameTest where additional
     * GameTests should not be created.
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    padding(paddingBlocks: number): RegistrationBuilder;
    /**
     * @remarks
     * Whether this test is required to pass as part of its broader
     * set of tests.
     * @param isRequired
     * If set to true, the test must pass in order for the entire
     * run of tests to pass.
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    required(isRequired: boolean): RegistrationBuilder;
    /**
     * @remarks
     * Sets the number of successful test runs to be considered
     * successful.
     * @param attemptCount
     * @returns RegistrationBuilder object where additional configuration methods can be called.
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
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    setupTicks(tickCount: number): RegistrationBuilder;
    /**
     * @remarks
     * Sets the name of the structure for a test to use. "xyz:bar"
     * will load `/structures/xyz/bar.mcstructure` from the
     * behavior pack stack.
     * @param structureName
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    structureName(structureName: string): RegistrationBuilder;
    /**
     * @remarks
     * Adds a tag to a test. You can run all tests with a given tag
     * with `/gametest runset <tag>`.
     * @param tag
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    tag(tag: string): RegistrationBuilder;
}
/**
 * These well-known tags can be used to classify different
 * tests into suites to run.
 */
export class Tags {
    /**
     * Indicates that the tagged test should be a part of all
     * suites.
     */
    "suiteAll": string;
    /**
     * Indicates that the tagged test should be a part of an
     * internal (debug) test suite.
     */
    "suiteDebug": string;
    /**
     * Indicates that the tagged test should be a part of the
     * default test suite.
     */
    "suiteDefault": string;
    /**
     * Indicates that the tagged test should be a part of a
     * a suite of disabled tests.
     */
    "suiteDisabled": string;
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
     * @param blockLocation
     * Location of the block to test at.
     * @param isPresent
     * @throws This function can throw errors.
     */
    assertBlockPresent(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation, isPresent: boolean): void;
    /**
     * @remarks
     * Tests that a block has a particular state value at the
     * specified location. If it does not have that state value, an
     * exception is thrown.
     * @param blockLocation
     * Location of the block to test at.
     * @param callback
     * @throws This function can throw errors.
     * @example testIfButtonNotPressed.js
     * ```typescript
     *        test.assertBlockState("button_pressed_bit", 0, buttonPos);
     *
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
    assertCanReachLocation(mob: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation, canReach: boolean): void;
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
     * @param armorSlot
     * Container slot index to test.
     * @param armorName
     * Name of the armor to look for.
     * @param armorData
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
    assertEntityHasArmor(entityTypeIdentifier: string, armorSlot: number, armorName: string, armorData: number, blockLocation: mojangminecraft.BlockLocation, hasArmor: boolean): void;
    /**
     * @remarks
     * Tests that an entity has a particular component. If not, an
     * exception is thrown.
     * @param entityTypeIdentifier
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
    assertEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: mojangminecraft.BlockLocation, hasComponent: boolean): void;
    /**
     * @remarks
     * Tests that a particular entity is still present and alive
     * within the GameTest area. If not, an error is thrown.
     * @param entity
     * Specific entity to test for.
     * @param blockLocation
     * @throws This function can throw errors.
     */
    assertEntityInstancePresent(entity: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation): void;
    /**
     * @remarks
     * Depending on the value of isPresent, tests for the presence
     * or non-presence of entity of a specified type at a
     * particular location. If the condition is not met, an
     * exception is thrown.
     * @param entityTypeIdentifier
     * @param blockLocation
     * Location of the entity to test for.
     * @param isPresent
     * If true, this function tests whether an entity of the
     * specified type is present. If false, tests that an entity of
     * the specified type is not present.
     * @throws This function can throw errors.
     */
    assertEntityPresent(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation, isPresent: boolean): void;
    /**
     * @remarks
     * Tests that an entity of a specified type is present within
     * the GameTest area. If not, an exception is thrown.
     * @param entityTypeIdentifier
     * @param isPresent
     * @throws This function can throw errors.
     */
    assertEntityPresentInArea(entityTypeIdentifier: string, isPresent: boolean): void;
    /**
     * @remarks
     * Tests that an entity (e.g., a skeleton) at the specified
     * location has a particular piece of data. If not, an error is
     * thrown.
     * @param blockLocation
     * Location of the entity to look for.
     * @param entityTypeIdentifier
     * @param callback
     * Callback function where facets of the selected entity can be
     * tested for. If this callback function returns false or no
     * entity with the specified identifier is found, an exception
     * is thrown.
     * @throws This function can throw errors.
     * @example villagerEffectTest.js
     * ```typescript
     *        test.assertEntityData(
     *        villagerPos,
     *        "minecraft:villager",
     *        (entity) => entity.getEffect(Effects.regeneration).getDuration() > 120
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
     * @param location
     * Location of the entity to test for.
     * @param isTouching
     * If true, this function tests whether the entity is touching
     * the specified location. If false, tests that an entity is
     * not testing the specified location.
     * @throws This function can throw errors.
     */
    assertEntityTouching(entityTypeIdentifier: string, location: mojangminecraft.Location, isTouching: boolean): void;
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
    assertIsWaterlogged(blockLocation: mojangminecraft.BlockLocation, isWaterlogged: boolean): void;
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
    assertItemEntityPresent(itemType: mojangminecraft.ItemType, blockLocation: mojangminecraft.BlockLocation, searchDistance: number, isPresent: boolean): void;
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
     * @throws This function can throw errors.
     */
    getBlock(blockLocation: mojangminecraft.BlockLocation): mojangminecraft.Block;
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
     * {@link mojang-minecraft.Direction} enum for more information on
     * potential values (north, east, south, west - values 2-5).
     */
    getTestDirection(): number;
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
     * @throws Will throw an error if a button is not present at the specified position.
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
     * @throws Will throw an error if a lever is not present at the specified position.
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
     * @returns A location relative to the GameTest command block.
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
     * @returns A location relative to the GameTest command block.
     * @throws This function can throw errors.
     */
    relativeLocation(worldLocation: mojangminecraft.Location): mojangminecraft.Location;
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
    rotateDirection(direction: number): number;
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
     * @throws This function can throw errors.
     */
    setBlockPermutation(blockData: mojangminecraft.BlockPermutation, blockLocation: mojangminecraft.BlockLocation): void;
    /**
     * @remarks
     * Sets a block to a particular type at the specified block
     * location.
     * @param blockType
     * @param blockLocation
     * Location of the block to set.
     * @throws This function can throw errors.
     */
    setBlockType(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation): void;
    /**
     * @remarks
     * Sets the fuse of an explodable entity.
     * @param entity
     * @param fuseLength
     * Length of time, in ticks, before the entity explodes.
     * @throws This function can throw errors.
     */
    setTntFuse(entity: mojangminecraft.Entity, fuseLength: number): void;
    /**
     * @remarks
     * Spawns an entity at a location.
     * @param entityTypeIdentifier
     * @param blockLocation
     * @returns The spawned entity. If the entity cannot be spawned, returns,undefined.
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
     * @param location
     * Location where the entity should be spawned.
     * @returns The spawned entity. If the entity cannot be spawned, returns,undefined.
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
     *        const oneEmerald = new ItemStack(Items.emerald, 1, 0);
     *        const fiveEmeralds = new ItemStack(Items.emerald, 5, 0);
     *
     *        test.spawnItem(oneEmerald, new Location(3.5, 3, 1.5));
     *        test.spawnItem(fiveEmeralds, new Location(1.5, 3, 1.5));
     *
     * ```
     */
    spawnItem(itemStack: mojangminecraft.ItemStack, location: mojangminecraft.Location): mojangminecraft.Entity;
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
     * @throws This function can throw errors.
     */
    spawnWithoutBehaviorsAtLocation(entityTypeIdentifier: string, location: mojangminecraft.Location): mojangminecraft.Entity;
    /**
     * @remarks
     * Tests that a particular item entity is present at a
     * particular location. If not, an exception is thrown.
     * @param blockLocation
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
    spreadFromFaceTowardDirection(blockLocation: mojangminecraft.BlockLocation, fromFace: number, direction: number): void;
    /**
     * @remarks
     * Creates a new GameTestSequence - A set of steps that play
     * out sequentially within a GameTest.
     * @returns A new GameTestSequence with chaining methods that facilitate creating a set of steps.
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
     * @param blockLocation
     * Location of the block to test at.
     * @param isPresent
     * If true, this function tests whether a block of the
     * specified type is present. If false, tests that a block of
     * the specified type is not present.
     * @throws This function can throw errors.
     */
    succeedWhenBlockTypePresent(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation, isPresent: boolean): void;
    /**
     * @remarks
     * Tests for the presence of a component on every tick. When
     * the specified component is found, the test is marked as a
     * success.
     * @param entityTypeIdentifier
     * @param componentIdentifier
     * Type of component to test for the presence of. If no
     * namespace is specified, 'minecraft:' is assumed.
     * @param blockLocation
     * Block location of the entity to test.
     * @param hasComponent
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
     * @param blockLocation
     * Location of the entity to test for.
     * @param isPresent
     * If true, this function tests whether an entity of the
     * specified type is present. If false, tests that an entity of
     * the specified type is not present.
     * @throws This function can throw errors.
     */
    succeedWhenEntityPresent(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation, isPresent: boolean): void;
    /**
     * @remarks
     * Forces a mob to walk to a particular location. Usually used
     * in conjunction with methods like .spawnWithoutBehaviors to
     * have more predictable mob behaviors. Mobs will stop
     * navigation as soon as they intersect the target location.
     * @param mob
     * Mob entity to give orders to.
     * @param blockLocation
     * @param speedModifier
     * Adjustable modifier to the mob's walking speed.
     * @throws This function can throw errors.
     */
    walkTo(mob: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation, speedModifier: number): void;
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
    walkToLocation(mob: mojangminecraft.Entity, location: mojangminecraft.Location, speedModifier: number): void;
    /**
     * @remarks
     * From a BlockLocation with coordinates relative to the
     * GameTest structure block, returns a new BlockLocation with
     * coordinates relative to world. Rotation of the GameTest
     * structure is also taken into account.
     * @param relativeBlockLocation
     * @returns An absolute location relative to the GameTest command block.
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
     * @returns An absolute location relative to the GameTest command block.
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
 * @returns Returns a {@link mojang-gametest.RegistrationBuilder} object where additional options for this test can be specified via builder methods.
 * @example example1.js
 * ```typescript
 *        GameTest.register("ExampleTests", "alwaysFail", (test) => {
 *        test.fail("This test, runnable via '/gametest run ExampleTests:alwaysFail', will always fail");
 *        });
 *
 * ```
 */
export function register(testClassName: string, testName: string, testFunction: (arg: Test) => void): RegistrationBuilder;
