import * as React from 'react';

const initialStyle: ReactDOM.CSSProperties = { fontWeight: 'initial' };
const initialStyleTest = <div style={initialStyle} />;

const borderRadiusStyle: ReactDOM.CSSProperties = { borderRadius: 5, borderTopRightRadius: '20%' };
const borderRadiusStyleTest = <div style={borderRadiusStyle} />;

const backgroundAttachmentStyle: ReactDOM.CSSProperties = { backgroundAttachment: 'fixed' };
const backgroundAttachmentStyleTest = <div style={backgroundAttachmentStyle} />;

const columnCountStyle: ReactDOM.CSSProperties = { columnCount: 'auto' };
const columnCountStyleTest = <div style={columnCountStyle} />;

const fontSizeAdjustStyle: ReactDOM.CSSProperties = { fontSizeAdjust: 'none' };
const fontSizeAdjustStyleTest = <div style={fontSizeAdjustStyle} />;

const fontStretchStyle: ReactDOM.CSSProperties = { fontStretch: 'condensed' };
const fontStretchStyleTest = <div style={fontStretchStyle} />;

const fontStyleStyle: ReactDOM.CSSProperties = { fontStyle: 'italic' };
const fontStyleStyleTest = <div style={fontStyleStyle} />;

const fontWeightStyle: ReactDOM.CSSProperties = { fontWeight: 400 };
const fontWeightStyleTest = <div style={fontWeightStyle} />;

const justifyContentStyle: ReactDOM.CSSProperties = { justifyContent: 'space-evenly' };
const justifyContentStyleTest = <div style={justifyContentStyle} />;

const boxShadowStyle: ReactDOM.CSSProperties = { boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)' };
const boxShadowStyleTest = <div style={boxShadowStyle} />;

const overflowStyle: ReactDOM.CSSProperties = { overflow: 'auto', overflowX: 'visible', overflowY: 'scroll' };
const overflowStyleTest = <div style={overflowStyle} />;

const positionStyle: ReactDOM.CSSProperties = { position: 'relative' };
const positionStyleTest = <div style={positionStyle} />;

// SVG specific style attribute declarations

const fillOpacityStyle: ReactDOM.CSSProperties = { fillOpacity: 0.3 };
const fillOpacityStyleTest = <svg style={fillOpacityStyle} />;

const strokeOpacityStyle: ReactDOM.CSSProperties = { strokeOpacity: 0.3 };
const strokeOpacityStyleTest = <svg style={strokeOpacityStyle} />;

const strokeWidthStyle: ReactDOM.CSSProperties = { strokeWidth: '10px' };
const strokeWidthStyleTest = <svg style={strokeWidthStyle} />;
