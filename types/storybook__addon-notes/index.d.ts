// Type definitions for @storybook/addon-notes 3.0
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export interface WithNotesProps extends React.HTMLProps<HTMLDivElement> {
    notes?: string;
}

export const WithNotes: React.StatelessComponent<WithNotesProps>;
