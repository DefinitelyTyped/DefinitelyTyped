// Type definitions for firestore-jest-mock 0.3
// Project: https://github.com/Upstatement/firestore-jest-mock
// Definitions by: Matt Del Signore <https://github.com/toastking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { FakeAuth } from './mocks/auth';
import { mockFireBase } from './mocks/firebase';
import { FakeFireStore } from './mocks/firestore';

declare module 'firebase-jest-mock' {
    export { FakeAuth, mockFireBase, FakeFireStore };
}
