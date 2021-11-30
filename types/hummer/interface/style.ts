export interface HummerCommonStyle {
    position?: 'relative' | 'absolute' | 'fixed'; // position: 'relative' | 'absolute' | 'fixed'
    flexDirection?: 'column' | 'row'; // flexDirection:'column' | 'row'
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'; // flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse'
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
    flexGrow?: number; // flexGrow: 1
    flexShrink?: number; // flexShrink: 1
    flexBasis?: number | string; // flexBasis: 500 | 'auto'
    alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    width?: number | string; // width: 10 | '10px'
    height?: number | string; // height: 10 | '10px'
    minWidth?: number | string; // minWidth: 10 | '10px'
    minHeight?: number | string; // minHeight: 10 | '10px'
    maxWidth?: number | string; // maxWidth: 10 | '10px'
    maxHeight?: number | string; // maxHeight: 10 | '10px'
    marginAll?: number | string; // margin: 10 | '10px'
    margin?: number | string; // margin: 10 | '10px'
    marginLeft?: number | string; // marginLeft: 10 | '10px'
    marginTop?: number | string; // marginTop: 10 | '10px'
    marginRight?: number | string; // marginRight: 10 | '10px'
    marginBottom?: number | string; // marginBottom: 10 | '10px'
    padding?: number | string; // padding: 10 | '10px'
    paddingAll?: number | string; // padding: 10 | '10px'
    paddingLeft?: number | string; // paddingLeft: 10 | '10px'
    paddingTop?: number | string; // paddingTop: 10 | '10px'
    paddingRight?: number | string; // paddingRight: 10 | '10px'
    paddingBottom?: number | string; // paddingBottom: 10 | '10px'
    left?: number | string; // left: 10 | '10px'
    top?: number | string; // top: 10 | '10px'
    right?: number | string; // right: 10 | '10px'
    bottom?: number | string; // bottom: 10 | '10px'
    display?: string; // display: 'none' | 'flex'
    transitionProperty?: string; // transitionProperty: 'transform, backgroundColor'
    transitionDuration?: number; // transitionDuration: '2, 2'
    transitionDelay?: number; // transitionDelay: 2
    transitionTimingFunction?: string; // transitionTimingFunction: 'linear'  linear: 线性运动  ease: 先加速后减速（结束时会特别慢）  ease-in: 加速运动  ease-out: 减速运动  ease-in-out: 先加速后减速
    backgroundColor?: string; // backgroundColor: '#FF0000' | '#FF000080' | 'linear-gradient(90deg #FF000080 #00FF0080)'
    backgroundImage?: string; // 同 Image 组件 的src属性
    boxSizing?: 'none' | 'border-box'; // boxSizing: 'none' | 'border-box'
    borderStyle?: 'none' | 'solid' | 'dashed' | 'dotted'; // borderStyle: 'none' | 'solid' | 'dashed' | 'dotted'
    borderLeftStyle?: 'none' | 'solid' | 'dashed' | 'dotted'; // borderLeftStyle: 'none' | 'solid' | 'dashed' | 'dotted'
    borderTopStyle?: 'none' | 'solid' | 'dashed' | 'dotted';
    borderRightStyle?: 'none' | 'solid' | 'dashed' | 'dotted'; // borderRightStyle: 'none' | 'solid' | 'dashed' | 'dotted'
    borderBottomStyle?: 'none' | 'solid' | 'dashed' | 'dotted'; // borderBottomStyle: 'none' | 'solid' | 'dashed' | 'dotted'
    borderColor?: string; // borderColor: '#000000'
    borderLeftColor?: string; // borderLeftColor: '#000000'
    borderTopColor?: string; // borderTopColor: '#000000'
    borderRightColor?: string; // borderRightColor: '#000000'
    borderBottomColor?: string; // borderBottomColor: '#000000'
    borderWidth?: number | string; // borderWidth: 10 | '10px'
    borderLeftWidth?: number | string; // borderLeftWidth: 10 | '10px'
    borderTopWidth?: number | string; // borderTopWidth: 10 | '10px'
    borderRightWidth?: number | string; // borderRightWidth: 10 | '10px'
    borderBottomWidth?: number | string; // borderBottomWidth: 10 | '10px'
    borderRadius?: number | string; // borderRadius: 10 | '10px'
    borderTopLeftRadius?: number | string; // borderTopLeftRadius: 10 | '10px'
    borderTopRightRadius?: number | string; // borderTopRightRadius: 10 | '10px'
    borderBottomLeftRadius?: number | string; // borderBottomLeftRadius: 10 | '10px'
    borderBottomRightRadius?: number | string; // borderBottomRightRadius: 10 | '10px'
    shadow?: string; // shadow: '5px 5px 10px #000000'
    opacity?: number; // opacity: 0.5
    visibility?: 'hidden' | 'visible'; // visibility: 'hidden' | 'visible'
    zIndex?: number; // zIndex: 1
    transform?: string; // transform: 'translate(100,100),scale(0.5),rotateZ(30)'
}

export interface viewStyle extends HummerCommonStyle {
    overflow?: 'visible' | 'hidden';
}

export interface textStyle extends HummerCommonStyle {
    color?: string; // color: '#000000'
    fontFamily?: string; // fontFamily: 'Times New Roman'
    fontSize?: number | string; // fontSize: 16 | '48px'
    fontWeight?: string; // fontWeight: 'normal' | 'bold'
    fontStyle?: 'normal' | 'italic'; // fontStyle: 'normal' | 'italic'
    textAlign?: 'left' | 'center' | 'right'; // textAlign: 'left' | 'center' | 'right'
    textVerticalAlign?: 'top' | 'center' | 'bottom'; // textVerticalAlign: 'top' | 'center' | 'bottom'
    textDecoration?: 'none' | 'underline' | 'line-through'; // textDecoration: 'none' | 'underline' | 'line-through'
    textOverflow?: 'clip' | 'ellipsis'; // textOverflow: 'clip' | 'ellipsis'
    textLineClamp?: number; // textLineClamp: 1
    letterSpacing?: number; // letterSpacing: 0.5
    lineSpacingMulti?: number; // lineSpacingMulti: 1.2
}

export interface buttonStyle extends HummerCommonStyle {
    color?: string; // color: '#000000'
    fontFamily?: string; // fontFamily: 'Times New Roman'
    fontSize?: number | string; // fontSize: 16 | '48px'
    textAlign?: 'left' | 'center' | 'right'; // textAlign: 'left' | 'center' | 'right'
}

export interface inputStyle extends HummerCommonStyle {
    type?: 'default' | 'number' | 'tel' | 'email' | 'password'; // type: 'default' | 'number' | 'tel' | 'email' | 'password'
    color?: string; // color: '#000000'
    placeholderColor?: string; // placeholderColor: '#999999'
    cursorColor?: string; // cursorColor: '#007AFF'
    textAlign?: 'left' | 'center' | 'right'; // textAlign: 'left' | 'center' | 'right'
    fontFamily?: string; // fontFamily: "New Times Roma"
    fontSize?: number | string; // fontSize: 16 | '48px'
    maxLength?: number; // maxLength: 10
    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send'; // returnKeyType: 'done' | 'go' | 'next' | 'search' | 'send'
}

export interface imageStyle extends HummerCommonStyle {
    resize?: 'origin' | 'contain' | 'cover' | 'stretch';
}

export interface textAreaStyle extends inputStyle {
    textLineClamp: number;
}

export interface switchStyle extends HummerCommonStyle {
    onColor: string;
    offColor: string;
    thumbColor: string;
}

export interface listStyle extends HummerCommonStyle {
    mode?: 'list' | 'grid' | 'waterfall'; // mode: 'list' | 'grid' | 'waterfall'
    scrollDirection?: 'vertical' | 'horizontal'; // scrollDirection: 'vertical' | 'horizontal'
    column?: number; // column: 3
    lineSpacing?: number | string; // lineSpacing: 4
    itemSpacing?: number | string; // itemSpacing: 4
    leftSpacing?: number | string; // leftSpacing: 4
    rightSpacing?: number | string; // rightSpacing: 4
    topSpacing?: number | string; // topSpacing: 4
    bottomSpacing?: number | string; // bottomSpacing: 4
}

export interface viewPagerStyle extends HummerCommonStyle {
    borderRadius?: number | string; // borderRadius: 4
    itemSpacing?: number | string; // itemSpacing: 4
    edgeSpacing?: number | string; // edgeSpacing: 4
    canLoop?: boolean; // canLoop: true
    autoPlay?: boolean; // autoPlay: true
    loopInterval?: number; // loopInterval: 2000
    scaleFactor?: number; // scaleFactor: 0.6
    alphaFactor?: number; // alphaFactor: 0.6
}
