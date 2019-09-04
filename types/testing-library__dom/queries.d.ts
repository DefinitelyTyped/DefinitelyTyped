import { Matcher, MatcherOptions } from './matches';
import { SelectorMatcherOptions } from './query-helpers';
import { WaitForElementOptions } from './wait-for-element';

export type QueryByBoundAttribute = (
    container: HTMLElement,
    id: Matcher,
    options?: MatcherOptions,
) => HTMLElement | null;

export type AllByBoundAttribute = (container: HTMLElement, id: Matcher, options?: MatcherOptions) => HTMLElement[];

export type FindAllByBoundAttribute = (
    container: HTMLElement,
    id: Matcher,
    options?: MatcherOptions,
    waitForElementOptions?: WaitForElementOptions,
) => Promise<HTMLElement[]>;

export type GetByBoundAttribute = (container: HTMLElement, id: Matcher, options?: MatcherOptions) => HTMLElement;

export type FindByBoundAttribute = (
    container: HTMLElement,
    id: Matcher,
    options?: MatcherOptions,
    waitForElementOptions?: WaitForElementOptions,
) => Promise<HTMLElement>;

export type QueryByText = (container: HTMLElement, id: Matcher, options?: SelectorMatcherOptions) => HTMLElement | null;

export type AllByText = (container: HTMLElement, id: Matcher, options?: SelectorMatcherOptions) => HTMLElement[];

export type FindAllByText = (
    container: HTMLElement,
    id: Matcher,
    options?: SelectorMatcherOptions,
    waitForElementOptions?: WaitForElementOptions,
) => Promise<HTMLElement[]>;

export type GetByText = (container: HTMLElement, id: Matcher, options?: SelectorMatcherOptions) => HTMLElement;

export type FindByText = (
    container: HTMLElement,
    id: Matcher,
    options?: SelectorMatcherOptions,
    waitForElementOptions?: WaitForElementOptions,
) => Promise<HTMLElement>;

export const getByLabelText: GetByText;
export const getAllByLabelText: AllByText;
export const queryByLabelText: QueryByText;
export const queryAllByLabelText: AllByText;
export const findByLabelText: FindByText;
export const findAllByLabelText: FindAllByText;
export const getByPlaceholderText: GetByBoundAttribute;
export const getAllByPlaceholderText: AllByBoundAttribute;
export const queryByPlaceholderText: QueryByBoundAttribute;
export const queryAllByPlaceholderText: AllByBoundAttribute;
export const findByPlaceholderText: FindByBoundAttribute;
export const findAllByPlaceholderText: FindAllByBoundAttribute;
export const getByText: GetByText;
export const getAllByText: AllByText;
export const queryByText: QueryByText;
export const queryAllByText: AllByText;
export const findByText: FindByText;
export const findAllByText: FindAllByText;
export const getByAltText: GetByBoundAttribute;
export const getAllByAltText: AllByBoundAttribute;
export const queryByAltText: QueryByBoundAttribute;
export const queryAllByAltText: AllByBoundAttribute;
export const findByAltText: FindByBoundAttribute;
export const findAllByAltText: FindAllByBoundAttribute;
export const getByTitle: GetByBoundAttribute;
export const getAllByTitle: AllByBoundAttribute;
export const queryByTitle: QueryByBoundAttribute;
export const queryAllByTitle: AllByBoundAttribute;
export const findByTitle: FindByBoundAttribute;
export const findAllByTitle: FindAllByBoundAttribute;
export const getByDisplayValue: GetByBoundAttribute;
export const getAllByDisplayValue: AllByBoundAttribute;
export const queryByDisplayValue: QueryByBoundAttribute;
export const queryAllByDisplayValue: AllByBoundAttribute;
export const findByDisplayValue: FindByBoundAttribute;
export const findAllByDisplayValue: FindAllByBoundAttribute;
export const getByRole: GetByBoundAttribute;
export const getAllByRole: AllByBoundAttribute;
export const queryByRole: QueryByBoundAttribute;
export const queryAllByRole: AllByBoundAttribute;
export const findByRole: FindByBoundAttribute;
export const findAllByRole: FindAllByBoundAttribute;
export const getByTestId: GetByBoundAttribute;
export const getAllByTestId: AllByBoundAttribute;
export const queryByTestId: QueryByBoundAttribute;
export const queryAllByTestId: AllByBoundAttribute;
export const findByTestId: FindByBoundAttribute;
export const findAllByTestId: FindAllByBoundAttribute;
