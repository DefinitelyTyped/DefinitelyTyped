import * as React from 'react';

declare class Affix extends React.Component<Affix.AffixProps> { }
export = Affix;

declare namespace Affix {
  // put AffixProps inside the exported namespace so it's importable in AutoAffix
  interface AffixProps {
    /**
     * Pixels to offset from top of screen when calculating position
     */
    offsetTop?: number;

    /**
     * When affixed, pixels to offset from top of viewport
     */
    viewportOffsetTop?: number;

    /**
     * Pixels to offset from bottom of screen when calculating position
     */
    offsetBottom?: number;

    /**
     * CSS class or classes to apply when at top
     */
    topClassName?: string;

    /**
     * Style to apply when at top
     */
    topStyle?: React.CSSProperties;

    /**
     * CSS class or classes to apply when affixed
     */
    affixClassName?: string;

    /**
     * Style to apply when affixed
     */
    affixStyle?: React.CSSProperties;

    /**
     * CSS class or classes to apply when at bottom
     */
    bottomClassName?: string;

    /**
     * Style to apply when at bottom
     */
    bottomStyle?: React.CSSProperties;

    /**
     * Callback fired when the right before the `affixStyle` and `affixStyle` props are rendered
     */
    onAffix?(): void;

    /**
     * Callback fired after the component `affixStyle` and `affixClassName` props have been rendered.
     */
    onAffixed?(): void;

    /**
     * Callback fired when the right before the `topStyle` and `topClassName` props are rendered
     */
    onAffixTop?(): void;

    /**
     * Callback fired after the component `topStyle` and `topClassName` props have been rendered.
     */
    onAffixedTop?(): void;

    /**
     * Callback fired when the right before the `bottomStyle` and `bottomClassName` props are rendered
     */
    onAffixBottom?(): void;

    /**
     * Callback fired after the component `bottomStyle` and `bottomClassName` props have been rendered.
     */
    onAffixedBottom?(): void;
  }
}
