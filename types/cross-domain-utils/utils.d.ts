import { CrossDomainWindowType, SameDomainWindowType, DomainMatcher } from './types';

export function isFileProtocol(win: SameDomainWindowType): boolean;

export function isAboutProtocol(win: SameDomainWindowType): boolean;

export function getParent(win?: CrossDomainWindowType): CrossDomainWindowType | null;

export function getOpener(win?: CrossDomainWindowType): CrossDomainWindowType | null;

export function canReadFromWindow(win: CrossDomainWindowType | SameDomainWindowType): boolean;

export function getActualDomain(win?: SameDomainWindowType): string;

export function getDomain(win?: SameDomainWindowType): string;

export function isBlankDomain(win: CrossDomainWindowType): boolean;

export function isActuallySameDomain(win: CrossDomainWindowType): boolean;

export function isSameDomain(win: CrossDomainWindowType | SameDomainWindowType): boolean;

export function assertSameDomain(win: CrossDomainWindowType | SameDomainWindowType): SameDomainWindowType;

export function getParents(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;

export function isAncestorParent(parent: CrossDomainWindowType, child: CrossDomainWindowType): boolean;

export function getFrames(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;

export function getAllChildFrames(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;

export function getTop(win?: CrossDomainWindowType): CrossDomainWindowType;

export function getNextOpener(win?: CrossDomainWindowType): CrossDomainWindowType;

export function getUltimateTop(win?: CrossDomainWindowType): CrossDomainWindowType;

export function getAllFramesInWindow(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;

export function getAllWindows(win?: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;

export function isTop(win: CrossDomainWindowType): boolean;

export function isFrameWindowClosed(frame: HTMLIFrameElement): boolean;

export function isWindowClosed(win: CrossDomainWindowType, allowMock?: boolean): boolean;

export function linkFrameWindow(frame: HTMLIFrameElement): void;

export function getUserAgent(win: SameDomainWindowType): string;

export function getFrameByName(win: CrossDomainWindowType, name: string): CrossDomainWindowType | null;

export function findChildFrameByName(win: CrossDomainWindowType, name: string): CrossDomainWindowType | null;

export function findFrameByName(win: CrossDomainWindowType, name: string): CrossDomainWindowType | null;

export function isParent(win: CrossDomainWindowType, frame: CrossDomainWindowType): boolean;

export function isOpener(parent: CrossDomainWindowType, child: CrossDomainWindowType): boolean;

export function getAncestor(win?: CrossDomainWindowType): CrossDomainWindowType | null;

export function getAncestors(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;

export function isAncestor(parent: CrossDomainWindowType, child: CrossDomainWindowType): boolean;

export function isPopup(win?: CrossDomainWindowType): boolean;

export function isIframe(win?: CrossDomainWindowType): boolean;

export function isFullpage(win?: CrossDomainWindowType): boolean;

export function getDistanceFromTop(win: CrossDomainWindowType): number;

export function getNthParent(win: CrossDomainWindowType, n?: number): CrossDomainWindowType | null;

export function getNthParentFromTop(win: CrossDomainWindowType, n?: number): CrossDomainWindowType;

export function isSameTopWindow(win1: CrossDomainWindowType, win2: CrossDomainWindowType): boolean;

export function matchDomain(pattern: DomainMatcher, origin: DomainMatcher): boolean;

export function stringifyDomainPattern(pattern: DomainMatcher): string;

export function getDomainFromUrl(url: string): string;

export function onCloseWindow(win: CrossDomainWindowType, callback: (...args: any[]) => any, delay?: number, maxtime?: number): { cancel: () => void };

export function isWindow(obj: any): boolean;

export function isBrowser(): boolean;

export function isCurrentDomain(domain: string): boolean;

export function isMockDomain(domain: string): boolean;

export function normalizeMockUrl(url: string): string;

export function closeWindow(win: CrossDomainWindowType): void;

export function getFrameForWindow(win: CrossDomainWindowType): HTMLElement;
