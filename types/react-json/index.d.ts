// Type definitions for react-json 0.2
// Project: https://github.com/arqex/react-json
// Definitions by: Christoph Spielmann <https://github.com/spielc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

type OnChangeHandler = (value: any) => void;

interface JsonProperties {
    value: any;
    onChange?: OnChangeHandler;
}

declare class Json extends React.Component<JsonProperties> {
}

export = Json;
