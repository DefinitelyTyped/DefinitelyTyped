import * as React from "react";

export interface CsvDownloadProps extends React.HTMLAttributes<HTMLButtonElement> {
    data: object | object[];
    filename?: string | undefined;
    delimiter?: string | undefined;
    headers?: string[] | undefined;
}

declare function CsvDownload(props: CsvDownloadProps): JSX.Element;

export default CsvDownload;
