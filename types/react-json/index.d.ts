import * as React from "react";

type OnChangeHandler = (value: any) => void;

interface JsonProperties {
    value: any;
    onChange?: OnChangeHandler | undefined;
}

declare class Json extends React.Component<JsonProperties> {
}

export = Json;
