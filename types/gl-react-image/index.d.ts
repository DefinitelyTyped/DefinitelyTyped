// Type definitions for gl-react-image 3.2
// Project: https://github.com/gre/gl-react-image
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface GLImageProps {
    center?: [number, number];
    resizeMode?: 'cover' | 'free' | 'contain' | 'stretch';
    source: any;
    zoom?: number;
}

export default class GLImage extends React.Component<GLImageProps> {}
