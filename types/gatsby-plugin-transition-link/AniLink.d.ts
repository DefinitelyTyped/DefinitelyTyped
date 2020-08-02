import * as CSS from 'csstype';
import * as React from 'react';

interface AniLinkFade {
    fade: boolean;
}
type AniLinkPaintDripColors =
    | {
          color?: string;
      }
    | {
          hex?: string;
      };
type AniLinkPaintDrip = AniLinkPaintDripColors & {
    paintDrip: boolean;
};
interface AniLinkSwipe {
    swipe: boolean;
}
interface AniLinkCover {
    cover: boolean;
    bg?: string;
}
type AniLinkTypes = AniLinkFade | AniLinkPaintDrip | AniLinkSwipe | AniLinkCover;
type AniLinkDirection = 'left' | 'right' | 'up' | 'down';
type AniLinkTop = 'exit' | 'entry';

interface AniLinkProps {
    to: string;
    direction?: AniLinkDirection;
    duration?: number;
    top?: AniLinkTop;
    entryOffset?: number;
}
declare class AniLink extends React.Component<AniLinkProps & AniLinkTypes> {}

export default AniLink;
