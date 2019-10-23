import * as React from 'react';

const initialStyle: React.CSSProperties = { fontWeight: 'initial' };
const initialStyleTest = <div style={initialStyle} />;

const backgroundAttachmentStyle: React.CSSProperties = { backgroundAttachment: 'fixed' };
const backgroundAttachmentStyleTest = <div style={backgroundAttachmentStyle} />;

const columnCountStyle: React.CSSProperties = { columnCount: 'auto' };
const columnCountStyleTest = <div style={columnCountStyle} />;

const fontSizeAdjustStyle: React.CSSProperties = { fontSizeAdjust: 'none' };
const fontSizeAdjustStyleTest = <div style={fontSizeAdjustStyle} />;

const fontStretchStyle: React.CSSProperties = { fontStretch: 'condensed' };
const fontStretchStyleTest = <div style={fontStretchStyle} />;

const fontStyleStyle: React.CSSProperties = { fontStyle: 'italic' };
const fontStyleStyleTest = <div style={fontStyleStyle} />;

const fontWeightStyle: React.CSSProperties = { fontWeight: 400 };
const fontWeightStyleTest = <div style={fontWeightStyle} />;

const justifyContentStyle: React.CSSProperties = { justifyContent: 'space-evenly' };
const justifyContentStyleTest = <div style={justifyContentStyle} />;

const boxShadowStyle: React.CSSProperties = { boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)' };
const boxShadowStyleTest = <div style={boxShadowStyle} />;

const overflowStyle: React.CSSProperties = { overflow: 'auto', overflowX: 'visible', overflowY: 'scroll' };
const overflowStyleTest = <div style={overflowStyle} />;

const positionStyle: React.CSSProperties = { position: 'relative' };
const positionStyleTest = <div style={positionStyle} />;

// SVG specific style attribute declarations

const fillOpacityStyle: React.CSSProperties = { fillOpacity: 0.3 };
const fillOpacityStyleTest = <svg style={fillOpacityStyle} />;

const strokeOpacityStyle: React.CSSProperties = { strokeOpacity: 0.3 };
const strokeOpacityStyleTest = <svg style={strokeOpacityStyle} />;

const strokeWidthStyle: React.CSSProperties = { strokeWidth: '10px' };
const strokeWidthStyleTest = <svg style={strokeWidthStyle} />;
