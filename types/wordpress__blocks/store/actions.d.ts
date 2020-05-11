import { BlockConfiguration, BlockStyle, Category } from '../';

export function addBlockStyles(blockName: string, styles: BlockStyle | readonly BlockStyle[]): void;
export function addBlockTypes(blockTypes: BlockConfiguration<any> | ReadonlyArray<BlockConfiguration<any>>): void;
export function removeBlockStyles(blockName: string, styleNames: string | readonly string[]): void;
export function removeBlockTypes(names: string | readonly string[]): void;
export function setCategories(categories: readonly Category[]): void;
export function setDefaultBlockName(name: string): void;
export function setFreeformFallbackBlockName(name: string): void;
export function setGroupingBlockName(name: string): void;
export function setUnregisteredFallbackBlockName(name: string): void;
export function updateCategory(slug: string, category: Partial<Category>): void;
