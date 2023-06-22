// Type definitions for react-embed-gist 1.0
// Project: https://github.com/msaracevic/react-embed-gist#readme
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import * as React from 'react';

export interface Props {
    gist: `${string}/${string}`;
    wrapperClass?: string;
    loadingClass?: string;
    titleClass?: string;
    contentClass?: string;
    errorClass?: string;
    file?: string;
}

export default class ReactEmbedGist extends React.Component<Props> {
    render(): React.ReactNode;
}
