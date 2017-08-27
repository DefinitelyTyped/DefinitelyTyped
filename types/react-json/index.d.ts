// Type definitions for react-json 0.2
// Project: https://github.com/arqex/react-json
// Definitions by: Christoph Spielmann <https://github.com/spielc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export type OnChangeHandler = (value: any) => void;

export interface JsonProperties {
    value: any;
    onChange?: OnChangeHandler;
}

export class Json extends React.Component<JsonProperties> {
}
