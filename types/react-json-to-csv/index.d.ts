// Type definitions for react-json-to-csv 1.0
// Project: https://github.com/coston/react-json-to-csv
// Definitions by: Nui Rattapon <https://github.com/nui-tech>
//                 Coston Perkins <https://github.com/coston>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface CsvDownloadProps extends React.HTMLAttributes<HTMLButtonElement> {
    data: object | object[];
    filename?: string;
}

declare function CsvDownload(props: CsvDownloadProps): JSX.Element;

export default CsvDownload;
