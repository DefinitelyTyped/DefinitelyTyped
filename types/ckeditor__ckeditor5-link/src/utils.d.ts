import { Element } from '@ckeditor/ckeditor5-engine';
import { DowncastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import Node from '@ckeditor/ckeditor5-engine/src/view/node';
import { Locale } from '@ckeditor/ckeditor5-utils';
import { LinkDecoratorDefinition } from './link';

export const LINK_KEYSTROKE: 'Ctrl+K';

export function isLinkElement(node: Node): boolean;

export function createLinkElement(href: string, api: DowncastConversionApi): void;

export function ensureSafeUrl(url: string): string;

export function getLocalizedDecorators(t: Locale['t'], decorators: LinkDecoratorDefinition[]): void;

export function normalizeDecorators(decorators: Record<string, LinkDecoratorDefinition>): LinkDecoratorDefinition[];

export function isImageAllowed(element: Element, schema: Schema): boolean;

export function isEmail(value: string): boolean;

export function addLinkProtocolIfApplicable(link: string, defaultProtocol: string): boolean;
