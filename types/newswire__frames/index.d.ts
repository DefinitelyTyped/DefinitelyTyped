// For the embedded page:
export function initFrame(): void;
export function initFrameAndPoll(delay?: number): void;
export function sendFrameHeight(height?: number): void;
export function sendHeightOnLoad(): void;
export function sendHeightOnResize(): void;
export function sendHeightOnFramerInit(): void;
export function sendHeightOnPoll(delay?: number): void;

// For the host:
export type FramerOptions = Partial<{
  src: string | null;
  attributes: Record<string, string>;
}>;

export class Framer {
  constructor(container: HTMLElement, options?: FramerOptions);
}

export function observeIframe(element: HTMLIFrameElement): (() => void);

export function autoInitFrames(): void;
