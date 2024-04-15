import { IconType } from "@wordpress/components";

import { JSX } from "react";

export interface Category {
    slug: string;
    title: string;
    icon?: JSX.Element | IconType | null | undefined;
}

/**
 * Returns all the block categories.
 */
export function getCategories(): Category[];

/**
 * Sets the block categories.
 */
export function setCategories(categories: readonly Category[]): void;

/**
 * Updates a category.
 */
export function updateCategory(slug: string, category: Partial<Category>): void;
