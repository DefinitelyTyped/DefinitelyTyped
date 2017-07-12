// Type definitions for @storybook/addon-notes 3.0
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// TODO: Once TS2.3 is released,
// https://github.com/Microsoft/TypeScript/issues/14819 should be fixed.
// Then, upgrade this package's typescript version to 2.3 and
// Remove the `declare module` wrapper.
// tslint:disable-next-line no-single-declare-module
declare module '@storybook/addon-notes' {
    import * as React from 'react';

    interface WithNotesProps extends React.HTMLProps<HTMLDivElement> {
        notes?: string;
    }

    const WithNotes: React.StatelessComponent<WithNotesProps>;
}
