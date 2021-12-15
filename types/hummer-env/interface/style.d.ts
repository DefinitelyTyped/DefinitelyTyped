interface HummerCommonStyle {
    /**
     * @summary position: 'relative' | 'absolute' | 'fixed'
     */
    position?: 'relative' | 'absolute' | 'fixed';
    /**
     * @summary flexDirection:'column' | 'row'
     */
    flexDirection?: 'column' | 'row';
    /**
     * @summary flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse'
     */
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    /**
     * @summary justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
     */
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    /**
     * @summary  alignItems: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
     */
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    /**
     * @summary alignContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
     */
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
    /**
     * @summary flexGrow: 1
     */
    flexGrow?: number;
    /**
     * @summary flexShrink: 1
     */
    flexShrink?: number;
    /**
     * @summary flexBasis: 500 | 'auto'
     */
    flexBasis?: number | string;
    /**
     * @summary alignSelf: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
     */
    alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    /**
     * @summary width: 10 | '10px'
     */
    width?: number | string;
    /**
     * @summary height: 10 | '10px'
     */
    height?: number | string;
    /**
     * @summary minWidth: 10 | '10px'
     */
    minWidth?: number | string;
    /**
     * @summary minHeight: 10 | '10px'
     */
    minHeight?: number | string;
    /**
     * @summary maxWidth: 10 | '10px'
     */
    maxWidth?: number | string;
    /**
     * @summary maxHeight: 10 | '10px'
     */
    maxHeight?: number | string;
    /**
     * @summary margin: 10 | '10px'
     */
    marginAll?: number | string;
    /**
     * @summary margin: 10 | '10px'
     */
    margin?: number | string;
    /**
     * @summary marginLeft: 10 | '10px'
     */
    marginLeft?: number | string;
    /**
     * @summary marginTop: 10 | '10px'
     */
    marginTop?: number | string;
    /**
     * @summary marginRight: 10 | '10px'
     */
    marginRight?: number | string;
    /**
     * @summary marginBottom: 10 | '10px'
     */
    marginBottom?: number | string;
    /**
     * @summary padding: 10 | '10px'
     */
    padding?: number | string;
    /**
     * @summary padding: 10 | '10px'
     */
    paddingAll?: number | string;
    /**
     * @summary paddingLeft: 10 | '10px'
     */
    paddingLeft?: number | string;
    /**
     * @summary paddingTop: 10 | '10px'
     */
    paddingTop?: number | string;
    /**
     * @summary paddingRight: 10 | '10px'
     */
    paddingRight?: number | string;
    /**
     * @summary paddingBottom: 10 | '10px'
     */
    paddingBottom?: number | string;
    /**
     * @summary left: 10 | '10px'
     */
    left?: number | string;
    /**
     * @summary top: 10 | '10px'
     */
    top?: number | string;
    /**
     * @summary right: 10 | '10px'
     */
    right?: number | string;
    /**
     * @summary bottom: 10 | '10px'
     */
    bottom?: number | string;
    /**
     * @summary display: 'none' | 'flex'
     */
    display?: string;
    /**
     * @summary transitionProperty: 'transform, backgroundColor'
     */
    transitionProperty?: string;
    /**
     * @summary transitionDuration: '2, 2'
     */
    transitionDuration?: number;
    /**
     * @summary transitionDelay: 2
     */
    transitionDelay?: number;
    /**
     * @summary transitionTimingFunction: 'linear'  linear: 线性运动  ease: 先加速后减速（结束时会特别慢）  ease-in: 加速运动  ease-out: 减速运动  ease-in-out: 先加速后减速
     */
    transitionTimingFunction?: string;
    /**
     * @summary backgroundColor: '#FF0000' | '#FF000080' | 'linear-gradient(90deg #FF000080 #00FF0080)'
     */
    backgroundColor?: string;
    /**
     * @summary 同 Image 组件 的src属性
     */
    backgroundImage?: string;
    /**
     * @summary boxSizing: 'none' | 'border-box'
     */
    boxSizing?: 'none' | 'border-box';
    /**
     * @summary borderStyle: 'none' | 'solid' | 'dashed' | 'dotted'
     */
    borderStyle?: 'none' | 'solid' | 'dashed' | 'dotted';
    /**
     * @summary borderLeftStyle: 'none' | 'solid' | 'dashed' | 'dotted'
     */
    borderLeftStyle?: 'none' | 'solid' | 'dashed' | 'dotted';
    /**
     * @summary borderTopStyle: 'none' | 'solid' | 'dashed' | 'dotted';
     */
    borderTopStyle?: 'none' | 'solid' | 'dashed' | 'dotted';
    /**
     * @summary borderRightStyle: 'none' | 'solid' | 'dashed' | 'dotted'
     */
    borderRightStyle?: 'none' | 'solid' | 'dashed' | 'dotted';
    /**
     * @summary borderBottomStyle: 'none' | 'solid' | 'dashed' | 'dotted'
     */
    borderBottomStyle?: 'none' | 'solid' | 'dashed' | 'dotted';
    /**
     * @summary borderColor: '#000000'
     */
    borderColor?: string;
    /**
     * @summary borderLeftColor: '#000000'
     */
    borderLeftColor?: string;
    /**
     * @summary borderTopColor: '#000000'
     */
    borderTopColor?: string;
    /**
     * @summary borderRightColor: '#000000'
     */
    borderRightColor?: string;
    /**
     * @summary borderBottomColor: '#000000'
     */
    borderBottomColor?: string;
    /**
     * @summary borderWidth: 10 | '10px'
     */
    borderWidth?: number | string;
    /**
     * @summary borderLeftWidth: 10 | '10px'
     */
    borderLeftWidth?: number | string;
    /**
     * @summary borderTopWidth: 10 | '10px'
     */
    borderTopWidth?: number | string;
    /**
     * @summary borderRightWidth: 10 | '10px'
     */
    borderRightWidth?: number | string;
    /**
     * @summary borderBottomWidth: 10 | '10px'
     */
    borderBottomWidth?: number | string;
    /**
     * @summary borderRadius: 10 | '10px'
     */
    borderRadius?: number | string;
    /**
     * @summary borderTopLeftRadius: 10 | '10px'
     */
    borderTopLeftRadius?: number | string;
    /**
     * @summary borderTopRightRadius: 10 | '10px'
     */
    borderTopRightRadius?: number | string;
    /**
     * @summary borderBottomLeftRadius: 10 | '10px'
     */
    borderBottomLeftRadius?: number | string;
    /**
     * @summary borderBottomRightRadius: 10 | '10px'
     */
    borderBottomRightRadius?: number | string;
    /**
     * @summary shadow: '5px 5px 10px #000000'
     */
    shadow?: string;
    /**
     * @summary opacity: 0.5
     */
    opacity?: number;
    /**
     * @summary visibility: 'hidden' | 'visible'
     */
    visibility?: 'hidden' | 'visible';
    /**
     * @summary zIndex: 1
     */
    zIndex?: number;
    /**
     * @summary transform: 'translate(100,100),scale(0.5),rotateZ(30)'
     */
    transform?: string;
}

interface ViewStyle extends HummerCommonStyle {
    overflow?: 'visible' | 'hidden';
}

interface TextStyle extends HummerCommonStyle {
    color?: string; // color: '#000000'
    /**
     * @summary fontFamily: 'Times New Roman'
     */
    fontFamily?: string;
    /**
     * @summary fontSize: 16 | '48px'
     */
    fontSize?: number | string;
    /**
     * @summary fontWeight: 'normal' | 'bold'
     */
    fontWeight?: string;
    /**
     * @summary fontStyle: 'normal' | 'italic'
     */
    fontStyle?: 'normal' | 'italic';
    /**
     * @summary textAlign: 'left' | 'center' | 'right'
     */
    textAlign?: 'left' | 'center' | 'right';
    /**
     * @summary textVerticalAlign: 'top' | 'center' | 'bottom'
     */
    textVerticalAlign?: 'top' | 'center' | 'bottom';
    /**
     * @summary textDecoration: 'none' | 'underline' | 'line-through'
     */
    textDecoration?: 'none' | 'underline' | 'line-through';
    /**
     * @summary textOverflow: 'clip' | 'ellipsis'
     */
    textOverflow?: 'clip' | 'ellipsis';
    /**
     * @summary textLineClamp: 1
     */
    textLineClamp?: number;
    /**
     * @summary letterSpacing: 0.5
     */
    letterSpacing?: number;
    /**
     * @summary lineSpacingMulti: 1.2
     */
    lineSpacingMulti?: number;
}

interface ButtonStyle extends HummerCommonStyle {
    /**
     * @summary color: '#000000'
     */
    color?: string;
    /**
     * @summary fontFamily: 'Times New Roman'
     */
    fontFamily?: string;
    /**
     * @summary fontSize: 16 | '48px'
     */
    fontSize?: number | string;
    /**
     * @summary textAlign: 'left' | 'center' | 'right'
     */
    textAlign?: 'left' | 'center' | 'right';
}

interface InputStyle extends HummerCommonStyle {
    /**
     * @summary type: 'default' | 'number' | 'tel' | 'email' | 'password'
     */
    type?: 'default' | 'number' | 'tel' | 'email' | 'password';
    /**
     * @summary color: '#000000'
     */
    color?: string;
    /**
     * @summary placeholderColor: '#999999'
     */
    placeholderColor?: string;
    /**
     * @summary cursorColor: '#007AFF'
     */
    cursorColor?: string;
    /**
     * @summary textAlign: 'left' | 'center' | 'right'
     */
    textAlign?: 'left' | 'center' | 'right';
    /**
     * @summary fontFamily: "New Times Roma"
     */
    fontFamily?: string;
    /**
     * @summary fontSize: 16 | '48px'
     */
    fontSize?: number | string;
    /**
     * @summary maxLength: 10
     */
    maxLength?: number;
    /**
     * @summary returnKeyType: 'done' | 'go' | 'next' | 'search' | 'send'
     */
    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
}

interface ImageStyle extends HummerCommonStyle {
    resize?: 'origin' | 'contain' | 'cover' | 'stretch';
}

interface TextAreaStyle extends InputStyle {
    textLineClamp?: number;
}

interface SwitchStyle extends HummerCommonStyle {
    onColor?: string;
    offColor?: string;
    thumbColor?: string;
}

interface ListStyle extends HummerCommonStyle {
    /**
     * @summary mode: 'list' | 'grid' | 'waterfall'
     */
    mode?: 'list' | 'grid' | 'waterfall';
    /**
     * @summary scrollDirection: 'vertical' | 'horizontal'
     */
    scrollDirection?: 'vertical' | 'horizontal';
    /**
     * @summary column: 3
     */
    column?: number;
    /**
     * @summary lineSpacing: 4
     */
    lineSpacing?: number | string;
    /**
     * @summary itemSpacing: 4
     */
    itemSpacing?: number | string;
    /**
     * @summary leftSpacing: 4
     */
    leftSpacing?: number | string;
    /**
     * @summary rightSpacing: 4
     */
    rightSpacing?: number | string;
    /**
     * @summary topSpacing: 4
     */
    topSpacing?: number | string;
    /**
     * @summary bottomSpacing: 4
     */
    bottomSpacing?: number | string;
}

interface ViewPagerStyle extends HummerCommonStyle {
    /**
     * @summary borderRadius: 4
     */
    borderRadius?: number | string;
    /**
     * @summary itemSpacing: 4
     */
    itemSpacing?: number | string;
    /**
     * @summary edgeSpacing: 4
     */
    edgeSpacing?: number | string;
    /**
     * @summary canLoop: true
     */
    canLoop?: boolean;
    /**
     * @summary autoPlay: true
     */
    autoPlay?: boolean;
    /**
     * @summary loopInterval: 2000
     */
    loopInterval?: number;
    /**
     * @summary scaleFactor: 0.6
     */
    scaleFactor?: number;
    /**
     * @summary alphaFactor: 0.6
     */
    alphaFactor?: number;
}
