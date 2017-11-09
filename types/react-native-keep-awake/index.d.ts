// Type definitions for react-native-keep-awake 2.0
// Project: https://github.com/corbt/react-native-keep-awake
// Definitions by: huhuanming <https://github.com/huhuanming>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
declare class KeepAwake extends React.Component<{ children?: JSX.Element }> {
    static activate(): void;
    static deactivate(): void;
}
export default KeepAwake;
