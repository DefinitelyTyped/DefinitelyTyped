import { Block, BlockConfiguration, BlockInstance, BlockStyle, BlockSupports } from '../';

/**
 * Returns the block support value for a feature, if defined.
 *
 * @param nameOrType - Block name or type object
 * @param feature - Feature to retrieve
 * @param defaultSupports - Default value to return if not explicitly defined
 *
 * @returns Block support value.
 */
export function getBlockSupport(nameOrType: string | Block<any>, feature: keyof BlockSupports): unknown | undefined;
export function getBlockSupport<T>(
    nameOrType: string | Block<any>,
    feature: keyof BlockSupports,
    defaultSupports: T
): T extends string ? string : T extends number ? number : T extends boolean ? boolean : T;

/**
 * Returns a registered block type.
 */
// tslint:disable:no-unnecessary-generics
export function getBlockType<T = any>(name: string): Block<T> | undefined;

/**
 * Returns all registered blocks.
 */
export function getBlockTypes(): ReadonlyArray<Block<any>>;

/**
 * Returns an array with the child blocks of a given block.
 */
export function getChildBlockNames(blockName: string): string[];

/**
 * Retrieves the default block name, if set.
 */
export function getDefaultBlockName(): string | undefined;

/**
 * Retrieves name of block handling non-block content, or undefined if no
 * handler has been defined.
 */
export function getFreeformContentHandlerName(): string | undefined;

/**
 * Retrieves name of block used for handling grouping interactions.
 */
export function getGroupingBlockName(): string | undefined;

/**
 * Retrieves name of block handling unregistered block types, or undefined if no
 * handler has been defined.
 */
export function getUnregisteredTypeHandlerName(): string | undefined;

/**
 * Returns true if the block defines support for a feature, or false otherwise.
 *
 * @param nameOrType - Block name or type object.
 * @param feature - Feature to test.
 * @param defaultSupports - Whether feature is supported by default if not
 *                          explicitly defined.
 *
 * @returns Whether block supports feature.
 */
export function hasBlockSupport(
    nameOrType: string | Block<any>,
    feature: keyof BlockSupports,
    defaultSupports?: boolean
): boolean;

/**
 * Returns a boolean indicating if a block has child blocks or not.
 */
export function hasChildBlocks(blockName: string): boolean;

/**
 * Returns a boolean indicating if a block has at least one child block with
 * inserter support.
 */
export function hasChildBlocksWithInserterSupport(blockName: string): boolean;

/**
 * Determines whether or not the given block is a reusable block. This is a
 * special block type that is used to point to a global block stored via the
 * API.
 *
 * @param blockOrType - Block or Block Type to test.
 */
export function isReusableBlock(blockOrType: Block<any> | BlockInstance): boolean;

/**
 * Registers a new block style variation for the given block.
 *
 * @param blockName - Name of block (example: 'core/paragraph').
 * @param styleVariation - Object containing `name` which is the class name
 *                         applied to the block and `label` which identifies
 *                         the variation to the user.
 */
export function registerBlockStyle(blockName: string, styleVariation: BlockStyle): void;

/**
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made available as an option to any
 * editor interface where blocks are implemented.
 *
 * @param name - Block name.
 * @param settings - Block settings.
 *
 * @returns The block if it has been successfully registered, otherwise `undefined`.
 */
export function registerBlockType<T extends Record<string, any> = {}>(
    name: string,
    settings: BlockConfiguration<T>
): Block<T> | undefined;

/**
 * Assigns the default block name.
 */
export function setDefaultBlockName(name: string): void;

/**
 * Assigns name of block for handling non-block content.
 */
export function setFreeformContentHandlerName(blockName: string): void;

/**
 * Assigns name of block for handling block grouping interactions.
 */
export function setGroupingBlockName(name: string): void;

/**
 * Assigns name of block handling unregistered block types.
 */
export function setUnregisteredTypeHandlerName(blockName: string): void;

/**
 * Unregisters a block style variation for the given block.
 *
 * @param blockName - Name of block (example: 'core/paragraph').
 * @param styleVariationName - Name of class applied to the block.
 */
export function unregisterBlockStyle(blockName: string, styleVariationName: string): void;

/**
 * Unregisters a block.
 *
 * @param name - Block name.
 *
 * @returns The previous block value if successfully unregistered, otherwise `undefined`.
 */
export function unregisterBlockType(name: string): Block<any> | undefined;
