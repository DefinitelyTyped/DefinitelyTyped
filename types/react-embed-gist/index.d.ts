import * as React from "react";

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
