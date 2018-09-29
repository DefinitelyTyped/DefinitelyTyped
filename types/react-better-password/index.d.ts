// Type definitions for react-better-password
// Project: https://github.com/karaggeorge/react-better-password
// Definitions by: Mary Huynh <https://github.com/mhuynh1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare module 'react-better-password' {
    import * as React from 'react';

    export interface PasswordProps {
        className?: string,
        mask?: '•' | string,
        onChange: any,
        placeholder?: string,
        show?: boolean,
        timeout?: number,
        value?: string,
    }
    export default class Password extends React.Component<PasswordProps, any>{ }
}

