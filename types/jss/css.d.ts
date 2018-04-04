// These CSS typings adapted from TypeStyle: https://github.com/typestyle/typestyle

import { Observable } from 'indefinite-observable';
import * as csstype from 'csstype';

type Length = string | number;

export type ObservableProperties<P> = {
    [K in keyof P]: P[K] | Observable<P[K]>
};

export type CSSProperties =
	& ObservableProperties<csstype.Properties<Length>>
	& ObservableProperties<csstype.PropertiesHyphen<Length>>;

export interface JssProps {
    '@global'?: CSSProperties;
    extend?: string;
    composes?: string | string[];
}

export interface JssExpand {
    animation:
        | {
              delay: CSSProperties['animationDelay'];
              direction: CSSProperties['animationDirection'];
              duration: CSSProperties['animationDuration'];
              iterationCount: CSSProperties['animationIterationCount'];
              name: CSSProperties['animationName'];
              playState: CSSProperties['animationPlayState'];
              timingFunction: CSSProperties['animationTimingFunction'];
          }
        | CSSProperties['animation'];
    background:
        | {
              attachment: CSSProperties['backgroundAttachment'];
              color: CSSProperties['backgroundColor'];
              image: CSSProperties['backgroundImage'];
              position:
                  | CSSProperties['backgroundPosition']
                  | [csstype.Properties['backgroundPosition'], csstype.Properties['backgroundPosition']]; // Can be written using array e.g. `[0 0]`
              repeat: CSSProperties['backgroundRepeat'];
              size:
                  | CSSProperties['backgroundSize']
                  | [csstype.Properties['backgroundSize'], csstype.Properties['backgroundSize']]; // Can be written using array e.g. `['center' 'center']`
          }
        | CSSProperties['background'];
    border:
        | {
              color: CSSProperties['borderColor'];
              style: CSSProperties['borderStyle'];
              width: CSSProperties['borderWidth'];
          }
        | CSSProperties['border'];
    boxShadow:
        | {
              x: Length;
              y: Length;
              blur: Length;
              spread: Length;
              color: CSSProperties['color'];
              inset?: 'inset'; // If you want to add inset you need to write 'inset: 'inset''
          }
        | CSSProperties['boxShadow'];
    flex:
        | {
              basis: CSSProperties['flexBasis'];
              direction: CSSProperties['flexDirection'];
              flow: CSSProperties['flexFlow'];
              grow: CSSProperties['flexGrow'];
              shrink: CSSProperties['flexShrink'];
              wrap: CSSProperties['flexWrap'];
          }
        | CSSProperties['flex'];
    font:
        | {
              family: CSSProperties['fontFamily'];
              size: CSSProperties['fontSize'];
              stretch: CSSProperties['fontStretch'];
              style: CSSProperties['fontStyle'];
              variant: CSSProperties['fontVariant'];
              weight: CSSProperties['fontWeight'];
          }
        | CSSProperties['font'];
    listStyle:
        | {
              image: CSSProperties['listStyleImage'];
              position: CSSProperties['listStylePosition'];
              type: CSSProperties['listStyleType'];
          }
        | CSSProperties['listStyle'];
    margin:
        | {
              bottom: CSSProperties['marginBottom'];
              left: CSSProperties['marginLeft'];
              right: CSSProperties['marginRight'];
              top: CSSProperties['marginTop'];
          }
        | CSSProperties['margin'];
    padding:
        | {
              bottom: CSSProperties['paddingBottom'];
              left: CSSProperties['paddingLeft'];
              right: CSSProperties['paddingRight'];
              top: CSSProperties['paddingTop'];
          }
        | CSSProperties['padding'];
    outline:
        | {
              color: CSSProperties['outlineColor'];
              style: CSSProperties['outlineStyle'];
              width: CSSProperties['outlineWidth'];
          }
        | CSSProperties['outline'];
    textShadow:
        | {
              x: Length;
              y: Length;
              blur: Length;
              color: CSSProperties['color'];
          }
        | CSSProperties['textShadow'];
    transition:
        | {
              delay: CSSProperties['transitionDelay'];
              duration: CSSProperties['transitionDuration'];
              property: CSSProperties['transitionProperty'];
              timingFunction: CSSProperties['transitionTimingFunction'];
          }
        | CSSProperties['transition'];
}

export type JssExpandArr = { [k in keyof JssExpand]?: JssExpand[k] | Array<JssExpand[k]> };

export type SimpleStyle = CSSProperties & JssProps & JssExpandArr;
export type Style = SimpleStyle | Observable<csstype.PropertiesHyphen<Length>>;
